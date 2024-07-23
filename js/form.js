document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch("save_contact.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            const messageDiv = document.getElementById("form-message");
            messageDiv.className = "form-message"; // Reset class name
            
            if (data.status === "success") {
                messageDiv.innerHTML = `<p class="success">${data.message}</p>`;
                // Hide the message after 5 seconds
                setTimeout(() => {
                    messageDiv.innerHTML = "";
                }, 5000);
                form.reset(); // Optionally reset the form fields
            } else {
                messageDiv.innerHTML = `<p class="error">${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            const messageDiv = document.getElementById("form-message");
            messageDiv.innerHTML = `<p class="error">An error occurred. Please try again.</p>`;
        });
    });
});


