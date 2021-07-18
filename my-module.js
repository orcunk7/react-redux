
import fetch from 'node-fetch';

/*fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((user) => {
  console.log("users yüklendi", user);

  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => data.json())
  .then((post) => {
    console.log("post 1 yüklendi",post);

    fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((data)=> data.json())
    .then((data) => console.log("post 2 yüklendi",data))
  });
});*/

async function getData()
{
  const users = await (
   await fetch("https://jsonplaceholder.typicode.com/users") 
  ).json();
  console.log(users);

  const post1 = await(
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  console.log(post1);

  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();
  console.log(post2);

}

getData();