import React, {useState} from 'react';
import MyApp from './MyApp';

function Form(props) {
  const [person, setPerson] = useState(
     {
        name: "",
        job: "",
     }
     );

  

  function handleChange(event) {
    
    const { name, value } = event.target;
    if (name === "job")
      setPerson(
         {name: person['name'], job: value}
      );
    else     
       setPerson(
         {name: value, job: person['job']}   
       );
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
      });

      if (response.ok) {
        const newUser = await response.json();
        // Handle the newly created user object, e.g., display it or update state.
        props.handleSubmit(newUser);
        console.log('New User:', newUser);
      } else {
        console.error('Error creating user:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };




  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange} />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
        onChange={handleChange} />
      <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
);
}

export default Form;