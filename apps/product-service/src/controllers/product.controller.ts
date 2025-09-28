import { Request, Response } from "express";
import { Prisma, prisma } from "@repo/product-db";

export const createProduct = async (req: Request, res: Response) => {
    // Logic to create a product
    const data: Prisma.ProductCreateInput = req.body;

    const { colors, images } = data;

    if (!colors || !Array.isArray(colors) || colors.length === 0) {
        return res.status(400).json({ message: "Colors array is required!" });
    }

    if (!images || typeof images !== "object") {
        return res.status(400).json({ message: "Image object is required!" });
    }

    // Verify if exists a color in color array, and not exists in images object, because ALWAYS the color must have an image
    const missingColors = colors.filter((color) => !(color in images));
    if (missingColors.length > 0) {
        return res.status(400).json({ message: "Each color must have a image!", missingColors });
    }

    const product = await prisma.product.create({
        data,
    });

    res.status(201).json(product);
}

export const updateProduct = async (req: Request, res: Response) => {
    // Logic to update a product
    const { id } = req.params;
    const data: Prisma.ProductUpdateInput = req.body;

    const updatedProduct = await prisma.product.update({
        where: { id: id },
        data,
    });

    res.status(200).json(updatedProduct);
}

export const deleteProduct = async (req: Request, res: Response) => {
    // Logic to delete a product
    const { id } = req.params;

    const deletedProduct = await prisma.product.delete({
        where: { id: id },
    });

    res.status(200).json(deletedProduct);
}

export const getProducts = async (req: Request, res: Response) => {
    // Logic to get all products and filtering

    const { sort, category, search, limit } = req.query;

    const orderBy = (() => {
        switch (sort) {
            case "asc":
                return { price: Prisma.SortOrder.asc };
                break;
            case "desc":
                return { price: Prisma.SortOrder.desc };
                break;
            case "oldest":
                return { createdAt: Prisma.SortOrder.asc };
            default:
                return { createdAt: Prisma.SortOrder.desc };
        }
    })();

    const products = await prisma.product.findMany({
        where: {
            category: {
                slug: category as string,
            },
            name: {
                contains: search as string,
                mode: "insensitive",
            }
        },
        orderBy,
        take: limit ? Number(limit) : undefined,
    });
    return res.status(200).json(products);
}

export const getProduct = async (req: Request, res: Response) => {
    // Logic to get a single product by id
    const { id } = req.params;
    const product = await prisma.product.findUnique({
        where: { id: id },
    });

    return res.status(200).json(product);
}