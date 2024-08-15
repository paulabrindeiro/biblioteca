const synopses = [
    "Dom Quixote lutando contra moinhos de vento ou como gostamos de chamar: terça-feira.",
    "O Pequeno Príncipe nos ensinando que os adultos são apenas crianças crescidas. Plot twist: a gente já sabia!",
    "1984, onde o Big Brother começou antes mesmo da TV!",
    "A Revolução dos Bichos: quando os animais finalmente decidem que basta, mas acabam se tornando os próprios vilões.",
    "O Morro dos Ventos Uivantes: basicamente, quem ama briga mais.",
    "O Senhor dos Anéis: um anel para governar todos... e provavelmente perder as chaves de casa.",
    "Harry Potter: A saga de um menino que nunca teve um dia normal em sua vida.",
    "Jogos Vorazes: Quando um reality show se torna um pouco mais mortal, e 'vencer' significa não ser eliminado... literalmente!",
    "O Apanhador no Campo de Centeio: o guia oficial do adolescente rebelde dos anos 50.",
    "Crime e Castigo: Quando a culpa não te deixa dormir... por meses.",
    "A Culpa é das Estrelas: A prova de que o amor adolescente é dolorosamente lindo... e que caixas de lenços nunca são suficientes.",
    "A Ilha do Tesouro: onde piratas fazem dieta de rum e ouro.",
    "Drácula: o vampiro que ensinou ao mundo como brilhar no escuro muito antes do Edward Cullen.",
    "A Metamorfose: e você achando que acordar com dor nas costas era ruim.",
    "Os Miseráveis: o título já avisa... prepare os lenços!",
    "Orgulho e Preconceito: Prova de que mesmo no século XIX, o drama romântico já reinava.",
    "Moby Dick: Porque nada diz 'obsessão' como perseguir uma baleia branca pelos sete mares.",
    "O Grande Gatsby: festas luxuosas, carros velozes e... solidão.",
    "Alice no País das Maravilhas: O que acontece quando você segue coelhos e bebe coisas estranhas.",
    "O Sol é para Todos: Uma lição de justiça que nunca sai de moda.",
    "Frankenstein: O monstro que só queria um amigo... ou um raio de sol.",
    "Hamlet: A história do príncipe dinamarquês que transformou procrastinação em arte.",
    "Romeu e Julieta: a maior tragédia de uma relação à distância.",
    "A Divina Comédia: Quando o inferno, o purgatório e o céu têm fila de espera.",
    "O Conde de Monte Cristo: A vingança é um prato que se serve... bem frio, e com um pouco de exagero."
];

document.querySelectorAll('.book').forEach((book, index) => {
    book.addEventListener('click', () => {
        document.getElementById('synopsis-box').innerHTML = `<p>${synopses[index]}</p>`;
    });
});
