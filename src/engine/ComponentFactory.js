import { Parser } from './Parser.js';
import { BrushRenderer } from './BrushRenderer.js';

export class ComponentFactory {
    static async create(elementData, palette) {
        // Find component definition
        const compId = elementData.component;
        let compObj = null;
        if (compId) compObj = await Parser.getComponent(compId);

        const el = document.createElement('div');
        el.className = 'st-element';
        el.id = elementData.id || compId;

        // Apply base styles depending on position
        if (elementData.position === 'center') {
            el.style.margin = '20px auto';
            el.style.textAlign = 'center';
        } else if (elementData.position === 'top') {
            el.style.marginTop = '20px';
        } else if (elementData.position === 'top_left') {
            el.style.position = 'absolute';
            el.style.top = '20px';
            el.style.left = '20px'; // Because RTL is right to left, this would technically be absolute left
        }

        // Apply component schema
        if (compObj) {
            if (compObj.component_id.includes('button')) {
                // Determine if it's a primary or secondary button brush
                const styleCss = await BrushRenderer.generateButtonCSS(compObj.structure?.background, palette);
                
                // Create a real button
                const btn = document.createElement('button');
                btn.style.cssText = `
                    padding: 15px 30px;
                    font-size: 1.2rem;
                    cursor: pointer;
                    border: none;
                    transition: 0.3s;
                    font-family: inherit;
                    ${styleCss || `background: ${palette.colors.primary_pink}; border-radius: 10px;`}
                `;
                
                // Fallback styling if brush was not fully loaded
                if(!styleCss && compObj.style === 'primary') {
                    btn.style.background = palette.colors.primary_pink;
                    btn.style.color = '#fff';
                    btn.style.borderRadius = "20px";
                }
                if(!styleCss && compObj.style === 'icon') {
                    // It's an icon button, e.g. back nav
                    btn.style.background = palette.colors.accent_pastels?.mint || '#fff';
                    btn.style.borderRadius = '50%';
                    btn.style.width = '50px';
                    btn.style.height = '50px';
                    btn.style.padding = '0';
                }

                // Check for hover interactions
                if (compObj.interactions && compObj.interactions.hover) {
                    btn.addEventListener('mouseenter', () => {
                        btn.style.transform = `scale(${compObj.interactions.hover.scale})`;
                    });
                    btn.addEventListener('mouseleave', () => {
                        btn.style.transform = 'scale(1)';
                    });
                }

                // Text or Icon override from Screen element
                if (elementData.override && elementData.override.text) {
                    btn.innerHTML = elementData.override.text;
                } else if (elementData.override && elementData.override.icon) {
                    // For the back arrow, an SVG icon
                    btn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" stroke="${palette.colors.text_dark_pink}" stroke-width="2" fill="none"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;
                } else {
                    btn.innerHTML = compObj.component_id;
                }

                el.appendChild(btn);
            } else if (compObj.component_id.includes('card')) {
                // It's a card
                const inner = document.createElement('div');
                inner.style.cssText = `
                    background: #fff;
                    padding: 30px;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px ${palette.colors.shadow_blend || 'rgba(0,0,0,0.1)'};
                `;
                
                // Loop through content items
                if (elementData.content_items) {
                    elementData.content_items.forEach(c_item => {
                        const p = document.createElement('div');
                        if (c_item.includes('heading')) {
                            p.innerHTML = `<h2 style="color:${palette.colors.text_dark_pink}; margin-top:0;">عنوان تفاصيل العمل</h2>`;
                        } else {
                            p.innerHTML = `<p style="color:#666;">بعض النصوص التي تصف التفاصيل المأخوذة من الكارت <b>${compId}</b> باستخدام نظام Antigravity، والتي سيتم ربطها بفرشاة الـ ${c_item}.</p>`;
                        }
                        inner.appendChild(p);
                    });
                }
                el.appendChild(inner);
            }
        } else {
            // Missing comp? Render raw
            const fallback = document.createElement('div');
            fallback.innerHTML = elementData.id || "Unknown Component";
            el.appendChild(fallback);
        }

        return el;
    }
}
