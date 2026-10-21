const focusAreas = [
  {
    number: "01",
    title: "Desenvolvimento de software",
    description:
      "Aplicações web, APIs e soluções backend construídas com atenção à clareza, manutenção e evolução do produto.",
    tags: ["Backend", "APIs", "Web"],
  },
  {
    number: "02",
    title: "Dados e controladoria",
    description:
      "Informação organizada para apoiar decisões, acompanhar resultados e tornar os números mais úteis para o negócio.",
    tags: ["Indicadores", "Análise", "Gestão"],
  },
  {
    number: "03",
    title: "Automação e processos",
    description:
      "Redução de tarefas repetitivas e melhoria de processos por meio de tecnologia aplicada a necessidades reais.",
    tags: ["Automação", "Eficiência", "Integração"],
  },
];

const principles = [
  "Soluções práticas para problemas reais",
  "Código legível e sustentável",
  "Decisões orientadas por dados",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="DC Macedo, página inicial">
          <span className="brand-mark">DC</span>
          <span className="brand-name">DC MACEDO<span className="brand-dot">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Atuação</a>
          <a href="#contato" className="nav-contact">Contato <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> TECNOLOGIA · DADOS · NEGÓCIOS</div>
          <h1>Conectando tecnologia a <span className="gradient-text">resultados reais.</span></h1>
          <p className="hero-description">
            Sou um profissional interessado em transformar desafios de negócio em soluções práticas por meio de software, dados e processos bem definidos.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#atuacao">Conheça minha atuação <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#sobre">Um pouco sobre mim <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-note"><span className="note-line" /> Uma visão que combina negócio e tecnologia.</div>
        </div>

        <div className="hero-visual" aria-label="Ilustração abstrata de conexões entre dados e tecnologia" role="img">
          <div className="visual-grid" />
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="visual-core"><span>DC</span><i /></div>
          <div className="float-card card-code"><span className="mini-icon">{`</>`}</span><div><strong>Software</strong><small>Construir soluções</small></div></div>
          <div className="float-card card-data"><span className="mini-icon mini-icon-green">↗</span><div><strong>Dados</strong><small>Gerar clareza</small></div></div>
          <div className="float-card card-business"><span className="mini-icon mini-icon-purple">◇</span><div><strong>Negócios</strong><small>Entregar valor</small></div></div>
          <span className="visual-caption">IDEIAS BEM CONECTADAS</span>
        </div>
        <a href="#sobre" className="scroll-cue"><span /> ROLE PARA EXPLORAR</a>
      </section>

      <section className="intro-section section-shell" id="sobre">
        <div className="section-label"><span>01</span> / SOBRE</div>
        <div className="intro-content">
          <h2>O melhor da tecnologia começa com <span className="muted-text">o problema certo.</span></h2>
          <div className="intro-bottom">
            <p>Meu interesse está na interseção entre tecnologia e gestão: entender o contexto, estruturar a informação e criar soluções que funcionem fora da tela de apresentação.</p>
            <div className="principles">
              {principles.map((principle) => (
                <div className="principle" key={principle}><span className="check-icon">✓</span>{principle}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work-section section-shell" id="atuacao">
        <div className="section-heading">
          <div><div className="section-label"><span>02</span> / ÁREAS DE INTERESSE</div><h2>Onde negócio encontra <span className="gradient-text">tecnologia.</span></h2></div>
          <p>Três perspectivas complementares para criar soluções mais úteis, eficientes e sustentáveis.</p>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.number}>
              <div className="focus-card-top"><span className="focus-number">{area.number}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="tag-list">{area.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contato">
        <div className="contact-panel">
          <div className="contact-glow" />
          <div className="section-label"><span>03</span> / PRÓXIMA CONVERSA</div>
          <h2>Tem uma ideia ou desafio<br />para tirar do papel?</h2>
          <p>Vamos conversar sobre tecnologia, desenvolvimento e oportunidades de melhorar processos.</p>
          <a className="button button-primary" href="mailto:contato@dcmacedo.com.br?subject=Contato%20pelo%20site">Entre em contato <span aria-hidden="true">↗</span></a>
          <span className="contact-domain">DCMACEDO.COM.BR</span>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="footer-brand" href="#inicio">DC MACEDO<span className="brand-dot">.</span></a>
        <p>Tecnologia com propósito. Decisões com contexto.</p>
        <span className="copyright">© {new Date().getFullYear()} DC Macedo</span>
      </footer>
    </main>
  );
}
