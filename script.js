document.getElementById("registerForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzQ9TQ6jdeAyd-NwwuGMJdRNzQdE-nbPyhP9bOfHslAVtgMc12sv6FmaD2_vrz6CMIlYA/exec", {
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

