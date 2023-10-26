export type AnimalType = {
  uid: string; //Animal unique ID
  name: string; //Animal name
  earthAnimal: boolean; //Whether it's an earth animal
  earthInsect: boolean; //Whether it's an earth insect
  avian: boolean; //Whether it's an avian
  canine: boolean; //Whether it's a canine
  feline: boolean; //Whether it's a feline
};

export type SearchType = {
  searchWord: string; //Search word
};
