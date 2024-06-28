cost caixaPrincipal= document.querySelecttor(".caixa-principal");
cost caixaPergunta = document.querySelector(".caixa-perguntas");
cost caixaAlternativas = document.querySelector(".caixa-alternativa");
cost caixaResultado = document.querySelector(".texto-resultado");
cost textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "Assim que saiu de casa você se depara com uma nova tecnologia",
      alternativas: [
    
             "Isso é assustador",
           "Isso é interresante"
      ]
 },
{
enunciado: "Identifique como a nova tecnologia pode ser aplicada no campo ou carreira",
alternativas: [

"Aplicar uma nova tecnologia de maneira eficaz requer uma abordagem de estratégica",
"Fazer um atendimento profundo de como ela pode agregar valor ou seu campo ou carreira",
   ]
},
{

  enunciado: "Quais são os tres tipos de inteligencia artificial",
alternativas: [
     "Inteligência artificial limita(ANI), Inteligência artificial geral(AGI)",

      "Equívoco acreditar que a IA possui consciência e emoção como os seres humanos"
    ]
 },
 {

 enunciado: "Quais são os desafios comuns no processamento de inteligência artificial",
      alternativas: [
           "Muitos algaritimos de IA são considerados devido á dificuldade de interpretar como tomam decisões.",

            "Pensar que ferramentas e tecnologia de IA são inacessíveis ou extremamente caras"
   ]
},
{
      

            enunciado: " o que são redes neurais artificiais e como pode ser evitado",
            alternativas: [
           
            "implementar sistemas de monitoramento contínuo",
            "não usar conjunto de dados representativos e livres de preconceito"
 ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     mostraAlternativas();
}
   function mostraAlternativa(){
      for(const alternativa of perguntaAtual.alternativas){
          const botaAlternativas = document.createElement("button");
          botaoAlternativas.textContente = alternativas;
          caixaAlternativas.appendChild(botaoAlternativas);
      }

   }