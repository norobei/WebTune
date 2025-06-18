const companyImage = document.querySelector("#companyImage");
const previewImage = document.querySelector("#previewImage");
console.log(companyImage)
console.log(previewImage);
companyImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
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
    if (companyDescription.value == "") {
        previewDicription = "企業の説明を入力してください";
    }
})

document.querySelector("#finishBtn").addEventListener('click', () => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "submit.php";

    const input1 = document.createElement("input");
    input1.type = "hidden";
    input1.name = "id";
    input1.value = "1";

    const inputCompany = document.createElement("input");
    inputCompany.type = "hidden";
    inputCompany.name = "name";
    inputCompany.value = previewName.textContent;

    const companyURL = document.querySelector("#companyURL").value;
    const inputURL = document.createElement("input");
    inputURL.type = "hidden";
    inputURL.name = "URL";
    inputURL.value = companyURL;

    form.appendChild(input1);
    form.appendChild(inputCompany);
    form.appendChild(inputURL);

    document.body.appendChild(form);
    form.submit();
})
