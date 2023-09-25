// creating helper functions to generate the password

// ? function to create random characters from ASCII values
export const getRandomChar = (min, max) => {
  //   Calculate the limit
  const limit = max - min + 1;

  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
};

// ? Function to grab random symbols
export const getSpecialSymbol = () => {
  // variable to hold the special characters
  const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
  // get the random special character
  return specialChar[Math.floor(Math.random() * specialChar.length)];
};
