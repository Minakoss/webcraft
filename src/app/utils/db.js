import { MongoClient } from "mongodb";

let client;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (!client.isConnected()) await client.connect();
  }
  return client.db("webblendDB"); // Αντικατάστησε το 'webblendDB' με το όνομα της βάσης σου
}
