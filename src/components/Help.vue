<template>

  <h2 class="text-huge">Pomoc</h2>

  <h3 class="text-big">FAQ (Często zadawane pytania)</h3>
  <p>
    <a href="https://lvlup.pro/pomoc/" target="_blank">lvlup.pro/pomoc</a>
    <br> To pierwszy punkt pomocy, warto tu zajrzeć :)
  </p>

  <h3 class="text-big">Forum</h3>
  <p>
    <a href="https://forum.lvlup.pro/" target="_blank">forum.lvlup.pro</a>
    <br> Jeśli w FAQ nie ma odpowiedzi na twoje pytanie warto poszukać poradnika lub utworzyć wątek
    <br> Poradniki stworzone przez administrację lvlup.pro oraz społeczność to rozwiązanie większości problemów
  </p>
  <h3 class="text-big">Zgłoszenie (ticket)</h3>
  <p>
    Jeśli twoja sprawa nie została poruszona w FAQ ani na forum lub dotyczy tylko i wyłącznie twojej usługi np. kwestia płatności czy awarii to utwórz zgłoszenie formularzem poniżej
  </p>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <label class="label">Usługa</label>
      <div class="select full-width">
        <select>
          <option>Wybierz</option>
          <option>Hosting WWW ID 111</option>
          <option>Serwer VPS ID 2</option>
          <option>Inne</option>
        </select>
        <i class="fa fa-angle-down fa-2"></i>
      </div>
    </div>
    <div class="col-xs-12 col-md-6">
      <label class="label">Twój poziom znajomości tematu</label>
      <div class="select full-width">
        <select>
          <option>Jestem nowy, zróbcie to za mnie</option>
          <option>Wiem o co chodzi, chcę się doradzić</option>
          <option>Prawdopodobnie wiem więcej od was</option>
        </select>
        <i class="fa fa-angle-down fa-2"></i>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <label class="label" for="name">Temat - po tym obsługa będzie kojarzyć twoją sprawę</label>
      <div class="input full-width">
        <input id="name" placeholder="Np. Zmiana pakietu, serwer testowy" type="text">
      </div>
    </div>
    <div class="col-xs-12 col-md-6">
      <label class="label">Priorytet i czas odpowiedzi</label>
      <div class="select full-width">
        <select>
          <option>Bardzo niski - odpowiedź w 72h (mało istotne sprawy)</option>
          <option>Niski - odpowiedź w 48h (generalne pytania)</option>
          <option>Normalny - odpowiedź w 24h (standardowe sprawy)</option>
          <option>Wysoki - odpowiedź w 12h - opłata 5 PLN</option>
          <option>ASAP - tak szybko jak możliwe - opłata 20 PLN</option>
        </select>
        <i class="fa fa-angle-down fa-2"></i>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <label class="label" for="message">Wiadomość - pamiętaj że jeśli będziesz miły dla administracji to administracja będzie też miła dla Ciebie :)</label><!--Nie bądź cebula, ok? -->
      <textarea class="textarea" id="message"></textarea>
    </div>
  </div>


  <div class="row">
    <div class="col-xs-12">
      <button class="button button-green button-big block-mobile">Utwórz ticket</button>
    </div>
  </div>
</template>
