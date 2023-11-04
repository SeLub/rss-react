import { Component } from 'react';
import Display from './Dispaly';
import { checkIfSearchWordPresentInLocalStorage } from './common/data';
import SearchBar from './Search';

const searchWord = checkIfSearchWordPresentInLocalStorage();
class App extends Component<Record<string, unknown>, { searchWord: string }> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { searchWord };
  }
  setSearchWordState = (searchWord: string) => {
    this.setState({ searchWord });
  };

  render() {
    return (
      <>
        <SearchBar
          setSearchWordState={this.setSearchWordState}
          searchWord={this.state.searchWord}
        />
        <Display searchWord={this.state.searchWord} />
      </>
    );
  }
}

export default App;
