/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/**
 * Going for 'Exceeds Expectations' Requirements. Please reject if it does not meet the requirements.
 */

/*** 
 * `quotes` array
 * Holds a collection of quotes and connected information (source, citation, year, tags)
 *
***/
const quotes = [
  {
    quote: `Hold sacred your capacity for understanding. For in it is all, that our ruling principle won't allow anything to enter that is either inconsistent with nature or with the constitution ofa logical reature. It's what demands due diligence, care for others, and obedience to God.`,
    source: 'Marcus Aurelius',
    citation: 'Meditations, 3.9',
    year: '121-180 AD',
    tags: ['stoicism']
  },
  {
    quote: `You are not your body and hairstyle, but your capacity for choosing well. If your choices are beautiful, so too will you be`,
    source: 'Epictetus',
    citation: 'Discourses, 3.1.39b-40a',
    year: '1535 AD',
    tags: ['stoicism']
  },
  {
    quote: 'Good',
    source: 'Jocko Willink',
    citation: '',
    year: '',
    tags: ['growth_mindset']
  },
  {
    quote: `Today I escaped from the crush of circumstances, or better put, I threw them out, for the crush wasn't from outside me but in my own assumptions.`,
    source: 'Marcus Aurelius',
    citation: 'Meditations, 9.13',
    year: '121-180 AD',
    tags: ['stoicism']
  },
  {
    quote: `If you do not listen to that thing that beckons you forward, you will pay for it like you cannot possibly imagine.`,
    source: 'Dr. Jordan B. Peterson, PhD',
    citation: `Biblical Series IX: The Call to Abraham (YouTube)`,
    year: '2017',
    tags: ['JBP', 'meaning']
  },
  {
    quote: `The cause of my irritation is not in this person but in me`,
    source: 'Anthony de Mello',
    citation: `The Way to Love`,
    year: '1995',
    tags: ['stoicism']
  }
]

/**
 * Background Colors Array
 * 
 *  Green, Blue, Auburn, Lighter Auburn, Red, Natural Paper
 */
const bgColors = ['#30e849', '#30c9e8', '#c75716', '#e86830', '#e83a30', '#f4c89c'];


/**
 * Random BG Color function
 * Selects a random color from the bgColors array
 * Sets page background to the random color
 */
function setRandomBgColor() {
  const upperLimit = bgColors.length;
  const newColor = Math.floor(Math.random() * upperLimit + 1);
  document.body.style.backgroundColor = bgColors[newColor];
}

/***
 * `getRandomQuote` function
 * Selects and returns a random object from the quote array
***/
function getRandomQuote() {
  const upperLimit = quotes.length;
  const randomNumber = Math.floor(Math.random() * upperLimit + 1)
  return quotes[randomNumber];
}


/***
 * `printQuote` function
 * 
***/

function printQuote() {
  let newQuoteObj = getRandomQuote();
  let quote = document.querySelector('p.quote');
  let source = document.querySelector('p.source');
     
  function buildSourceHTML() {
    let sourceHTML = '';
    sourceHTML = `<p>${newQuoteObj.source}`;

    if (newQuoteObj.citation != '') {
      sourceHTML += `
      <span class="citation">${newQuoteObj.citation}</span>
      `;
    }
    if (newQuoteObj.year != ''){
      sourceHTML += `
      <span class="citation">${newQuoteObj.year}</span>
      `;
    }
    if (newQuoteObj.tags != ''){
      sourceHTML += `
      <p>
      <span class="tags">#${newQuoteObj.tags.join(', #')}</span>
      </p>
      `;
    }
    sourceHTML += `</p>`;
    return sourceHTML;
  }

  quote.innerHTML = newQuoteObj.quote;
  source.innerHTML = buildSourceHTML();
  setRandomBgColor();
 
}

/**
 *  Auto-refresh quotes and bg color every 10 seconds
 */
setInterval(printQuote, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);