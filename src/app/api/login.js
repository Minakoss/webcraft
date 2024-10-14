import bcrypt from "bcrypt";
import { connectToDatabase } from "../../utils/db"; // Helper για σύνδεση με MongoDB

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Σύνδεση με τη βάση δεδομένων
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");

    // Εύρεση χρήστη με βάση το username
    const user = await usersCollection.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Έλεγχος αν ο κωδικός είναι σωστός
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // Αν θέλεις να χρησιμοποιήσεις sessions, μπορείς να αποθηκεύσεις τον χρήστη στη συνεδρία
      req.session.user = user; // Αν χρησιμοποιείς sessions

      // Επιστροφή επιτυχούς απάντησης
      res.status(200).json({ message: "Login successful", success: true });
    } else {
      // Απάντηση αν ο κωδικός είναι λανθασμένος
      res.status(400).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
