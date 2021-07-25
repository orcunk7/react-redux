
import fetch from 'node-fetch';
import axios from 'axios';

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
});

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

}*/

/**axios */
async function getData()
{
  const {data : users} = await axios("https://jsonplaceholder.typicode.com/users");
  console.log(users);

  const {data :post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
  console.log(post1);

  const {data:post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");
  console.log(post2);
}


(async () => {
  const {data : user} = await axios("https://jsonplaceholder.typicode.com/users");
  const {data :post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
  const {data :post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

  console.log("user",user);
  console.log("user",post1);
  console.log("user",post2);

})();*/


const getuser = () => {
  return new Promise(async (resolve,reject) => {
    const {data} = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
  });
}

const getPost = (postId) => {
  return new Promise(async (resolve,reject) => {
    const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + postId);
    resolve(data);
  });
}

getuser()
.then((data) => console.log(data))
.catch((e) => console.log(e));

getPost(1)
.then((data) => console.log(data))
.catch((e) => console.log(e));



(async () => {
  await getuser()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

  await getPost(1)  
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
})()

