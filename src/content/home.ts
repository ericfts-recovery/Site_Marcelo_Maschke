import type { Faq, GalleryItem, Testimonial, TitledText } from "@/types/content";

/** Textos da home centralizados para facilitar revisão e reaproveitamento. */
export const heroContent = {
  eyebrow: "Hair Salon · [CIDADE]",
  titleStart: "Beleza sob medida,",
  titleHighlight: "desenhada",
  titleEnd: "para você.",
  lead: "Visagismo, mechas, mega hair, cortes, make e penteados com a assinatura de Marcelo Maschke — cada detalhe pensado a partir do seu rosto, da sua rotina e do seu estilo.",
  trust: ["Atendimento com hora marcada", "Especialista em noivas", "Consultoria de visagismo"],
};

export const aboutContent = {
  eyebrow: "O salão",
  title: "Beleza não é seguir tendência. É encontrar o que é seu.",
  paragraphs: [
    "No Marcelo Maschke Hair Salon, cada atendimento começa com escuta: o seu rosto, a sua história, a sua rotina. A partir disso, técnica e sensibilidade se encontram para criar um visual com a sua cara — e que continua bonito muito depois de você sair do salão.",
    "[BIO DO MARCELO: formação, cursos, anos de carreira, marcas e especializações. Escreva em 2 ou 3 frases, em primeira ou terceira pessoa.]",
  ],
  signature: "Marcelo Maschke",
  signatureRole: "Hair stylist e visagista",
};

export const signatureContent = {
  eyebrow: "A assinatura",
  title: "Tudo começa pelo visagismo.",
  lead: "Antes da tesoura e da cor, existe um olhar. É ele que transforma um bom serviço em um visual que parece ter sido feito só para você.",
};

export const bridalContent = {
  eyebrow: "Noivas",
  title: "Para o dia em que todos os olhares são seus.",
  lead: "Cabelo e make planejados com antecedência, prova para ajustar cada detalhe e um cronograma pensado para você viver o seu dia com calma.",
  items: [
    "Primeira conversa sobre estilo, vestido e local",
    "Prova de cabelo e maquiagem",
    "Cronograma do dia planejado",
    "Atendimento para mães e madrinhas",
  ],
};

export const processContent: TitledText[] = [
  {
    title: "Escuta",
    text: "Entendemos o que você deseja, o que já fez no cabelo e o que espera do resultado.",
  },
  {
    title: "Leitura",
    text: "Rosto, traços, tom de pele e características do fio orientam cada escolha.",
  },
  {
    title: "Proposta",
    text: "Você sabe exatamente o que será feito, como será a manutenção e o porquê de cada decisão.",
  },
  {
    title: "Resultado",
    text: "Execução com precisão e orientações para manter o visual bonito em casa.",
  },
];

export const galleryItems: GalleryItem[] = [
  { label: "Mechas iluminadas" },
  { label: "Noiva — penteado e make" },
  { label: "Corte com movimento" },
  { label: "Mega hair" },
  { label: "Make para festa" },
  { label: "Unhas" },
];

/**
 * Use apenas depoimentos reais, com autorização da cliente
 * (ex.: avaliações do Google ou mensagens autorizadas).
 */
export const testimonials: Testimonial[] = [
  {
    quote: "[Depoimento real de cliente — copie de uma avaliação do Google, com autorização.]",
    author: "[Nome da cliente]",
    service: "Mechas",
  },
  {
    quote: "[Depoimento real de cliente — de preferência uma noiva, com autorização.]",
    author: "[Nome da cliente]",
    service: "Noiva",
  },
  {
    quote: "[Depoimento real de cliente — com autorização.]",
    author: "[Nome da cliente]",
    service: "Visagismo e corte",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "Como faço para agendar um horário?",
    answer:
      "O jeito mais rápido é pelo WhatsApp: é só tocar no botão e enviar a mensagem. Se preferir, preencha o formulário de pré-agendamento e entramos em contato.",
  },
  {
    question: "Quanto custam os serviços?",
    answer:
      "Os valores variam conforme comprimento, volume e técnica. Para um orçamento justo, fazemos uma avaliação — fale com a gente pelo WhatsApp e tire suas dúvidas.",
  },
  {
    question: "Preciso de avaliação antes de fazer mechas ou mega hair?",
    answer:
      "Sim. A avaliação do fio é o que garante a escolha da técnica mais segura e um resultado bonito e saudável.",
  },
  {
    question: "Vocês atendem noivas, madrinhas e mães?",
    answer:
      "Sim. Temos um atendimento especial para noivas, com prova e planejamento do cronograma, e podemos incluir madrinhas e família.",
  },
  {
    question: "O que é visagismo e como ele me ajuda?",
    answer:
      "É uma análise do seu rosto, tom de pele e estilo de vida para indicar o corte, a cor e o visual que mais valorizam você. É o ponto de partida ideal para mudanças.",
  },
];
