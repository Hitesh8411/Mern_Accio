// const request = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = Math.random();
//     if (num < 0.5) resolve("Number is lees than 0");
//     else reject("Number is greater than or equa to 0.5");
//   }, 1000);
// });

// console.log(request);

// request
//   .then((resolveMessage) => {
//     console.log({ resolveMessage });
//   })
//   .catch((rejectMessage) => {
//     console.log({ rejectMessage });
//   })
//   .finally(() => {
//     console.log("Request is completed");
//   });

//
// const users = []; 5 suers

// const users = ["hitesh","mayuresh","jay","sunny","john"];

// const req = new Promise((resolve, reject) => {
//   const randomIndex = Math.floor(Math.random() * 10);
//   console.log(`Generated random index: ${randomIndex}`);

//   if (randomIndex < users.length) {
//     resolve(users[randomIndex]);
//   } else {
//     reject(`Invalid index: ${users[randomIndex]}`);
//   }
// });

// req
//   .then(user => {
//     console.log("Found user:", user);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   })
//   .finally(() => {
//     console.log("Request finished.");
//   });

// const users = ["hitesh", "mayuresh", "jay", "sunny", "john"];
// const findUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomIndex = Math.floor(Math.random() * 10);
//     if (randomIndex < users.length) {
//       resolve(users[randomIndex]);
//     } else reject("Not a valid index");
//   }, 1000);
// });

// findUser
//   .then((resolveResponse) => {
//     console.log({ resolveResponse });
//   })
//   .catch((rejectResponce) => {
//     console.log({ rejectResponce });
//   })
//   .finally(() => {
//     console.log("requser completed");
//   });

/* coding the actual callback hell */

const instagramUsers = [
  {
    userId: 0,
    posts: [
      {
        caption: "I'm Bob",
        imageUrl: "#",
        comments: ["good", "don't post", "bob Marley"],
      },
    ],
  },
  {
    userId: 1,
    posts: [
      {
        caption: "I'm Iron man",
        imageUrl: "#",
        comments: ["Tin ka dabba", "Thanos ki jay", "Nice"],
      },
    ],
  },
];

// /* coding the actual callback hell */
// function fetchUser(userId, callback) {
//   setTimeout(() => {
//     if (userId >= instagramUsers.length) callback("invalid userId");
//     else callback(null, instagramUsers[userId]);
//   }, 1000);
// }
// function fetchPosts(user, callback) {
//   setTimeout(() => {
//     if (user?.posts?.length) callback(null, user.posts[0]);
//     else callback("Nothing posted");
//   }, 2000);
// }

// function fetchComments(post, callback) {
//   setTimeout(() => {
//     if (post?.comments?.length) callback(null, post.comments);
//     else callback("User post has no commnets");
//   }, 3000);
// }

function giveRandomNumber(high) {
  return Math.floor(Math.random()) * high;
}

// fetchUser(giveRandomNumber(instagramUsers.length), (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   fetchPosts(data, (error, data) => {
//     if (error) {
//       console.log(error);
//       return;
//     }

//     fetchComments(data, (error, data) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log({ comments: data });
//     });
//   });
// });

/*CODING THE SAME CODE WITH PROMISES */

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId >= instagramUsers.length) reject("invalid userId");
      else resolve(instagramUsers[userId]);
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user?.posts?.length) resolve(user.posts[0]);
      else reject("Nothing posted");
    }, 1000);
  });
}

function fetchComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post?.comments?.length) resolve(post.comments);
      else reject("User post has no commnets");
    }, 1000);
  });
}

fetchUser(giveRandomNumber(instagramUsers.length * 2))
  .then((data) => {
    return fetchPosts(data);
  })
  .then((data) => {
    return fetchComments(data);
  })
  .then((data) => {
    console.log({ comments: data });
  })
  .catch((error) => {
    console.log(error);
  });

  //implement another exmaple as above
  // check if thhis product is in cart array or not 
  // if this prouct is not in cart, add it in cart array
//   else console.log an error error : prouct already in cart
 const cart = [];
 const products = [
    {
        productname:"Laptop",
        productId:101,
        quantity:5,

 },
    {
        productname:"Charger",
        productId:102,
        quantity:10,
    },
    {
        productname:"PS5",
        productId:103,
        quantity:0,
    },
    
    
 ];

 function fetchProducts(decide){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            const index = Math.floor(Math.random() * products.length);
            if (index < products.length) {
                resolve ("")
            
            }
        })
    })
 }