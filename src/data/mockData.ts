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

export {
    flavoursPack,
    benefits,
    SPOILERS,
    TESTIMONIALS,
    benefitsData
}