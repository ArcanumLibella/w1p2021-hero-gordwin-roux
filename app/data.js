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
      title: "Quel cruel dilemme...",
      actions: [
        {
          label: "Tu préfères prendre l'autoroute ?",
          image: require("/assets/images/roadtrip33.jpg"),
          to: 5,
          object: "Porte-monnaie"
        },
        {
          label: "Ou tu préfères prendre les routes de campagne ?",
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
      title: "C'était la mère de bambi :( !",
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
      title: "Veux tu prendre de l'essence ?",
      actions: [
        {
          label: "Oui",
          to: 9
        },
        {
          label: "Non",
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
          to: 801
        },
        {
          label: "Attendre le dépanneur",
          to: 802
        }
      ]
    },
    {
      id: 801,
      title: "Mauvaise idée de trainer seul dans les bois...",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip5.png"),
          to: "/"
        }
      ]
    },
    {
      id: 802,
      title: "Hey ! Le temps c'est de l'argent !",
      actions: [
        {
          label: "YOU LOSE",
          to: "/"
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
      title: "Il serait peut être temps de faire une pause...",
      actions: [
        {
          label: "S'arrêter au point de vue ?",
          to: 1001
        },
        {
          label: "Ou s'arrêter sur le bord de la route ?",
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
      title: "Veux tu prendre cet autostoppeur ?",
      actions: [
        {
          label: "Oui",
          image: require("/assets/images/roadtrip18.png"),
          to: 13
        },
        {
          label: "Non",
          image: require("/assets/images/roadtrip18.png"),
          to: 12
        }
      ]
    },
    {
      id: 13,
      title: "Il te demande si tu aurais pas un carambar sur toi...",
      actions: [
        {
          label: "Biensûr !",
          image: require("/assets/images/roadtrip35.png"),
          to: 16,
          object: "Carambar"
        },
        {
          label: "Désolé, pas cette fois...",
          image: require("/assets/images/roadtrip35.png"),
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
          to: "/"
        }
      ]
    },
    {
      id: 14,
      title: "C'est pas cool + calcul",
      actions: [
        {
          label: "Validation du calcul",
          to: 1401
        }
      ]
    },
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
          label: "Pénalité de temps",
          image: require("/assets/images/roadtrip26.gif"),
          to: 19
        }
      ]
    },
    {
      id: 17,
      title: "Belle forêt",
      actions: [
        {
          label: "Attendre un peu",
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
          to: "/"
        }
      ]
    },
    {
      id: 18,
      title: "Magnifique plage",
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
      title: "Te voilà bien reposé, tu peux reprendre la route",
      actions: [
        {
          label: "Cette route a l'air sûre !",
          image: require("/assets/images/roadtrip37.jpg"),
          to: 1901
        },
        {
          label: "Non merci, j'ai un GPS",
          to: 1903,
          object: "GPS"
        },
        {
          label: "Vieux chelou",
          image: require("/assets/images/roadtrip34.jpg"),
          to: 20
        }
      ]
    },
    {
      id: 1903,
      title: "Chute falaise",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip4.jpg"),
          to: "/"
        }
      ]
    },
    {
      id: 1901,
      title: "Tronc d'arbre",
      actions: [
        {
          label: "Ouf, j'ai une tronçonneuse !",
          image: require("/assets/images/roadtrip38.jpg"),
          to: 21,
          object: "Tronçonneuse",
          power: "Force surhumaine"
        },
        {
          label: "Pas de tronçonneuse",
          image: require("/assets/images/roadtrip19.png"),
          to: 19011
        }
      ]
    },
    {
      id: 19011,
      title: "Dommage pour toi",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip19.png"),
          to: "/"
        }
      ]
    },
    {
      id: 20,
      title: "Raccourcie",
      actions: [
        {
          label: "Heureusement qu'il était là !",
          image: require("/assets/images/roadtrip34.jpg"),
          to: 21
        }
      ]
    },
    {
      id: 21,
      title: "Montagne",
      actions: [
        {
          label: "Transhumance",
          image: require("/assets/images/roadtrip21.jpg"),
          to: 22
        }
      ]
    },
    {
      id: 22,
      title: "Bouchon moutons",
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
          label: "Petite pause gouter",
          image: require("/assets/images/roadtrip40.jpeg"),
          to: 24
        },
        {
          label: "Ca a l'air plutôt joli par là !",
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
          to: "/"
        }
      ]
    },
    {
      id: 24,
      title: "Flics",
      actions: [
        {
          label: "Contrôle papiers du véhicule",
          image: require("/assets/images/roadtrip25.jpg"),
          to: 25
        }
      ]
    },
    {
      id: 25,
      title: "Flics",
      actions: [
        {
          label: "Oui je les ai pris !",
          to: 27,
          object: "Papiers du véhicule"
        },
        {
          label: "Non",
          to: 2501
        }
      ]
    },
    {
      id: 2501,
      title: "Réglement à l'amiable",
      actions: [
        {
          label: "Payer un pot de vin !",
          image: require("/assets/images/roadtrip28.jpg"),
          to: 27,
          object: "Pot de vin",
          power: "Charme légendaire"
        },
        {
          label: "Non",
          image: require("/assets/images/roadtrip28.jpg"),
          to: 25012
        }
      ]
    },
    {
      id: 25012,
      title: "Toujours prévoir un pot de vin",
      actions: [
        {
          label: "YOU LOSE !",
          image: require("/assets/images/roadtrip28.jpg"),
          to: "/"
        }
      ]
    },
    {
      id: 26,
      title: "Ca sert toujours d'avoir un pot de vin",
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
      title: "Beau paysage",
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
      title: "Pneu crevé",
      actions: [
        {
          label: "Ouf j'ai un crick",
          to: 2802,
          object: "Crick"
        },
        {
          label: "Pas de crick",
          image: require("/assets/images/roadtrip7.jpg"),
          to: 2801
        }
      ]
    },
    {
      id: 2801,
      title: "Vous n'êtes pas équipé",
      actions: [
        {
          label: "YOU LOSE",
          image: require("/assets/images/roadtrip7.jpg"),
          to: "/"
        }
      ]
    },
    {
      id: 2802,
      title: "Vous êtes suréquipé !",
      actions: [
        {
          label: "Continuer",
          to: 29
        }
      ]
    },
    {
      id: 29,
      title: "Paysage sans indice",
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
      title: "QUESTIONNAIRE",
      actions: [
        {
          label: "On va voir si tu as été observateur...",
          to: 31
        }
      ]
    },
    {
      id: 31,
      title: "Questions...",
      actions: [
        {
          label: "...",
          to: 31
        }
      ]
    }
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