import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Character } from './Characters';


export default function SingleCharacter() {

    const {id} = useParams() as {id: string};
    const navigate = useNavigate()

    const [character, setCharacter] = useState<Character>();

    const url:string = "https://rickandmortyapi.com/api/character"

    const loadData = async () => {
        const response = await fetch(`${url}/${id}`)
        const item = await response.json() as Character
        setCharacter(item)
    }
 
    useEffect(()  => {
       loadData()

    },[id])



  return (
    <>
    <button onClick={()=> navigate(-1)}>
        Indietro
    </button>
    <div>SingleCharacter {id}</div>
    {character && <h2>{character.name}</h2>}
    </>
  )
}
