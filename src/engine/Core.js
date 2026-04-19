import { Parser } from './Parser.js';
import { BrushRenderer } from './BrushRenderer.js';
import { ComponentFactory } from './ComponentFactory.js';

export class AntigravityCore {
    constructor(appElementId) {
        this.appEl = document.getElementById(appElementId);
        this.palette = null;
    }

    async init() {
        this.appEl.innerHTML = '<div style="text-align:center; padding-top: 50px;">جاري تحميل محرك Antigravity...</div>';
        
        // 1. Load Base Palette
        this.palette = await Parser.getPalette();
        if(!this.palette) {
            this.appEl.innerHTML = "Error loading palette.";
            return;
        }

        // Apply a base body style to respect the soft pastel base.json
        document.body.style.backgroundColor = this.palette.colors.soft_white || '#FFF0F5';
        document.body.style.fontFamily = "'Tajawal', sans-serif";
        document.body.style.margin = "0";

        // 2. Start by loading home_final composition Default
        await this.loadComposition('home_final');
        
        // Inject global styles
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');
            .glass-container {
                transition: all 0.5s ease;
                animation: fadeIn 0.8s ease-out;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.98); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }

    async loadComposition(compositionId) {
        this.appEl.style.opacity = 0;
        await new Promise(r => setTimeout(r, 300));

        const comp = await Parser.getComposition(compositionId);
        if (!comp) return;

        const screen = await Parser.getScreen(comp.target);
        if (!screen) return;

        // Create Container
        const container = document.createElement('div');
        container.className = 'glass-container';
        container.style.cssText = `
            width: 100%;
            max-width: 480px;
            min-height: 85vh;
            margin: 20px auto;
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 40px;
            box-sizing: border-box;
            border-radius: 40px;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        `;
        
        // Process Render Pipeline from composition
        if (comp.render_pipeline) {
            for (let step of comp.render_pipeline) {
                if (step.startsWith('render_layer: background')) {
                    // Apply background brush
                    const bgBrushId = screen.layout.background;
                    const bgCss = await BrushRenderer.generateBackgroundCSS(bgBrushId, this.palette);
                    container.style.cssText += bgCss;
                    document.body.style.cssText += bgCss; // Set body background to match
                }
            }
        }

        // Generate Elements
        if (screen.layout && screen.layout.elements) {
            for (let elData of screen.layout.elements) {
                const domNode = await ComponentFactory.create(elData, this.palette);
                
                // Add event listeners for navigation logic (since it's a simple mockup engine)
                if (compositionId === 'home_final' && elData.id === 'main_action') {
                    // The primary button on home
                    domNode.onclick = () => this.loadComposition('second_final');
                } else if (compositionId === 'second_final' && elData.id === 'back_nav') {
                    // The secondary back button
                    domNode.onclick = () => this.loadComposition('home_final');
                }

                container.appendChild(domNode);
            }
        }

        this.appEl.innerHTML = '';
        this.appEl.appendChild(container);
        this.appEl.style.opacity = 1;
    }
}
