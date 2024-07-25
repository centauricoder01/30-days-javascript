// ACTIVITY - 1 UNDERSTAIND PROMISES

const newPromise = new Promise((resolve, reject) => {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Assuming the response is in JSON format
    })
    .then((data) => {
      setTimeout(() => {
        resolve("This is Resolve Message");
      }, 2000);
    })
    .catch((error) => {
      setTimeout(() => {
        reject("This is Reject Message: " + error);
      }, 2000);
    });
});

newPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// ACTIVITY - 2  CHAINING PROMISES

function fetchData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

// Chaining promises
fetchData("Fetching data from server 1...", 1000)
  .then(() => fetchData("Fetching data from server 2...", 2000))
  .then(() => fetchData("Fetching data from server 3...", 1500))
  .then(() => fetchData("All data fetched.", 500))
  .catch((error) => console.error("Error fetching data:", error));

//ACTIVITY - 3 USING ASYNC AWAIT

const asyncFunction = async () => {
  const wait = await fetch("https://reqres.in/api/users");
  const result = await wait.json();
  return result;
};

asyncFunction()
  .then((res) => {
    // console.log(res, "This is Result");
  })
  .catch((err) => {
    console.log(err);
  });

const secondAsyncFunction = async () => {
  try {
    const wait = await fetch("htts://reqres.in/api/users");
    const result = await wait.json();
    return result;
  } catch (error) {
    throw error; // Re-throwing the error to be caught in the .catch block
  }
};

secondAsyncFunction()
  .then((res) => {
    console.log(res, "This is Result");
  })
  .catch((err) => {
    console.error("Error fetching data");
  });

// ACTIVITY - 4  SOLVED QUESTIONS IN THE PREVIOUS QUESTIONS

// ACTIVITY - 5 CONCURRENT PROMISES

// promise.all();
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});

// Promise.race();

const promiseOne = new Promise((res, rej) => {
  setTimeout(res, 100, "Ham First");
});

const promiseTwo = new Promise((res, rej) => {
  setTimeout(res, 200, "Nahi, Ham First");
});

Promise.race([promiseOne, promiseTwo]).then((values) => {
  console.log(values);
});
