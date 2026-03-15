const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'v5');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
    // Indigo (6366F1, 99,102,241) to Cyan (00E5FF, 0,229,255)
    { from: /rgba\(99,102,241/g, to: 'rgba(0,229,255' },
    { from: /rgba\(99,\s*102,\s*241/g, to: 'rgba(0,229,255' },
    { from: /#6366F1/gi, to: '#00E5FF' },

    // Violet (8B5CF6, 139,92,246) to Cyan Hover (00B8D9, 0,184,217)
    { from: /rgba\(139,92,246/g, to: 'rgba(0,184,217' },
    { from: /rgba\(139,\s*92,\s*246/g, to: 'rgba(0,184,217' },
    { from: /#8B5CF6/gi, to: '#00B8D9' },

    // Pink/Purple to Light Cyan
    { from: /#A78BFA/gi, to: '#4DD0E1' }
];

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Standard replacements
    for (const rep of replacements) {
        content = content.replace(rep.from, rep.to);
    }

    // Specific transformations for alternating white sections
    if (file === 'SolutionSection.tsx' || file === 'LabsSection.tsx') {
        // Force white background for the section
        content = content.replace(/backgroundColor:\s*'var\(--v5-bg-surface\)'/g, "backgroundColor: '#FFFFFF', color: '#000000'");
        content = content.replace(/backgroundColor:\s*'var\(--v5-bg-base\)'/g, "backgroundColor: '#FFFFFF', color: '#000000'");

        // Force text colors to black instead of white/gray
        content = content.replace(/color:\s*'var\(--v5-text-primary\)'/g, "color: '#000000'");
        content = content.replace(/color:\s*'var\(--v5-text-secondary\)'/g, "color: '#444444'");

        // Card borders
        content = content.replace(/borderColor:\s*'var\(--v5-border\)'/g, "borderColor: 'rgba(0,0,0,0.1)'");
        content = content.replace(/borderColor:\s*'var\(--v5-border-hover\)'/g, "borderColor: 'var(--v5-accent)'");
        content = content.replace(/border:\s*'1px solid var\(--v5-border\)'/g, "border: '1px solid rgba(0,0,0,0.1)'");

        // Remove the glassmorphism specific tokens for these light components (since glassmorphism is for black)
        content = content.replace(/className="v5-lab-card"/g, 'className="v5-lab-card" style={{ backgroundColor: "#FFFFFF", color: "#000000", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "none" }}');
    }

    fs.writeFileSync(filePath, content);
}

console.log('Theme update complete!');
