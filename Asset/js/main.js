document.getElementById("downloadButton").addEventListener("click", function() {
    // Start downloading the PDF file
    const link = document.createElement('a');
    link.href = 'Asset/pdf/MD.Mostafizur_Rahman-CV.pdf'; // Replace with the actual path to your PDF
    link.download = 'MD.Mostafizur_Rahman-CV.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    
    // Remove the link after the download starts
    document.body.removeChild(link);

    // Trigger a function to simulate download completion
    afterDownload();
});

function afterDownload() {
    alert("PDF Downloaded!"); // Replace this with your desired action
}

//============================================================================>









