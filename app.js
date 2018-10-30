do {
 var options=0;
  var menu = '1. Criptografar\n2. Descriptografar\n3. SAIR\n';
  options = parseInt(prompt(menu));

  if (options === 1) {
    var textToEncrip = prompt('Digite a frase para criptografar');

    function cipher(){

      var result = "";


      for (var i = 0; i < textToEncrip.length; i++){
        var word = textToEncrip[i];

      if ((word.charCodeAt(0) >= 65) && (word.charCodeAt(0) <= 90))
      {
        var num = word.charCodeAt(0) - 65;
        result += String.fromCharCode(((num + 7) % 26) + 65);
      }

      else if ((word.charCodeAt(0) >= 97) && (word.charCodeAt(0) <= 122))
      {
        var num = word.charCodeAt(0) - 97;
        result += String.fromCharCode(((num + 7) % 26) + 97);
      }

      else if (word.charCodeAt(0) === 32)
      {
        var num = word.charCodeAt(0);
        result += String.fromCharCode(num);
      }
    }
  return result;
}
console.log (cipher());
cipher ();
document.getElementById('crip').innerHTML = ("Sua frase decifrada: "+ cipher ());
// alert ("Sua frase decifrada: "+ cipher ());

}

if (options === 2) {

  var textToDecrypt = prompt('Digite a frase para criptografar');

    function decipher(){

      var result = "";

      for (var i = 0; i < textToDecrypt.length; i++){
        var word = textToDecrypt[i];
      if ((word.charCodeAt(0) >= 65) && (word.charCodeAt(0) <= 90))
      {
        var num = word.charCodeAt(0) - 65;
        result += String.fromCharCode(((num + 19) % 26) + 65);
      }
      else if ((word.charCodeAt(0) >= 97) && (word.charCodeAt(0) <= 122))
      {
        var num = word.charCodeAt(0) - 97;
        result += String.fromCharCode(((num + 19) % 26) + 97);
      }
      else if (word.charCodeAt(0) === 32)
      {
        var num = word.charCodeAt(0);
        result += String.fromCharCode(num);
      }
      }
  return result;
}
console.log (decipher());
decipher();
// alert ("Sua frase decifrada: "+ decipher());
document.getElementById('descrip').innerHTML = ("Sua frase decifrada: "+ decipher());
}

}while (options !== 3);
