import React, { useContext } from 'react';
import StarContext from '../context/starContext';

// ferramenta utilizada como base: https://www.tablesgenerator.com/
function Table() {
  const { data, filteredData, filter } = useContext(StarContext);
  const headers = Object.keys(data[0]);
  const planets = filter.filterByName.name === '' ? data : filteredData;

  const rows = planets.map((planet) => headers.map((header) => planet[header])); // Auxílio de Marcello Alves
  return (
    <table>
      <thead>
        <tr>
          { headers.map((header, i) => (<th key={ i }>{header}</th>)) }
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={ i }>
            {row.map((cell, index) => (
              <td key={ index }>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
