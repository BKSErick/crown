// Crown Medical — PRODUCT DETAIL page

function Accordion({ items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ borderTop: "1px solid var(--line)" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
          <button onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              width: "100%", padding: "20px 0",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              textAlign: "left", color: "var(--text)",
              fontFamily: "'Inter'", fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500,
            }}>
            <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span className="numeral" style={{ fontSize: 12 }}>0{i + 1}</span>
              {item.title}
            </span>
            <span style={{
              transition: "transform 0.3s",
              transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
              color: "var(--gold)",
            }}>
              <Icon name="chevron-down" size={18} color="var(--gold)" />
            </span>
          </button>
          <div style={{
            maxHeight: open === i ? 400 : 0,
            overflow: "hidden",
            transition: "max-height 0.5s ease",
          }}>
            <div style={{
              paddingBottom: 24, color: "var(--text-muted)",
              fontSize: 14, lineHeight: 1.7,
            }}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductPage({ productId, navigate, onView, onRequest, onAddToCart }) {
  const product = getProduct(productId);
  const [qty, setQty] = React.useState(1);
  useReveal();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="page" style={{ paddingTop: 200, paddingBottom: 200, textAlign: "center" }}>
        <p style={{ color: "var(--text-muted)" }}>Produto não encontrado.</p>
        <button className="btn btn-outline" style={{ marginTop: 24 }} onClick={() => navigate("catalog")}>
          Voltar ao catálogo
        </button>
      </div>
    );
  }
  const cat = getCategory(product.category);
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const accordion = [
    {
      title: "Descrição completa",
      content: `${product.name} é um produto profissional destinado a aplicações em ${cat?.title?.toLowerCase()}. Indicado para protocolos clínicos avançados, com base em literatura técnica e supervisão profissional.`,
    },
    { title: "Marca / Fabricante", content: product.brand },
    { title: "Apresentação / Volume", content: product.presentation },
    { title: "Registro / Regularização", content: "Produto regularizado conforme exigências aplicáveis. Documentação técnica disponível mediante solicitação ao time comercial." },
    { title: "Condições de armazenamento", content: "Manter em temperatura controlada conforme bula. Proteger da luz direta. Verificar instruções específicas na embalagem original." },
    { title: "Prazo de validade", content: "Conforme indicado na embalagem. Lotes recentes — confirmar validade no momento da solicitação." },
    { title: "Documentação técnica", content: "Ficha técnica, certificado de análise e bula disponíveis sob solicitação para profissionais habilitados." },
    { title: "Indicação profissional", content: "Indicado exclusivamente para profissionais habilitados conforme normas regulatórias aplicáveis. Consulte sempre a ficha técnica e bula." },
  ];

  return (
    <div className="page">
      {/* Breadcrumb */}
      <div style={{ paddingTop: 110, background: "var(--bg)" }}>
        <div className="container" style={{ padding: "20px 32px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dim)", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <a onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Início</a>
            <span>›</span>
            <a onClick={() => navigate("catalog")} style={{ cursor: "pointer" }}>Produtos</a>
            <span>›</span>
            <a onClick={() => navigate("catalog", cat?.id)} style={{ cursor: "pointer" }}>{cat?.title}</a>
            <span>›</span>
            <span style={{ color: "var(--text)" }}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Split */}
      <section style={{ padding: "40px 0 100px", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64 }} className="prod-grid">

            {/* Image / Gallery */}
            <div>
              <div style={{ border: "1px solid var(--gold-line)" }}>
                <ProductImage product={product} size="lg" />
              </div>
              {/* Thumbnail dots */}
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                {[1, 2, 3].map((n, i) => (
                  <div key={n} style={{
                    width: 70, height: 70,
                    border: i === 0 ? "1px solid var(--gold)" : "1px solid var(--gold-line)",
                    opacity: i === 0 ? 1 : 0.5,
                    cursor: "pointer",
                  }}>
                    <ProductImage product={product} size="sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div style={{ position: "sticky", top: 120, alignSelf: "start" }} className="prod-info">
              <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
                <span className="tag">{cat?.title}</span>
                {product.restricted && (
                  <span className="tag warn" style={{ borderColor: "#5a3a3a", color: "#d8a0a0" }}>
                    <Icon name="lock" size={11} /> Restrito
                  </span>
                )}
                {product.featured && <span className="tag solid">★ Destaque</span>}
              </div>

              <h1 className="font-display" style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                marginBottom: 12, lineHeight: 1.15,
              }}>{product.name}</h1>

              <p style={{ color: "var(--text-muted)", fontSize: 14, letterSpacing: "0.04em" }}>
                Por <strong style={{ color: "var(--gold)" }}>{product.brand}</strong> · {product.presentation}
              </p>

              <div className="gold-line" />

              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                Produto profissional destinado a {cat?.desc?.toLowerCase()}. Distribuição com procedência, suporte técnico e documentação completa sob solicitação.
              </p>

              {/* Price line */}
              <div style={{
                padding: "20px 24px", background: "var(--surface)",
                border: "1px solid var(--gold-line)",
                display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
                marginBottom: 24,
              }}>
                <div>
                  <span style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-dim)" }}>
                    Valor
                  </span>
                  <p className="font-display" style={{ fontSize: 26, color: "var(--gold)", marginTop: 4 }}>
                    Sob consulta
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Qtd</span>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--gold-line)" }}>
                    <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: "10px 12px", color: "var(--gold)" }}>
                      <Icon name="minus" size={14} />
                    </button>
                    <span style={{ width: 40, textAlign: "center", color: "var(--text)", fontSize: 14, fontFamily: "'Playfair Display', serif" }}>{qty}</span>
                    <button onClick={() => setQty(qty + 1)} style={{ padding: "10px 12px", color: "var(--gold)" }}>
                      <Icon name="plus" size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                <a className="btn btn-whatsapp btn-lg"
                  href={waLink(`Olá! Tenho interesse no produto: ${product.name} (${product.brand}) — qtd ${qty}.`)}
                  target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" size={18} color="#fff" /> Comprar pelo WhatsApp
                </a>
                <button className="btn btn-outline btn-lg" onClick={() => { onAddToCart(product.id, qty); }}>
                  <Icon name="cart" size={16} /> Adicionar à solicitação ({qty})
                </button>
                <button className="btn btn-ghost" onClick={() => navigate("contact")}>
                  Falar com Especialista <span className="arrow">→</span>
                </button>
              </div>

              {/* Notice */}
              <div style={{
                padding: "14px 18px",
                background: "rgba(216,180,90,0.05)",
                borderLeft: "2px solid var(--gold)",
                color: "var(--text-muted)", fontSize: 12, lineHeight: 1.6,
                display: "flex", alignItems: "flex-start", gap: 10,
              }}>
                <Icon name="info" size={14} color="var(--gold)" />
                <span>Este produto é destinado a profissionais habilitados. A venda pode exigir comprovação técnica ou documentação específica.</span>
              </div>

              {/* Trust strip */}
              <div style={{
                marginTop: 28, paddingTop: 28, borderTop: "1px solid var(--line)",
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
              }}>
                {[
                  { icon: "truck", text: "Entrega ágil" },
                  { icon: "shield-check", text: "Procedência" },
                  { icon: "graduation", text: "Suporte técnico" },
                ].map(t => (
                  <div key={t.text} style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 11, letterSpacing: "0.06em" }}>
                    <Icon name={t.icon} size={22} color="var(--gold)" />
                    <p style={{ marginTop: 8 }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion details */}
      <section className="section-sm" style={{ background: "var(--section-alt)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }} className="acc-grid">
            <div>
              <span className="eyebrow">✦ Ficha técnica</span>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: 20, textWrap: "balance" }}>
                Informações técnicas
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 16, lineHeight: 1.7 }}>
                Documentação completa, certificações e materiais técnicos disponíveis para profissionais habilitados sob solicitação.
              </p>
            </div>
            <Accordion items={accordion} />
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-sm" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
              <div>
                <span className="eyebrow">✦ Linha relacionada</span>
                <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: 16 }}>
                  Produtos da mesma categoria
                </h2>
              </div>
              <button className="btn btn-outline btn-sm" onClick={() => navigate("catalog", cat?.id)}>
                Ver todos em {cat?.title}
              </button>
            </div>
            <div className="grid grid-3" style={{ gap: 24 }}>
              {related.map(p => (
                <ProductCard key={p.id} product={p} onView={onView} onRequest={onRequest} />
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 960px) {
          .prod-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .prod-info { position: static !important; }
          .acc-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}

window.ProductPage = ProductPage;
