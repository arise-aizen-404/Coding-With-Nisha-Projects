const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.author-name');
const newQuoteBtn = document.getElementById('new-quote-btn');
const twitterBtn = document.querySelector('.twitter-share-btn');

//Arrays of Quotes

const quotes = [
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
        text: "First, solve the problem. Then, write the code",
        author:"John Johnson"
    },
    {
    text: "Experience is the name everyone gives to their mistakes",
    author: "Oscar Wilde"
    },
    {
    text: "In order to be irreplaceable, one must always be different",
    author: "Coco Chanel"
    },
    {
    text: "Java is to Javascript what car is to Carpet",
    author: "Chris Heilmann"
    },
    {
    text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code",
    author: "Dan Salomon"
    },
    {
    text: "Code is like humor. When you have to explain it, it’s bad",
    author: "Cory House"
    },
    {
    text: "Make it work, make it right, make it fast",
    author: "Kent Beck"
    }
];
function getRandomQuote(){
    return quotes[Math.floor(Math.random()*quotes.length)];
}
function displayQuote(){
    const {text,author} = getRandomQuote();
    quoteText.textContent = text;
    quoteAuthor.textContent = author;
}
function tweetQuote(){
    const tweetText = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl);
}
//Event Listeners
newQuoteBtn.addEventListener('click',displayQuote);
twitterBtn.addEventListener('click',tweetQuote);

//Initial quote display
displayQuote();
