const toggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
    
        toggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        function redirectToWhatsApp(productName, price, phoneNumber) {
      const message = `Hello, I'm interested in the product: ${productName}, priced at ${price}. Can you tell me more about it?`;
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(url, '_blank');}