<style>

@media(max-width:767px) {
    #left-menu {
        width: 100%;
    }
    
    #right-content {
        width: 100%;
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

#left-menu .paginator-list-item {
  width: 100%;
  margin: 0;
  border-radius: 0px; 
}

#left-menu .paginator-list-link {
  border: 0px;
  padding-left: 30px;
  background: transparent;
}

#left-menu .paginator-list-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

#left-menu .paginator-list-item i {
  margin-left: 0;
  margin-right: 0;
}

#right-content {
  color: #4c4f53;
}

label.label {
  color: black !important;
  font-weight: bold;
}

</style>
