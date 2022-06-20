var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
]

var newsfeed = [
    { 
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is soooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
]

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
                return true
            }
    }
    return false
}

function singIn(username, password) {
    if (isUserValid(username, password)) {
            console.log(newsfeed)
        } else {
            alert("Sorry, wrong username and password")
        }
}

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

singIn(userNamePrompt, passwordPrompt)