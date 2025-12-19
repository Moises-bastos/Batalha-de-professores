function calcularDano(ataque: number, defesa: number): number {
    let dano = ataque - defesa; 
    return dano;
}
function simularBatalhas(professores: any[]) {
    for (let i = 0; i < professores.length; i++) {
        for (let j = i + 1; j < professores.length; j++) {

            let p1 = { ...professores[i] };
            let p2 = { ...professores[j] };

            let rodada = 1;

            console.log(`\nBatalha: ${p1.nome} vs ${p2.nome}`);

            while (p1.vida > 0 && p2.vida > 0) {
                console.log(`Rodada ${rodada}`);

                let danoP1 = calcularDano(p1.ataque, p2.defesa);
                p2.vida -= Math.max(danoP1, 1);

                if (p2.vida <= 0) {
                    console.log(`${p1.nome} venceu`);
                    break;
                }

                let danoP2 = calcularDano(p2.ataque, p1.defesa);
                p1.vida -= Math.max(danoP2, 1);

                if (p1.vida <= 0) {
                    console.log(`${p2.nome} venceu`);
                    break;
                }

                rodada++;
            }
        }
    }
}
self.onmessage = (event) => {
  const professores = event.data;

  const resultado = simularBatalhas(professores);

  self.postMessage(resultado);
};
