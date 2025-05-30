export const descricoesPorModelo = {
    camiseta: "Camiseta 100% algodão com 270 g/m² \nModelagem Working Title \nArte em silk screen \nEtiquetas ",
    moletom: "Moletom 50% Algodão, \n 50% Poliéster \n Bordado / Embroidered Logo \n Etiquetas ",
    jaqueta: "Jaqueta 100% algodão \n Bordado / Embroidered Logo \n Etiquetas ",
    boné: "90% Poliéster, \n 10% Poliamida \n Arte em plastisol \n Etiquetas e metais ",
    gorro: "70% poliéster, \n 30% acrílico Team Model \n Tamanho único \n Etiquetas ",
    jorts: "Jeans 100% Algodão \n  Rebites personalizados \n Fechamento de botão e zíper YKK \n Etiquetas ",
    bermuda: "Shorts com ajuste atlético \n Elastic Waistband \n Etiquetas ",
    sneakers: "Material sintético de alta qualidade, solado antiderrapante, palmilha confortável, design moderno \n Colorway Original ",
    shape: "8.0” x 31.5” \n 14.25” Wheelbase \n DW Deep Concave \n 100% Canadian Maple ",
    lixa: "Tam. 33x9” \n Comprimento: 84cm \n Largura: 22,5cm \n Lixa de alta abrasão ",
};

export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}