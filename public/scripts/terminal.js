// public/scripts/terminal.js
const commandInput = document.getElementById("command-input");
const output = document.getElementById("output");

const commands = {
    help: "Available commands: about, skills, projects, contact, cls",
    about: "I'm a passionate developer from Chile with experience in web development and a love for futuristic designs.",
    skills: "JavaScript, Astro, React, Node.js, CSS, HTML, and more!",
    projects: "Check out my Matrix-themed portfolio and other projects on GitHub.",
    contact: "You can reach me at your.email@example.com or on LinkedIn.",
    cls: "" // Special command to clear the terminal
};

// Automatically focus on the input field
commandInput.focus();

commandInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const command = commandInput.value.trim().toLowerCase();
        const output = document.getElementById("output");

        output.innerHTML += `<p>> ${command}</p>`;

        if (command === "cls") {
            output.innerHTML = "";
        } else if (commands[command]) {
            output.innerHTML += `<p>${commands[command]}</p>`;
        } else {
            output.innerHTML += `<p>Command not found. Type "help" for a list of commands.</p>`;
        }

        commandInput.value = ""; // Clear the input field
        output.scrollTop = output.scrollHeight; // Scroll to bottom
    }
});