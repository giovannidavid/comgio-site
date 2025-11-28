async function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const recaptcha = grecaptcha.getResponse();

    if (!recaptcha) {
        alert("Veuillez confirmer que vous n'êtes pas un robot.");
        return;
    }

    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, recaptcha })
    });

    const result = await response.json();
    alert(result.message);

    if (result.success) {
        document.querySelector(".contact-form").reset();
        grecaptcha.reset();
    }
}
