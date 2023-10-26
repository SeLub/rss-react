import { Component } from 'react';
import Display from './Dispaly';
import { AnimalType } from './common/types';
import { searchWord, searchAnimal } from './common/data';

class App extends Component {
  constructor(props: AnimalType[]) {
    super(props);
    this.state = { animalsList: [] };
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const animals = (await searchAnimal(searchWord)) as AnimalType[];
    console.log(animals);
    this.setState({ animalsList: animals });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Display animals={this.state.animalsList} />
      </>
    );
  }
}

export default App;
