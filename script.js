const form = document.getElementById("resumeForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const fileInput = document.getElementById("resumeFile");

    if (fileInput.files.length === 0) {
        alert("Please select a resume.");
        return;
    }

    const formData = new FormData();
    formData.append("resume", fileInput.files[0]);

    try {

        const response = await fetch("/analyze", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        document.getElementById("atsScore").innerText = data.atsScore + "%";

        const skillsList = document.getElementById("skillsList");
        skillsList.innerHTML = "";

        data.detectedSkills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        document.getElementById("missingKeywords").innerHTML = `
            <li>React</li>
            <li>MongoDB</li>
            <li>Git</li>
        `;

        document.getElementById("suggestions").innerHTML = `
            <li>Add more technical skills.</li>
            <li>Include more projects.</li>
            <li>Add certifications.</li>
            <li>Improve ATS keywords.</li>
        `;

        alert("Resume analyzed successfully!");

    } catch (error) {
        console.error(error);
        alert("Error analyzing resume.");
    }

});