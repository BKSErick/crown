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
  { id: "p1",  name: "Hydroxylapatita Premium 1.5ml", brand: "Crown Aesthetic Line", category: "bioestimuladores", presentation: "Seringa pré-preenchida 1.5ml", desc: "Bioestimulador de colágeno à base de hidroxiapatita de cálcio para firmeza e sustentação da pele.", featured: true,  restricted: false, accent: "#c9a352" },
  { id: "p2",  name: "Poli-L-Láctico Profissional", brand: "Crown Aesthetic Line", category: "bioestimuladores", presentation: "Frasco-ampola liofilizado 367,5mg", desc: "Estimulador de colágeno de ação progressiva para restaurar volume e qualidade da pele.", featured: true, restricted: false, accent: "#b9974a" },
  { id: "p3",  name: "PCL Estimulador 2ml", brand: "Estética Pro", category: "bioestimuladores", presentation: "Seringa 2ml", desc: "Bioestimulador de policaprolactona para efeito lifting prolongado e estímulo de colágeno.", featured: false, restricted: false, accent: "#a9863d" },

  // Enzimas
  { id: "p4",  name: "Complexo Enzimático Facial", brand: "Crown Clinical", category: "enzimas", presentation: "Kit com 5 frascos 5ml", desc: "Kit enzimático para protocolos faciais de renovação e melhora da textura da pele.", featured: true, restricted: false, accent: "#9fae8c" },
  { id: "p5",  name: "Enzima Corporal Lipolítica", brand: "Crown Clinical", category: "enzimas", presentation: "Frasco 10ml", desc: "Enzima para protocolos corporais de redução de gordura localizada e contorno.", featured: false, restricted: false, accent: "#8fa07c" },
  { id: "p6",  name: "Hialuronidase Profissional 2000UI", brand: "Estética Pro", category: "enzimas", presentation: "Frasco-ampola liofilizado", desc: "Enzima para dissolução de ácido hialurônico e correção de preenchimentos.", featured: false, restricted: false, accent: "#7d8b6e" },

  // Toxina
  { id: "p7",  name: "Toxina Botulínica Tipo A 100UI", brand: "Linha Hospitalar", category: "toxina", presentation: "Frasco-ampola 100UI", desc: "Toxina tipo A para relaxamento muscular e suavização de rugas dinâmicas e linhas de expressão.", featured: true, restricted: true, accent: "#d4c08a" },
  { id: "p8",  name: "Toxina Botulínica Tipo A 50UI", brand: "Linha Hospitalar", category: "toxina", presentation: "Frasco-ampola 50UI", desc: "Toxina tipo A em apresentação 50UI para tratamentos faciais pontuais com precisão.", featured: false, restricted: true, accent: "#c2af7c" },

  // Fios
  { id: "p9",  name: "Fio PDO Liso 29G x 38mm", brand: "Crown Sustentação", category: "fios", presentation: "Caixa com 10 unidades", desc: "Fio PDO liso para bioestimulação e melhora da firmeza cutânea.", featured: false, restricted: true, accent: "#8a7048" },
  { id: "p10", name: "Fio PDO Espiculado 21G", brand: "Crown Sustentação", category: "fios", presentation: "Caixa com 4 unidades", desc: "Fio PDO espiculado para efeito lifting e sustentação imediata dos tecidos.", featured: true, restricted: true, accent: "#785f3d" },
  { id: "p11", name: "Fio de PLLA Estimulador", brand: "Estética Pro", category: "fios", presentation: "Kit profissional", desc: "Fio de PLLA para estímulo de colágeno e revitalização progressiva da pele.", featured: false, restricted: true, accent: "#695238" },

  // Ácido Hialurônico
  { id: "p12", name: "Ácido Hialurônico Volume 1ml", brand: "Crown Aesthetic Line", category: "acido", presentation: "Seringa pré-preenchida 1ml", desc: "Preenchedor de alta sustentação para reposição de volume facial e contorno.", featured: true, restricted: false, accent: "#a89a73" },
  { id: "p13", name: "Ácido Hialurônico Lips 0.55ml", brand: "Crown Aesthetic Line", category: "acido", presentation: "Seringa pré-preenchida 0.55ml", desc: "Preenchedor específico para lábios, com naturalidade e definição do contorno labial.", featured: false, restricted: false, accent: "#988b67" },
  { id: "p14", name: "Ácido Hialurônico Skinbooster 2ml", brand: "Estética Pro", category: "acido", presentation: "Seringa 2ml", desc: "Skinbooster para hidratação profunda, viço e melhora da qualidade da pele.", featured: true, restricted: false, accent: "#867b5b" },

  // Skincare
  { id: "p15", name: "Sérum Antioxidante Vitamina C 15%", brand: "Crown Skin", category: "skincare", presentation: "Frasco 30ml", desc: "Sérum antioxidante de uso profissional para luminosidade e proteção contra radicais livres.", featured: false, restricted: false, accent: "#c8b97a" },
  { id: "p16", name: "Peeling de Ácidos Profissional", brand: "Crown Skin", category: "skincare", presentation: "Kit 4 etapas", desc: "Kit de peeling em etapas para renovação celular e uniformização do tom da pele.", featured: true, restricted: false, accent: "#b3a567" },
  { id: "p17", name: "Máscara Pós-Procedimento", brand: "Crown Skin", category: "skincare", presentation: "Caixa com 6 unidades", desc: "Máscara calmante para recuperação da pele após procedimentos estéticos.", featured: false, restricted: false, accent: "#9c9058" },

  // Peptídeos
  { id: "p18", name: "Peptídeo Regenerador Cicatricial", brand: "Crown Bio", category: "peptideos", presentation: "Frasco 10ml", desc: "Peptídeo regenerador para cicatrização e recuperação tecidual em pós-procedimento.", featured: true, restricted: false, accent: "#7a8a9a" },
  { id: "p19", name: "Exossomos Profissional Kit", brand: "Crown Bio", category: "peptideos", presentation: "Kit 5 aplicações", desc: "Kit de exossomos para regeneração celular avançada e revitalização da pele.", featured: false, restricted: false, accent: "#6b7c8b" },
  { id: "p20", name: "Peptídeo Anti-Idade Microbiótico", brand: "Crown Bio", category: "peptideos", presentation: "Frasco 15ml", desc: "Peptídeo anti-idade para firmeza, viço e equilíbrio da barreira cutânea.", featured: false, restricted: false, accent: "#5d6d7c" },
];

// helper getters
window.getProduct = (id) => window.PRODUCTS.find(p => p.id === id);
window.getCategory = (id) => window.CATEGORIES.find(c => c.id === id);
window.featuredProducts = () => window.PRODUCTS.filter(p => p.featured);
