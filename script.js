const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  sendEmail(name, email, subject, message);
});

function sendEmail(name, email, subject, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jc8864837@gmail.com",
    Password: "m0ns1t3w3b@&",
    To: "jcouespel@free.fr",
    From: "JC8864837@gmail.com",
    Subject: subject,
    Body: `Nom: ${name} <br> Email: ${email} <br> Message: ${message}`,
  }).then(() => {
    status.classList.add("success");
    status.textContent = "Email envoyé avec succès.";
    form.reset();
  }).catch((error) => {
    status.classList.add("error");
    status.textContent = "Une erreur est survenue lors de l'envoi de l'email.";
  });
}
