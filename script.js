window.onload = async () => { //artistName = "eminem" or "metallica" || DOMplaceholder = "#rockSection" etc...
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/users",
              {
                method: "GET"
            })
             //get the information 
            let info = await response.json() //transform to json
            console.log(info)

            
          }
          catch(err) { console.log(err) }
      }
      
      {
      $('.dropdown-toggle').dropdown()
    }