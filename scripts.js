const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    menuToggle.textContent = navbar.classList.contains('show') ? '✕' : '☰';
});


const words = ["Software Engineer.", "Web Developer.", "Full Stack Developer.", ""];
    const element = document.getElementById("discipline");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 75;
    let pauseAfterTyping = 1000;
    let pauseAfterDeleting = 300;

    function type() {
        const currentWord = words[wordIndex];
        
        // Typing
        if (!isDeleting) {
        element.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, pauseAfterTyping); // Wait before deleting
            return;
        }
        }

        // Deleting
        else {
        element.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, pauseAfterDeleting); // Wait before typing next word
            return;
        }
        }

        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    document.addEventListener("DOMContentLoaded", type);

(function(){
  emailjs.init("0mmDsDRmPSZDSYEyg");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_z41nc58",
    "template_6tdjtqn",
    this
  )
  .then(function() {
    document.getElementById("contact-form").reset();
  alert("Message sent successfully! I'll get back to you soon.");
  }, function(error) {
    alert("Failed to send message. Try again.");
    console.log(error);
  });
});
document.querySelector("footer p").innerHTML =
`&copy; ${new Date().getFullYear()} Kevaughn Benjamin. All rights reserved.`;