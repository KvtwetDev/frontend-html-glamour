
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  document.getElementById("contact").addEventListener("submit", function (event) {
    event.preventDefault();
  
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    
    const phoneNumber = "5511999999999";
  
   
    const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email}. Mensagem: ${message}`;
  
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
  
   
    window.open(whatsappURL, "_blank");
  });

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () =>
    nav.classList.toggle("active")
);
  
