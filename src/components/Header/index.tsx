import IPlayer from "../../types/player";
import Stats from "../Stats";
import Stopwatch from "../Stopwatch";

interface IProps{
  title: string,
  players: IPlayer[]
}

const Header = ({title, players}: IProps) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch/>
    </header>
  );
};

export default Header;