import axios from 'axios';

async function getData(number) {
   const { data: user  } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
   const { data : postUser  } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+number);

   const returnValue = {...user,...postUser};
   
   return  returnValue;
};

export default getData;