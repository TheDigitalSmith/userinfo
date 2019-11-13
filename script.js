window.onload = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
      });
      //get the information
      let info = await response.json(); //transform to json
      console.log(info);
    } catch (err) {
      console.log(err);
    }
  };

  function userCard(name) {
  let col = document.createElement("div");
  col.classList.add("col-md-4", "mb-4");
  col.innerHTML += `
  <div id="${user.id}" class="card mb-4 shadow-sm">
        <div class="card-header" style="height:180px;">
            <p class="card-title h-100"><strong>${user.name}</strong><p>
        </div>
          <div class="card-body border-top pb-0">
          <div class="d-flex justify-content-between align-items-baseline">
            <p class="card-text">
              <strong>Price</strong> : $${user.username}
            </p>
            <div class="d-inline-block">
            <button type="button" id="addToCart" class="btn btn-sm btn-outline-dark">
                  Add to cart
            </button> 
              </div>
           </div>
        </div><!-- end of card body -->
    </div><!-- end of card --> `
}



  searchId = async () => {
      let searchQueryId = document.querySelector("#searchBar").value

      if (searchQueryId.length >0) {
        //   document.querySelector("#search").style.display = "block"

      try{
          let response = await fetch ("https://jsonplaceholder.typicode.com/users/" + searchQueryId,
          {
              method: "GET"
          }
          )

          let user = await response.json ()
          let name = user.name;
          let div = document.querySelector("#searchSection");
          div.innerHTML = ""
            console.log(name)
          
      }
      catch(err) {console.log(err)}
    }
    else {
        // document.querySelector("#search").style.dispay = "none"
    }
}

searchUsername = async () => {
    let searchQueryUname = document.querySelector("#searchBar").value
    console.log(searchQueryUname)
    if (searchQueryUname.length >0) {
      //   document.querySelector("#search").style.display = "block"

    try{
        let response = await fetch ("https://jsonplaceholder.typicode.com/users?username=" + searchQueryUname,
        {
            method: "GET"
        }
        )
    
        let user = await response.json ()
        let name = user.name;
        let div = document.querySelector("#searchSection");
        div.innerHTML = ""
          console.log(user)
        
    }
    catch(err) {console.log(err)}
  }
  else {
      // document.querySelector("#search").style.dispay = "none"
  }
}

searchName = async () => {
    let searchQueryName = document.querySelector("#searchBar").value

    if (searchQueryName.length >0) {
      //   document.querySelector("#search").style.display = "block"

    try{
        let response = await fetch ("https://jsonplaceholder.typicode.com/users?name=" + searchQueryName,
        {
            method: "GET"
        }
        )

        let user = await response.json ()
        let name = user.name;
        let div = document.querySelector("#searchSection");
        div.innerHTML = ""
          console.log(name)
        
    }
    catch(err) {console.log(err)}
  }
  else {
      // document.querySelector("#search").style.dispay = "none"
  }
}


      {
      $('.dropdown-toggle').dropdown()
    }