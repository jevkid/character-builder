export interface FormInputs {
  race: Races;
  subRace: string;
  class: Classes;
  subClass: string;
  abilityScores?: AbilityOptions;
  background?: {
    general: {
      alignment: Alignments;
      background: Backrounds;
    }
    parents?: {
      knowledge: 'known' | 'unknown' | 'na';
      race: string;
    },
    birthplace?: string;
    siblings?: {
      occupation?: string;
      alignment?: string;
      status?: string;
      relationship?: string;
      number?: string;
      birthOrder?: string;
      details?: string;
    };
  };
  details?: {
    name: string;
    gender: string;
    age: number;
  }
}

export interface BackgroundDetails {
  parents: ParentsBackground;
  background: GeneralBackground;
  siblings: any;
  familyFriends: any;
}

export interface ParentsBackground {
  dice: number;
  knowledge: APIReference[];
  race: Record<
  string,
  {
    dice: number;
    race: APIReference[];
  }
  >;
}

export interface GeneralBackground {
  alignment: APIReference[];
  background: APIReference[];
}

export interface GenericComponentProps {
  handleStepForward: () => void;
  handleStepBack: () => void;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  setModalData: (apiUrl: string, type: string) => void;
}

export interface SimpleComponentProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

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

export interface Background {
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
  ability_score: {
    name: AbilityOptionsShort;
    index: string;
    url: string;
  };
  bonus: number;
}

export type Races = 'dragonborn' | 'dwarf' | 'elf' | 'gnome' | 'half-elf' | 'half-orc' | 'halfling' | 'human' | 'tiefling' | '';

export type Classes = "barbarian" | "bard" | "cleric" | "druid" | "fighter" | "monk" | "paladin" | "ranger" | "rogue" | "sorcerer" | "warlock" | "wizard" | "";

export type AbilityOptionsShort = 'CON' | 'DEX' | 'STR' | 'INT' | 'WIS' | 'CHA';

export type AbilityOptions = {
  constitution: number;
  dexterity: number;
  strength: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export enum RaceEnum {
  dragonborn = 'Dragonborn',
  dwarf = 'Dwarf',
  elf = 'Elf',
  gnome = 'Gnome',
  'half-elf' = 'Half-Elf',
  'half-orc' = 'Half-Orc',
  halfling = 'Halfling',
  human = 'Human',
  tiefling = 'Tiefling',
}

export enum ClassEnum {
  barbarian = "Barbarian",
  bard = "Bard",
  cleric = "Cleric",
  druid = "Druid",
  fighter = "Fighter",
  monk = "Monk",
  paladin = "Paladin",
  ranger = "Ranger",
  rogue = "Rogue",
  sorcerer = "Sorcerer",
  warlock = "Warlock",
  wizard = "Wizard",
}

export enum AbilityMapEnum {
  CON = 'Constitution',
  DEX = 'Dexterity',
  STR = 'Strength',
  INT = 'Intelligence',
  WIS = 'Wisdom',
  CHA = 'Charisma',
}

export type Backrounds = 'acolyte' | 'charlatan' | 'criminal' | 'entertainer' | 'folk-hero' | 'guild-artisan' | 'hermit' | 'noble' | 'outlander' | 'sage' | 'sailor' | 'solider' | 'urchin' | '';

export enum BackgroundEnum {
  'acolyte' = 'Acolyte',
  'charlatan' = 'Charlatan',
  'criminal' = 'Criminal',
  'entertainer' = 'Entertainer',
  'folk-hero' = 'Folk hero',
  'guild-artisan' = 'Guild artisan',
  'hermit' = 'Hermit',
  'noble' = 'Noble',
  'outlander' = 'Outlander',
  'sage' = 'Sage',
  'sailor' = 'Sailor',
  'solider' = 'Soldier',
  'urchin' = 'Urchin'
}

export type Alignments = 'chaotic-evil' | 'lawful-evil' | 'neutral-evil' | 'neutral' | 'neutral-good' | 'lawful-good' | 'chaotic-good' | '';

export enum AlignmentEnum {
  'chaotic-evil' = 'Chaotic evil',
  'lawful-evil' = 'Lawful evil',
  'neutral-evil' = 'Neutral evil',
  'neutral' = 'Neutral',
  'neutral-good' = 'Neutral good',
  'lawful-good' = 'Lawful good',
  'chaotic-good' = 'Chaotic good',
}

export interface StartingEquipment {
  equipment: CommonModel;
  quantity: number;
}

export interface StartingEquipmentOptions {
  choose: number;
  type: "equipment";
  from: [
    {
      equipment: CommonModel;
      quantity: number;
    }
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

export interface APIReference {
  index: string;
  name: string;
}

export interface ModalTypes {
  race?: RaceModal;
  class?: ClassModal;
}

export interface ClassModal {
  class_levels: {
    index: 'class_levels';
    model: [
      {
        level: number;
        ability_score_bonuses: number;
        prof_bonus: number;
        features: CommonModel[];
        class_specific: {
          rage_count?: number;
          rage_damage_bonus?: number;
          brutal_critical_dice?: number;
        };
        index: string;
        class: CommonModel;
        url: string;
      }
    ]
  };
  multi_classing?: {
    prerequisities: [{
      ability_score: CommonModel;
      minimum_score: number;
    }];
    proficiences: CommonModel[];
  }
}

export interface RaceModalTypes {
  name: string;
  index: string;
  url?: string;
  desc?: string[] | string;
  proficiences?: CommonModel[];
  races: CommonModel[];
  subraces: CommonModel[];
  trait_specific: {
    subtrait_options: {
      choose: number;
      from: CommonModel[];
      type: string;
    }
  };
  reference: CommonModel;
  references:CommonModel[];
  typical_speakers: string[];
  script: string;
  category_range?: string;
  cost?: {
    quantity: number;
    unit: string;
  };
  damage?: {
    damage_dice: string;
    damage_type: CommonModel;
  }
  equipment_category?: CommonModel;
  properties?: CommonModel[];
  range?: {
    normal: number | null;
    long: number | null;
  }
  two_handed_damage?: {
    damage_dice: string;
    damage_type: CommonModel;
  };
  weapon_category?: string;
  weapon_range?: string;
  weight?: number;
}

export interface RaceModal {
  ability_bonuses?: {
    index: 'ability_bonus';
    model: {
      ability_score: CommonModel[];
      bonus: number;
    };
    additionalApi: true;
    additionalApiModel: {
      ability_bonuses: [{
        index: string;
        name: string;
        full_name: string
        desc: string[];
        skills: CommonModel[];
        url: string;
      }];
    }
  };
  ability_bonus_options?: {
    index: 'ability_bonus_options';
    model: {
      choose: number;
      from: CommonModel[];
      type: 'ability_bonuses';
    };
    additionalApi: true;
    additionalApiModel: {
      ability_bonuses: [{
        index: string;
        name: string;
        full_name: string
        desc: string[];
        skills: CommonModel[];
        url: string;
      }];
    }
  };
  traits?: {
    index: 'traits';
    model: CommonModel[];
    additionalApi: true;
    additionalApiModel: {
      index: string;
      races: CommonModel[];
      subraces: CommonModel[];
      name: string;
      desc: string[];
      proficiencies: CommonModel[];
      trait_specific: {
        subtrait_options: {
          choose: number;
          from: CommonModel[];
          type: 'trait';
        }
      };
      url: string;
    }
  };
  languages?: {
    index: 'languages';
    model: CommonModel[];
    additionalApi: true;
    additionalApiModel: {
      index: string;
      name: string;
      desc: string;
      type: string;
      typical_speakers: string[];
      script: string;
      url: string;
    }
  };
  language_options?: {
    index: 'language_options';
    model: {
      choose: number;
      from: CommonModel[];
      type: 'languages';
    };
    additionalApi: true;
    additionalApiModel: {
      index: string;
      name: string;
      desc: string;
      type: string;
      typical_speakers: string[];
      script: string;
      url: string;
    }
  };
  starting_proficiences: {
    index: 'starting_proficiences';
    model: CommonModel[];
    additionalApi: true;
    additionalApiModel: {
      index: string;
      type: string;
      classes: CommonModel[];
      races: CommonModel[];
      name: string;
      reference: CommonModel;
      references:CommonModel[];
      url: string;
    }
  };
  starting_proficiency_options: {
    index: 'starting_proficiency_options';
    model: {
      choose: number;
      from: CommonModel[];
      type: 'proficiences';
      additionalApi: true;
      additionalApiModel: {
        index: string;
        type: string;
        classes: CommonModel[];
        races: CommonModel[];
        name: string;
        reference: CommonModel;
        references:CommonModel[];
        url: string;
      }
    }
  };
}