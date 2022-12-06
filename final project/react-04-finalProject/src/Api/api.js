const APIURL = "https://rickandmortyapi.com/api";
const EPISODES = "episode";

export const getAllEpisodes = async (page = 1) => {
  const req = await fetch(`${APIURL}/${EPISODES}/?page=${page}`);
  const apiEpisodes = await req.json();
  return apiEpisodes;
};

export default { getAllEpisodes };
