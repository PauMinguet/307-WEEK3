// src/Table.js
function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
        </tr>
      </thead>
    );
  }
  
  function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.id}</td>
	        <td>{row.name}</td>
	        <td>{row.job}</td>
	        <td>
			      <button onClick={() => 
				      props.removeCharacter(row.id)}>
				      Delete
			      </button>
	        </td>
	      </tr>
      );
    });

    return (
        <tbody>
          {rows}
         </tbody>
     );
  }

function Table({characterData, removeCharacter}) {
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData}
                   removeCharacter={removeCharacter} />
      </table>
    );
}
export default Table;
