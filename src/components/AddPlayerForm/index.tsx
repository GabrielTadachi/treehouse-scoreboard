import { FormEvent, useRef, useState } from "react";

interface IProps{
  addPlayer: (name: string) => void;
}


const AddPlayerForm = ({addPlayer}: IProps) => {

    const playerInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: any) =>{
        event.preventDefault();

        if(playerInput.current){
            addPlayer(playerInput.current.value);
            event.currentTarget.reset();
        }
    }

    return(
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" ref={playerInput} placeholder="Enter a player's name" />
            <input type="submit" value="Add Player" />
        </form>
    );
};

export default AddPlayerForm;

