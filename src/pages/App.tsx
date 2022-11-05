import Scoreboard from "../components/Scoreboard";
import './App.css'

const App = () =>{
  return(
    <Scoreboard/>
  )
}

// class App extends Component{

//   state = {
//     players: [
//       {
//         name: 'Tadachi',
//         id: 1
//       },
//       {
//         name: 'Vinicius',
//         id: 2
//       },
//       {
//         name: 'Laura',
//         id: 3
//       },
//       {
//         name: 'Sorlig',
//         id: 4
//       }
//     ]
//   }

//   handleRemovePlayer = (id: number) => {
//     this.setState({...this.state.players, players: this.state.players.filter(p => p.id !== id) })
//   }

//   render(){
//     return(
//       <div className="scoreboard">
//         <Header title="Scoreboard" totalPlayers={this.state.players.length} />

//         {this.state.players.map(player => 
//           <Player key={player.id.toString()} player={player} removePlayer={this.handleRemovePlayer}/>
//         )}
//       </div>
//     )
//   }
// }

// export const App = (props: Props) => {
//   return (
//     <div className="scoreboard">
//       <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

//       {props.initialPlayers.map(player => 
//         <Player key={player.id.toString()} id={player.id} name={player.name} />
//       )}
//     </div>
    
//     // <div className='container'>
//     //   {props.planets.map(planet =>
//     //     <Planet name={planet.name} desc={planet.desc} key={planet.id} id={planet.id} diameter={planet.diameter} moons={planet.moons} url={planet.url} />
//     //   )}
//     // </div>
//   );
// }

export default App;
