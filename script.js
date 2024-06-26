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
                afirmacao: "E segue em frente em busca do topo"
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
                afirmacao: "Você vai se esforçar para ter alguém."
            },
            {
                texto: "Passado",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você se considera uma pessoa",
        alternativas: [
            {
                texto: "Sonhadora",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Pé no chão",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Como você costuma se sentir quando está sozinho? ",
        alternativas: [
            {
                texto: "Me sinto bem",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Me sinto sollitário(a)",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
