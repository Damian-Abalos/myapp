import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [user, setUser] = useState(null);

  const getAllPokemons = async () => {
    try {
      const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const {data: { data }} = respuesta;
      setUser(data);
      console.log(respuesta.data.results);
      setUser(respuesta.data.results);
    } catch (error) {
      console.log(error);
    }
  };

//   const tarea = new Promise ((reseolve, reject)=> {
//     resolve({id:1,nombre:"Dami"})
// }) 

  useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon")
    // .then((res)=> res.json())
    // .catch((err) => console.log(err))
    // .then((res) => console.log(res.data))

    getAllPokemons();
  }, []);



  return <div>
      {user && user.map((u)=>(<h1 key={u.id}>{u.name}</h1>))}
      
  </div>;
};

export default Api;
