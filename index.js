/**
 * Nearest Normal Aspect Ratio
 * By: Jonathan Neal, https://gist.github.com/jonathantneal/d3a259ebeb46de7ab0de
 * This function returns the nearest aspect ratio of a width and height within a limited range of possible aspect ratios.
 * In other words, while 649x360 technically has an aspect ratio of 649:360, it’s often useful to know that the nearest normal aspect ratio is actually 9:5 (648x360).
 * @param {float} width The width of the space. 
 * @param {float} height The height of the space. 
 * @param {integer} side The nearest ratio to side with. A number higher than zero tells the function to always return the nearest ratio that is equal or higher than the actual ratio, whereas a smaller number returns the nearest ratio higher that is equal or smaller than the actual ratio. Defaults to 0. 
 * @param {integer} maxWidth: The maximum width in the nearest normal aspect ratio. Defaults to 16.
 * @param {integer} maxWidth: The maximum height in the nearest normal aspect ratio. Defaults to 16.
 */
module.export = function(width, height, side, maxWidth, maxHeight) {
    var
        ratio = (width * 100) / (height * 100),
        maxW = 3 in arguments ? arguments[2] : 16,
        maxH = 4 in arguments ? arguments[3] : 16,
        ratiosW = new Array(maxW).join(',').split(','),
        ratiosH = new Array(maxH).join(',').split(','),
        ratiosT = {},
        ratios = {},
        match,
        key;

    ratiosW.forEach(function(empty, ratioW) {
        ++ratioW;

        ratiosH.forEach(function(empty, ratioH) {
            ++ratioH;

            ratioX = (ratioW * 100) / (ratioH * 100);

            if (!ratiosT[ratioX]) {
                ratiosT[ratioX] = true;

                ratios[ratioW + ':' + ratioH] = ratioX;
            }
        });
    });

    for (key in ratios) {
        if (!match || (!side && Math.abs(ratio - ratios[key]) < Math.abs(ratio - ratios[match])) || (
                side < 0 && ratios[key] <= ratio && Math.abs(ratio - ratios[key]) < Math.abs(ratio - ratios[match])
            ) || (
                side > 0 && ratios[key] >= ratio && Math.abs(ratio - ratios[key]) < Math.abs(ratio - ratios[match])
            )) {
            match = key;
        }
    }

    return match;
};