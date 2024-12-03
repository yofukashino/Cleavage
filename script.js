const dropArea = document.getElementById('drop-area');


document.body.addEventListener('paste', (event) => {
    const items = event.clipboardData.items;
    for (const item of items) {
        if (item.kind === 'file' && item.type.startsWith('image')) {
            const file = item.getAsFile();
            convertImageToURL(file);
        }
    }
});


dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
});

dropArea.addEventListener('dragleave', () => {
    dropArea.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image')) {
        convertImageToURL(file);
    }
});

function convertImageToURL(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        const imageURL = event.target.result; 
        window.location.href = imageURL;
    };
    reader.readAsDataURL(file); 
}
