var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ObservacionAves_0 = new ol.format.GeoJSON();
var features_ObservacionAves_0 = format_ObservacionAves_0.readFeatures(json_ObservacionAves_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObservacionAves_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ObservacionAves_0.addFeatures(features_ObservacionAves_0);var lyr_ObservacionAves_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ObservacionAves_0, 
                style: style_ObservacionAves_0,
                title: '<img src="styles/legend/ObservacionAves_0.png" /> ObservacionAves'
            });var format_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1 = new ol.format.GeoJSON();
var features_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1 = format_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1.readFeatures(json_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1.addFeatures(features_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1);var lyr_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1, 
                style: style_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1,
                title: '<img src="styles/legend/RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1.png" /> RutaAvistamientoAB Indicaciones de Cl. 10 #55, Medellín, Antioquia, Colombia a Las Hamacas Mirador LineString'
            });

lyr_ObservacionAves_0.setVisible(true);lyr_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1.setVisible(true);
var layersList = [baseLayer,lyr_ObservacionAves_0,lyr_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1];
lyr_ObservacionAves_0.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'OBJECTID': 'OBJECTID', 'NOMBRESITI': 'NOMBRESITI', 'LABEL': 'LABEL', 'IMPERDIBLE': 'IMPERDIBLE', 'TIPOATRACT': 'TIPOATRACT', 'COD_COMUNA': 'COD_COMUNA', 'COM_CORR': 'COM_CORR', 'PUNTOS': 'PUNTOS', });
lyr_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ObservacionAves_0.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRESITI': 'TextEdit', 'LABEL': 'TextEdit', 'IMPERDIBLE': 'TextEdit', 'TIPOATRACT': 'TextEdit', 'COD_COMUNA': 'TextEdit', 'COM_CORR': 'TextEdit', 'PUNTOS': 'TextEdit', });
lyr_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ObservacionAves_0.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'OBJECTID': 'no label', 'NOMBRESITI': 'no label', 'LABEL': 'no label', 'IMPERDIBLE': 'no label', 'TIPOATRACT': 'no label', 'COD_COMUNA': 'no label', 'COM_CORR': 'no label', 'PUNTOS': 'no label', });
lyr_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RutaAvistamientoABIndicacionesdeCl1055MedellnAntioquiaColombiaaLasHamacasMiradorLineString_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});