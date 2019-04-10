import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from '../actions';
// import actions

class CharacterListView extends React.Component {
 
  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
    console.log(this.props.fetchCharacters)
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>Loading Star Wars Characters...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  }
}
export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
