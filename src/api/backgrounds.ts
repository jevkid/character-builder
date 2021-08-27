// Origins
export const parents = {
  dice: 100,
  knowledge: [
    {
      index: 'known',
      name: 'You know who your parents are.'
    },
    {
      index: 'unknown',
      name: 'You don\'t know who your parents are.',
    },
    {
      index: 'na',
      name: 'You don\'t care who your parents are.',
    }
  ],
  race: {
    'half-elf': {
      dice: 8,
      race: [
        {
          index: 'elf-human',
          name: 'One of your parents was human, while the other was an elf.'
        },
        {
          index: 'elf-half-elf',
          name: 'One of your parents was an elf, while the other was half-elf.'
        },
        {
          index: 'half-elf-human',
          name: 'One of your parents was human, while the other was half-elf.'
        },
        {
          index: 'half-half',
          name: 'Both of your parent were half-elves'
        }
      ],
    },
    'half-orc': {
      dice: 8,
      race: [
        {
          index: 'orc-human',
          name: 'One of your parents was human, while the other was an orc.'
        },
        {
          index: 'orc-half-orc',
          name: 'One of your parents was an orc, while the other was half-orc.'
        },
        {
          index: 'half-orc-human',
          name: 'One of your parents was human, while the other was half-orc.'
        },
        {
          index: 'half-half',
          name: 'Both of your parent were half-orcs'
        }
      ],
    },
    tiefling: {
      dice: 8,
      race: [
        {
          index: 'human',
          name: 'Both of you parents were human- you must have some tiefling ancestry in your blood.'
        },
        {
          index: 'human-tiefling',
          name: 'One of your parents was human while the other was tiefling.'
        },
        {
          index: 'tiefling-devil',
          name: 'One of your parents was a devil while the other was tiefling.'
        },
        {
          index: 'human-devil',
          name: 'One of your parents was a devil while the other was human.'
        },
      ],
    },
  }
};

export const birthplace = {

};

export const siblings = {

};

export const familyFriends = {

};

export const backgroundInfo = {
  parents,
  siblings,
  familyFriends,
}