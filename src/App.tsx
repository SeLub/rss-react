import { Component } from 'react';
import Display from './Dispaly';
import { AnimalType, StateType } from './common/types';
import {
  searchAnimalInAPI,
  checkIfSearchWordPresentInLocalStorage,
  storeSearchWordToLocalStorage,
} from './common/data';
import SearchBar from './Search';

const searchWord = checkIfSearchWordPresentInLocalStorage();
const animalsList = await searchAnimalInAPI(searchWord);
class App extends Component<AnimalType[], StateType> {
  constructor(props: AnimalType[]) {
    super(props);
    this.state = { animalsList, searchWord };
  }

  getAnimalsList = async (searchWord: string) => {
    const animals = (await searchAnimalInAPI(searchWord)) as AnimalType[];
    return animals;
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchWord = event.target.elements.search.value;
    storeSearchWordToLocalStorage(searchWord);
    this.setState({ searchWord: searchWord });
    const animals = await this.getAnimalsList(searchWord);
    this.setState({ animalsList: animals });
  };

  render() {
    console.log('!!!!!!!!!!!! =>', this.state);
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        <Display animalsList={this.state.animalsList} />
      </>
    );
  }
}

export default App;
