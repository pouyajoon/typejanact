import * as React from 'react';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';

export const noDispatchToProps = (dispatch: any): any => ({});

interface ConnectedProps {
    clothes: string[];
}

export class Jeanne extends React.Component<ConnectedProps, {}> {
    render() {
        return <div >
            <h1>Les habits de Jeanne</h1>
            <ul style={{ textAlign: 'left' }}>
                {this.props.clothes.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
        </div>;
    }
}

const mapToProps = (state: ApplicationState) => ({
    clothes: state.clothState.clothes
});
export default connect<ConnectedProps, any, any>(
    mapToProps, noDispatchToProps
)(Jeanne);