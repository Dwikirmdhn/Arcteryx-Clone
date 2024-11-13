import { Db, ObjectId } from "mongodb"
import { getMongoClientInstance } from "../config"

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "fashion_shop"
const COLLECTION_PRODUCT = "Products"

export type ProductModel = {
    _id: ObjectId
    name: string
    slug: string
    description: string
    excerpt: string
    price: number
    tags: string[]
    thumbnail: string
    images: string[]
    createdAt: string
    updatedAt: string
}

export const getDb = async () => {
    const client = await getMongoClientInstance()
    const db: Db = client.db(DATABASE_NAME)

    return db
}

export const getFeaturedProducts = async () => {
    const db = await getDb();

    const products = (await db
        .collection(COLLECTION_PRODUCT)
        .find({})
        .limit(10)
        .toArray()) as ProductModel[];

    return products;
};

type GetProductsResponse = {
    products: ProductModel[]
    totalProducts: number
}

export const getProducts = async (
    query: Record<string, unknown>,
    skip: number,
    limit: number
) => {
    const db = await getDb();

    const productsCollection = db.collection(COLLECTION_PRODUCT);
    const products = (await productsCollection
        .find(query)
        .skip(skip)
        .limit(limit)
        .toArray()) as ProductModel[];

    const totalProducts = await productsCollection.countDocuments(query);

    const result: GetProductsResponse = {
        products,
        totalProducts,
    };

    return result;
};

export const getProductBySlug = async (slug: string) => {
    try {
        const db = await getDb();
        const product = await db.collection(COLLECTION_PRODUCT).findOne({
            slug: slug,
        });

        return product;
    } catch (error) {
        console.error("Failed to search product by slug:", error);
        throw new Error("Failed to search product by slug");
    }
};