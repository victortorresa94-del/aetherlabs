const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public/game/aether-game.html');
let html = fs.readFileSync(filePath, 'utf8');

// The goal is to add an onscreen D-Pad to BaseMapScene when mobile is detected.
// We'll add some HTML/CSS overlays for the mobile controls if window.innerWidth < 768

const mobileControlsHTML = `
  <div id="mobile-controls" style="display: none; position: fixed; bottom: 20px; left: 20px; z-index: 200; width: 120px; height: 120px; opacity: 0.6;">
    <div style="position: absolute; top: 0; left: 40px; width: 40px; height: 40px; background: rgba(0, 229, 255, 0.2); border: 2px solid #00E5FF; border-radius: 8px;" id="dpad-up"></div>
    <div style="position: absolute; bottom: 0; left: 40px; width: 40px; height: 40px; background: rgba(0, 229, 255, 0.2); border: 2px solid #00E5FF; border-radius: 8px;" id="dpad-down"></div>
    <div style="position: absolute; top: 40px; left: 0; width: 40px; height: 40px; background: rgba(0, 229, 255, 0.2); border: 2px solid #00E5FF; border-radius: 8px;" id="dpad-left"></div>
    <div style="position: absolute; top: 40px; right: 0; width: 40px; height: 40px; background: rgba(0, 229, 255, 0.2); border: 2px solid #00E5FF; border-radius: 8px;" id="dpad-right"></div>
  </div>
  <div id="mobile-action" style="display: none; position: fixed; bottom: 40px; right: 20px; z-index: 200; width: 60px; height: 60px; background: rgba(0, 229, 255, 0.2); border: 2px solid #00E5FF; border-radius: 50%; opacity: 0.6; display: flex; align-items: center; justify-content: center; color: #00E5FF; font-family: 'Pixelify Sans', monospace; font-size: 24px; font-weight: bold; -webkit-user-select: none;">A</div>
`;

// Insert the HTML just before the game-container
html = html.replace(/<div id="game-container">/, mobileControlsHTML + '\n  <div id="game-container">');

const mobileControlsScript = `
    // MOBILE CONTROLS LOGIC
    var isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      document.getElementById('mobile-controls').style.display = 'block';
      document.getElementById('mobile-action').style.display = 'flex';
      document.getElementById('info-panel').style.width = '100vw'; // full width on mobile
      document.getElementById('info-panel-img').style.aspectRatio = '21/9';
    }

    // We'll set global variables that Phaser can read
    window.mobileInput = { up: false, down: false, left: false, right: false, action: false };

    function bindButton(id, key) {
      var el = document.getElementById(id);
      if(!el) return;
      el.addEventListener('touchstart', function(e) { e.preventDefault(); window.mobileInput[key] = true; el.style.background = 'rgba(0, 229, 255, 0.5)'; });
      el.addEventListener('touchend', function(e) { e.preventDefault(); window.mobileInput[key] = false; el.style.background = 'rgba(0, 229, 255, 0.2)'; });
      
      // Keep mouse events for testing on desktop resizing
      el.addEventListener('mousedown', function(e) { e.preventDefault(); window.mobileInput[key] = true; el.style.background = 'rgba(0, 229, 255, 0.5)'; });
      el.addEventListener('mouseup', function(e) { e.preventDefault(); window.mobileInput[key] = false; el.style.background = 'rgba(0, 229, 255, 0.2)'; });
      el.addEventListener('mouseleave', function(e) { e.preventDefault(); window.mobileInput[key] = false; el.style.background = 'rgba(0, 229, 255, 0.2)'; });
    }

    window.addEventListener('load', function() {
      bindButton('dpad-up', 'up');
      bindButton('dpad-down', 'down');
      bindButton('dpad-left', 'left');
      bindButton('dpad-right', 'right');
      bindButton('mobile-action', 'action');
    });
`;

html = html.replace(/<script>/, '<script>\n' + mobileControlsScript);

// Now update the BaseMapScene update loop to respect window.mobileInput
html = html.replace(/var speed = 120;/g, `var speed = 120;
        var mInput = window.mobileInput || {up:false, down:false, left:false, right:false, action:false};
        
        // Handle mobile action input (similar to spacebar trigger)
        if (mInput.action && !this.mobileActionHandled) {
           this.mobileActionHandled = true;
           this.time.delayedCall(50, () => {
             // Fake a keyboard event for spacebar to reuse existing dialogue/chest logic
             this.input.keyboard.emit('keydown-SPACE', { preventDefault: ()=>{} });
           });
        }
        if (!mInput.action) {
           this.mobileActionHandled = false;
        }

        var up = this.cursors.up.isDown || this.keys.W.isDown || mInput.up;
        var down = this.cursors.down.isDown || this.keys.S.isDown || mInput.down;
        var left = this.cursors.left.isDown || this.keys.A.isDown || mInput.left;
        var right = this.cursors.right.isDown || this.keys.D.isDown || mInput.right;
`);

html = html.replace(
    /var up = this\.cursors\.up\.isDown \|\| this\.keys\.W\.isDown;/g,
    `/* Replace above */`
);
html = html.replace(
    /var down = this\.cursors\.down\.isDown \|\| this\.keys\.S\.isDown;/g,
    `/* Replace above */`
);
html = html.replace(
    /var left = this\.cursors\.left\.isDown \|\| this\.keys\.A\.isDown;/g,
    `/* Replace above */`
);
html = html.replace(
    /var right = this\.cursors\.right\.isDown \|\| this\.keys\.D\.isDown;/g,
    `/* Replace above */`
);


fs.writeFileSync(filePath, html);
console.log("Added Mobile controls to aether-game.html.");
