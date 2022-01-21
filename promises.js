//PROMISES

const promise = new Promise((res, reject) => {
    true ? res("stuff worked") : reject("it broke")
})

//chaining promises with .then adding a .catch catches errors specified -- must be at the end

promise
    .then(result => console.log(result + "!"))
    .then(result2 => console.log(result2 + "?"))
    .then(result3 => console.log(result3 + "!"))
    .catch(() => console.log("error caught!!"));



const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "HII!!")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "BYYEE!!")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Is it me youre looking for!!")
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const timedPromise = new Promise((res, rej) => {
    setTimeout(res, 1000, "Hellooooooo!")
})

timedPromise.then(result => "Success")

const timedPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000)
});


// #2) Run the above promise and make it console.log "success"

timedPromise.then(result => console.log("Success"))
timedPromise2.then(resp => console.log(resp))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const firstPromise = Promise.resolve(
    setTimeout(() => {
        console.log("success");
    }, 4000)
);


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
Promise.reject('failed')
    .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
    console.log(results[3])
})

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
    console.log(results[3])
})
    .catch(err => console.log('ughhhh fix it!', err));



// ASYNC AWAIT



// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then(console.log);

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/")
    const data = await response.json()
    console.log(data)
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
    const [users, posts, albums] = await Promise.all(
        urls.map((url) => fetch(url).then((resp) => resp.json())),
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
};

const getData = async function () {
    const [users, posts, albums] = await Promise.all(
        urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();
        }),
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map(async function (url) {
                const response = await fetch(url);
                return response.json();
            }),
        );
        console.log("users", users);
        console.log("posta", posts);
        console.log("albums", albums);
    } catch (err) {
        console.log("ooooooops", err);
    }
};

// ES9 ASYNC
restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
    // p1 = 1
    // p2 = 2
    // p3 = [3, 4, 5]
}


const myObject = {
    a: 1,
    b: 2,
    c: 3
};

const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }

//finally
const urls = [
    'https://swapi.py4e.com/api/people/1',
    'https://swapi.py4e.com/api/people/2',
    'https://swapi.py4e.com/api/people/3',
    'https://swapi.py4e.com/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
    .then(array => {
        throw Error
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(() => console.log('extra action here'))




const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/postss',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('ooooooops', err);
    }
}

//New for await of feature:

const loopThroughUrl = (urls) => {
    for (url of urls) {
        console.log(url)
    }
}


const getData2 = async function () {
    const arrayOfPromises = urls.map(url => fetch(url));
    for (const request of arrayOfPromises) {
        console.log(request);
    }

    for await (const request of arrayOfPromises) {
        const data = await request.json();
        console.log(data)
    }
    //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
}

