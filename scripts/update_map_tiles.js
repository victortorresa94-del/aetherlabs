const fs = require('fs');
const path = 'public/game/aether-game.html';
let content = fs.readFileSync(path, 'utf8');

const drawingRegex = /function\s*drawFloorTile\s*\([\s\S]*?gfx\.lineBetween\(x,\s*y,\s*x\+32,\s*y\);\s*\}/;

const newDrawingHelpers = `function drawFloorTile(gfx, x, y, labColorInt, floorColor, r, c) {
      gfx.fillStyle(floorColor || 0x0a0a14);
      gfx.fillRect(x, y, 32, 32);
      if ((r + c) % 2 === 0) {
        gfx.fillStyle(0xffffff, 0.015);
        gfx.fillRect(x, y, 32, 32);
      }
      gfx.lineStyle(1, 0xffffff, 0.04);
      gfx.strokeRect(x+1, y+1, 30, 30);
      gfx.fillStyle(0xffffff, 0.08);
      gfx.fillRect(x, y, 2, 2);
      gfx.fillRect(x+30, y+30, 2, 2);
      if((r + c) % 7 === 0) {
        gfx.fillStyle(labColorInt, 0.15);
        gfx.fillRect(x+8, y+14, 16, 2);
      }
    }

    function drawWallTile(gfx, x, y, wallColor) {
      gfx.fillStyle(wallColor || 0x0d0d1a);
      gfx.fillRect(x, y, 32, 32);
      
      // Shadow / Depth
      gfx.fillStyle(0x000000, 0.5);
      gfx.fillRect(x, y+24, 32, 8);
      
      // Tech panels
      gfx.fillStyle(0xffffff, 0.03);
      gfx.fillRect(x+2, y+2, 28, 10);
      gfx.fillRect(x+2, y+14, 28, 8);
      
      // Scanlines
      gfx.lineStyle(1, 0x000000, 0.4);
      gfx.lineBetween(x+2, y+6, x+30, y+6);
      gfx.lineBetween(x+2, y+10, x+30, y+10);
      
      gfx.lineStyle(1, 0xffffff, 0.05);
      gfx.lineBetween(x, y, x+32, y);
      gfx.lineBetween(x, y, x, y+32);
    }
    
    function drawCarpet(gfx, x, y, w, h, labColorInt) {
      gfx.fillStyle(0x000000, 0.4);
      gfx.fillRect(x+3, y+3, w, h); // drop shadow
      
      gfx.fillStyle(0x1a1a2e, 1);
      gfx.fillRect(x, y, w, h);
      
      gfx.lineStyle(2, labColorInt, 0.7);
      gfx.strokeRect(x, y, w, h);
      
      gfx.lineStyle(1, labColorInt, 0.2);
      gfx.strokeRect(x+6, y+6, w-12, h-12);
      
      gfx.fillStyle(labColorInt, 0.9);
      var nodes = [[x-2,y-2],[x+w-2,y-2],[x-2,y+h-2],[x+w-2,y+h-2]];
      nodes.forEach(function(n) { gfx.fillRect(n[0], n[1], 4, 4); });
    }`;

if (drawingRegex.test(content)) {
    content = content.replace(drawingRegex, newDrawingHelpers);

    const loopRegex = /for\s*\(\s*var\s*r\s*=\s*0;\s*r\s*<\s*R;\s*r\+\+\s*\)\s*\{\s*for\s*\(\s*var\s*c\s*=\s*0;\s*c\s*<\s*C;\s*c\+\+\s*\)\s*\{\s*var\s*t\s*=\s*this\.mapData\[r\]\[c\],\s*x\s*=\s*c\s*\*\s*T,\s*y\s*=\s*r\s*\*\s*T\s*\+\s*H;\s*if\s*\(\s*t\s*===\s*0\s*\)\s*\{\s*drawFloorTile\(\s*mg,\s*x,\s*y,\s*this\.labColorHex\s*\);\s*\}\s*else\s*\{\s*drawWallTile\(\s*mg,\s*x,\s*y\s*\);\s*\}\s*\}\s*\}\s*mg\.lineStyle\(\s*2,\s*this\.labColorHex,\s*0\.4\s*\);\s*mg\.strokeRect\(\s*0,\s*H,\s*C\s*\*\s*T,\s*R\s*\*\s*T\s*\);/;

    const newDrawLoop = `for (var r=0; r<R; r++) {
          for (var c=0; c<C; c++) {
            var t=this.mapData[r][c], x=c*T, y=r*T+H;
            if (t===0) {
              drawFloorTile(mg, x, y, this.labColorHex, this.floorColor, r, c);
            } else {
              drawWallTile(mg, x, y, this.wallColor);
            }
          }
        }
        mg.lineStyle(2, this.labColorHex, 0.4);
        mg.strokeRect(0, H, C*T, R*T);
        
        // Decorations & Carpets
        var cg = this.add.graphics().setDepth(1);
        drawCarpet(cg, this.chestTile[0]*T-32, this.chestTile[1]*T-16+H, 96, 64, this.labColorHex);
        var self=this;
        this.mapObjects.forEach(function(obj) {
            drawCarpet(cg, obj.x-40, obj.y-36+H, 80, 80, self.labColorHex);
        });`;

    if (loopRegex.test(content)) {
        content = content.replace(loopRegex, newDrawLoop);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Successfully replaced Drawing Helpers and BaseMapScene render loop.");
    } else {
        console.log("Could not find BaseMapScene loop regex.");
    }
} else {
    console.log("Could not find drawing helpers regex.");
}
