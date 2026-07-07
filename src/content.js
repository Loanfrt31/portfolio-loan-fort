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
      titleLine1: "Voyageur",
      titleLine2: "en devenir.",
      intro:
        "Jeune bachelier de 17 ans à Toulouse — bac général, spécialités Maths et NSI. Curieux du monde avant tout : je m'envole en octobre 2026 pour une année en Australie. Entre deux, je joue au basket en Régionale 2 et je construis mes premiers projets web.",
      ctaPrimary: "Mon histoire",
      ctaSecondary: "Me contacter",
      monogram: {
        initials: "LF",
        number: "Nº 08",
        lines: ["VOYAGEUR", "TOULOUSE, FRANCE", "EST. 2008"],
        footerText: "Prochaine escale — ",
        footerHighlight: "Australie",
      },
      countdown: {
        title: "Départ pour l'Australie",
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
        eyebrow: "Projet en cours — Nº 01",
        title: "Une année en Australie",
        cta: "Découvrir le projet",
      },
    },
    about: {
      title: "À propos",
      tagline: "Le monde s'apprend en allant à sa rencontre.",
      intro:
        "Je m'appelle Loan Fort, j'ai 17 ans et je viens d'obtenir mon bac général, spécialités Maths et NSI, au lycée Raymond Naves à Toulouse. Ce qui me définit le mieux, c'est l'envie de découvrir le monde — l'Australie en sera le premier grand chapitre. Le reste de mon temps se partage entre le basket-ball et le code.",
      interestsTitle: "Centres d'intérêt",
      interests: [
        {
          index: "01",
          title: "Basket-ball",
          text: "Je pratique le basket-ball depuis 10 ans, j'évolue actuellement en Régionale 2. Cette expérience m'a permis de développer l'esprit d'équipe, la discipline et la persévérance.",
        },
        {
          index: "02",
          title: "Programmation",
          text: "Je suis passionné par le développement informatique, je programme en HTML, CSS et Python à un niveau intermédiaire, compétences développées dans le cadre de la spécialité NSI au lycée ainsi que par apprentissage personnel.",
        },
        {
          index: "03",
          title: "Voyages & découverte de cultures",
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
      ctaView: "Voir le projet",
      emptyNote:
        "D'autres projets viendront s'écrire ici — certains depuis l'Australie.",
    },
    contact: {
      title: "Un stage, un projet, une question ?",
      text: "Le plus simple, c'est un mail. Je réponds vite.",
      email: "fortloan.08@gmail.com",
      phone: "06 44 84 38 77",
      phoneHref: "tel:+33644843877",
      linkedinLabel: "LinkedIn — Loan Fort",
      linkedinUrl: "https://www.linkedin.com/in/loan-fort",
      location: "Toulouse, France",
    },
    footer: {
      text: (year) => `Conçu et codé par Loan Fort · Toulouse · ${year}`,
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
      titleLine1: "Traveller",
      titleLine2: "in the making.",
      intro:
        "A 17-year-old high-school graduate from Toulouse — French Baccalauréat, majors in Maths and Computer Science (NSI). Drawn to the world above all: in October 2026, I take off for a year in Australia. In between, I play regional-league basketball and build my first web projects.",
      ctaPrimary: "My story",
      ctaSecondary: "Get in touch",
      monogram: {
        initials: "LF",
        number: "Nº 08",
        lines: ["TRAVELLER", "TOULOUSE, FRANCE", "EST. 2008"],
        footerText: "Next stop — ",
        footerHighlight: "Australia",
      },
      countdown: {
        title: "Departure for Australia",
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
        eyebrow: "Ongoing project — Nº 01",
        title: "A year in Australia",
        cta: "Discover the project",
      },
    },
    about: {
      title: "About",
      tagline: "The world is best learned by going to meet it.",
      intro:
        "My name is Loan Fort, I'm 17 and I've just earned my French Baccalauréat, with majors in Maths and Computer Science (NSI), at Lycée Raymond Naves in Toulouse. What defines me best is the urge to discover the world — Australia will be its first great chapter. The rest of my time is shared between basketball and code.",
      interestsTitle: "Interests",
      interests: [
        {
          index: "01",
          title: "Basketball",
          text: "I've played basketball for 10 years and currently compete in a regional league (Régionale 2). This experience has taught me teamwork, discipline, and perseverance.",
        },
        {
          index: "02",
          title: "Programming",
          text: "I'm passionate about software development — I code in HTML, CSS, and Python at an intermediate level, skills built through my NSI specialty at school as well as self-directed learning.",
        },
        {
          index: "03",
          title: "Travel & discovering cultures",
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
      ctaView: "View the project",
      emptyNote:
        "More projects will be written here — some of them from Australia.",
    },
    contact: {
      title: "An internship, a project, a question?",
      text: "The simplest way is email. I reply quickly.",
      email: "fortloan.08@gmail.com",
      phone: "06 44 84 38 77",
      phoneHref: "tel:+33644843877",
      linkedinLabel: "LinkedIn — Loan Fort",
      linkedinUrl: "https://www.linkedin.com/in/loan-fort",
      location: "Toulouse, France",
    },
    footer: {
      text: (year) => `Designed and coded by Loan Fort · Toulouse · ${year}`,
    },
  },
};
