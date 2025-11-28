// server/server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

// Autoriser les requêtes depuis ton frontend
app.use(cors());
app.use(express.json());

// Connexion à la base MySQL
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // ton mot de passe MySQL
  database: "comgio_site"
});

// Test de connexion
db.getConnection((err, connection) => {
  if (err) {
    console.error("Erreur de connexion à la BDD :", err);
  } else {
    console.log("Connecté à la base de données MySQL !");
    connection.release();
  }
});

// Route pour récupérer toutes les vidéos
app.get("/videos", (req, res) => {
  db.query("SELECT id, title, url FROM videos", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(results);
  });
});

// Route pour recevoir les messages du formulaire
app.post("/contact", async (req, res) => {
  const { name, email, subject, message, recaptcha } = req.body;

  // Vérification reCAPTCHA
  const secretKey = "VOTRE_SECRET_KEY"; // remplace par ta clé secrète reCAPTCHA
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`;

  try {
    const captchaResponse = await fetch(verificationUrl, { method: "POST" });
    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return res.status(400).json({ success: false, message: "Vérification reCAPTCHA échouée." });
    }

    // Configuration de l'email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "comgiopro@gmail.com",       // ton email Gmail
        pass: "twzuqbrvahsnetau"           // ton mot de passe d'application Gmail
      }
    });

    const mailOptions = {
      from: email,
      to: "comgiopro@gmail.com",
      subject: `Contact: ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message envoyé avec succès !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi du message." });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
