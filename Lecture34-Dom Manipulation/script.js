// remove className


//  <section class=" class1 class2 class3 class4">
//         section with four classes
       

//     </section>  using splice remove class3 from the section

// const sectionElement =document.querySelector(".class3");
// const list =sectionElement.className.split(" ")

// list.splice(2,1);
// console.log(list);

const sectionElement =document.querySelector(".class7");
sectionElement.classList.remove("class7");
sectionElement.classList.add("class5");
sectionElement.classList.toggle("class1");
sectionElement.classList.contains("class2")
sectionElement.classList.replace("class5", "class6");





