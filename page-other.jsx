// Crown Medical — ABOUT, TRAININGS, CONTACT, LOGIN pages

/* =========================================================
   ABOUT
   ========================================================= */
function AboutPage({ navigate }) {
  useReveal();
  const values = [
    { icon: "shield-check", title: "Procedência", text: "Produtos com origem rastreável e cadeia de fornecimento auditada. Documentação técnica completa." },
    { icon: "target", title: "Suporte Técnico", text: "Orientação especializada e relacionamento próximo com cada profissional e clínica parceira." },
    { icon: "bolt", title: "Agilidade", text: "Logística pensada para a rotina clínica — sem ruído, sem atraso, sem surpresa." },
  ];
  const milestones = [
    { year: "2024", text: "Fundação da Crown Medical" },
    { year: "2024", text: "Estruturação do portfólio profissional" },
    { year: "2025", text: "Início das operações comerciais e academia" },
    { year: "Hoje", text: "Crescimento contínuo com foco em clínicas parceiras" },
  ];
  return (
    <div className="page">
      <PageHeader
        eyebrow="✦ Sobre nós"
        title={<>Crown Medical — <em style={{ color: "var(--gold)" }}>autoridade técnica e relacionamento próximo.</em></>}
        subtitle="Distribuidora de produtos profissionais para estética avançada, fundada para servir clínicas e profissionais com procedência, suporte técnico e agilidade."
      />

      {/* Manifesto */}
      <section className="section reveal" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }} className="about-grid">
            <div>
              <span className="eyebrow">✦ Manifesto</span>
              <h2 className="font-display" style={{
                fontSize: "clamp(32px, 4.5vw, 56px)", marginTop: 24, textWrap: "balance", lineHeight: 1.1,
              }}>
                Nascemos para servir <em style={{ color: "var(--gold)" }}>quem cuida.</em>
              </h2>
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 24 }}>
                A Crown Medical nasceu para atender <strong style={{ color: "var(--text)" }}>clínicas, profissionais da estética e da saúde</strong> que buscam produtos com procedência, suporte técnico e agilidade no atendimento.
              </p>
              <p style={{ marginBottom: 24 }}>
                Atuamos com distribuição de produtos voltados para <em>estética avançada, harmonização, skincare profissional e protocolos regenerativos</em>, sempre priorizando segurança, conhecimento técnico e relacionamento próximo com o profissional.
              </p>
              <p>
                Nosso compromisso é oferecer uma <strong style={{ color: "var(--gold)" }}>experiência de compra confiável</strong> para profissionais que precisam de produtos de qualidade, orientação adequada e atendimento ágil.
              </p>
              <div style={{ marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--gold-line)", display: "flex", gap: 24, alignItems: "center" }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 100,
                  background: "linear-gradient(135deg, var(--gold) 0%, #8a6f30 100%)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "var(--on-gold)", fontFamily: "'Playfair Display', serif", fontSize: 22,
                }}>CM</div>
                <div>
                  <p style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif", fontSize: 18 }}>Equipe Crown Medical</p>
                  <p style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.08em" }}>Distribuição profissional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "60px 0", background: "var(--section-alt)", borderTop: "1px solid var(--gold-line)", borderBottom: "1px solid var(--gold-line)" }} className="reveal">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="stats-grid">
            {[
              { num: "07", label: "Categorias profissionais" },
              { num: "20+", label: "Produtos no portfólio" },
              { num: "100%", label: "Foco em profissionais" },
              { num: "BR", label: "Entrega em todo o país" },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: "center", padding: 24,
                borderRight: i < 3 ? "1px solid var(--gold-line)" : "none",
              }}>
                <p className="font-display" style={{
                  fontSize: "clamp(40px, 6vw, 72px)", color: "var(--gold)",
                }}>{s.num}</p>
                <p style={{
                  fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--text-muted)", marginTop: 8,
                }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 720px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .stats-grid > div:nth-child(2) { border-right: none !important; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section className="section reveal" style={{ background: "var(--bg)" }}>
        <div className="container">
          <SectionHeader
            eyebrow="✦ Valores"
            title="Os pilares da Crown Medical"
            subtitle="Três compromissos que orientam cada decisão — do portfólio à logística, do atendimento ao pós-venda."
          />
          <div className="grid grid-3" style={{ marginTop: 60, gap: 24 }}>
            {values.map((v, i) => (
              <div key={v.title} style={{
                padding: 36,
                border: "1px solid var(--gold-line)",
                background: "var(--surface)",
                position: "relative",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--gold-line)"}
              >
                <span className="numeral" style={{ position: "absolute", top: 24, right: 28, fontSize: 18 }}>0{i + 1}</span>
                <Icon name={v.icon} size={36} color="var(--gold)" stroke={1.1} />
                <h3 className="font-display" style={{ fontSize: 26, marginTop: 28, marginBottom: 14 }}>
                  {v.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-sm reveal" style={{ background: "var(--section-alt)" }}>
        <div className="container">
          <SectionHeader eyebrow="✦ Trajetória" title="Nossa caminhada" align="center" />
          <div style={{ marginTop: 60, maxWidth: 780, marginLeft: "auto", marginRight: "auto", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 12, width: 1, background: "var(--gold-line)" }} />
            {milestones.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 32, paddingBottom: 36, position: "relative" }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 100,
                  background: i === milestones.length - 1 ? "var(--gold)" : "var(--bg)",
                  border: "1px solid var(--gold)",
                  flexShrink: 0, position: "relative", zIndex: 2,
                  marginTop: 8,
                }} />
                <div>
                  <p className="font-display" style={{ fontSize: 20, color: "var(--gold)" }}>{m.year}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 4 }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "var(--bg)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 24 }}>
            Vamos conversar?
          </h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-whatsapp" href={waLink("Olá! Gostaria de falar com a Crown Medical.")} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={16} color="#fff" /> WhatsApp
            </a>
            <button className="btn btn-outline" onClick={() => navigate("catalog")}>Ver Produtos</button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   TRAININGS
   ========================================================= */
function TrainingsPage({ navigate }) {
  const [form, setForm] = React.useState({ name: "", whatsapp: "", specialty: "", city: "" });
  const [submitted, setSubmitted] = React.useState(false);
  useReveal();
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp) return;
    const lines = [
      "Olá! Tenho interesse nos treinamentos da Crown Medical.",
      "",
      `Nome: ${form.name}`,
      `WhatsApp: ${form.whatsapp}`,
    ];
    if (form.specialty) lines.push(`Especialidade: ${form.specialty}`);
    if (form.city) lines.push(`Cidade: ${form.city}`);
    window.open(waLink(lines.join("\n")), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="page">
      <PageHeader
        eyebrow="✦ Academia Crown Medical"
        title={<>Aprimore seu protocolo. <em style={{ color: "var(--gold)" }}>Atue com mais segurança.</em></>}
        subtitle="Treinamentos, masterclasses e suporte técnico para profissionais habilitados que desejam aprimorar protocolos, conhecer melhor os produtos e elevar a atuação clínica."
      >
        <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a className="btn btn-whatsapp" href={waLink("Olá! Quero saber dos próximos treinamentos da Crown Medical.")} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={16} color="#fff" /> Próximos Treinamentos
          </a>
          <button className="btn btn-outline" onClick={() => document.getElementById("train-form")?.scrollIntoView({ behavior: "smooth" })}>
            Demonstrar interesse
          </button>
        </div>
      </PageHeader>

      {/* Upcoming */}
      <section className="section reveal" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
            <div>
              <span className="eyebrow">✦ Próximas turmas</span>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", marginTop: 16 }}>
                Em breve
              </h2>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 13, maxWidth: 380 }}>
              Estamos estruturando a próxima grade de treinamentos. Cadastre seu interesse e receba a programação em primeira mão.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: 20 }}>
            {[
              { title: "Bioestimuladores na prática", level: "Avançado", duration: "8h", spots: "Lista de espera" },
              { title: "Protocolos com Ácido Hialurônico", level: "Intermediário", duration: "6h", spots: "Lista de espera" },
              { title: "Skincare profissional & rotinas", level: "Iniciante", duration: "4h", spots: "Em breve" },
            ].map((t, i) => (
              <div key={i} style={{
                padding: 32,
                background: "var(--surface)",
                border: "1px solid var(--gold-line)",
                position: "relative",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--gold-line)"}
              >
                <span className="numeral" style={{ position: "absolute", top: 20, right: 24, fontSize: 16 }}>0{i + 1}</span>
                <Icon name="graduation" size={32} color="var(--gold)" stroke={1.1} />
                <h3 className="font-display" style={{ fontSize: 22, marginTop: 24, marginBottom: 16, lineHeight: 1.25 }}>
                  {t.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                  <Spec label="Nível" value={t.level} />
                  <Spec label="Carga horária" value={t.duration} />
                  <Spec label="Inscrições" value={t.spots} />
                </div>
                <a className="btn btn-outline btn-sm" style={{ width: "100%" }}
                  href={waLink(`Olá! Tenho interesse no treinamento: ${t.title}.`)}
                  target="_blank" rel="noreferrer">
                  Reservar interesse
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="section-sm reveal" style={{ background: "var(--section-alt)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60 }} className="learn-grid">
            <div>
              <span className="eyebrow">✦ Metodologia</span>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", marginTop: 16, textWrap: "balance" }}>
                Conteúdo técnico, prática orientada.
              </h2>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Fundamentação teórica baseada em literatura técnica",
                "Demonstração prática dos protocolos",
                "Suporte pós-treinamento via canal direto",
                "Material técnico digital permanente",
                "Certificação Crown Medical Academy",
              ].map((item, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
                  padding: "18px 0", borderBottom: "1px solid var(--line)",
                }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 100,
                    border: "1px solid var(--gold)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    color: "var(--gold)", flexShrink: 0, marginTop: 2,
                  }}>
                    <Icon name="check" size={14} color="var(--gold)" />
                  </span>
                  <span style={{ color: "var(--text)", fontSize: 15, lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <style>{`
          @media (max-width: 960px) {
            .learn-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          }
        `}</style>
      </section>

      {/* Form */}
      <section id="train-form" className="section reveal" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{
            maxWidth: 760, margin: "0 auto",
            padding: "clamp(32px, 5vw, 72px)",
            background: "var(--surface)",
            border: "1px solid var(--gold-line)",
            position: "relative",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
            {submitted ? (
              <div style={{ textAlign: "center", padding: 40 }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 100, margin: "0 auto 24px",
                  background: "var(--gold)", display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name="check" size={28} color="var(--on-gold)" />
                </div>
                <h3 className="font-display" style={{ fontSize: 28, marginBottom: 12 }}>Interesse registrado!</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 24, maxWidth: 420, margin: "0 auto 24px" }}>
                  Em breve entraremos em contato pelo WhatsApp com a programação dos próximos treinamentos.
                </p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Enviar outro
                </button>
              </div>
            ) : (
              <>
                <span className="eyebrow">✦ Lista de interesse</span>
                <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: 16, marginBottom: 12 }}>
                  Receba a programação em primeira mão
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 36, lineHeight: 1.6 }}>
                  Preencha o formulário abaixo e entraremos em contato pelo WhatsApp assim que abrirmos as próximas turmas.
                </p>
                <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-grid">
                  <div className="field">
                    <label>Nome completo *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>WhatsApp *</label>
                    <input required value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} placeholder="(00) 0 0000-0000" />
                  </div>
                  <div className="field">
                    <label>Especialidade</label>
                    <input value={form.specialty} onChange={e => setForm({ ...form, specialty: e.target.value })} placeholder="Ex: Médico, Biomédico, Esteticista..." />
                  </div>
                  <div className="field">
                    <label>Cidade</label>
                    <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-gold btn-lg" style={{ gridColumn: "1 / -1" }}>
                    Cadastrar interesse →
                  </button>
                </form>
                <p style={{ marginTop: 20, fontSize: 11, color: "var(--text-dim)", lineHeight: 1.6 }}>
                  Treinamentos destinados a profissionais habilitados. Comprovação técnica pode ser solicitada.
                </p>
              </>
            )}
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .form-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", paddingBottom: 6,
      borderBottom: "1px dotted var(--line)",
      fontSize: 12,
    }}>
      <span style={{ color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
      <span style={{ color: "var(--text)" }}>{value}</span>
    </div>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */
function ContactPage({ navigate }) {
  const [form, setForm] = React.useState({ name: "", email: "", whatsapp: "", type: "Profissional", message: "" });
  const [sent, setSent] = React.useState(false);
  useReveal();
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    const lines = [
      "Olá! Vim pelo site da Crown Medical.",
      "",
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
    ];
    if (form.whatsapp) lines.push(`WhatsApp: ${form.whatsapp}`);
    if (form.type) lines.push(`Tipo: ${form.type}`);
    if (form.message) lines.push("", "Mensagem:", form.message);
    window.open(waLink(lines.join("\n")), "_blank");
    setSent(true);
  };

  return (
    <div className="page">
      <PageHeader
        eyebrow="✦ Contato"
        title={<>Fale com a <em style={{ color: "var(--gold)" }}>Crown Medical.</em></>}
        subtitle="Atendimento especializado para profissionais e empresas habilitadas da área da saúde e estética."
      />

      <section className="section reveal" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60 }} className="contact-grid">

            {/* Form */}
            <div style={{
              padding: "clamp(28px,4vw,52px)",
              background: "var(--surface)",
              border: "1px solid var(--gold-line)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
              {sent ? (
                <div style={{ padding: 40, textAlign: "center" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: 100, margin: "0 auto 24px",
                    background: "var(--gold)", display: "inline-flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon name="check" size={30} color="var(--on-gold)" />
                  </div>
                  <h3 className="font-display" style={{ fontSize: 28, marginBottom: 12 }}>Mensagem enviada!</h3>
                  <p style={{ color: "var(--text-muted)", maxWidth: 420, margin: "0 auto" }}>
                    Nosso time entrará em contato em breve. Para atendimento imediato, fale conosco pelo WhatsApp.
                  </p>
                  <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center" }}>
                    <a className="btn btn-whatsapp" href={waLink("Olá! Gostaria de falar com a Crown Medical.")} target="_blank" rel="noreferrer">
                      <Icon name="whatsapp" size={16} color="#fff" /> WhatsApp
                    </a>
                    <button className="btn btn-outline" onClick={() => setSent(false)}>Enviar outra</button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="eyebrow">✦ Formulário</span>
                  <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: 16, marginBottom: 28 }}>
                    Como podemos ajudar?
                  </h2>
                  <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-grid">
                    <div className="field">
                      <label>Nome *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="field">
                      <label>E-mail *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="field">
                      <label>WhatsApp</label>
                      <input value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} placeholder="(00) 0 0000-0000" />
                    </div>
                    <div className="field">
                      <label>Tipo</label>
                      <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                        <option value="Profissional">Profissional</option>
                        <option value="Empresa / Clínica">Empresa / Clínica</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                    <div className="field" style={{ gridColumn: "1 / -1" }}>
                      <label>Mensagem</label>
                      <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Conte como podemos ajudar..." />
                    </div>
                    <button type="submit" className="btn btn-gold btn-lg" style={{ gridColumn: "1 / -1" }}>
                      Enviar Mensagem →
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Info */}
            <div>
              <span className="eyebrow">✦ Canais</span>
              <h3 className="font-display" style={{ fontSize: "clamp(24px, 3vw, 34px)", marginTop: 16, marginBottom: 36 }}>
                Atendimento direto
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <ContactRow icon="whatsapp" label="WhatsApp" value="(31) 9 7202-0202" href={waLink("Olá! Gostaria de falar com a Crown Medical.")} />
                <ContactRow icon="mail" label="E-mail" value="crownmedbr@gmail.com" href="mailto:crownmedbr@gmail.com" />
                <ContactRow icon="instagram" label="Instagram" value="@crownmed" href="https://instagram.com/crownmed" />
                <ContactRow icon="map-pin" label="Localização" value="Bairro Carneirinhos" />
              </div>

              <div style={{
                marginTop: 40, padding: 28,
                background: "var(--surface-2)",
                border: "1px solid var(--gold-line)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <Icon name="phone" size={20} color="var(--gold)" />
                  <h4 style={{ fontFamily: "'Inter'", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
                    Horário de atendimento
                  </h4>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8 }}>
                  Segunda a sexta<br />
                  <strong style={{ color: "var(--text)" }}>09h00 — 18h00</strong>
                </p>
              </div>

              {/* Map placeholder */}
              <div style={{
                marginTop: 24, aspectRatio: "16/10",
                background: `
                  linear-gradient(135deg, rgba(11,31,51,0.95) 0%, rgba(5,5,5,0.95) 100%),
                  repeating-linear-gradient(0deg, transparent 0 30px, rgba(216,180,90,0.06) 30px 31px),
                  repeating-linear-gradient(90deg, transparent 0 30px, rgba(216,180,90,0.06) 30px 31px)
                `,
                border: "1px solid var(--gold-line)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}>
                  <Icon name="map-pin" size={32} color="var(--gold)" />
                  <p className="font-display" style={{ fontSize: 18, marginTop: 12 }}>Bairro Carneirinhos</p>
                  <p style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Atendimento agendado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 960px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
          @media (max-width: 600px) {
            .form-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}

function ContactRow({ icon, label, value, href }) {
  const inner = (
    <div style={{
      display: "flex", alignItems: "center", gap: 18,
      padding: "18px 20px",
      border: "1px solid var(--gold-line)",
      transition: "all 0.25s",
      cursor: href ? "pointer" : "default",
    }}
      onMouseEnter={e => { if (href) e.currentTarget.style.borderColor = "var(--gold)"; }}
      onMouseLeave={e => { if (href) e.currentTarget.style.borderColor = "var(--gold-line)"; }}
    >
      <span style={{
        width: 40, height: 40, borderRadius: 100,
        background: "var(--surface)",
        border: "1px solid var(--gold-line)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--gold)", flexShrink: 0,
      }}>
        <Icon name={icon} size={18} color="var(--gold)" />
      </span>
      <div>
        <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-dim)" }}>{label}</p>
        <p style={{ color: "var(--text)", fontSize: 15, marginTop: 4 }}>{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

Object.assign(window, { AboutPage, TrainingsPage, ContactPage });
