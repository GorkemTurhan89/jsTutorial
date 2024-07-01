//https://regexr.com/

const frmLogin = document.getElementById("frmLogin");
frmLogin.addEventListener("submit",(e)=> {
    e.preventDefault();//formun submit davranisini default deger icin iptal eder

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");

    try {
        const email = txtEmail.value;
        const password = txtPassword.value;

        if(!email || !isEmail(email)){
            txtEmail.
        }
    } catch () {
        
    }
})