/**
 * Nearest Normal Aspect Ratio
 * By: Sajjad Shirazy <shirazy.sajjad@gmail.com>
 * This function returns the nearest aspect ratio of a width and height within a limited range of possible aspect ratios.
 * In other words, while 649x360 technically has an aspect ratio of 649:360, it’s often useful to know that the nearest normal aspect ratio is actually 9:5 (648x360).
 * @param {float} width The width of the space.
 * @param {float} height The height of the space.
 * @param {integer} maxWidth: The maximum width in the nearest normal aspect ratio. Defaults to 16.
 * @param {integer} maxWidth: The maximum height in the nearest normal aspect ratio. Defaults to 16.
 */
module.exports = function (width, height, maxWidth = 16, maxHeight = 16) {
    const needsRotation = width > height;
    if (needsRotation) {
        const temp = width;
        width = height;
        height = temp;
    }
    const absoluteRatio = width / height;
    let normalRatio = [1, 1];
    let ratio = 1;
    for (let i = 1; i <= maxHeight; i++) {
        for (let j = 1; j <= maxWidth; j++) {
            let value = j / i;
            if (Math.abs(value - absoluteRatio) < Math.abs(ratio - absoluteRatio)) {
                ratio = value;
                normalRatio = [j, i];
            }
        }        
    }
    return (needsRotation ? normalRatio.reverse() : normalRatio).join(':');
};