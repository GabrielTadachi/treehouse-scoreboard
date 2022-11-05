import IPlayer from "../../types/player";

interface IProps{
  player: IPlayer;
  changeScore: (id: number, delta: number) => void;
}

const Counter = ({player, changeScore}: IProps) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(player.id, -1)}> - </button>
      <span className="counter-score">{player.score}</span>
      <button className="counter-action increment" onClick={() => changeScore(player.id, +1)}> + </button>
    </div>
  );
};

export default Counter;

// export class Counter extends Component{

//   state = {
//     score: 0
//   };

//   incrementScore = () =>{
//     this.setState({...this.state, score: this.state.score + 1})
//   }

//   decrementScore = () => {
//     if(this.state.score > 0)
//       this.setState({...this.state, score: this.state.score - 1})
//   }

//   render(){
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//         <span className="counter-score">{this.state.score}</span>
//         <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//       </div>
//     );
//   }
// }
