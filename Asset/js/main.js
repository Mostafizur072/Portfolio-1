

document.getElementById("downloadButton").addEventListener("click", function() {
    // Start downloading the PDF file
    const link = document.createElement('a');
    link.href = '../pdf/MD.Mostafizur Rahman CV.pdf'; // Replace with the actual path to your PDF
    link.download = 'MD.Mostafizur Rahman CV.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
     
    
    // Remove the link after download
    document.body.removeChild(link);
    
    // Trigger a function after the PDF is downloaded
    link.addEventListener('click', function() {
        afterDownload();
    });
});

function afterDownload() {
    alert("PDF Downloaded!"); // Replace this with your desired action
}


//============================================================================>









