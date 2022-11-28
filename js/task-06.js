// const textInput = document.querySelector("#validation-input");
// textInput.addEventListener("blur", () => {
//     if (textInput.value.length === textInput.getAttribute("data-length")) {
//         console.log("Правильно")
//     } else  {
//         console.log("Не правильно")
//     }
//   });


const inputRef = document.querySelector('#validation-input');
const onBlurVerify = (event) => {
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
};
inputRef.addEventListener('blur', onBlurVerify);
