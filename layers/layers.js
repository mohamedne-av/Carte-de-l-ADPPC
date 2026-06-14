var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_4 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.588000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Coursdeau_5 = new ol.format.GeoJSON();
var features_Coursdeau_5 = format_Coursdeau_5.readFeatures(json_Coursdeau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coursdeau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_5.addFeatures(features_Coursdeau_5);
var lyr_Coursdeau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursdeau_5, 
                style: style_Coursdeau_5,
                popuplayertitle: 'Cours d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Coursdeau_5.png" /> Cours d\'eau'
            });
var format_Antennes_6 = new ol.format.GeoJSON();
var features_Antennes_6 = format_Antennes_6.readFeatures(json_Antennes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antennes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antennes_6.addFeatures(features_Antennes_6);
var lyr_Antennes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Antennes_6, 
                style: style_Antennes_6,
                popuplayertitle: 'Antennes',
                interactive: true,
                title: '<img src="styles/legend/Antennes_6.png" /> Antennes'
            });
var format_Plansdeau_7 = new ol.format.GeoJSON();
var features_Plansdeau_7 = format_Plansdeau_7.readFeatures(json_Plansdeau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plansdeau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plansdeau_7.addFeatures(features_Plansdeau_7);
var lyr_Plansdeau_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plansdeau_7, 
                style: style_Plansdeau_7,
                popuplayertitle: 'Plans d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Plansdeau_7.png" /> Plans d\'eau'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_OSMStandard_4.setVisible(true);lyr_Coursdeau_5.setVisible(true);lyr_Antennes_6.setVisible(true);lyr_Plansdeau_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OSMStandard_1,lyr_OSMStandard_2,lyr_GoogleSatellite_3,lyr_OSMStandard_4,lyr_Coursdeau_5,lyr_Antennes_6,lyr_Plansdeau_7];
lyr_Coursdeau_5.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_Antennes_6.set('fieldAliases', {'id': 'id', 'Antenne': 'Antenne', });
lyr_Plansdeau_7.set('fieldAliases', {'id': 'id', 'Plan d\'eau': 'Plan d\'eau', });
lyr_Coursdeau_5.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Antennes_6.set('fieldImages', {'id': 'TextEdit', 'Antenne': 'TextEdit', });
lyr_Plansdeau_7.set('fieldImages', {'id': 'TextEdit', 'Plan d\'eau': 'TextEdit', });
lyr_Coursdeau_5.set('fieldLabels', {'id': 'no label', 'Nom': 'header label - always visible', });
lyr_Antennes_6.set('fieldLabels', {'id': 'no label', 'Antenne': 'header label - visible with data', });
lyr_Plansdeau_7.set('fieldLabels', {'id': 'no label', 'Plan d\'eau': 'header label - visible with data', });
lyr_Plansdeau_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});