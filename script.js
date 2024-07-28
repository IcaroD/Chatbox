function enviarMensagem() {
    let inputMensagem = document.querySelector("#inputMensagem");
    let mensagem = inputMensagem.value;

    if (mensagem == "") {
        alert("Nenhuma mensagem!!!")
        return;
    }
  
    let areaDeMensagens = document.querySelector(".areaDeMensagens");
  
    let novaMensagem = document.createElement("div");
    novaMensagem.className = "mensagens";
  
    novaMensagem.innerHTML = `
      <div class="mensagem">
        <div class="texto">
          ${mensagem}
        </div>
        <div class="btnMensagem">
          <button class="editar" onclick="editarMensagem(this)">Editar</button>
          <button class="excluir" onclick="excluirMensagem(this)">Excluir</button>
        </div>
      </div>
    `;
  
    areaDeMensagens.appendChild(novaMensagem);
  
    inputMensagem.value = "";
}

function excluirMensagem(botaoExcluir) {
    let mensagemParaExcluir = botaoExcluir.closest(".mensagens");
    mensagemParaExcluir.remove();
}
  
function editarMensagem(botaoEditar) {
    let mensagemParaEditar = botaoEditar.closest(".mensagens");
    let textoMensagem = mensagemParaEditar.querySelector(".texto");
    let novoTexto = prompt("Digite o novo texto:");
    
    if (novoTexto !== null) {
      textoMensagem.textContent = novoTexto;
    }
}
  
  
document.addEventListener("DOMContentLoaded", function() {
    let enviar = document.querySelector("#Enviar");
    enviar.addEventListener("click", enviarMensagem);
});
  