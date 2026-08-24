const form =
    document.getElementById("registerForm");

const accountTypeInput =
    document.getElementById("accountType");

const accountButtons =
    document.querySelectorAll(".account-type");

const message =
    document.getElementById("message");

const registerButton =
    document.getElementById("registerButton");


// ==========================================
// ACCOUNT TYPE
// ==========================================

accountButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            accountButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            accountTypeInput.value =
                button.dataset.type;

        }
    );

});


// ==========================================
// REGISTRATION
// ==========================================

form.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        message.className =
            "message";

        message.textContent =
            "";


        const firstName =
            document.getElementById(
                "firstName"
            ).value.trim();


        const lastName =
            document.getElementById(
                "lastName"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const phone =
            document.getElementById(
                "phone"
            ).value.trim();


        const password =
            document.getElementById(
                "password"
            ).value;


        const confirmPassword =
            document.getElementById(
                "confirmPassword"
            ).value;


        const accountType =
            accountTypeInput.value;


        // ==========================================
        // PASSWORD CHECK
        // ==========================================

        if (password !== confirmPassword) {

            message.className =
                "message error";

            message.textContent =
                "Passwords do not match.";

            return;

        }


        registerButton.disabled = true;

        registerButton.textContent =
            "Creating Account...";


        try {

            const response =
                await fetch(
                    "/api/users/register",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body: JSON.stringify({

                            firstName,

                            lastName,

                            email,

                            phone,

                            password,

                            confirmPassword,

                            accountType

                        })

                    }
                );


            const data =
                await response.json();


            if (!data.success) {

                throw new Error(
                    data.message ||
                    "Registration failed."
                );

            }


            // ==========================================
            // SUCCESS
            // ==========================================

            message.className =
                "message success";

            message.textContent =
                "Account created successfully. Redirecting to verification...";


            // Temporary verification page

            setTimeout(() => {

                window.location.href =
                    "verification.html";

            }, 1500);


        }

        catch (error) {

            console.error(
                "Registration error:",
                error
            );


            message.className =
                "message error";

            message.textContent =
                error.message ||
                "Unable to create account.";

        }

        finally {

            registerButton.disabled =
                false;

            registerButton.textContent =
                "Create Account";

        }

    }
);