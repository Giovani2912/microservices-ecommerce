import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { clerkMiddleware, getAuth } from '@clerk/express'
// import { shouldBeUser } from "./middleware/authMiddleware";
import productRouter from './routes/product.route';
import categoryRouter from './routes/category.route';
import { consumer, producer } from './utils/kakfa';

const app = express();

app.use(cors({
    origin: ['http://localhost:3002', 'http://localhost:3003'],
    credentials: true
}))
app.use(express.json());
app.use(clerkMiddleware());

app.get("/health", (req: Request, res: Response) => {
    return res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now(),
    })
});

const PORT = process.env.PORT || 8000;

app.use("/products", productRouter)
app.use("/categories", categoryRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ message });
});

// app.listen(PORT, () => {
//     producer.connect();
//     consumer.connect();
//     console.log(`✅ Product Service is running on port ${PORT}`);
// });


const start = async () => {
    try {
        Promise.all([
            await producer.connect(),
            await consumer.connect()
        ]);

        app.listen(PORT, () => {
            console.log(`✅ Product Service is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
}

start();