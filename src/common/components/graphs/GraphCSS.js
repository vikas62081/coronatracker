export const tooltip = { enable: true, shared: true, width: 5 };
export const primaryyAxis = {
        title: "Daily Coronavirus cases",
        // valueType: isLogarithmic === 1 ? 'Logarithmic' : 'Double',
        // labelPlacement:'OnTicks'
        // labelFormat: '${value}K'
    };
    // export const palette = ["#E94649", "#F6B53F", "#ff9900","#2ec9fd","#6FAAB0", "#C4C24A"];
    
    export const palette = ["#E94649", "#8fda1f", "#ff9900","#2ec9fd","#6FAAB0", "#C4C24A"];
    export const primarxyAxis = {
        valueType: 'Category', title: 'Date',
        labelIntersectAction: 'Rotate45', enableLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }, labelPlacement:'BetweenTicks'
    };
    export const legendSettings = { visible: true };
    export const marker = {
        visible: true,
        width: 5, height: 5,
        //  dataLabel: { visible: true }
    };
   export const empty = {
        mode: 'Zero', fill: 'pink', border: { width: 2, color: 'black'}
    }
    export const zoomsettings = {
        enableMouseWheelZooming: true, enablePinchZooming: false,
        enableSelectionZooming: false, enableScrollbar:false
    };
    export const border = { width: 0, color: '#FF0000' };
    export const animation = { enable: true, duration: 2200, delay: 2000 };
    export const margin = { left: 0, right: 20, top: 0, bottom: 0 };
    export const width=4;