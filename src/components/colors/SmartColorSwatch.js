import React from 'react';
import { withRouter, Link, Route } from "react-router-dom";

const SmartColorSwatch = ({ match }) => {

    let style = {
        backgroundColor: match.params.color,
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        margin: 15
    };

    return (
        <div style={style}>
            <h2>{match.params.text}</h2>
            <h3>{match.path}</h3>
            <h4>
                <Link to={`${match.url}/ececec/Child`}>Add Child</Link>
                {' | '}
                <Link to={`${match.url}`}>Close Child</Link>
            </h4>

            <Route path={`${match.url}/:color/:text`} component={SmartColorSwatch} />
        </div>
    );

};

export default withRouter(SmartColorSwatch);