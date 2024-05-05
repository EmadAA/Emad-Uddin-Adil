document.addEventListener("DOMContentLoaded", function () {
    let portfolioVisible = document.getElementById("portfolio-visible");
    let LoadMore = document.querySelector(".load-more-btn");

    portfolioVisible.style.display = "none";

    LoadMore.addEventListener("click", function () {
      if (portfolioVisible.style.display === "none") {
        portfolioVisible.style.display = "block";
        LoadMore.innerHTML = "Load Less";
      } else {
        portfolioVisible.style.display = "none";
        LoadMore.innerHTML = "Load More";
      }
    });
  });

  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come back brother!";
  });

  window.addEventListener("focus", () => {
    document.title = docTitle;
    });




    let form = document.querySelector("form");
    function emailSend(){
        let bodyMessage = `Name : ${document.getElementById("name").value} <br> Email : ${document.getElementById("email").value} <br> Subject : ${document.getElementById("subject").value} <br> Message : ${document.getElementById("msg").value}`


      Email.send({
    Host : "smtp.elasticemail.com",
    Username : "emadadil999@gmail.com",
    Password : "4E90CD238A6A10AACC029ABCDC47CEB1F2AD",
    To : "emadadil999@gmail.com",
    From : "emadadil999@gmail.com",
    Subject : document.getElementById("subject").value,
    Body : bodyMessage
}).then(
  message => {
    alert("Mail sent successfully");
    clearForm();
},
error => {
    alert("Failed to send mail: " + error);
    console.error("Email send error:", error);
}
);
}

function clearForm() {
document.getElementById("name").value = '';
document.getElementById("email").value = '';
document.getElementById("subject").value = '';
document.getElementById("msg").value = '';
}
   
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        emailSend();
    });

   function blogPageAlert(){
    alert("This page is under construction. Thanks for visiting!");
   }