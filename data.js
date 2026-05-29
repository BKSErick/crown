// Crown Medical — mock data

window.WA_NUMBER = "5531972020202"; // (31) 9 7202-0202
window.waLink = (text) =>
  `https://wa.me/${window.WA_NUMBER}?text=${encodeURIComponent(text || "")}`;

window.CATEGORIES = [
  { id: "bioestimuladores", title: "Bioestimuladores", icon: "syringe", desc: "Protocolos de estímulo de colágeno e rejuvenescimento", restricted: false },
  { id: "enzimas", title: "Enzimas", icon: "flask", desc: "Protocolos estéticos faciais e corporais", restricted: false },
  { id: "toxina", title: "Toxina Botulínica", icon: "vial", desc: "Para profissionais habilitados em procedimentos estéticos", restricted: true },
  { id: "fios", title: "Fios de Sustentação", icon: "thread", desc: "Técnicas de sustentação e remodelação avançada", restricted: true },
  { id: "acido", title: "Ácido Hialurônico", icon: "drop", desc: "Preenchedores para estruturação e harmonização", restricted: false },
  { id: "skincare", title: "Skincare Profissional", icon: "leaf", desc: "Protocolos clínicos e rotinas de manutenção", restricted: false },
  { id: "peptideos", title: "Peptídeos Regenerativos", icon: "molecule", desc: "Protocolos regenerativos e inovação técnica", restricted: false },
];

window.PRODUCTS = [
  // Bioestimuladores
  { id: "p1",  name: "Hydroxylapatita Premium 1.5ml", brand: "Crown Aesthetic Line", category: "bioestimuladores", presentation: "Seringa pré-preenchida 1.5ml", featured: true,  restricted: false, accent: "#c9a352" },
  { id: "p2",  name: "Poli-L-Láctico Profissional", brand: "Crown Aesthetic Line", category: "bioestimuladores", presentation: "Frasco-ampola liofilizado 367,5mg", featured: true, restricted: false, accent: "#b9974a" },
  { id: "p3",  name: "PCL Estimulador 2ml", brand: "Estética Pro", category: "bioestimuladores", presentation: "Seringa 2ml", featured: false, restricted: false, accent: "#a9863d" },

  // Enzimas
  { id: "p4",  name: "Complexo Enzimático Facial", brand: "Crown Clinical", category: "enzimas", presentation: "Kit com 5 frascos 5ml", featured: true, restricted: false, accent: "#9fae8c" },
  { id: "p5",  name: "Enzima Corporal Lipolítica", brand: "Crown Clinical", category: "enzimas", presentation: "Frasco 10ml", featured: false, restricted: false, accent: "#8fa07c" },
  { id: "p6",  name: "Hialuronidase Profissional 2000UI", brand: "Estética Pro", category: "enzimas", presentation: "Frasco-ampola liofilizado", featured: false, restricted: false, accent: "#7d8b6e" },

  // Toxina
  { id: "p7",  name: "Toxina Botulínica Tipo A 100UI", brand: "Linha Hospitalar", category: "toxina", presentation: "Frasco-ampola 100UI", featured: true, restricted: true, accent: "#d4c08a" },
  { id: "p8",  name: "Toxina Botulínica Tipo A 50UI", brand: "Linha Hospitalar", category: "toxina", presentation: "Frasco-ampola 50UI", featured: false, restricted: true, accent: "#c2af7c" },

  // Fios
  { id: "p9",  name: "Fio PDO Liso 29G x 38mm", brand: "Crown Sustentação", category: "fios", presentation: "Caixa com 10 unidades", featured: false, restricted: true, accent: "#8a7048" },
  { id: "p10", name: "Fio PDO Espiculado 21G", brand: "Crown Sustentação", category: "fios", presentation: "Caixa com 4 unidades", featured: true, restricted: true, accent: "#785f3d" },
  { id: "p11", name: "Fio de PLLA Estimulador", brand: "Estética Pro", category: "fios", presentation: "Kit profissional", featured: false, restricted: true, accent: "#695238" },

  // Ácido Hialurônico
  { id: "p12", name: "Ácido Hialurônico Volume 1ml", brand: "Crown Aesthetic Line", category: "acido", presentation: "Seringa pré-preenchida 1ml", featured: true, restricted: false, accent: "#a89a73" },
  { id: "p13", name: "Ácido Hialurônico Lips 0.55ml", brand: "Crown Aesthetic Line", category: "acido", presentation: "Seringa pré-preenchida 0.55ml", featured: false, restricted: false, accent: "#988b67" },
  { id: "p14", name: "Ácido Hialurônico Skinbooster 2ml", brand: "Estética Pro", category: "acido", presentation: "Seringa 2ml", featured: true, restricted: false, accent: "#867b5b" },

  // Skincare
  { id: "p15", name: "Sérum Antioxidante Vitamina C 15%", brand: "Crown Skin", category: "skincare", presentation: "Frasco 30ml", featured: false, restricted: false, accent: "#c8b97a" },
  { id: "p16", name: "Peeling de Ácidos Profissional", brand: "Crown Skin", category: "skincare", presentation: "Kit 4 etapas", featured: true, restricted: false, accent: "#b3a567" },
  { id: "p17", name: "Máscara Pós-Procedimento", brand: "Crown Skin", category: "skincare", presentation: "Caixa com 6 unidades", featured: false, restricted: false, accent: "#9c9058" },

  // Peptídeos
  { id: "p18", name: "Peptídeo Regenerador Cicatricial", brand: "Crown Bio", category: "peptideos", presentation: "Frasco 10ml", featured: true, restricted: false, accent: "#7a8a9a" },
  { id: "p19", name: "Exossomos Profissional Kit", brand: "Crown Bio", category: "peptideos", presentation: "Kit 5 aplicações", featured: false, restricted: false, accent: "#6b7c8b" },
  { id: "p20", name: "Peptídeo Anti-Idade Microbiótico", brand: "Crown Bio", category: "peptideos", presentation: "Frasco 15ml", featured: false, restricted: false, accent: "#5d6d7c" },
];

// helper getters
window.getProduct = (id) => window.PRODUCTS.find(p => p.id === id);
window.getCategory = (id) => window.CATEGORIES.find(c => c.id === id);
window.featuredProducts = () => window.PRODUCTS.filter(p => p.featured);
