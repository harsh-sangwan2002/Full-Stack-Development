const tempeatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcAmplitude = (temps) => {
    let max = temps[0], min = temps[0];

    for (let i = 0; i < temps.length; i++) {

        if (typeof temps[i] !== 'number')
            continue;

        max = Math.max(max, temps[i]);
        min = Math.min(min, temps[i]);
    }

    return max - min;
}

console.log(calcAmplitude(tempeatures));