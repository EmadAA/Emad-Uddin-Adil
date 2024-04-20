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
    document.title = "Come back!";
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
    message => alert("mail sent successfully")
);
    }
   
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        emailSend();
    });
