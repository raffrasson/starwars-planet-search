import React, { useContext, useState } from 'react';
import StarContext from '../context/starContext';

export default function Header() {
  const values = useContext(StarContext);
  const { searchInput, searchNumbers, filter } = values;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Star Wars Planet Search</h1>
      <input
        type="text"
        name="name"
        id="name"
        data-testid="name-filter"
        onChange={ (event) => searchInput(event.target.value) }
      />

      <select
        name="filtros"
        id="filtros"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        name="filtros"
        id="filtros"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="numbers"
        name="name"
        id="name"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          searchNumbers(column, comparison, value);
          console.log(filter);
        } }
      >
        filtrar

      </button>
    </div>
  );
}
