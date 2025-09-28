import express, { Request, Response } from 'express';
import cors from 'cors';
import { clerkMiddleware, getAuth } from '@clerk/express'
import { shouldBeUser } from "./middleware/authMiddleware.js";

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

app.get("/test", shouldBeUser, (req: Request, res: Response) => {
    return res.json({ message: "Product Service is authenticated!", userId: req.userId });
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`✅ Product Service is running on port ${PORT}`);
});
