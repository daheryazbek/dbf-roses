import type { Locale } from "@/lib/i18n";

export type SiteContent = {
  brand: {
    companyName: string;
    brandName: string;
    logoText: string;
  };
  navigation: {
    home: string;
    about: string;
    products: string;
    exportLogistics: string;
    contact: string;
    languageToggle: string;
    menu: string;
  };
  common: {
    requestAvailability: string;
    viewProducts: string;
    contactUs: string;
    learnMore: string;
  };
  home: {
    hero: {
      headline: string;
      subheadline: string;
      primaryCta: string;
      secondaryCta: string;
    };
    trust: {
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    aboutPreview: {
      title: string;
      text: string;
    };
    productsPreview: {
      title: string;
      text: string;
      items: string[];
    };
    logisticsPreview: {
      title: string;
      text: string;
    };
    contactCta: {
      title: string;
      text: string;
      button: string;
    };
  };
  aboutPage: {
    heroTitle: string;
    heroText: string;
    sections: Array<{ title: string; text: string }>;
  };
  productsPage: {
    heroTitle: string;
    heroText: string;
    categories: Array<{ title: string; text: string }>;
    lengthsTitle: string;
    lengths: string;
    weeklyNote: string;
    programsNote: string;
  };
  exportPage: {
    heroTitle: string;
    heroText: string;
    points: Array<{ title: string; text: string }>;
    audienceTitle: string;
    audienceText: string;
  };
  contactPage: {
    heroTitle: string;
    heroText: string;
    detailsTitle: string;
    details: {
      companyNameLabel: string;
      companyName: string;
      brandLabel: string;
      brandName: string;
      salesEmailLabel: string;
      salesEmail: string;
      accountingEmailLabel: string;
      accountingEmail: string;
      rucLabel: string;
      ruc: string;
      addressLabel: string;
      address: string;
    };
    form: {
      title: string;
      name: string;
      company: string;
      email: string;
      country: string;
      message: string;
      submit: string;
      success: string;
    };
    whatsappLabel: string;
  };
  footer: {
    city: string;
    descriptor: string;
    salesLabel: string;
    accountingLabel: string;
    focusLabel: string;
    copyright: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    pages: {
      home: { title: string; description: string };
      about: { title: string; description: string };
      products: { title: string; description: string };
      exportLogistics: { title: string; description: string };
      contact: { title: string; description: string };
    };
  };
};

const content: Record<Locale, SiteContent> = {
  en: {
    brand: {
      companyName: "DBF GLOBAL ROSES S.A.S.",
      brandName: "DBF ROSES",
      logoText: "DBF ROSES",
    },
    navigation: {
      home: "Home",
      about: "About Us",
      products: "Products",
      exportLogistics: "Export / Logistics",
      contact: "Contact",
      languageToggle: "Español",
      menu: "Menu",
    },
    common: {
      requestAvailability: "Request Availability",
      viewProducts: "View Products",
      contactUs: "Contact Us",
      learnMore: "Learn More",
    },
    home: {
      hero: {
        headline: "Premium Ecuadorian Roses for International Markets",
        subheadline:
          "Standard and premium roses with reliable sourcing, quality control, and export coordination from Ecuador.",
        primaryCta: "Request Availability",
        secondaryCta: "View Products",
      },
      trust: {
        title: "A focused B2B sourcing and export partner",
        items: [
          {
            title: "Ecuadorian Origin",
            description:
              "Commercial sourcing from Ecuador's top rose-growing regions through selected partner farms.",
          },
          {
            title: "Standard & Premium Roses",
            description:
              "Programs designed for buyers who need reliable quality in standard and premium categories.",
          },
          {
            title: "Export Coordination",
            description:
              "Order management and shipment coordination from origin to destination requirements.",
          },
          {
            title: "Reliable Weekly Supply",
            description:
              "Consistent communication on weekly availability, production windows, and market timing.",
          },
        ],
      },
      aboutPreview: {
        title: "About DBF ROSES",
        text:
          "DBF ROSES is a commercial flower export company based in Ecuador. We build long-term B2B relationships with importers, wholesalers, and floral buyers who value consistency, transparency, and operational follow-through.",
      },
      productsPreview: {
        title: "Product Focus",
        text:
          "Our offer is designed for professional buyers, with flexible sourcing and weekly planning.",
        items: [
          "Standard Roses",
          "Premium Roses",
          "Spray Roses (optional)",
          "Custom sourcing on request",
        ],
      },
      logisticsPreview: {
        title: "Export & Logistics Support",
        text:
          "Depending on your operation model, we can coordinate FOB, CIF, or delivered solutions with clear order follow-up and quality checkpoints.",
      },
      contactCta: {
        title: "Plan your next weekly program with DBF ROSES",
        text:
          "Share your market and preferred specifications. We will respond with current availability and coordination options.",
        button: "Contact Our Team",
      },
    },
    aboutPage: {
      heroTitle: "About Us",
      heroText:
        "We are a flower commercializer and export company based in Ecuador, focused on serious B2B supply relationships in international markets.",
      sections: [
        {
          title: "Who We Are",
          text:
            "DBF GLOBAL ROSES S.A.S., operating commercially as DBF ROSES, is dedicated to sourcing and commercial trading of Ecuadorian roses for international buyers.",
        },
        {
          title: "How We Work",
          text:
            "We collaborate with selected farms and coordinate sourcing according to quality targets, stem lengths, and market needs. Our role is to align supply, standards, and execution.",
        },
        {
          title: "What We Prioritize",
          text:
            "Consistency, quality control, compliance, and responsive customer service. We understand that professional buyers require predictable operations and clear communication.",
        },
        {
          title: "Markets We Serve",
          text:
            "We support importers, wholesalers, and floral buyers in markets including the United States, Uruguay, Puerto Rico, and Mexico.",
        },
      ],
    },
    productsPage: {
      heroTitle: "Products",
      heroText:
        "Commercial rose programs for buyers looking for stable supply and clear quality positioning.",
      categories: [
        {
          title: "Standard Roses",
          text:
            "Balanced quality and value for wholesale and distribution channels with recurring demand.",
        },
        {
          title: "Premium Roses",
          text:
            "Selected premium quality for clients requiring enhanced presentation, stem strength, and consistency.",
        },
      ],
      lengthsTitle: "Available Stem Lengths",
      lengths: "50 / 60 / 70 / 80 / 90 cm",
      weeklyNote:
        "Weekly availability changes based on production cycles and market demand. We provide updated offers on schedule.",
      programsNote:
        "Custom programs and standing orders can be structured according to your volume, destination, and weekly requirements.",
    },
    exportPage: {
      heroTitle: "Export / Logistics",
      heroText:
        "Operational coordination from Ecuador for buyers who need dependable execution and visibility.",
      points: [
        {
          title: "Export Coordination from Ecuador",
          text:
            "We coordinate order timelines, documentation flow, and shipment planning from origin.",
        },
        {
          title: "Optional Logistics Support",
          text:
            "According to your purchasing structure, we can support FOB, CIF, or delivered coordination.",
        },
        {
          title: "Quality Control",
          text:
            "We monitor specifications and quality checkpoints before dispatch to reduce avoidable issues.",
        },
        {
          title: "Order Follow-up",
          text:
            "Our team maintains communication on order status, shipment progress, and delivery coordination.",
        },
      ],
      audienceTitle: "Designed for Professional Buyers",
      audienceText:
        "This service model is built for importers, wholesalers, and floral buyers who need a commercial sourcing and export partner, not a retail flower seller.",
    },
    contactPage: {
      heroTitle: "Contact",
      heroText:
        "Send your requirements and we will respond with current availability and export coordination options.",
      detailsTitle: "Company Information",
      details: {
        companyNameLabel: "Company",
        companyName: "DBF GLOBAL ROSES S.A.S.",
        brandLabel: "Brand",
        brandName: "DBF ROSES",
        salesEmailLabel: "Sales",
        salesEmail: "ventas@dbfroses.com",
        accountingEmailLabel: "Accounting",
        accountingEmail: "contabilidad@dbfroses.com",
        rucLabel: "RUC",
        ruc: "1793234182001",
        addressLabel: "Address",
        address: "Los Pinos y Alfredo Donoso, Tumbaco - Quito, Ecuador",
      },
      form: {
        title: "Send a Business Inquiry",
        name: "Name",
        company: "Company",
        email: "Email",
        country: "Country",
        message: "Message",
        submit: "Send Inquiry",
        success:
          "Thank you. Your message has been captured on the front-end. Connect this form to your CRM or email service for production submissions.",
      },
      whatsappLabel: "WhatsApp (placeholder)",
    },
    footer: {
      city: "Quito, Ecuador",
      descriptor: "Ecuadorian Roses | Standard & Premium",
      salesLabel: "Sales",
      accountingLabel: "Accounting",
      focusLabel: "Focus",
      copyright: "All rights reserved.",
    },
    seo: {
      defaultTitle: "DBF ROSES | Ecuadorian Rose Export Partner",
      defaultDescription:
        "DBF ROSES is a B2B exporter and trader of Ecuadorian standard and premium roses for international buyers.",
      pages: {
        home: {
          title: "DBF ROSES | Premium Ecuadorian Roses for International Markets",
          description:
            "B2B sourcing and export coordination of Ecuadorian standard and premium roses for importers, wholesalers, and floral buyers.",
        },
        about: {
          title: "About Us | DBF ROSES",
          description:
            "Learn about DBF ROSES, an Ecuador-based flower commercializer and export company serving international B2B buyers.",
        },
        products: {
          title: "Products | DBF ROSES",
          description:
            "Standard and premium Ecuadorian roses with stem lengths from 50 to 90 cm and custom supply programs.",
        },
        exportLogistics: {
          title: "Export / Logistics | DBF ROSES",
          description:
            "FOB, CIF, and delivered coordination from Ecuador with quality control and order follow-up.",
        },
        contact: {
          title: "Contact | DBF ROSES",
          description:
            "Contact DBF GLOBAL ROSES S.A.S. for weekly availability, sourcing requirements, and export coordination.",
        },
      },
    },
  },
  es: {
    brand: {
      companyName: "DBF GLOBAL ROSES S.A.S.",
      brandName: "DBF ROSES",
      logoText: "DBF ROSES",
    },
    navigation: {
      home: "Inicio",
      about: "Nosotros",
      products: "Productos",
      exportLogistics: "Exportación / Logística",
      contact: "Contacto",
      languageToggle: "English",
      menu: "Menú",
    },
    common: {
      requestAvailability: "Solicitar Disponibilidad",
      viewProducts: "Ver Productos",
      contactUs: "Contáctenos",
      learnMore: "Conocer Más",
    },
    home: {
      hero: {
        headline: "Rosas Ecuatorianas Premium para Mercados Internacionales",
        subheadline:
          "Rosas estándar y premium con abastecimiento confiable, control de calidad y coordinación de exportación desde Ecuador.",
        primaryCta: "Solicitar Disponibilidad",
        secondaryCta: "Ver Productos",
      },
      trust: {
        title: "Un socio B2B enfocado en abastecimiento y exportación",
        items: [
          {
            title: "Origen Ecuatoriano",
            description:
              "Abastecimiento comercial desde las principales zonas productoras de rosas del Ecuador con fincas seleccionadas.",
          },
          {
            title: "Rosas Estándar y Premium",
            description:
              "Programas para compradores que requieren calidad confiable en categorías estándar y premium.",
          },
          {
            title: "Coordinación de Exportación",
            description:
              "Gestión de pedidos y coordinación de embarques según requerimientos de origen y destino.",
          },
          {
            title: "Abastecimiento Semanal Confiable",
            description:
              "Comunicación consistente sobre disponibilidad semanal, ventanas de producción y tiempos de mercado.",
          },
        ],
      },
      aboutPreview: {
        title: "Sobre DBF ROSES",
        text:
          "DBF ROSES es una empresa comercial exportadora de flores basada en Ecuador. Construimos relaciones B2B de largo plazo con importadores, mayoristas y compradores florales que valoran consistencia, transparencia y ejecución operativa.",
      },
      productsPreview: {
        title: "Enfoque de Producto",
        text:
          "Nuestra oferta está diseñada para compradores profesionales, con abastecimiento flexible y planificación semanal.",
        items: [
          "Rosas Estándar",
          "Rosas Premium",
          "Spray Roses (opcional)",
          "Abastecimiento personalizado bajo solicitud",
        ],
      },
      logisticsPreview: {
        title: "Soporte de Exportación y Logística",
        text:
          "Según su modelo operativo, podemos coordinar soluciones FOB, CIF o entregadas con seguimiento claro y puntos de control de calidad.",
      },
      contactCta: {
        title: "Planifique su próximo programa semanal con DBF ROSES",
        text:
          "Comparta su mercado y especificaciones preferidas. Responderemos con disponibilidad actual y opciones de coordinación.",
        button: "Contactar al Equipo",
      },
    },
    aboutPage: {
      heroTitle: "Nosotros",
      heroText:
        "Somos una empresa comercializadora y exportadora de flores basada en Ecuador, enfocada en relaciones de suministro B2B serias para mercados internacionales.",
      sections: [
        {
          title: "Quiénes Somos",
          text:
            "DBF GLOBAL ROSES S.A.S., operando comercialmente como DBF ROSES, se dedica al abastecimiento y comercio de rosas ecuatorianas para compradores internacionales.",
        },
        {
          title: "Cómo Trabajamos",
          text:
            "Colaboramos con fincas seleccionadas y coordinamos el abastecimiento según objetivos de calidad, largos de tallo y necesidades de mercado. Nuestro rol es alinear oferta, estándares y ejecución.",
        },
        {
          title: "Qué Priorizamos",
          text:
            "Consistencia, control de calidad, cumplimiento y servicio ágil al cliente. Entendemos que los compradores profesionales necesitan operaciones predecibles y comunicación clara.",
        },
        {
          title: "Mercados que Atendemos",
          text:
            "Atendemos importadores, mayoristas y compradores florales en mercados como Estados Unidos, Uruguay, Puerto Rico y México.",
        },
      ],
    },
    productsPage: {
      heroTitle: "Productos",
      heroText:
        "Programas comerciales de rosas para compradores que buscan abastecimiento estable y posicionamiento de calidad claro.",
      categories: [
        {
          title: "Rosas Estándar",
          text:
            "Calidad y valor equilibrados para canales mayoristas y de distribución con demanda recurrente.",
        },
        {
          title: "Rosas Premium",
          text:
            "Calidad premium seleccionada para clientes que requieren mejor presentación, firmeza de tallo y consistencia.",
        },
      ],
      lengthsTitle: "Largos Disponibles",
      lengths: "50 / 60 / 70 / 80 / 90 cm",
      weeklyNote:
        "La disponibilidad semanal cambia según ciclos de producción y demanda de mercado. Compartimos ofertas actualizadas de forma programada.",
      programsNote:
        "Se pueden estructurar programas personalizados y órdenes permanentes según su volumen, destino y requerimientos semanales.",
    },
    exportPage: {
      heroTitle: "Exportación / Logística",
      heroText:
        "Coordinación operativa desde Ecuador para compradores que requieren ejecución confiable y visibilidad.",
      points: [
        {
          title: "Coordinación de Exportación desde Ecuador",
          text:
            "Coordinamos cronogramas de pedido, flujo documental y planificación de embarques desde origen.",
        },
        {
          title: "Soporte Logístico Opcional",
          text:
            "Según su estructura de compra, podemos apoyar coordinación FOB, CIF o entrega en destino.",
        },
        {
          title: "Control de Calidad",
          text:
            "Monitoreamos especificaciones y puntos de control de calidad antes del despacho para reducir incidencias evitables.",
        },
        {
          title: "Seguimiento de Pedidos",
          text:
            "Nuestro equipo mantiene comunicación sobre estado de pedido, avance de embarque y coordinación de entrega.",
        },
      ],
      audienceTitle: "Diseñado para Compradores Profesionales",
      audienceText:
        "Este modelo de servicio está diseñado para importadores, mayoristas y compradores florales que requieren un socio comercial de abastecimiento y exportación, no un vendedor minorista.",
    },
    contactPage: {
      heroTitle: "Contacto",
      heroText:
        "Envíenos sus requerimientos y responderemos con disponibilidad actual y opciones de coordinación de exportación.",
      detailsTitle: "Información de la Empresa",
      details: {
        companyNameLabel: "Empresa",
        companyName: "DBF GLOBAL ROSES S.A.S.",
        brandLabel: "Marca",
        brandName: "DBF ROSES",
        salesEmailLabel: "Ventas",
        salesEmail: "ventas@dbfroses.com",
        accountingEmailLabel: "Contabilidad",
        accountingEmail: "contabilidad@dbfroses.com",
        rucLabel: "RUC",
        ruc: "1793234182001",
        addressLabel: "Dirección",
        address: "Los Pinos y Alfredo Donoso, Tumbaco - Quito, Ecuador",
      },
      form: {
        title: "Enviar Consulta Comercial",
        name: "Nombre",
        company: "Empresa",
        email: "Correo",
        country: "País",
        message: "Mensaje",
        submit: "Enviar Consulta",
        success:
          "Gracias. Su mensaje se registró en el front-end. Conecte este formulario a su CRM o servicio de correo para envíos en producción.",
      },
      whatsappLabel: "WhatsApp (marcador de posición)",
    },
    footer: {
      city: "Quito, Ecuador",
      descriptor: "Rosas Ecuatorianas | Estándar y Premium",
      salesLabel: "Ventas",
      accountingLabel: "Contabilidad",
      focusLabel: "Enfoque",
      copyright: "Todos los derechos reservados.",
    },
    seo: {
      defaultTitle: "DBF ROSES | Socio Exportador de Rosas Ecuatorianas",
      defaultDescription:
        "DBF ROSES es un exportador y comercializador B2B de rosas ecuatorianas estándar y premium para compradores internacionales.",
      pages: {
        home: {
          title: "DBF ROSES | Rosas Ecuatorianas Premium para Mercados Internacionales",
          description:
            "Abastecimiento B2B y coordinación de exportación de rosas ecuatorianas estándar y premium para importadores, mayoristas y compradores florales.",
        },
        about: {
          title: "Nosotros | DBF ROSES",
          description:
            "Conozca a DBF ROSES, una comercializadora y exportadora de flores en Ecuador para compradores B2B internacionales.",
        },
        products: {
          title: "Productos | DBF ROSES",
          description:
            "Rosas ecuatorianas estándar y premium con largos de 50 a 90 cm y programas de abastecimiento personalizados.",
        },
        exportLogistics: {
          title: "Exportación / Logística | DBF ROSES",
          description:
            "Coordinación FOB, CIF y entregada desde Ecuador con control de calidad y seguimiento de pedidos.",
        },
        contact: {
          title: "Contacto | DBF ROSES",
          description:
            "Contacte a DBF GLOBAL ROSES S.A.S. para disponibilidad semanal, requerimientos de abastecimiento y coordinación de exportación.",
        },
      },
    },
  },
};

export const getContent = (locale: Locale) => content[locale];

