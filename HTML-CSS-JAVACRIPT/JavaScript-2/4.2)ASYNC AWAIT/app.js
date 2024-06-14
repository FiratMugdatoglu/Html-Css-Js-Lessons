//? ASYNC AWAIT

// async function hello(){
//     return "Hello World";
// }

// console.log(hello()  )



// document.querySelector("#button").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then((post) => {
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((response) => response.json())
//                 .then((comments) => console.log(comments))
//         })
// })

//ASYNC AWAIT İLE YAPILIŞI
document.querySelector("#button").addEventListener("click", async () => {
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await responsePost.json();
    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments = await responseComments.json();
    console.log(comments)
})