import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChar } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChar()
  }

  render() {
    if (this.props.isFetching) {
      return (
        <p>Loading...</p>
      )
      
    }
    console.log(this.props)
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getChar })(CharacterListView);
