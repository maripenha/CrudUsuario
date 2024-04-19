 
//clicar no botão -ok
    //abrir o modal -ok
    //setar os campos com os valores do usuário do localStorage
    //trocar o botão salvar para atualizar-ok
    //salvar as informações no localstorage
    //fechar o modal
    //recarregar a página 

//LÓGICA DE CADASTRO
//abrir modal
//inserir informações
//clicar no botão salvar
//salvar os dados no localstorage
//fecho o modal
//recarrego a página

//FUNÇÃO DE EXIBIR OS USUÁRIOS
//pegar os itens no localStorage (getItem)
//colocar os dados dentro de um array
//utilizar o método foreach para percorrer o array
//criar a tabela usando o DOM (id do tbody)

const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);


const criarNovoUsuario = () => {
  let  = []
  
  const nome = document.getElementById('Nome').value;
  const celular = document.getElementById('Celular').value;
  const email = document.getElementById('E-mail').value;
  const cidade = document.getElementById('Cidade').value;

  const dadosUsuario = {
    nome:nome,
    celular:celular,
    email:email,
    cidade:cidade
  }
  return dadosUsuario;
}

if(localStorage.getItem('usuarioCadastrados')) {
    listaUsuario = JSON.parse(localStorage.getItem('usuarioCadastrados'));
}

listaUsuario.push(dadosUsuario);

localStorage.setItem('usuarioCadastrados', JSON.stringify(listaUsuario));

document.getElementById('salvar').addEventListener('click', closeModal);

window.location.reload();
}

document.getElementById('salvar').addEventListener('click', CapturarValores);

function CarregarUsuarios() {

let listaUsuario = [];

if(localStorage.getItem('usuarioCadastrados')) {
    listaUsuario = JSON.parse(localStorage.getItem('usuarioCadastrados'));

    
}

console.log
