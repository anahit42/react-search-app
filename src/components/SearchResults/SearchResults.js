import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import { selectTeam } from '../../actions';

import { imagesCdn } from '../../config';

class SearchResults extends React.Component {
  renderTeams () {
    return this.props.teams.map((team) => {
      const imagePath = get(team, 'images.default.filePath');
      const imageUrl = `${imagesCdn.host}/${imagePath || imagesCdn.placeHolderPath}`;

      return (
        <div className='item' key={team.id}>
          <img
            className='ui avatar image' src={imageUrl}
            alt={team.name}
          />

          <div className='content'>
            <div className='title'> {team.name} </div>
            <div className='description'>
              {team.description || 'Team does not have a description'}
            </div>
          </div>

          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.onTeamSelect(team)}
            >
                            Add
            </button>
          </div>
        </div>
      );
    });
  }

  render () {
    return (
      <div className='ui middle aligned selection list'> {this.renderTeams()} </div>
    );
  };
}

SearchResults.propTypes = {
  onTeamSelect: PropTypes.func,
  teams: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    teams: state.searchResults
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTeamSelect: (team) => {
      const action = selectTeam(team);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
