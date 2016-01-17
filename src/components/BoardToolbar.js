import React from 'react';
import { connect } from 'react-redux';

import { getAddAction, getSortAction } from '../actions/all.js';

//
// Pure component
// 

const STYLE_HEADER = { fontSize: 30, textAlign: 'left', padding: 10, textTransform: 'uppercase', borderBottom: '1px solid rgba(0,0,0,.1)' };
const STYLE_BUTTON = { border: '1px solid #ccc', borderRadius: 5, background: 'linear-gradient(to bottom, #eee , #DDD)', padding: 5, margin: 10, minWidth: 30, float: 'right', textTransform: 'uppercase' };

export class BoardToolbar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    onSortButtonClick: React.PropTypes.func.isRequired,
    onAddButtonClick: React.PropTypes.func.isRequired
  };

  render() {
    const { name, onSortButtonClick, onAddButtonClick } = this.props;

    return (
      <header style={STYLE_HEADER}>
        Board : {name}
        <button style={STYLE_BUTTON} onClick={onSortButtonClick}>Sort</button>
        <button style={STYLE_BUTTON} onClick={onAddButtonClick}>Add</button>
      </header>
    );
  }
}

//
// Connected component
// 

// Wrap the component into connect()
const mapReduxStateToProps = (state) => ({
  name: state.length.toString()
});
const dispatchToProps = (dispatch) => ({
  onSortButtonClick: () => dispatch(getSortAction()),
  onAddButtonClick: () => dispatch(getAddAction()),
});

export default connect(mapReduxStateToProps, dispatchToProps)(BoardToolbar);