const formDataDiri = document.getElementById("formDataDiri");

formDataDiri.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = {
    name: document.getElementById("inputNama").value,
    domisili: document.getElementById("inputDomisili").value,
  };

  const hiddenMessage = `Halo, ${input.name}. Bagaimana cuacanya di ${input.domisili}?`;

  const messageAfterSubmit = document.getElementById("messageAfterSubmit");
  messageAfterSubmit.innerText = hiddenMessage;
});
