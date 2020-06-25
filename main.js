const challenge = (num) => {
    return "Challenge " + num;
}
console.log(challenge(1));

//this is number 2;
// const firstFive = (str) => {
// let abc = 'aeiou';
// let count = 0;
// let i = 0;

// while (i < str.length) {
// if (abc.includes(str[i]) && count < 5) {
// console.log(str[i])
// count++
// }
// }
// }
// firstFive('Regular expressions are for term 2.');

//this is number 1
const vowels = (str) => {
    for (count = 0; count < str.length; count++) {
        if (str[count] === 'a' || str[count] === 'e' || str[count] === 'i'|| str[count] === 'o' || str[count] === 'u') {
            console.log(str[count]);
            count++;
        }
    }
}
vowels('Regular expressions are for term 2.')
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
    let i = num;
    while (i < str.length) {
        if (count < 4) {
            console.log(str[i]);
            count++
        }
        i++;
    }
}
firstFour("Oh hi, I didn't see you there. Welcome", 4);
firstFour("Oh hi, I didn't see you there. Welcome", 36);
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
            // console.log(str.search('u'));
            console.log(count);
            return
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
            return
        } else {
            console.log(str.search('u'))
            return
        }
        count++;
    }
}
firstIndexAgain("I'm Canadian.");
firstIndexAgain('You picked the wrong house, bub.');

// firstIn = (str) => {
//     let found = false;
//     let i = 0;
//     while (i < str.length) {
//         if (str[i] === 'u' && found === 'false') {
// console.log(i);
// found = true;
//         }
// i++;
//     }
//     if (found === false) {
//         console.log(-1)

//     }
// }



// let i = start;
// while (i < start + 4 && i < str.length) {
//     console.log(str[i];)
// } params (str, start)

// function fourAfter(word, start) {   
// let end = start + 4;    
// let beginning = start + 0;    
// while(beginning < end) {      
// console.log(word[beginning]);    
// beginning++;}}



