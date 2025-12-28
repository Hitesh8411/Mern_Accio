/* const id = setInterval(() => {
  const date = Date.now();
  let diff = Date.now() - date;
  console.log("start");

  while (diff < 5000) {
    // console.log(diff);
    diff = Date.now() - date;
  }
  console.log("end");
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 2000);
 */
function setIntervalUsingSetTimeout() {
  //tasks
  const date = Date.now();
  let diff = Date.now() - date;
  console.log("start");

  while (diff < 5000) {
    // console.log(diff);
    diff = Date.now() - date;
  }
  console.log("end");
  setTimeout(setIntervalUsingSetTimeout, 1000);
}

function callbackFn() {}
function saveFormData(callback) {
  /* 
  CALLBACK HELL:
  //code to save all personal details
  setTimeout(() => {
    //code to save all educational details
    setTimeout(() => {
      //code to save all work experience details
      setTimeout(() => {
        //code to save further X task
        setTimeout(() => {
          //code to save further Y task
          setTimeout(() => {
            //code to save further Z task
            //submit the form & no more settimeout calls
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000); */
  savePersonalDetails();
}
saveFormData(callbackFn);

//managing callbacks to prevent Callback Hell (The Pyramid of Doom)
function savePersonalDetails() {
  //code to save all personal details
  setTimeout(saveEducationalDetails, 1000);
}

function saveEducationalDetails() {
  //code to save all educational details
  setTimeout(saveWorkExperience, 1000);
}

function saveWorkExperience() {
  //code to save all work experience details
}

function callbackAsAnErrorFunction(error, data) {
  if (error) console.error(error);
  else console.log(data);
}

function fetchUser() {
  return { id: 1, name: "Vaibhav" };
}

function displayUser(errorCallbackFn) {
  setTimeout(() => {
    //assume that it is fetched from an API & may also fail
    const userDetails = fetchUser();
    //if API is failing to fetch, it returns null which will be assigned to userDetails
    if (userDetails) {
      errorCallbackFn(null, userDetails);
    } else {
      errorCallbackFn("User not found", null);
    }
  }, 1000);
}

displayUser(callbackAsAnErrorFunction);

function callbackExecutionFlow() {
  console.log("start");
  setTimeout(() => {
    console.log("Inside callback");
  }, 0);
  console.log("end");
}

callbackExecutionFlow();