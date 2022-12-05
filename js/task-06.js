const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  const validLength = input.getAttribute("data-length");
  if (input.value.trim().length === Number(validLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
