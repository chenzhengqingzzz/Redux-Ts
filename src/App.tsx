import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import * as Actions from './store/action'
import { State } from './store';

type Props = ConnectedProps<typeof connector>

class App extends Component<Props> {

  render(): React.ReactNode {
    return (
      <>
        <input value={this.props.data} readOnly />
        <button onClick={()=>{this.props.add(this.props.data)}}>+</button>
        <button onClick={()=>{this.props.sub(this.props.data)}}>-</button>
      </>
    )
  }
}

const mapStateToProps = (state: typeof State) => ({
  data: state.app.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (data: number) => dispatch(Actions.addAction(data)),
  sub: (data: number) => dispatch(Actions.subAction(data))
})

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
