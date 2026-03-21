const { createElement: h, Fragment } = React;

const navItems = ['Início', 'Projecto', 'Investidores', 'Contacto'];

const metrics = [
  { value: '3', label: 'Edifícios' },
  { value: '36', label: 'Apartamentos' },
  { value: '24h', label: 'Segurança' },
  { value: '1M MT', label: 'De Entrada' },
];

const faqs = [
  {
    question: 'Posso receber a chave mesmo sem ter terminado de pagar?',
    answer:
      'Sim. A entrega das chaves acontece assim que o edifício estiver concluído, mesmo que o pagamento ainda decorra dentro do plano acordado.',
  },
  {
    question: 'Quanto tempo tenho para pagar o imóvel?',
    answer:
      'Após a entrada inicial de 1.000.000 MT, o saldo pode ser distribuído em até 60 meses com prestações negociáveis.',
  },
  {
    question: 'O que está incluído no condomínio?',
    answer:
      'Piscina, playground, áreas verdes, estacionamento privativo e segurança 24 horas compõem a proposta do condomínio.',
  },
];

const phases = [
  {
    title: 'Fase 1',
    deadline: 'Até Março de 2026',
    prices: ['Entrada - 1.000.000 MT', 'Tipo 3 - 10.000.000 MT', 'Tipo 2 - 7.500.000 MT'],
    inventory: 'Apenas 9 apartamentos (exclusivo)',
  },
  {
    title: 'Fase 2',
    deadline: 'Até Junho de 2026',
    prices: ['Entrada - 1.000.000 MT', 'Tipo 3 - 11.000.000 MT', 'Tipo 2 - 8.500.000 MT'],
    inventory: 'Apenas 9 apartamentos',
  },
  {
    title: 'Fase 3',
    deadline: 'Até Outubro de 2026',
    prices: ['Entrada - 1.000.000 MT', 'Tipo 3 - 12.000.000 MT', 'Tipo 2 - 9.000.000 MT'],
    inventory: '18 apartamentos',
  },
];

const features = [
  'Piscina privativa e zonas lounge',
  'Playground e áreas verdes para a família',
  'Acabamentos contemporâneos com luz natural',
  'Localização estratégica em Mahotas, Maputo',
];

function SectionTitle({ eyebrow, title, text }) {
  return h('div', { className: 'section-title' }, [
    h('span', { className: 'eyebrow', key: 'eyebrow' }, eyebrow),
    h('h2', { key: 'title' }, title),
    text ? h('p', { key: 'text' }, text) : null,
  ]);
}

function App() {
  return h(Fragment, null, [
    h('header', { className: 'topbar', key: 'topbar' }, [
      h('div', { className: 'brand' }, 'Oasis Mahotas'),
      h('nav', { className: 'nav' }, navItems.map((item) => h('a', { href: '#', key: item }, item))),
      h('a', { className: 'phone', href: 'tel:+258857027118' }, 'Ligue agora +258 857027118'),
    ]),
    h('main', { key: 'main' }, [
      h('section', { className: 'hero section' }, [
        h('div', { className: 'hero-copy' }, [
          h('span', { className: 'eyebrow' }, 'Condomínio residencial premium'),
          h('h1', null, 'Conforto, segurança e lazer num condomínio moderno em Mahotas.'),
          h(
            'p',
            null,
            'Uma recriação em React da proposta visual do Oasis Mahotas, destacando exclusividade, planos flexíveis e uma experiência de vida pensada para famílias que querem qualidade de vida.'
          ),
          h('div', { className: 'hero-actions' }, [
            h('a', { className: 'btn btn-primary', href: '#fases' }, 'Manifestar interesse'),
            h('a', { className: 'btn btn-secondary', href: '#projecto' }, 'Explorar projecto'),
          ]),
        ]),
        h('div', { className: 'hero-visual' }, [
          h('div', { className: 'hero-card glass' }, [
            h('div', { className: 'mini-label' }, 'Vista geral'),
            h('h3', null, 'Residências com design clean e lifestyle resort'),
            h('p', null, 'Piscina, jardim, playground e interiores elegantes num único endereço.'),
          ]),
          h('div', { className: 'building-illustration' }, [
            h('div', { className: 'sun' }),
            h('div', { className: 'tower tower-a' }),
            h('div', { className: 'tower tower-b' }),
            h('div', { className: 'pool' }),
            h('div', { className: 'tree tree-a' }),
            h('div', { className: 'tree tree-b' }),
          ]),
        ]),
      ]),
      h('section', { className: 'metrics section' }, [
        ...metrics.map((metric) =>
          h('article', { className: 'metric-card glass', key: metric.label }, [
            h('strong', null, metric.value),
            h('span', null, metric.label),
          ])
        ),
      ]),
      h('section', { className: 'section two-column', id: 'projecto' }, [
        h('div', { className: 'content-card' }, [
          h(SectionTitle, {
            eyebrow: 'Projecto',
            title: 'O refúgio perfeito para quem busca qualidade de vida numa zona em crescimento.',
            text:
              'A landing page original combina uma narrativa aspiracional com informações comerciais claras. Aqui, mantivemos a mesma sensação com blocos elegantes, paleta quente e hierarquia visual premium.',
          }),
          h('ul', { className: 'feature-list' }, features.map((feature) => h('li', { key: feature }, feature))),
        ]),
        h('div', { className: 'gallery-grid' }, [
          h('div', { className: 'gallery-tile tile-large' }),
          h('div', { className: 'gallery-tile tile-small' }),
          h('div', { className: 'gallery-tile tile-small alt' }),
        ]),
      ]),
      h('section', { className: 'section faq-section' }, [
        h(SectionTitle, {
          eyebrow: 'Perguntas frequentes',
          title: 'Esclareça tudo antes de garantir seu novo lar',
          text: 'A secção FAQ replica a clareza comercial do site original com respostas objetivas e foco na conversão.',
        }),
        h('div', { className: 'faq-grid' },
          faqs.map((faq) =>
            h('article', { className: 'faq-card glass', key: faq.question }, [
              h('h3', null, faq.question),
              h('p', null, faq.answer),
            ])
          )
        ),
      ]),
      h('section', { className: 'section phases-section', id: 'fases' }, [
        h(SectionTitle, {
          eyebrow: 'Fases de venda',
          title: 'Planos de entrada flexíveis para cada etapa do investimento',
          text: 'Cada fase foi desenhada como um card independente, preservando os preços e a progressão comercial vistos na referência.',
        }),
        h('div', { className: 'phases-grid' },
          phases.map((phase) =>
            h('article', { className: 'phase-card', key: phase.title }, [
              h('span', { className: 'phase-tag' }, phase.title),
              h('div', { className: 'phase-years' }, [
                h('strong', null, '5'),
                h('span', null, 'anos de prestações negociáveis'),
              ]),
              h('p', { className: 'phase-deadline' }, phase.deadline),
              h('ul', null, phase.prices.map((price) => h('li', { key: price }, price))),
              h('p', { className: 'phase-inventory' }, phase.inventory),
            ])
          )
        ),
      ]),
      h('section', { className: 'section contact-strip' }, [
        h('div', null, [
          h('span', { className: 'eyebrow' }, 'Contacto'),
          h('h2', null, 'Pronto para reservar a sua unidade?'),
          h('p', null, 'Fale com a equipa comercial e receba detalhes sobre tipologias, documentação e calendário de entrega.'),
        ]),
        h('div', { className: 'contact-actions' }, [
          h('a', { className: 'btn btn-primary', href: 'mailto:vendas@oasismahotas.co.mz' }, 'vendas@oasismahotas.co.mz'),
          h('a', { className: 'btn btn-secondary', href: 'tel:+258857027118' }, '+258 857027118'),
        ]),
      ]),
    ]),
  ]);
}

export default App;
