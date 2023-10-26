import { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />

          <br />
          <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <br />

          <button type="submit">Submit form</button>

          <h2>{message}</h2>
        </form>
      </div>
    );
  }
}

export default SearchBar;
