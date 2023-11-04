import { Component } from 'react';
import parse from 'html-react-parser';
import { AnimalType, StateType } from './common/types';
import { searchAnimalInAPI } from './common/data';

class Display extends Component<{ searchWord: string }, StateType> {
  constructor(props: { searchWord: string }) {
    super(props);
    this.state = {
      animalsList: [],
    };
    this.setAnimalsList = this.setAnimalsList.bind(this);
  }
  setAnimalsList(result: AnimalType[]) {
    this.setState({ animalsList: result });
  }

  componentDidMount(): void {
    searchAnimalInAPI(this.props.searchWord)
      .then((result) => this.setAnimalsList(result))
      .catch((error) => error);
  }

  componentDidUpdate(prevProps: Readonly<{ searchWord: string }>): void {
    const prevSearchWordState = prevProps.searchWord;
    const currentSearchWordState = this.props.searchWord;

    if (prevSearchWordState !== currentSearchWordState) {
      searchAnimalInAPI(this.props.searchWord)
        .then((result) => this.setAnimalsList(result))
        .catch((error) => error);
    }
  }

  render() {
    const { animalsList } = this.state;
    if (animalsList.length === 0) {
      return null;
    }

    console.log('props in Display =>', this.props.searchWord);

    function items(animals: AnimalType[]) {
      let animalList = '';
      animals.map((item) => {
        animalList += `<div className="row">
                <div className="col">${item.uid}</div>
                <div className="col">${item.name}</div>
                <div className="col">${item.earthAnimal}</div>
                <div className="col">${item.earthInsect}</div>
                <div className="col">${item.avian}</div>
                <div className="col">${item.canine}</div>
                <div className="col">${item.feline}</div>
              </div>`;
      });
      return animalList;
    }
    return (
      <section>
        <header>
          <div className="col">uid</div>
          <div className="col">name</div>
          <div className="col">earthAnimal</div>
          <div className="col">earthInsect</div>
          <div className="col">avian</div>
          <div className="col">canine</div>
          <div className="col">feline</div>
        </header>
        {parse(items(this.state.animalsList) as unknown as string)}
      </section>
    );
  }
}

export default Display;
