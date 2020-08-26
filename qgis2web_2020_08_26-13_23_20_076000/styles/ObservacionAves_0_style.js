var size = 0;
var placement = 'point';

var style_ObservacionAves_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "16.25px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(180, 31, 31, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("PUNTOS") !== null) {
        labelText = String(feature.get("PUNTOS"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(248,252,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
