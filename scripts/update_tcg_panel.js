const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public/game/aether-game.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update the HTML structure of the info-panel
const oldInfoPanelHtml = `<div id="info-panel" style="
    position: fixed;
    left: 0; top: 0;
    width: 220px; height: 100vh;
    background: #050508;
    border-right: 2px solid #00E5FF;
    z-index: 100;
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Pixelify Sans', monospace;
    transform: translateX(-220px);
    transition: transform 0.3s ease;
    overflow-y: auto;
  ">
    <div id="info-panel-lab" style="font-size:6px; color:#00E5FF; margin-bottom:8px;">CREATIVE LAB</div>
    <div id="info-panel-img" style="width:100%; aspect-ratio:1; background:#111; border:1px solid #00E5FF; margin-bottom:12px; overflow:hidden; display:flex; align-items:center; justify-content:center;"></div>
    <div id="info-panel-name" style="font-size:8px; color:#fff; margin-bottom:8px; line-height:1.6;"></div>
    <div id="info-panel-desc" style="font-size:6px; color:#AAAAAA; line-height:1.8;"></div>
    <div id="info-panel-tags" style="margin-top:12px; display:flex; flex-wrap:wrap; gap:4px;"></div>
  </div>`;

const newInfoPanelHtml = `<div id="info-panel" style="
    position: fixed;
    left: 0; top: 0;
    width: 280px; height: 100vh;
    background: #050508;
    border-right: 2px solid #00E5FF;
    z-index: 100;
    padding: 24px;
    box-sizing: border-box;
    font-family: 'Pixelify Sans', monospace;
    transform: translateX(-280px);
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 10px 0 30px rgba(0,0,0,0.8);
  ">
    <div style="border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; background: rgba(255,255,255,0.02); flex-grow: 1; display: flex; flex-direction: column;">
      <div id="info-panel-lab" style="font-size:10px; color:#00E5FF; margin-bottom:12px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">CREATIVE LAB</div>
      <div id="info-panel-img" style="width:100%; aspect-ratio:4/3; background:#111; border:1px solid rgba(255,255,255,0.1); border-radius: 4px; margin-bottom:16px; overflow:hidden; display:flex; align-items:center; justify-content:center; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
      <div id="info-panel-name" style="font-size:16px; color:#fff; margin-bottom:12px; line-height:1.4; font-weight: bold;"></div>
      <div id="info-panel-desc" style="font-size:12px; color:#AAAAAA; line-height:1.6; flex-grow: 1;"></div>
      <div id="info-panel-tags" style="margin-top:16px; margin-bottom: 24px; display:flex; flex-wrap:wrap; gap:6px;"></div>
      <a id="info-panel-cta" href="#" target="_blank" style="display: none; background: transparent; border: 1px solid #00E5FF; color: #00E5FF; padding: 12px; text-align: center; text-decoration: none; font-size: 12px; font-weight: bold; cursor: pointer; border-radius: 4px; transition: all 0.2s; text-transform: uppercase;">VER MÁS ESTADÍSTICAS</a>
    </div>
  </div>
  <style>
    #info-panel-cta:hover { background: rgba(0,229,255,0.1) !important; box-shadow: 0 0 15px rgba(0,229,255,0.2); }
  </style>`;

if (html.includes('<div id="info-panel" style="')) {
    // Try to replace the whole block if it matches, otherwise we'll have to use regex
    // Let's use string replace for the exact block first, or a regex that captures the div #info-panel
    const regex = /<div id="info-panel" style="[\s\S]*?<\/div>\s*<\/div>/;
    if (regex.test(html)) {
        html = html.replace(regex, newInfoPanelHtml);
    } else {
        console.log("Could not find exact info-panel block, using alternative regex");
        // Fallback: replace everything from <div id="info-panel" up to the <div id="game-container">
        html = html.replace(/<div id="info-panel"[\s\S]*?(?=<div id="game-container">)/, newInfoPanelHtml + '\n\n  ');
    }
}

// 2. Update showInfoPanel function signature and body
const oldFunc = `function showInfoPanel(labColor, name, description, emoji, tags) {
      tags = tags || [];
      var panel = document.getElementById('info-panel');
      panel.style.borderColor = labColor;
      panel.style.transform = 'translateX(0)';
      document.getElementById('info-panel-name').textContent = name;
      document.getElementById('info-panel-desc').textContent = description;
      document.getElementById('info-panel-img').innerHTML = '<div style="font-size:48px; text-align:center;">' + emoji + '</div>';
      document.getElementById('info-panel-lab').style.color = labColor;
      var tagsEl = document.getElementById('info-panel-tags');
      tagsEl.innerHTML = tags.map(function(t) {
        return '<span style="font-size:5px; padding:2px 4px; border:1px solid ' + labColor + '; color:' + labColor + ';">' + t + '</span>';
      }).join('');
    }`;

const newFunc = `function showInfoPanel(labColor, name, description, emoji, tags, actionUrl, ctaText) {
      tags = tags || [];
      var panel = document.getElementById('info-panel');
      panel.style.borderColor = labColor;
      panel.style.transform = 'translateX(0)';
      document.getElementById('info-panel-name').textContent = name;
      document.getElementById('info-panel-desc').textContent = description;
      // We can check if emoji is a URL (starts with / or http) to show an actual image
      if (emoji.startsWith('/') || emoji.startsWith('http')) {
        document.getElementById('info-panel-img').innerHTML = '<img src="' + emoji + '" style="width:100%; height:100%; object-fit:cover;" />';
      } else {
        document.getElementById('info-panel-img').innerHTML = '<div style="font-size:64px; text-align:center;">' + emoji + '</div>';
      }
      
      var labEl = document.getElementById('info-panel-lab');
      labEl.style.color = labColor;
      var tagsEl = document.getElementById('info-panel-tags');
      tagsEl.innerHTML = tags.map(function(t) {
        return '<span style="font-size:10px; padding:4px 6px; border:1px solid ' + labColor + '; color:' + labColor + '; border-radius: 3px; background: rgba(255,255,255,0.05);">' + t + '</span>';
      }).join('');

      var ctaBtn = document.getElementById('info-panel-cta');
      if (actionUrl) {
        ctaBtn.style.display = 'block';
        ctaBtn.style.borderColor = labColor;
        ctaBtn.style.color = labColor;
        ctaBtn.href = actionUrl;
        ctaBtn.innerText = ctaText || 'MÁS INFORMACIÓN';
        // Remove old hover style logic and re-apply for current color
        ctaBtn.onmouseover = function() { this.style.background = labColor; this.style.color = '#000'; };
        ctaBtn.onmouseout = function() { this.style.background = 'transparent'; this.style.color = labColor; };
      } else {
        ctaBtn.style.display = 'none';
      }
    }`;

html = html.replace(/function showInfoPanel\([\s\S]*?\}\n    function hideInfoPanel/, newFunc + '\n    function hideInfoPanel');

// 3. Update hideInfoPanel to translate -280px instead of -220px
html = html.replace(/transform = 'translateX\(-220px\)'/, "transform = 'translateX(-280px)'");

// 4. Update the Phaser call `window.showInfoPanel(this.labColor, def.name, def.desc, def.emoji||'*', def.tags||[]);`
html = html.replace(/window\.showInfoPanel\(this\.labColor, def\.name, def\.desc, def\.emoji\|\|'\*', def\.tags\|\|\[\]\);/g,
    "window.showInfoPanel(this.labColor, def.name, def.desc, def.emoji||'*', def.tags||[], def.actionUrl, def.ctaText);");

fs.writeFileSync(filePath, html);
console.log("Updated info-panel HTML/CSS and showInfoPanel function.");
