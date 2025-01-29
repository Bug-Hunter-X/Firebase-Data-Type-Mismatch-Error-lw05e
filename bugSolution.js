// bugSolution.js

import { db } from './firebaseConfig'; // Your Firebase config

db.ref('someData').once('value', (snapshot) => {
  const data = snapshot.val();

  // Check if the data exists and is of the expected type
  if (data && typeof data.myNumber === 'number') {
    // Process the data safely
    const myNumber = data.myNumber;
    console.log('My number:', myNumber);
  } else {
    // Handle unexpected data gracefully
    console.error('Invalid or missing data:', data);
  }
});