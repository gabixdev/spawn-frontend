<template>
  <h2 class="text-huge">Zamów nową usługę</h2>

  <div class="tabs">
    <a title="Tab 1" v-bind:class="{ 'active': step == 1 }" class="tab">1. Wybierz usługę</a>
    <a title="Tab 2" v-bind:class="{ 'active': step == 2 }" class="tab">2. Dostosuj</a>
    <a title="Tab 3" v-bind:class="{ 'active': step == 3 }" class="tab">3. Potwierdź</a>
  </div>

  <div id="steps">
    <div v-if="step == 1" id="step1">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <label class="label">Usługa</label>
          <div class="select full-width">
            <select>
              <option>Hosting WWW</option>
              <option>Serwer Minecraft</option>
            </select>
            <i class="fa fa-angle-down fa-2"></i>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <label class="label">Opis usługi</label>
          <p>
            Hosting WWW pozwoli Ci umieścić stronę w sieci Internet tak aby każda osoba na Ziemi z przeglądarką mogła ją zobaczyć.
            <br>
            <br> Przedstaw siebie dzięki blogowi, swój projekt lub sprzedawaj produkty przez Internet używając sklepu
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 align-right">
          <button v-on:click="nextStep" class="button button-green button-big block-mobile">Dalej</button>
        </div>
      </div>
    </div>
    <div v-if="step == 2" id="step2">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <label class="label">Lokalizacja</label>
          <div class="select full-width">
            <select>
              <option>Polska, Olsztyn - Sprint Data Center</option>
              <option>Francja, Roubaix - OVH</option>
            </select>
            <i class="fa fa-angle-down fa-2"></i>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <label class="label">Opis lokalizacji</label>
          <p>

          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <label class="label">Pakiet</label>
          <div id="slider">

          </div>
          <h2 class="text-big">{{plan}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 align-right">
          <button v-on:click="nextStep" class="button button-green button-big block-mobile">Dalej</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
      // sidebar, alert
    },
    data() {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        step: 1,
        msg: 'About',
        plan: 1
      }
    },
    methods: {
      nextStep: function() {
        this.step++
          this.slider()
      },
      slider: function() {
        var vue = this
        setTimeout(function(plan) {
          var noUiSlider = require('nouislider')
          require("nouislider/distribute/nouislider.css")
          var handlesSlider = document.getElementById('slider')
          noUiSlider.create(handlesSlider, {
            start: 1,
            step: 1,
            range: {
              'min': [1],
              'max': [8]
            }
          })
          handlesSlider.noUiSlider.on('update', function(a,b,c) {
            vue.plan=c
          });
        }, 0)
      }
    },
    ready: function() {
      //this.slider();
    }
  }
</script>
<style>
  .tabs a {
    cursor: not-allowed!important;
  }
</style>
