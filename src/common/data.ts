import { AnimalType } from './types';

const apiUrl = 'https://stapi.co/api/v1/rest/animal/search';

async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function searchAnimal(searchWord: string): Promise<AnimalType[]> {
  const apiData = await fetchData(apiUrl);
  const animalsArray = apiData.animals;
  if (searchWord.trim() === '') {
    return animalsArray;
  } else {
    const animal = await animalsArray.filter((animal: AnimalType) => {
      const condition = new RegExp(`.*${searchWord.toLowerCase()}.*`);
      return condition.test(animal.name.toLowerCase());
    });
    return animal;
  }
}
