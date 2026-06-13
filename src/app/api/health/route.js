import { clientOptions, uri } from "@/lib/mongodb";
import { MongoClient } from "mongodb";

// import dns from "node:dns";
// dns.setServers(["1.1.1.1", "8.8.8.8"]);

export async function GET() {
  let client;

  try {
    if (!uri) throw new Error("Missing MONGODB_URI environment variable!");

    client = new MongoClient(uri, clientOptions);

    await client.connect();

    const db = client.db("chronos-db");
    await db.command({ ping: 1 });

    const collections = await db.listCollections({ name: "blogs" }).toArray();

    return Response.json(
      {
        status: "healthy",
        message: "MongoDB connection successful!",
        timestamp: new Date().toISOString(),
        database: "chronos-db",
        collections:
          collections.length > 0
            ? "blogs collection exists!"
            : "no collections checked!",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("MongoDB Health Check Failed: ", error);

    return Response.json(
      {
        status: "unhealthy",
        message: "MongoDB connection failed!",
        error: error.message || "Health check failed!",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
