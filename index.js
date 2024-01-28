/*const empty= "";
const ucase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase= "abcdefghijklmnopqrstuvwxyz";
const number= "0123456789";
const symbol= "@#$%^&&**&#@";

const plength = document.getElementById("p-length");
const uppercase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const pnumber = document.getElementById("p-number");
const psymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", () =>{
    let initialpassword = empty;
    (uppercase.checked) ? initialpassword += ucase : "";
    (lowercase.checked) ? initialpassword += lcase : "";
    (pnumber.checked) ? initialpassword += number : "";
    (psymbol.checked) ? initialpassword += symbol : "";

    password.value = generatePassword(plength.value,
        initialpassword)
});
function generatePassword(p,initialpassword){
    let pass = "";
    for(let i= 0; i < 1; i++){
        pass += initialpassword.charAt(Math.floor(Math.
            random() * initialpassword.length));
    }
    return pass;
}*//*
const empty = "";
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&&**&#@";

const plength = document.getElementById("p-length");
const uppercase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const pnumber = document.getElementById("p-number");
const psymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", () => {
    let initialpassword = empty;
    (uppercase.checked) ? initialpassword += ucase : "";
    (lowercase.checked) ? initialpassword += lcase : "";
    (pnumber.checked) ? initialpassword += number : "";
    (psymbol.checked) ? initialpassword += symbol : "";

    password.value = generatePassword(plength.value, initialpassword);
});

function generatePassword(p, initialpassword) {
    let pass = "";
    for (let i = 0; i < p; i++) {
        pass += initialpassword.charAt(Math.floor(Math.random() * initialpassword.length));
    }
    return pass;
}*/
const empty = "";
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&&**&#@";

const plength = document.getElementById("p-length");
const uppercase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const pnumber = document.getElementById("p-number");
const psymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copyButton = document.getElementById("copy");

submit.addEventListener("click", () => {
    let initialpassword = empty;
    (uppercase.checked) ? initialpassword += ucase : "";
    (lowercase.checked) ? initialpassword += lcase : "";
    (pnumber.checked) ? initialpassword += number : "";
    (psymbol.checked) ? initialpassword += symbol : "";

    const generatedPassword = generatePassword(plength.value, initialpassword);
    password.value = generatedPassword;
});

copyButton.addEventListener("click", () => {
    password.select();
    document.execCommand("copy");
});

function generatePassword(p, initialpassword) {
    let pass = "";
    for (let i = 0; i < p; i++) {
        pass += initialpassword.charAt(Math.floor(Math.random() * initialpassword.length));
    }
    return pass;
}

