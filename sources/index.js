document.addEventListener("click", (e) => {
  var parent = null;
  var text = "";
  if (e.target.id === "copy-btn") {
    parent = e.target.parentElement;
    text = parent.querySelector("p").innerText.trim();
    navigator.clipboard.writeText(text);
    document.getElementById("copy-modal").style.transition = "all 0.3s";
    document.getElementById("copy-modal").style.opacity = "1";
    document.getElementById("copy-modal").style.top = "40%";
    setTimeout(() => {
      document.getElementById("copy-modal").style.opacity = "0";
      document.getElementById("copy-modal").style.top = "50%";
    }, 400);
  }
  console.log("Copied content: ", text);
});