import { Component } from 'react';
import parse from 'html-react-parser';
import { AnimalType } from './common/types';

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

class Display extends Component<AnimalType[]> {
  render() {
    const { animals } = this.props;
    console.log('!!!!!!!!!!!', this.props.animals);
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
        {parse(items(animals))}
      </section>
    );
  }
}

export default Display;
