console.log('Hello!');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const quoteBtn = document.querySelector('.btn');
const quotes = [
  {
    quote:
      'You have power over your mind – not outside events. Realize this, and you will find strength.',
    person: 'Marcus Aurelius',
  },
  {
    quote:
      'Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him.',
    person: 'Epictetus',
  },
  {
    quote: 'Luck is what happens when preparation meets opportunity.',
    person: 'Seneca',
  },
  {
    quote: 'If the light is in your heart, you will find your way home.',
    person: 'Rumi',
  },
  {
    quote: 'No one will reap except what they sow.',
    person: 'Quran 6:164',
  },
  {
    quote:
      'Doing good for a good done to you is simply repayment, whereas doing good for an evil done to you is a tremendous virtue.',
    person: 'Hazrat Umar Farooq (R.A)',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    person: 'Confucius',
  },
  {
    quote: 'The supreme art of war is to subdue the enemy without fighting.',
    person: 'Sun Tzu',
  },
  {
    quote:
      'The ultimate aim of the ego is not to see something, but to be something.',
    person: 'Allama Iqbal',
  },
  {
    quote:
      "Don't let your love become an obsession, nor your hate become destruction.",
    person: 'Hazrat Umar Farooq (R.A)',
  },
];
// show random quote function
function showQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
  console.log(quotes[random].quote);
  console.log(quotes.length);
}
window.onload = showQuote;
quoteBtn.addEventListener('click', showQuote);
// console.log(quotes[0].quote)
// console.log(person)
// console.log(newQuoteBtn)
