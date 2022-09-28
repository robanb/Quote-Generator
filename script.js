const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

//Show the Quote
function newQuote() {
  //Pick a random quote from the apiQuotes Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //Check if Author field is empty and replace it with "Anonymous"
  if (!quote.author) {
    authorText.textContent = "Anonymous";
  } else {
    authorText.textContent = quote.author;
  }

  //Check the quote length to determine the styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

// Get quotes from API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Catch the error here
  }
}

//Tweet Quotes
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//Event Listener
//newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On Load
getQuotes();
