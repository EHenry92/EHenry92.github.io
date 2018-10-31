const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const shuffleAlpha = () => {
  let randAlpha = alphabet.slice();
  let holder = new Map();
  for (var i = randAlpha.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    var temp = randAlpha[i];
    randAlpha[i] = randAlpha[rand];
    randAlpha[rand] = temp;
  }
  for (let k = 0; k < alphabet.length; k++) {
    holder.set(alphabet[k],randAlpha[k])
  }
  return holder;
}

export default shuffleAlpha;
