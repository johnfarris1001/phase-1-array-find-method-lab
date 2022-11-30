// code your solution here




function superbowlWin(array) {
    if (array.find(array => array.result === "W") === undefined) {
        return undefined
    }
    return array.find(array => array.result === "W").year;
}

