import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import NewsList from "./NewsList";
const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Load mock news from a JSON file or directly from the API
    axios
      .get("https://hn.algolia.com/api/v1/search?query=react")
      .then((res) => {
        setSearchResults(res.data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = () => {
    setIsLoading(true);
    axios
      .get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
      .then((res) => {
        console.log(res.data.hits)
        setSearchResults(res.data.hits);
        setIsLoading(false);
        setSearchTerm("")
      })
      .catch((err) => console.error(err));
  };
  return (
   <>
   <Navbar />
   
    <Grid container spacing={3} style={{ width: "80%", margin: "0 auto" }}>
      
      <Grid item xs={12}>
        <NewsList results={searchResults} isLoading={isLoading} />
      </Grid>
      <Grid item xs={12}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </Grid>
    </Grid>
    </>
  );
};
export default App;
