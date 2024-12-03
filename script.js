document.body.addEventListener("paste", (event) => {
    const items = event.clipboardData.items;
    for (const item of items) {
        if (item.kind === "file" && item.type.startsWith("image")) {
            const file = item.getAsFile();
            convertImageToURL(file);
        }
    }
});

document.body.addEventListener("drop", (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image")) {
        convertImageToURL(file);
    }
});

function convertImageToURL(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        const imageURL = event.target.result;
        document.body.innerHTML = `<img src="${imageURL}"/>`;   
    };
    reader.readAsDataURL(file);
}
