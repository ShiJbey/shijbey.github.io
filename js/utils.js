///////////////////////////////////////////////////////////
//                  HELPER FUNTIONS                      //
///////////////////////////////////////////////////////////


export function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function randomSeed(seedLength = 7) {
    let seed = "";
    let numberAsciiOffset = 48;
    let lowercaseAsciiOffset = 97;
    let uppercaseAsciiOffset = 65;
    for (let i = 0; i < seedLength; i++) {
        let rand_num = Math.random();
        if (rand_num <= 0.33) {
            seed += String.fromCharCode(numberAsciiOffset + randomInt(10));
        }
        else if (rand_num > 0.33 && rand_num <= 0.66) {
            seed += String.fromCharCode(lowercaseAsciiOffset + randomInt(25));
        }
        else {
            seed += String.fromCharCode(uppercaseAsciiOffset + randomInt(25));
        }
    }
    return seed;
}
