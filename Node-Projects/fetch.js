async function fetching(){
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users =await result.json();
    console.log(users);
}
fetching();