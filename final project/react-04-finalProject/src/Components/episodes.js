import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Page from "./page";
import Episode from "./episode";
import { fetchAllEpisodes } from "../Redux/episodes/episodes";

function Episodes() {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodesReducer);
  useEffect(() => {
    dispatch(fetchAllEpisodes());
  }, [dispatch]);
  let id = { episodes };
  const maxPageValue = Array.from({ length: 3 }, (_, i) => i + 1);
  const newPage = (pageValue) => {
    dispatch(fetchAllEpisodes(pageValue));
  };
  const localName = localStorage.getItem("name");
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="episode-header">
        <h2>Hello {localName}</h2>

        <h3>Total 51, Select Page Number From Dropdown List to Navigate</h3>
      </div>
      <div className="episode-listing">
        <div className="filter">
          <div>filter by page</div>
          <select
            name="page"
            id="pages"
            onChange={(e) => {
              newPage(e.target.value);
            }}
          >
            {maxPageValue.map((number) => (
              <Page key={number} number={number} />
            ))}
          </select>
        </div>
        <ul className="list-of-episodes">
          {episodes.map((episode) => (
            <Episode
              key={episode.id}
              episode={episode}
              id={id}
              page="/episodes/"
            />
          ))}
        </ul>
      </div>
      <div id="buttons">
        <Button variant="contained" onClick={deleteAccount}>
          delete account
        </Button>
        <Button variant="contained" onClick={logout}>
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Episodes;
