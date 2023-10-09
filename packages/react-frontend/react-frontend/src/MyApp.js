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
          if (response.status === 404) {
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

    function postUser(person) {
      const promise = fetch("Http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
      return promise;
    }

    function updateList(person) {
      postUser(person)
        .then((response) => {
          if (response.status === 201) {
            return response.json();
          } else {
            throw new Error("Failed to add user");
          }
        })
        .then((newUser) => {
          console.log("hello", newUser)
          setCharacters([...characters, newUser.user]);
        })
        .catch((error) => {
          console.error(error);
        });
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