addEventListener("DOMContentLoaded", (event) => {
  console.log('test');
  const [red, green, blue] = [255, 255, 255];

  const container = document.getElementById("body");
  container.style.background = "linear-gradient(135deg, rgb(255, 255, 255), rgb(38, 99, 194)";

  window.addEventListener("scroll", function () {
    let maxScrollValue =
      document.documentElement.scrollHeight - window.innerHeight;
    let currentScrollValue = document.documentElement.scrollTop;
    let y = currentScrollValue / maxScrollValue;
    console.log(y);
    if (y > 0 && y < 0.3) {
      container.style.background =
        "linear-gradient(135deg, rgb(255, 255, 255), rgb(38, 99, 194)";
      // container.style.backgroundColor = `rgb(${255 * (1 - y)}, ${255 * (1 - y)}, 255)`;
    } else if (y > 0.4 && y < 0.6) {
      let i = Math.min((y - 0.4) * 5, 1);
      container.style.background = `linear-gradient(135deg, rgb(
      ${255 - 255 * i + i * 17}, 
      ${255 - 255 * i + i * 18}, 
      ${255 - 255 * i + i * 24}), rgb(
      ${38 - 38 * i + i * 17}, 
      ${99 - 99 * i + i * 18}, 
      ${194 - 194 * i + i * 24})`;
    } else if (y > 0.8) {
      let i = Math.min((y - 0.8) * 5, 1);
      container.style.background = `linear-gradient(135deg, rgb(
      ${17 + 255 * i}, 
      ${18 + 255 * i}, 
      ${24 + 255 * i}), rgb(
      ${17 + 38 * i}, 
      ${18 + 99 * i}, 
      ${24 + 194 * i})`;
    }
  });
});
