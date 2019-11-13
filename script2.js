window.onload = async () => {                            //The function is to get the data of users Line 1-8//
    let users = []
    const response = await fetch (
        "https://jsonplaceholder.typicode.com/users"
    );
    users = await response.json ();
    console.log ("users", users);
    const usersDiv = document.querySelector("#users")
    usersDiv.innerHTML = users.map (
        user => 
        `
        <div>${user.name} - ${user.username} - ${user.email} </div> 
        `
    )
    .join ("");
};

filterUsers = () => {
    const selectFilter = document.querySelector("#select-filter").value;
    const textFilter = document.querySelector("#text-filter").value;

    
}