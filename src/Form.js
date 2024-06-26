import React from 'react';
import './Form.css';

export default function Form(){
  return(
<form action="">
  <div className="row">
    <div className="col-9"><input type="search" className="form-control search-input" placeholder="Enter a city..." /></div>
    <div className="col-3 p-0">
      <input type="submit" className="btn-primary btn btn-submit w-100" value="Search" />
    </div>

  </div>


</form>
  );
};