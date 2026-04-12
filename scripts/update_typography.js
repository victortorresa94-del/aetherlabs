const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public/game/aether-game.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace Google Fonts URL
html = html.replace('family=Press+Start+2P&display=swap', 'family=Pixelify+Sans:wght@400..700&display=swap');

// Replace font-family CSS
html = html.replace(/'Press Start 2P'/g, "'Pixelify Sans'");
// Replace Phaser font settings
html = html.replace(/'"Press Start 2P"'/g, "'\"Pixelify Sans\"'");

// Fix cursor CSS
// The old css was: body { background: #050508; overflow: hidden; cursor: none; }
html = html.replace('cursor: none;', '');
// We want to hide the cursor over the canvas so the custom drawn cursor is the only one visible, 
// UNLESS over DOM elements.
// Let's add canvas { cursor: none; } to style section
html = html.replace('</style>', '  canvas { cursor: none; }\n  </style>');

// Fix font sizes optionally? Pixelify Sans might be small, let's just make the change first.

fs.writeFileSync(filePath, html);
console.log("Updated typography and cursor fixes successfully.");
