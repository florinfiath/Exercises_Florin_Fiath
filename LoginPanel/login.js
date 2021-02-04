
class validateInformation {
  constructor() {
    this.email = document.getElementById("log");
    this.pass = document.getElementById("password");
  }
  check() {
    let regexMail = /\S+@+\S+\.+\S/;
    let regexPassword = /^[A-Za-z]+\w{7,24}/;
    if (
      regexMail.test(this.email.value) &&
      regexPassword.test(this.pass.value)
    ) {
      window.location.href = "https://mail.google.com/mail/";
      window.alert("logging");
    } else {
      window.alert("Email or Password Incorrect");
    }
  }
  reset() {
    this.mail.value = "";
    this.pass.value = "";
  }
}
let validateInfo = new validateInformation();







