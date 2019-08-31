function cipherText() {
    var textCipher = document.getElementById('input-text-cipher-decipher').value;
    var result = "";

    for (var i = 0; i < textCipher.length; i++) {
        var word = textCipher[i];

        if ((word.charCodeAt(0) >= 65) && (word.charCodeAt(0) <= 90)) {
            var num = word.charCodeAt(0) - 65;
            result += String.fromCharCode(((num + 7) % 26) + 65);
        } else if ((word.charCodeAt(0) >= 97) && (word.charCodeAt(0) <= 122)) {
            var num = word.charCodeAt(0) - 97;
            result += String.fromCharCode(((num + 7) % 26) + 97);
        } else if (word.charCodeAt(0) === 32) {
            var num = word.charCodeAt(0);
            result += String.fromCharCode(num);
        }
    }
    document.getElementById('cipher-result').innerHTML = result;
    return result;
}


function decipherText() {
    var textDecipher = document.getElementById('input-text-cipher-decipher').value;
    var result = "";

    for (var i = 0; i < textDecipher.length; i++) {
        var word = textDecipher[i];
        if ((word.charCodeAt(0) >= 65) && (word.charCodeAt(0) <= 90)) {
            var num = word.charCodeAt(0) - 65;
            result += String.fromCharCode(((num + 19) % 26) + 65);
        } else if ((word.charCodeAt(0) >= 97) && (word.charCodeAt(0) <= 122)) {
            var num = word.charCodeAt(0) - 97;
            result += String.fromCharCode(((num + 19) % 26) + 97);
        } else if (word.charCodeAt(0) === 32) {
            var num = word.charCodeAt(0);
            result += String.fromCharCode(num);
        }
    }
    document.getElementById('cipher-result').innerHTML = result;
    return result;
}

function cleanText() {
    document.getElementById('input-text-cipher-decipher').value = '';
    return
}