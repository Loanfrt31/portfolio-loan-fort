// Tous les textes du site vivent ici, en français (fr) et en anglais (en).
// Pour changer un texte : cherchez la clé correspondante ci-dessous et modifiez sa valeur.
// Aucun composant ne doit contenir de texte "en dur" : tout passe par cet objet.

// Date/heure (fuseau local) du départ pour l'Australie, utilisée par le
// compte à rebours de la page d'accueil. À remplacer par la date exacte du
// billet dès qu'elle est connue — pensez aussi à ajuster le texte
// home.countdown.subtitle (fr/en) ci-dessous si le mois change.
export const DEPARTURE_DATE = new Date("2026-10-01T00:00:00");

export const content = {
  fr: {
    meta: {
      title: "Loan Fort — Portfolio",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
      menuLabel: "Menu",
      langFr: "FR",
      langEn: "EN",
    },
    home: {
      eyebrow: "Portfolio — Toulouse, France",
      // Ajouter ou retirer des mots librement
      rotatingWords: {
        words: ["Voyageur", "Développeur", "Basketteur", "Polyglotte", "Explorateur"],
        srLabel: "Voyageur, développeur, basketteur — en devenir.",
      },
      titleLine2: "en devenir.",
      intro:
        "Je m'appelle Loan, 18 ans, en Australie avec un Working Holiday Visa — et prêt à commencer immédiatement. Dix ans de basket en compétition m'ont forgé rigueur, fiabilité et esprit d'équipe, et une saison d'entretien paysager pour des propriétés haut de gamme m'a appris ce qu'est une vraie journée de travail. Besoin de quelqu'un de ponctuel qui va au bout des choses ? Parlons-en.",
      ctaPrimary: "Mon histoire",
      ctaSecondary: "Me contacter",
      portrait: {
        // Réutilisées par le préloader (écran d'entrée monogramme)
        initials: "LF",
        alt: "Portrait de Loan Fort",
        line1: "LOAN FORT",
        number: "Nº 08",
        // Version intemporelle (reste vraie après l'arrivée en Australie) :
        // ne pas y remettre de date de départ.
        availabilityPrefix: "Disponible — ",
        availabilityHighlight: "Australie",
        availabilitySuffix: " · Working Holiday Visa",
      },
      countdown: {
        labels: {
          days: "Jours",
          hours: "Heures",
          minutes: "Minutes",
          seconds: "Secondes",
        },
        subtitle: "— OCTOBRE 2026 —",
        arrivedMessage: "L'aventure australienne a commencé.",
      },
      project: {
        title: "Une année en Australie",
        cta: "Découvrir",
      },
      ongoingProject: {
        sectionTitle: "Projet en cours",
        // Préfixe du compte à rebours en jours de la bande teaser (ex. "J-88").
        dayCountPrefix: "J-",
        // Affiché à la place du compte à rebours une fois la date dépassée.
        ongoingLabel: "En cours",
      },
      chapters: {
        sectionTitle: "Trois centres d'intérêt",
        // Bouton unique sous les cartes -> onglet Centres d'intérêt de À propos
        discoverCta: "Découvrir mes centres d'intérêt",
        items: [
          {
            index: "01",
            title: "Basket-ball",
            summary:
              "Dix ans de pratique, la Régionale 2 aujourd'hui — l'école de l'esprit d'équipe, de la discipline et de la persévérance.",
          },
          {
            index: "02",
            title: "Programmation",
            summary:
              "HTML, CSS, Python : des premiers projets construits en spécialité NSI au lycée et en autodidacte.",
          },
          {
            index: "03",
            title: "Voyages",
            summary:
              "Plusieurs pays découverts en famille, et un cap : une année en Australie pour apprendre le monde de près.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Contact",
        title: "Un projet, une question ?",
        button: "Me contacter",
      },
    },
    about: {
      title: "À propos",
      tagline: "La discipline du terrain, au service du travail.",
      intro:
        "Je m'appelle Loan Fort. J'ai 18 ans et je suis en Australie avec un Working Holiday Visa, à la recherche d'un travail de terrain — hospitality, paysagisme, manutention, vente, ou tout poste exigeant. Ce que j'apporte : la rigueur, la ponctualité et l'esprit d'équipe de dix ans de basket en compétition, une vraie expérience d'entretien de jardins de propriétés de luxe à Saint-Barthélemy, et un bac général spécialités Maths et NSI. J'apprends vite, je ne bâcle pas, et je suis là pour travailler.",
      // Mention d'invitation au swipe (carousel mobile, rejouée à chaque visite)
      swipeHint: "Glissez pour naviguer",
      // Label de la section carousel encapsulée (mobile uniquement)
      exploreLabel: "Explorer",
      interestsTitle: "Centres d'intérêt",
      interests: [
        {
          index: "01",
          title: "Basket-ball",
          subject: "basketball",
          text: "Je pratique le basket-ball depuis 10 ans, j'évolue actuellement en Régionale 2. Cette expérience m'a permis de développer l'esprit d'équipe, la discipline et la persévérance.",
        },
        {
          index: "02",
          title: "Programmation",
          subject: "programming",
          text: "Je suis passionné par le développement informatique, je programme en HTML, CSS et Python à un niveau intermédiaire, compétences développées dans le cadre de la spécialité NSI au lycée ainsi que par apprentissage personnel.",
        },
        {
          index: "03",
          title: "Voyages & découverte de cultures",
          subject: "travel",
          text: "J'aime voyager et découvrir de nouvelles cultures, ayant visité plusieurs pays avec ma famille. Aujourd'hui, je souhaite partir en Australie dans le cadre d'une année de césure afin de perfectionner mon anglais (niveau B2), gagner en autonomie et vivre une immersion culturelle enrichissante.",
        },
      ],
      skillsTitle: "Compétences",
      competences: [
        { value: "HTML", label: "Intermédiaire" },
        { value: "CSS", label: "Intermédiaire" },
        { value: "Python", label: "Intermédiaire" },
        { value: "React", label: "En apprentissage" },
      ],
      langsTitle: "Langues",
      langues: [
        { value: "Français", label: "Natif" },
        { value: "Anglais", label: "B2" },
        { value: "Espagnol", label: "B1" },
      ],
      resume: {
        education: {
          title: "Formation",
          entries: [
            {
              date: "2024 – 2026",
              title: "Lycée Raymond Naves",
              place: "Toulouse",
              desc: "Baccalauréat général, spécialités Maths et NSI — obtenu en 2026",
            },
            {
              date: "2024 – 2025",
              title: "Section Sportive",
              place: "Lycée Raymond Naves",
              desc: "« J'ai intégré la Section Sportive de mon lycée en Seconde et Première, qui propose des heures de sport supplémentaires en plus du programme scolaire classique. J'ai choisi cette option par passion pour le sport, ce qui m'a demandé une charge de travail plus importante en parallèle de mes cours. »",
            },
            {
              date: "2019 – 2023",
              title: "Collège Romain Rolland",
              place: "Saint-Jean",
            },
          ],
        },
        experience: {
          title: "Expériences professionnelles",
          entries: [
            {
              date: "Juil. – Août 2026",
              title:
                "Les Jardiniers de Saint-Barth — Assistant en aménagement paysager et entretien de jardins",
              place: "CDD · Saint-Barthélemy, sur site",
              desc: "« Entretien et aménagement d'espaces verts pour des propriétés résidentielles haut de gamme. Taille de haies, tonte, plantation, préparation du sol et nettoyage des sites. Travaux physiques en extérieur dans un environnement tropical ; utilisation en toute sécurité d'outils manuels et électriques. Travail au sein d'une petite équipe avec des plannings quotidiens serrés et des normes de présentation élevées. »",
            },
            {
              date: "2024",
              title: "Coper Bee",
              place: "Stage d'observation (Seconde)",
              desc: "« Deuxième stage au sein de cette ESN. J'ai participé activement aux activités des équipes en réalisant des tâches concrètes. Cette expérience m'a permis de mieux appréhender le monde professionnel. »",
            },
            {
              date: "2023",
              title: "Coper Bee",
              place: "Stage d'observation (3ᵉ)",
              desc: "« Premier stage au sein d'une entreprise de services du numérique. J'ai découvert le fonctionnement d'une ESN ainsi que les différents métiers du secteur informatique. »",
            },
          ],
        },
        // Habilitations obligatoires pour travailler en Australie (RSA, White
        // Card...) — vocabulaire local : "licences & tickets", pas
        // "certifications" (qui reste le terme pour les diplômes français).
        // Ajouter chaque habilitation obtenue ici — supprimer la ligne
        // "À venir" quand la première est ajoutée.
        licences: {
          title: "Habilitations australiennes",
          entries: [
            { date: "—", title: "RSA · White Card — À venir", pending: true },
          ],
        },
        diplomas: {
          title: "Diplômes & certifications",
          entries: [
            { date: "2026", title: "Baccalauréat général — spécialités Maths et NSI, mention Assez Bien" },
            { date: "2026", title: "Certification Pix — 567 points" },
            { date: "10/2025", title: "Permis B" },
            { date: "2023", title: "Diplôme national du brevet — mention Très Bien" },
          ],
        },
      },
    },
    projects: {
      title: "Projets",
      tagline:
        "Cette page grandira avec moi. Chaque projet terminé viendra s'ajouter ici.",
      items: [],
    },
    // Le projet vedette "Une année en Australie" : résumé affiché en carte
    // compacte sur la page Projets, détail complet sur la page dédiée.
    // Faire évoluer `status` au fil du projet, par ex. :
    // "Projet nº 01 — en préparation" → "Projet nº 01 — en cours — Australie"
    // (ce même statut alimente aussi la bande teaser de l'accueil)
    projectAustralia: {
      breadcrumbAriaLabel: "Fil d'ariane",
      breadcrumbProjects: "Projets",
      breadcrumbCurrent: "Australie",
      status: "Projet nº 01 — en préparation",
      title: "Une année en Australie",
      subtitle: "Working Holiday Visa · Départ octobre 2026",
      summary:
        "Un an seul à l'autre bout du monde : visa, budget, immersion — le projet se prépare.",
      story:
        "Partir seul un an à l'autre bout du monde : c'est le projet que je prépare depuis des mois. Obtenir le Working Holiday Visa, financer le voyage, organiser le logement et le travail sur place — et surtout, passer d'un anglais B2 à un anglais courant en vivant une immersion totale. Un projet qui s'écrit en ce moment même.",
      // Passer `done` à true quand l'étape est franchie — le portfolio
      // avance avec le projet.
      milestones: [
        { label: "Bac obtenu", done: true },
        { label: "Visa WHV", done: false },
        { label: "Billet d'avion", done: false },
        { label: "Départ", done: false },
        { label: "Sur place", done: false },
      ],
      tags: ["Visa WHV", "Budget", "Anglais B2 → C1", "Autonomie"],
      mapLabel: "Carte des côtes de l'Australie",
      mapCaption: "TOULOUSE → AUSTRALIE · ≈ 17 000 KM",
      clockOriginLabel: "TOULOUSE",
      clockDestinationLabel: "SYDNEY",
      // Label au-dessus du grand compte à rebours, partie "Le projet"
      countdownLabel: "Départ dans",
      ctaView: "Voir le projet",
      emptyNote:
        "D'autres projets viendront s'écrire ici — certains depuis l'Australie.",

      // Passer à true le jour du départ pour révéler le Chapitre 02. Penser
      // à faire évoluer `status` ci-dessus vers "Projet nº 01 — en cours —
      // Australie" au même moment.
      chapter2Unlocked: false,

      sections: {
        project: {
          title: "Le projet",
        },
        chapter1: {
          title: "Chapitre 01 — La préparation",
          intro:
            "Obtenir le Working Holiday Visa, construire le budget, organiser le départ : la phase en cours. Chaque étape franchie s'allume ci-dessous.",
        },
        chapter2: {
          title: "Chapitre 02 — La vie en Australie",
          lockedLabel: "Ce chapitre s'ouvre en octobre 2026",
          lockedText:
            "Carnet de bord, premiers jobs, progression en anglais : la suite s'écrira sur place.",
          // Affiché une fois chapter2Unlocked passé à true — à enrichir de
          // vraies entrées de carnet de bord le moment venu.
          unlockedIntro: "Le carnet de bord commence ici.",
          // Emplacement pour les futures entrées de carnet de bord (dates,
          // anecdotes, jobs trouvés sur place...) :
          // entries: [],
        },
      },
    },
    contact: {
      title: "Un stage, un projet, une question ?",
      text: "Le plus simple, c'est un message. Je réponds vite.",
      email: "fortloan.08@gmail.com",
      phone: "06 44 84 38 77",
      phoneHref: "tel:+33644843877",
      linkedinLabel: "LinkedIn — Loan Fort",
      linkedinUrl: "https://www.linkedin.com/in/loan-fort",
      location: "Toulouse, France",
      cvDownload: "Télécharger mon CV (anglais)",
      practicalInfo: {
        title: "Infos pratiques",
        items: [
          { label: "Visa", value: "Working Holiday (en cours d'obtention)" },
          { label: "Disponibilité", value: "Dès octobre 2026, Australie" },
          { label: "Mobilité", value: "Permis B" },
        ],
      },
    },
    footer: {
      text: (year) => `Conçu et codé par Loan Fort · Toulouse · ${year}`,
    },
    notFound: {
      watermark: "Nº 404",
      text: "Cette page n'existe pas — le voyage continue ailleurs.",
      button: "Retour à l'accueil",
    },
  },

  en: {
    meta: {
      title: "Loan Fort — Portfolio",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      menuLabel: "Menu",
      langFr: "FR",
      langEn: "EN",
    },
    home: {
      eyebrow: "Portfolio — Toulouse, France",
      // Ajouter ou retirer des mots librement
      rotatingWords: {
        words: ["Traveller", "Developer", "Basketball player", "Polyglot", "Explorer"],
        srLabel: "Traveller, developer, basketball player — in the making.",
      },
      titleLine2: "in the making.",
      intro:
        "I'm Loan, 18, in Australia on a Working Holiday Visa — and ready to start right away. Ten years of competitive basketball built my discipline, reliability and team spirit, and a season of landscaping work for high-end properties taught me what a hard day's work looks like. If you need someone who shows up on time and finishes the job, let's talk.",
      ctaPrimary: "My story",
      ctaSecondary: "Get in touch",
      portrait: {
        initials: "LF",
        alt: "Portrait of Loan Fort",
        line1: "LOAN FORT",
        number: "Nº 08",
        availabilityPrefix: "Available — ",
        availabilityHighlight: "Australia",
        availabilitySuffix: " · Working Holiday Visa",
      },
      countdown: {
        labels: {
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds",
        },
        subtitle: "— OCTOBER 2026 —",
        arrivedMessage: "The Australian adventure has begun.",
      },
      project: {
        title: "A year in Australia",
        cta: "Discover",
      },
      ongoingProject: {
        sectionTitle: "Ongoing project",
        dayCountPrefix: "D-",
        ongoingLabel: "Ongoing",
      },
      chapters: {
        sectionTitle: "Three interests",
        discoverCta: "Discover my interests",
        items: [
          {
            index: "01",
            title: "Basketball",
            summary:
              "Ten years of practice, regional league today — the school of team spirit, discipline and perseverance.",
          },
          {
            index: "02",
            title: "Programming",
            summary:
              "HTML, CSS, Python: first projects built through the NSI track in high school and self-teaching.",
          },
          {
            index: "03",
            title: "Travels",
            summary:
              "Several countries discovered with my family, and one heading: a year in Australia to learn the world up close.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Contact",
        title: "A project, a question?",
        button: "Get in touch",
      },
    },
    about: {
      title: "About",
      tagline: "The discipline of the court, brought to work.",
      intro:
        "My name is Loan Fort. I'm 18, French, and in Australia on a Working Holiday Visa, looking for hands-on work — hospitality, landscaping, labouring, retail, or anything demanding. What I bring: the discipline, punctuality and team spirit of ten years of competitive basketball, real experience in garden maintenance for luxury properties in Saint-Barthélemy, and a French Baccalauréat with majors in Maths and Computer Science. I learn fast, I don't cut corners, and I'm here to work.",
      swipeHint: "Swipe to navigate",
      exploreLabel: "Explore",
      interestsTitle: "Interests",
      interests: [
        {
          index: "01",
          title: "Basketball",
          subject: "basketball",
          text: "I've played basketball for 10 years and currently compete in a regional league (Régionale 2). This experience has taught me teamwork, discipline, and perseverance.",
        },
        {
          index: "02",
          title: "Programming",
          subject: "programming",
          text: "I'm passionate about software development — I code in HTML, CSS, and Python at an intermediate level, skills built through my NSI specialty at school as well as self-directed learning.",
        },
        {
          index: "03",
          title: "Travel & discovering cultures",
          subject: "travel",
          text: "I love traveling and discovering new cultures, having visited several countries with my family. I'm now looking to spend a gap year in Australia to improve my English (B2 level), build independence, and experience a rich cultural immersion.",
        },
      ],
      skillsTitle: "Skills",
      competences: [
        { value: "HTML", label: "Intermediate" },
        { value: "CSS", label: "Intermediate" },
        { value: "Python", label: "Intermediate" },
        { value: "React", label: "Learning" },
      ],
      langsTitle: "Languages",
      langues: [
        { value: "French", label: "Native" },
        { value: "English", label: "B2" },
        { value: "Spanish", label: "B1" },
      ],
      resume: {
        education: {
          title: "Education",
          entries: [
            {
              date: "2024 – 2026",
              title: "Lycée Raymond Naves",
              place: "Toulouse",
              desc: "French Baccalauréat, majors in Maths and Computer Science (NSI) — earned in 2026",
            },
            {
              date: "2024 – 2025",
              title: "Competitive Sports Program",
              place: "Lycée Raymond Naves",
              desc: "\"I joined my school's Competitive Sports Program in Grade 10 and 11, which offers extra hours of sport on top of the regular curriculum. I chose this track out of passion for sport, which meant a heavier workload alongside my studies.\"",
            },
            {
              date: "2019 – 2023",
              title: "Collège Romain Rolland",
              place: "Saint-Jean",
            },
          ],
        },
        experience: {
          title: "Work experience",
          entries: [
            {
              date: "Jul – Aug 2026",
              title: "Les Jardiniers de Saint-Barth — Landscaping & Garden Maintenance Assistant",
              place: "Fixed-term contract · Saint-Barthélemy, on-site",
              desc: "\"Maintenance and landscaping of green spaces for high-end residential properties. Hedge trimming, mowing, planting, soil preparation and site clean-up. Physical outdoor work in a tropical environment; safe use of hand and power tools. Working in a small team with tight daily schedules and high presentation standards.\"",
            },
            {
              date: "2024",
              title: "Coper Bee",
              place: "Observation internship (Grade 10)",
              desc: "\"Second internship at this IT services company. I actively took part in the teams' activities, carrying out real tasks. This experience gave me a better understanding of the professional world.\"",
            },
            {
              date: "2023",
              title: "Coper Bee",
              place: "Observation internship (Grade 9)",
              desc: "\"First internship at an IT services company. I discovered how such a company works and the different careers available in the tech sector.\"",
            },
          ],
        },
        // Mandatory Australian work tickets (RSA, White Card...). Add each
        // one here once earned — remove the "Coming soon" line when the
        // first entry is added.
        licences: {
          title: "Licences & Tickets",
          entries: [
            { date: "—", title: "RSA · White Card — Coming soon", pending: true },
          ],
        },
        diplomas: {
          title: "Diplomas & certifications",
          entries: [
            { date: "2026", title: "French Baccalauréat — majors in Maths and Computer Science (NSI), merit honors" },
            { date: "2026", title: "Pix certification — 567 points" },
            { date: "10/2025", title: "Driving licence (Permis B)" },
            { date: "2023", title: "Brevet des collèges — high honors" },
          ],
        },
      },
    },
    projects: {
      title: "Projects",
      tagline: "This page will grow with me. Every finished project will land here.",
      items: [],
    },
    projectAustralia: {
      breadcrumbAriaLabel: "Breadcrumb",
      breadcrumbProjects: "Projects",
      breadcrumbCurrent: "Australia",
      status: "Project nº 01 — in preparation",
      title: "A year in Australia",
      subtitle: "Working Holiday Visa · Departure October 2026",
      summary:
        "A year alone on the other side of the world: visa, budget, immersion — the project is in the making.",
      story:
        "Setting off alone for a year on the other side of the world: this is the project I've been preparing for months. Securing the Working Holiday Visa, funding the trip, arranging housing and work over there — and above all, taking my English from B2 to fluent through total immersion. A project being written right now.",
      milestones: [
        { label: "Baccalauréat earned", done: true },
        { label: "WHV Visa", done: false },
        { label: "Flight booked", done: false },
        { label: "Departure", done: false },
        { label: "Down under", done: false },
      ],
      tags: ["WHV Visa", "Budget", "English B2 → C1", "Independence"],
      mapLabel: "Map of Australia's coastline",
      mapCaption: "TOULOUSE → AUSTRALIA · ≈ 17,000 KM",
      clockOriginLabel: "TOULOUSE",
      clockDestinationLabel: "SYDNEY",
      countdownLabel: "Departure in",
      ctaView: "View the project",
      emptyNote:
        "More projects will be written here — some of them from Australia.",

      chapter2Unlocked: false,

      sections: {
        project: {
          title: "The project",
        },
        chapter1: {
          title: "Chapter 01 — The preparation",
          intro:
            "Securing the Working Holiday Visa, building the budget, organising the departure: the phase under way. Each completed step lights up below.",
        },
        chapter2: {
          title: "Chapter 02 — Life in Australia",
          lockedLabel: "This chapter opens in October 2026",
          lockedText:
            "Travel log, first jobs, English progress: the next part will be written over there.",
          unlockedIntro: "The travel log starts here.",
          // entries: [],
        },
      },
    },
    contact: {
      title: "An internship, a project, a question?",
      text: "The simplest way is a message. I reply quickly.",
      email: "fortloan.08@gmail.com",
      phone: "06 44 84 38 77",
      phoneHref: "tel:+33644843877",
      linkedinLabel: "LinkedIn — Loan Fort",
      linkedinUrl: "https://www.linkedin.com/in/loan-fort",
      location: "Toulouse, France",
      cvDownload: "Download my CV",
      practicalInfo: {
        title: "Practical info",
        items: [
          { label: "Visa", value: "Working Holiday (in progress)" },
          { label: "Availability", value: "From October 2026, Australia" },
          { label: "Mobility", value: "Driver's licence (B)" },
        ],
      },
    },
    footer: {
      text: (year) => `Designed and coded by Loan Fort · Toulouse · ${year}`,
    },
    notFound: {
      watermark: "Nº 404",
      text: "This page doesn't exist — the journey continues elsewhere.",
      button: "Back home",
    },
  },
};
