import { Component } from 'react';
type SearchProps = {
  handleSubmit: (event: any) => void;
  handleChange: (event: any) => void;
}
class SearchBar extends Component<SearchProps> {
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              onChange={this.props.handleChange}
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
