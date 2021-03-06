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
    setSelectValue,
    comparisonArray,
    columnArray,
    filter,
    data,
    setData } = values;

  const comparisonFilterArray = filter.filterByNumericValues.map((el) => el.comparison);

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

        {columnArray.map((el) => {
          if (el !== selectColumn) {
            return <option value={ el }>{el}</option>;
          } return 'error';
        })}
      </select>
      <select
        name="filtros"
        id="filtros"
        data-testid="comparison-filter"
        onChange={ ({ target }) => {
          setSelectComparison(target.value);
        } }
      >

        {comparisonArray.map((el, i) => {
          if (el !== comparisonFilterArray[i]) {
            return <option value={ el }>{el}</option>;
          } return 'error';
        })}
      </select>

      <input
        type="number"
        name="name"
        id="name"
        value={ selectValue }
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
          if (selectColumn === 'population' && selectValue !== 0) {
            searchPopulation(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          } else
          if (selectColumn === 'orbital_period') {
            searchOrbitalPeriod(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          } else
          if (selectColumn === 'rotation_period') {
            searchRotationPeriod(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          } else
          if (selectColumn === 'diameter') {
            searchDiameter(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          } else
          if (selectColumn === 'surface_water') {
            searchSurfaceWater(selectColumn, selectComparison, selectValue);
            setNumeric(selectColumn, selectComparison, selectValue);
          } else (setData(data.slice(2)));
        } }
      >
        filtrar

      </button>
    </div>
  );
}
