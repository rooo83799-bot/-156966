import { Parser } from './Parser.js';

export class BrushRenderer {
    static async generateBackgroundCSS(brushId, palette) {
        const brush = await Parser.getBrush(brushId);
        if (!brush) return 'background: var(--bg-color);';

        let css = [];
        
        if (brush.layers) {
            // base layer
            if (brush.layers.base) {
                const color = Parser.resolveColor(brush.layers.base.color, palette);
                css.push(`background-color: ${color};`);
            }
            // shadow
            if (brush.layers.shadow) {
                const shadowColor = Parser.resolveColor(brush.layers.shadow.color, palette);
                css.push(`box-shadow: 0px ${brush.layers.shadow.offset[1]}px ${brush.layers.shadow.blur}px ${shadowColor};`);
            }
            // texture - generate a fun background pattern just for aesthetics
            if (brush.layers.texture && brush.layers.texture.pattern === 'watercolor_grain') {
                css.push(`background-image: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 50%);`);
                css.push(`background-size: cover;`);
            }
        }
        
        // Return CSS string
        return css.join(' ');
    }

    static async generateButtonCSS(brushId, palette) {
        const brush = await Parser.getBrush(brushId);
        if (!brush) return '';

        let css = [];
        if (brush.layers && brush.layers.base) {
            const color = Parser.resolveColor(brush.layers.base.color, palette);
            css.push(`background-color: ${color};`);
            
            if (brush.layers.base.cornerRadius) {
                css.push(`border-radius: ${brush.layers.base.cornerRadius}px;`);
            }
        }

        if (brush.layers && brush.layers.stroke) {
            const sc = Parser.resolveColor(brush.layers.stroke.color, palette);
            css.push(`border: ${brush.layers.stroke.width}px solid ${sc};`);
        }

        return css.join(' ');
    }
}
