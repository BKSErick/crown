// Crown Medical — Main App / Router

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "black",
  "particles": true
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = React.useState("home");
  const [routeParam, setRouteParam] = React.useState(null); // categoryId or productId or anchor
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply palette to documentElement
  React.useEffect(() => {
    document.documentElement.setAttribute("data-palette", tweaks.palette);
  }, [tweaks.palette]);

  // Hash routing (simple)
  React.useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1).split("/");
      const r = h[0] || "home";
      const p = h[1] || null;
      if (["home", "catalog", "product", "about", "trainings", "contact"].includes(r)) {
        setRoute(r);
        setRouteParam(p);
        window.scrollTo(0, 0);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const navigate = (r, param) => {
    if (r === "home" && param) {
      // anchor scroll
      setRoute("home");
      setRouteParam(param);
      window.history.replaceState(null, "", `#home/${param}`);
      // anchor handled inside HomePage
    } else if (param) {
      window.location.hash = `${r}/${param}`;
      setRoute(r);
      setRouteParam(param);
    } else {
      window.location.hash = r;
      setRoute(r);
      setRouteParam(null);
    }
    window.scrollTo(0, 0);
  };

  const onView = (productId) => navigate("product", productId);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const onRequest = (product) => {
    // Quick request: open WhatsApp directly with product name
    window.open(waLink(`Olá! Tenho interesse no produto: ${product.name} (${product.brand}).`), "_blank");
  };

  const addToCart = (productId, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.productId === productId);
      if (existing) {
        return prev.map(i => i.productId === productId ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { productId, qty }];
    });
    showToast("Adicionado à solicitação ✓");
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(i => i.productId !== productId));
  };

  const clearCart = () => setCart([]);

  const cartWhatsApp = () => {
    const lines = cart.map(item => {
      const p = getProduct(item.productId);
      return `• ${p.name} (${p.brand}) — qtd ${item.qty}`;
    });
    const text = `Olá! Gostaria de solicitar orçamento para os seguintes produtos:\n\n${lines.join("\n")}`;
    window.open(waLink(text), "_blank");
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      <Header
        route={route}
        navigate={navigate}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        palette={tweaks.palette}
        onPalette={(v) => setTweak("palette", v)}
      />

      <main>
        {route === "home" && (
          <HomePage navigate={navigate} particles={tweaks.particles}
            onView={onView} onRequest={onRequest} scrollTo={routeParam} />
        )}
        {route === "catalog" && (
          <CatalogPage navigate={navigate} onView={onView} onRequest={onRequest}
            initialFilter={routeParam} />
        )}
        {route === "product" && (
          <ProductPage productId={routeParam} navigate={navigate}
            onView={onView} onRequest={onRequest} onAddToCart={addToCart} />
        )}
        {route === "about" && <AboutPage navigate={navigate} />}
        {route === "trainings" && <TrainingsPage navigate={navigate} />}
        {route === "contact" && <ContactPage navigate={navigate} />}
      </main>

      <Footer navigate={navigate} />
      <FloatingWhatsApp />
      <LGPDBanner />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onClear={clearCart}
        onWhatsApp={cartWhatsApp}
      />

      {/* Toast */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 100, right: 28,
          background: "var(--bg-2)", color: "var(--text)",
          border: "1px solid var(--gold)",
          padding: "14px 22px", fontSize: 13,
          zIndex: 400, animation: "toastIn 0.3s ease",
          boxShadow: "0 10px 40px -10px var(--gold-glow)",
        }}>
          <style>{`
            @keyframes toastIn {
              from { opacity: 0; transform: translateY(20px); }
            }
          `}</style>
          {toast}
        </div>
      )}

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Visual">
          <TweakRadio
            label="Paleta"
            value={tweaks.palette}
            onChange={(v) => setTweak("palette", v)}
            options={[
              { label: "Preto",    value: "black" },
              { label: "Branco",   value: "white" },
              { label: "Azul cl.", value: "blue" },
            ]}
          />
          <TweakToggle
            label="Partículas no hero"
            value={tweaks.particles}
            onChange={(v) => setTweak("particles", v)}
          />
        </TweakSection>
        <TweakSection title="Atalhos">
          <TweakButton onClick={() => navigate("home")}>Ir para Home</TweakButton>
          <TweakButton onClick={() => navigate("catalog")}>Ir para Catálogo</TweakButton>
          <TweakButton onClick={() => navigate("product", "p1")}>Ver produto exemplo</TweakButton>
          <TweakButton onClick={() => navigate("about")}>Sobre</TweakButton>
          <TweakButton onClick={() => navigate("trainings")}>Treinamentos</TweakButton>
          <TweakButton onClick={() => navigate("contact")}>Contato</TweakButton>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
