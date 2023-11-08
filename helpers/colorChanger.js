function changeOpacityHexColor(hexColor) {
    const factor = 0.6; // 40% darker
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);
    r = Math.round(r * factor);
    g = Math.round(g * factor);
    b = Math.round(b * factor);
    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;
    return `#${(r * 0x10000 + g * 0x100 + b).toString(16).padStart(6, '0')}`;
}

export default changeOpacityHexColor;