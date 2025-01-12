const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basit bir endpoint: /api/cv
app.get('/api/cv', (req, res) => {
  const cvData = {
    name: "Özge Ötleş",
    profession: "Yazılım Geliştirici",
    contact: "email@example.com",
    education: [
      { school: "Üniversite Adı", degree: "Bilişim Mühendisliği" },
      { school: "Lise Adı", degree: "Bilgisayar Bölümü" }
    ],
    experience: [
      { jobTitle: "Yazılım Geliştirici", company: "Şirket Adı", years: 2 },
      { jobTitle: "Stajyer", company: "Diğer Şirket", years: 1 }
    ],
    skills: ["JavaScript", "Node.js", "Express", "HTML", "CSS"]
  };

  // API verisini JSON formatında döndürme
  res.json(cvData);
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
