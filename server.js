const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

// Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Upload Route
app.post("/analyze", upload.single("resume"), async (req, res) => {

    try {

        const dataBuffer = fs.readFileSync(req.file.path);
        const pdfData = await pdfParse(dataBuffer);

        const text = pdfData.text;

        const skills = [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "Java",
            "SQL",
            "Node.js",
            "Express",
            "MongoDB",
            "React",
            "Git"
        ];

        let detectedSkills = [];

        skills.forEach(skill => {
            if (text.toLowerCase().includes(skill.toLowerCase())) {
                detectedSkills.push(skill);
            }
        });

        let atsScore = 50 + detectedSkills.length * 5;

        if (atsScore > 100) {
            atsScore = 100;
        }

        res.json({
            atsScore,
            detectedSkills,
            resumeText: text.substring(0,500)
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error analyzing resume"
        });
    }

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});