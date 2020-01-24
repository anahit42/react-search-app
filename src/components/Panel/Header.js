import React from 'react';

function Header (props) {
    return (
        <div className="ui segment">
            <h2 className="field">
                <label> { props.title } </label>
            </h2>
        </div>
    );
}

export default Header;

