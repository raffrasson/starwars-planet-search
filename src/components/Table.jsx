import React, { useContext } from 'react';
import StarContext from '../context/starContext';

// ferramenta utilizada como base: https://www.tablesgenerator.com/
function Table() {
  const values = useContext(StarContext);
  const { data,
    filteredData,
    filter } = values;
  const headers = ['name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url'];
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

//  <th>name</th>
//     <th>rotation_period</th>
//     <th>orbital_period</th>
//     <th>diameter</th>
//     <th>climate</th>
//     <th>gravity</th>
//     <th>terrain</th>
//     <th>surface_water</th>
//     <th>population</th>
//     <th>films</th>
//     <th>created</th>
//     <th>edited</th>
//     <th>url</th>
export default Table;
