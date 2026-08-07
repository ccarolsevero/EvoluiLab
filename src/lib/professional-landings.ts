import { whatsappLink } from "@/lib/whatsapp";

export type ProfessionalLandingConfig = {
  slug: string;
  pluralLabel: string;
  singularLabel: string;
  audienceLabel: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    highlightA: string;
    titleMiddle: string;
    highlightB: string;
    titleAfter?: string;
  };
  heroImage: string;
  adsImage: string;
  wa: string;
  waAds: string;
  situations: string[];
  imagineItems: string[];
  searchTerms: string[];
  portfolio: { name: string; area: string; tag: string; image: string }[];
  testimonials: { quote: string; name: string; place: string }[];
  faqs: { q: string; a: string }[];
  manifesto: { title: string; p1: string; p2: string };
  cta: { title: string; p1: string; p2: string };
  footerBlurb: string;
  stepsAudience: string;
};

const heroFeatures = [
  "Pagamento único",
  "Sem mensalidade",
  "Design exclusivo",
  "SEO incluso",
] as const;

const adsHow = [
  "Criamos campanhas focadas no seu público.",
  "Seus anúncios aparecem para quem pesquisa pela sua especialidade.",
  "Direcionamos os cliques para uma landing page feita para gerar contato.",
  "Acompanhamos resultados e ajustamos a campanha continuamente.",
] as const;

const siteFeatures = [
  "Design exclusivo",
  "Landing Page",
  "Site institucional",
  "WhatsApp integrado",
  "Formulário de contato",
  "Google Maps",
  "Agendamento online",
  "SEO",
  "Blog",
  "Página para especialidades",
  "Área para depoimentos",
  "Totalmente responsivo",
  "Alta velocidade",
] as const;

function steps(audience: string) {
  return [
    {
      n: "01",
      title: "Conversamos",
      text: `Entendemos sua especialidade, seus objetivos e o momento da sua carreira.`,
    },
    {
      n: "02",
      title: "Planejamos",
      text: "Definimos a melhor estrutura para apresentar seu trabalho.",
    },
    {
      n: "03",
      title: "Criamos",
      text: "Desenvolvemos o design, os textos e toda a experiência do seu site.",
    },
    {
      n: "04",
      title: "Publicamos",
      text: `Seu site fica pronto para receber ${audience} do Google, Instagram e indicações.`,
    },
  ];
}

export const SHARED_LANDING = {
  heroFeatures,
  adsHow,
  siteFeatures,
  steps,
};

export const PROFESSIONAL_LANDINGS: ProfessionalLandingConfig[] = [
  {
    slug: "medicos",
    pluralLabel: "médicos",
    singularLabel: "médico",
    audienceLabel: "pacientes",
    metadata: {
      title: "Sites e landing pages para médicos | EvoluiLab",
      description:
        "Sites profissionais para médicos que desejam transmitir confiança, aparecer melhor no Google e conquistar novos pacientes.",
      keywords: [
        "site para médico",
        "landing page médico",
        "Google Ads médico",
        "EvoluiLab",
      ],
    },
    hero: {
      eyebrow: "Especialistas em sites e landing pages para médicos",
      titleBefore: "Desenvolvemos sites profissionais para médicos que querem transmitir mais",
      highlightA: "confiança",
      titleMiddle: "e conquistar",
      highlightB: "novos pacientes",
      titleAfter: ".",
    },
    heroImage: "/hero/hero-medicos.png",
    adsImage: "/hero/ads-google-medicos.png",
    wa: whatsappLink(
      "Olá, EvoluiLab! Quero um site profissional para médicos."
    ),
    waAds: whatsappLink(
      "Olá, EvoluiLab! Quero atrair mais pacientes pelo Google Ads (médicos)."
    ),
    situations: [
      "Meu Instagram acabou virando meu site.",
      "Não tenho um site profissional para meu consultório.",
      "Quando pesquisam meu nome no Google, quase não encontram informações.",
      "Quero parecer mais profissional na internet.",
      "Meu site está antigo e já não representa meu trabalho.",
      "Gostaria que os pacientes entendessem melhor minhas especialidades.",
      "Vejo outros médicos transmitindo muito mais confiança online.",
      "Quero crescer sem depender apenas de indicações.",
    ],
    imagineItems: [
      "Encontrasse um site bonito e profissional.",
      "Entendesse rapidamente sua especialidade.",
      "Conhecesse sua formação e experiência.",
      "Descobrisse onde você atende.",
      "Encontrasse seu WhatsApp em poucos segundos.",
      "Sentisse confiança antes mesmo da primeira consulta.",
      "Escolhesse você sem continuar pesquisando.",
    ],
    searchTerms: [
      "Médico em [cidade]",
      "Cardiologista",
      "Dermatologista",
      "Clínico geral",
      "Médico online",
    ],
    portfolio: [
      {
        name: "Dra. Ana Beatriz Lima",
        area: "Dermatologia",
        tag: "Landing page",
        image: "/portfolio/portfolio-ana-beatriz.png",
      },
      {
        name: "Dr. Ricardo Mota",
        area: "Cardiologia",
        tag: "Site institucional",
        image: "/portfolio/portfolio-ricardo-mota.png",
      },
      {
        name: "Clínica Vita+",
        area: "Clínica médica",
        tag: "Site + Ads",
        image: "/portfolio/portfolio-clinica-vita.png",
      },
      {
        name: "Dr. Felipe Nogueira",
        area: "Ortopedia",
        tag: "Site institucional",
        image: "/portfolio/portfolio-felipe-nogueira.png",
      },
    ],
    testimonials: [
      {
        quote:
          "O site transmitiu exatamente a seriedade do consultório. Os pacientes chegam já confiantes e pedindo agendamento.",
        name: "Dra. Ana Beatriz Lima",
        place: "Dermatologista",
      },
      {
        quote:
          "Visual limpo, textos claros e WhatsApp no lugar certo. A presença digital finalmente ficou à altura do atendimento.",
        name: "Dr. Ricardo Mota",
        place: "Cardiologista",
      },
      {
        quote:
          "Além do design, a estrutura ajudou a explicar especialidades e facilitar o contato. Resultado rápido.",
        name: "Dra. Helena Prado",
        place: "Clínica médica",
      },
    ],
    faqs: [
      {
        q: "Vocês fazem sites apenas para médicos?",
        a: "Somos especialistas em sites e landing pages para profissionais da saúde, com projetos alinhados à imagem médica.",
      },
      {
        q: "Também criam landing pages para Google Ads?",
        a: "Sim. Desenvolvemos páginas específicas para campanhas com foco em gerar mais consultas.",
      },
      {
        q: "Meu site funcionará no celular?",
        a: "Sim. Todos os projetos são totalmente responsivos.",
      },
      {
        q: "O site terá botão para WhatsApp?",
        a: "Sim. O WhatsApp pode ser integrado em pontos estratégicos.",
      },
      {
        q: "Posso integrar agendamento online?",
        a: "Sempre que houver compatibilidade técnica, sim.",
      },
      {
        q: "Meu site poderá aparecer no Google?",
        a: "Sim. Seguimos boas práticas de SEO para indexação e buscas.",
      },
      {
        q: "Já tenho um site. Vocês podem reformular?",
        a: "Claro. Também reformulamos sites antigos.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "Prazo e investimento dependem do projeto. Entre em contato para uma proposta.",
      },
    ],
    manifesto: {
      title: "É exatamente isso que criamos",
      p1: "Na EvoluiLab, desenvolvemos sites e landing pages para médicos que querem passar mais confiança, valorizar o consultório e facilitar o contato com novos pacientes.",
      p2: "Cada projeto é personalizado. Nada de modelos prontos. Cada detalhe representa a qualidade do seu atendimento.",
    },
    cta: {
      title: "Seu consultório merece uma presença profissional",
      p1: "Seu paciente pesquisa antes de escolher. Quando encontrar você, a primeira impressão precisa transmitir a mesma confiança do atendimento.",
      p2: "Vamos conversar sobre o seu projeto?",
    },
    footerBlurb: "Especialistas em sites e landing pages para médicos.",
    stepsAudience: "pacientes",
  },
  {
    slug: "dentistas",
    pluralLabel: "dentistas",
    singularLabel: "dentista",
    audienceLabel: "pacientes",
    metadata: {
      title: "Sites e landing pages para dentistas | EvoluiLab",
      description:
        "Sites profissionais para dentistas e clínicas odontológicas que desejam transmitir confiança e conquistar novos pacientes.",
      keywords: [
        "site para dentista",
        "landing page odontologia",
        "Google Ads dentista",
        "EvoluiLab",
      ],
    },
    hero: {
      eyebrow: "Especialistas em sites e landing pages para dentistas",
      titleBefore: "Desenvolvemos sites profissionais para dentistas que querem transmitir mais",
      highlightA: "confiança",
      titleMiddle: "e conquistar",
      highlightB: "novos pacientes",
      titleAfter: ".",
    },
    heroImage: "/hero/hero-dentistas.png",
    adsImage: "/hero/ads-google-dentistas.png",
    wa: whatsappLink(
      "Olá, EvoluiLab! Quero um site profissional para dentistas."
    ),
    waAds: whatsappLink(
      "Olá, EvoluiLab! Quero atrair mais pacientes pelo Google Ads (dentistas)."
    ),
    situations: [
      "Dependo quase só do Instagram para atrair pacientes.",
      "Não tenho um site que represente a qualidade da minha clínica.",
      "Quando pesquisam meu nome, quase não encontram informações.",
      "Quero parecer mais profissional na internet.",
      "Meu site está antigo e não gera contatos.",
      "Gostaria de explicar melhor meus tratamentos.",
      "Vejo outras clínicas com presença digital muito mais forte.",
      "Quero crescer sem depender apenas de indicações.",
    ],
    imagineItems: [
      "Encontrasse um site moderno e acolhedor.",
      "Entendesse rapidamente seus tratamentos.",
      "Visse fotos e diferenciais da clínica.",
      "Descobrisse localização e horários.",
      "Encontrasse WhatsApp em poucos segundos.",
      "Sentisse confiança antes da primeira consulta.",
      "Escolhesse você sem continuar pesquisando.",
    ],
    searchTerms: [
      "Dentista em [cidade]",
      "Implante dentário",
      "Ortodontista",
      "Clareamento dental",
      "Clínica odontológica",
    ],
    portfolio: [
      {
        name: "Dra. Marina Costa",
        area: "Odontologia estética",
        tag: "Landing page",
        image: "/portfolio/portfolio-marina-costa.png",
      },
      {
        name: "Clínica Sorriso+",
        area: "Clínica odontológica",
        tag: "Site institucional",
        image: "/portfolio/portfolio-sorriso.png",
      },
      {
        name: "Dr. André Vale",
        area: "Implantes",
        tag: "Site + Ads",
        image: "/portfolio/portfolio-andre-vale.png",
      },
      {
        name: "OrthoCare",
        area: "Ortodontia",
        tag: "Site institucional",
        image: "/portfolio/portfolio-orthocare.png",
      },
    ],
    testimonials: [
      {
        quote:
          "O site deixou a clínica com cara de premium. Os pacientes comentam e o WhatsApp passou a receber mais pedidos de avaliação.",
        name: "Dra. Marina Costa",
        place: "Odontologia estética",
      },
      {
        quote:
          "Conseguimos apresentar tratamentos com clareza e gerar contatos qualificados pelo Google.",
        name: "Dr. André Vale",
        place: "Implantodontista",
      },
      {
        quote:
          "Design, textos e estrutura de contato fizeram diferença logo nas primeiras semanas.",
        name: "Equipe Sorriso+",
        place: "Clínica odontológica",
      },
    ],
    faqs: [
      {
        q: "Vocês fazem sites apenas para dentistas?",
        a: "Somos especialistas em sites e landing pages para odontologia e profissionais da saúde.",
      },
      {
        q: "Também criam landing pages para Google Ads?",
        a: "Sim. Páginas específicas para campanhas com foco em gerar avaliações e consultas.",
      },
      {
        q: "Meu site funcionará no celular?",
        a: "Sim. Todos os projetos são responsivos.",
      },
      {
        q: "O site terá botão para WhatsApp?",
        a: "Sim. Integramos WhatsApp em pontos estratégicos.",
      },
      {
        q: "Posso mostrar tratamentos e antes/depois?",
        a: "Sim. Organizamos páginas e galerias para apresentar seus resultados com clareza.",
      },
      {
        q: "Meu site poderá aparecer no Google?",
        a: "Sim. Seguimos boas práticas de SEO.",
      },
      {
        q: "Já tenho um site. Vocês reformulam?",
        a: "Claro. Também modernizamos sites antigos.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "Depende do escopo. Envie uma mensagem para receber a proposta.",
      },
    ],
    manifesto: {
      title: "É exatamente isso que criamos",
      p1: "Na EvoluiLab, criamos sites para dentistas e clínicas que querem transmitir cuidado, modernidade e confiança — e facilitar o próximo passo do paciente.",
      p2: "Sem modelos genéricos: cada projeto reflete a identidade da sua clínica e a qualidade do atendimento.",
    },
    cta: {
      title: "Sua clínica merece uma presença profissional",
      p1: "Antes de agendar, o paciente pesquisa. Quando encontrar você, a primeira impressão precisa transmitir a confiança do seu consultório.",
      p2: "Vamos conversar sobre o seu projeto?",
    },
    footerBlurb: "Especialistas em sites e landing pages para dentistas.",
    stepsAudience: "pacientes",
  },
  {
    slug: "psicologos",
    pluralLabel: "psicólogos",
    singularLabel: "psicólogo",
    audienceLabel: "pacientes",
    metadata: {
      title: "Sites e landing pages para psicólogos | EvoluiLab",
      description:
        "Sites profissionais para psicólogos que desejam transmitir acolhimento, confiança e conquistar novos pacientes.",
      keywords: [
        "site para psicólogo",
        "landing page psicologia",
        "Google Ads psicólogo",
        "EvoluiLab",
      ],
    },
    hero: {
      eyebrow: "Especialistas em sites e landing pages para psicólogos",
      titleBefore: "Desenvolvemos sites profissionais para psicólogos que querem transmitir mais",
      highlightA: "acolhimento",
      titleMiddle: "e conquistar",
      highlightB: "novos pacientes",
      titleAfter: ".",
    },
    heroImage: "/hero/hero-psicologos.png",
    adsImage: "/hero/ads-google-psicologos.png",
    wa: whatsappLink(
      "Olá, EvoluiLab! Quero um site profissional para psicólogos."
    ),
    waAds: whatsappLink(
      "Olá, EvoluiLab! Quero atrair mais pacientes pelo Google Ads (psicólogos)."
    ),
    situations: [
      "Meu Instagram acabou virando meu cartão de visitas.",
      "Não tenho um site que transmita acolhimento e profissionalismo.",
      "Quando pesquisam meu nome, encontram poucas informações.",
      "Quero explicar melhor minha abordagem terapêutica.",
      "Meu site está desatualizado.",
      "Gostaria de facilitar o primeiro contato com segurança.",
      "Vejo outros profissionais com presença digital mais forte.",
      "Quero crescer sem depender só de indicações.",
    ],
    imagineItems: [
      "Encontrasse um site calmo e profissional.",
      "Entendesse sua abordagem rapidamente.",
      "Conhecesse especialidades e público atendido.",
      "Soubesse se o atendimento é online ou presencial.",
      "Encontrasse WhatsApp com facilidade.",
      "Sentisse segurança antes da primeira sessão.",
      "Escolhesse você com mais tranquilidade.",
    ],
    searchTerms: [
      "Psicólogo em [cidade]",
      "Terapia online",
      "Psicólogo infantil",
      "Ansiedade e depressão",
      "Psicólogo casal",
    ],
    portfolio: [
      {
        name: "Dra. Sofía Mendes",
        area: "Terapia cognitivo-comportamental",
        tag: "Landing page",
        image: "/portfolio/portfolio-sofia-mendes.png",
      },
      {
        name: "Espaço Ser",
        area: "Psicologia clínica",
        tag: "Site institucional",
        image: "/portfolio/portfolio-espaco-ser.png",
      },
      {
        name: "Dr. Lucas Azevedo",
        area: "Terapia online",
        tag: "Site + Ads",
        image: "/portfolio/portfolio-lucas-azevedo.png",
      },
      {
        name: "Clínica Pulsar",
        area: "Saúde mental",
        tag: "Site institucional",
        image: "/portfolio/portfolio-clinica-pulsar.png",
      },
    ],
    testimonials: [
      {
        quote:
          "O site ficou acolhedor e profissional. Os pacientes chegam já entendendo minha abordagem.",
        name: "Dra. Sofía Mendes",
        place: "Psicóloga clínica",
      },
      {
        quote:
          "A estrutura digital ajudou a transmitir confiança sem perder a leveza do consultório.",
        name: "Dr. Lucas Azevedo",
        place: "Terapia online",
      },
      {
        quote:
          "Passamos a receber contatos mais qualificados e com menos atrito no primeiro atendimento.",
        name: "Equipe Espaço Ser",
        place: "Clínica de psicologia",
      },
    ],
    faqs: [
      {
        q: "Vocês fazem sites apenas para psicólogos?",
        a: "Somos especialistas em sites para profissionais da saúde e psicologia, com foco em acolhimento e conversão.",
      },
      {
        q: "Também criam landing pages para Google Ads?",
        a: "Sim. Páginas específicas para campanhas com linguagem cuidadosa e clara.",
      },
      {
        q: "Meu site funcionará no celular?",
        a: "Sim. Todos os projetos são responsivos.",
      },
      {
        q: "O site terá botão para WhatsApp?",
        a: "Sim. Integramos WhatsApp de forma discreta e estratégica.",
      },
      {
        q: "Posso destacar atendimento online?",
        a: "Sim. Organizamos a página para deixar isso claro desde o início.",
      },
      {
        q: "Meu site poderá aparecer no Google?",
        a: "Sim. Aplicamos boas práticas de SEO.",
      },
      {
        q: "Já tenho um site. Vocês reformulam?",
        a: "Claro. Também atualizamos projetos existentes.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "Depende do escopo. Fale conosco para receber uma proposta.",
      },
    ],
    manifesto: {
      title: "É exatamente isso que criamos",
      p1: "Na EvoluiLab, criamos sites para psicólogos que equilibram acolhimento, clareza e profissionalismo — e facilitam o primeiro contato.",
      p2: "Cada projeto é personalizado para refletir sua abordagem e a confiança que o paciente precisa sentir.",
    },
    cta: {
      title: "Seu trabalho merece uma presença profissional",
      p1: "Antes da primeira sessão, a pessoa pesquisa. Quando encontrar você, a impressão precisa transmitir acolhimento e segurança.",
      p2: "Vamos conversar sobre o seu projeto?",
    },
    footerBlurb: "Especialistas em sites e landing pages para psicólogos.",
    stepsAudience: "pacientes",
  },
  {
    slug: "arquitetos",
    pluralLabel: "arquitetos",
    singularLabel: "arquiteto",
    audienceLabel: "clientes",
    metadata: {
      title: "Sites e landing pages para arquitetos | EvoluiLab",
      description:
        "Sites profissionais para arquitetos e escritórios que desejam apresentar o portfólio com autoridade e gerar novos projetos.",
      keywords: [
        "site para arquiteto",
        "portfólio arquitetura",
        "landing page arquiteto",
        "EvoluiLab",
      ],
    },
    hero: {
      eyebrow: "Especialistas em sites e landing pages para arquitetos",
      titleBefore: "Desenvolvemos sites profissionais para arquitetos que querem apresentar",
      highlightA: "autoridade",
      titleMiddle: "e conquistar",
      highlightB: "novos projetos",
      titleAfter: ".",
    },
    heroImage: "/hero/hero-arquitetos.png",
    adsImage: "/hero/ads-google-arquitetos.png",
    wa: whatsappLink(
      "Olá, EvoluiLab! Quero um site profissional para arquitetos."
    ),
    waAds: whatsappLink(
      "Olá, EvoluiLab! Quero atrair mais clientes pelo Google Ads (arquitetos)."
    ),
    situations: [
      "Meu Instagram é meu único portfólio.",
      "Não tenho um site à altura dos meus projetos.",
      "Quando pesquisam meu nome, encontram poucas referências.",
      "Quero apresentar o portfólio com mais organização.",
      "Meu site está antigo e não gera contatos.",
      "Gostaria de transmitir mais sofisticação online.",
      "Vejo outros escritórios com presença digital mais forte.",
      "Quero crescer sem depender só de indicação.",
    ],
    imagineItems: [
      "Encontrasse um site elegante e profissional.",
      "Navegasse pelo portfólio com clareza.",
      "Entendesse seu estilo e diferenciais.",
      "Visse projetos por tipologia.",
      "Encontrasse contato em poucos segundos.",
      "Sentisse autoridade antes da reunião.",
      "Escolhesse você para o próximo projeto.",
    ],
    searchTerms: [
      "Arquiteto em [cidade]",
      "Arquiteto de interiores",
      "Projeto residencial",
      "Escritório de arquitetura",
      "Arquiteto comercial",
    ],
    portfolio: [
      {
        name: "Studio Norte",
        area: "Arquitetura residencial",
        tag: "Site institucional",
        image: "/portfolio/portfolio-studio-norte.png",
      },
      {
        name: "Ana Luz Arquitetura",
        area: "Interiores",
        tag: "Landing page",
        image: "/portfolio/portfolio-ana-luz.png",
      },
      {
        name: "Forma Escala",
        area: "Comercial",
        tag: "Site + portfólio",
        image: "/portfolio/portfolio-forma-escala.png",
      },
      {
        name: "Atelier Campo",
        area: "Arquitetura contemporânea",
        tag: "Site institucional",
        image: "/portfolio/portfolio-atelier-campo.png",
      },
    ],
    testimonials: [
      {
        quote:
          "O site elevou a percepção do escritório. O portfólio ficou organizado e os contatos ficaram mais qualificados.",
        name: "Ana Luz",
        place: "Arquitetura de interiores",
      },
      {
        quote:
          "Finalmente temos uma vitrine digital à altura dos projetos. Design limpo e elegante.",
        name: "Equipe Studio Norte",
        place: "Arquitetura residencial",
      },
      {
        quote:
          "A estrutura ajudou a apresentar nosso método e facilitar o briefing inicial com novos clientes.",
        name: "Pedro Campos",
        place: "Arquiteto",
      },
    ],
    faqs: [
      {
        q: "Vocês fazem sites apenas para arquitetos?",
        a: "Somos especialistas em sites para profissionais e escritórios criativos, com forte foco em portfólio.",
      },
      {
        q: "Dá para organizar o portfólio por tipo de projeto?",
        a: "Sim. Estruturamos categorias e páginas para destacar seus melhores trabalhos.",
      },
      {
        q: "Também criam landing pages para Google Ads?",
        a: "Sim. Páginas específicas para campanhas e captura de contatos.",
      },
      {
        q: "Meu site funcionará no celular?",
        a: "Sim. Todos os projetos são responsivos.",
      },
      {
        q: "O site terá WhatsApp e formulário?",
        a: "Sim. Integramos os canais de contato nos pontos certos.",
      },
      {
        q: "Meu site poderá aparecer no Google?",
        a: "Sim. Aplicamos boas práticas de SEO.",
      },
      {
        q: "Já tenho um site. Vocês reformulam?",
        a: "Claro. Também modernizamos sites e portfólios existentes.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "Depende do escopo. Fale conosco para uma proposta.",
      },
    ],
    manifesto: {
      title: "É exatamente isso que criamos",
      p1: "Na EvoluiLab, criamos sites para arquitetos que valorizam estética, clareza e autoridade — e transformam visitas em conversas sobre novos projetos.",
      p2: "Cada detalhe é pensado para o seu portfólio brilhar sem perder elegância.",
    },
    cta: {
      title: "Seu escritório merece uma presença à altura dos projetos",
      p1: "Antes de fechar, o cliente pesquisa. Quando encontrar você, o site precisa transmitir a mesma qualidade do seu trabalho.",
      p2: "Vamos conversar sobre o seu projeto?",
    },
    footerBlurb: "Especialistas em sites e landing pages para arquitetos.",
    stepsAudience: "clientes",
  },
  {
    slug: "consultores",
    pluralLabel: "consultores",
    singularLabel: "consultor",
    audienceLabel: "clientes",
    metadata: {
      title: "Sites e landing pages para consultores | EvoluiLab",
      description:
        "Sites profissionais para consultores que desejam transmitir autoridade, gerar confiança e conquistar novos clientes.",
      keywords: [
        "site para consultor",
        "landing page consultoria",
        "Google Ads consultor",
        "EvoluiLab",
      ],
    },
    hero: {
      eyebrow: "Especialistas em sites e landing pages para consultores",
      titleBefore: "Desenvolvemos sites profissionais para consultores que querem transmitir mais",
      highlightA: "autoridade",
      titleMiddle: "e conquistar",
      highlightB: "novos clientes",
      titleAfter: ".",
    },
    heroImage: "/hero/hero-consultores.png",
    adsImage: "/hero/ads-google-consultores.png",
    wa: whatsappLink(
      "Olá, EvoluiLab! Quero um site profissional para consultores."
    ),
    waAds: whatsappLink(
      "Olá, EvoluiLab! Quero atrair mais clientes pelo Google Ads (consultores)."
    ),
    situations: [
      "Minha presença digital não transmite a autoridade do meu trabalho.",
      "Não tenho um site profissional para gerar leads.",
      "Quando pesquisam meu nome, encontram poucas referências.",
      "Quero posicionar melhor minha oferta de consultoria.",
      "Meu site está genérico e não converte.",
      "Gostaria de facilitar o agendamento de conversas comerciais.",
      "Vejo outros consultores com páginas muito mais claras.",
      "Quero crescer sem depender só de networking.",
    ],
    imagineItems: [
      "Encontrasse um site claro e profissional.",
      "Entendesse rapidamente sua oferta.",
      "Visse resultados e diferenciais.",
      "Conhecesse seu método de trabalho.",
      "Encontrasse contato em poucos segundos.",
      "Sentisse autoridade antes da call.",
      "Escolhesse você para a próxima consultoria.",
    ],
    searchTerms: [
      "Consultor em [cidade]",
      "Consultoria empresarial",
      "Consultor financeiro",
      "Consultoria de marketing",
      "Consultor de negócios",
    ],
    portfolio: [
      {
        name: "Clara Dias Consulting",
        area: "Consultoria de negócios",
        tag: "Landing page",
        image: "/portfolio/portfolio-clara-dias.png",
      },
      {
        name: "Atlas Advisory",
        area: "Consultoria financeira",
        tag: "Site institucional",
        image: "/portfolio/portfolio-atlas-advisory.png",
      },
      {
        name: "Nexo Estratégia",
        area: "Marketing e growth",
        tag: "Site + Ads",
        image: "/portfolio/portfolio-nexo-estrategia.png",
      },
      {
        name: "Dr. Paulo Siqueira",
        area: "Consultoria jurídico-empresarial",
        tag: "Site institucional",
        image: "/portfolio/portfolio-paulo-siqueira.png",
      },
    ],
    testimonials: [
      {
        quote:
          "A página deixou minha oferta muito mais clara. Os leads chegaram mais preparados para a conversa.",
        name: "Clara Dias",
        place: "Consultora de negócios",
      },
      {
        quote:
          "Design sóbrio, mensagem objetiva e conversão melhor. Exatamente o que a consultoria precisava.",
        name: "Equipe Atlas Advisory",
        place: "Consultoria financeira",
      },
      {
        quote:
          "Saímos de um site genérico para uma presença que transmite autoridade de verdade.",
        name: "Rafael Nexo",
        place: "Consultor de growth",
      },
    ],
    faqs: [
      {
        q: "Vocês fazem sites apenas para consultores?",
        a: "Criamos sites e landing pages para consultores e profissionais liberais com foco em autoridade e geração de leads.",
      },
      {
        q: "Também criam landing pages para Google Ads?",
        a: "Sim. Páginas específicas para campanhas e captura de oportunidades.",
      },
      {
        q: "Meu site funcionará no celular?",
        a: "Sim. Todos os projetos são responsivos.",
      },
      {
        q: "O site terá WhatsApp e formulário?",
        a: "Sim. Integramos os canais certos para o seu funil.",
      },
      {
        q: "Dá para destacar cases e método?",
        a: "Sim. Estruturamos a página para apresentar prova social e clareza de oferta.",
      },
      {
        q: "Meu site poderá aparecer no Google?",
        a: "Sim. Aplicamos boas práticas de SEO.",
      },
      {
        q: "Já tenho um site. Vocês reformulam?",
        a: "Claro. Também modernizamos páginas existentes.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "Depende do escopo. Fale conosco para uma proposta.",
      },
    ],
    manifesto: {
      title: "É exatamente isso que criamos",
      p1: "Na EvoluiLab, criamos sites para consultores que precisam parecer tão estratégicos online quanto são nas reuniões.",
      p2: "Cada projeto é personalizado para clareza de oferta, autoridade e conversão.",
    },
    cta: {
      title: "Sua consultoria merece uma presença profissional",
      p1: "Antes de fechar, o cliente pesquisa. Quando encontrar você, o site precisa transmitir autoridade e clareza.",
      p2: "Vamos conversar sobre o seu projeto?",
    },
    footerBlurb: "Especialistas em sites e landing pages para consultores.",
    stepsAudience: "clientes",
  },
  {
    slug: "clinicas",
    pluralLabel: "clínicas",
    singularLabel: "clínica",
    audienceLabel: "pacientes",
    metadata: {
      title: "Sites e landing pages para clínicas | EvoluiLab",
      description:
        "Sites profissionais para clínicas que desejam transmitir confiança, organizar especialidades e conquistar novos pacientes.",
      keywords: [
        "site para clínica",
        "landing page clínica",
        "Google Ads clínica",
        "EvoluiLab",
      ],
    },
    hero: {
      eyebrow: "Especialistas em sites e landing pages para clínicas",
      titleBefore: "Desenvolvemos sites profissionais para clínicas que querem transmitir mais",
      highlightA: "confiança",
      titleMiddle: "e conquistar",
      highlightB: "novos pacientes",
      titleAfter: ".",
    },
    heroImage: "/hero/hero-clinicas.png",
    adsImage: "/hero/ads-google-clinicas.png",
    wa: whatsappLink(
      "Olá, EvoluiLab! Quero um site profissional para clínicas."
    ),
    waAds: whatsappLink(
      "Olá, EvoluiLab! Quero atrair mais pacientes pelo Google Ads (clínicas)."
    ),
    situations: [
      "A clínica depende demais do Instagram.",
      "Não temos um site profissional e atualizado.",
      "Quando pesquisam a clínica, encontram poucas informações.",
      "Quero organizar especialidades e equipe no site.",
      "O site atual não gera agendamentos.",
      "Gostaria de facilitar o contato e a localização.",
      "Vejo outras clínicas com presença digital mais forte.",
      "Quero crescer com previsibilidade além das indicações.",
    ],
    imagineItems: [
      "Encontrasse um site claro e profissional.",
      "Entendesse especialidades e diferenciais.",
      "Conhecesse a equipe rapidamente.",
      "Visse endereço, horários e convênios.",
      "Encontrasse WhatsApp em poucos segundos.",
      "Sentisse confiança antes da visita.",
      "Escolhesse a clínica sem continuar pesquisando.",
    ],
    searchTerms: [
      "Clínica em [cidade]",
      "Clínica médica",
      "Clínica de estética",
      "Clínica multidisciplinar",
      "Agendar consulta",
    ],
    portfolio: [
      {
        name: "Clínica Aurora",
        area: "Clínica multidisciplinar",
        tag: "Site institucional",
        image: "/portfolio/portfolio-clinica-aurora.png",
      },
      {
        name: "Instituto Bem-Estar",
        area: "Clínica de saúde",
        tag: "Landing page",
        image: "/portfolio/portfolio-instituto-bem-estar.png",
      },
      {
        name: "Vita Estética",
        area: "Clínica de estética",
        tag: "Site + Ads",
        image: "/portfolio/portfolio-vita-estetica.png",
      },
      {
        name: "Centro Médico Horizonte",
        area: "Clínica médica",
        tag: "Site institucional",
        image: "/portfolio/portfolio-centro-horizonte.png",
      },
    ],
    testimonials: [
      {
        quote:
          "O site organizou especialidades e equipe de forma clara. Os pacientes encontram tudo com facilidade.",
        name: "Equipe Clínica Aurora",
        place: "Clínica multidisciplinar",
      },
      {
        quote:
          "Passamos a receber mais contatos qualificados e a clínica ganhou uma imagem muito mais profissional.",
        name: "Dra. Renata Oliveira",
        place: "Diretora clínica",
      },
      {
        quote:
          "Design limpo, WhatsApp bem posicionado e estrutura pronta para campanhas. Excelente resultado.",
        name: "Marketing Vita Estética",
        place: "Clínica de estética",
      },
    ],
    faqs: [
      {
        q: "Vocês fazem sites apenas para clínicas?",
        a: "Criamos sites e landing pages para clínicas e profissionais da saúde com foco em confiança e agendamento.",
      },
      {
        q: "Dá para organizar várias especialidades?",
        a: "Sim. Estruturamos páginas e seções para especialidades, equipe e serviços.",
      },
      {
        q: "Também criam landing pages para Google Ads?",
        a: "Sim. Páginas específicas para campanhas e geração de contatos.",
      },
      {
        q: "O site funcionará no celular?",
        a: "Sim. Todos os projetos são responsivos.",
      },
      {
        q: "Podemos integrar WhatsApp e agendamento?",
        a: "Sim. Sempre que houver compatibilidade técnica.",
      },
      {
        q: "A clínica poderá aparecer no Google?",
        a: "Sim. Aplicamos boas práticas de SEO.",
      },
      {
        q: "Já temos um site. Vocês reformulam?",
        a: "Claro. Também modernizamos sites existentes.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "Depende do escopo. Fale conosco para uma proposta.",
      },
    ],
    manifesto: {
      title: "É exatamente isso que criamos",
      p1: "Na EvoluiLab, criamos sites para clínicas que precisam transmitir organização, cuidado e confiança — e facilitar o caminho até o agendamento.",
      p2: "Cada projeto é personalizado para a identidade da clínica e a jornada do paciente.",
    },
    cta: {
      title: "Sua clínica merece uma presença profissional",
      p1: "Antes de agendar, o paciente pesquisa. Quando encontrar vocês, a primeira impressão precisa transmitir a confiança do atendimento.",
      p2: "Vamos conversar sobre o seu projeto?",
    },
    footerBlurb: "Especialistas em sites e landing pages para clínicas.",
    stepsAudience: "pacientes",
  },
];

export function getProfessionalLanding(slug: string) {
  return PROFESSIONAL_LANDINGS.find((item) => item.slug === slug);
}

export function requireProfessionalLanding(slug: string): ProfessionalLandingConfig {
  const config = getProfessionalLanding(slug);
  if (!config) {
    throw new Error(`Missing professional landing config: ${slug}`);
  }
  return config;
}
