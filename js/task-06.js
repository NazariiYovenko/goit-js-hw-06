const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  const valid_length = input.getAttribute("data-length");
  if (input.value.length === Number(valid_length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
