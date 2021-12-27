import React, { useContext, useState } from 'react';
import StarContext from '../context/starContext';

export default function Header() {
  const values = useContext(StarContext);
  const { searchInput,
    setNumeric,
    searchPopulation,
    searchOrbitalPeriod,
    searchDiameter,
    searchRotationPeriod,
    searchSurfaceWater } = values;
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
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
        onChange={ ({ target }) => {
          setNumeric(target.value);
          setColumn(target.value);
        } }
      >
        {/* fonte para oplaceholder no menu select: https://www.w3docs.com/snippets/css/how-to-create-a-placeholder-for-an-html5-select-box-by-using-only-html-and-css.html */}
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
        onChange={ ({ target }) => {
          setNumeric(column, target.value);
          setComparison(target.value);
        } }
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
        onChange={ ({ target }) => {
          setNumeric(column, comparison, target.value);
          setValue(target.value);
        } }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          if (column === 'population') {
            searchPopulation(column, comparison, value);
            setNumeric(column, comparison, value);
          }
          if (column === 'orbital_period') {
            searchOrbitalPeriod(column, comparison, value);
            setNumeric(column, comparison, value);
          }
          if (column === 'rotation_period') {
            searchRotationPeriod(column, comparison, value);
            setNumeric(column, comparison, value);
          }
          if (column === 'diameter') {
            searchDiameter(column, comparison, value);
            setNumeric(column, comparison, value);
          }
          if (column === 'surface_water') {
            searchSurfaceWater(column, comparison, value);
            setNumeric(column, comparison, value);
          }
        } }
      >
        filtrar

      </button>
    </div>
  );
}
