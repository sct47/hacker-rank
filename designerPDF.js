function designerPdfViewer(h, word) {
  const a = 97;
  let wordArr = []
  let charObject = {};
  for (var i = 0; i<26; i++) {
    charObject[String.fromCharCode(a + i)] = h[i];
  }
  let split = word.split('');
  split.forEach(element => wordArr.push(charObject[element]))
  let maxHeight = wordArr.reduce((a,b) => a > b ? a : b);
  return maxHeight * word.length;
}

