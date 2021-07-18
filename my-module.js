
import fetch from 'node-fetch';

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((user) => console.log(user))