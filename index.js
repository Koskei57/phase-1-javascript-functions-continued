// code your solution here
/*if (activity = "roller-skate") {
    return "This saturday, I want to roller-skate!";
    } else {
    return "This Saturday, I want to bathe my dog!";
    }*/
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";

}

let wrapAdjective = function(name = "*") {
    //let result = wrapAdjective('*')
    //let emphatic = result("a hard worker")
    return function(adjective = "special") {
        return `You are ${name}${adjective}${name}!`;
    }
}