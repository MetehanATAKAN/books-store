const generateRandomPrice = (num) => {
    const length = num.toString().length;

    if (length <= 2) {
      return num;
    } else {
      const result = parseInt(num.toString().slice(-2));
      return result;
    }
};

export const NewBooks = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=2024&maxResults=10&orderBy=newest&key=${process.env.API_KEY}`
    );
    const { items } = await response.json();
    const newResult = items.map(data => (
        {...data,price:data.volumeInfo.industryIdentifiers ? generateRandomPrice(data.volumeInfo.industryIdentifiers[0].identifier) : 23}
    ))
    ;
    return newResult;
  } catch (error) {
    console.log(error);
  }
};

export const HighlightsBooks = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10&orderBy=newest&key=${process.env.API_KEY}`
    );
    const { items } = await response.json();
    const newResult = items.map(data => (
        {...data,price:data.volumeInfo.industryIdentifiers ? generateRandomPrice(data.volumeInfo.industryIdentifiers[0].identifier) : 23}
    ))
    return newResult;
  } catch (error) {
    console.log(error);
  }
};
