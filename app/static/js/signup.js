// Toggle password visibility
document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", () => {
    const targetId = icon.getAttribute("data-target");
    const input = document.getElementById(targetId);
    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

// Simple form validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const pwd = document.getElementById("password").value;
  const confirmPwd = document.getElementById("confirmPassword").value;

  if (pwd !== confirmPwd) {
    alert("Passwords do not match!");
    return;
  }
  alert("Account created successfully!");
});
