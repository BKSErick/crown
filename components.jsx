// Crown Medical — Shared components: ProductCard, CategoryCard, ProductImage, Cart drawer

function ProductImage({ product, size = "default", flat = false }) {
  // Stylized placeholder — abstract vial/syringe silhouette with name
  const accent = product?.accent || "var(--gold)";
  const dim = { default: 360, sm: 200, lg: 480 }[size] || 360;
  return (
    <div style={{
      position: "relative", width: "100%",
      aspectRatio: "1 / 1",
      background: flat ? "#ffffff08"
        : "radial-gradient(ellipse at 50% 30%, #1c1c1c 0%, #0a0a0a 80%)",
      overflow: "hidden",
      borderBottom: flat ? "none" : "1px solid var(--gold-line)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* abstract silhouette */}
      <svg viewBox="0 0 200 200" style={{
        position: "absolute", width: "60%", height: "60%",
        opacity: 0.35, mixBlendMode: "screen",
      }}>
        <defs>
          <linearGradient id={`g-${product?.id}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Vial/syringe shape varies by category */}
        {product?.category === "bioestimuladores" || product?.category === "acido" ? (
          <g>
            <rect x="80" y="40" width="40" height="100" rx="4" fill={`url(#g-${product?.id})`} />
            <rect x="75" y="36" width="50" height="10" rx="2" fill={accent} opacity="0.7" />
            <line x1="100" y1="140" x2="100" y2="170" stroke={accent} strokeWidth="2" />
          </g>
        ) : product?.category === "toxina" || product?.category === "enzimas" ? (
          <g>
            <path d="M75 30 L75 50 Q75 55 80 55 L120 55 Q125 55 125 50 L125 30 Z" fill={accent} opacity="0.7" />
            <path d="M80 55 L80 160 Q80 170 90 170 L110 170 Q120 170 120 160 L120 55 Z" fill={`url(#g-${product?.id})`} />
            <rect x="85" y="90" width="30" height="2" fill={accent} opacity="0.4" />
            <rect x="85" y="110" width="30" height="2" fill={accent} opacity="0.4" />
          </g>
        ) : product?.category === "fios" ? (
          <g stroke={accent} strokeWidth="1.5" fill="none" opacity="0.8">
            <path d="M30 60 Q100 40 170 60 Q100 100 30 120 Q100 140 170 160" />
            <circle cx="170" cy="60" r="3" fill={accent} />
          </g>
        ) : product?.category === "skincare" ? (
          <g>
            <rect x="70" y="50" width="60" height="110" rx="6" fill={`url(#g-${product?.id})`} />
            <rect x="85" y="40" width="30" height="14" rx="2" fill={accent} opacity="0.6" />
          </g>
        ) : (
          <g>
            <circle cx="100" cy="100" r="50" fill={`url(#g-${product?.id})`} />
            <circle cx="100" cy="100" r="30" fill="none" stroke={accent} opacity="0.5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke={accent} opacity="0.3" />
          </g>
        )}
      </svg>
      {/* product name overlay */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end",
        padding: 20,
        background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.5) 100%)",
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--gold)", opacity: 0.8, marginBottom: 6,
        }}>{getCategory(product?.category)?.title || "Produto"}</span>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 16, color: "#fff", lineHeight: 1.2,
        }}>{product?.name}</span>
      </div>
      {/* corner accent */}
      <div style={{
        position: "absolute", top: 14, right: 14,
        width: 22, height: 22,
        borderTop: "1px solid var(--gold)",
        borderRight: "1px solid var(--gold)",
        opacity: 0.5,
      }} />
      <div style={{
        position: "absolute", bottom: 14, left: 14,
        width: 22, height: 22,
        borderBottom: "1px solid var(--gold)",
        borderLeft: "1px solid var(--gold)",
        opacity: 0.5,
      }} />
    </div>
  );
}

function ProductCard({ product, onView, onRequest }) {
  const cat = getCategory(product.category);
  return (
    <article className="card" style={{
      display: "flex", flexDirection: "column",
      cursor: "pointer",
    }} onClick={() => onView(product.id)}>
      <ProductImage product={product} />
      <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span className="tag">{cat?.title}</span>
          {product.restricted && (
            <span className="tag warn" style={{ borderColor: "#5a3a3a", color: "#d8a0a0" }}>
              <Icon name="lock" size={11} /> Restrito
            </span>
          )}
        </div>
        <div>
          <h3 style={{
            fontSize: 19, lineHeight: 1.25,
            color: "var(--text)", marginBottom: 4,
          }}>{product.name}</h3>
          <p style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.05em" }}>
            {product.brand}
          </p>
        </div>
        {product.desc && (
          <p style={{
            color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6,
            display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {product.desc}
          </p>
        )}
        <p style={{ color: "var(--text-dim)", fontSize: 12, marginTop: "auto", letterSpacing: "0.03em" }}>
          {product.presentation}
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 8, alignItems: "center" }}>
          <button className="btn btn-gold btn-sm" style={{ flex: 1 }}
            onClick={(e) => { e.stopPropagation(); onRequest(product); }}>
            <Icon name="whatsapp" size={14} color="var(--on-gold)" /> Solicitar
          </button>
          <button className="btn-ghost" style={{ padding: 0, color: "var(--gold)" }}
            onClick={(e) => { e.stopPropagation(); onView(product.id); }}>
            <Icon name="arrow-right" size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}

function CategoryCard({ category, onClick, index }) {
  return (
    <button onClick={() => onClick(category.id)} className="cat-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 56, height: 56,
          border: "1px solid var(--gold)",
          borderRadius: 100,
          color: "var(--gold)",
        }}>
          <Icon name={category.icon} size={24} stroke={1.2} />
        </span>
        <span className="numeral">0{index + 1}</span>
      </div>
      <h3 style={{
        fontSize: 22, lineHeight: 1.2,
        marginBottom: 10, color: "var(--text)",
      }}>{category.title}</h3>
      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 24 }}>
        {category.desc}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {category.restricted ? (
          <span className="tag warn" style={{ borderColor: "#5a3a3a", color: "#d8a0a0" }}>
            <Icon name="lock" size={11} /> Área Restrita
          </span>
        ) : <span />}
        <span className="cat-arrow" style={{ color: "var(--gold)", display: "inline-flex" }}>
          <Icon name="arrow-right" size={20} />
        </span>
      </div>
      <style>{`
        .cat-card {
          display: block;
          width: 100%; text-align: left;
          padding: 28px 28px 24px;
          background: var(--surface);
          border: 1px solid var(--gold-line);
          transition: all 0.35s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .cat-card::before {
          content: "";
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0; transition: opacity 0.4s;
        }
        .cat-card:hover {
          border-color: var(--gold);
          box-shadow: 0 30px 60px -30px var(--gold-glow);
          transform: translateY(-4px);
        }
        .cat-card:hover::before { opacity: 1; }
        .cat-card:hover .cat-arrow { transform: translateX(6px); }
        .cat-arrow { transition: transform 0.3s; }
      `}</style>
    </button>
  );
}

// Cart-like drawer (Solicitações)
function CartDrawer({ open, items, onClose, onRemove, onClear, onWhatsApp }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 300,
      animation: "fadeIn 0.3s",
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } }
        @keyframes slideInR { from { transform: translateX(100%); } }
      `}</style>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} onClick={onClose} />
      <aside style={{
        position: "absolute", top: 0, right: 0, bottom: 0,
        width: "min(440px, 100vw)",
        background: "var(--bg-2)",
        borderLeft: "1px solid var(--gold-line)",
        display: "flex", flexDirection: "column",
        animation: "slideInR 0.4s ease",
      }}>
        <div style={{
          padding: "24px 28px",
          borderBottom: "1px solid var(--line)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
              Solicitação de orçamento
            </span>
            <h3 style={{ fontSize: 22, marginTop: 4 }}>Sua seleção</h3>
          </div>
          <button onClick={onClose} style={{ padding: 8, color: "var(--text-muted)" }}>
            <Icon name="x" size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div style={{
            flex: 1, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 18, padding: 32, textAlign: "center",
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 100,
              border: "1px solid var(--gold-line)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: "var(--gold)",
            }}>
              <Icon name="cart" size={26} stroke={1.2} />
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 14, maxWidth: 280 }}>
              Sua seleção está vazia.<br />
              Adicione produtos a partir do catálogo para gerar uma solicitação direta no WhatsApp.
            </p>
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
            {items.map(item => {
              const p = getProduct(item.productId);
              if (!p) return null;
              return (
                <div key={item.productId} style={{
                  padding: "20px 28px",
                  borderBottom: "1px solid var(--line)",
                  display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <div style={{ width: 60, height: 60, flexShrink: 0 }}>
                    <ProductImage product={p} size="sm" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>
                      {getCategory(p.category)?.title}
                    </span>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15, lineHeight: 1.3,
                      color: "var(--text)", margin: "4px 0",
                    }}>{p.name}</p>
                    <p style={{ fontSize: 11, color: "var(--text-dim)" }}>
                      Qtd: <strong style={{ color: "var(--text-muted)" }}>{item.qty}</strong>
                    </p>
                  </div>
                  <button onClick={() => onRemove(item.productId)} style={{ color: "var(--text-dim)", padding: 4 }}>
                    <Icon name="x" size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {items.length > 0 && (
          <div style={{ padding: "20px 28px", borderTop: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5 }}>
              <Icon name="info" size={12} color="var(--gold)" /> Produtos sob consulta. Confirme estoque e habilitação profissional pelo WhatsApp.
            </p>
            <button className="btn btn-whatsapp" onClick={onWhatsApp}>
              <Icon name="whatsapp" size={16} color="#fff" /> Enviar Solicitação no WhatsApp
            </button>
            <button className="btn btn-ghost" onClick={onClear} style={{ fontSize: 11 }}>
              Limpar seleção
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

// Generic page header banner
function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <section style={{
      paddingTop: 160, paddingBottom: 60,
      background: `linear-gradient(180deg, var(--hero-grad-2) 0%, var(--bg) 100%)`,
      borderBottom: "1px solid var(--gold-line)",
      position: "relative", overflow: "hidden",
    }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {eyebrow && <span className="eyebrow" style={{ marginBottom: 24 }}>{eyebrow}</span>}
        <h1 className="font-display hero-glow" style={{
          fontSize: "clamp(36px, 5vw, 64px)",
          maxWidth: 900, marginTop: 24,
        }}>{title}</h1>
        {subtitle && (
          <p style={{
            color: "var(--text-muted)",
            fontSize: 17, lineHeight: 1.6,
            maxWidth: 720, marginTop: 24,
          }}>{subtitle}</p>
        )}
        {children}
      </div>
      {/* subtle gold corner accents */}
      <div style={{
        position: "absolute", top: 100, right: 40,
        width: 80, height: 80,
        borderTop: "1px solid var(--gold)",
        borderRight: "1px solid var(--gold)",
        opacity: 0.3,
      }} />
    </section>
  );
}

// Hook: reveal on scroll
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

Object.assign(window, {
  ProductImage, ProductCard, CategoryCard, CartDrawer, PageHeader, useReveal,
});
