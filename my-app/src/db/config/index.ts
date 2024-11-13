import { MongoClient } from "mongodb";

const connectionstring = process.env.MONGODB_CONNECTION_STRING

if (!connectionstring) {
    throw new Error("MONGODB_CONNECTION_STRING is not defined")
}

let client: MongoClient;

export const getMongoClientInstance = async () => {
    if (!client) {
        client = await MongoClient.connect(connectionstring);
        await client.connect()
    }

    return client
}