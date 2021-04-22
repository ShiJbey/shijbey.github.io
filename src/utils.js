export function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomSeed(seedLength = 7) {
  let seed = '';
  const numberAsciiOffset = 48;
  const lowercaseAsciiOffset = 97;
  const uppercaseAsciiOffset = 65;
  for (let i = 0; i < seedLength; i++) {
    const randNum = Math.random();
    if (randNum <= 0.33) {
      seed += String.fromCharCode(numberAsciiOffset + randomInt(10));
    } else if (randNum > 0.33 && randNum <= 0.66) {
      seed += String.fromCharCode(lowercaseAsciiOffset + randomInt(25));
    } else {
      seed += String.fromCharCode(uppercaseAsciiOffset + randomInt(25));
    }
  }
  return seed;
}
