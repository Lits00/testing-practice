function caesarCipher(str, shift) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (char.match(/[a-zA-Z]/)) {
        let charCode = str.charCodeAt(i);

        let isUpperCase = (char === char.toUpperCase());

        charCode = (charCode - (isUpperCase ? 65 : 97) + shift) % 26;

        if (charCode < 0) charCode += 26;
    
        char = String.fromCharCode(charCode + (isUpperCase ? 65 : 97));
      }
      result.push(char);
    }

    return result.join('');
}

module.exports = caesarCipher;