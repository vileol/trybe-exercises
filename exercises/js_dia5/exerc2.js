 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()         
        */

//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
       
t = 'to rico demais da conta';
function alterParagraph(paragraphNumber ,t ){
    let p = document.getElementsByTagName("p")[paragraphNumber].innerText = ""+t;
}
alterParagraph(1,t);

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function alterBackgroundColor(className,n,color){
    document.getElementsByClassName(className)[n].style.backgroundColor =color;
}

alterBackgroundColor("main",0,"rgb(76,164,109)")

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.

function alterInnerSquare(color){
    document.getElementsByClassName("main")[0].getElementsByClassName("center")[0].style.background = color}
alterInnerSquare("white");


// 4. Crie uma função que corrija o texto da tag <h1>.7

function alterHeadingText(t){
    document.getElementsByTagName("h1")[0].innerText = t;
}
let texto = "Javascript"
alterHeadingText(texto);

//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
texto_1 = "Padrão de escrita";
alterParagraph(0,texto_1)

//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showOnConsole(){
    let numberOfParagraphs= document.getElementsByTagName("p").length;
    for (let i = 0; i<numberOfParagraphs; i += 1){
        console.log(document.getElementsByTagName("p")[i].innerText);
    }  
}