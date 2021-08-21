export const raceExample = {
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

export const subRaceExample = {
  "index": "hill-dwarf",
  "name": "Hill Dwarf",
  "race": {
    "name": "Dwarf",
    "index": "dwarf",
    "url": "/api/races/dwarf",
  },
  "desc": "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
  "ability_bonuses": [
    {
      "ability_score": {
        "index": "wis",
        "name": "WIS",
        "url": "/api/ability-scores/wis"
      },
      "bonus": 1
    }
  ],
  "starting_proficiencies": [],
  "languages": [],
  "racial_traits": [
    {
      "name": "Dwarven Toughness",
      "index": "dwarven-toughness",
      "url": "/api/traits/stonecunning"
    }
  ],
  "url": "/api/subraces/hill-dwarf"
};

export const classExample = {
  "index": "warlock",
  "name": "Warlock",
  "hit_die": 8,
  "proficiency_choices": [
    {
      "choose": 2,
      "type": "proficiencies",
      "from": [
        {
          "index": "skill-arcana",
          "name": "Skill: Arcana",
          "url": "/api/proficiencies/skill-arcana"
        },
        {
          "index": "skill-deception",
          "name": "Skill: Deception",
          "url": "/api/proficiencies/skill-deception"
        },
        {
          "index": "skill-history",
          "name": "Skill: History",
          "url": "/api/proficiencies/skill-history"
        },
        {
          "index": "skill-intimidation",
          "name": "Skill: Intimidation",
          "url": "/api/proficiencies/skill-intimidation"
        },
        {
          "index": "skill-investigation",
          "name": "Skill: Investigation",
          "url": "/api/proficiencies/skill-investigation"
        },
        {
          "index": "skill-nature",
          "name": "Skill: Nature",
          "url": "/api/proficiencies/skill-nature"
        },
        {
          "index": "skill-religion",
          "name": "Skill: Religion",
          "url": "/api/proficiencies/skill-religion"
        }
      ]
    }
  ],
  "proficiencies": [
    {
      "index": "light-armor",
      "name": "Light armor",
      "url": "/api/proficiencies/light-armor"
    },
    {
      "index": "simple-weapons",
      "name": "Simple weapons",
      "url": "/api/proficiencies/simple-weapons"
    }
  ],
  "saving_throws": [
    {
      "index": "wis",
      "name": "WIS",
      "url": "/api/ability-scores/wis"
    },
    {
      "index": "cha",
      "name": "CHA",
      "url": "/api/ability-scores/cha"
    }
  ],
  "starting_equipment": [
    {
      "equipment": {
        "index": "dagger",
        "name": "Dagger",
        "url": "/api/equipment/dagger"
      },
      "quantity": 2
    },
    {
      "equipment": {
        "index": "leather",
        "name": "Leather",
        "url": "/api/equipment/leather"
      },
      "quantity": 1
    }
  ],
  "starting_equipment_options": [
    {
      "choose": 1,
      "type": "equipment",
      "from": [
        [
          {
            "equipment": {
              "index": "crossbow-light",
              "name": "Crossbow, light",
              "url": "/api/equipment/crossbow-light"
            },
            "quantity": 1
          },
          {
            "equipment": {
              "index": "crossbow-bolt",
              "name": "Crossbow bolt",
              "url": "/api/equipment/crossbow-bolt"
            },
            "quantity": 20
          }
        ],
        {
          "equipment_option": {
            "choose": 1,
            "type": "equipment",
            "from": {
              "equipment_category": {
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "url": "/api/equipment-categories/simple-weapons"
              }
            }
          }
        }
      ]
    },
    {
      "choose": 1,
      "type": "equipment",
      "from": [
        {
          "equipment": {
            "index": "component-pouch",
            "name": "Component pouch",
            "url": "/api/equipment/component-pouch"
          },
          "quantity": 1
        },
        {
          "equipment_option": {
            "choose": 1,
            "type": "equipment",
            "from": {
              "equipment_category": {
                "index": "arcane-foci",
                "name": "Arcane foci",
                "url": "/api/equipment-categories/arcane-foci"
              }
            }
          }
        }
      ]
    },
    {
      "choose": 1,
      "type": "equipment",
      "from": [
        {
          "equipment": {
            "index": "scholars-pack",
            "name": "Scholar's Pack",
            "url": "/api/equipment/scholars-pack"
          },
          "quantity": 1
        },
        {
          "equipment": {
            "index": "dungeoneers-pack",
            "name": "Dungeoneer's Pack",
            "url": "/api/equipment/dungeoneers-pack"
          },
          "quantity": 1
        }
      ]
    },
    {
      "choose": 1,
      "type": "equipment",
      "from": {
        "equipment_category": {
          "index": "simple-weapons",
          "name": "Simple Weapons",
          "url": "/api/equipment-categories/simple-weapons"
        }
      }
    }
  ],
  "class_levels": "/api/classes/warlock/levels",
  "multi_classing": {
    "prerequisites": [
      {
        "ability_score": {
          "index": "cha",
          "name": "CHA",
          "url": "/api/ability-scores/cha"
        },
        "minimum_score": 13
      }
    ],
    "proficiencies": [
      {
        "index": "light-armor",
        "name": "Light Armor",
        "url": "/api/proficiencies/light-armor"
      },
      {
        "index": "simple-weapons",
        "name": "Simple Weapons",
        "url": "/api/proficiencies/simple-weapons"
      }
    ]
  },
  "subclasses": [
    {
      "index": "fiend",
      "name": "Fiend",
      "url": "/api/subclasses/fiend"
    }
  ],
  "spellcasting": {
    "level": 1,
    "spellcasting_ability": {
      "index": "cha",
      "name": "CHA",
      "url": "/api/ability-scores/cha"
    },
    "info": [
      {
        "name": "Cantrips",
        "desc": [
          "You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table."
        ]
      },
      {
        "name": "Spell Slots",
        "desc": [
          "The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
          "For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell."
        ]
      },
      {
        "name": "Spells Known of 1st Level and Higher",
        "desc": [
          "At 1st level, you know two 1st-level spells of your choice from the warlock spell list.",
          "The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. ",
          "A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
          "Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots."
        ]
      },
      {
        "name": "Spellcasting Ability",
        "desc": [
          "Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one."
        ]
      },
      {
        "name": "Spellcasting Focus",
        "desc": [
          "You can use an arcane focus as a spellcasting focus for your warlock spells."
        ]
      }
    ]
  },
  "spells": "/api/classes/warlock/spells",
  "url": "/api/classes/warlock"
}

export const subClassExample = {
  "index": "devotion",
  "class": {
    "index": "paladin",
    "name": "Paladin",
    "url": "/api/classes/paladin"
  },
  "name": "Devotion",
  "subclass_flavor": "Sacred Oath",
  "desc": [
    "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels--the perfect servants of good--as their ideals, and incorporate images of angelic wings into their helmets or coats of arms."
  ],
  "spells": [
    {
      "prerequisites": [
        {
          "index": "paladin-3",
          "type": "level",
          "name": "Paladin 3",
          "url": "/api/classes/paladin/levels/3"
        }
      ],
      "spell": {
        "index": "protection-from-evil-and-good",
        "name": "Protection from Evil and Good",
        "url": "/api/spells/protection-from-evil-and-good"
      }
    },
    {
      "prerequisites": [
        {
          "index": "paladin-3",
          "type": "level",
          "name": "Paladin 3",
          "url": "/api/classes/paladin/levels/3"
        }
      ],
      "spell": {
        "index": "sanctuary",
        "name": "Sanctuary",
        "url": "/api/spells/sanctuary"
      }
    },
    {
      "prerequisites": [
        {
          "index": "paladin-5",
          "type": "level",
          "name": "Paladin 5",
          "url": "/api/classes/paladin/levels/5"
        }
      ],
      "spell": {
        "index": "lesser-restoration",
        "name": "Lesser Restoration",
        "url": "/api/spells/lesser-restoration"
      }
    },
    {
      "prerequisites": [
        {
          "index": "paladin-5",
          "type": "level",
          "name": "Paladin 5",
          "url": "/api/classes/paladin/levels/5"
        }
      ],
      "spell": {
        "index": "zone-of-truth",
        "name": "Zone of Truth",
        "url": "/api/spells/zone-of-truth"
      }
    },
    {
      "prerequisites": [
        {
          "index": "paladin-9",
          "type": "level",
          "name": "Paladin 9",
          "url": "/api/classes/paladin/levels/9"
        }
      ],
      "spell": {
        "index": "beacon-of-hope",
        "name": "Beacon of Hope",
        "url": "/api/spells/beacon-of-hope"
      }
    },
    {
      "prerequisites": [
        {
          "index": "paladin-9",
          "type": "level",
          "name": "Paladin 9",
          "url": "/api/classes/paladin/levels/9"
        }
      ],
      "spell": {
        "index": "dispel-magic",
        "name": "Dispel Magic",
        "url": "/api/spells/dispel-magic"
      }
    },
    {
      "prerequisites": [
        {
          "index": "paladin-13",
          "type": "level",
          "name": "Paladin 13",
          "url": "/api/classes/paladin/levels/13"
        }
      ],
      "spell": {
        "index": "freedom-of-movement",
        "name": "Freedom of Movement",
        "url": "/api/spells/freedom-of-movement"
      }
    },
    {
      "prerequisites": [
        {
          "index": "paladin-17",
          "type": "level",
          "name": "Paladin 17",
          "url": "/api/classes/paladin/levels/17"
        }
      ],
      "spell": {
        "index": "commune",
        "name": "Commune",
        "url": "/api/spells/commune"
      }
    },
    {
      "prerequisites": [
        {
          "index": "paladin-17",
          "type": "level",
          "name": "Paladin 17",
          "url": "/api/classes/paladin/levels/17"
        }
      ],
      "spell": {
        "index": "flame-strike",
        "name": "Flame Strike",
        "url": "/api/spells/flame-strike"
      }
    }
  ],
  "subclass_levels": "/api/subclasses/devotion/levels",
  "url": "/api/subclasses/devotion"
};

export const backgroundsExample = {
  "index": "acolyte",
  "name": "Acolyte",
  "starting_proficiencies": [
      {
          "index": "skill-insight",
          "name": "Skill: Insight",
          "url": "/api/proficiencies/skill-insight"
      },
      {
          "index": "skill-religion",
          "name": "Skill: Religion",
          "url": "/api/proficiencies/skill-religion"
      }
  ],
  "language_options": {
      "from": [
          {
              "index": "common",
              "name": "Common",
              "url": "/api/languages/common"
          },
          {
              "index": "dwarvish",
              "name": "Dwarvish",
              "url": "/api/languages/dwarvish"
          },
          {
              "index": "elvish",
              "name": "Elvish",
              "url": "/api/languages/elvish"
          },
          {
              "index": "giant",
              "name": "Giant",
              "url": "/api/languages/giant"
          },
          {
              "index": "gnomish",
              "name": "Gnomish",
              "url": "/api/languages/gnomish"
          },
          {
              "index": "goblin",
              "name": "Goblin",
              "url": "/api/languages/goblin"
          },
          {
              "index": "halfling",
              "name": "Halfling",
              "url": "/api/languages/halfling"
          },
          {
              "index": "orc",
              "name": "Orc",
              "url": "/api/languages/orc"
          },
          {
              "index": "abyssal",
              "name": "Abyssal",
              "url": "/api/languages/abyssal"
          },
          {
              "index": "celestial",
              "name": "Celestial",
              "url": "/api/languages/celestial"
          },
          {
              "index": "draconic",
              "name": "Draconic",
              "url": "/api/languages/draconic"
          },
          {
              "index": "deep-speech",
              "name": "Deep Speech",
              "url": "/api/languages/deep-speech"
          },
          {
              "index": "infernal",
              "name": "Infernal",
              "url": "/api/languages/infernal"
          },
          {
              "index": "primordial",
              "name": "Primordial",
              "url": "/api/languages/primordial"
          },
          {
              "index": "sylvan",
              "name": "Sylvan",
              "url": "/api/languages/sylvan"
          },
          {
              "index": "undercommon",
              "name": "Undercommon",
              "url": "/api/languages/undercommon"
          }
      ],
      "choose": 2,
      "type": "languages"
  },
  "starting_equipment": [
      {
          "equipment": {
              "index": "clothes-common",
              "name": "Clothes, common",
              "url": "/api/equipment/clothes-common"
          },
          "quantity": 1
      },
      {
          "equipment": {
              "index": "pouch",
              "name": "Pouch",
              "url": "/api/equipment/pouch"
          },
          "quantity": 1
      }
  ],
  "starting_equipment_options": [
      {
          "choose": 1,
          "type": "equipment",
          "from": [
              {
                  "equipment_category": {
                      "index": "holy-symbols",
                      "name": "Holy Symbols",
                      "url": "/api/equipment-categories/holy-symbols"
                  }
              }
          ]
      }
  ],
  "feature": {
      "desc": [
          "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.",
          "You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
      ],
      "name": "Shelter of the Faithful"
  },
  "personality_traits": {
      "from": [
          "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
          "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
          "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
          "Nothing can shake my optimistic attitude.",
          "I quote (or misquote) sacred texts and proverbs in almost every situation.",
          "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
          "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
          "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
      ],
      "choose": 2,
      "type": "personality_traits"
  },
  "ideals": {
      "from": [
          {
              "desc": "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.",
              "alignments": [
                  {
                      "index": "lawful-good",
                      "name": "Lawful Good",
                      "url": "api/alignments/lawful-good"
                  },
                  {
                      "index": "lawful-neutral",
                      "name": "Lawful Neutral",
                      "url": "api/alignments/lawful-neutral"
                  },
                  {
                      "index": "lawful-evil",
                      "name": "Lawful Evil",
                      "url": "api/alignments/lawful-evil"
                  }
              ]
          },
          {
              "desc": "Charity. I always try to help those in need, no matter what the personal cost.",
              "alignments": [
                  {
                      "index": "lawful-good",
                      "name": "Lawful Good",
                      "url": "api/alignments/lawful-good"
                  },
                  {
                      "index": "neutral-good",
                      "name": "Neutral Good",
                      "url": "api/alignments/neutral-good"
                  },
                  {
                      "index": "chaotic-good",
                      "name": "Chaotic Good",
                      "url": "api/alignments/chaotic-good"
                  }
              ]
          },
          {
              "desc": "Change. We must help bring about the changes the gods are constantly working in the world.",
              "alignments": [
                  {
                      "index": "chaotic-good",
                      "name": "Chaotic Good",
                      "url": "api/alignments/chaotic-good"
                  },
                  {
                      "index": "chaotic-neutral",
                      "name": "Chaotic Neutral",
                      "url": "api/alignments/chaotic-neutral"
                  },
                  {
                      "index": "chaotic-evil",
                      "name": "Chaotic Evil",
                      "url": "api/alignments/chaotic-evil"
                  }
              ]
          },
          {
              "desc": "Power. I hope to one day rise to the top of my faith's religious hierarchy.",
              "alignments": [
                  {
                      "index": "lawful-good",
                      "name": "Lawful Good",
                      "url": "api/alignments/lawful-good"
                  },
                  {
                      "index": "lawful-neutral",
                      "name": "Lawful Neutral",
                      "url": "api/alignments/lawful-neutral"
                  },
                  {
                      "index": "lawful-evil",
                      "name": "Lawful Evil",
                      "url": "api/alignments/lawful-evil"
                  }
              ]
          },
          {
              "desc": "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.",
              "alignments": [
                  {
                      "index": "lawful-good",
                      "name": "Lawful Good",
                      "url": "api/alignments/lawful-good"
                  },
                  {
                      "index": "lawful-neutral",
                      "name": "Lawful Neutral",
                      "url": "api/alignments/lawful-neutral"
                  },
                  {
                      "index": "lawful-evil",
                      "name": "Lawful Evil",
                      "url": "api/alignments/lawful-evil"
                  }
              ]
          },
          {
              "desc": "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings.",
              "alignments": [
                  {
                      "index": "lawful-good",
                      "name": "Lawful Good",
                      "url": "api/alignments/lawful-good"
                  },
                  {
                      "index": "neutral-good",
                      "name": "Neutral Good",
                      "url": "api/alignments/neutral-good"
                  },
                  {
                      "index": "chaotic-good",
                      "name": "Chaotic Good",
                      "url": "api/alignments/chaotic-good"
                  },
                  {
                      "index": "lawful-neutral",
                      "name": "Lawful Neutral",
                      "url": "api/alignments/lawful-neutral"
                  },
                  {
                      "index": "neutral",
                      "name": "Neutral",
                      "url": "api/alignments/neutral"
                  },
                  {
                      "index": "chaotic-neutral",
                      "name": "Chaotic Neutral",
                      "url": "api/alignments/chaotic-neutral"
                  },
                  {
                      "index": "lawful-evil",
                      "name": "Lawful Evil",
                      "url": "api/alignments/lawful-evil"
                  },
                  {
                      "index": "neutral-evil",
                      "name": "Neutral Evil",
                      "url": "api/alignments/neutral-evil"
                  },
                  {
                      "index": "chaotic-evil",
                      "name": "Chaotic Evil",
                      "url": "api/alignments/chaotic-evil"
                  }
              ]
          }
      ],
      "choose": 1,
      "type": "ideals"
  },
  "bonds": {
      "from": [
          "I would die to recover an ancient relic of my faith that was lost long ago.",
          "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
          "I owe my life to the priest who took me in when my parents died.",
          "Everything I do is for the common people.",
          "I will do anything to protect the temple where I served.",
          "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
      ],
      "choose": 1,
      "type": "bonds"
  },
  "flaws": {
      "from": [
          "I judge others harshly, and myself even more severely.",
          "I put too much trust in those who wield power within my temple's hierarchy.",
          "My piety sometimes leads me to blindly trust those that profess faith in my god.",
          "I am inflexible in my thinking.",
          "I am suspicious of strangers and expect the worst of them.",
          "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
      ],
      "choose": 1,
      "type": "flaws"
  }
}