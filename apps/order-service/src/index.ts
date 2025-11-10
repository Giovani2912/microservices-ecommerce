import Fastify from 'fastify';
import Clerk from "@clerk/fastify";
import { connectOrderDB } from '@repo/order-db';
import { orderRoute } from './routes/order';
import { consumer, producer } from './utils/kafka';
import { runKafkaSubscriptions } from './utils/subscriptions';

const fastify = Fastify();

fastify.register(Clerk.clerkPlugin);

fastify.get("/health", async (request, reply) => {
    return reply.status(200).send({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now(),
    });
})

fastify.register(orderRoute);

const start = async () => {
    try {
        Promise.all([
            await connectOrderDB(),
            await producer.connect(),
            await consumer.connect()
        ]);

        await runKafkaSubscriptions();

        await fastify.listen({ port: 8001 })
        console.log('✅ Order Service is running on port 8001');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
start();