import type { Service } from "@/types/content";

/**
 * Conteúdo-base dos serviços. Revise com o Marcelo as técnicas e métodos que o
 * salão realmente trabalha antes de publicar. Valores e durações não são
 * exibidos de propósito: o orçamento é feito na avaliação.
 */
export const services: Service[] = [
  {
    slug: "visagismo",
    number: "01",
    name: "Visagismo",
    tagline: "O corte e a cor que conversam com o seu rosto.",
    summary:
      "Leitura do formato do rosto, dos traços, do tom de pele e do seu estilo de vida para indicar o visual que realça quem você é.",
    h1: "Visagismo: beleza que nasce da sua identidade",
    intro: [
      "Visagismo é a arte de criar uma imagem pessoal coerente com quem você é. Em vez de seguir a tendência do momento, partimos do seu rosto, dos seus traços e da sua rotina para chegar ao corte, à cor e ao acabamento certos.",
      "O resultado é um visual que valoriza o que você tem de mais bonito e que faz sentido no seu dia a dia — fácil de manter e com a sua personalidade.",
    ],
    highlights: [
      {
        title: "Leitura do rosto",
        text: "Proporções, linhas e traços são analisados para definir volumes, comprimentos e franjas que equilibram e valorizam.",
      },
      {
        title: "Harmonia de cor",
        text: "O subtom da pele e a cor dos olhos orientam a escolha de tons que iluminam o rosto em vez de pesar.",
      },
      {
        title: "Estilo de vida",
        text: "Sua rotina, sua profissão e o tempo que você quer dedicar ao cabelo entram na conta. Beleza precisa caber na vida real.",
      },
    ],
    steps: [
      {
        title: "Conversa",
        text: "Entendemos seus objetivos, o que você ama e o que não quer de jeito nenhum.",
      },
      {
        title: "Análise visagista",
        text: "Avaliamos formato do rosto, traços, tom de pele e características do fio.",
      },
      {
        title: "Proposta",
        text: "Apresentamos o caminho ideal de corte, cor e finalização — com transparência sobre manutenção.",
      },
      {
        title: "Execução",
        text: "Transformamos a proposta em resultado e orientamos os cuidados para manter o visual em casa.",
      },
    ],
    faqs: [
      {
        question: "O que é visagismo?",
        answer:
          "É uma metodologia que considera as características do rosto, a cor da pele e a personalidade de cada pessoa para criar um visual harmônico e autêntico.",
      },
      {
        question: "Preciso fazer visagismo antes de mudar o cabelo?",
        answer:
          "Não é obrigatório, mas é o melhor ponto de partida para mudanças maiores de corte ou cor. Ele reduz o risco de arrependimento e aumenta a chance de você amar o resultado.",
      },
      {
        question: "Como funciona a consultoria de visagismo no salão?",
        answer:
          "Os detalhes de formato e duração são combinados no agendamento. Fale com a gente pelo WhatsApp e tire suas dúvidas.",
      },
    ],
    seo: {
      title: "Visagismo em [CIDADE]",
      description:
        "Visagismo com Marcelo Maschke: análise do rosto, tom de pele e estilo de vida para indicar corte e cor sob medida. Agende sua consultoria pelo WhatsApp.",
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de saber mais sobre a consultoria de visagismo.",
    ctaLabel: "Agendar visagismo",
    imageLabel: "Marcelo analisando o rosto de uma cliente",
  },
  {
    slug: "mechas",
    number: "02",
    name: "Mechas",
    tagline: "Luz no lugar certo.",
    summary:
      "Do loiro iluminado ao efeito natural de sol: mechas planejadas para o seu tom de pele e para crescer de forma bonita.",
    h1: "Mechas que iluminam com naturalidade",
    intro: [
      "Mechas bem feitas não são só sobre clarear: são sobre posicionar a luz onde ela valoriza o seu rosto e criar uma transição que continua bonita semanas depois.",
      "Cada trabalho começa com o diagnóstico do fio e termina com uma tonalização pensada para o seu subtom de pele — do loiro mais luminoso ao iluminado discreto.",
    ],
    highlights: [
      {
        title: "Diagnóstico do fio",
        text: "Avaliamos histórico químico, espessura e resistência para escolher a técnica mais segura para o seu cabelo.",
      },
      {
        title: "Tom personalizado",
        text: "Nada de loiro genérico: a cor final é ajustada à sua pele, aos seus olhos e ao seu estilo.",
      },
      {
        title: "Saúde em primeiro lugar",
        text: "Durante e depois do processo, cuidamos da fibra para manter brilho, maciez e resistência.",
      },
    ],
    steps: [
      {
        title: "Avaliação",
        text: "Analisamos o fio e alinhamos a referência que você tem em mente.",
      },
      {
        title: "Planejamento",
        text: "Definimos técnica, posicionamento das mechas e número de sessões, se necessário.",
      },
      {
        title: "Aplicação",
        text: "Clareamento com controle e atenção a cada etapa.",
      },
      {
        title: "Tonalização e finalização",
        text: "Ajuste fino do tom e finalização para você sair pronta.",
      },
    ],
    faqs: [
      {
        question: "Quanto tempo leva uma sessão de mechas?",
        answer:
          "Depende do comprimento, do volume e da técnica escolhida. Informamos uma estimativa realista na avaliação para você se programar.",
      },
      {
        question: "Posso fazer mechas em cabelo com química?",
        answer:
          "Na maioria dos casos, sim — mas só a avaliação do fio diz qual é o caminho seguro. Às vezes o resultado ideal é alcançado em mais de uma sessão.",
      },
      {
        question: "Como manter as mechas bonitas por mais tempo?",
        answer:
          "Com produtos adequados em casa, proteção térmica e retornos para tonalização no intervalo que indicarmos para o seu caso.",
      },
    ],
    seo: {
      title: "Mechas e loiros em [CIDADE]",
      description:
        "Mechas personalizadas com diagnóstico do fio e tonalização para o seu tom de pele. Loiros iluminados e naturais com cuidado. Agende sua avaliação.",
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de agendar uma avaliação para mechas.",
    ctaLabel: "Agendar avaliação de mechas",
    imageLabel: "Detalhe de mechas loiras iluminadas",
  },
  {
    slug: "mega-hair",
    number: "03",
    name: "Mega hair",
    tagline: "Comprimento e volume com acabamento natural.",
    summary:
      "Fios selecionados, cor combinada e aplicação cuidadosa para um resultado que se mistura ao seu cabelo.",
    h1: "Mega hair com acabamento invisível",
    intro: [
      "O segredo de um bom mega hair é ninguém perceber que ele está ali. Para isso, a combinação de cor e textura dos fios, o método de aplicação e o corte de integração precisam ser impecáveis.",
      "Avaliamos o seu cabelo natural antes de tudo, indicamos o método mais adequado e acompanhamos as manutenções para preservar a saúde dos seus fios.",
    ],
    highlights: [
      {
        title: "Fios combinados",
        text: "Cor, textura e comprimento são escolhidos para se misturar ao seu cabelo de forma natural.",
      },
      {
        title: "Método indicado na avaliação",
        text: "A técnica de aplicação é definida conforme a espessura, a densidade e a rotina de cada cliente.",
      },
      {
        title: "Manutenção acompanhada",
        text: "Retornos periódicos mantêm o resultado bonito e o seu cabelo natural protegido.",
      },
    ],
    steps: [
      {
        title: "Avaliação",
        text: "Analisamos o cabelo natural e entendemos o volume e o comprimento desejados.",
      },
      {
        title: "Escolha dos fios",
        text: "Selecionamos e combinamos os fios com a sua cor e a sua textura.",
      },
      {
        title: "Aplicação",
        text: "Aplicação cuidadosa, mecha a mecha, com atenção ao conforto.",
      },
      {
        title: "Corte de integração",
        text: "Corte e finalização que unem os fios para um caimento natural.",
      },
    ],
    faqs: [
      {
        question: "Quanto tempo dura o mega hair?",
        answer:
          "A durabilidade depende do método e dos cuidados em casa. Na avaliação, indicamos o intervalo ideal de manutenção para o seu caso.",
      },
      {
        question: "Mega hair estraga o cabelo natural?",
        answer:
          "Quando a aplicação é bem feita e as manutenções estão em dia, o cabelo natural é preservado. Por isso avaliação e acompanhamento profissional fazem toda a diferença.",
      },
      {
        question: "Posso fazer escova, chapinha e pintar com mega hair?",
        answer:
          "Em geral, sim, com alguns cuidados específicos. Passamos todas as orientações no dia da aplicação.",
      },
    ],
    seo: {
      title: "Mega hair em [CIDADE]",
      description:
        "Mega hair com fios combinados à sua cor e textura, aplicação cuidadosa e manutenção acompanhada. Comprimento e volume naturais. Agende sua avaliação.",
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de agendar uma avaliação para mega hair.",
    ctaLabel: "Agendar avaliação de mega hair",
    imageLabel: "Cabelo longo com mega hair, vista de costas",
  },
  {
    slug: "cortes",
    number: "04",
    name: "Cortes",
    tagline: "Forma, movimento e caimento.",
    summary:
      "Cortes pensados para o formato do seu rosto, a textura do seu fio e a sua rotina — bonitos ao sair do salão e no dia a dia.",
    h1: "Cortes com forma, movimento e caimento",
    intro: [
      "Um bom corte é aquele que continua bonito quando você mesma arruma o cabelo em casa. Por isso, cada corte é pensado a partir do formato do rosto, da textura do fio e de como você vive.",
      "Do clássico ao contemporâneo, do curto ao longo, buscamos precisão técnica e um caimento que valoriza o seu cabelo.",
    ],
    highlights: [
      {
        title: "Pensado para o seu rosto",
        text: "Comprimentos, camadas e franjas posicionados para equilibrar e valorizar os seus traços.",
      },
      {
        title: "Fácil de manter",
        text: "Um corte que funciona na sua rotina, com orientações de finalização para o dia a dia.",
      },
      {
        title: "Precisão técnica",
        text: "Atenção a cada detalhe para um caimento leve e um crescimento bonito.",
      },
    ],
    steps: [
      {
        title: "Conversa",
        text: "Referências, rotina e o que você espera do novo corte.",
      },
      {
        title: "Análise",
        text: "Leitura do rosto, da textura e do comportamento natural do fio.",
      },
      {
        title: "Corte",
        text: "Execução precisa, respeitando o movimento do seu cabelo.",
      },
      {
        title: "Finalização",
        text: "Finalização e dicas para reproduzir o resultado em casa.",
      },
    ],
    faqs: [
      {
        question: "Com que frequência devo cortar o cabelo?",
        answer:
          "Varia conforme o corte e o comprimento. Cortes curtos e com forma definida pedem retornos mais frequentes; cabelos longos, menos. Indicamos o intervalo ideal para você.",
      },
      {
        question: "Não sei qual corte fazer. Vocês ajudam?",
        answer:
          "Claro. Esse é exatamente o papel do visagismo: indicar o corte que mais valoriza o seu rosto e combina com o seu estilo.",
      },
    ],
    seo: {
      title: "Corte de cabelo feminino em [CIDADE]",
      description:
        "Cortes pensados para o formato do rosto, a textura do fio e a sua rotina. Precisão técnica e caimento natural. Agende seu horário pelo WhatsApp.",
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de agendar um corte.",
    ctaLabel: "Agendar corte",
    imageLabel: "Corte de cabelo com movimento e brilho",
  },
  {
    slug: "unhas",
    number: "05",
    name: "Unhas",
    tagline: "Acabamento impecável até a ponta dos dedos.",
    summary:
      "Manicure e pedicure com cutilagem delicada, esmaltação precisa e todo o cuidado com higiene.",
    h1: "Unhas com acabamento impecável",
    intro: [
      "O detalhe que completa o visual. Manicure e pedicure feitas com calma, delicadeza e um acabamento que dura.",
      "Do nude elegante às cores da estação, você escolhe — e a gente cuida de cada detalhe, com atenção total à higiene.",
    ],
    highlights: [
      {
        title: "Cutilagem delicada",
        text: "Cuidado com a pele ao redor das unhas para um acabamento limpo e confortável.",
      },
      {
        title: "Esmaltação precisa",
        text: "Camadas bem aplicadas, bordas limpas e brilho uniforme.",
      },
      {
        title: "Higiene em primeiro lugar",
        text: "Materiais higienizados e protocolos de biossegurança em todos os atendimentos.",
      },
    ],
    steps: [
      {
        title: "Preparação",
        text: "Higienização das mãos ou dos pés e preparo das unhas.",
      },
      {
        title: "Formato",
        text: "Lixamento no formato que você preferir.",
      },
      {
        title: "Cutilagem",
        text: "Remoção cuidadosa das cutículas e hidratação.",
      },
      {
        title: "Esmaltação",
        text: "Aplicação da cor escolhida e finalização.",
      },
    ],
    faqs: [
      {
        question: "Como funciona a biossegurança no salão?",
        answer:
          "[DESCREVER O PROTOCOLO DO SALÃO — ex.: esterilização de alicates em autoclave, lixas descartáveis e kits individuais.]",
      },
      {
        question: "Posso agendar mãos e pés no mesmo horário?",
        answer: "Sim. Basta avisar no agendamento para reservarmos o tempo necessário.",
      },
    ],
    seo: {
      title: "Manicure e pedicure em [CIDADE]",
      description:
        "Manicure e pedicure com cutilagem delicada, esmaltação precisa e biossegurança. O detalhe que completa o seu visual. Agende pelo WhatsApp.",
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de agendar manicure/pedicure.",
    ctaLabel: "Agendar unhas",
    imageLabel: "Mãos com esmaltação nude impecável",
  },
  {
    slug: "make",
    number: "06",
    name: "Make",
    tagline: "Maquiagem que valoriza, sem esconder você.",
    summary:
      "Maquiagem para festas, formaturas, eventos e ensaios — durável, fotogênica e alinhada ao seu estilo.",
    h1: "Maquiagem que valoriza a sua beleza natural",
    intro: [
      "A maquiagem certa realça os seus traços sem mascarar quem você é. Pensamos em cada produto de acordo com o seu tipo de pele, o seu estilo e a ocasião.",
      "Para festas, formaturas, eventos ou ensaios fotográficos: uma make bonita ao vivo, nas fotos e do início ao fim da noite.",
    ],
    highlights: [
      {
        title: "Preparação da pele",
        text: "Uma pele bem preparada é a base de uma maquiagem bonita e duradoura.",
      },
      {
        title: "Pensada para a ocasião",
        text: "Luz do dia, festa à noite ou fotos com flash: a técnica se adapta ao momento.",
      },
      {
        title: "Fixação",
        text: "Produtos e técnicas para a make durar do primeiro brinde à última música.",
      },
    ],
    steps: [
      {
        title: "Referências",
        text: "Conversamos sobre a ocasião, o look e o estilo de make que você imagina.",
      },
      {
        title: "Preparação",
        text: "Limpeza e preparação da pele de acordo com o seu tipo de pele.",
      },
      {
        title: "Maquiagem",
        text: "Construção da make com foco em harmonia e acabamento.",
      },
      {
        title: "Fixação",
        text: "Finalização para garantir durabilidade e um visual impecável.",
      },
    ],
    faqs: [
      {
        question: "Com quanto tempo de antecedência devo agendar a make?",
        answer:
          "Para datas concorridas, como formaturas e fins de semana de festa, recomendamos agendar com antecedência para garantir o seu horário.",
      },
      {
        question: "Posso levar referências?",
        answer:
          "Deve! Fotos de referência ajudam muito a entender o que você imagina. Adaptamos tudo ao seu rosto e ao seu estilo.",
      },
    ],
    seo: {
      title: "Maquiagem para festas e eventos em [CIDADE]",
      description:
        "Maquiagem profissional para festas, formaturas, eventos e ensaios. Durável, fotogênica e alinhada ao seu estilo. Agende pelo WhatsApp.",
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de agendar uma maquiagem.",
    ctaLabel: "Agendar make",
    imageLabel: "Maquiagem de festa em close",
  },
  {
    slug: "penteados",
    number: "07",
    name: "Penteados",
    tagline: "Do coque clássico às ondas soltas.",
    summary:
      "Penteados para festas, madrinhas, formaturas e debutantes, com acabamento firme e aparência leve.",
    h1: "Penteados para festas e ocasiões especiais",
    intro: [
      "Um penteado bonito precisa resistir à festa inteira sem parecer pesado. Equilíbrio entre firmeza e leveza é o que buscamos em cada trabalho.",
      "Coques, semipresos, tranças ou ondas soltas: criamos o penteado que combina com o seu rosto, o seu vestido e a ocasião.",
    ],
    highlights: [
      {
        title: "Harmonia com o look",
        text: "O penteado é pensado junto com o vestido, os acessórios e o decote.",
      },
      {
        title: "Durabilidade",
        text: "Técnica e produtos certos para o penteado durar a festa toda.",
      },
      {
        title: "Aparência leve",
        text: "Firme sem parecer rígido: movimento e naturalidade nos detalhes.",
      },
    ],
    steps: [
      {
        title: "Referências",
        text: "Conversamos sobre a ocasião, o vestido e o estilo desejado.",
      },
      {
        title: "Preparação",
        text: "Preparo do fio para receber o penteado com mais fixação.",
      },
      {
        title: "Penteado",
        text: "Construção do penteado com atenção à forma e ao acabamento.",
      },
      {
        title: "Ajustes finais",
        text: "Acessórios, fixação e os últimos retoques.",
      },
    ],
    faqs: [
      {
        question: "Preciso ir com o cabelo lavado?",
        answer:
          "Depende do penteado e do seu tipo de cabelo. Orientamos tudo no agendamento para o resultado ficar perfeito.",
      },
      {
        question: "Vocês atendem madrinhas e grupos?",
        answer:
          "Sim. Para grupos, recomendamos agendar com antecedência para organizarmos os horários de todas.",
      },
    ],
    seo: {
      title: "Penteados para festas em [CIDADE]",
      description:
        "Penteados para festas, madrinhas, formaturas e debutantes. Coques, semipresos e ondas com acabamento firme e leve. Agende seu horário.",
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de agendar um penteado.",
    ctaLabel: "Agendar penteado",
    imageLabel: "Penteado semipreso com ondas suaves",
  },
  {
    slug: "noivas",
    number: "08",
    name: "Noivas",
    tagline: "Para o dia em que todos os olhares são seus.",
    summary:
      "Cabelo e make para noivas com prova, planejamento do cronograma e um atendimento tranquilo no grande dia.",
    h1: "Noivas: beleza e calma para o seu grande dia",
    intro: [
      "No dia do casamento, você merece se sentir linda, confiante e tranquila. Cuidamos do cabelo e da maquiagem com planejamento, para que cada detalhe esteja pronto no tempo certo.",
      "Tudo começa com uma conversa sobre o seu estilo, o vestido, o local e o horário da cerimônia. A partir disso, desenhamos juntos o visual e o cronograma do dia.",
    ],
    highlights: [
      {
        title: "Visual exclusivo",
        text: "Cabelo e make criados para você, em harmonia com o vestido, o estilo do casamento e a sua personalidade.",
      },
      {
        title: "Planejamento do dia",
        text: "Um cronograma pensado para você viver o momento sem correria.",
      },
      {
        title: "Madrinhas e família",
        text: "Possibilidade de incluir mães, madrinhas e daminhas na mesma agenda.",
      },
    ],
    steps: [
      {
        title: "Primeira conversa",
        text: "Data, local, horário, vestido e referências: entendemos o seu sonho.",
      },
      {
        title: "Prova",
        text: "Testamos cabelo e maquiagem para ajustar cada detalhe com antecedência.",
      },
      {
        title: "Cronograma",
        text: "Organizamos os horários da noiva e do grupo para o grande dia.",
      },
      {
        title: "O grande dia",
        text: "Atendimento com calma, cuidado e atenção total a você.",
      },
    ],
    faqs: [
      {
        question: "Com quanta antecedência devo reservar a data?",
        answer:
          "O quanto antes, principalmente em alta temporada de casamentos. As datas são reservadas por ordem de confirmação.",
      },
      {
        question: "A prova de cabelo e make está inclusa?",
        answer:
          "Os detalhes do atendimento de noiva — prova, horários e grupo — são combinados na primeira conversa. Fale com a gente pelo WhatsApp.",
      },
      {
        question: "Vocês atendem no local do evento?",
        answer: "Consulte a disponibilidade para a sua data e o seu local pelo WhatsApp.",
      },
    ],
    seo: {
      title: "Cabelo e maquiagem para noivas em [CIDADE]",
      description:
        "Cabelo e make para noivas com prova, cronograma planejado e atendimento tranquilo no grande dia. Madrinhas e família também. Reserve sua data.",
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de saber sobre o atendimento para noivas. A data do meu casamento é: ",
    ctaLabel: "Consultar minha data",
    imageLabel: "Noiva com penteado e véu, em luz natural",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceNames = services.map((service) => service.name);
