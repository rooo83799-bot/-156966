export class Parser {
    static cache = new Map();

    static async fetchJson(path) {
        if (this.cache.has(path)) {
            return this.cache.get(path);
        }
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Failed to load ${path}`);
            const data = await response.json();
            this.cache.set(path, data);
            return data;
        } catch (error) {
            console.error(`Parser Error: ${error.message}`);
            return null;
        }
    }

    static async getPalette() {
        return this.fetchJson('/brush_system/palette/base.json');
    }

    static async getComposition(id) {
        return this.fetchJson(`/brush_system/compositions/${id}.comp`);
    }

    static async getScreen(id) {
        return this.fetchJson(`/brush_system/screens/${id}.screen`);
    }

    static async getComponent(id) {
        return this.fetchJson(`/brush_system/components/${id}.comp`);
    }

    // Since brushes are split into raster/vector, we might need to probe or use a mapping.
    // For simplicity, we try common paths.
    static async getBrush(id) {
        let paths = [
            `/brush_system/brushes/raster/backgrounds/${id}.brush`,
            `/brush_system/brushes/vector/buttons/${id}.brush`,
            `/brush_system/brushes/vector/text/${id}.brush`
        ];
        
        for (let path of paths) {
            if (this.cache.has(path)) return this.cache.get(path);
        }

        for (let path of paths) {
            try {
                const response = await fetch(path);
                if (response.ok) {
                    const data = await response.json();
                    this.cache.set(path, data);
                    return data;
                }
            } catch (e) {
                // ignore and try next
            }
        }
        return null;
    }

    static resolveColor(colorValue, palette) {
        if (colorValue && colorValue.startsWith('$')) {
            const key = colorValue.replace('$', '');
            if (palette.colors[key]) return palette.colors[key];
            
            // Nested checks for accent_pastels etc
            for (const category in palette.colors) {
                if (typeof palette.colors[category] === 'object') {
                    if (palette.colors[category][key]) {
                        return palette.colors[category][key];
                    }
                }
            }
        }
        return colorValue;
    }
}
