const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'public/game/aether-game.html');
const assetsDir = path.join(__dirname, 'public/game/assets');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

let htmlContent = fs.readFileSync(htmlPath, 'utf8');

const b64Regex = /const\s+(\w+)_B64\s*=\s*'data:image\/(\w+);base64,([^']+)'/g;
let match;
let replacements = [];

while ((match = b64Regex.exec(htmlContent)) !== null) {
    const name = match[1].toLowerCase();
    const ext = match[2] === 'jpeg' ? 'jpg' : match[2];
    const data = match[3];
    const filename = `${name}.${ext}`;
    const filepath = path.join(assetsDir, filename);

    fs.writeFileSync(filepath, Buffer.from(data, 'base64'));
    console.log(`Saved ${filename}`);

    replacements.push({
        orig: match[0],
        name: match[1],
        url: `assets/${filename}`
    });
}

// Now we need to modify the HTML to use these images instead of base64.
// But wait, the original code uses these constants in preload:
// this.textures.addBase64('logo', LOGO_B64);
// We will change the HTML to just load them as normal images.
// Actually, it's easier to just change the constants to paths and change the loader.
// Let's just replace the constants with the paths for now.
// e.g. const LOGO_B64 = 'assets/logo.png';
// And in preload, instead of this.textures.addBase64('logo', LOGO_B64), we do this.load.image('logo', LOGO_B64);

replacements.forEach(r => {
    htmlContent = htmlContent.replace(r.orig, `const ${r.name}_URL = '${r.url}'`);
    // replace addBase64 with load.image
    const preloadRegex = new RegExp(`this\\.textures\\.addBase64\\s*\\(\\s*'([^']+)'\\s*,\\s*${r.name}_B64\\s*\\);`, 'g');
    htmlContent = htmlContent.replace(preloadRegex, `this.load.image('$1', ${r.name}_URL);`);
});

fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('HTML updated.');
