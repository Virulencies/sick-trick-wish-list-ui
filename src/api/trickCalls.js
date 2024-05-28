export function fetchTricks() {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network error');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error fetching tricks:', error);
      throw error;
    });
}