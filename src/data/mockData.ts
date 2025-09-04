const flavoursPack = [
    {
        id: 1,
        image: "/images/chocapic.png",
        name: "HONEY CRUNCH",
        color: "var(--orange-app)",
    },
    {
        id: 2,
        image: "/images/chocapic.png",
        name: "COOKIES N’CREAM",
        color: "var(--rose-app)",
    },
    {
        id: 3,
        image: "/images/chocapic.png",
        name: "PEANUT CRAZY",
        color: "var(--green-app)",
    },
    {
        id: 4,
        image: "/images/chocapic.png",
        name: "CHOCO BOOM",
        color: "var(--yellow-app)",
    }
];

const benefits = [
    {
      id: 1,
      title: "HIGH PROTEIN",
      image: "/images/soy-beans.jpg",
      imageAlt: "Soy beans",
      subtitle: "With 11g per bowl",
      bullets: [
        "Build muscle stronger",
        "Build lean muscle",
        "Less snacking",
        "Improved metabolism"
      ]
    },
    {
      id: 2,
      title: "LOW CARB",
      image: "/images/cocao-powder.jpg", 
      imageAlt: "Cocoa powder",
      subtitle: "Yes, zero grams!",
      bullets: [
        "Say goodbye to sugar cravings",
        "More focus",
        "Fewer calories",
        "Sustained energy"
      ]
    },
    {
      id: 3,
      title: "ZERO SUGAR",
      image: "/images/orange-texture.jpg",
      imageAlt: "Orange texture",
      subtitle: "Yes, zero grams!",
      bullets: [
        "Say goodbye to sugar crashes",
        "More focus",
        "Fewer calories",
        "Sustained energy"
      ]
    }
  ];
  const SPOILERS = [
    {
      id: 1,
      username: "@PSEUDO_INSTA",
      image: "/images/spoilers/spoiler-1.jpg",
      alt: "Person holding Cravies package",
      bgColor: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      username: "@PSEUDO_INSTA",
      image: "/images/spoilers/spoiler-2.jpg", 
      alt: "Bowl with Cravies cereal and milk",
      bgColor: "from-orange-500 to-yellow-500"
    },
    {
      id: 3,
      username: "@PSEUDO_INSTA",
      image: "/images/spoilers/spoiler-3.jpg",
      alt: "Person pouring milk into Cravies bowl",
      bgColor: "from-blue-400 to-teal-500"
    },
    {
      id: 4,
      username: "@PSEUDO_INSTA", 
      image: "/images/spoilers/spoiler-4.jpg",
      alt: "Yellow bowl with Cravies and toppings",
      bgColor: "from-yellow-400 to-orange-400"
    },
    {
      id: 5,
      username: "@PSEUDO_INSTA",
      image: "/images/spoilers/spoiler-5.jpg",
      alt: "Person holding Cravies package again",
      bgColor: "from-red-500 to-orange-500"
    },
    {
        id: 6,
        username: "@PSEUDO_INSTA",
        image: "/images/spoilers/spoiler-3.jpg",
        alt: "Person pouring milk into Cravies bowl",
        bgColor: "from-blue-400 to-teal-500"
      },
      {
        id: 7,
        username: "@PSEUDO_INSTA", 
        image: "/images/spoilers/spoiler-4.jpg",
        alt: "Yellow bowl with Cravies and toppings",
        bgColor: "from-yellow-400 to-orange-400"
      },
      {
        id: 8,
        username: "@PSEUDO_INSTA",
        image: "/images/spoilers/spoiler-5.jpg",
        alt: "Person holding Cravies package again",
        bgColor: "from-red-500 to-orange-500"
      }
  ];

  const benefitsData = [
    {
      id: 1,
      number: "1",
      title: "ALWAYS IN YOUR CUPBOARD",
      description: "Because running out of cereal should be illegal. We've got your back (and your breakfast).",
      backgroundColor: "var(--orange-app)", 
    },
    {
      id: 2,
      number: "2", 
      title: "CHEAPER, SMARTER, BETTER-LOOKING",
      description: "Get up to 20% off. Yes, twenty. Percent. Off. That's cereal economics.",
      backgroundColor: "var(--green-app)",
    },
    {
      id: 3,
      number: "3",
      title: "YOU'RE IN CHARGE", 
      description: "Pause it. Cancel it. Switch flavors. It bends to your will like a very crunchy servant.",
      backgroundColor: "var(--brown-app)"
    }
  ];
  const TESTIMONIALS = [
    {
      id: 1,
      name: "Sarah M.",
      image: "https://i.pinimg.com/1200x/6d/74/60/6d74609e12290af9195ffbed41a7ed10.jpg", 
      rating: 5,
      quote: `Didn't expect to fall in love with cereal. But here we are.`,
    },
    {
      id: 2,
      name: "Jason R",
      image: "https://i.pinimg.com/1200x/83/b7/e5/83b7e57fad4a71bdf91a865343dc1ab4.jpg",
      rating: 5,
      quote: `Didn't expect to fall in love with cereal. But here we are.`,
    },
    {
      id: 3,
      name: "Amelia P",
      image: "https://i.pinimg.com/736x/01/bd/ce/01bdce1e2d07213a46e2135aee10bfa9.jpg",
      rating: 5,
      quote: `Didn't expect to fall in love with cereal. But here we are.`,
    },
  ];

  const ROWS = [
    {
      key: "row",
      label: "",
      image: undefined,
      values: [
        "PROTIEN",
        "SUGAR",
        "CALORIES",
        "NET CARBS"
      ]
    },
    {
      key: "row2",
      label: "CRAVIES",
      image: "/images/chocapic.png",
      values: [
        "11-12G",
        "11-12G",
        "11-12G",
        "11-12G"
      ]
    },
    {
      key: "row3",
      label: "",
      image: "/images/lays-chips.png",
      values: [
        "11-12G",
        "11-12G",
        "11-12G",
        "11-12G"
      ]
    },
    {
      key: "row4",
      label: "",
      image: "/images/m-and-ms-pack.png",
      values: [
        "11-12G",
        "11-12G",
        "11-12G",
        "11-12G"
      ]
    },
    {
      key: "row5",
      label: "",
      image: "/images/kitkat.png",
      values: [
        "11-12G",
        "11-12G",
        "11-12G",
        "11-12G"
      ]
    }
  ] as const;

  const REVIEWS = [
    {
      id: "1",
      name: "Tristan T.",
      initials: "TT",
      title: "YUM!!!",
      body:
        "My little boy loves it, good to see a fruity flavour again",
      rating: 5,
      daysAgo: 6,
      verified: true,
      recommends: true,
    },
    {
      id: "2",
      name: "Tristan T.",
      initials: "TT",
      title: "YUM!!!",
      body:
        "My little boy loves it, good to see a fruity flavour again",
      rating: 5,
      daysAgo: 6,
      verified: true,
      recommends: true,
    },
    {
      id: "3",
      name: "Tristan T.",
      initials: "TT",
      title: "YUM!!!",
      body:
        "My little boy loves it, good to see a fruity flavour again",
      rating: 5,
      daysAgo: 6,
      verified: true,
      recommends: true,
    },
    {
      id: "4",
      name: "Tristan T.",
      initials: "TT",
      title: "YUM!!!",
      body:
        "My little boy loves it, good to see a fruity flavour again",
      rating: 5,
      daysAgo: 6,
      verified: true,
      recommends: true,
    },
    {
      id: "5",
      name: "Tristan T.",
      initials: "TT",
      title: "YUM!!!",
      body:
        "My little boy loves it, good to see a fruity flavour again",
      rating: 5,
      daysAgo: 6,
      verified: true,
      recommends: true,
    },
    {
      id: "6",
      name: "Tristan T.",
      initials: "TT",
      title: "YUM!!!",
      body:
        "My little boy loves it, good to see a fruity flavour again",
      rating: 5,
      daysAgo: 6,
      verified: true,
      recommends: true,
    },
  ];
  const FAQS = [
    {
      id: 1,
      question: "LA LIVRAISON EST-ELLE PAYANTE ?",
      answer: "Nous offrons la livraison gratuite pour les commandes de plus de 35€. En dessous de ce montant, des frais de livraison de 4,95€ s'appliquent. La livraison est assurée par nos partenaires logistiques dans un délai de 2 à 5 jours ouvrés selon votre localisation."
    },
    {
      id: 2,
      question: "POURQUOI CES CÉRÉALES SONT-ELLES PLUS CHÈRES QUE LES CÉRÉALES ORDINAIRES ?",
      answer: "Nos céréales sont fabriquées avec des ingrédients premium et des procédés de fabrication innovants. Nous utilisons des protéines de haute qualité, des édulcorants naturels et des nutriments ajoutés qui coûtent plus cher que les ingrédients conventionnels."
    },
    {
      id: 3,
      question: "CES CÉRÉALES SONT-ELLES VRAIMENT ?",
      answer: "Oui, nos céréales sont formulées pour être nutritionnellement équilibrées avec un apport élevé en protéines, peu de sucres ajoutés et des fibres bénéfiques pour la santé."
    },
    {
      id: 4,
      question: "Y A-T-IL DES ALLERGÈNES DANS VOS CÉRÉALES ?",
      answer: "Nos céréales peuvent contenir des traces de gluten, soja, lait et fruits à coque. Nous indiquons clairement tous les allergènes sur nos emballages. Consultez toujours la liste des ingrédients avant consommation."
    },
    {
      id: 5,
      question: "Y A-T-IL DES SUCRES AJOUTÉS DANS VOS CÉRÉALES ?",
      answer: "Nos céréales contiennent très peu de sucres ajoutés. Nous utilisons principalement des édulcorants naturels comme la stévia et l'érythritol pour maintenir un goût délicieux tout en gardant un profil nutritionnel sain."
    },
    {
      id: 6,
      question: "QUELLE EST LA SOURCE DE FIBRES DANS VOS CÉRÉALES ?",
      answer: "Nos fibres proviennent principalement de sources naturelles comme l'inuline de chicorée, les fibres de pois et d'autres fibres végétales qui favorisent la santé digestive."
    },
    {
      id: 7,
      question: "CES CÉRÉALES SONT-ELLES VRAIMENT ?",
      answer: "Oui, nos céréales sont conçues pour s'intégrer parfaitement dans un régime équilibré, que vous souhaitiez maintenir votre poids ou atteindre vos objectifs nutritionnels."
    },
    {
      id: 8,
      question: "CES CÉRÉALES SONT-ELLES UNIQUEMENT POUR LE PETIT-DÉJEUNER ?",
      answer: "Pas du tout ! Nos céréales peuvent être consommées à tout moment de la journée comme collation saine, en-cas post-entraînement ou même en dessert avec du yaourt."
    },
    {
      id: 9,
      question: "LES ENFANTS ET LES ADOLESCENTS PEUVENT-ILS MANGER CES CÉRÉALES ?",
      answer: "Oui, nos céréales conviennent aux enfants et adolescents. Elles constituent une excellente source de protéines et nutriments essentiels pour leur croissance. Cependant, consultez un professionnel de santé pour les enfants de moins de 3 ans."
    },
    {
      id: 10,
      question: "LE GOÛT ET LA TEXTURE DES CÉRÉALES SONT-ILS VRAIMENT BONS ?",
      answer: "Absolument ! Nous avons travaillé dur pour créer des céréales avec un goût délicieux et une texture croquante qui rappelle vos céréales préférées d'enfance, mais en version plus saine."
    },
    {
      id: 11,
      question: "COMBIEN DE PROTÉINES Y A-T-IL DANS 100G DE VOS CÉRÉALES ?",
      answer: "Nos céréales contiennent environ 15 à 20g de protéines pour 100g, soit 3 à 4 fois plus que les céréales traditionnelles. Cela en fait un excellent choix pour augmenter votre apport protéique quotidien."
    },
    {
      id: 12,
      question: "COMMENT CARACTÉRISEZ-VOUS LA QUALITÉ DES INGRÉDIENTS UTILISÉS ?",
      answer: "Nous sélectionnons rigoureusement nos ingrédients en privilégiant la qualité premium. Nos protéines sont de haute valeur biologique, nos édulcorants sont naturels et tous nos ingrédients respectent des standards de qualité élevés."
    }
  ];
  const NUTRIENTS_DATA = [
    {
      id: 1,
      number: "1",
      title: "High Protein",
      description: "12g of plant protein per bowl",
      color: "var(--green-app)", 
    },
    {
      id: 2,
      number: "2", 
      title: "LOW CARB",
      description: "Only 7-8g of net carbs per bowl",
      color: "var(--brown-app)",
    },
    {
      id: 3,
      number: "3",
      title: "NO ADDED SUGAR", 
      description: "0g sugar – sweetened naturally",
      color: "var(--yellow-app)"
    },
    {
      id: 4,
      number: "4",
      title: "Childhood taste", 
      description: "Childhood taste with a grown-up reboot",
      color: "var(--orange-app)"
    }
  ];
  const INGREDIENTS_DATA = [
    {
      id: 1,
      name: "SOY PROTEIN",
      image: "/images/soy-beans.jpg", // Light beige/cream colored soy beans
      description: "High-quality plant-based protein source providing all essential amino acids. ",
     
    },
    {
      id: 2,
      name: "CACAO",
      image: "/images/cocao-powder.jpg", // Dark brown cacao powder
      description: "Pure, premium cacao powder sourced from sustainable farms. ",
     
    },
    {
      id: 3,
      name: "AGAVE SYRUP",
      image: "/images/orange-texture.jpg", // Golden/amber colored syrup
      description: "Natural sweetener derived from agave plants with a lower glycemic index than traditional sugar. ",
      
    },
    {
      id: 4,
      name: "CHICORY INULIN",
      image: "/images/barley-seeds.jpg", // Light brown granular texture
      description: "Prebiotic fiber extracted from chicory root that supports digestive health. ",
      
    }
  ];
  const PACKS = [
    { id: "4", image: "/images/m-and-ms-pack.png", title: "4-BOX PACK", old_price: "68,00€", price: "34€", reduction: "-10%" },
    { id: "6", image: "/images/m-and-ms-pack.png", title: "6-BOX PACK", old_price: "68,00€", price: "49€", reduction: "-14%", desc: "Most popular" },
    { id: "8", image: "/images/m-and-ms-pack.png", title: "8-BOX PACK", old_price: "68,00€", price: "64€", reduction: "-20%" },
  ];
  const FLAVORS = [
    { key: "choco", name: "CHOCO BOOM", color: "bg-[#ffb1a6]", best_seller: true },
    { key: "cookies", name: "COOKIES & CREAM", color: "bg-[#bde0fe]", best_seller: true },
    { key: "peanut", name: "PEANUT CRAZY", color: "bg-[#ffd6a5]" },
    { key: "honey", name: "HONEY CRUNCH", color: "bg-[#caffbf]" },
  ];
  const MEMBERSHIP_FREQUENCIES = [
    { label: "Every 14 days", value: "14" },
    { label: "Every 30 days", value: "30" },
    { label: "Every 45 days", value: "45" },
    { label: "Every 60 days", value: "60" },
  ];
  const FAQ = [
    {
      q: "WHAT IS CRAVES?",
      a: "Sed iaculis at quam eget aliquet. Ut et diam nisl. Aliquam pharetra in libero in feugiat. Integer malesuada mauris risus, ut viverra mi bibendum ultricies. Etiam fringilla tristique lorem dapibus, in tempor purus elit et sagittis.",
    },
    {
      q: "IS IT REALLY HEALTHY?",
      a: "We rebuilt the cereal experience with fewer sugars and more goodness.",
    },
    {
      q: "DOES IT CONTAIN SUGAR?",
      a: "Each flavor is crafted to be delicious with sensible macros.",
    },
    {
      q: "WHY CHOOSE CRAVES OVER TRADITIONAL CEREALS?",
      a: "Cleaner ingredients, bold flavors, and flexible packs.",
    },
    {
      q: "SHIPPING",
      a: "Fast shipping worldwide. Free shipping for members on recurring orders.",
    },
  ];
  // Cereal box data
const CEREAL_BOX = [
  {
    id: 1,
    name: "CROOMIES",
    subtitle: "LOUD & LOVELY",
    image: "/api/placeholder/200/300",
    color: "bg-orange-500",
    textColor: "text-white"
  },
  {
    id: 2,
    name: "FRUITIOS",
    subtitle: "FRESH & FRUITY",
    image: "/api/placeholder/200/300",
    color: "bg-green-500",
    textColor: "text-white"
  },
  {
    id: 3,
    name: "CHOCOBITS",
    subtitle: "SWEET & CRUNCHY",
    image: "/api/placeholder/200/300",
    color: "bg-purple-500",
    textColor: "text-white"
  },
  {
    id: 4,
    name: "HONEYSQ",
    subtitle: "GOLDEN & SWEET",
    image: "/api/placeholder/200/300",
    color: "bg-yellow-500",
    textColor: "text-black"
  }
];

// Nutritional info cards data
const NUTRITIONAl_INFO = [
  { label: "11-12G", sublabel: "PROTEIN", bgcolor: "var(--yellow-app)", color: "var(--green-app)" },
  { label: "0G", sublabel: "SUGAR", bgcolor: "var(--rose-app)", color: "#722E19" },
  { label: "8-11G", sublabel: "NET CARBS", bgcolor: "#722E19", color: "var(--yellow-app)" },
  { label: "4", sublabel: "FLAVORS", bgcolor: "var(--green-app)", color: "var(--rose-app)" }
];

export {
    flavoursPack,
    benefits,
    SPOILERS,
    TESTIMONIALS,
    benefitsData,
    ROWS,
    REVIEWS,
    FAQS,
    NUTRIENTS_DATA,
    INGREDIENTS_DATA,
    PACKS,
    FLAVORS,
    MEMBERSHIP_FREQUENCIES,
    FAQ,
    CEREAL_BOX,
    NUTRITIONAl_INFO
}