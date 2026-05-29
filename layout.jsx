// Crown Medical — Header, Footer, Floating WhatsApp, LGPD banner

const NAV_ITEMS = [
  { id: "home", label: "Início" },
  { id: "catalog", label: "Produtos" },
  { id: "categories", label: "Categorias", anchor: "categories" },
  { id: "trainings", label: "Treinamentos" },
  { id: "about", label: "Sobre" },
  { id: "contact", label: "Contato" },
];

const headerStyles = {
  outer: {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 100,
    transition: "background 0.3s ease, backdrop-filter 0.3s ease",
  },
};

function Logo({ onClick, small }) {
  return (
    <a href="#home" onClick={onClick} style={{
      display: "inline-flex", alignItems: "center", cursor: "pointer"
    }}>
      <img
        src="Logo/crown_medical_logo_dourado.png"
        alt="Crown Medical"
        style={{ height: small ? 48 : 60, width: "auto", display: "block" }}
      />
    </a>
  );
}

function Header({ route, navigate, cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id, anchor) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate(id, anchor);
  };

  const isActive = (id) => route === id;

  return (
    <header style={{
      ...headerStyles.outer,
      background: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(14px) saturate(120%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(120%)" : "none",
      borderBottom: "1px solid var(--gold-line)",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 32px",
      }}>
        <Logo onClick={go("home")} />

        <nav className="desktop-nav" style={{
          display: "flex", alignItems: "center", gap: 28,
        }}>
          {NAV_ITEMS.map(item => (
            <a key={item.id}
              href={`#${item.id}`}
              onClick={go(item.id === "categories" ? "home" : item.id, item.anchor)}
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: isActive(item.id) ? "var(--gold)" : "var(--text-muted)",
                fontWeight: 500,
                transition: "color 0.25s",
                cursor: "pointer",
                position: "relative",
                paddingBottom: 4,
                borderBottom: isActive(item.id) ? "1px solid var(--gold)" : "1px solid transparent",
              }}
              onMouseEnter={e => e.target.style.color = "var(--gold)"}
              onMouseLeave={e => e.target.style.color = isActive(item.id) ? "var(--gold)" : "var(--text-muted)"}
            >{item.label}</a>
          ))}
        </nav>

        <div className="desktop-actions" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button
            onClick={onOpenCart}
            style={{
              position: "relative", display: "inline-flex", alignItems: "center",
              padding: "8px", color: "var(--text-muted)",
            }}
            aria-label="Solicitações"
          >
            <Icon name="cart" size={22} stroke={1.3} />
            {cartCount > 0 && (
              <span style={{
                position: "absolute", top: 0, right: 0,
                background: "var(--gold)", color: "var(--on-gold)",
                fontSize: 10, fontWeight: 700,
                width: 16, height: 16, borderRadius: 16,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>{cartCount}</span>
            )}
          </button>
          <a className="btn btn-sm" style={{
            background: "var(--whatsapp)", color: "#fff", padding: "8px 12px"
          }} href={waLink("Olá! Gostaria de saber mais sobre os produtos da Crown Medical.")} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={16} color="#fff" />
          </a>
        </div>

        <button
          className="mobile-toggle"
          style={{ display: "none", padding: 8 }}
          onClick={() => setMobileOpen(true)}
        >
          <Icon name="menu" size={26} />
        </button>
      </div>

      {/* Mobile slide-out */}
      <div style={{
        position: "fixed", inset: 0,
        background: "#050505",
        zIndex: 200,
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s ease",
        padding: "32px 24px",
        display: "flex", flexDirection: "column", gap: 24,
        overflowY: "auto",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo onClick={go("home")} />
          <button onClick={() => setMobileOpen(false)} style={{ padding: 8 }}>
            <Icon name="x" size={26} />
          </button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 32 }}>
          {NAV_ITEMS.map((item, i) => (
            <a key={item.id} href={`#${item.id}`} onClick={go(item.id === "categories" ? "home" : item.id, item.anchor)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28, color: "var(--text)",
                paddingBottom: 12, borderBottom: "1px solid var(--line)",
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
              }}>
              <span>{item.label}</span>
              <span className="numeral">0{i+1}</span>
            </a>
          ))}
        </nav>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
          <a className="btn btn-whatsapp" href={waLink("Olá! Gostaria de saber mais sobre os produtos da Crown Medical.")} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={16} color="#fff" /> Falar pelo WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}

function Footer({ navigate }) {
  const go = (id, anchor) => (e) => {
    e.preventDefault();
    navigate(id, anchor);
  };
  return (
    <footer style={{
      background: "#020202",
      borderTop: "1px solid var(--gold-line)",
      paddingTop: 80, paddingBottom: 32,
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
          gap: 48,
        }} className="footer-grid">
          <div>
            <Logo />
            <p style={{
              color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7,
              maxWidth: 320, marginTop: 20,
            }}>
              Distribuição profissional com procedência, suporte e agilidade.
            </p>
            <div style={{ height: 1, background: "var(--gold)", width: 40, margin: "20px 0", opacity: 0.6 }} />
            <p style={{ color: "var(--text-dim)", fontSize: 12, lineHeight: 1.6, maxWidth: 320 }}>
              Distribuidora de produtos profissionais para estética avançada, harmonização, skincare profissional e protocolos regenerativos.
            </p>
          </div>

          <FooterCol title="Navegação" items={[
            ["Início", "home"], ["Produtos", "catalog"], ["Treinamentos", "trainings"],
            ["Sobre", "about"], ["Contato", "contact"],
          ]} navigate={navigate} />

          <FooterCol title="Categorias" items={
            CATEGORIES.slice(0,6).map(c => [c.title, "catalog", c.id])
          } navigate={navigate} />

          <div>
            <FooterTitle>Contato</FooterTitle>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-muted)", fontSize: 13 }}>
                <Icon name="whatsapp" size={16} color="var(--gold)" />
                <span>(31) 9 7202-0202</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-muted)", fontSize: 13 }}>
                <Icon name="mail" size={16} color="var(--gold)" />
                <span>crownmedbr@gmail.com</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-muted)", fontSize: 13 }}>
                <Icon name="instagram" size={16} color="var(--gold)" />
                <span>@crownmed</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-muted)", fontSize: 13 }}>
                <Icon name="map-pin" size={16} color="var(--gold)" />
                <span>Bairro Carneirinhos</span>
              </li>
            </ul>
          </div>

          <div>
            <FooterTitle>Atendimento</FooterTitle>
            <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>
              Segunda a sexta<br />09h – 18h
            </p>
            <a className="btn btn-whatsapp btn-sm" href={waLink("Olá! Gostaria de falar com a Crown Medical.")} target="_blank" rel="noreferrer" style={{ width: "100%" }}>
              <Icon name="whatsapp" size={14} color="#fff" /> Falar agora
            </a>
          </div>
        </div>

        <div style={{
          marginTop: 64, paddingTop: 32,
          borderTop: "1px solid var(--line)",
          display: "flex", flexWrap: "wrap", gap: 24,
          justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {["Privacidade", "Termos de Uso", "Política de Compra Profissional", "Entrega", "Troca e Devolução"].map(item => (
              <a key={item} href="#" style={{ color: "var(--text-dim)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item}</a>
            ))}
          </div>
          <span style={{ color: "var(--text-dim)", fontSize: 11 }}>
            © 2025 Crown Medical. Todos os direitos reservados.
          </span>
        </div>

        <div style={{
          marginTop: 32, padding: "20px 24px",
          background: "rgba(216,180,90,0.04)",
          border: "1px solid var(--gold-line)",
          borderRadius: 2,
          color: "var(--text-dim)", fontSize: 12, lineHeight: 1.7,
          textAlign: "center",
        }}>
          Alguns produtos são destinados exclusivamente a profissionais habilitados e podem estar sujeitos a regulamentações específicas. Consulte a ficha técnica e a documentação aplicável.
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterTitle({ children }) {
  return (
    <h4 style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
      color: "var(--gold)", fontWeight: 500, marginBottom: 22,
    }}>{children}</h4>
  );
}

function FooterCol({ title, items, navigate }) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map(([label, route, anchor]) => (
          <li key={label}>
            <a href={`#${route}`}
              onClick={(e) => { e.preventDefault(); navigate(route, anchor); }}
              style={{ color: "var(--text-muted)", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--gold)"}
              onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
            >{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={waLink("Olá! Gostaria de saber mais sobre os produtos da Crown Medical.")}
      target="_blank" rel="noreferrer"
      className="float-wa"
      aria-label="Falar com especialista no WhatsApp"
    >
      <span className="float-wa-pulse" />
      <Icon name="whatsapp" size={26} color="#fff" />
      <span className="float-wa-tooltip">Fale com um especialista</span>
      <style>{`
        .float-wa {
          position: fixed; bottom: 28px; right: 28px;
          width: 60px; height: 60px;
          background: var(--whatsapp);
          border-radius: 100px;
          display: inline-flex; align-items: center; justify-content: center;
          box-shadow: 0 16px 40px -10px rgba(37, 211, 102, 0.55);
          z-index: 90;
          transition: transform 0.25s;
        }
        .float-wa:hover { transform: scale(1.06); }
        .float-wa-pulse {
          position: absolute; inset: 0;
          border-radius: 100px;
          background: var(--whatsapp);
          opacity: 0.5;
          animation: waPulse 2.2s infinite ease-out;
        }
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 0.5; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .float-wa-tooltip {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%; transform: translateY(-50%);
          background: var(--bg-2);
          border: 1px solid var(--gold-line);
          color: var(--text);
          padding: 8px 14px;
          font-size: 12px; white-space: nowrap;
          border-radius: 2px;
          opacity: 0; pointer-events: none;
          transition: opacity 0.25s;
        }
        .float-wa:hover .float-wa-tooltip { opacity: 1; }
        @media (max-width: 600px) {
          .float-wa { bottom: 20px; right: 20px; width: 54px; height: 54px; }
          .float-wa-tooltip { display: none; }
        }
      `}</style>
    </a>
  );
}

function LGPDBanner() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const accepted = sessionStorage.getItem("crown_lgpd");
    if (!accepted) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div style={{
      position: "fixed", bottom: 16, left: 16,
      maxWidth: 380, zIndex: 80,
      background: "rgba(5,5,5,0.92)",
      backdropFilter: "blur(16px)",
      border: "1px solid var(--gold-line)",
      borderLeft: "2px solid var(--gold)",
      padding: "16px 18px",
      borderRadius: 2,
      display: "flex", flexDirection: "column", gap: 12,
      animation: "lgpdIn 0.5s ease",
    }}>
      <style>{`@keyframes lgpdIn { from { opacity: 0; transform: translateY(20px); } }`}</style>
      <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>
        <strong style={{ color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 10 }}>
          Aviso — Cookies & LGPD
        </strong><br />
        Este site é destinado a profissionais e empresas da área da saúde e estética. Utilizamos cookies para melhorar sua experiência.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button className="btn btn-gold btn-sm" style={{ padding: "8px 14px", fontSize: 10 }}
          onClick={() => { sessionStorage.setItem("crown_lgpd", "1"); setShow(false); }}>
          Sou profissional
        </button>
        <button className="btn btn-ghost btn-sm" style={{ padding: "8px 0", fontSize: 10 }}
          onClick={() => { sessionStorage.setItem("crown_lgpd", "1"); setShow(false); }}>
          Apenas continuar
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { Header, Footer, FloatingWhatsApp, LGPDBanner, Logo });
