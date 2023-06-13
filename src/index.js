emailjs.init('ocW54qITR1KAUa2tO');

window.onload = function () {
  document
    .getElementById('my-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm('service_jrj4b3f', 'template_x1h6esg', this).then(
        function () {
          console.log('SUCCESS!');
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    });
};
