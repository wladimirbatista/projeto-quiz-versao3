import questoes from "../data";

export const selecionarQuestoesAleatorias = (quantidadesQuestoes) => {
  const questoesAleatorias = questoes.sort(() => Math.random() - 0.5);
  return questoesAleatorias.slice(0, quantidadesQuestoes);  
}

// export const embaralharArray = (array) => {
//   const arrayEmbaralhado = array.slice(); // Clona o array para não modificar o original

//   for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
//   }
//   return arrayEmbaralhado;
// };

// export const embaralharOpcoesPergunta = (pergunta) => {

//   console.log(pergunta.id)

//   // console.log('res:', pergunta);
  
//   let opcoesErradas = pergunta.respostasErradas;

//   // console.log(opcoesErradas);

//   let opcaoCorreta = pergunta.respostaCorreta

//   // console.log(opcaoCorreta)

//   // const concatenaOpcoes = opcoesErradas.concat(opcaoCorreta)

//   // console.log(concatenaOpcoes)
//   // // const respostasErradas = Array.isArray(pergunta.respostasErradas) ? pergunta.respostasErradas : [];
//   // // const arrayUnificado = respostasErradas.concat(pergunta.respostaCorreta);

//   // // console.log('resposta: ', arrayUnificado)

//   const opcoesEmbaralhadas = embaralharArray(concatenaOpcoes);

//   // console.log(opcoesEmbaralhadas)

//   // // console.log(opcoesEmbaralhadas)

//   return opcoesEmbaralhadas;
// };


// export const embaralharOpcoesPergunta = (pergunta) => {
//   const opcoesEmbaralhadas = pergunta.respostasErradas;
//   return embaralharArray(opcoesEmbaralhadas);
// };

export const embaralharOpcoesPergunta = (pergunta) => {
  return {
    ...pergunta,
    opcoes: selecionarQuestoesAleatorias(pergunta.opcoes),
  };
};

