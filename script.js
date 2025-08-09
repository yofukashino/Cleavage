document.addEventListener("paste", (event) => {
    const items = event.clipboardData.items;
    for (const item of items) {
        if (item.kind === "file" && item.type.startsWith("image")) {
            const file = item.getAsFile();
            convertImageToURL(file);
        }
    }
}, false);

document.addEventListener("drop", (event) => {
    const items = event.dataTransfer.files;
    for (const item of items) {
        if (item.kind === "file" && item.type.startsWith("image")) {
            const file = item.getAsFile();
            convertImageToURL(file);
        }
    }
}, false);

function convertImageToURL(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        const imageURL = event.target.result;
        document.body.innerHTML = `<img src="${imageURL}"/>`;   
    };
    reader.readAsDataURL(file);
}
