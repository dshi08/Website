document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("randomButton");
    const messageDiv = document.getElementById("message");
  
    const messages = "hello world";

  
    button.addEventListener("click", function () {
      messageDiv.textContent = messages;
    });
  });