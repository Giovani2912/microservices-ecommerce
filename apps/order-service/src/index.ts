import Fastify from 'fastify';
import { clerkPlugin, getAuth } from '@clerk/fastify'
import { shouldBeUser } from './middleware/authMiddleware.js';

const fastify = Fastify();

fastify.register(clerkPlugin)

fastify.get("/health", async (request, reply) => {
    return reply.status(200).send({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now(),
    });
})

fastify.get("/test", { preHandler: shouldBeUser }, async (request, reply) => {

    return reply.status(200).send({
        message: `Hello, your userId is ${request.userId}`,
    });
})

const start = async () => {
    try {
        await fastify.listen({ port: 8001 })
        console.log('✅ Order Service is running on port 8001');
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}
start();