function cipherText() {
    var textToCipher = document.getElementById('input-text-cipher-decipher').value;
    encryptData(textToCipher);
}

function encryptData(letter) {
    var result = "";

    for (var i = 0; i < letter.length; i++) {
        var letterToCipher = letter[i];

        if ((letterToCipher.charCodeAt(0) >= 65) && (letterToCipher.charCodeAt(0) <= 90)) {
            var num = letterToCipher.charCodeAt(0) - 65;
            result += String.fromCharCode(((num + 7) % 26) + 65);
        } else if ((letterToCipher.charCodeAt(0) >= 97) && (letterToCipher.charCodeAt(0) <= 122)) {
            var num = letterToCipher.charCodeAt(0) - 97;
            result += String.fromCharCode(((num + 7) % 26) + 97);
        } else if (letterToCipher.charCodeAt(0) === 32) {
            var num = letterToCipher.charCodeAt(0);
            result += String.fromCharCode(num);
        }
    }
    document.getElementById('cipher-result').innerHTML = result;
    return result;
}


function decipherText() {
    var textDecipher = document.getElementById('input-text-cipher-decipher').value;
    decryptData(textDecipher);
}

function decryptData(letter) {
    var result = "";

    for (var i = 0; i < letter.length; i++) {
        var letterToDecipher = letter[i];

        if ((letterToDecipher.charCodeAt(0) >= 65) && (letterToDecipher.charCodeAt(0) <= 90)) {
            var num = letterToDecipher.charCodeAt(0) - 65;
            result += String.fromCharCode(((num + 19) % 26) + 65);
        } else if ((letterToDecipher.charCodeAt(0) >= 97) && (letterToDecipher.charCodeAt(0) <= 122)) {
            var num = letterToDecipher.charCodeAt(0) - 97;
            result += String.fromCharCode(((num + 19) % 26) + 97);
        } else if (letterToDecipher.charCodeAt(0) === 32) {
            var num = letterToDecipher.charCodeAt(0);
            result += String.fromCharCode(num);
        }
    }
    document.getElementById('cipher-result').innerHTML = result;
    return result;
}

function cleanText() {
    document.getElementById('input-text-cipher-decipher').value = '';
    // document.getElementById('cipher-result').value = '';
    return
}