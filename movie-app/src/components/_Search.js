import { Link } from "react-router-dom";
import { useState } from "react";
export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div id="search">
      <input
        type="txt"
        placeholder="search movie"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Link to={`/search?movie=${search}`}>search</Link>
    </div>
  );
}
