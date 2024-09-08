const axios = require('axios');

async function axiosMethod(){
    const result =await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(result.data);
}
axiosMethod();