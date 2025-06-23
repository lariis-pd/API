document.getElementById('btnCarregar').addEventListener('click', carregarImagem);

function carregarImagem() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(resposta => resposta.json())
    .then(dados => {
      document.getElementById('dogImg').src = dados.message;
    })
    .catch(erro => {
      alert('Erro ao carregar imagem');
      console.error(erro);
    });
}
