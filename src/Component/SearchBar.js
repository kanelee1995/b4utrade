// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

const SearchBar = ({ userInput, inputHandle, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar"
        type="text"
        value={userInput}
        placeholder="Search by symbol"
        onChange={inputHandle}
      ></input>
      <FontAwesomeIcon icon={faSearch} className={"searchIcon"} />
    </form>
  );
};

export default SearchBar;
