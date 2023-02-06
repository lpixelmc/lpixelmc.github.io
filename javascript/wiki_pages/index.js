const introImage = document.querySelector(".introImage");

introImage.addEventListener("mouseenter", function() {
  introImage.style.opacity = "0";
});

introImage.addEventListener("mouseleave", function() {
  introImage.style.opacity = "0.5";
});