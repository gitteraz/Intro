import React, { useEffect, useState } from 'react';

const highlights = [
  { value: '4', label: 'Edifícios' },
  { value: '36', label: 'Apartamentos' },
  { value: '24h', label: 'Segurança' },
  { value: 'Furo', label: 'De água' },
  { value: 'Gerador', label: 'Incluído' },
  { value: 'Play', label: 'Ground' },
  { value: 'Piscina', label: 'Privativa' },
];

const phases = [
  {
    title: 'Plano 5 Anos',
    years: '5',
    entry: '1.000.000 MT',
    type2: '150.000 MT/Mês',
    type3: '183.000 MT/Mês',
    handover: '60% do pagamento',
  },
  {
    title: 'Plano 6 Anos',
    years: '6',
    entry: '20%',
    type2: '111.000 MT/Mês',
    type3: '133.000 MT/Mês',
    handover: '50% do pagamento',
  },
  {
    title: 'Plano 7 Anos',
    years: '7',
    entry: '30%',
    type2: '79.000 MT/Mês',
    type3: '95.000 MT/Mês',
    handover: '40% do pagamento',
  },
];

const faqs = [
  {
    question: 'Quando os edifícios estarão prontos?',
    answer: 'Os edifícios estarão prontos a 18 de dezembro de 2026.',
  },
  {
    question: 'É possível negociar o calendário de pagamento?',
    answer: 'Sim. O pagamento pode ser negociado de acordo com o calendário do cliente.',
  },
  {
    question: 'Quando recebo a chave?',
    answer: 'A entrega da chave na mão acontece de acordo com o plano de pagamento escolhido.',
  },
  {
    question: 'Como é a localização do empreendimento?',
    answer:
      'O condomínio está a 3 km da Willow International School e a 5 km do Bahia Mall, com acesso fácil pela Julius Nyerere, Marginal e perto da estrada Dona Alice.',
  },
  {
    question: 'O que está incluído na taxa de condomínio?',
    answer: 'O furo de água e o gerador estão incluídos na taxa de condomínio.',
  },
];

const salesPoints = [
  'Um condomínio desenhado para famílias que querem morar bem sem abdicar de um plano de pagamento realista.',
  'Localização estratégica para quem precisa de acesso rápido a escolas, comércio, avenidas principais e zonas de expansão residencial.',
  'Modelo comercial flexível, criado para permitir negociação e facilitar a entrada numa unidade nova com perspectiva de valorização.',
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.2 11.2 0 0 0 3.52.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.48a1 1 0 0 1 1 1 11.2 11.2 0 0 0 .56 3.52 1 1 0 0 1-.24 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25Zm1.9.25L12 12.18 19.1 7Zm14.6 1.23-6.9 5.01a1 1 0 0 1-1.18 0L4.5 8.23v9.02c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
  const baseUrl = import.meta.env.BASE_URL;
  const allImages = Array.from({ length: 18 }, (_, index) => `${baseUrl}img${index + 1}.jpeg`);
  const galleryPreviewIndexes = [2, 10, 6, 14, 1, 8, 16];
  const galleryPreviewImages = galleryPreviewIndexes.map((index) => allImages[index]);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  useEffect(() => {
    if (activeImageIndex === null) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setActiveImageIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % allImages.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) => (current - 1 + allImages.length) % allImages.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  function openGalleryFromImage(imagePath) {
    setActiveImageIndex(allImages.indexOf(imagePath));
  }

  function showPreviousImage() {
    setActiveImageIndex((current) => (current - 1 + allImages.length) % allImages.length);
  }

  function showNextImage() {
    setActiveImageIndex((current) => (current + 1) % allImages.length);
  }

  return (
    <>
      <header className="topbar">
        <div className="brand">Oasis Mahotas</div>
        <div className="topbar-contact">
          <a className="contact-link" href="tel:+258857027118">
            <span className="contact-icon" aria-hidden="true">
              <PhoneIcon />
            </span>
            857027118
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-media">
            <div
              className="hero-image"
              role="img"
              aria-label="Vista aérea do condomínio Oasis Mahotas"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(8, 22, 18, 0.06) 0%, rgba(8, 22, 18, 0.54) 100%), url("${baseUrl}mahotas-hero.png")`,
              }}
            />
            <div className="hero-overlay">
              <div className="hero-copy glass">
                <div className="hero-copy-body">
                  <span className="eyebrow">Condomínio residencial premium</span>
                  <h1>Apartamentos exclusivos num novo endereço residencial nas Mahotas.</h1>
                  <p>
                    Adquira a sua casa própria sem pressão financeira e pague em prestações
                    flexíveis num condomínio pensado para viver melhor.
                  </p>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#fases">
                    Ver Modalidades
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics section">
          {highlights.map((item) => (
            <article className="metric-card glass" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section two-column" id="projecto">
          <div className="content-card">
            <SectionTitle
              eyebrow="Informação estratégica"
              title="Entre este ano e termine de pagar em 2033."
              text="Um projecto residencial com localização forte, boa infraestrutura e pagamento negociável."
            />
            <ul className="feature-list">
              {salesPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="gallery-grid gallery-grid-photos">
            {galleryPreviewImages.map((imagePath, index) => (
              <button
                className={`gallery-photo gallery-photo-${index + 1}`}
                key={imagePath}
                type="button"
                onClick={() => openGalleryFromImage(imagePath)}
                aria-label={`Abrir galeria na imagem ${galleryPreviewIndexes[index] + 1}`}
              >
                <img src={imagePath} alt={`Vista do empreendimento ${galleryPreviewIndexes[index] + 1}`} />
              </button>
            ))}
          </div>
        </section>

        <section className="section faq-section">
          <SectionTitle
            eyebrow="Perguntas frequentes"
            title="Informações essenciais para fechar a decisão com segurança"
            text="Os pontos abaixo resumem datas, localização, negociação e o que está incluído no condomínio."
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
            eyebrow="Plano de pagamento"
            title="Escolha o seu plano e venha negociar"
            text="Termos comerciais organizados por duração do pagamento, com entrada, prestação mensal por tipologia e percentagem para entrega das chaves."
          />
          <div className="phases-grid">
            {phases.map((phase) => (
              <article className="phase-card" key={phase.title}>
                <span className="phase-tag">{phase.title}</span>
                <div className="phase-years">
                  <strong>{phase.years}</strong>
                  <span>anos</span>
                </div>
                <dl className="phase-details">
                  <div>
                    <dt>Entrada</dt>
                    <dd>{phase.entry}</dd>
                  </div>
                  <div>
                    <dt>Tipo 2</dt>
                    <dd>{phase.type2}</dd>
                  </div>
                  <div>
                    <dt>Tipo 3</dt>
                    <dd>{phase.type3}</dd>
                  </div>
                  <div>
                    <dt>Chave na mão</dt>
                    <dd>{phase.handover}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-strip">
          <div>
            <span className="eyebrow">Agende a sua visita</span>
            <h2>Venha ver de perto a casa modelo.</h2>
            <p>
              Entre em contacto para visitar as unidades, conhecer as tipologias disponíveis e
              negociar a melhor modalidade de pagamento.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:oasis@vaargo.co.mz">
              <span className="contact-icon" aria-hidden="true">
                <EnvelopeIcon />
              </span>
              oasis@vaargo.co.mz
            </a>
            <a className="btn btn-secondary" href="tel:+258857027118">
              <span className="contact-icon" aria-hidden="true">
                <PhoneIcon />
              </span>
              857027118
            </a>
          </div>
        </section>
      </main>

      {activeImageIndex !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de imagens">
          <button className="lightbox-backdrop" type="button" onClick={() => setActiveImageIndex(null)} />
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" onClick={() => setActiveImageIndex(null)}>
              Fechar
            </button>
            <button className="lightbox-nav lightbox-prev" type="button" onClick={showPreviousImage}>
              ‹
            </button>
            <img
              className="lightbox-image"
              src={allImages[activeImageIndex]}
              alt={`Imagem do empreendimento ${activeImageIndex + 1}`}
            />
            <button className="lightbox-nav lightbox-next" type="button" onClick={showNextImage}>
              ›
            </button>
            <div className="lightbox-counter">
              {activeImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
