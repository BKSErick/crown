// Crown Medical — CATALOG page

function CatalogPage({ navigate, onView, onRequest, initialFilter }) {
  const [filter, setFilter] = React.useState(initialFilter || "all");
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("featured");
  const [showRestricted, setShowRestricted] = React.useState(true);
  useReveal();

  React.useEffect(() => {
    if (initialFilter) setFilter(initialFilter);
  }, [initialFilter]);

  const filtered = React.useMemo(() => {
    let list = [...PRODUCTS];
    if (filter !== "all") list = list.filter(p => p.category === filter);
    if (!showRestricted) list = list.filter(p => !p.restricted);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (getCategory(p.category)?.title || "").toLowerCase().includes(q)
      );
    }
    if (sort === "featured") list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "category") list.sort((a, b) => a.category.localeCompare(b.category));
    return list;
  }, [filter, search, sort, showRestricted]);

  return (
    <div className="page">
      <PageHeader
        eyebrow="✦ Catálogo profissional"
        title={<>Produtos selecionados para <em style={{ color: "var(--gold)" }}>estética avançada.</em></>}
        subtitle="Bioestimuladores, ácido hialurônico, enzimas, skincare profissional, peptídeos regenerativos e mais. Todos os produtos sob consulta — solicite orçamento direto no WhatsApp."
      />

      {/* Filters bar */}
      <div style={{
        background: "var(--bg-2)", borderBottom: "1px solid var(--gold-line)",
        position: "sticky", top: 73, zIndex: 50,
        backdropFilter: "blur(12px)",
      }}>
        <div className="container" style={{ padding: "20px 32px" }}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{
              position: "relative", flex: "1 1 320px", maxWidth: 480,
              display: "flex", alignItems: "center",
            }}>
              <Icon name="search" size={16} color="var(--text-dim)" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar por nome, marca ou categoria..."
                style={{
                  flex: 1, marginLeft: 12,
                  background: "transparent", border: "none", borderBottom: "1px solid var(--line)",
                  padding: "10px 0", color: "var(--text)",
                  fontFamily: "'Inter'", fontSize: 14,
                  outline: "none",
                }}
                onFocus={e => e.target.style.borderBottomColor = "var(--gold)"}
                onBlur={e => e.target.style.borderBottomColor = "var(--line)"}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }}>
                <input type="checkbox" checked={showRestricted} onChange={e => setShowRestricted(e.target.checked)}
                  style={{ accentColor: "var(--gold)" }} />
                Incluir produtos restritos
              </label>
              <select value={sort} onChange={e => setSort(e.target.value)}
                style={{
                  background: "transparent", color: "var(--text)",
                  border: "1px solid var(--line)",
                  padding: "8px 14px", fontSize: 12, fontFamily: "'Inter'",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  cursor: "pointer",
                }}>
                <option value="featured">Em destaque</option>
                <option value="name">A — Z</option>
                <option value="category">Por categoria</option>
              </select>
            </div>
          </div>
          {/* Category chips */}
          <div style={{
            marginTop: 18,
            display: "flex", gap: 10, flexWrap: "wrap",
            overflowX: "auto", paddingBottom: 4,
          }}>
            <Chip active={filter === "all"} onClick={() => setFilter("all")}>Todos ({PRODUCTS.filter(p => showRestricted || !p.restricted).length})</Chip>
            {CATEGORIES.map(c => {
              const count = PRODUCTS.filter(p => p.category === c.id && (showRestricted || !p.restricted)).length;
              return (
                <Chip key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)}>
                  {c.title} <span style={{ opacity: 0.5, marginLeft: 6 }}>{count}</span>
                </Chip>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <section style={{ padding: "60px 0 120px", background: "var(--bg)" }}>
        <div className="container">
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 32, flexWrap: "wrap", gap: 16,
          }}>
            <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
              <strong style={{ color: "var(--gold)", fontSize: 20, fontFamily: "'Playfair Display', serif" }}>
                {filtered.length}
              </strong> {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}
              {filter !== "all" && (
                <> em <em style={{ color: "var(--text)" }}>{getCategory(filter)?.title}</em></>
              )}
            </p>
            {(filter !== "all" || search) && (
              <button className="btn-ghost" style={{ color: "var(--gold)", fontSize: 11, padding: 0 }}
                onClick={() => { setFilter("all"); setSearch(""); }}>
                Limpar filtros ×
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div style={{
              padding: 80, textAlign: "center",
              border: "1px dashed var(--gold-line)",
              color: "var(--text-muted)",
            }}>
              <p>Nenhum produto encontrado. Tente ajustar os filtros.</p>
            </div>
          ) : (
            <div className="grid grid-3" style={{ gap: 24 }}>
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} onView={onView} onRequest={onRequest} />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div style={{
            marginTop: 80, padding: "48px clamp(28px,5vw,72px)",
            background: "var(--surface)", border: "1px solid var(--gold-line)",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24,
          }}>
            <div>
              <h3 className="font-display" style={{ fontSize: 26, marginBottom: 8 }}>
                Não encontrou o que precisa?
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, maxWidth: 480 }}>
                Trabalhamos com fornecedores adicionais sob demanda. Fale com nosso time técnico.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a className="btn btn-whatsapp" href={waLink("Olá! Gostaria de falar com a Crown Medical.")} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={16} color="#fff" /> WhatsApp
              </a>
              <button className="btn btn-outline" onClick={() => navigate("contact")}>Falar com Especialista</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: "8px 16px",
      fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'Inter'", fontWeight: 500,
      border: active ? "1px solid var(--gold)" : "1px solid var(--line)",
      background: active ? "var(--gold)" : "transparent",
      color: active ? "var(--on-gold)" : "var(--text-muted)",
      cursor: "pointer",
      transition: "all 0.2s",
      whiteSpace: "nowrap",
      borderRadius: 2,
    }}
      onMouseEnter={e => {
        if (!active) {
          e.target.style.borderColor = "var(--gold)";
          e.target.style.color = "var(--gold)";
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          e.target.style.borderColor = "var(--line)";
          e.target.style.color = "var(--text-muted)";
        }
      }}
    >{children}</button>
  );
}

window.CatalogPage = CatalogPage;
