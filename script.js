document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("randomButton");
    const messageDiv = document.getElementById("message");
    var myInt = 0;
  
    const messages = "hello world";

  
    button.addEventListener("click", function () {
        if(myInt == 1) {
            window.location.href = "index.html";
            return;
        }
      messageDiv.textContent = messages;
      myInt++;
    });
  });