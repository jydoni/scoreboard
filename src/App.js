import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
/*import {Header} from './components/Header';*/


/////////////////////component///////////////////////////


// const Header = (props) => {
//   console.log(props);
//   const {title, totalPlayers} = props; // destruct assignment
//   return(
//     <header>
//       <h1>{title}</h1>
//       <span className="stats">Players : {totalPlayers}</span>
//     </header>
//   )
// };


///////function 컴퍼넌트를 --> class 컴퍼넌트로 변경///////
/*class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : "a",
      score: 30
    }
  }

  incrementScore = () => {
    console.log(this);
    // this.state.score = this.state.score + 1(x)
    // 변경을 하기 위해서는 setState를 호출
    // 이전상태에 score에다가 callback 함수를 불러 붙여준다.
    this.setState(prevState => {
      return {
        score : prevState.score + 1
      }
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score"> {this.state.score} </span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}*/

/*const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.handleRemovePlayer(props.id)}>x</button>
    </span>

    <span className="player-name">
      {props.name}
    </span>
    <Counter />
  </div>
);*/
/*<Counter score={props.score}/>*/


class App extends React.Component { //부모를 class 컴퍼넌트로! class컴퍼넌트는 자기자신 this객체가 생겨 쓰인다.
  state = {
    players: [
      {name: "LDK", score: 0, id: 1},
      {name: "HONE", score: 0, id: 2},
      {name: "KIM", score: 0, id: 3},
      {name: "PARK", score: 0, id: 4}
    ]
  }
  // players가 동적으로 시간에 따라 변화하므로 state로 바꾸어주었다.

  handleRemovePlayer = (id) => { //함수가 아니라 선언문으로
    //해당 id를 삭제



    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      prevState.players.forEach(item => {
        if (item.id === id){
          item.score += delta;
        }
      })
      return {players: [...prevState.players]}
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={10 + 1}/>
        {
          this.state.players.map(player => (

            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    score={player.score}
                    handleRemovePlayer={this.handleRemovePlayer}
                    handleChangeScore={this.handleChangeScore}/>
          ))
        }
      </div>
    );
  }
}

// 1. Header() function component 를 호출
// 2. 속성을 json으로 전달한다. { title:"My Scoreboard", totalPlayer: 11 }

export default App;
