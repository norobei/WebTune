const companyImage = document.querySelector("#companyImage");
const previewImage = document.querySelector("#previewImage");
console.log(companyImage)
console.log(previewImage);
companyImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

})


const companyName = document.querySelector("#companyName");
const previewName = document.querySelector("#previewName");
companyName.addEventListener('input', () => {
    previewName.textContent = companyName.value;
    
})

const companyDescription = document.querySelector("#companyDescription");
const previewDicription = document.querySelector("#previewDescription");
companyDescription.addEventListener('input', () => {
    previewDicription.textContent = companyDescription.value;
})
