import React from 'react';

function Header (props) {
    return (
        <h3 className="field">
            <label> { props.title } </label>
        </h3>
    );
}

export default Header;

