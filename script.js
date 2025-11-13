document.getElementById("registerForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwph7psJhnMtt7QMVnX87k0Vo4yPmMVy2v7XgU6V5qtSXccCS6PWATH_3KgVi3OtH8qqw/exec", {
      method: "POST",
      body: formData
    });

    if (!response.ok) throw new Error(response.status);
    alert("✅ Registration recorded. Thank you!");
    form.reset();
  } catch (err) {
    console.error("Error:", err);
    alert("❌ Something went wrong. Please try again later.");
  }
});
