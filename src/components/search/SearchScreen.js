import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { SpaceCard } from '../space/SpaceCard';
import { useFetchByName } from '../../hooks/useFetchByName';

export const SearchScreen = ({ history }) => {
  // useLocation property
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const constellationsFiltered = useFetchByName(searchText);

  const { data } = constellationsFiltered;
  const handleSearch = e => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your constellation"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary button"
            >
              {' '}
              Search...{' '}
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === '' && (
            <div className="alert alert-info">Search constellation!</div>
          )}

          {q !== '' && data.length === 0 && (
            <div className="alert alert-danger">
              There isn't hero with the name '{q}' :-(
            </div>
          )}

          {data.map(element => (
            <SpaceCard key={element._id} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
};
