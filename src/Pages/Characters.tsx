import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import MyCard from '../components/MyCard';


export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}
 export interface Origin {
    name: string;
    url: string;
}
 export interface Location {
    name: string;
    url: string;
}
 export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}
 export interface RootObject {
    info: Info;
    results: Character[];
}


export default function Characters() {

    const [characters, setCharacters] = useState([] as Character[]);

    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page") || "1";


    const loadData = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const {results} = await response.json() as RootObject;
        setCharacters(results)
    }

    useEffect(() => {
        loadData()
      },[page] )

    

  return (
      <>
        <div className='btn' >
            <button 
                disabled={Number(page) <= 1}
                onClick={()=> {setSearchParams({page: String(Number(page) -1)})}}
            >
            Indietro 
            </button>
            <button 
                disabled={Number(page) >= 42}
                onClick={()=> {setSearchParams({page: String(Number(page) +1)})}}
            >
            Avanti 
            </button>
            <br></br>
            <br></br>
      </div>


        <Grid container spacing={2}>
            {(characters.map((item) => 
                <Grid item xs={4}>
                    <MyCard 
                    key={item.id} 
                    name={item.name} 
                    image={item.image}
                    character={item}
                    />
                </Grid> 
            ))}
            
            </Grid> 
      </>
    
  )
}
