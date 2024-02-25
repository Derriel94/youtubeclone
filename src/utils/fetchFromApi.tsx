import axios from 'axios';

const base_url = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '7c3aa09a79mshda363fa1e80c8eap17ed2fjsnc282c5d7cc31',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${base_url}/${url}`, options);

  return data;
}