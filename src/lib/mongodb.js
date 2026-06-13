import { MongoClient, ServerApiVersion } from "mongodb";

// import dns from "node:dns";
// dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const uri = process.env.MONGODB_URI?.trim();

if (!uri) throw new Error("Missing MONGODB_URI environment variable!");

export const clientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  connectTimeoutMS: 10000,
  socketTimeoutMS: 10000,
};

let client;
let cachedCollections = null;

export const collections = async () => {
  if (cachedCollections) {
    return cachedCollections;
  }

  if (!client) {
    client = new MongoClient(uri, clientOptions);
    await client.connect();
  }

  const database = client.db("chronos-db");
  const blogsCollection = database.collection("blogs");

  return {
    blogs: blogsCollection,
  };
};
