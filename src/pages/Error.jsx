import React from "react";
import { Link } from "react-router";

function Error() {
  return (
    <div>
      <h1>Error 404: NOT FOUND</h1>
      <p>Questa pagina non esiste</p>
      <p>torna alla home</p>
      <Link to="/">Torna</Link>
     
    </div>
  );
}

export default Error;
