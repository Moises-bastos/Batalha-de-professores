function batalhaDeprofessores(){
    console.log("Iniciando a batalha de professores!"); 
    let professores = [
    { nome: "Maykol", xp: 10, vida: 120, ataque: 25, defesa: 10, velocidade: 15 },
    { nome: "Sekeff", xp: 8, vida: 140, ataque: 20, defesa: 12, velocidade: 10 },
    { nome: "Jivago", xp: 12, vida: 110, ataque: 30, defesa: 8,  velocidade: 18 },
    { nome: "Mayllon", xp: 9, vida: 150, ataque: 18, defesa: 14, velocidade: 9 },
    { nome: "Marcos", xp: 11, vida: 130, ataque: 22, defesa: 11, velocidade: 13 },
    { nome: "Iallen", xp: 13, vida: 115, ataque: 26, defesa: 13, velocidade: 11 },
];
 const worker = new Worker("worker.js");

 
  worker.postMessage(professores);

  worker.onmessage = (event) => {
    console.log("Resultado final:");
    console.log(event.data);
  };

   }
batalhaDeprofessores();

