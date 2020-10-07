
const calculateCharacter = () =>{
let tweet = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

let tweetCount = tweet.length;

let tweetLeft = 150 - tweetCount;

console.log(`You have written ${tweetCount} characters, you have ${tweetLeft} characters remaining.`)
    
}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
