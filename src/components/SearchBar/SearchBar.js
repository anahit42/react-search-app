import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { inputChange } from '../../actions';

class SearchBar extends React.Component {
    onInput = (event) => {
        return this.props.onSearchInput(event.target.value);
    };

    renderTeams(teams) {
        return teams.map((team) => {
           return <div key={team.id}> { team.name } </div>
        });
    }

    render () {
        return (
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        onInput={this.onInput}
                        className="prompt"
                        placeholder="Search"
                        type="text"
                    />
                    <i className="search icon"/>
                </div>
                <div >
                    { this.renderTeams(this.props.teams) }
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    teams: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        teams: state.searchResults
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchInput: (input) =>  {
            const action = inputChange({ q: input, index: 'team' });
            dispatch(action);
        },
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
