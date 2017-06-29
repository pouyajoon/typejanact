import * as React from 'react';
import { ApplicationState, store } from '../store';
import { connect } from 'react-redux';
import { clothsActions } from '../reducers/cloths';

export const noDispatchToProps = (dispatch: any): any => ({});

interface ConnectedProps {
    clothes: string[];
    jannouClothes: string[];
}

export class Jeanne extends React.Component<ConnectedProps, {}> {

    addJannou = (cloth: string) => {
        const a: any = clothsActions.addJannouCloth(cloth);
        store.dispatch(a);
    }

    render() {
        return <div >
            <h1>Les habits de Jeanne</h1>
            <h2>Tous les habits</h2>
            <ul style={{ textAlign: 'left' }}>
                {this.props.clothes && this.props.clothes.map((c, i) =>
                    <li onClick={() => this.addJannou(c)} key={i}>{c}</li>)}
            </ul>
            <h2>Ceux de Jeanne les habits</h2>
            <ul style={{ textAlign: 'left' }}>
                {this.props.jannouClothes && this.props.jannouClothes.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
        </div >;
    }
}

const mapToProps = (state: ApplicationState) => {
    return {
        clothes: state.clothState.clothes,
        jannouClothes: state.clothState.jannouClothes
    };
};
export default connect<ConnectedProps, any, any>(
    mapToProps, noDispatchToProps
)(Jeanne);