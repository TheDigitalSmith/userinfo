window.onload = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
      });
      //get the information
      let info = await response.json(); //transform to json
      console.log(info);

      let userIds = info.filter(user => user.id === "1") 
          console.log (userIds)
      
    //   info.forEach( () => {
    //       userIds.push
    //   });
    } catch (err) {
      console.log(err);
    }
  };