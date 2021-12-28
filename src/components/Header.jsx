import React, { useContext } from 'react';
import StarContext from '../context/starContext';

export default function Header() {
  const values = useContext(StarContext);
  const { searchInput,
    setNumeric,
    searchPopulation,
    searchOrbitalPeriod,
    searchDiameter,
    searchRotationPeriod,
    searchSurfaceWater,
    selectColumn,
    selectComparison,
    selectValue,
    setSelectColumn,
    setSelectComparison,
    setSelectValue } = values;

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
          setSelectColumn(target.value);
        } }
      >
        <option value="population" selected>population</option>
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
          setSelectComparison(target.value);
        } }
      >
        <option value="maior que" selected>maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        name="name"
        id="name"
        placeholder="0"
        data-testid="value-filter"
        onChange={ ({ target }) => {
          setSelectValue(target.value);
        } }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          if (selectColumn === 'population') {
            searchPopulation(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          }
          if (selectColumn === 'orbital_period') {
            searchOrbitalPeriod(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          }
          if (selectColumn === 'rotation_period') {
            searchRotationPeriod(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          }
          if (selectColumn === 'diameter') {
            searchDiameter(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          }
          if (selectColumn === 'surface_water') {
            searchSurfaceWater(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          }
        } }
      >
        filtrar

      </button>
    </div>
  );
}
