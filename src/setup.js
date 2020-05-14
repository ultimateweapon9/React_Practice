import React from 'react';

export class Setup extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <p>Welcome to the react test site, {this.props.name}</p>
                <p>Welcome to the react test site, {this.props.location.zip}</p>
            </React.StrictMode>
        );
    }
}

export default Setup