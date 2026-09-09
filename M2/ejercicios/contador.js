let textarea= document.getElementById("texto");
let contador = document.getElementById("contador");
console.log(textarea);
console.log(textarea.value.length);
textarea.addEventListener("input", function(){
contador.textContent = textarea.value.length;
console.log(textarea.value.length);
})
