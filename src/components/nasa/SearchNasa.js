import React from 'react';
import { useFetchNasa } from '../../hooks/useFetchNasa';
import { SearchNasaItem } from './SearchNasaItem';

export const SearchNasa = ({ history }) => {
  // 7. To use category prop.
  // 8. To use a custom hook called useFetchGifs and pass category prop.
  // 9. To create cards and styling it.

  const { data: images, loading } = useFetchNasa();

  const handleLogin = () => {
    // history.push("/"); Save the page history
    history.replace('/'); // Don't save the page history
  };

  return (
    <>
      <section id="welcome" className="grid">
        <div className="welcome-text">
          <h2>
            Web application <br /> and Barichara Stone for all!{' '}
          </h2>
          <p className="leading">
            In this site you will can explore the universe with AstronomUIS,
            also you will find many interesting topics like <b>Black Holes</b>,{' '}
            <b>Exoplanets</b>, <b>Barichara Stone and more!</b>{' '}
          </p>
          <button className="btn btn-primary mt-2" onClick={handleLogin}>
            Return!
          </button>
        </div>
      </section>

      {loading && (
        <p className="animate__animated animate__flash"> Loading... </p>
      )}

      <div className="card-columns animate__animated animate__fadeIn">
        {
          // Use destructuring and only obtain id and title
          images.map(img => {
            return <SearchNasaItem key={img.id} {...img} />;
          })
        }
      </div>
    </>
  );
};
