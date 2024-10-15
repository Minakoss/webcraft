// components/Header.js
"use client"; // Ensures it runs on the client-side

import { useRouter } from "next/navigation";
import { FaGlobe } from "react-icons/fa";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const router = useRouter(); // Use next/navigation's useRouter

  const [language, setLanguage] = useState("en"); // Default language: English
  // Toggle language
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "gr" : "en"));
  };

  const content = {
    en: {
      title: "WebBlend",
      subtitle: "Front-end Developer Services",
      description:
        "Building perfect, engaging, and accessible digital experiences.",
      welcomeTitle: "Welcome to WebBlend",
      welcomeDescription:
        "At WebBlend, we bring your digital ideas to life through modern, innovative, and beautifully crafted websites and applications. Our team of expert developers and designers specializes in creating high-performance, user-friendly web solutions that are not only functional but visually captivating.",
      description1:
        "We believe that design is more than just aesthetics—it’s about creating seamless and engaging user experiences that connect with audiences on every device. Whether you need a dynamic website, an interactive web application, or a bespoke digital solution, we combine cutting-edge technology with the latest design trends to deliver products that stand out. Explore our portfolio of pixel-perfect projects and let us help you build the future of your digital presence.",
      servicesTitle: "Services We Offer:",
      services: [
        "Custom website development",
        "Web and mobile application design",
        "UI/UX design and consultation",
        "Responsive design for all devices",
        "Content management systems",
        "Social content/management",
      ],
      title1:
        "Let WebBlend transform your vision into reality. Together, we can build something remarkable.",
      description2:
        "This text positions your brand as a forward-thinking developer of modern websites and applications with an emphasis on high-quality design. Feel free to adjust it to match your brand’s tone or specific services!",
    },
    gr: {
      title: "WebBlend",
      subtitle: "Υπηρεσίες Front-end Developer",
      description:
        "Δημιουργούμε τέλειες, ελκυστικές και προσβάσιμες ψηφιακές εμπειρίες.",
      welcomeTitle: "WebBlend",
      welcomeDescription:
        "Στην WebBlend, ζωντανεύουμε τις ψηφιακές σας ιδέες μέσω σύγχρονων, καινοτόμων ιστοσελίδων Η ομάδα μας ειδικεύεται στη δημιουργία λύσεων υψηλής απόδοσης, φιλικές προς το χρήστη που δεν είναι μόνο λειτουργικές αλλά και οπτικά σαγηνευτικές.",
      description1:
        "Πιστεύουμε ότι η σχεδίαση είναι κάτι περισσότερο από απλή αισθητική - έχει να κάνει με τη δημιουργία απρόσκοπτων και ελκυστικών εμπειριών χρήστη που συνδέονται με το κοινό σε κάθε συσκευή. Είτε χρειάζεστε έναν δυναμικό ιστότοπο, μια διαδραστική εφαρμογή Ιστού ή μια προσαρμοσμένη ψηφιακή λύση, συνδυάζουμε την αιχμή τεχνολογία με τις πιο πρόσφατες τάσεις σχεδιασμού για την παράδοση προϊόντων που ξεχωρίζουν.",
      servicesTitle: "Υπηρεσίες που Προσφέρουμε:",
      services: [
        "Εξατομικευμένη ανάπτυξη ιστοσελίδων",
        "Σχεδιασμός ιστοσελίδων και εφαρμογών για κινητά",
        "Σχεδιασμός UI/UX και συμβουλευτική",
        "Responsive σχεδιασμός για όλες τις συσκευές",
        "Συστήματα διαχείρισης περιεχομένου",
        "Διαχείριση κοινωνικών δικτύων",
      ],
      title1:
        "Αφήστε το WebBlend να μεταμορφώσει το όραμά σας σε πραγματικότητα.",

      description2:
        "This text positions your brand as a forward-thinking developer of modern websites and applications with an emphasis on high-quality design. Feel free to adjust it to match your brand’s tone or specific services!",
    },
  };

  const currentContent = content[language];

  return (
    <div className="absolute top-4 right-4 flex space-x-4">
      {/* Login Icon */}
      <button onClick={() => router.push("/login")}>
        <FiLogIn className="text-xl text-gray-400" />
      </button>

      {/* Register Icon */}
      <button onClick={() => router.push("/register")}>
        <FiUserPlus className="text-xl text-gray-400" />
      </button>

      {/* Language Toggle */}
      <button onClick={toggleLanguage}>
        <FaGlobe className="text-xl text-gray-400" />
      </button>
    </div>
  );
};

export default Header;
