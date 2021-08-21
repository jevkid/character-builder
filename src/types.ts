export interface Race {
  index: string;
  name: string;
  speed: number;
  ability_bonuses: [
    {
      bonus: number
      ability_score: CommonModel;
    }
  ],
  alignment: string;
  age: string;
  size:string;
  size_description: string;
  starting_proficiencies: CommonModel[],
  starting_proficiency_options: {
    choose: number;
    type: string;
    from: CommonModel[]
  },
  languages: CommonModel[],
  language_desc: string;
  traits: CommonModel[],
  subraces: CommonModel[],
  url: string;
}

export interface Class {
  //
}

export interface SubRace {
  //
}

export interface SubClass {
  //
}

export interface CommonModel {
  url: string;
  index:string;
  name: string;
}