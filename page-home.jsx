// Crown Medical — HOME PAGE

function HeroParticles({ enabled }) {
  if (!enabled) return null;
  // SVG-based subtle gold particles
  const dots = [];
  for (let i = 0; i < 28; i++) {
    const x = (i * 137) % 100;
    const y = (i * 71) % 100;
    const size = (i % 5) + 1;
    const delay = (i * 0.3) % 4;
    dots.push({ x, y, size, delay });
  }
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
    }}>
      {dots.map((d, i) => (
        <span key={i} style={{
          position: "absolute",
          left: `${d.x}%`, top: `${d.y}%`,
          width: d.size, height: d.size,
          background: "var(--gold)",
          borderRadius: 100,
          opacity: 0.4,
          boxShadow: "0 0 8px var(--gold)",
          animation: `particleFloat ${6 + d.delay}s ${d.delay}s infinite ease-in-out`,
        }} />
      ))}
      {/* Constellation lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}>
        <defs>
          <pattern id="gridP" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" stroke="var(--gold)" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridP)" />
      </svg>
      <style>{`
        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(8px, -12px); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

function HeroProductMockup() {
  // Elegant abstract product silhouette — vial with liquid + gold cap
  return (
    <div style={{
      position: "relative",
      width: "100%", maxWidth: 460, aspectRatio: "3/4",
      margin: "0 auto",
    }}>
      {/* spotlight */}
      <div style={{
        position: "absolute", inset: "-10% -20%",
        background: "radial-gradient(ellipse at 50% 35%, rgba(216,180,90,0.18) 0%, transparent 55%)",
      }} />
      {/* base reflection */}
      <div style={{
        position: "absolute", bottom: "8%", left: "20%", right: "20%", height: 30,
        background: "radial-gradient(ellipse, rgba(216,180,90,0.25) 0%, transparent 70%)",
        filter: "blur(8px)",
      }} />
      <svg viewBox="0 0 300 400" style={{ position: "relative", width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id="liquid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#d8b45a" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#d8b45a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5a4a26" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="glass" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#000" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#1a1a1a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="cap" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f0d480" />
            <stop offset="50%" stopColor="#d8b45a" />
            <stop offset="100%" stopColor="#8a6f30" />
          </linearGradient>
          <linearGradient id="glassHi" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Cap */}
        <rect x="115" y="50" width="70" height="40" rx="3" fill="url(#cap)" />
        <rect x="120" y="50" width="60" height="3" fill="#f5e4a8" opacity="0.6" />
        <rect x="115" y="85" width="70" height="6" fill="#5a4a26" />
        {/* Neck */}
        <rect x="130" y="91" width="40" height="14" fill="url(#glass)" />
        {/* Body */}
        <path d="M105 105 L195 105 L200 360 Q200 380 180 380 L120 380 Q100 380 100 360 Z" fill="url(#glass)" stroke="#d8b45a" strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Liquid inside */}
        <path d="M115 150 L185 150 L188 360 Q188 372 178 372 L122 372 Q112 372 112 360 Z" fill="url(#liquid)" opacity="0.9" />
        {/* Glass highlight */}
        <rect x="110" y="115" width="6" height="240" fill="url(#glassHi)" />
        <rect x="180" y="115" width="3" height="240" fill="url(#glassHi)" opacity="0.5" />
        {/* Label */}
        <rect x="115" y="220" width="70" height="90" fill="#0a0a0a" opacity="0.7" stroke="#d8b45a" strokeWidth="0.5" strokeOpacity="0.5" />
        <text x="150" y="245" textAnchor="middle" fill="#d8b45a" fontSize="9" fontFamily="'Playfair Display', serif" letterSpacing="2">CROWN</text>
        <line x1="125" y1="252" x2="175" y2="252" stroke="#d8b45a" strokeWidth="0.5" opacity="0.5" />
        <text x="150" y="268" textAnchor="middle" fill="#fff" fontSize="6" fontFamily="'Inter'" opacity="0.7" letterSpacing="1.5">AESTHETIC LINE</text>
        <text x="150" y="290" textAnchor="middle" fill="#aaa" fontSize="4.5" fontFamily="'Inter'" opacity="0.6">1.5ml — uso profissional</text>
      </svg>
      {/* corner accents */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 40, height: 40, borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)", opacity: 0.5 }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 40, height: 40, borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)", opacity: 0.5 }} />
    </div>
  );
}

function HeroSection({ navigate, particles }) {
  const headline = "Produtos estéticos profissionais com procedência, suporte técnico e entrega ágil.";
  const words = headline.split(" ");
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      paddingTop: 140, paddingBottom: 80,
      background: "linear-gradient(135deg, var(--hero-grad-1) 0%, var(--hero-grad-2) 100%)",
      overflow: "hidden",
    }}>
      <HeroParticles enabled={particles} />
      {/* Gold ambient glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "60%", height: "60%",
        background: "radial-gradient(circle, rgba(216,180,90,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center",
        }} className="hero-grid">

          <div>
            <span className="eyebrow" style={{
              animation: "fadeUp 0.7s 0.1s both",
            }}>✦ Distribuidora Profissional</span>

            <h1 className="font-display hero-glow" style={{
              fontSize: "clamp(38px, 5vw, 64px)",
              marginTop: 28, marginBottom: 32,
              maxWidth: 720, textWrap: "balance",
            }}>
              {words.map((w, i) => (
                <span key={i} className="stagger-word" style={{
                  animationDelay: `${0.05 * i + 0.2}s`,
                  marginRight: "0.25em",
                }}>{w === "procedência," ? <span style={{ color: "var(--gold)" }}>procedência,</span> :
                   w === "suporte" ? <span style={{ fontStyle: "italic" }}>suporte</span> :
                   w}</span>
              ))}
            </h1>

            <p style={{
              color: "var(--text-muted)",
              fontSize: 17, lineHeight: 1.7,
              maxWidth: 540, marginBottom: 40,
              animation: "fadeUp 0.7s 1s both",
            }}>
              A Crown Medical atende clínicas e profissionais da saúde, estética e beleza com portfólio selecionado de produtos para estética avançada, harmonização, skincare profissional e protocolos regenerativos.
            </p>

            <div style={{
              display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center",
              animation: "fadeUp 0.7s 1.2s both",
            }}>
              <a className="btn btn-whatsapp btn-lg" href={waLink("Olá! Gostaria de comprar produtos da Crown Medical.")} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} color="#fff" /> Comprar pelo WhatsApp
              </a>
              <button className="btn btn-outline btn-lg" onClick={() => navigate("home", "categories")}>
                Ver Categorias
              </button>
              <button className="btn btn-ghost" onClick={() => navigate("contact")}>
                Falar com Especialista <span className="arrow">→</span>
              </button>
            </div>

            <p style={{
              marginTop: 36,
              fontSize: 11, color: "var(--text-dim)",
              letterSpacing: "0.05em", lineHeight: 1.6,
              maxWidth: 540, display: "flex", alignItems: "flex-start", gap: 8,
              animation: "fadeUp 0.7s 1.4s both",
            }}>
              <Icon name="info" size={13} color="var(--gold)" />
              Venda destinada a profissionais e empresas habilitadas da área da saúde e estética.
            </p>
          </div>

          <div style={{ animation: "fadeUp 0.9s 0.5s both" }}>
            <HeroProductMockup />
          </div>
        </div>

        {/* Brand line strip */}
        <div style={{
          marginTop: 100, paddingTop: 40,
          borderTop: "1px solid var(--gold-line)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
          color: "var(--text-dim)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
          animation: "fadeUp 0.7s 1.6s both",
        }}>
          <span>Crown Aesthetic Line</span>
          <span>—</span>
          <span>Crown Clinical</span>
          <span>—</span>
          <span>Crown Bio</span>
          <span>—</span>
          <span>Crown Skin</span>
          <span>—</span>
          <span>Estética Pro</span>
          <span>—</span>
          <span>Linha Hospitalar</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function CredibilityBar() {
  const items = [
    { icon: "truck", text: "Entrega Ágil para Todo Brasil" },
    { icon: "shield-check", text: "Produtos com Procedência Garantida" },
    { icon: "certificate", text: "Regularizados conforme ANVISA" },
    { icon: "graduation", text: "Treinamento e Suporte Técnico" },
  ];
  return (
    <section style={{
      background: "var(--gold)",
      color: "var(--on-gold)",
      padding: "22px 0",
    }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
          alignItems: "center",
        }} className="cred-grid">
          {items.map(item => (
            <div key={item.text} style={{
              display: "flex", alignItems: "center", gap: 14,
              fontSize: 13, fontFamily: "'Inter'", fontWeight: 500,
              letterSpacing: "0.02em",
            }}>
              <Icon name={item.icon} size={22} color="var(--on-gold)" stroke={1.4} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .cred-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        }
        @media (max-width: 500px) {
          .cred-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function CategoriesSection({ navigate }) {
  return (
    <section id="categories" className="section reveal" style={{ background: "var(--bg)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="✦ Portfólio profissional"
          title="Nosso Portfólio Profissional"
          subtitle="Produtos selecionados para protocolos estéticos avançados, distribuídos com procedência e suporte técnico."
        />
        <div className="grid grid-3" style={{ marginTop: 60, gap: 20 }}>
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i}
              onClick={(id) => navigate("catalog", id)} />
          ))}
          {/* Filler 8th tile — CTA card to balance the grid */}
          <button onClick={() => navigate("catalog")} style={{
            padding: 28, background: "transparent",
            border: "1px dashed var(--gold)",
            textAlign: "left", cursor: "pointer",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            minHeight: 240, color: "var(--text)", transition: "all 0.3s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(216,180,90,0.04)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div>
              <span className="numeral">08</span>
              <h3 style={{ fontSize: 22, marginTop: 16, lineHeight: 1.2 }}>
                Catálogo<br />completo
              </h3>
            </div>
            <span style={{ color: "var(--gold)", display: "inline-flex", gap: 10, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Ver tudo <Icon name="arrow-right" size={18} color="var(--gold)" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  const items = [
    { icon: "bolt", title: "Agilidade na Entrega", text: "Logística pensada para profissionais que não podem esperar." },
    { icon: "target", title: "Atendimento Técnico", text: "Consultoria especializada caso a caso, do orçamento à pós-venda." },
    { icon: "package", title: "Produtos com Procedência", text: "Origem rastreável e cadeia de fornecimento auditada." },
    { icon: "shield-check", title: "Conformidade Regulatória", text: "Produtos regularizados conforme exigências aplicáveis." },
    { icon: "hospital", title: "Distribuição Profissional", text: "Atendimento dedicado a clínicas e profissionais habilitados." },
    { icon: "handshake", title: "Suporte para Clínicas", text: "Relacionamento próximo, condições comerciais e contratos." },
    { icon: "graduation", title: "Treinamentos & Orientação", text: "Eventos técnicos e materiais de protocolo para a equipe." },
  ];
  return (
    <section className="section reveal" style={{ background: "var(--section-alt)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "end" }} className="diff-head">
          <div>
            <span className="eyebrow">✦ Diferenciais</span>
            <h2 className="font-display" style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              marginTop: 24, maxWidth: 520, textWrap: "balance",
            }}>
              Mais do que produtos.<br />
              <em style={{ color: "var(--gold)" }}>Uma parceria técnica.</em>
            </h2>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7, maxWidth: 480 }}>
            A Crown Medical atua com foco em confiança, orientação técnica e agilidade — sustentando a operação da sua clínica em cada etapa.
          </p>
        </div>

        <div style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          border: "1px solid var(--gold-line)",
        }} className="diff-grid">
          {items.map((item, i) => (
            <div key={item.title} style={{
              padding: "36px 30px",
              borderRight: ((i + 1) % 4 !== 0) ? "1px solid var(--gold-line)" : "none",
              borderBottom: i < 4 ? "1px solid var(--gold-line)" : "none",
              transition: "background 0.3s",
              position: "relative",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(216,180,90,0.03)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <span className="numeral" style={{ position: "absolute", top: 16, right: 20 }}>0{i + 1}</span>
              <Icon name={item.icon} size={32} color="var(--gold)" stroke={1.2} />
              <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
          {/* Fill last 8th cell */}
          <div style={{
            padding: "36px 30px",
            borderBottom: "none",
            background: "var(--bg-2)",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <h3 style={{ fontSize: 18, marginBottom: 14, lineHeight: 1.3 }}>
              Pronto para começar?
            </h3>
            <a className="btn btn-gold btn-sm" href={waLink("Olá! Gostaria de falar com a Crown Medical.")} target="_blank" rel="noreferrer">
              Falar agora
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .diff-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .diff-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .diff-grid > div { border-right: 1px solid var(--gold-line) !important; border-bottom: 1px solid var(--gold-line) !important; }
          .diff-grid > div:nth-child(2n) { border-right: none !important; }
        }
        @media (max-width: 600px) {
          .diff-grid { grid-template-columns: 1fr !important; }
          .diff-grid > div { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}

function FeaturedProductsSection({ navigate, onView, onRequest }) {
  const featured = featuredProducts().slice(0, 4);
  return (
    <section className="section reveal" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="eyebrow">✦ Em destaque</span>
            <h2 className="font-display" style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: 20, maxWidth: 600 }}>
              Produtos Profissionais em Destaque
            </h2>
          </div>
          <button className="btn btn-outline" onClick={() => navigate("catalog")}>
            Ver catálogo completo
          </button>
        </div>
        <div className="grid grid-4" style={{ marginTop: 56, gap: 24 }}>
          {featured.map(p => (
            <ProductCard key={p.id} product={p} onView={onView} onRequest={onRequest} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfessionalNoticeSection({ navigate }) {
  return (
    <section className="section-sm reveal" style={{ background: "var(--section-alt)" }}>
      <div className="container">
        <div style={{
          background: "linear-gradient(135deg, var(--hero-grad-2) 0%, #0d1729 100%)",
          border: "1px solid var(--gold)",
          padding: "56px clamp(28px, 5vw, 72px)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* corner accents */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 1, background: "linear-gradient(90deg, var(--gold), transparent)" }} />
          <div style={{
            display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 48, alignItems: "center",
          }} className="notice-grid">
            <div style={{
              width: 80, height: 80, borderRadius: 100,
              border: "1px solid var(--gold)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: "var(--gold)",
              flexShrink: 0,
            }}>
              <Icon name="lock" size={36} stroke={1.2} />
            </div>
            <div>
              <span style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Área para profissionais habilitados
              </span>
              <h3 className="font-display" style={{ fontSize: 28, marginTop: 12, marginBottom: 14, lineHeight: 1.25 }}>
                Alguns produtos podem exigir habilitação profissional ou cadastro técnico.
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, maxWidth: 620 }}>
                A venda de determinados produtos pode exigir comprovação técnica ou documentação específica. Estamos aqui para orientar você em cada etapa.
              </p>
            </div>
            <button className="btn btn-gold" onClick={() => navigate("contact")} style={{ flexShrink: 0 }}>
              Quero me Cadastrar
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .notice-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}

function TrainingsTeaser({ navigate }) {
  return (
    <section className="section reveal" style={{
      position: "relative", overflow: "hidden",
      background: "var(--bg)",
    }}>
      {/* Lab/training abstract bg */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(180deg, var(--bg) 0%, #0a0a0a 50%, var(--bg) 100%)",
      }}>
        <svg width="100%" height="100%" style={{ opacity: 0.05 }}>
          <defs>
            <pattern id="dotsP" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="0.8" fill="var(--gold)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotsP)" />
        </svg>
      </div>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center",
        }} className="train-grid">
          <div>
            <span className="eyebrow">✦ Treinamentos</span>
            <h2 className="font-display" style={{
              fontSize: "clamp(32px, 4.5vw, 56px)", marginTop: 24, marginBottom: 28,
              textWrap: "balance",
            }}>
              Conheça mais do que produtos. <em style={{ color: "var(--gold)" }}>Aprimore seu protocolo.</em>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7, maxWidth: 560, marginBottom: 36 }}>
              A Crown Medical oferece suporte técnico e treinamentos para profissionais habilitados que desejam aprimorar protocolos, conhecer melhor os produtos e atuar com mais segurança.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a className="btn btn-whatsapp" href={waLink("Olá! Quero saber dos próximos treinamentos da Crown Medical.")} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={16} color="#fff" /> Próximos Treinamentos
              </a>
              <button className="btn btn-outline" onClick={() => navigate("trainings")}>
                Falar com Consultor Técnico
              </button>
            </div>
          </div>

          {/* visual */}
          <div style={{
            position: "relative", aspectRatio: "4/5",
            border: "1px solid var(--gold-line)",
            background: "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)",
            padding: 40,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <span className="numeral" style={{ fontSize: 20 }}>EST. 2024</span>
            <div>
              <Icon name="graduation" size={72} color="var(--gold)" stroke={1} />
              <h3 className="font-display" style={{ fontSize: 36, marginTop: 32, lineHeight: 1.1 }}>
                Academia<br />Crown Medical
              </h3>
              <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "20px 0" }} />
              <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6, maxWidth: 280 }}>
                Treinamentos práticos, masterclasses e materiais técnicos para profissionais da estética.
              </p>
            </div>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              paddingTop: 24, borderTop: "1px solid var(--gold-line)",
              color: "var(--text-dim)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
            }}>
              <span>Próximas turmas</span>
              <span style={{ color: "var(--gold)" }}>Em breve</span>
            </div>
            {/* corner */}
            <div style={{ position: "absolute", top: 16, right: 16, width: 30, height: 30, borderTop: "1px solid var(--gold)", borderRight: "1px solid var(--gold)" }} />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .train-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section style={{
      padding: "120px 0",
      background: "linear-gradient(135deg, #050505 0%, var(--hero-grad-2) 100%)",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid var(--gold-line)",
      borderBottom: "1px solid var(--gold-line)",
    }} className="reveal">
      <div style={{
        position: "absolute", top: "-30%", left: "30%",
        width: "60%", height: "100%",
        background: "radial-gradient(circle, rgba(216,180,90,0.1) 0%, transparent 60%)",
      }} />
      <div className="container" style={{ position: "relative", textAlign: "center", zIndex: 2 }}>
        <span className="eyebrow">✦ Vamos conversar</span>
        <h2 className="font-display hero-glow" style={{
          fontSize: "clamp(36px, 5.5vw, 68px)",
          maxWidth: 880, margin: "28px auto 24px",
          textWrap: "balance", lineHeight: 1.1,
        }}>
          Precisa de produtos profissionais <em style={{ color: "var(--gold)" }}>para sua clínica?</em>
        </h2>
        <p style={{
          color: "var(--text-muted)", fontSize: 17, lineHeight: 1.7,
          maxWidth: 640, margin: "0 auto 40px",
        }}>
          Fale com a Crown Medical e receba atendimento especializado para encontrar os produtos mais adequados para sua atuação.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
          <a className="btn btn-whatsapp btn-lg" href={waLink("Olá! Gostaria de falar com a Crown Medical.")} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={20} color="#fff" /> Falar pelo WhatsApp agora
          </a>
          <a className="btn btn-outline btn-lg" href="mailto:crownmedbr@gmail.com">
            <Icon name="mail" size={16} /> Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div style={{
      textAlign: align,
      maxWidth: align === "center" ? 720 : "none",
      margin: align === "center" ? "0 auto" : "0",
    }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display" style={{
        fontSize: "clamp(32px, 4.5vw, 52px)",
        marginTop: 20, marginBottom: subtitle ? 20 : 0,
        textWrap: "balance",
      }}>{title}</h2>
      {subtitle && (
        <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: align === "center" ? "0 auto" : 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function HomePage({ navigate, particles, onView, onRequest, scrollTo }) {
  useReveal();
  React.useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [scrollTo]);

  return (
    <div className="page">
      <HeroSection navigate={navigate} particles={particles} />
      <CredibilityBar />
      <CategoriesSection navigate={navigate} />
      <DifferentiatorsSection />
      <FeaturedProductsSection navigate={navigate} onView={onView} onRequest={onRequest} />
      <ProfessionalNoticeSection navigate={navigate} />
      <TrainingsTeaser navigate={navigate} />
      <FinalCTASection />
    </div>
  );
}

Object.assign(window, { HomePage, SectionHeader });
