export default function initBlockChain() {
  const brlQuote = document.querySelector(".brl"),
    usdQuote = document.querySelector(".usd"),
    gbpQuote = document.querySelector(".gbp");

  function fetchBtc() {
    fetch("https://blockchain.info/ticker")
      .then((response) => response.json())
      .then((body) => displayQuote(body));
  }

  fetchBtc();

  function displayQuote(value) {
    brlQuote.innerText = `R$ ${value.BRL.buy}`.split(".").join(",");
    usdQuote.innerText = `$ ${value.USD.buy}`.split(".").join(",");
    gbpQuote.innerText = `£ ${value.GBP.buy}`.split(".").join(",");
  }

  //setInterval(fetchBtc, 1000 * 10);
}
