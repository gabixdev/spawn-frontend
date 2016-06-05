<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <title>lvlup.pro</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <link rel="shortcut icon" href="ico.ico">
      <!-- Sierra library CSS stylesheets -->
      <link rel="stylesheet" type="text/css" media="all" href="/static/sierra.min.css">
      <!-- DEMO Font -->
      <link rel="stylesheet" href='https://fonts.googleapis.com/css?family=Lato:400,700,300' type='text/css'>
      <!-- Font awesome icons-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  </head>

  <body>
    <div style="margin-bottom:0px" class="message-bar background-info"><p>Uwaga, jest to tylko projekt wyglądu panelu klienta lvlup.pro 3.0, nie jest jeszcze funkcjonalny. Zapraszam do dyskusji na <a style="color:white" href="https://forum.lvlup.pro/t/projekt-nowego-panelu-klienta-v3-0/541" target="blank"><strong>forum</strong></a></p></div>
      <main>
          <div id="left-menu" class="background-dark">
              <p class="text-center">
                <img id="logo" src="/static/logo.png" /><br>
                <img class="rounded" src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" /><br>
                Zalogowany jako: SystemZ <br>
                Stan konta: 13,37 PLN
              </p>
              <ul class="paginator-list">
                  <li class="paginator-list-item">
                      <a v-link="'/'" class="paginator-list-link"><i class="fa fa-fw fa-newspaper-o"></i> Nowości </a>
                  </li>
                  <li class="paginator-list-item">
                      <a v-link="'order'" class="paginator-list-link"><i class="fa fa-fw fa-shopping-cart"></i> Zamów </a>
                  </li>
                  <li class="paginator-list-item">
                      <a v-link="'services'" class="paginator-list-link active"><i class="fa fa-fw fa-bars"></i> Usługi </a>
                  </li>
                  <li class="paginator-list-item">
                      <a v-link="'payments'" class="paginator-list-link"><i class="fa fa-fw fa-money"></i> Płatności</a>
                  </li>
                  <li class="paginator-list-item">
                      <a v-link="'access'" class="paginator-list-link"><i class="fa fa-fw fa-lock"></i> Dostęp</a>
                  </li>
                  <li class="paginator-list-item">
                      <a v-link="'help'" class="paginator-list-link"><i class="fa fa-fw fa-life-ring"></i> Pomoc</a>
                  </li>
              </ul>
          </div>
          <div id="right-content" class="col-xs-12">
              <div class="container">
                  <router-view></router-view>
              </div>
          </div>
      </main>
  </body>

  </html>

</template>

<script>
import "src/styles/Modern.vue"
import "src/skins/Graphite.vue"
</script>
