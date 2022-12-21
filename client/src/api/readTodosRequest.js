import { API_URL, token } from './config';

export default () => {
  return fetch(`${API_URL}/todos`, {
    // fetch + URL -> get req by default
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};
