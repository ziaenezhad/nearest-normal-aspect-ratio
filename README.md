# Nearest Normal Aspect Ratio

This function returns the nearest aspect ratio of a width and height within a limited range of possible aspect ratios.

In other words, while 649x360 technically has an aspect ratio of 649:360, it’s often useful to know that the nearest normal aspect ratio is actually 9:5 (648x360).

```
nearestNormalAspectRatio(width, height, [maxWidth], [maxHeight])
```

- **width**: The width of the space.
- **height**: The height of the space.
- **maxWidth**: The maximum width in the nearest normal aspect ratio. *Defaults to 16.*
- **maxWidth**: The maximum height in the nearest normal aspect ratio. *Defaults to 16.*
## Install
```
npm install nearest-normal-aspect-ratio --save
```
## Use
```js
import nearestNormalAspectRatio from 'nearest-normal-aspect-ratio';

let ratio = nearestNormalAspectRatio(801, 602);
console.log(ratio);
// 4:3
```
## License

Sajjad Shirazy (shirazy.sajjad@gmail.com)