import bcrypt from "bcrypt";
import { connectToDatabase } from "../../utils/db"; // Helper για σύνδεση με MongoDB

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    // Σύνδεση με τη βάση δεδομένων
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");

    // Έλεγχος αν ο χρήστης υπάρχει ήδη
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Κρυπτογράφηση κωδικού
    const hashedPassword = await bcrypt.hash(password, 10);

    // Αποθήκευση νέου χρήστη στη βάση δεδομένων
    await usersCollection.insertOne({
      username,
      email,
      password: hashedPassword,
    });

    // Επιστροφή επιτυχούς απάντησης
    res.status(200).json({ message: "User registered successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
