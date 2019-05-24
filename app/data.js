export default {
  steps: [
    {
      id: 0,
      title: "C'est parti pour une grande aventure !",
      actions: [
        {
          label: "Commencer",
          image: require("/assets/images/roadtrip31.jpg"),
          to: 3
        }
      ]
    },
    {
      id: 3,
      title: "C'est parti pour une grande aventure !",
      actions: [
        {
          label: "Prendre l'autoroute !",
          image: require("/assets/images/roadtrip33.jpg"),
          to: 5,
          object: "Porte-monnaie"
        },
        {
          label: "Prendre les routes de campagne !",
          image: require("/assets/images/roadtrip10.jpg"),
          to: 5
        }
      ]
    },
    {
      id: 5,
      title: "Quel beau paysage !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip30.jpg"),
          to: 6
        }
      ]
    },
    {
      id: 6,
      title: "Oh ! Tu as renversé un animal !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip11.jpg"),
          to: 601
        }
      ]
    },
    {
      id: 601,
      title: "C'était la maman de Bambi :( !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip11.jpg"),
          to: 7
        }
      ]
    },
    {
      id: 7,
      title: "Veux-tu prendre de l'essence ?",
      actions: [
        {
          label: "Oui",
          image: require("/assets/images/roadtrip23.jpg"),
          to: 9
        },
        {
          label: "Non",
          image: require("/assets/images/roadtrip37.jpg"),
          to: 8
        }
      ]
    },
    {
      id: 8,
      title: "EN PANNE ! Faut pas t'étonner !",
      actions: [
        {
          label: "Aller chercher de l'essence à pied",
          image: require("/assets/images/roadtrip52.jpg"),
          to: 801
        },
        {
          label: "Attendre le dépanneur",
          image: require("/assets/images/roadtrip48.jpg"),
          to: 802
        }
      ]
    },
    {
      id: 801,
      title: "Mauvaise idée de trainer seul(e) dans les bois...",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip5.png"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 802,
      title: "Hey ! Le temps c'est de l'argent !",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip57.gif"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 9,
      title: "Cool, tu as eu un bon point !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip6.jpg"),
          to: 10
        }
      ]
    },
    {
      id: 10,
      title: "Il serait peut-être temps de faire une pause...",
      actions: [
        {
          label: "S'arrêter au point de vue ?",
          image: require("/assets/images/roadtrip50.jpg"),
          to: 1001
        },
        {
          label: "S'arrêter sur le bord de la route ?",
          image: require("/assets/images/roadtrip45.jpg"),
          to: 1002
        }
      ]
    },
    {
      id: 1001,
      title: "Quel magnifique point de vue !",
      actions: [
        {
          label: "Un groupe t'interpèle !",
          image: require("/assets/images/roadtrip12.jpg"),
          to: 10011
        }
      ]
    },
    {
      id: 1002,
      title: "La vue est pas mal ici aussi !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip12.jpg"),
          to: 11
        }
      ]
    },
    {
      id: 10011,
      title: "Bla bla bla... ces touristes alors !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip14.jpg"),
          to: 11
        }
      ]
    },
    {
      id: 11,
      title: "On the road again !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip30.jpg"),
          to: 12
        }
      ]
    },
    {
      id: 12,
      title: "Veux-tu prendre cet autostoppeur ?",
      actions: [
        {
          label: "Oui",
          image: require("/assets/images/roadtrip18.png"),
          to: 13
        },
        {
          label: "Non",
          image: require("/assets/images/roadtrip60.gif"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 13,
      title: "Il te demande si tu as un carambar sur toi...",
      actions: [
        {
          label: "Bien sûr !",
          image: require("/assets/images/roadtrip53.jpg"),
          to: 16,
          object: "Carambar"
        },
        {
          label: "Désolé, pas cette fois...",
          image: require("/assets/images/roadtrip53.jpg"),
          to: 1301
        }
      ]
    },
    {
      id: 1301,
      title: "Il faut toujours avoir un carambar avec soi !",
      actions: [
        {
          label: "YOU LOSE",
          to: "/lose/"
        }
      ]
    },
    // {
    //   id: 14,
    //   title: "C'est pas cool + calcul",
    //   actions: [
    //     {
    //       label: "Validation du calcul",
    //       to: 1401
    //     }
    //   ]
    // },
    {
      id: 16,
      title: "Tu commences à être fatigué(e)",
      actions: [
        {
          label: "Je peux tenir encore un peu...",
          image: require("/assets/images/roadtrip30.jpg"),
          to: 17
        },
        {
          label: "Ce motel a l'air plutôt cosy !",
          image: require("/assets/images/roadtrip26.gif"),
          to: 1601
        }
      ]
    },
    {
      id: 1601,
      title: "MOTEL",
      actions: [
        {
          label:
            "Assassiné(e) dans ton sommeil, le garçon de l'accueil était vraiment suspect...",
          image: require("/assets/images/roadtrip26.gif"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 17,
      title: "Et si je campais plutôt dans la forêt ?",
      actions: [
        {
          label: "Attendre encore un peu...",
          image: require("/assets/images/roadtrip30.jpg"),
          to: 18
        },
        {
          label: "Dormir dans la forêt",
          image: require("/assets/images/roadtrip36.jpg"),
          to: 1701
        }
      ]
    },
    {
      id: 1701,
      title: "Mais quelle mauvaise idée de dormir dans la forêt de Fangorn !",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip20.png"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 18,
      title:
        "Ahh j'ai bien fait d'attendre pour dormir ! Cette plage est magnifique !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip17.png"),
          to: 19
        }
      ]
    },
    {
      id: 19,
      title: "Te voilà bien reposé(e), tu peux reprendre la route",
      actions: [
        {
          label: "Cette route a l'air sûre !",
          image: require("/assets/images/roadtrip37.jpg"),
          to: 1901
        },
        {
          label: "Non merci, j'ai un GPS",
          to: 1903,
          image: require("/assets/images/roadtrip61.jpg"),
          object: "GPS"
        },
        {
          label: "Et si je demandais la route à ce vieux monsieur ?",
          image: require("/assets/images/roadtrip34.jpg"),
          to: 20
        }
      ]
    },
    {
      id: 1903,
      title: "Ne jamais se fier à un GPS !",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip4.jpg"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 1901,
      title: "Cette route n'était pas si sûre...",
      actions: [
        {
          label: "Ouf, j'ai toujours une tronçonneuse avec moi !",
          image: require("/assets/images/roadtrip38.jpg"),
          to: 21,
          object: "Tronçonneuse",
          power: "Force surhumaine"
        },
        {
          label: "Pas de tronçonneuse...",
          image: require("/assets/images/roadtrip19.png"),
          to: 19011
        }
      ]
    },
    {
      id: 19011,
      title: "Dommage pour toi !",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip19.png"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 20,
      title: "Heureusement qu'il était là !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip34.jpg"),
          to: 21
        }
      ]
    },
    {
      id: 21,
      title: "Passons par la montagne !",
      actions: [
        {
          label: "C'est la transhumance !",
          image: require("/assets/images/roadtrip44.jpg"),
          to: 22
        }
      ]
    },
    {
      id: 22,
      title: "Il y a comme un embouteillage...",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip8.jpg"),
          to: 23
        }
      ]
    },
    {
      id: 23,
      title: "Aire de pique-nique",
      actions: [
        {
          label: "Une petite pause goûter...et on reprend la route !",
          image: require("/assets/images/roadtrip40.jpeg"),
          to: 24
        },
        {
          label: "Ça a l'air plutôt joli par ici !",
          image: require("/assets/images/roadtrip39.jpeg"),
          to: 2301
        }
      ]
    },
    {
      id: 2301,
      title: "Attaque de zombie",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip32.jpg"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 24,
      title: "Contrôle de police !",
      actions: [
        {
          label: "Papiers du véhicule !",
          image: require("/assets/images/roadtrip25.jpg"),
          to: 25
        }
      ]
    },
    {
      id: 25,
      title: "Contrôle de police !",
      actions: [
        {
          label: "Oui j'ai toujours mes papiers sur moi !",
          to: 27,
          image: require("/assets/images/roadtrip62.jpg"),
          object: "Papiers du véhicule"
        },
        {
          label: "Oups, je les ai laissé à la maison...",
          image: require("/assets/images/roadtrip49.jpg"),
          to: 2501
        }
      ]
    },
    {
      id: 2501,
      title: "Nous pouvons, peut-être, faire un réglement à l'amiable ?",
      actions: [
        {
          label: "Payer un pot de vin",
          image: require("/assets/images/roadtrip28.jpg"),
          to: 26,
          object: "Pot de vin",
          power: "Charme légendaire"
        },
        {
          label: "Ce n'est pas mon genre ! Bande de ripoux !",
          image: require("/assets/images/roadtrip28.jpg"),
          to: 25012
        }
      ]
    },
    {
      id: 25012,
      title:
        "Alors nous allons être dans l'obligation d'immobiliser votre véhicule !",
      actions: [
        {
          label: "YOU LOSE !",
          image: require("/assets/images/roadtrip58.jpg"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 26,
      title: "Ça sert toujours d'avoir le bras long...",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip28.jpg"),
          to: 27
        }
      ]
    },
    {
      id: 27,
      title: "Reprenons la route...",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip22.jpg"),
          to: 28
        }
      ]
    },
    {
      id: 28,
      title: "Pneu crevé ! Il ne manquait plus que ça !!!",
      actions: [
        {
          label: "Ouf, j'ai un crick",
          image: require("/assets/images/roadtrip46.jpg"),
          to: 2802,
          object: "Crick"
        },
        {
          label: "Je savais que j'aurais dû le prendre !",
          image: require("/assets/images/roadtrip7.jpg"),
          to: 2801
        }
      ]
    },
    {
      id: 2801,
      title: "Vous n'êtes pas équipé(e) !",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip7.jpg"),
          to: "/lose/"
        }
      ]
    },
    {
      id: 2802,
      title: "La classe ! Vous êtes suréquipé(e) !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip51.jpg"),
          to: 29
        }
      ]
    },
    {
      id: 29,
      title: "Quel endroit paisible !",
      actions: [
        {
          label: "Continuer",
          image: require("/assets/images/roadtrip24.jpg"),
          to: 30
        }
      ]
    },
    {
      id: 30,
      title: "QUIZ CINÉMATOGRAPHIQUE",
      actions: [
        {
          label:
            "On va voir si tu as été observateur(trice) durant cette aventure !",
          image: require("/assets/images/roadtrip47.jpg"),
          to: "/Qcm"
        }
      ]
    }
    /*  {
      id: 31,
      title: "Questions...",
      actions: [
        {
          label: "...",
          to: 
        } 
      ]
    }*/
    // {
    //   id: 000,
    //   title: "YOU LOSE !",
    //   actions: [
    //     {
    //       label: "Restart",
    //       to: 0
    //     }
    //   ]
    // }
  ]
};
