const index = require('../index.js')

test('circle shape', () => {
    // Give properties to the element
    const objSVG = {text:'HGDS', textColor:'red', shape: 'Circle', color:'black'}
    const {text, textColor, color} = objSVG;
    const expectedSVG = `
<svg height="250" width="250">
    <circle cx="125" cy="125" r="120" fill="${color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="90px" fill="${textColor}" font-weight="bold" font-family="sans-serif">${text}</text>
</svg>`
    
    expect(index.svgGenerator(objSVG)).toEqual(expectedSVG);
  });