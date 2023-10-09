// src/MyApp.js
import React, {useState, useEffect} from 'react';
import Table from "./Table";
import Form from './Form';

  function MyApp() {
    const [characters, setCharacters] = useState([]); 

    function fetchUsers() {
      const promise = fetch("http://localhost:8080/users");
      return promise;
    }

    function removeOneCharacter(userId) {
      fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // If the delete request is successful, update the state to remove the deleted user
            setCharacters((prevCharacters) =>
              prevCharacters.filter((character) => character.id !== userId)
            );
          } else {
            console.error('Error deleting user:', response.status);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    function updateList(person) {
      setCharacters([...characters, person]);
    }
    

    useEffect(() => {
      fetchUsers()
        .then((res) => res.json())
        .then((json) => setCharacters(json["users_list"]))
        .catch((error) => { console.log(error); });
    }, [] );
      
    return (
      <div className="container">
        <Table characterData={characters}
               removeCharacter={removeOneCharacter} />
        <Form  handleSubmit={updateList} />
       </div>
    ) 
    
  }

export default MyApp;