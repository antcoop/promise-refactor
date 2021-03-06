// Housekeeping
const userInput = process.argv[2];

/** 
 * Moved practiceCoding to the top of the global scope and allowed it to accept parameters.
 * This increases purity for reuse in necessary.
 * @param {string} input - type of input to check against to resolve or reject
*/
const practiceCoding = (input) => new Promise((resolve, reject) => {
  // Updated promise to accept both resolve and reject as arguments.
  if (input) console.log('Current user activity:', input);
  
  // Used a switch statement to handle the flow of logic. This gives a great space to add any additional checks in the future.
  switch (input) {
    case 'coding': {
      // If 'coding' is entered we resolve with the following message.
      return resolve('We are coding in promises!');
    }
    case 'nothing': {
      // If 'nothing' is entered we reject with the follow error.
      return reject(new Error('Coding stopped - Student is distracted'));
    }
    default: {
      // Otherwise, we reject with a generic error.
      const message = 'Please enter a valid activity `node index.js (coding|nothing)`';
      return reject(new Error(message));
    }
  }
});

/**
 * Created an intializer so it's easier to identify where the program starts.
 * Also, added an input argument to increase purity.
 * @param {string} input - type of input to check against to resolve or reject.
 */
const init = async (input) => {
  try {
    // Using await, practiceCoding is converted into a blocking function so that no code runs until the promise is fulfilled.
    const result = await practiceCoding(input);
    console.log('Current user activity:', result);
  } catch (err) {
    // If the promise is rejected an error is logged.
    console.error(err);
  }
  process.exit();
};

/** Intializer accepts the user input from process environment variables */
init(userInput);