async function calculate(operation) {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;

  try {
    const response = await fetch(`/api/${operation}?a=${a}&b=${b}`);
    const data = await response.json();

    if (data.result !== undefined) {
      document.getElementById(
        "result"
      ).textContent = `Résultat : ${data.result}`;
    } else {
      document.getElementById("result").textContent = `Erreur : ${data.error}`;
    }
  } catch (error) {
    document.getElementById("result").textContent = `Erreur Serveur !`;
  }
}


document.getElementById("btnAdd").addEventListener("click", () => calculate("add"))
document.getElementById("btnSub").addEventListener("click", () => calculate("soustraction"))
document.getElementById("btnMul").addEventListener("click", () => calculate("multplication"))
document.getElementById("btnDiv").addEventListener("click", () => calculate("division"))