/*
 - very easy to use
 - it supports all modern browser includig IE
 - it returns promise
 - throws error brilliantly
 - No need to set header cause axios is intelligent
*/

console.clear();
// Only get the data
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then (res => console.log(res))
// .catch(err => console.log(err));

// Add new data
// axios
// .post('https://jsonplaceholder.typicode.com/posts',
//     {
//         title : 'Hello',
//         body : 'Nothing',
//         userId : 1,
//     }
// )
// .then (res => console.log(res.data))
// .catch(err => console.log(err));

// Update any id
// axios
// .put('https://jsonplaceholder.typicode.com/posts/1',
//     {
//         title : 'HelloBro',
//         body : 'Just Changes',
//         userId : 10,
//     }
// )
// .then (res => console.log(res.data))
// .catch(err => console.log(err));

// Partial update of any id 
// axios
// .patch('https://jsonplaceholder.typicode.com/posts/1',
//     {
//         body: 'Partial Change of body'
//     }
// )
// .then (res => console.log(res.data))
// .catch(err => console.log(err));


// axios
// .delete('https://jsonplaceholder.typicode.com/posts/1')
// .then (res => console.log(res.data))
// .catch(err => console.log(err));

//Async await
const addData = async (newData) =>{
    try{
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts',newData);
        console.log(res.data);
    }
    catch(error){
        console.log(error);
    }
}
const getData = async () =>{
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(res.data);
    }
    catch(error){
        console.log(error);
    }
}

const newData = {
    title: 'Newly Added Data',
    body: 'Lorem ipsum',
    userId : 1,
}

addData(newData);
getData();

