import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
      name : "a",
      score: 30
    }*/
  }

  /*incrementScore = () => {
    console.log(this);
    // this.state.score = this.state.score + 1(x)
    // 변경을 하기 위해서는 setState를 호출
    // 이전상태에 score에다가 callback 함수를 불러 붙여준다.
    this.setState(prevState => {
      return {
        score : prevState.score + 1
      }
    });
  }*/

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score"> {this.props.score} </span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}