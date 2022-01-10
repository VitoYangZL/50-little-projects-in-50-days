const codes = document.querySelectorAll(".code");

focus(codes[0]);

codes.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[index].value = "";
      setTimeout(() => codes[index + 1].focus(), 5);
    } else if (e.key === "Backspace") {
      codes[index].value = "";
      setTimeout(() => codes[index - 1].focus(), 5);
    }
  });
});
