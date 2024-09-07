function pesquisar() {
    //console.log(dados);

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById
("campo-pesquisa").value
 // se campoPesquisa for uma string sem nada
 if (!campoPesquisa) {
       section.innerHTML = "<p>Resultado não encontrado. Você precisa digitar uma palavra chave sobre o tema!</p>"
 return 
 }

 campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = ""; 
let tags = "";

//para cada dado  dentro da lista de dados
for (let dado of dados) {
       titulo = dado.titulo.toLowerCase()
       descricao = dado.descricao.toLowerCase()
       tags = dado.tags.toLowerCase()
       //se titulo includes campoPesquisa
       if (titulo.includes(campoPesquisa) ||
       descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
              // cria um novo elemento
              resultados += `
              <div class="item-resultado">
                   <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
                   </h2> 
            <p class="descricao-meta">${dado.descricao}O protagonista, um cavalheiro inglês excêntrico e extremamente pontual. 
             É um homem rico e reservado que aposta com seus amigos que conseguirá dar a volta
             ao mundo em 80 dias.</p>
            <a href=${dado.link} target="_blank">Mais informações sobre a obra</a>
            </div>
       `  ;
       }
           

}

       if (!resultados){
              resultados = "<p>Nada foi encontrado</p>"
       }

section.innerHTML = resultados;
}

