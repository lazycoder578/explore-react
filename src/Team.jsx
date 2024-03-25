import React, { useState } from 'react'

export default function Team() {

    const [team, setTeam] = useState(11);

    const handleAddClick = () =>{
        // const newTeam = team + 1;
        // setTeam(newTeam);
        setTeam(team + 1);
    }

    const handleRemoveClick = () =>{
        // const newTeam = team - 1;
        // setTeam(newTeam);
        setTeam(team - 1);
    }

    const teamStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
    }
  return (
    <div style={teamStyle}>
      <h3>Player: {team}</h3>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  )
}
