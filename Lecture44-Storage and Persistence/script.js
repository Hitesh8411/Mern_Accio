let key ="name"
let value ="Hitesh"
let value2 ="Accio"
localStorage.setItem(key, value)
localStorage.setItem(key, value2)

localStorage.setItem("key1","value1")
localStorage.setItem("key2","value2")
localStorage.setItem("key3","value3")
localStorage.setItem("key4","value4")

localStorage.removeItem(key);




const str = "a".repeat(1000 * 25 * 1000);
localStorage.setItem('bigdData',str)


console.log(localStorage.getItem("bigData"));
console.log(localStorage.length);


for(let i=0;i<localStorage.length;i++){
    let currKey = localStorage.key(i);
    console.log(currKey, localStorage.getItem(currKey));
}

//haslocalstorage
//security
//quoto exceed error

//auto save (inpute type )


