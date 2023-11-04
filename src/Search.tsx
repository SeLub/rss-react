import { Component } from 'react';
import { storeSearchWordToLocalStorage } from './common/data';
import { SearchProps } from './common/types';
class SearchBar extends Component<SearchProps> {
  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchWord = (event.target as HTMLFormElement).search.value;
    storeSearchWordToLocalStorage(searchWord);
    this.props.setSearchWordState(searchWord);
  };
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="search"
              defaultValue={this.props.searchWord}
              placeholder="Search for animal..."
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
