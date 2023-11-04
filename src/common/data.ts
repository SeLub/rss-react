import { AnimalType } from './types';

export async function fetchData() {
  const response = await fetch('https://stapi.co/api/v1/rest/animal/search');
  const data = await response.json();
  return data;
}

export async function searchAnimalInAPI(
  searchWord: string
): Promise<AnimalType[]> {
  const apiData = await fetchData();
  const animalsArray = await apiData.animals;
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

export function storeSearchWordToLocalStorage(searchWord: string) {
  localStorage.setItem('searchWord', searchWord);
}

export function checkIfSearchWordPresentInLocalStorage() {
  const searchWord = localStorage.getItem('searchWord');
  if (searchWord) {
    return searchWord;
  } else {
    return '';
  }
}
