import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './starContext';

export default function StarProvider({ children }) {
  const [data, setData] = useState([{}]);
  const [selectColumn, setSelectColumn] = useState('population');
  const [selectComparison, setSelectComparison] = useState('maior que');
  const [selectValue, setSelectValue] = useState(0);
  const [filteredData, setFilteredData] = useState([{}]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    const planetApi = async () => {
      const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      let results = await planets.json();
      results = results.results;
      results.forEach((result) => {
        delete result.residents;
      });
      setData(results);
      setFilteredData(results);
    };
    planetApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function nameFilter() {
      if (filter.filterByName.name !== '') {
        const filtered = data.filter((planet) => (planet.name.toLowerCase() // referência: https://stackoverflow.com/questions/42035717/js-filter-object-array-for-partial-matches/42035745
          .includes(filter.filterByName.name.toLowerCase())));
        setFilteredData(filtered);
      }
    }
    nameFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  function searchInput(name) {
    setFilter({
      ...filter, filterByName: { name },
    });
  }

  function setNumeric(column, comparison, value) {
    filter.filterByNumericValues.push({
      column,
      comparison,
      value,
    });
  }

  function searchPopulation(column, comparison, value) {
    if (comparison === 'maior que') {
      const filtered = data.filter((planet) => (Number(planet.population) > value));
      setData(filtered);
    }
    if (comparison === 'menor que') {
      const filtered = data.filter((planet) => (Number(planet.population) < value));
      setData(filtered);
    }
    if (comparison === 'igual a') {
      const filtered = data.filter((planet) => (planet.population === value));
      setData(filtered);
    }
  }

  function searchOrbitalPeriod(column, comparison, value) {
    if (comparison === 'maior que') {
      const filtered = data.filter((planet) => (Number(planet.orbital_period) > value));
      setData(filtered);
    }
    if (comparison === 'menor que') {
      const filtered = data.filter((planet) => (Number(planet.orbital_period) < value));

      setData(filtered);
    }
    if (comparison === 'igual a') {
      const filtered = data.filter((planet) => (planet.orbital_period === value));
      setData(filtered);
    }
  }

  function searchDiameter(column, comparison, value) {
    if (comparison === 'maior que') {
      const filtered = data.filter((planet) => (Number(planet.diameter) > value));

      setData(filtered);
    }
    if (comparison === 'menor que') {
      const filtered = data.filter((planet) => (Number(planet.diameter) < value));

      setData(filtered);
    }
    if (comparison === 'igual a') {
      const filtered = data.filter((planet) => (planet.diameter === value));
      setData(filtered);
    }
  }

  function searchRotationPeriod(column, comparison, value) {
    if (comparison === 'maior que') {
      const filtered = data.filter((planet) => (Number(planet.rotation_period) > value));
      setData(filtered);
    }
    if (comparison === 'menor que') {
      const filtered = data.filter((planet) => (Number(planet.rotation_period) < value));
      setData(filtered);
    }
    if (comparison === 'igual a') {
      const filtered = data.filter((planet) => (planet.rotation_period === value));
      setData(filtered);
    }
  }

  function searchSurfaceWater(column, comparison, value) {
    if (comparison === 'maior que') {
      const filtered = data.filter((planet) => (Number(planet.surface_water) > value));
      setData(filtered);
    }
    if (comparison === 'menor que') {
      const filtered = data.filter((planet) => (Number(planet.surface_water) < value));
      setData(filtered);
    }
    if (comparison === 'igual a') {
      const filtered = data.filter((planet) => (planet.surface_water === value));
      setData(filtered);
    }
  }

  const values = {
    data,
    setData,
    filter,
    setFilter,
    searchInput,
    setNumeric,
    filteredData,
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
  };

  return (
    <div>
      <main>
        <StarContext.Provider value={ values }>
          {children}
        </StarContext.Provider>
      </main>
    </div>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
