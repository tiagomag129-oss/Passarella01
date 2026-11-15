export const BUSINESS_INFO = {
  commercialName: 'Passarela Mototáxi',
  googleName: 'Passarela Mototáxi João Monlevade – Moto Uber 24hs',
  phoneDisplay: '(31) 3850-0722',
  phoneHref: 'tel:+553138500722',
  whatsappDisplay: '(31) 99385-8909',
  whatsappNumber: '5531993858909',
  defaultWhatsappMessage:
    'Olá! Gostaria de solicitar uma corrida com a Passarela Mototáxi.',
  address: {
    street: 'Rua Nova York, nº 19',
    neighborhood: 'Cruzeiro Celeste',
    city: 'João Monlevade',
    state: 'MG',
    cep: '35931-112',
    full: 'Rua Nova York, nº 19 – Cruzeiro Celeste, João Monlevade – MG, CEP 35931-112',
  },
  googleRating: '4,4',
  googleReviewsCount: 17,
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Passarela+Motot%C3%A1xi+Rua+Nova+York+19+Cruzeiro+Celeste+Jo%C3%A3o+Monlevade+MG',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Rua%20Nova%20York%2C%2019%2C%20Cruzeiro%20Celeste%2C%20Jo%C3%A3o%20Monlevade%20-%20MG&t=&z=16&ie=UTF8&iwloc=&output=embed',
} as const;

export function buildWhatsappUrl(customMessage?: string): string {
  const message = customMessage?.trim() || BUSINESS_INFO.defaultWhatsappMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Chame no WhatsApp ou telefone',
    description:
      'Inicie o atendimento direto com nossa central pelo WhatsApp (31) 99385-8909 ou ligue para o fixo (31) 3850-0722 a qualquer hora.',
  },
  {
    stepNumber: '02',
    title: 'Informe partida e destino',
    description:
      'Envie a rua, número ou ponto de referência de onde você está e o local de destino em João Monlevade.',
  },
  {
    stepNumber: '03',
    title: 'Consulte disponibilidade e valor',
    description:
      'A central verifica imediatamente o mototaxista disponível para a sua região e informa o valor da corrida antes do envio.',
  },
  {
    stepNumber: '04',
    title: 'Embarque com segurança',
    description:
      'Com a solicitação confirmada, o profissional vai até o ponto combinado para realizar seu trajeto com agilidade.',
  },
];

export interface NeighborhoodItem {
  name: string;
  zone: 'Base Central' | 'Região Central' | 'Bairros Atendidos';
  note: string;
}

export const NEIGHBORHOODS: NeighborhoodItem[] = [
  {
    name: 'Cruzeiro Celeste',
    zone: 'Base Central',
    note: 'Sede física na Rua Nova York, nº 19 com despacho imediato para toda a região.',
  },
  {
    name: 'Carneirinhos',
    zone: 'Região Central',
    note: 'Deslocamentos para o centro comercial, bancos, clínicas e comércio local.',
  },
  {
    name: 'Centro / Nossa Senhora da Conceição',
    zone: 'Região Central',
    note: 'Atendimento ágil entre áreas residenciais, trabalho e serviços essenciais.',
  },
  {
    name: 'Belmonte',
    zone: 'Bairros Atendidos',
    note: 'Conexão prática entre o bairro e os principais corredores da cidade.',
  },
  {
    name: 'Loanda',
    zone: 'Bairros Atendidos',
    note: 'Cobertura para deslocamentos cotidianos de estudantes e trabalhadores.',
  },
  {
    name: 'Nova Monlevade',
    zone: 'Bairros Atendidos',
    note: 'Trajetos rápidos ligando o bairro às áreas centrais e industriais.',
  },
  {
    name: 'Rosário',
    zone: 'Bairros Atendidos',
    note: 'Atendimento sob consulta de disponibilidade em todos os horários.',
  },
  {
    name: 'Satélite',
    zone: 'Bairros Atendidos',
    note: 'Cobertura contínua para deslocamentos diurnos e plantão da madrugada.',
  },
  {
    name: 'Sion',
    zone: 'Bairros Atendidos',
    note: 'Solicitações diretas via WhatsApp ou central telefônica 24 horas.',
  },
  {
    name: 'Vila Tanque',
    zone: 'Bairros Atendidos',
    note: 'Apoio ágil para turnos de trabalho e conexões urbanas em João Monlevade.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'como-pedir',
    question: 'Como faço para pedir uma corrida na Passarela Mototáxi?',
    answer:
      'Basta clicar em qualquer botão de WhatsApp desta página para falar no (31) 99385-8909 ou ligar diretamente para a nossa central no (31) 3850-0722. Informe o endereço de partida e o destino para consultar disponibilidade e valor.',
  },
  {
    id: 'madrugada-24h',
    question: 'Vocês realmente atendem 24 horas, inclusive na madrugada?',
    answer:
      'Sim. A Passarela Mototáxi funciona em regime 24 horas por dia, 7 dias por semana, incluindo madrugadas, finais de semana e feriados para atender trabalhadores de turno, estudantes e moradores.',
  },
  {
    id: 'tempo-chegada',
    question: 'Qual é o tempo de chegada até o local de embarque?',
    answer:
      'O prazo varia conforme o bairro de partida, o trânsito no momento e a posição do mototaxista mais próximo. No momento do seu contato via WhatsApp ou telefone, a central informa a previsão real de chegada antes de confirmar a corrida.',
  },
  {
    id: 'bairros-atendidos',
    question: 'Quais bairros de João Monlevade são atendidos?',
    answer:
      'Nossa base fica no Cruzeiro Celeste (Rua Nova York, nº 19), atendendo com agilidade o próprio Cruzeiro Celeste, Carneirinhos, Centro, Belmonte, Loanda, Nova Monlevade, Rosário, Satélite, Sion, Vila Tanque e demais bairros de João Monlevade mediante consulta com a central.',
  },
  {
    id: 'valor-corrida',
    question: 'Como saber o valor da corrida antes de embarcar?',
    answer:
      'Antes de confirmar o envio do mototaxista, informe o ponto de partida e o destino para a central pelo WhatsApp ou telefone. Nossa equipe informa o valor previamente com total transparência.',
  },
];
