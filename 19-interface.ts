// var sampleObj = {
//     username: "Fazlur Rahman",
//     designation : "Full Stack Developer",
//     empids : 2323,
//     displayFuncs : function displayFunc(){
//         console.log(this.username)
//     }
// }

// interface userObj {
//     username : String,
//     designation : String,
//     empids : number,
//     displayFuncs : ()=>void
// }

// var sampleObj : userObj = {
//     username: "Fazlur Rahman",
//     designation : "Full Stack Developer",
//     empids : 2323,
//     displayFuncs : function displayFunc(){
//         console.log(this.username)
//     }
// }


interface userObj {
    username : String,
    designation : String,
    empids ?: number,
    displayFuncs : ()=>void
}


// var sampleObj : userObj = {
//     username: "Fazlur Rahman",
//     designation : "Full Stack Developer",
//     displayFuncs : function displayFunc(){
//         console.log(this.username)
//     }
// }

// var un = sampleObj.username
// var ds = sampleObj.designation
// console.log(un, ds);

// object destructing
// var {username, designation} = sampleObj
// console.log(username);
// console.log(designation);

function sampObj(userObject : userObj){
    console.log(userObject);
}
sampObj({
        username: "Fazlur Rahman",
        designation : "Full Stack Developer",
        displayFuncs : function displayFunc(){
            console.log(this.username)
        }
});

