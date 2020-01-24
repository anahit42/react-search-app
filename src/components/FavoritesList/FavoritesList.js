import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import { removeTeam } from '../../actions';

import { imagesCdn } from '../../config';

class FavoritesList extends React.Component {
  renderSelectedTeams () {
    if (!this.props.selectedTeams.length) {
      return null;
    }

    return this.props.selectedTeams.map((team) => {
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
              onClick={() => this.props.onTeamRemove(team)}
            >
                            Remove
            </button>
          </div>
        </div>
      );
    });
  }

  render () {
    return (
      <div className='ui middle aligned selection list'> {this.renderSelectedTeams()} </div>
    );
  };
}

FavoritesList.propTypes = {
  onTeamRemove: PropTypes.func,
  selectedTeams: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    selectedTeams: state.selectedTeams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTeamRemove: (team) => {
      const action = removeTeam(team);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
