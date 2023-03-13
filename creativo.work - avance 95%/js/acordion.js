const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentNode;
    const isActive = accordionItem.classList.contains('active');

    // Close all accordion items
    accordionHeaders.forEach(header => {
      header.parentNode.classList.remove('active');
      header.classList.remove('active'); // Remove 'active' class from all headers
    });

    // If clicked item was not active, activate it
    if (!isActive) {
      accordionItem.classList.add('active');
      header.classList.add('active');
    }
  });
});
