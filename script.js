// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  document.getElementById("contact").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Coletar os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Número do WhatsApp (adicione o número desejado com o código do país)
    const phoneNumber = "5511999999999";
  
    // Criar a mensagem no formato adequado
    const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email}. Mensagem: ${message}`;
  
    // Criar a URL do WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
  
    // Redirecionar para o WhatsApp
    window.open(whatsappURL, "_blank");
  });

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () =>
    nav.classList.toggle("active")
);
  