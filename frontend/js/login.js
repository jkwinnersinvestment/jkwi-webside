const loginForm = document.getElementById("loginForm");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const loginButton =
    document.getElementById("loginButton");

const loginMessage =
    document.getElementById("loginMessage");


// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";

    }

});


// ==========================================
// LOGIN
// ==========================================

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const identifier =
        document.getElementById("identifier")
            .value
            .trim();

    const password =
        passwordInput.value;


    // ==========================================
    // VALIDATE
    // ==========================================

    if (!identifier || !password) {

        loginMessage.textContent =
            "Please enter your login details.";

        loginMessage.style.color =
            "#c13d3d";

        return;

    }


    // ==========================================
    // LOADING
    // ==========================================

    loginButton.disabled = true;

    loginButton.textContent =
        "Signing in...";

    loginMessage.textContent = "";


    try {

        // ==========================================
        // SEND LOGIN REQUEST
        // ==========================================

        const response =
            await fetch(
                "/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        username:
                            identifier,

                        password:
                            password

                    })

                }
            );


        const data =
            await response.json();


        // ==========================================
        // LOGIN FAILED
        // ==========================================

        if (!response.ok || !data.success) {

            throw new Error(
                data.message ||
                "Invalid username or password."
            );

        }


        // ==========================================
        // MAKE SURE TOKEN EXISTS
        // ==========================================

        if (!data.token) {

            throw new Error(
                "Login succeeded but no security token was received."
            );

        }


        // ==========================================
        // SAVE JWT
        // ==========================================

        localStorage.setItem(
            "jkwi_token",
            data.token
        );


        // ==========================================
        // SAVE USER
        // ==========================================

        localStorage.setItem(
            "jkwi_user",
            JSON.stringify(data.user)
        );


        // ==========================================
        // REDIRECT
        // ==========================================

        if (data.redirect) {

            window.location.replace(
                data.redirect
            );

        } else {

            throw new Error(
                "No dashboard was assigned to this account."
            );

        }

    }

    catch (error) {

        console.error(
            "Login error:",
            error
        );


        loginMessage.textContent =
            error.message ||
            "Unable to sign in.";

        loginMessage.style.color =
            "#c13d3d";


        loginButton.disabled = false;

        loginButton.textContent =
            "Sign In";

    }

});