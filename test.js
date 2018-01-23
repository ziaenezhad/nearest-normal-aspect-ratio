import test from 'ava';
import nearestNormalAspectRatio from './';

test('returns correct ratios for widths and heights', t => {
    const cases = [
        [801, 602, '4:3'],
        [322, 182, '16:9'],
        [182, 322, '9:16'],
        [322, 258, '5:4'],
        [200, 200, '1:1']
    ];

    for (const item of cases) {
        const [width, height, ratio] = item;
        t.is(nearestNormalAspectRatio(width, height), ratio);
    }
	
});
