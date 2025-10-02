document.getElementById("newsletter-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Inscrição realizada com sucesso!");
});

document.getElementById("contato-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada! Entraremos em contato em breve.");
});

// Newsletter Form
document.getElementById("newsletter-form")?.addEventListener("submit", function(e) {
  e.preventDefault();

  // Esconde o formulário e mostra mensagem de sucesso
  document.getElementById("newsletter-form").style.display = "none";
  document.getElementById("success-message").style.display = "block";
});

// Contato Form
document.getElementById("contato-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada! Entraremos em contato em breve.");
});