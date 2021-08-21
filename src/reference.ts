export const race = {
  "index": "dwarf",
  "name": "Dwarf",
  "speed": 25,
  "ability_bonuses": [
    {
      "bonus": 2,
      "ability_score": {
        "name": "CON",
        "index": "con",
        "url": "/api/ability-scores/con"
      }
    }
  ],
  "alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
  "age": "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
  "size": "Medium",
  "size_description": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
  "starting_proficiencies": [
    {
      "name": "Battleaxes",
      "index": "battleaxes",
      "url": "/api/proficiencies/battleaxes"
    },
    {
      "name": "Handaxes",
      "index": "handaxes",
      "url": "/api/proficiencies/handaxes"
    },
    {
      "name": "Light hammers",
      "index": "light-hammers",
      "url": "/api/proficiencies/light-hammers"
    },
    {
      "name": "Warhammers",
      "index": "warhammers",
      "url": "/api/proficiencies/warhammers"
    }
  ],
  "starting_proficiency_options": {
    "choose": 1,
    "type": "proficiencies",
    "from": [
      {
        "name": "Smith's tools",
        "index": "smiths-tools",
        "url": "/api/proficiencies/smiths-tools"
      },
      {
        "name": "Brewer's supplies",
        "index": "brewers-supplies",
        "url": "/api/proficiencies/brewers-supplies",
      },
      {
        "name": "Mason's tools",
        "index": "masons-tools",
        "url": "/api/proficiencies/masons-tools"
      }
    ]
  },
  "languages": [
    {
      "name": "Common",
      "index": "common",
      "url": "/api/languages/common"
    },
    {
      "name": "Dwarvish",
      "index": "dwarvish",
      "url": "/api/languages/dwarvish"
    }
  ],
  "language_desc": "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
  "traits": [
    {
      "name": "Darkvision",
      "index": "darkvision",
      "url": "/api/traits/darkvision"
    },
    {
      "name": "Dwarven Resilience",
      "index": "dwarven-resilience",
      "url": "/api/traits/dwarven-resilience"
    },
    {
      "name": "Stonecunning",
      "index": "stonecunning",
      "url": "/api/traits/stonecunning"
    },
    {
      "name": "Dwarven Combat Training",
      "index": "dwarven-combat-training",
      "url": "/api/traits/dwarven-combat-training"
    }
  ],
  "subraces": [
    {
      "url": "/api/subraces/hill-dwarf",
      "index": "hill-dwarf",
      "name": "Hill Dwarf"
    }
  ],
  "url": "/api/races/dwarf"
};