document.querySelector("#calc").addEventListener("click", function() {
  const left = parseInt(document.querySelector("#left").value);
  const right = parseInt(document.querySelector("#right").value);
  const result = left + right;

  document.querySelector("#answer").textContent = result;
});
