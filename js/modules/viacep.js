export default function initViaCep() {
  const cep = document.getElementById("CEP"),
    street = document.getElementById("street"),
    district = document.getElementById("bairro"),
    city = document.getElementById("cidade"),
    state = document.getElementById("UF");

  cep.addEventListener("change", handleKeyUp);

  function handleKeyUp(e) {
    let cepValue = e.target.value;
    locationInfo(cepValue);
  }

  function locationInfo(location) {
    fetch("https://viacep.com.br/ws/" + location + "/json/")
      .then(function (response) {
        return response.json();
      })
      .then(function (corpo) {
        displayLocation(corpo);
      });
  }

  function displayLocation(getInfoBody) {
    let htmlString = getInfoBody;
    street.value = htmlString.logradouro;
    district.value = htmlString.bairro;
    city.value = htmlString.localidade;
    state.value = htmlString.uf;
  }
}
