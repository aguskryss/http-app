
/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {


    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    
    return data[0];
};



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async (  element  ) => {
    
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';
    
    //await fetchQuote();
    const quoteLabel = document.createElement('blackquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next quote';


    const renderQuote = (quote) => {
        quoteLabel.innerHTML = quote.quote;
        authorLabel.innerHTML = quote.author;

        element.replaceChildren(  quoteLabel, authorLabel, nextQuoteButton  );
    }

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    });

    fetchQuote()
        .then(renderQuote);


};