const express = require('express');
const cors = require('cors');
const app = express();

// CORS'u tüm kaynaklar için açma
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/api/cv', (req, res) => {
  const cvData = {
    name: "Özge Ötleş",
    address: "Alaybey Mah. 1673 Sok. No:44/6 Karşıyaka/İZMİR/Türkiye",
    phone: "+90 531 230 9749",
    email: "ozgeotles@gmail.com",
    personalInformation: {
      birthDate: "09.02.1999",
      birthPlace: "Konak/IZMIR",
      nationality: "Turkish"
    },
    profile: "Being creative is the center of my personality, I love research and I am open to constant learning. I am dedicated to my job, precise at work and a good listener. Follow innovations, easily adapt to intensive work, and be able to produce solutions to problems.",
    languages: ["English", "German", "Macedonian"],
    education: [
      { 
        school: "Yasar University", 
        degree: "Computer Engineer", 
        gpa: 3.90, 
        startingYear: 2018,
        finishingYear: 2022,
        scholarship: "Full", 
        doubleDegree: true,
        description: "Got degree in the Engineering Department. Double Degree - Full Scholarship."
      },
      { 
        school: "Yasar University", 
        degree: "Industrial Engineer", 
        gpa: 3.94, 
        startingYear: 2017,
        finishingYear: 2021,
        scholarship: "Full",
        description: "Entering Yasar University with the highest score of the year 2017 and graduating as top student in the Engineering Department and also top of the whole Yaşar University."
      },
      { 
        school: "Anadolu University", 
        degree: "Management Information Systems", 
        gpa: 3.82, 
        startingYear: 2020,
        finishingYear: "Present", 
        description: "Currently studying in Management Information Systems with a GPA of 3.82."
      },
      { 
        school: "Izmir Ataturk High School", 
        gpa: 94.70, 
        startingYear: 2013,
        finishingYear: 2017
      }
    ],

    experience: [
      { jobTitle: "Software Engineer", company: "Intertech Bilgi İşlem ve Pazarlama Ticaret A.Ş. (Denizbank)", years: "2021-Now", description: "Working as software engineer in a team on the React&Microservice transformation. Promoted to Expert Software Engineer in 2022." },
      { jobTitle: "Trainee", company: "HAVELSAN Inc.", years: "2021", description: "Training on SAP GUI, SAP Abap and SAP Fiori; created a project using these tools." },
      { jobTitle: "Trainee", company: "Volt Electric Motors", years: "2020", description: "Training in the Production Department." },
      { jobTitle: "Trainee", company: "Noderix Inc.", years: "2019", description: "Helped on projects in the company, used VBA on projects." },
      { jobTitle: "Trainee", company: "Volkan Crafted Technology", years: "2019", description: "Training on ERP Systems and the general operations in the company." },
      { jobTitle: "Trainee", company: "Ege University Product Lifecycle Management (PLM) Center", years: "2018-2019", description: "Training on PLM software." }
    ],
    publications: [
      { 
        authors: "Ö.Ötleş, L.Kandiller, et al.",
        title: "A Discrete-Time Resource Allocated Project Scheduling Model",
        journal: "Springer, Cham",
        year: 2021
      },
      { 
        authors: "Ö.Ötleş, O.Ötleş, S.Ötleş",
        title: "Sanayide dijitalizasyon",
        journal: "Endüstri 4.0, 2, 108-113",
        year: 2021
      },
      { 
        authors: "S.Ötleş, Ö.Ötleş",
        title: "Developing and Evolving Industry",
        journal: "Automation, 9, 134-139",
        year: 2019
      },
      { 
        authors: "H.Ozyurt, S.Otles, O.Otles",
        title: "Genoderma lucidum (Linghzi yada Reishi): Tibbi mantar",
        journal: "Dünya Gıda, 11, 32-39",
        year: 2017
      }
    ],

    achievements: [
      "TUBITAK Project Contest – 2016",
      "Gold Medal in American Mathematic Contest (AMC) – 2013",
      "World Team Championship in World Education Games / World Maths Day – 2013",
      "Founded a virtual company named 'Andromeda' within Junior Achievement Turkey – 2015-2016",
      "Project chosen as the best among Industrial Engineering graduation projects – 2021"
    ],
    universityActivities: [
      "Society of Economics of Yasar University – Founder Member & Executive Board Member in 2017-2018",
      "Society of Industrial Engineering of Yasar University – Executive Board Member in 2018-2019"
    ],
    hobbies: ["Playing Guitar", "Gymnastics", "Swimming", "Playing Tennis"],
    certificates: [
      { firm: "RiEcoLab - EIT", year: 2021, certificatename: "Embedding Responsible Research Innovation" },
      { firm: "Huawei Seeds for the Future Program", year: 2020, certificatename: "Huawei Seeds for the Future Program Certificate" },
      { firm: "Engineering.com", year: 2018, certificatename: "Adoption of Industrial Internet of Things" },
      { firm: "JA Europe", year: 2016, certificatename: "Entrepreneurial Skills Pass Certificate" },
      { firm: "Akademi", year: 2015, certificatename: "Big Data & Internet of Things" }
    ],    
    conferences: [
      "Risks from Industry 4.0, Trovarit",
      "How to Measure Industry 4.0 Maturity Level, Trovarit",
      "IoT-IIoT-Big Data Analytics, Trovarit",
      "Developing Smart Products Demands Unified Lifecycle Management, CONTACT Software",
      "ANSYS 19 Discovery SpaceClaim Update, ANSYS",
      "ENOVIA R2018x Key Release Highlights, Dassault Systemes",
      "Siemens TIA Portal Innovation Tour 2017, SIEMENS"
    ],
    computerSkills: [
      "MS Office Programs", "Canias", "Matlab", "Arena", "Windchill", "CPLEX", "LINGO",
      "SAP GUI, Abap", "SAP Fiori"
    ],
    programmingSkills: [
      "C", "C#", "HTML", "VBA", "MSSQL", "JavaScript", "Python", "React", "Next.js", "TypeScript", "Node.js"
    ]
  };

  // API verisini JSON formatında döndürme
  res.json(cvData);
});


// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
