let newPass = ''
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g' , 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let passwordLetters = []
let hashList = []
let hashedPassword = ''
function hash(text){
    newPass = text
    for(let key in text){
        passwordLetters.push(text[key])
    }
    for(let i = 0; i < passwordLetters.length + 1; i++ ){
        letters.map((letter, index) => {
            if(passwordLetters[i] === 'z'){
                hashList.push('a')
            }
            else if(passwordLetters[i] === 'Z'){
                hashList.push('A')
            }
            else if(passwordLetters[i] === letter){
                hashList.push(letters[index + 1])
            }
            else if(passwordLetters[i] === letter.toUpperCase()){
                hashList.push(letters[index + 1].toUpperCase())
            }
        })
    }
    for(let key in hashList){
        hashedPassword += hashList[key]
    }
    return hashedPassword;
}

let anewPass = ''
let apasswordLetters = []
let ahashList = []
let ahashedPassword = ''
function unHash(text){
    anewPass = text
    for(let key in text){
        apasswordLetters.push(text[key])
    }
    for(let i = 0; i < apasswordLetters.length + 1; i++ ){
        letters.map((letter, index) => {
            if(apasswordLetters[i] === 'a'){
                ahashList.push('z')
            }
            else if(apasswordLetters[i] === 'Z'){
                ahashList.push('Z')
            }
            else if(apasswordLetters[i] === letter){
                ahashList.push(letters[index - 1])
            }
            else if(apasswordLetters[i] === letter.toUpperCase()){
                ahashList.push(letters[index - 1].toUpperCase())
            }
        })
    }
    for(let key in ahashList){
        ahashedPassword += ahashList[key]
    }
    return ahashedPassword;
}