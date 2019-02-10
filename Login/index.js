// Login
// Create a page that will ask the user for their login and password. Check, that the password is equal to sore-thumb-218 and if so, output "access granted." Otherwise output "Nice try."
// Create a page where the user needs to create their password for the first time. Ask for the password twice and check that they are the same. If not, output something like "Your passwords to no match."
// Improve the above page so that it does not allow passwords less then 8 characters long. If the password is less then 8 characters output "Your password is no secure." In such a case do not ask the user to type the password again. Only do that if it passes the security check.

const checkPassword = (form) => {

    if(form.pass1.value == form.pass2.value) {
        alert("Accesss allowed");
        form.pwd1.focus();
      } else {
        alert("Accesss denied");
      }
}

checkPassword();

