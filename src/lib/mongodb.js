import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const clientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
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
