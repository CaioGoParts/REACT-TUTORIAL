// database.js
// Exporte aqui seus arrays de dados, por exemplo:

export const tutoriais = [
  { id: 1, titulo: 'Tutorial 1', descricao: 'Acesse agora e confira nossas ofertas exclusivas. Clique aqui e conheça nosso produto completo. Entre na plataforma e aproveite os melhores preços. Descubra tudo sobre este item clicando aqui. Veja mais fotos e detalhes no link. Confira agora mesmo, estoque limitado. Aproveite esta oportunidade acessando já. Garanta o seu com apenas um clique. Saiba mais e compre com segurança aqui. Encontre tudo o que precisa neste anúncio.' },
  { id: 2, titulo: 'Tutorial 2', descricao: 'Descrição do tutorial 2' },
];

// Dados dos módulos de treinamento
export const modulosGestaoTempo = [
  {
    moduleId: '1',
    title: 'Boas-vindas ao curso',
    type: 'video',
    urlDoVideoEmbed: 'https://www.youtube.com/embed/VIDEO_ID_1',
    description: 'Introdução ao curso de gestão do tempo'
  },
  {
    moduleId: '2',
    title: 'Princípios da gestão do tempo',
    type: 'atividade',
    questions: [
      {
        question: 'Qual é o primeiro passo para gerenciar o tempo?',
        options: ['Definir prioridades', 'Comprar um relógio', 'Dormir mais', 'Assistir TV'],
        answer: 0
      }
    ]
  },
  {
    moduleId: '3',
    title: 'Como a falta de gerenciamento afeta sua vida',
    type: 'video',
    urlDoVideoEmbed: 'https://www.youtube.com/embed/VIDEO_ID_2',
    description: 'Impactos da má gestão do tempo'
  },
  {
    moduleId: '4',
    title: 'Benefícios do gerenciamento do tempo',
    type: 'atividade',
    questions: [
      {
        question: 'Qual benefício você ganha com boa gestão do tempo?',
        options: ['Mais estresse', 'Menos produtividade', 'Melhor qualidade de vida', 'Mais dívidas'],
        answer: 2
      }
    ]
  }
  // Adicione mais módulos conforme necessário
];

export const modulosTutorial2 = [
  {
    moduleId: '1',
    title: 'Introdução ao Tutorial 2',
    type: 'video',
    urlDoVideoEmbed: 'https://www.youtube.com/embed/VIDEO_ID_3',
    description: 'Bem-vindo ao segundo tutorial'
  },
  {
    moduleId: '2',
    title: 'Atividade Inicial',
    type: 'atividade',
    questions: [
      {
        question: 'Você está pronto para aprender?',
        options: ['Sim', 'Não', 'Talvez', 'Depois'],
        answer: 0
      }
    ]
  }
  // Adicione mais módulos conforme necessário
];
