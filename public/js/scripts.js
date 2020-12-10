const s = skrollr.init();
if (s.isMobile()) {
  s.destroy();
}
new WOW().init();
const root = document.querySelector(":root");
const hoverables = document.querySelectorAll("a");
document.addEventListener("mousemove", (e) => {
  root.style.setProperty("--x", e.clientX + "px");
  root.style.setProperty("--y", e.clientY + "px");
});
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener("mouseenter", onMouseHover);
  hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}
function onMouseHover() {
  root.style.setProperty("--cSize", "90px");
}
function onMouseHoverOut() {
  root.style.setProperty("--cSize", "34px");
}
