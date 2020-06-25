const challenge = (num) => {
    return "Challenge " + num;
}
console.log(challenge(1));

const vowels = (str) => {
    for (count = 0; count < str.length; count++) {
        if (str[count] === 'a' || str[count] === 'e' || str[count] === 'i'|| str[count] === 'o' || str[count] === 'u') {
            console.log(str.charAt(count));
            count++;
        }
    }
}
vowels('Hello')
console.log(challenge(3));

const everyThird = (str) => {
    let count = 2;
    while (count <= str.length) {
        console.log(str[count]);
        count += 3;
    }
}
everyThird("I am the alfalfa and the omelette.");
console.log(challenge(4));

const firstFour = (str, num) => {
    let count = 0;
    while (count < str.length) {
        console.log(str[count]);
        count += 4;
    }
}
firstFour("Oh hi, I didn't see you there. Welcome.", 4);
console.log(challenge(5));

const everyYou = (str) => {
    let count = 0;
    while (count < str.length) {
        if (str[count] === 'u') {
            console.log(count)
            //console.log(str[count]) gives me u u u 
        }
        count ++;
    }
}
everyYou('You picked the wrong house, bub.');
console.log(challenge(6));

const firstIndex = (str) => {
    let count = 0;
    while (count < str.length) {
        if (str[count] === 'u') {
            console.log(str.search('u'));
        }
        count++;
    }
}
firstIndex('You picked the wrong house, bub.');
console.log(challenge(7));

const firstIndexAgain = (str) => {
    let count = 0;
    while (count < str.length) {
        if (str[count] === 'u') {
            console.log(str.search('u'));
        } else {
            console.log(str.search('u'))
        }
        count++;
    }
}
firstIndexAgain("I'm Canadian.");



