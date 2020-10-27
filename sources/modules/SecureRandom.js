import { bigInt } from "./BigInteger.js";

// Returns a secure random number below n
export var randomBelow = (n, bits = 256) => {
    const slicesCount = ~~(bits / 32);
    const randomNumbers = crypto.getRandomValues(new Uint32Array(slicesCount));
    const resultStr = randomNumbers.reduce((acc, elem) => `${acc}${elem}`);
    const result = bigInt(resultStr);

    if (result.lesser(n)) {
        return result;
    }

    return randomBelow(n, bits);
}