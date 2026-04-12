const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public/game/aether-game.html');
let html = fs.readFileSync(filePath, 'utf8');

// The goal is to update the NPCs text, objects desc, and map definitions with the new landing pages AND incorporate the tone we just learned from Risto Mejide and DotCSV

// CreativeMapScene updates
// Make sure to add `actionUrl` and `ctaText` to objects/chests
html = html.replace(
    /{ key:'npc_ceo', name:'CEO', tile:\[6,13\],[\s\n]*pages:\['Tenemos el mejor\\nproducto del mercado\.\\nPero nadie sabe\\nque existimos\.','Nuestra web la hizo\\nel sobrino\.\\nHace 8 anos\.'\] }/,
    `{ key:'npc_ceo', name:'CEO INVISIBLE', tile:[6,13],
              pages:['Tenemos el mejor\\nproducto, sí.\\nPero si nadie te ve,\\nno existes.','Nuestra comunicación\\nes ruido con logo.\\nNadie nos recuerda.'] }`
);

html = html.replace(
    /{ key:'npc_filmmaker', name:'FILMMAKER', tile:\[18,13\],[\s\n]*pages:\['Gaste 30.000e\\nen una productora\.\\n4 meses de espera\.','El video no\\nsirvio para nada\.'\] }/,
    `{ key:'npc_filmmaker', name:'DIRECTOR FRUSTRADO', tile:[18,13],
              pages:['Gasté 30.000e\\nen una productora.\\nPara un vídeo corporativo.','Un vídeo precioso\\nque nadie vio.\\nFaltaba estrategia.'] }`
);

// Map Chests and Objects
// We need to pass the actionUrl for the Labs
html = html.replace(/chestData: {\n\s*title: 'MARKETING LAB',/g,
    `chestData: {
            title: 'MARKETING LAB',
            actionUrl: '/labs/creative',
            ctaText: 'ENTRAR AL LAB',`);

html = html.replace(/chestData: {\n\s*title: 'SYSTEMS LAB',/g,
    `chestData: {
            title: 'SYSTEMS LAB',
            actionUrl: '/labs/systems',
            ctaText: 'SISTEMATIZAR AHORA',`);

html = html.replace(/chestData: {\n\s*title: 'SCHOOL LAB',/g,
    `chestData: {
            title: 'SCHOOL LAB',
            actionUrl: '/labs/school',
            ctaText: 'VER PROGRAMAS',`);

// Update Dialogue System to support setting actionUrls dynamically if a `url` property is in the def
// We already modified `showInfoPanel` to accept `actionUrl` correctly. Now we just need to pass it from `this.showInfoPanel(..., def.actionUrl, def.ctaText)` in the check zone.
html = html.replace(/window\.showInfoPanel\(this\.labColor, def\.name, def\.desc, def\.emoji\|\|'\*', def\.tags\|\|\[\], def\.actionUrl, def\.ctaText\);/g,
    "window.showInfoPanel(this.labColor, def.name, def.desc, def.emoji||'*', def.tags||[], def.actionUrl || '', def.ctaText || '');");

// Let's add actionUrls to a few objects in CREATIVE MAP
html = html.replace(
    /{ type:'object', tile:\[4,13\], emoji:'📰', name:'WEB CORPORATIVA', desc:'"Página estática sin actualizar desde 2018. Tarda 8 segundos en cargar."', tags:\['Obsoleto','Lento','Invisible'\] }/,
    `{ type:'object', tile:[4,13], emoji:'📰', name:'WEB CORPORATIVA', actionUrl:'/labs/creative', ctaText:'RENOVAR WEB', desc:'"Página estática sin actualizar desde 2018. Si tu web no aporta conversión, solo aparta clientes."', tags:['Obsoleta','Lenta','Invisible'] }`
);

// SYSTEMS MAP NPCs
html = html.replace(
    /{ key:'npc_manager', name:'MANAGER', tile:\[6,13\],[\s\n]*pages:\['Mi equipo pasa\\n4 horas al dia\\ncopiando datos\.','No damos a\\nabasto con\\nlo manual\.'\] }/,
    `{ key:'npc_manager', name:'EL MANAGER', tile:[6,13],
              pages:['Mi equipo pasa\\nhoras copiando datos.\\nTrabajan como robots.','Para de consumir IA\\ny empieza a\\nusarla hoy.'] }`
);

// SCHOOL MAP NPCs
html = html.replace(
    /{ key:'npc_student', name:'EMPLEADO', tile:\[6,13\],[\s\n]*pages:\['Todos hablan\\nde ChatGPT\\npero nadie me\\nensena a usarlo\.'\] }/,
    `{ key:'npc_student', name:'EMPLEADO PERDIDO', tile:[6,13],
              pages:['Consumo tutoriales\\npero no automatizo\\nnada real.','El hype no me\\nsirve. Necesito\\nutilidad.'] }`
);


// Let's fix the Chest Dialog to open the URL directly instead of "ToggleServices" OR just change the Chest scene text.
html = html.replace(
    /this\.createBtn\(400,335,'VER QUE INCLUYE',lc,lh,false,function\(\)\{self\.toggleServices\(d\.services\|\|\[\],lc,lh\);\}\);/g,
    `if (d.actionUrl) {
          this.createBtn(400,335,d.ctaText||'ENTRAR AL LAB',lc,lh,false,function(){ window.open(d.actionUrl, '_blank'); });
        } else {
          this.createBtn(400,335,'VER QUE INCLUYE',lc,lh,false,function(){self.toggleServices(d.services||[],lc,lh);});
        }`
);

fs.writeFileSync(filePath, html);
console.log("Updated NPCs and chest actions in aether-game.html.");
