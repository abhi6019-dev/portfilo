
const text = document.querySelector(".sec-text");

let textLoad = () => {
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 0);

  setTimeout(() => {
    text.textContent = "Python Dev";
  }, 4000);
  
  setTimeout(() => {
    text.textContent = "Js Devloper";
  }, 8000);
  
  setTimeout(() => {
    text.textContent = "Ui/Ux Dev";
  }, 12000);
};

textLoad();
setInterval(textLoad , 16000);