const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    var word = prompt("Enter Your Word Here", "Enter Here");
    checkWord(word);
    numberOfLetters(word);
});

function numberOfLetters(word){
    var array = word.split("");
    var output = "";
    var letters_count = {};
for(let i = 0; i < array.length; i++){
    if(letters_count[array[i]] == undefined){
        letters_count[array[i]] = 0;
    }
    letters_count[array[i]]++;
}
    for(var i in letters_count){
        console.log(i + "= " + letters_count[i]);
        output = output + i + "= " + letters_count[i] + " ";
        output = document.getElementById("letters").innerHTML = output;
    }
}

function checkWord(word){
    var splitWord = word.split("");
    var reverseWord = splitWord.reverse();
    var indicator = 0;
    var result;
    for(var i = 0; i < word.length; i++){
        if(word[i] == reverseWord[i]){
            continue;
        }else{
            indicator++;
        }
        
    }
    if(indicator > 0){
            result = document.getElementById("result").innerHTML = "This is not a pallendrom";
        }else{
            result = document.getElementById("result").innerHTML = "This is a pallendrom";
        }
    return word;
}