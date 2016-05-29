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
      <main>
          <div class="row">
              <div class="">
                  <div id="left-menu" class="col-xs-12 col-sm-2 background-dark">
                      <div class="containerz">
                          <h1 class="text-big text-center">LVL UP</h1>
                          <p class="text-center">
                            Zalogowany jako:
                            SystemZ
                            <br>
                            Stan konta: 13,37 PLN

                          </p>
                          <ul class="paginator-list">
                              <li class="paginator-list-item">
                                  <a v-link="'/'" class="paginator-list-link"><i class="fa fa-fw fa-newspaper-o"></i> Nowości </a>
                              </li>
                              <li class="paginator-list-item">
                                  <a href="#" class="paginator-list-link"><i class="fa fa-fw fa-shopping-cart"></i> Zamów </a>
                              </li>
                              <li class="paginator-list-item">
                                  <a v-link="'services'" class="paginator-list-link active"><i class="fa fa-fw fa-bars"></i> Usługi </a>
                              </li>
                              <li class="paginator-list-item">
                                  <a href="#" class="paginator-list-link"><i class="fa fa-fw fa-money"></i> Płatności</a>
                              </li>
                              <li class="paginator-list-item">
                                  <a href="#" class="paginator-list-link"><i class="fa fa-fw fa-lock"></i> Dostęp</a>
                              </li>
                              <li class="paginator-list-item">
                                  <a href="#" class="paginator-list-link"><i class="fa fa-fw fa-life-ring"></i> Pomoc</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-10">
                      <div class="container">
                          <router-view></router-view>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  </body>

  </html>

</template>
<style>
@media(max-width:767px) {}

@media(min-width:768px) {
    #left-menu {
        height: 100vh;
        padding-left: 30px;
    }
}

@media(min-width:992px) {}

@media(min-width:1200px) {}

#left-menu .paginator-list li {
  width:100%;
  margin-bottom: .2em;
}

#left-menu .paginator-list-item i {
  margin-left: 0;
  margin-right: 0;
}
</style>
