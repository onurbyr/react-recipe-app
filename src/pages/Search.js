import React from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const search = useSelector((state) => state.header);
  return <div>Search</div>;
};

export default Search;
