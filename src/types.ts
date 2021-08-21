export interface Race {
  index: string;
  name: string;
  speed: number;
  ability_bonuses: AbilityBonus[];
  alignment: string;
  age: string;
  size:string;
  size_description: string;
  starting_proficiencies: CommonModel[];
  starting_proficiency_options: {
    choose: number;
    type: string;
    from: CommonModel[];
  };
  languages: CommonModel[];
  language_desc: string;
  traits: CommonModel[];
  subraces: CommonModel[];
  url: string;
}

export interface SubRace {
  index: string;
  name: string;
  race: CommonModel;
  desc: string;
  ability_bonuses: AbilityBonus[];
  starting_proficiencies: CommonModel[];
  languages: CommonModel[];
  racial_traits: CommonModel[];
  url: string;
}

export interface Class {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: [
    {
      choose: number;
      type: string;
      from: CommonModel[];
    }
  ];
  proficiencies: CommonModel[];
  saving_throws: CommonModel[];
  starting_equipment: StartingEquipment[];
  starting_equipment_options: StartingEquipmentOptions[];
  class_levels: string;
  multi_classing: {
    prerequisites: [
      {
        ability_score: CommonModel;
        minimum_score: number;
      }
    ];
    proficiencies: CommonModel[];
  };
  subclasses: CommonModel[];
  spellcasting: {
    level: number;
    spellcasting_ability: CommonModel;
    info: [
      {
        name: string;
        desc: string[];
      }
    ]
  };
  spells: string;
  url: string;
}

export interface SubClass {
  index: string;
  class: CommonModel;
  name: string;
  subclass_flavor: string;
  desc: string[];
  spells: Spells[];
  subclass_levels: string;
  url: string;
}

export interface Backgrounds {
  index: string;
  name: string;
  starting_proficiencies: CommonModel[];
  language_options: LanguageOptions;
  starting_equipment: StartingEquipment[];
  starting_equipment_options: StartingEquipmentOptions[];
  feature: {
    desc: string[];
    name: string;
  };
  personality_traits: PersonalityTraits;
  ideals: Ideals;
  bonds: Bonds;
  flaws: Flaws;
}


// At some point would be good to re-type these to hold the specific traits they can be...
export interface CommonModel {
  url: string;
  index:string;
  name: string;
}

export interface Spells {
  prerequisites: [
    {
      index: string;
      type: string;
      name: string;
      url: string;
    }
  ];
  spell: CommonModel;
}
export interface AbilityBonus {
  ability_score: CommonModel;
  bonus: number;
}

export interface StartingEquipment {
  equipment: CommonModel;
  quantity: number;
}

export interface StartingEquipmentOptions {
  choose: number;
  type: "equipment";
  from: [
    StartingEquipment[],
    StartingEquipmentOptions,
  ]
}

export interface LanguageOptions {
  from: CommonModel[];
  choose: number;
  type: 'languages';
}

export interface Bonds {
  from: CommonModel[];
  choose: number;
  type: 'bonds';
}

export interface Flaws {
  from: CommonModel[];
  choose: number;
  type: 'flaws';
}

export interface Ideals {
  from: [
    {
      desc: string
      alignments: CommonModel[];
    }
  ];
  choose: number;
  type: 'ideals';
};

export interface PersonalityTraits {
  from: string[];
  choose: number;
  type: 'personality_traits'
};

export interface FormInputs {
  race: string;
  subRace: string;
  class: string;
  subClass: string;
}

export interface APIReference {
  index: string;
  name: string;
}