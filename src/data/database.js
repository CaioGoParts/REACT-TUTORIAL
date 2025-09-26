// database.js
// Exporte aqui seus arrays de dados, por exemplo:

export const tutoriais = [
  { id: 1, titulo: 'Tutorial 1', descricao: 'Acesse agora e confira nossas ofertas exclusivas. Clique aqui e conheça nosso produto completo. Entre na plataforma e aproveite os melhores preços. Descubra tudo sobre este item clicando aqui. Veja mais fotos e detalhes no link. Confira agora mesmo, estoque limitado. Aproveite esta oportunidade acessando já. Garanta o seu com apenas um clique. Saiba mais e compre com segurança aqui. Encontre tudo o que precisa neste anúncio.' },
  { id: 2, titulo: 'Tutorial 2', descricao: 'Descrição do tutorial 2' },
];

export const modulosGestaoTempo = [
  // 1º módulo: vídeo
  { moduleId: 'mod1', type: 'video', title: 'Boas-vindas ao curso', status: 'A concluir', videoId: 'video-gestao-tempo', urlDoVideoEmbed: 'https://www.youtube.com/embed/Rj4rAuce0M0' },
  // 2º módulo: atividade
  { moduleId: 'mod2', type: 'atividade', title: 'Atividade: Princípios da gestão do tempo', status: 'A concluir',
    questions: [
      {
        question: 'Qual é o principal objetivo da gestão do tempo?',
        options: ['Aumentar o estresse', 'Melhorar a produtividade', 'Reduzir o tempo de lazer', 'Aumentar a quantidade de tarefas'],
        answer: 1
      },
      {
        question: 'Qual destas NÃO é uma técnica de gestão do tempo?',
        options: ['Pomodoro', 'Lei de Parkinson', 'Coma o Sapo', 'Procrastinação'],
        answer: 3
      }
    ]
  },
  // 3º módulo: vídeo
  { moduleId: 'mod3', type: 'video', title: 'Como a falta de gerenciamento de tempo afeta sua vida', status: 'A concluir', videoId: 'video-gestao-tempo', urlDoVideoEmbed: 'https://www.youtube.com/embed/Rj4rAuce0M0' },
  // 4º módulo: atividade
  { moduleId: 'mod4', type: 'atividade', title: 'Atividade: Benefícios do gerenciamento do tempo', status: 'A concluir',
    questions: [
      {
        question: 'Qual é um benefício direto de um bom gerenciamento do tempo?',
        options: ['Mais estresse', 'Menos produtividade', 'Mais tempo livre', 'Mais tarefas acumuladas'],
        answer: 2
      },
      {
        question: 'O que pode ser evitado com uma boa gestão do tempo?',
        options: ['Procrastinação', 'Organização', 'Foco', 'Resultados positivos'],
        answer: 0
      }
    ]
  },
  // 5º módulo: vídeo
  { moduleId: 'mod5', type: 'video', title: 'Técnicas e dicas para gerenciamento do tempo', status: 'A concluir', videoId: 'video-gestao-tempo', urlDoVideoEmbed: 'https://www.youtube.com/embed/Rj4rAuce0M0' },
  // 6º módulo: atividade
  { moduleId: 'mod6', type: 'atividade', title: 'Atividade: Técnicas de gerenciamento', status: 'A concluir',
    questions: [
      {
        question: 'O que é a Técnica Pomodoro?',
        options: ['Trabalhar sem pausas', 'Dividir o tempo em blocos com intervalos', 'Fazer tudo ao mesmo tempo', 'Evitar tarefas importantes'],
        answer: 1
      },
      {
        question: 'A Lei de Parkinson afirma que:',
        options: ['O trabalho se expande para preencher o tempo disponível', 'Devemos procrastinar sempre', 'Devemos evitar pausas', 'Devemos trabalhar sem planejamento'],
        answer: 0
      }
    ]
  },
  // 7º módulo: vídeo
  { moduleId: 'mod7', type: 'video', title: 'Técnicas e dicas para gerenciamento do tempo | Técnica Pomodoro', status: 'A concluir', videoId: 'video-gestao-tempo', urlDoVideoEmbed: 'https://www.youtube.com/embed/Rj4rAuce0M0' },
  // 8º módulo: atividade
  { moduleId: 'mod8', type: 'atividade', title: 'Atividade: Quadrantes de Stephen Covey', status: 'A concluir',
    questions: [
      {
        question: 'O que são os quadrantes de Stephen Covey?',
        options: ['Método de priorização de tarefas', 'Técnica de procrastinação', 'Ferramenta de distração', 'Método de relaxamento'],
        answer: 0
      },
      {
        question: 'Qual quadrante devemos evitar?',
        options: ['Importante e urgente', 'Não importante e urgente', 'Importante e não urgente', 'Não importante e não urgente'],
        answer: 3
      }
    ]
  },
  // 9º módulo: vídeo
  { moduleId: 'mod9', type: 'video', title: 'Técnicas e dicas para gerenciamento do tempo | Quadrantes de Stephen Covey', status: 'A concluir', videoId: 'video-gestao-tempo', urlDoVideoEmbed: 'https://www.youtube.com/embed/Rj4rAuce0M0' },
  // 10º módulo: atividade
  { moduleId: 'mod10', type: 'atividade', title: 'Atividade: Maus hábitos', status: 'A concluir',
    questions: [
      {
        question: 'Qual é um mau hábito que prejudica a gestão do tempo?',
        options: ['Planejar o dia', 'Fazer pausas', 'Procrastinar', 'Definir prioridades'],
        answer: 2
      },
      {
        question: 'Como podemos evitar maus hábitos?',
        options: ['Ignorando-os', 'Reconhecendo e mudando comportamentos', 'Fazendo mais tarefas', 'Trabalhando sem parar'],
        answer: 1
      }
    ]
  },
  // 11º módulo: vídeo
  { moduleId: 'mod11', type: 'video', title: 'Manter-se motivado em sua gestão do tempo', status: 'A concluir', videoId: 'video-gestao-tempo', urlDoVideoEmbed: 'https://www.youtube.com/embed/Rj4rAuce0M0' },
  // 12º módulo: atividade
  { moduleId: 'mod12', type: 'atividade', title: 'Atividade: Motivação', status: 'A concluir',
    questions: [
      {
        question: 'O que pode ajudar a manter a motivação?',
        options: ['Falta de objetivos', 'Definir metas claras', 'Procrastinação', 'Desorganização'],
        answer: 1
      },
      {
        question: 'Por que é importante celebrar pequenas conquistas?',
        options: ['Para perder tempo', 'Para se desmotivar', 'Para manter o foco e a motivação', 'Para procrastinar'],
        answer: 2
      }
    ]
  },
  // 13º módulo: vídeo
  { moduleId: 'mod13', type: 'video', title: 'Exercícios', status: 'A concluir', videoId: 'video-gestao-tempo', urlDoVideoEmbed: 'https://www.youtube.com/embed/Rj4rAuce0M0' },
  // 14º módulo: atividade
  { moduleId: 'mod14', type: 'atividade', title: 'Atividade: Encerramento', status: 'A concluir',
    questions: [
      {
        question: 'O que você aprendeu sobre gestão do tempo?',
        options: ['Nada', 'A importância de planejar', 'A procrastinar mais', 'A evitar organização'],
        answer: 1
      },
      {
        question: 'Qual será seu próximo passo?',
        options: ['Não fazer nada', 'Aplicar as técnicas aprendidas', 'Esquecer o curso', 'Procrastinar'],
        answer: 1
      }
    ]
  }
];

export const modulosTutorial2 = [
  // 1º módulo: vídeo
  { moduleId: 'mod1', type: 'video', title: 'Boas-vindas ao curso', status: 'A concluir', videoId: 'video-tutorial2', urlDoVideoEmbed: 'https://www.youtube.com/embed/1_gvNAa0qyM' },
  // 2º módulo: atividade
  { moduleId: 'mod2', type: 'atividade', title: 'Atividade: Princípios da gestão do tempo', status: 'A concluir',
    questions: [
      {
        question: 'Qual é o principal objetivo da gestão do tempo?',
        options: ['Aumentar o estresse', 'Melhorar a produtividade', 'Reduzir o tempo de lazer', 'Aumentar a quantidade de tarefas'],
        answer: 1
      },
      {
        question: 'Qual destas NÃO é uma técnica de gestão do tempo?',
        options: ['Pomodoro', 'Lei de Parkinson', 'Coma o Sapo', 'Procrastinação'],
        answer: 3
      }
    ]
  },
  // 3º módulo: vídeo
  { moduleId: 'mod3', type: 'video', title: 'Como a falta de gerenciamento de tempo afeta sua vida', status: 'A concluir', videoId: 'video-tutorial2', urlDoVideoEmbed: 'https://www.youtube.com/embed/1_gvNAa0qyM' },
  // 4º módulo: atividade
  { moduleId: 'mod4', type: 'atividade', title: 'Atividade: Benefícios do gerenciamento do tempo', status: 'A concluir',
    questions: [
      {
        question: 'Qual é um benefício direto de um bom gerenciamento do tempo?',
        options: ['Mais estresse', 'Menos produtividade', 'Mais tempo livre', 'Mais tarefas acumuladas'],
        answer: 2
      },
      {
        question: 'O que pode ser evitado com uma boa gestão do tempo?',
        options: ['Procrastinação', 'Organização', 'Foco', 'Resultados positivos'],
        answer: 0
      }
    ]
  },
  // 5º módulo: vídeo
  { moduleId: 'mod5', type: 'video', title: 'Técnicas e dicas para gerenciamento do tempo', status: 'A concluir', videoId: 'video-tutorial2', urlDoVideoEmbed: 'https://www.youtube.com/embed/1_gvNAa0qyM' },
  // 6º módulo: atividade
  { moduleId: 'mod6', type: 'atividade', title: 'Atividade: Técnicas de gerenciamento', status: 'A concluir',
    questions: [
      {
        question: 'O que é a Técnica Pomodoro?',
        options: ['Trabalhar sem pausas', 'Dividir o tempo em blocos com intervalos', 'Fazer tudo ao mesmo tempo', 'Evitar tarefas importantes'],
        answer: 1
      },
      {
        question: 'A Lei de Parkinson afirma que:',
        options: ['O trabalho se expande para preencher o tempo disponível', 'Devemos procrastinar sempre', 'Devemos evitar pausas', 'Devemos trabalhar sem planejamento'],
        answer: 0
      }
    ]
  },
  // 7º módulo: vídeo
  { moduleId: 'mod7', type: 'video', title: 'Técnicas e dicas para gerenciamento do tempo | Técnica Pomodoro', status: 'A concluir', videoId: 'video-tutorial2', urlDoVideoEmbed: 'https://www.youtube.com/embed/1_gvNAa0qyM' },
  // 8º módulo: atividade
  { moduleId: 'mod8', type: 'atividade', title: 'Atividade: Quadrantes de Stephen Covey', status: 'A concluir',
    questions: [
      {
        question: 'O que são os quadrantes de Stephen Covey?',
        options: ['Método de priorização de tarefas', 'Técnica de procrastinação', 'Ferramenta de distração', 'Método de relaxamento'],
        answer: 0
      },
      {
        question: 'Qual quadrante devemos evitar?',
        options: ['Importante e urgente', 'Não importante e urgente', 'Importante e não urgente', 'Não importante e não urgente'],
        answer: 3
      }
    ]
  },
  // 9º módulo: vídeo
  { moduleId: 'mod9', type: 'video', title: 'Técnicas e dicas para gerenciamento do tempo | Quadrantes de Stephen Covey', status: 'A concluir', videoId: 'video-tutorial2', urlDoVideoEmbed: 'https://www.youtube.com/embed/1_gvNAa0qyM' },
  // 10º módulo: atividade
  { moduleId: 'mod10', type: 'atividade', title: 'Atividade: Maus hábitos', status: 'A concluir',
    questions: [
      {
        question: 'Qual é um mau hábito que prejudica a gestão do tempo?',
        options: ['Planejar o dia', 'Fazer pausas', 'Procrastinar', 'Definir prioridades'],
        answer: 2
      },
      {
        question: 'Como podemos evitar maus hábitos?',
        options: ['Ignorando-os', 'Reconhecendo e mudando comportamentos', 'Fazendo mais tarefas', 'Trabalhando sem parar'],
        answer: 1
      }
    ]
  },
  // 11º módulo: vídeo
  { moduleId: 'mod11', type: 'video', title: 'Manter-se motivado em sua gestão do tempo', status: 'A concluir', videoId: 'video-tutorial2', urlDoVideoEmbed: 'https://www.youtube.com/embed/1_gvNAa0qyM' },
  // 12º módulo: atividade
  { moduleId: 'mod12', type: 'atividade', title: 'Atividade: Motivação', status: 'A concluir',
    questions: [
      {
        question: 'O que pode ajudar a manter a motivação?',
        options: ['Falta de objetivos', 'Definir metas claras', 'Procrastinação', 'Desorganização'],
        answer: 1
      },
      {
        question: 'Por que é importante celebrar pequenas conquistas?',
        options: ['Para perder tempo', 'Para se desmotivar', 'Para manter o foco e a motivação', 'Para procrastinar'],
        answer: 2
      }
    ]
  },
  // 13º módulo: vídeo
  { moduleId: 'mod13', type: 'video', title: 'Exercícios', status: 'A concluir', videoId: 'video-tutorial2', urlDoVideoEmbed: 'https://www.youtube.com/embed/1_gvNAa0qyM' },
  // 14º módulo: atividade
  { moduleId: 'mod14', type: 'atividade', title: 'Atividade: Encerramento', status: 'A concluir',
    questions: [
      {
        question: 'O que você aprendeu sobre gestão do tempo?',
        options: ['Nada', 'A importância de planejar', 'A procrastinar mais', 'A evitar organização'],
        answer: 1
      },
      {
        question: 'Qual será seu próximo passo?',
        options: ['Não fazer nada', 'Aplicar as técnicas aprendidas', 'Esquecer o curso', 'Procrastinar'],
        answer: 1
      }
    ]
  }
];
