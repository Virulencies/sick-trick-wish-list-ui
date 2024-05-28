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

export function addTrick(newTrick) {
    return fetch('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTrick)
    })
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
        console.error('Error adding trick:', error);
        throw error;
      });
  }
  