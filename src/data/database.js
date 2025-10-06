// database.js
// Exporte aqui seus arrays de dados, por exemplo:

export const tutoriais = [
  { id: '1', titulo: 'Admin GoParts', descricao: 'Aprend                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      a a utilizar todas as funcionalidades do sistema administrativo GoParts. Desde anexar notas fiscais, emitir etiquetas, verificar margens, até gerenciar anúncios e pedidos no Mercado Livre e marketplace GoParts.' },
  { id: '2', titulo: 'Mercado Livre', descricao: 'Aprenda tudo sobre vender no Mercado Livre: cadastro de empresa, documentos necessários, taxas, gerenciamento de anúncios, colaboradores e muito mais para maximizar suas vendas.' },
  { id: '3', titulo: 'Shopee', descricao: 'Aprenda tudo sobre vender na Shopee: finalização de cadastro, conta bancária, decoração da loja, atendimento ao cliente, recebimento de valores e boas práticas de embalagem.' },
];

export const modulosAdminGoParts = [               
  // 1º módulo: vídeo
  { moduleId: 'mod1', type: 'video', title: 'Como anexar nota no admin | Como emitir etiqueta de envio/ solicitação de coleta', status: 'A concluir', videoId: 'video-admin-1', urlDoVideoEmbed: 'https://www.youtube.com/embed/-v6nRrpKlBc' },
  // 2º módulo: atividade
  { moduleId: 'mod2', type: 'atividade', title: 'Atividade: Como anexar nota e emitir etiqueta', status: 'A concluir',
    questions: [
      {
        question: 'Para que serve anexar nota fiscal no admin?',
        options: ['Para complicar o processo', 'Para documentar vendas e cumprir obrigações fiscais', 'Para aumentar custos', 'Não é necessário'],
        answer: 1
      },
      {
        question: 'Como emitir etiqueta de envio no sistema?',
        options: ['Manualmente apenas', 'Através do sistema admin GoParts', 'Por telefone', 'Não é possível'],
        answer: 1
      }
    ]
  },
  // 3º módulo: vídeo
  { moduleId: 'mod3', type: 'video', title: 'Como verificar as margens por curva', status: 'A concluir', videoId: 'video-admin-2', urlDoVideoEmbed: 'https://www.youtube.com/embed/lo3tspBBaPo' },
  // 4º módulo: atividade
  { moduleId: 'mod4', type: 'atividade', title: 'Atividade: Como verificar margens por curva', status: 'A concluir',
    questions: [
      {
        question: 'Por que é importante verificar margens por curva?',
        options: ['Para perder tempo', 'Para otimizar rentabilidade e precificação', 'Para complicar vendas', 'Não é relevante'],
        answer: 1
      },
      {
        question: 'Onde verificamos margens por curva no sistema?',
        options: ['No relatório de margens', 'Por telefone', 'Não é possível verificar', 'Por e-mail'],
        answer: 0
      }
    ]
  },
  // 5º módulo: vídeo
  { moduleId: 'mod5', type: 'video', title: 'Verifique a rentabilidade das vendas no marketplace GoParts', status: 'A concluir', videoId: 'video-admin-3', urlDoVideoEmbed: 'https://www.youtube.com/embed/w8JXGUbiHFY' },
  // 6º módulo: atividade
  { moduleId: 'mod6', type: 'atividade', title: 'Atividade: Rentabilidade marketplace GoParts', status: 'A concluir',
    questions: [
      {
        question: 'Para que serve verificar a rentabilidade das vendas?',
        options: ['Para perder dinheiro', 'Para analisar performance e margem de lucro', 'Para complicar o processo', 'Não é importante'],
        answer: 1
      },
      {
        question: 'Onde verificamos a rentabilidade no marketplace GoParts?',
        options: ['Por telefone', 'No sistema admin GoParts', 'Por e-mail', 'Não é possível'],
        answer: 1
      }
    ]
  },
  // 7º módulo: vídeo
  { moduleId: 'mod7', type: 'video', title: 'Verifique a rentabilidade das vendas no Mercado Livre', status: 'A concluir', videoId: 'video-admin-4', urlDoVideoEmbed: 'https://www.youtube.com/embed/-eqiuxGmHF8' },
  // 8º módulo: atividade
  { moduleId: 'mod8', type: 'atividade', title: 'Atividade: Rentabilidade Mercado Livre', status: 'A concluir',
    questions: [
      {
        question: 'Por que verificar rentabilidade das vendas no Mercado Livre?',
        options: ['Para perder dinheiro', 'Para analisar performance e taxas', 'Para complicar vendas', 'Não é relevante'],
        answer: 1
      },
      {
        question: 'Onde acessamos relatórios de vendas ML?',
        options: ['Por telefone', 'No sistema admin', 'Não é possível', 'Por carta'],
        answer: 1
      }
    ]
  },
  // 9º módulo: vídeo
  { moduleId: 'mod9', type: 'video', title: 'Conciliação das vendas no Mercado Livre', status: 'A concluir', videoId: 'video-admin-5', urlDoVideoEmbed: 'https://www.youtube.com/embed/Yge7ncgpyVU' },
  // 10º módulo: atividade
  { moduleId: 'mod10', type: 'atividade', title: 'Atividade: Conciliação Mercado Livre', status: 'A concluir',
    questions: [
      {
        question: 'Para que serve a conciliação das vendas?',
        options: ['Para complicar', 'Para conferir pagamentos e vendas', 'Para perder tempo', 'Não é necessário'],
        answer: 1
      },
      {
        question: 'Com que frequência deve ser feita a conciliação?',
        options: ['Nunca', 'Regularmente', 'Só no final do ano', 'Apenas quando há problemas'],
        answer: 1
      }
    ]
  },
  // 11º módulo: vídeo
  { moduleId: 'mod11', type: 'video', title: 'Onde fazer os despachos da Jadlog', status: 'A concluir', videoId: 'video-admin-6', urlDoVideoEmbed: 'https://www.youtube.com/embed/ZcvUz1qZJJE' },
  // 12º módulo: atividade
  { moduleId: 'mod12', type: 'atividade', title: 'Atividade: Despachos Jadlog', status: 'A concluir',
    questions: [
      {
        question: 'Para que serve fazer despacho na Jadlog?',
        options: ['Para complicar', 'Para enviar produtos aos clientes', 'Para perder tempo', 'Não é necessário'],
        answer: 1
      },
      {
        question: 'Onde encontramos informações de despacho?',
        options: ['No sistema admin', 'Por telefone', 'Por carta', 'Não é possível'],
        answer: 0
      }
    ]
  },
  // 13º módulo: vídeo
  { moduleId: 'mod13', type: 'video', title: 'Onde verificar os itens de um pedido/ de um GPkit', status: 'A concluir', videoId: 'video-admin-7', urlDoVideoEmbed: 'https://www.youtube.com/embed/qFOgi-Wm9js' },
  // 14º módulo: atividade
  { moduleId: 'mod14', type: 'atividade', title: 'Atividade: Verificar itens de pedido', status: 'A concluir',
    questions: [
      {
        question: 'Por que verificar itens de um pedido?',
        options: ['Para complicar', 'Para garantir que está completo e correto', 'Para perder tempo', 'Não é importante'],
        answer: 1
      },
      {
        question: 'O que é um GPkit?',
        options: ['Um erro do sistema', 'Um conjunto de peças agrupadas', 'Uma taxa', 'Um problema'],
        answer: 1
      }
    ]
  },
  // 15º módulo: vídeo
  { moduleId: 'mod15', type: 'video', title: 'Como verificar as peças publicadas no Mercado Livre', status: 'A concluir', videoId: 'video-admin-8', urlDoVideoEmbed: 'https://www.youtube.com/embed/bPUos2qHQXc' },
  // 16º módulo: atividade
  { moduleId: 'mod16', type: 'atividade', title: 'Atividade: Verificação de peças', status: 'A concluir',
    questions: [
      {
        question: 'Por que é importante verificar as peças publicadas?',
        options: ['Para perder tempo', 'Para garantir qualidade e disponibilidade', 'Para complicar o processo', 'Para aumentar custos'],
        answer: 1
      },
      {
        question: 'Onde verificamos as peças publicadas?',
        options: ['No sistema admin', 'Não é necessário verificar', 'Por telefone', 'Por e-mail'],
        answer: 0
      }
    ]
  },
  // 17º módulo: vídeo
  { moduleId: 'mod17', type: 'video', title: 'Como bloquear peças', status: 'A concluir', videoId: 'video-admin-9', urlDoVideoEmbed: 'https://www.youtube.com/embed/b4pHbU8jnQc' },
  // 18º módulo: atividade
  { moduleId: 'mod18', type: 'atividade', title: 'Atividade: Bloqueio de peças', status: 'A concluir',
    questions: [
      {
        question: 'Quando devemos bloquear uma peça?',
        options: ['Sempre', 'Quando está fora de estoque ou com problemas', 'Nunca', 'Aleatoriamente'],
        answer: 1
      },
      {
        question: 'O bloqueio de peças ajuda a:',
        options: ['Confundir clientes', 'Evitar vendas de produtos indisponíveis', 'Aumentar reclamações', 'Reduzir eficiência'],
        answer: 1
      }
    ]
  },
  // 19º módulo: vídeo
  { moduleId: 'mod19', type: 'video', title: 'Como alterar/fixar preços', status: 'A concluir', videoId: 'video-admin-10', urlDoVideoEmbed: 'https://www.youtube.com/embed/K_UWGId4Sfc' },
  // 20º módulo: atividade
  { moduleId: 'mod20', type: 'atividade', title: 'Atividade: Alteração de preços', status: 'A concluir',
    questions: [
      {
        question: 'Por que é importante fixar preços corretamente?',
        options: ['Para perder dinheiro', 'Para manter competitividade e margem', 'Para confundir clientes', 'Não é importante'],
        answer: 1
      },
      {
        question: 'Onde alteramos os preços?',
        options: ['No sistema admin', 'Por telefone', 'Não é possível alterar', 'Manualmente em cada venda'],
        answer: 0
      }
    ]
  },
  // 21º módulo: vídeo
  { moduleId: 'mod21', type: 'video', title: 'Como solicitar a integração de anúncios', status: 'A concluir', videoId: 'video-admin-11', urlDoVideoEmbed: 'https://www.youtube.com/embed/ZIpuCOIgEEw' },
  // 22º módulo: atividade
  { moduleId: 'mod22', type: 'atividade', title: 'Atividade: Integração de anúncios', status: 'A concluir',
    questions: [
      {
        question: 'Para que serve a integração de anúncios?',
        options: ['Para complicar', 'Para sincronizar produtos nos marketplaces', 'Para deletar produtos', 'Para aumentar custos'],
        answer: 1
      },
      {
        question: 'Como solicitamos a integração?',
        options: ['Por telefone', 'Através do sistema admin', 'Não é possível', 'Por carta'],
        answer: 1
      }
    ]
  },
  // 23º módulo: vídeo
  { moduleId: 'mod23', type: 'video', title: 'Como solicitar cancelamento/ devolução de pedidos', status: 'A concluir', videoId: 'video-admin-12', urlDoVideoEmbed: 'https://www.youtube.com/embed/7d9jxUsjs4c' },
  // 24º módulo: atividade
  { moduleId: 'mod24', type: 'atividade', title: 'Atividade: Cancelamento e devolução', status: 'A concluir',
    questions: [
      {
        question: 'Quando podemos cancelar um pedido?',
        options: ['A qualquer momento sem critério', 'Seguindo políticas e prazos', 'Nunca', 'Apenas aos domingos'],
        answer: 1
      },
      {
        question: 'O processo de devolução deve ser:',
        options: ['Complicado para desestimular', 'Claro e bem documentado', 'Secreto', 'Inexistente'],
        answer: 1
      }
    ]
  },
  // 25º módulo: vídeo
  { moduleId: 'mod25', type: 'video', title: 'Como solicitar cadastro de peças e kits', status: 'A concluir', videoId: 'video-admin-13', urlDoVideoEmbed: 'https://www.youtube.com/embed/vU8nahi8PQg' },
  // 26º módulo: atividade
  { moduleId: 'mod26', type: 'atividade', title: 'Atividade: Cadastro de peças', status: 'A concluir',
    questions: [
      {
        question: 'Por que cadastrar peças e kits corretamente?',
        options: ['Para organizar inventário', 'Para complicar', 'Não é importante', 'Para perder tempo'],
        answer: 0
      },
      {
        question: 'Onde solicitamos o cadastro?',
        options: ['Por e-mail', 'No sistema admin', 'Não é possível', 'Por WhatsApp apenas'],
        answer: 1
      }
    ]
  },
  // 27º módulo: vídeo
  { moduleId: 'mod27', type: 'video', title: 'Acesse a aba ajuda!', status: 'A concluir', videoId: 'video-admin-14', urlDoVideoEmbed: 'https://www.youtube.com/embed/ZSe-LJlamB4' },
  // 28º módulo: atividade
  { moduleId: 'mod28', type: 'atividade', title: 'Atividade: Conclusão do curso', status: 'A concluir',
    questions: [
      {
        question: 'O que você aprendeu neste curso?',
        options: ['Nada', 'Processos administrativos importantes', 'A evitar o sistema', 'A complicar processos'],
        answer: 1
      },
      {
        question: 'Onde buscar ajuda quando tiver dúvidas?',
        options: ['Na aba ajuda do sistema', 'Não buscar ajuda', 'Inventar soluções', 'Ignorar o problema'],
        answer: 0
      }
    ]
  }
];

export const modulosTutorial2 = [
  // 1º módulo: vídeo
  { moduleId: 'mod1', type: 'video', title: 'Como cadastrar minha empresa para vender no Mercado Livre?', status: 'A concluir', videoId: 'video-ml-1', urlDoVideoEmbed: 'https://www.youtube.com/embed/f11f3a8V9eo' },
  // 2º módulo: atividade
  { moduleId: 'mod2', type: 'atividade', title: 'Atividade: Cadastro de Empresa', status: 'A concluir',
    questions: [
      {
        question: 'Qual é o primeiro passo para vender no Mercado Livre?',
        options: ['Cadastrar produtos', 'Cadastrar a empresa', 'Definir preços', 'Criar anúncios'],
        answer: 1
      },
      {
        question: 'Por que é importante cadastrar corretamente a empresa?',
        options: ['Para evitar taxas', 'Para cumprir regulamentações e operar legalmente', 'Para vender mais caro', 'Não é importante'],
        answer: 1
      }
    ]
  },
  // 3º módulo: vídeo
  { moduleId: 'mod3', type: 'video', title: 'Quais documentos eu preciso para operar como empresa?', status: 'A concluir', videoId: 'video-ml-2', urlDoVideoEmbed: 'https://www.youtube.com/embed/HmOPNLPDWnU' },
  // 4º módulo: atividade
  { moduleId: 'mod4', type: 'atividade', title: 'Atividade: Documentos Necessários', status: 'A concluir',
    questions: [
      {
        question: 'Quais documentos são essenciais para operar como empresa no ML?',
        options: ['Apenas CPF', 'CNPJ e documentos fiscais', 'Carteira de motorista', 'Certificado de nascimento'],
        answer: 1
      },
      {
        question: 'Por que os documentos são importantes?',
        options: ['Para complicar', 'Para garantir conformidade legal', 'Para aumentar custos', 'Não são importantes'],
        answer: 1
      }
    ]
  },
  // 5º módulo: vídeo
  { moduleId: 'mod5', type: 'video', title: 'Como funcionam as taxas do Mercado Livre?', status: 'A concluir', videoId: 'video-ml-3', urlDoVideoEmbed: 'https://www.youtube.com/embed/Rj4rAuce0M0' },
  // 6º módulo: atividade
  { moduleId: 'mod6', type: 'atividade', title: 'Atividade: Taxas do Mercado Livre', status: 'A concluir',
    questions: [
      {
        question: 'As taxas do ML incluem:',
        options: ['Apenas frete', 'Comissão por venda e frete', 'Impostos pessoais', 'Não há taxas'],
        answer: 1
      },
      {
        question: 'Como calcular as taxas?',
        options: ['Aleatoriamente', 'Baseado no valor da venda', 'Sempre fixo', 'Não calcular'],
        answer: 1
      }
    ]
  },
  // 7º módulo: vídeo
  { moduleId: 'mod7', type: 'video', title: 'Como adicionar colaborador', status: 'A concluir', videoId: 'video-ml-4', urlDoVideoEmbed: 'https://www.youtube.com/embed/placeholder' },
  // 8º módulo: atividade
  { moduleId: 'mod8', type: 'atividade', title: 'Atividade: Adicionar Colaborador', status: 'A concluir',
    questions: [
      {
        question: 'Por que adicionar colaboradores?',
        options: ['Para complicar', 'Para dividir tarefas e aumentar eficiência', 'Para reduzir vendas', 'Não é necessário'],
        answer: 1
      },
      {
        question: 'Como gerenciar colaboradores no ML?',
        options: ['Através do painel', 'Por telefone', 'Não é possível', 'Por e-mail'],
        answer: 0
      }
    ]
  },
  // 9º módulo: vídeo
  { moduleId: 'mod9', type: 'video', title: 'Adicionar tempo de disponibilidade', status: 'A concluir', videoId: 'video-ml-5', urlDoVideoEmbed: 'https://www.youtube.com/embed/placeholder' },
  // 10º módulo: atividade
  { moduleId: 'mod10', type: 'atividade', title: 'Atividade: Tempo de Disponibilidade', status: 'A concluir',
    questions: [
      {
        question: 'O que é tempo de disponibilidade?',
        options: ['Horário de trabalho', 'Tempo para processar pedidos', 'Horário de férias', 'Não existe'],
        answer: 1
      },
      {
        question: 'Por que configurar disponibilidade?',
        options: ['Para confundir clientes', 'Para gerenciar expectativas de entrega', 'Para vender menos', 'Não importa'],
        answer: 1
      }
    ]
  },
  // 11º módulo: vídeo
  { moduleId: 'mod11', type: 'video', title: 'Adicionar retirada balcão', status: 'A concluir', videoId: 'video-ml-6', urlDoVideoEmbed: 'https://www.youtube.com/embed/placeholder' },
  // 12º módulo: atividade
  { moduleId: 'mod12', type: 'atividade', title: 'Atividade: Retirada no Balcão', status: 'A concluir',
    questions: [
      {
        question: 'O que é retirada no balcão?',
        options: ['Entrega em casa', 'Cliente retira na loja física', 'Entrega por correios', 'Não disponível'],
        answer: 1
      },
      {
        question: 'Quando usar retirada no balcão?',
        options: ['Sempre', 'Quando conveniente para o cliente', 'Nunca', 'Apenas à noite'],
        answer: 1
      }
    ]
  },
  // 13º módulo: vídeo
  { moduleId: 'mod13', type: 'video', title: 'Tempo de despacho', status: 'A concluir', videoId: 'video-ml-7', urlDoVideoEmbed: 'https://www.youtube.com/embed/placeholder' },
  // 14º módulo: atividade
  { moduleId: 'mod14', type: 'atividade', title: 'Atividade: Tempo de Despacho', status: 'A concluir',
    questions: [
      {
        question: 'O que é tempo de despacho?',
        options: ['Tempo de produção', 'Tempo para preparar e enviar o pedido', 'Tempo de férias', 'Não relevante'],
        answer: 1
      },
      {
        question: 'Como otimizar o tempo de despacho?',
        options: ['Ignorando prazos', 'Organizando estoque e processos', 'Atrasando envios', 'Não otimizar'],
        answer: 1
      }
    ]
  },
  // 15º módulo: vídeo
  { moduleId: 'mod15', type: 'video', title: 'Colocar a loja em modo férias', status: 'A concluir', videoId: 'video-ml-8', urlDoVideoEmbed: 'https://www.youtube.com/embed/placeholder' },
  // 16º módulo: atividade
  { moduleId: 'mod16', type: 'atividade', title: 'Atividade: Modo Férias', status: 'A concluir',
    questions: [
      {
        question: 'Para que serve o modo férias?',
        options: ['Para vender mais', 'Para pausar vendas temporariamente', 'Para deletar anúncios', 'Não serve para nada'],
        answer: 1
      },
      {
        question: 'Quando ativar modo férias?',
        options: ['Sempre', 'Durante períodos de ausência', 'Nunca', 'Apenas fins de semana'],
        answer: 1
      }
    ]
  },
  // 17º módulo: vídeo
  { moduleId: 'mod17', type: 'video', title: 'Status de um anúncio no Mercado Livre', status: 'A concluir', videoId: 'video-ml-9', urlDoVideoEmbed: 'https://www.youtube.com/embed/8DVDF3AJVoU' },
  // 18º módulo: atividade
  { moduleId: 'mod18', type: 'atividade', title: 'Atividade: Status de Anúncios', status: 'A concluir',
    questions: [
      {
        question: 'O que indica o status de um anúncio?',
        options: ['Preço do produto', 'Se está ativo, pausado ou finalizado', 'Cor do anúncio', 'Não indica nada'],
        answer: 1
      },
      {
        question: 'Como verificar status de anúncios?',
        options: ['No painel do vendedor', 'Por telefone', 'Não é possível', 'Adivinhando'],
        answer: 0
      }
    ]
  },
  // 19º módulo: vídeo
  { moduleId: 'mod19', type: 'video', title: 'O que fazer após concluir uma venda no Mercado Livre?', status: 'A concluir', videoId: 'video-ml-10', urlDoVideoEmbed: 'https://www.youtube.com/embed/YSdhLLSaKSg' },
  // 20º módulo: atividade
  { moduleId: 'mod20', type: 'atividade', title: 'Atividade: Pós-Venda', status: 'A concluir',
    questions: [
      {
        question: 'O que fazer após uma venda?',
        options: ['Ignorar o cliente', 'Enviar o produto e acompanhar entrega', 'Cancelar a venda', 'Esquecer'],
        answer: 1
      },
      {
        question: 'Por que acompanhar pós-venda?',
        options: ['Para perder tempo', 'Para garantir satisfação do cliente', 'Para aumentar reclamações', 'Não importa'],
        answer: 1
      }
    ]
  },
  // 21º módulo: vídeo
  { moduleId: 'mod21', type: 'video', title: 'Confira 3 dicas para evitar reclamações no Mercado Livre e vender mais!', status: 'A concluir', videoId: 'video-ml-11', urlDoVideoEmbed: 'https://www.youtube.com/embed/NKImuenbz-0' },
  // 22º módulo: atividade
  { moduleId: 'mod22', type: 'atividade', title: 'Atividade: Evitar Reclamações', status: 'A concluir',
    questions: [
      {
        question: 'Qual dica ajuda a evitar reclamações?',
        options: ['Atrasar envios', 'Descrição precisa e entrega rápida', 'Ignorar perguntas', 'Vender produtos defeituosos'],
        answer: 1
      },
      {
        question: 'Como melhorar vendas no ML?',
        options: ['Seguindo dicas de qualidade', 'Aumentando preços', 'Reduzindo anúncios', 'Não fazer nada'],
        answer: 0
      }
    ]
  }
];


export const modulosTutorial3 = [
  // 1º módulo: vídeo
  { moduleId: 'mod1', type: 'video', title: 'Finalizando seu cadastro como vendedor', status: 'A concluir', videoId: 'video-shopee-1', urlDoVideoEmbed: 'https://www.youtube.com/embed/PDTsAZJExbg' },
  // 2º módulo: atividade
  { moduleId: 'mod2', type: 'atividade', title: 'Atividade: Finalização de cadastro', status: 'A concluir',
    questions: [
      {
        question: 'Por que é importante finalizar corretamente o cadastro na Shopee?',
        options: ['Para complicar o processo', 'Para poder vender e receber pagamentos', 'Para perder tempo', 'Não é necessário'],
        answer: 1
      },
      {
        question: 'Quais informações são essenciais no cadastro?',
        options: ['Apenas nome', 'Dados pessoais e documentos completos', 'Só o e-mail', 'Telefone apenas'],
        answer: 1
      }
    ]
  },
  // 3º módulo: vídeo
  { moduleId: 'mod3', type: 'video', title: 'Como Cadastrar sua Conta Bancaria na Shopee', status: 'A concluir', videoId: 'video-shopee-2', urlDoVideoEmbed: 'https://www.youtube.com/embed/iBKdFQQF6eY' },
  // 4º módulo: atividade
  { moduleId: 'mod4', type: 'atividade', title: 'Atividade: Cadastro de conta bancária', status: 'A concluir',
    questions: [
      {
        question: 'Por que cadastrar conta bancária na Shopee?',
        options: ['Para receber os pagamentos das vendas', 'Para pagar taxas', 'Não é necessário', 'Para complicar'],
        answer: 0
      },
      {
        question: 'Que dados bancários são necessários?',
        options: ['Apenas número da conta', 'Banco, agência, conta e CPF/CNPJ', 'Só o nome do banco', 'Cartão de crédito'],
        answer: 1
      }
    ]
  },
  // 5º módulo: vídeo
  { moduleId: 'mod5', type: 'video', title: 'Como colocar um colaborador', status: 'A concluir', videoId: 'video-shopee-3', urlDoVideoEmbed: 'https://www.youtube.com/embed/placeholder' },
  // 6º módulo: atividade
  { moduleId: 'mod6', type: 'atividade', title: 'Atividade: Colaboradores na Shopee', status: 'A concluir',
    questions: [
      {
        question: 'Para que serve adicionar colaboradores?',
        options: ['Para dividir tarefas da loja', 'Para complicar', 'Para reduzir vendas', 'Não serve para nada'],
        answer: 0
      },
      {
        question: 'Como gerenciar permissões de colaboradores?',
        options: ['Não é possível', 'Através do painel da loja', 'Por telefone', 'Por e-mail'],
        answer: 1
      }
    ]
  },
  // 7º módulo: vídeo
  { moduleId: 'mod7', type: 'video', title: 'Decore sua loja para atrair mais compradores', status: 'A concluir', videoId: 'video-shopee-4', urlDoVideoEmbed: 'https://www.youtube.com/embed/eAAkiPxWl6M' },
  // 8º módulo: atividade
  { moduleId: 'mod8', type: 'atividade', title: 'Atividade: Decoração da loja', status: 'A concluir',
    questions: [
      {
        question: 'Por que decorar a loja na Shopee?',
        options: ['Para atrair e converter mais clientes', 'Para gastar dinheiro', 'Não faz diferença', 'Para complicar'],
        answer: 0
      },
      {
        question: 'Quais elementos ajudam na decoração?',
        options: ['Banner, logo e descrição atrativa', 'Apenas cores', 'Só texto', 'Não importa'],
        answer: 0
      }
    ]
  },
  // 9º módulo: vídeo
  { moduleId: 'mod9', type: 'video', title: 'Garanta mais vendas com um atendimento de qualidade', status: 'A concluir', videoId: 'video-shopee-5', urlDoVideoEmbed: 'https://www.youtube.com/embed/-ySsrJjoYfM' },
  // 10º módulo: atividade
  { moduleId: 'mod10', type: 'atividade', title: 'Atividade: Atendimento de qualidade', status: 'A concluir',
    questions: [
      {
        question: 'Como um bom atendimento impacta as vendas?',
        options: ['Não impacta', 'Aumenta confiança e conversões', 'Reduz vendas', 'Complica o processo'],
        answer: 1
      },
      {
        question: 'Qual o tempo ideal para responder clientes?',
        options: ['1 semana', 'O mais rápido possível', 'Não responder', 'Apenas em horário comercial'],
        answer: 1
      }
    ]
  },
  // 11º módulo: vídeo
  { moduleId: 'mod11', type: 'video', title: 'Recebimento dos valores', status: 'A concluir', videoId: 'video-shopee-6', urlDoVideoEmbed: 'https://www.youtube.com/embed/placeholder' },
  // 12º módulo: atividade
  { moduleId: 'mod12', type: 'atividade', title: 'Atividade: Recebimento de valores', status: 'A concluir',
    questions: [
      {
        question: 'Quando recebo o dinheiro das vendas na Shopee?',
        options: ['Imediatamente', 'Após prazo de liberação', 'Nunca', 'Só no fim do mês'],
        answer: 1
      },
      {
        question: 'Como acompanhar os pagamentos?',
        options: ['No painel financeiro da loja', 'Por telefone', 'Não é possível', 'Por carta'],
        answer: 0
      }
    ]
  },
  // 13º módulo: vídeo
  { moduleId: 'mod13', type: 'video', title: 'Dicas e boas práticas para embalar seus pedidos', status: 'A concluir', videoId: 'video-shopee-7', urlDoVideoEmbed: 'https://www.youtube.com/embed/sWPL5UMrLws' },
  // 14º módulo: atividade
  { moduleId: 'mod14', type: 'atividade', title: 'Atividade: Embalagem de pedidos', status: 'A concluir',
    questions: [
      {
        question: 'Por que embalar bem os produtos?',
        options: ['Para proteção e boa impressão', 'Para gastar mais', 'Não é importante', 'Para complicar'],
        answer: 0
      },
      {
        question: 'O que considerar na embalagem?',
        options: ['Proteção, apresentação e custo', 'Apenas o preço', 'Só a cor', 'Tamanho apenas'],
        answer: 0
      }
    ]
  }
];
