<style>
  @media(max-width:767px) {
    #left-menu {
	  width: 100%;
    }
	
	#right-content {
	  width: 100%;
	}
	
	#logo {
		width: 50%;
	}
	
	#topbar {
		background: #2c3e50 !important;
		height: 54px !important;
	}
	
	#topbar #logo {
		margin: auto !important;
		padding-top: 0px !important;
		display: block;
	}
  }

  @media(min-width:768px) {
    #left-menu {
      height: 100vh;
      width: 250px;
      float: left;
    }
    
    #right-content {
      width: calc(100% - 250px);
      float: left;
    }
}

  @media(min-width:992px) {}

  @media(min-width:1200px) {}

  /*#logo {
    width: 50%;
  }*/

  #topbar {
    background: #2c3e50;
	height: 64px;
  }
  
  #topbar #logo {
    /* transform: translateY(-15px) translateX(5px); */
	margin-top: -16px;
	margin-left: 7px;
  }
  
  #left-menu {
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  #left-menu .containerz .paginator-list li:first-child a {
    border-width: 1px 0px 1px 0px!important;
  }

  #left-menu .containerz .paginator-list li a {
    /*border-style: solid!important;
    border-width: 0px 0px 1px 0px!important;*/
  }

  #left-menu .containerz .paginator-list li a i {
    vertical-align: middle;
    margin-right:5px;
  }

  #logo {
    max-width: 210px;
    padding-top: 15px;
    padding-bottom: 30px;
  }
  
  #left-menu .paginator-list li {
    width: 100%;
    margin-bottom: 0px;
  }

  #left-menu .paginator-list-item i {
    margin-left: 0;
    margin-right: 0;
  }

  #right-content {
    color: #4c4f53;
  }
  .main {
  }
</style>
