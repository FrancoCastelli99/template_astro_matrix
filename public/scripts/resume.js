// public/scripts/resume.js
const downloadButton = document.getElementById("download-resume");
const downloadStatus = document.getElementById("download-status");

downloadButton.addEventListener("click", () => {
    downloadStatus.textContent = "Initiating download...";
    setTimeout(() => {
        downloadStatus.textContent = "Decrypting file...";
        setTimeout(() => {
            downloadStatus.textContent = "Download complete!";
            // Trigger actual download
            const link = document.createElement("a");
            link.href = "/path/to/your/resume.pdf";
            link.download = "your_resume.pdf";
            link.click();
        }, 2000);
    }, 1000);
});