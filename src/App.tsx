import { ChangeEvent, Component } from 'react';
import Display from './Dispaly';
import { AnimalType, StateType } from './common/types';
import { searchAnimal } from './common/data';
import SearchBar from './Search';

class App extends Component<AnimalType[], StateType> {
  constructor(props: AnimalType[]) {
    super(props);
    this.state = { animalsList: [], searchWord: '' };
  }

  setSearchWordState = (searchWord: string) => {
    this.setState({ searchWord: searchWord });
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setSearchWordState(e.target.value);
    console.log(this.state.searchWord);
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const animals = (await searchAnimal(this.state.searchWord)) as AnimalType[];
    this.setState({ animalsList: animals });
  };

  render() {
    return (
      <>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Display animalsList={this.state.animalsList} />
      </>
    );
  }
}

export default App;
