

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// ==========================================  Search Bar   ==============================================//

function myFunction(e) {
    
      var input = document.getElementById("searchbar");
      
      var filter = input.value.toUpperCase();
      var ul = document.getElementById("scUL");
      console.log(ul)

      var li = document.getElementsByClassName("scLi");
  
      for (i = 0; i < li.length; i++) {
          var a = li[i].getElementsByClassName("scA")[0];
          var txtValue = a.textContent || a.innerText;
  
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          }
           else {
              li[i].style.display = "none";
          }
      }
  }
  function show() {
        document.getElementById("scUL").style.display = "block" ;
        document.getElementById("canIcn").style.display = "contents" ;
  }

  function hide() {
    document.getElementById("scUL").style.display = "none" ;
    document.getElementById("canIcn").style.display = "none" ;
}



