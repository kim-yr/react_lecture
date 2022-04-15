import { Link } from "react-router-dom";
import { useState } from "react";
export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div id="search">
      <input
        type="text"
        placeholder="search movie"
        value={search}
        onChange={function (e) {
          setSearch(e.target.value);
          console.log(search);
        }}
      />
      <Link to={`/search?movie=${search}`}>SEARCH</Link>
    </div>
  );
}
