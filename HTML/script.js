function login() {
    const correctPassword = "sarthak7/7";
    const enteredPassword = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        alert("✅ Access granted. Welcome, family member!");
        errorMsg.textContent = ""; // Clear error if previously shown
    } else {
        errorMsg.textContent = "❌ Incorrect password. Try again.";
    }
}
function login() {
    const correctPassword = "sarthak7/7";
    const enteredPassword = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        errorMsg.textContent = "";
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html>
                <head><title>Education Center</title></head>
                <body style="background:black; color:white; display:flex; justify-content:center; align-items:center; height:100vh; margin:0; font-family: Arial, sans-serif;">
                    <h1>Welcome, family member in Education Center</h1>
                </body>
            </html>
        `);
        newWindow.document.close();
    } else {
        errorMsg.textContent = "❌ Incorrect password. Try again.";
        document.getElementById("password").value = "";
        document.getElementById("password").focus();
    }
}
function login() {
    const correctPassword = "sarthak7/7";
    const enteredPassword = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-message");
}
    function login() {
    const correctPassword = "sarthak7/7";
    const enteredPassword = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        errorMsg.textContent = "";
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html>
                <head><title>Education Center</title></head>
                <body style="background:black; color:white; display:flex; justify-content:center; align-items:center; height:100vh; font-family:Arial,sans-serif;">
                    <h1> Welcome family member to Education Center</h1>
                </body>
            </html>
        `);
        newWindow.document.close();
    } else {
        errorMsg.textContent = "❌ Incorrect password. Try again.";
        document.getElementById("password").value = "";
        document.getElementById("password").focus();
    }
}
