document.addEventListener("click", (e) => {
  var parent = null;
  var text = "";
  if (e.target.id === "copy-btn") {
    parent = e.target.parentElement;
    text = parent.querySelector("p").innerText.trim();
    navigator.clipboard.writeText(text);
    copyfunc();
  }
  console.log("Copied content: ", text);
});

document.querySelectorAll("p").forEach((element) => {
  element.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerText.trim());
    copyfunc();
  });
});

function copyfunc() {
  document.getElementById("copy-modal").style.transition = "all 0.3s";
  document.getElementById("copy-modal").style.opacity = "1";
  document.getElementById("copy-modal").style.top = "40%";
  setTimeout(() => {
    document.getElementById("copy-modal").style.opacity = "0";
    document.getElementById("copy-modal").style.top = "50%";
    // window.scrollTo(0, 0);
  }, 400);
}

window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("fixed");
  }
  if (window.scrollY < 10) {
    navbar.classList.remove("fixed");
  }
};

document.getElementById("promo-code").onclick = function () {
  const elem = document.getElementById("promo-code");
  navigator.clipboard.writeText(elem.innerText.trim());
  copyfunc();
};
