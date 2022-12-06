import * as apiCalls from "../../Api/api";

const FETCH_EPISODES = "episodeStore/episodes/FETCH_EPISODES";
const initialState = [];

export const fetchAllEpisodes = (page) => async (dispatch) => {
  const apiData = await apiCalls.getAllEpisodes(page);
  const payload = apiData.results;
  dispatch({
    type: FETCH_EPISODES,
    payload,
  });
};
const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return action.payload;
    default:
      return state;
  }
};

export default episodesReducer;
