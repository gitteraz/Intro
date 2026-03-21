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
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="topbar">
        <div className="brand">Oasis Mahotas</div>
        <nav className="nav">
          {navItems.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>
        <a className="phone" href="tel:+258857027118">
          Ligue agora +258 857027118
        </a>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">Condomínio residencial premium</span>
            <h1>Conforto, segurança e lazer num condomínio moderno em Mahotas.</h1>
            <p>
              Uma recriação em React da proposta visual do Oasis Mahotas, destacando exclusividade,
              planos flexíveis e uma experiência de vida pensada para famílias que querem qualidade
              de vida.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#fases">
                Manifestar interesse
              </a>
              <a className="btn btn-secondary" href="#projecto">
                Explorar projecto
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card glass">
              <div className="mini-label">Vista geral</div>
              <h3>Residências com design clean e lifestyle resort</h3>
              <p>Piscina, jardim, playground e interiores elegantes num único endereço.</p>
            </div>
            <div className="building-illustration">
              <div className="sun" />
              <div className="tower tower-a" />
              <div className="tower tower-b" />
              <div className="pool" />
              <div className="tree tree-a" />
              <div className="tree tree-b" />
            </div>
          </div>
        </section>

        <section className="metrics section">
          {metrics.map((metric) => (
            <article className="metric-card glass" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section className="section two-column" id="projecto">
          <div className="content-card">
            <SectionTitle
              eyebrow="Projecto"
              title="O refúgio perfeito para quem busca qualidade de vida numa zona em crescimento."
              text="A landing page original combina uma narrativa aspiracional com informações comerciais claras. Aqui, mantivemos a mesma sensação com blocos elegantes, paleta quente e hierarquia visual premium."
            />
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="gallery-grid">
            <div className="gallery-tile tile-large" />
            <div className="gallery-tile tile-small" />
            <div className="gallery-tile tile-small alt" />
          </div>
        </section>

        <section className="section faq-section">
          <SectionTitle
            eyebrow="Perguntas frequentes"
            title="Esclareça tudo antes de garantir seu novo lar"
            text="A secção FAQ replica a clareza comercial do site original com respostas objetivas e foco na conversão."
          />
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article className="faq-card glass" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section phases-section" id="fases">
          <SectionTitle
            eyebrow="Fases de venda"
            title="Planos de entrada flexíveis para cada etapa do investimento"
            text="Cada fase foi desenhada como um card independente, preservando os preços e a progressão comercial vistos na referência."
          />
          <div className="phases-grid">
            {phases.map((phase) => (
              <article className="phase-card" key={phase.title}>
                <span className="phase-tag">{phase.title}</span>
                <div className="phase-years">
                  <strong>5</strong>
                  <span>anos de prestações negociáveis</span>
                </div>
                <p className="phase-deadline">{phase.deadline}</p>
                <ul>
                  {phase.prices.map((price) => (
                    <li key={price}>{price}</li>
                  ))}
                </ul>
                <p className="phase-inventory">{phase.inventory}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-strip">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2>Pronto para reservar a sua unidade?</h2>
            <p>
              Fale com a equipa comercial e receba detalhes sobre tipologias, documentação e
              calendário de entrega.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:vendas@oasismahotas.co.mz">
              vendas@oasismahotas.co.mz
            </a>
            <a className="btn btn-secondary" href="tel:+258857027118">
              +258 857027118
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
