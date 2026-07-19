# AI Resume Analyser

An AI Resume Analyser built using HTML, CSS, JavaScript, Node.js, and Express.js. This project allows users to upload a PDF resume, extract text, detect technical skills, calculate a basic ATS score, identify missing keywords, and provide improvement suggestions.

## Features

- Upload Resume (PDF)
- Extract Resume Text
- Detect Technical Skills
- ATS Score Calculation
- Missing Keywords Detection
- Resume Improvement Suggestions
- Responsive User Interface

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- Multer
- PDF-Parse

## Project Structure

```
AI-Resume-Analyser/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── package-lock.json
├── uploads/
├── node_modules/
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/Sukirtha20/AI-Resume-Analyser.git
```

2. Open the project folder

```bash
cd AI-Resume-Analyser
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node server.js
```

5. Open your browser

```
http://localhost:3000
```

## How It Works

1. Upload a PDF resume.
2. The server extracts the text using PDF-Parse.
3. Skills are matched with predefined keywords.
4. An ATS score is generated.
5. Missing keywords and suggestions are displayed.

## Future Improvements

- AI-powered resume analysis
- Job description matching
- Downloadable analysis report
- Resume keyword recommendations
- Authentication system
- Database integration

## Author

**Sukirtha M**

B.Tech Artificial Intelligence & Data Science
