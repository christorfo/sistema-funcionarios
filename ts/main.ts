import { Desenvolvedor, Designer } from "./models/Funcionario";

const form = document.getElementById("formFuncionario") as HTMLFormElement;
const lista = document.getElementById("listaFuncionarios") as HTMLUListElement;
const tipo = document.getElementById("tipo") as HTMLSelectElement;
const camposExtras = document.getElementById("camposExtras") as HTMLDivElement;

function atualizarCamposExtras() {
  camposExtras.innerHTML = "";
  if (tipo.value === "dev") {
    camposExtras.innerHTML = `
      <label>Nível:</label>
      <select id="extra"><option value="junior">Júnior</option><option value="pleno">Pleno</option><option value="senior">Sênior</option></select><br>
    `;
  } else if (tipo.value === "designer") {
    camposExtras.innerHTML = `
      <label>Anos de Experiência:</label>
      <input type="number" id="extra" required><br>
    `;
  }
}

tipo.addEventListener("change", atualizarCamposExtras);
window.addEventListener("load", atualizarCamposExtras);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = (document.getElementById("nome") as HTMLInputElement).value;
  const idade = parseInt((document.getElementById("idade") as HTMLInputElement).value);
  const extra = (document.getElementById("extra") as HTMLInputElement | HTMLSelectElement).value;

  let funcionario;
  if (tipo.value === "dev") {
    funcionario = new Desenvolvedor(nome, idade, extra);
  } else {
    funcionario = new Designer(nome, idade, parseInt(extra));
  }

  const item = document.createElement("li");
  item.textContent = funcionario.exibirDados();
  lista.appendChild(item);
});
