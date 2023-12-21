import React from 'react';
import Button from '../../../elements/button';

function Search() {
  return (
    <>
      <form className="d-flex me-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Шукати" aria-label="Шукати"/>
        <Button text="Шукати"/>
      </form>
    </>
  );
}

export default Search;