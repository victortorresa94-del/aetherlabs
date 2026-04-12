const fs = require('fs');
const path = 'public/game/aether-game.html';
let content = fs.readFileSync(path, 'utf8');

const drawingHelpersEndRegex = /function\s*drawZoneLabel[\s\S]*?\}\s*\n/;

const newDrawingHelpers = `
    function drawServerRack(gfx, x, y, labColorInt) {
      gfx.fillStyle(0x0a0a14);
      gfx.fillRect(x, y, 32, 48);
      gfx.fillStyle(0x000000, 0.6);
      gfx.fillRect(x, y+40, 32, 8);
      gfx.fillStyle(0x1a1a2e);
      gfx.fillRect(x+2, y+2, 28, 44);
      gfx.lineStyle(2, 0x050508);
      gfx.strokeRect(x+2, y+2, 28, 44);
      for(var i=0; i<4; i++) {
        gfx.fillStyle(0x050508);
        gfx.fillRect(x+6, y+8+i*8, 20, 4);
        if(Math.random()>0.3) {
          gfx.fillStyle(labColorInt, 0.8);
          gfx.fillRect(x+8, y+9+i*8, 4, 2);
        }
        if(Math.random()>0.5) {
          gfx.fillStyle(0xffffff, 0.6);
          gfx.fillRect(x+14, y+9+i*8, 2, 2);
        }
      }
    }

    function drawPottedPlant(gfx, x, y, labColorInt) {
      gfx.fillStyle(0x111122);
      gfx.fillRect(x+8, y+20, 16, 12);
      gfx.lineStyle(1, labColorInt, 0.5);
      gfx.strokeRect(x+8, y+20, 16, 12);
      gfx.fillStyle(labColorInt, 0.7);
      gfx.fillCircle(x+16, y+14, 8);
      gfx.fillStyle(labColorInt, 0.9);
      gfx.fillCircle(x+10, y+10, 6);
      gfx.fillCircle(x+22, y+12, 5);
      gfx.fillCircle(x+16, y+6, 6);
    }
`;

if (drawingHelpersEndRegex.test(content)) {
    content = content.replace(drawingHelpersEndRegex, match => match + newDrawingHelpers);
}

const mapDataRegex = /var CREATIVE_MAP = \[[\s\S]*?\];[\s\S]*?var SCHOOL_MAP=makeBaseMap\(\);[\s\S]*?\}\);/g;

const newMapData = `    function makeBaseMap() {
      var m=[];
      for (var r=0;r<18;r++) { var row=[]; for (var c=0;c<25;c++) row.push((r===0||r===17||c===0||c===24)?1:0); m.push(row); }
      return m;
    }
    function wallRect(m,r,c,h,w) { for(var rr=r;rr<r+h;rr++) for(var cc=c;cc<c+w;cc++) if(rr>=0&&rr<18&&cc>=0&&cc<25) m[rr][cc]=1; }
    function setRect(m,r,c,h,w,val) { for(var rr=r;rr<r+h;rr++) for(var cc=c;cc<c+w;cc++) if(rr>=0&&rr<18&&cc>=0&&cc<25) m[rr][cc]=val; }
    function clearCell(m,r,c) { if(r>=0&&r<18&&c>=0&&c<25) m[r][c]=0; }

    var CREATIVE_MAP=makeBaseMap();
    wallRect(CREATIVE_MAP,2,3,3,4); wallRect(CREATIVE_MAP,2,18,3,4);
    wallRect(CREATIVE_MAP,7,2,4,3); wallRect(CREATIVE_MAP,7,20,4,3);
    wallRect(CREATIVE_MAP,13,3,3,4); wallRect(CREATIVE_MAP,13,18,3,4);
    setRect(CREATIVE_MAP,1,1,16,1,4); setRect(CREATIVE_MAP,1,23,16,1,4); // plants

    var SYSTEMS_MAP=makeBaseMap();
    wallRect(SYSTEMS_MAP,2,2,4,6); wallRect(SYSTEMS_MAP,2,17,4,6);
    wallRect(SYSTEMS_MAP,9,6,3,4); wallRect(SYSTEMS_MAP,9,15,3,4);
    wallRect(SYSTEMS_MAP,14,4,3,5); wallRect(SYSTEMS_MAP,14,16,3,5);
    [[2,8],[5,2],[6,7],[2,16],[5,22],[6,17],[9,10],[11,10],[9,15],[11,18]].forEach(function(a){clearCell(SYSTEMS_MAP,a[0],a[1]);});
    setRect(SYSTEMS_MAP,1,1,4,1,3); setRect(SYSTEMS_MAP,1,23,4,1,3); // servers
    setRect(SYSTEMS_MAP,7,1,4,1,3); setRect(SYSTEMS_MAP,7,23,4,1,3);

    var SCHOOL_MAP=makeBaseMap();
    wallRect(SCHOOL_MAP,2,2,3,7); wallRect(SCHOOL_MAP,2,16,3,7);
    wallRect(SCHOOL_MAP,7,5,4,4); wallRect(SCHOOL_MAP,7,16,4,4);
    wallRect(SCHOOL_MAP,12,3,4,5); wallRect(SCHOOL_MAP,12,17,4,5);
    [[4,2],[2,9],[5,8],[4,22],[2,15],[5,16],[7,9],[10,9],[7,16],[10,19]].forEach(function(a){clearCell(SCHOOL_MAP,a[0],a[1]);});
    setRect(SCHOOL_MAP,12,1,5,2,4); setRect(SCHOOL_MAP,12,22,5,2,4); // plants
`;

content = content.replace(mapDataRegex, newMapData);

const loopRegex = /if\s*\(\s*t\s*===\s*0\s*\)\s*\{\s*drawFloorTile\(\s*mg,\s*x,\s*y,\s*this\.labColorHex,\s*this\.floorColor,\s*r,\s*c\s*\);\s*\}\s*else\s*\{\s*drawWallTile\(\s*mg,\s*x,\s*y,\s*this\.wallColor\s*\);\s*\}/g;

const newLoop = `if (t===0) {
              drawFloorTile(mg, x, y, this.labColorHex, this.floorColor, r, c);
            } else if (t===1) {
              drawWallTile(mg, x, y, this.wallColor);
            } else if (t===3) {
              drawFloorTile(mg, x, y, this.labColorHex, this.floorColor, r, c);
              drawServerRack(mg, x, y-16, this.labColorHex);
            } else if (t===4) {
              drawFloorTile(mg, x, y, this.labColorHex, this.floorColor, r, c);
              drawPottedPlant(mg, x, y, this.labColorHex);
            }`;

content = content.replace(loopRegex, newLoop);

// Also add a physics rect for the unpassable servers/plants (types 3 and 4)
const colRegex = /if\s*\(\s*this\.mapData\[r\]\[c\]\s*===\s*1\s*\)/g;
const newCol = `if (this.mapData[r][c]===1 || this.mapData[r][c]===3 || this.mapData[r][c]===4)`;

content = content.replace(colRegex, newCol);

fs.writeFileSync(path, content, 'utf8');
console.log("Furniture and map data updated.");
