const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua situação amorosa?",
        alternativas: [
            {
                texto: "Solteiro",
                afirmacao: "Você é uma pessoa dona de uma personalidade bastante intensa."
            },
            {
                texto: "Enrolado",
                afirmacao: "Você tem certas dificuldades."
            }
        ]
    },
    {
        enunciado: "Com que frequência seus sentimentos influenciam em suas decisões?",
        alternativas: [
            {
                texto: "Nunca",
                afirmacao: "E segue em frente em busca do topo."
            },
            {
                texto: "Sempre",
                afirmacao: "E vai falhar e se fuder muito."
            }
        ]
    },
    {
        enunciado: "Você costuma pensar mais em seu",
        alternativas: [
            {
                texto: "Futuro",
                afirmacao: "Você está esperando aquela pessoa especial aparcer ainda."
            },
            {
                texto: "Passado",
                afirmacao: "Você ainda pensa naquela pessoa do passado."
            }
        ]
    },
    {
        enunciado: "Você se considera uma pessoa",
        alternativas: [
            {
                texto: "Sonhadora",
                afirmacao: "Você possui esperança de achar o veio da lancha."
            },
            {
                texto: "Pé no chão",
                afirmacao: "Sabe que não vai achar o veio da lancha, mas ainda procura achar algue,"
            }
        ]
    },
    {
        enunciado: "Como você costuma se sentir quando está sozinho? ",
        alternativas: [
            {
                texto: "Me sinto bem",
                afirmacao: "Você aprecia seu momentos a sós, isso pode desencorajar seu docinho de coco"
            },
            {
                texto: "Me sinto sollitário(a)",
                afirmacao: "Você é uma pessoa que tem carência de afeto. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
