var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Alturas_maximas_edificadas_2 = new ol.format.GeoJSON();
var features_Alturas_maximas_edificadas_2 = format_Alturas_maximas_edificadas_2.readFeatures(json_Alturas_maximas_edificadas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alturas_maximas_edificadas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alturas_maximas_edificadas_2.addFeatures(features_Alturas_maximas_edificadas_2);
var lyr_Alturas_maximas_edificadas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alturas_maximas_edificadas_2, 
                style: style_Alturas_maximas_edificadas_2,
                popuplayertitle: "Alturas_maximas_edificadas",
                interactive: true,
    title: 'Alturas_maximas_edificadas<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_0.png" /> 0<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_1.png" /> 1,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_2.png" /> 2,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_3.png" /> 3,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_4.png" /> 3,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_5.png" /> 4,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_6.png" /> 4,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_7.png" /> 5,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_8.png" /> 5,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_9.png" /> 6,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_10.png" /> 6,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_11.png" /> 7,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_12.png" /> 7,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_13.png" /> 8,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_14.png" /> 8,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_15.png" /> 9,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_16.png" /> 9,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_17.png" /> 10,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_18.png" /> 10,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_19.png" /> 11,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_20.png" /> 11,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_21.png" /> 12,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_22.png" /> 12,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_23.png" /> 13,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_24.png" /> 13,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_25.png" /> 14,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_26.png" /> 14,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_27.png" /> 15,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_28.png" /> 15,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_29.png" /> 16,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_30.png" /> 17,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_31.png" /> 17,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_32.png" /> 18,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_33.png" /> 19,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_34.png" /> 19,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_35.png" /> 20,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_36.png" /> 20,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_37.png" /> 21,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_38.png" /> 22,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_39.png" /> 23,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_40.png" /> 24,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_41.png" /> 25,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_42.png" /> 25,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_43.png" /> 36,00000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_44.png" /> 54,50000000000<br />\
    <img src="styles/legend/Alturas_maximas_edificadas_2_45.png" /> <br />'
        });
var format_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3 = new ol.format.GeoJSON();
var features_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3 = format_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3.readFeatures(json_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3.addFeatures(features_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3);
var lyr_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3, 
                style: style_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3,
                popuplayertitle: "COEFICIENTE_DE_CONSTRUCCIÓN_EN_ZONAS_CON_INCENTIVOS",
                interactive: true,
    title: 'COEFICIENTE_DE_CONSTRUCCIÓN_EN_ZONAS_CON_INCENTIVOS<br />\
    <img src="styles/legend/COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3_0.png" /> 3,5<br />\
    <img src="styles/legend/COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3_1.png" /> 4,3<br />'
        });
var format_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4 = new ol.format.GeoJSON();
var features_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4 = format_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4.readFeatures(json_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4.addFeatures(features_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4);
var lyr_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4, 
                style: style_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4,
                popuplayertitle: "ZONAS_CON_INCENTIVOS_DE_EDIFICACIÓN_MEIGGS",
                interactive: true,
    title: 'ZONAS_CON_INCENTIVOS_DE_EDIFICACIÓN_MEIGGS<br />\
    <img src="styles/legend/ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4_0.png" /> B<br />\
    <img src="styles/legend/ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4_1.png" /> E6<br />'
        });
var format_CONDICIONANTES_PROPUESTAS_5 = new ol.format.GeoJSON();
var features_CONDICIONANTES_PROPUESTAS_5 = format_CONDICIONANTES_PROPUESTAS_5.readFeatures(json_CONDICIONANTES_PROPUESTAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONDICIONANTES_PROPUESTAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONDICIONANTES_PROPUESTAS_5.addFeatures(features_CONDICIONANTES_PROPUESTAS_5);
var lyr_CONDICIONANTES_PROPUESTAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONDICIONANTES_PROPUESTAS_5, 
                style: style_CONDICIONANTES_PROPUESTAS_5,
                popuplayertitle: "CONDICIONANTES_PROPUESTAS",
                interactive: true,
    title: 'CONDICIONANTES_PROPUESTAS<br />\
    <img src="styles/legend/CONDICIONANTES_PROPUESTAS_5_0.png" /> 1,3,4,5,6,7,8,9,11,12,13,14<br />\
    <img src="styles/legend/CONDICIONANTES_PROPUESTAS_5_1.png" /> 5,6,7,8,9,11<br />'
        });
var format_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6 = new ol.format.GeoJSON();
var features_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6 = format_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6.readFeatures(json_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6.addFeatures(features_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6);
var lyr_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6, 
                style: style_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6,
                popuplayertitle: "ALTURAS_PERMITIDAS_POR_PREDIO_PRC",
                interactive: true,
    title: 'ALTURAS_PERMITIDAS_POR_PREDIO_PRC<br />\
    <img src="styles/legend/ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6_0.png" /> 14<br />\
    <img src="styles/legend/ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6_1.png" /> 17.5<br />\
    <img src="styles/legend/ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6_2.png" /> 22.5<br />\
    <img src="styles/legend/ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6_3.png" /> 24<br />'
        });
var format_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7 = new ol.format.GeoJSON();
var features_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7 = format_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7.readFeatures(json_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7.addFeatures(features_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7);
var lyr_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7, 
                style: style_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7,
                popuplayertitle: "COEFICIENTE_DE_CONSTRUCTIBILIDAD",
                interactive: true,
    title: 'COEFICIENTE_DE_CONSTRUCTIBILIDAD<br />\
    <img src="styles/legend/COEFICIENTE_DE_CONSTRUCTIBILIDAD_7_0.png" /> 2<br />\
    <img src="styles/legend/COEFICIENTE_DE_CONSTRUCTIBILIDAD_7_1.png" /> 2.7<br />\
    <img src="styles/legend/COEFICIENTE_DE_CONSTRUCTIBILIDAD_7_2.png" /> 3.6<br />'
        });
var format_ZONAS_PRC_MEIGGS_8 = new ol.format.GeoJSON();
var features_ZONAS_PRC_MEIGGS_8 = format_ZONAS_PRC_MEIGGS_8.readFeatures(json_ZONAS_PRC_MEIGGS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAS_PRC_MEIGGS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAS_PRC_MEIGGS_8.addFeatures(features_ZONAS_PRC_MEIGGS_8);
var lyr_ZONAS_PRC_MEIGGS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAS_PRC_MEIGGS_8, 
                style: style_ZONAS_PRC_MEIGGS_8,
                popuplayertitle: "ZONAS_PRC_MEIGGS",
                interactive: true,
    title: 'ZONAS_PRC_MEIGGS<br />\
    <img src="styles/legend/ZONAS_PRC_MEIGGS_8_0.png" /> B<br />\
    <img src="styles/legend/ZONAS_PRC_MEIGGS_8_1.png" /> B8<br />\
    <img src="styles/legend/ZONAS_PRC_MEIGGS_8_2.png" /> E<br />\
    <img src="styles/legend/ZONAS_PRC_MEIGGS_8_3.png" /> E6<br />'
        });
var format_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9 = new ol.format.GeoJSON();
var features_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9 = format_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9.readFeatures(json_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9.addFeatures(features_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9);
var lyr_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9, 
                style: style_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9,
                popuplayertitle: "MEIGGS_USO_DE_SUELO_EXISTENTE_SII",
                interactive: true,
    title: 'MEIGGS_USO_DE_SUELO_EXISTENTE_SII<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_0.png" /> Bienes comunes<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_1.png" /> Bodega y Almacenaje<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_2.png" /> Comercio<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_3.png" /> Culto<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_4.png" /> Deporte y Recreación<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_5.png" /> Educación y Cultura<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_6.png" /> Estacionamiento<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_7.png" /> Habitacional<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_8.png" /> Hotel, Motel<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_9.png" /> Industria<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_10.png" /> Oficina<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_11.png" /> Otros no considerados<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_12.png" /> Sin información<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_13.png" /> Sitio Eriazo<br />\
    <img src="styles/legend/MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9_14.png" /> Transporte y Telecomunicaciones<br />'
        });

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Alturas_maximas_edificadas_2.setVisible(true);lyr_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3.setVisible(false);lyr_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4.setVisible(false);lyr_CONDICIONANTES_PROPUESTAS_5.setVisible(false);lyr_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6.setVisible(false);lyr_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7.setVisible(false);lyr_ZONAS_PRC_MEIGGS_8.setVisible(false);lyr_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Alturas_maximas_edificadas_2,lyr_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3,lyr_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4,lyr_CONDICIONANTES_PROPUESTAS_5,lyr_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6,lyr_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7,lyr_ZONAS_PRC_MEIGGS_8,lyr_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9];
lyr_Alturas_maximas_edificadas_2.set('fieldAliases', {'Alt_P': 'Alt_P', });
lyr_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3.set('fieldAliases', {'FECHA': 'FECHA', 'ZONA': 'ZONA', 'ZONAS_MONO': 'ZONAS_MONO', 'MOD2018': 'MOD2018', 'SUBPM_M2': 'SUBPM_M2', 'COEF_OC_SU': 'COEF_OC_SU', 'COEF_OC_PI': 'COEF_OC_PI', 'COEF_DE_CO': 'COEF_DE_CO', 'COEF1': 'COEF1', 'SISTEMA_DE': 'SISTEMA_DE', 'ALT_MAX_ED': 'ALT_MAX_ED', 'INC_COEF_C': 'INC_COEF_C', 'COEF2': 'COEF2', 'MT_ADICION': 'MT_ADICION', 'N__COND_CU': 'N__COND_CU', 'N__COND__1': 'N__COND__1', 'N_COND_CUM': 'N_COND_CUM', 'OBLIGATORI': 'OBLIGATORI', 'INCENTIVOS': 'INCENTIVOS', 'ALT_MAX_CO': 'ALT_MAX_CO', 'COEF_CONST': 'COEF_CONST', });
lyr_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4.set('fieldAliases', {'FECHA': 'FECHA', 'ZONA': 'ZONA', 'SUBPM_M2': 'SUBPM_M2', 'COEF_OC_SU': 'COEF_OC_SU', 'COEF_OC_PI': 'COEF_OC_PI', 'COEF_DE_CO': 'COEF_DE_CO', 'SISTEMA_DE': 'SISTEMA_DE', 'ALT_MAX_ED': 'ALT_MAX_ED', 'INC_COEF_C': 'INC_COEF_C', 'MT_ADICION': 'MT_ADICION', 'N__COND_CU': 'N__COND_CU', 'N__COND__1': 'N__COND__1', 'N_COND_CUM': 'N_COND_CUM', 'OBLIGATORI': 'OBLIGATORI', 'INCENTIVOS': 'INCENTIVOS', });
lyr_CONDICIONANTES_PROPUESTAS_5.set('fieldAliases', {'Condiciona': 'Condiciona', 'Cantidad_d': 'Cantidad_d', });
lyr_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6.set('fieldAliases', {'ALT_MAX_ED': 'ALT_MAX_ED', });
lyr_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'FECHA': 'FECHA', 'ZONA': 'ZONA', 'SUBPM_M2': 'SUBPM_M2', 'COEF_OC_SU': 'COEF_OC_SU', 'COEF_OC_PI': 'COEF_OC_PI', 'COEF_DE_CO': 'COEF_DE_CO', 'SISTEMA_DE': 'SISTEMA_DE', 'ALT_MAX_ED': 'ALT_MAX_ED', 'OBLIGATORI': 'OBLIGATORI', 'INCENTIVOS': 'INCENTIVOS', 'Identifica': 'Identifica', });
lyr_ZONAS_PRC_MEIGGS_8.set('fieldAliases', {'FECHA': 'FECHA', 'ZONA': 'ZONA', 'SUBPM_M2': 'SUBPM_M2', 'ALT_MAX_ED': 'ALT_MAX_ED', });
lyr_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9.set('fieldAliases', {'COMUNA': 'COMUNA', 'ROL': 'ROL', 'CODIGO_SII': 'CODIGO_SII', 'MANZANA': 'MANZANA', 'PREDIO': 'PREDIO', 'DIRECCION': 'DIRECCION', 'AVALUO_FIS': 'AVALUO_FIS', 'CONTRIBUCI': 'CONTRIBUCI', 'DESTINO': 'DESTINO', 'AVALUO_EXE': 'AVALUO_EXE', 'PREDIO_ROL': 'PREDIO_ROL', 'SUP_TERREN': 'SUP_TERREN', 'TIPO_DE_US': 'TIPO_DE_US', });
lyr_Alturas_maximas_edificadas_2.set('fieldImages', {'Alt_P': 'TextEdit', });
lyr_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3.set('fieldImages', {'FECHA': 'DateTime', 'ZONA': 'TextEdit', 'ZONAS_MONO': 'TextEdit', 'MOD2018': 'TextEdit', 'SUBPM_M2': 'TextEdit', 'COEF_OC_SU': 'TextEdit', 'COEF_OC_PI': 'TextEdit', 'COEF_DE_CO': 'TextEdit', 'COEF1': 'TextEdit', 'SISTEMA_DE': 'TextEdit', 'ALT_MAX_ED': 'TextEdit', 'INC_COEF_C': 'TextEdit', 'COEF2': 'TextEdit', 'MT_ADICION': 'TextEdit', 'N__COND_CU': 'TextEdit', 'N__COND__1': 'TextEdit', 'N_COND_CUM': 'TextEdit', 'OBLIGATORI': 'TextEdit', 'INCENTIVOS': 'TextEdit', 'ALT_MAX_CO': 'TextEdit', 'COEF_CONST': 'TextEdit', });
lyr_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4.set('fieldImages', {'FECHA': 'DateTime', 'ZONA': 'TextEdit', 'SUBPM_M2': 'TextEdit', 'COEF_OC_SU': 'TextEdit', 'COEF_OC_PI': 'TextEdit', 'COEF_DE_CO': 'TextEdit', 'SISTEMA_DE': 'TextEdit', 'ALT_MAX_ED': 'TextEdit', 'INC_COEF_C': 'TextEdit', 'MT_ADICION': 'TextEdit', 'N__COND_CU': 'TextEdit', 'N__COND__1': 'TextEdit', 'N_COND_CUM': 'TextEdit', 'OBLIGATORI': 'TextEdit', 'INCENTIVOS': 'TextEdit', });
lyr_CONDICIONANTES_PROPUESTAS_5.set('fieldImages', {'Condiciona': 'TextEdit', 'Cantidad_d': 'TextEdit', });
lyr_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6.set('fieldImages', {'ALT_MAX_ED': 'TextEdit', });
lyr_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'FECHA': 'DateTime', 'ZONA': 'TextEdit', 'SUBPM_M2': 'TextEdit', 'COEF_OC_SU': 'TextEdit', 'COEF_OC_PI': 'TextEdit', 'COEF_DE_CO': 'TextEdit', 'SISTEMA_DE': 'TextEdit', 'ALT_MAX_ED': 'TextEdit', 'OBLIGATORI': 'TextEdit', 'INCENTIVOS': 'TextEdit', 'Identifica': 'TextEdit', });
lyr_ZONAS_PRC_MEIGGS_8.set('fieldImages', {'FECHA': 'DateTime', 'ZONA': 'TextEdit', 'SUBPM_M2': 'TextEdit', 'ALT_MAX_ED': 'TextEdit', });
lyr_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9.set('fieldImages', {'COMUNA': 'TextEdit', 'ROL': 'TextEdit', 'CODIGO_SII': 'TextEdit', 'MANZANA': 'TextEdit', 'PREDIO': 'TextEdit', 'DIRECCION': 'TextEdit', 'AVALUO_FIS': 'TextEdit', 'CONTRIBUCI': 'TextEdit', 'DESTINO': 'TextEdit', 'AVALUO_EXE': 'TextEdit', 'PREDIO_ROL': 'TextEdit', 'SUP_TERREN': 'TextEdit', 'TIPO_DE_US': 'TextEdit', });
lyr_Alturas_maximas_edificadas_2.set('fieldLabels', {'Alt_P': 'no label', });
lyr_COEFICIENTE_DE_CONSTRUCCIN_EN_ZONAS_CON_INCENTIVOS_3.set('fieldLabels', {'FECHA': 'header label - visible with data', 'ZONA': 'header label - visible with data', 'ZONAS_MONO': 'header label - visible with data', 'MOD2018': 'header label - visible with data', 'SUBPM_M2': 'header label - visible with data', 'COEF_OC_SU': 'header label - visible with data', 'COEF_OC_PI': 'header label - visible with data', 'COEF_DE_CO': 'header label - visible with data', 'COEF1': 'header label - visible with data', 'SISTEMA_DE': 'header label - visible with data', 'ALT_MAX_ED': 'header label - visible with data', 'INC_COEF_C': 'header label - visible with data', 'COEF2': 'header label - visible with data', 'MT_ADICION': 'header label - visible with data', 'N__COND_CU': 'header label - visible with data', 'N__COND__1': 'header label - visible with data', 'N_COND_CUM': 'header label - visible with data', 'OBLIGATORI': 'header label - visible with data', 'INCENTIVOS': 'header label - visible with data', 'ALT_MAX_CO': 'header label - visible with data', 'COEF_CONST': 'header label - visible with data', });
lyr_ZONAS_CON_INCENTIVOS_DE_EDIFICACIN_MEIGGS_4.set('fieldLabels', {'FECHA': 'header label - visible with data', 'ZONA': 'header label - visible with data', 'SUBPM_M2': 'header label - visible with data', 'COEF_OC_SU': 'header label - visible with data', 'COEF_OC_PI': 'header label - visible with data', 'COEF_DE_CO': 'header label - visible with data', 'SISTEMA_DE': 'header label - visible with data', 'ALT_MAX_ED': 'header label - visible with data', 'INC_COEF_C': 'header label - visible with data', 'MT_ADICION': 'header label - visible with data', 'N__COND_CU': 'header label - visible with data', 'N__COND__1': 'header label - visible with data', 'N_COND_CUM': 'header label - visible with data', 'OBLIGATORI': 'header label - visible with data', 'INCENTIVOS': 'header label - visible with data', });
lyr_CONDICIONANTES_PROPUESTAS_5.set('fieldLabels', {'Condiciona': 'header label - visible with data', 'Cantidad_d': 'header label - visible with data', });
lyr_ALTURAS_PERMITIDAS_POR_PREDIO_PRC_6.set('fieldLabels', {'ALT_MAX_ED': 'header label - visible with data', });
lyr_COEFICIENTE_DE_CONSTRUCTIBILIDAD_7.set('fieldLabels', {'AREA': 'header label - visible with data', 'PERIMETER': 'header label - visible with data', 'FECHA': 'header label - visible with data', 'ZONA': 'header label - visible with data', 'SUBPM_M2': 'header label - visible with data', 'COEF_OC_SU': 'header label - visible with data', 'COEF_OC_PI': 'header label - visible with data', 'COEF_DE_CO': 'header label - visible with data', 'SISTEMA_DE': 'header label - visible with data', 'ALT_MAX_ED': 'header label - visible with data', 'OBLIGATORI': 'header label - visible with data', 'INCENTIVOS': 'header label - visible with data', 'Identifica': 'header label - visible with data', });
lyr_ZONAS_PRC_MEIGGS_8.set('fieldLabels', {'FECHA': 'header label - visible with data', 'ZONA': 'header label - visible with data', 'SUBPM_M2': 'header label - visible with data', 'ALT_MAX_ED': 'header label - visible with data', });
lyr_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9.set('fieldLabels', {'COMUNA': 'header label - visible with data', 'ROL': 'header label - visible with data', 'CODIGO_SII': 'header label - visible with data', 'MANZANA': 'header label - visible with data', 'PREDIO': 'header label - visible with data', 'DIRECCION': 'header label - visible with data', 'AVALUO_FIS': 'header label - visible with data', 'CONTRIBUCI': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'AVALUO_EXE': 'header label - visible with data', 'PREDIO_ROL': 'header label - visible with data', 'SUP_TERREN': 'header label - visible with data', 'TIPO_DE_US': 'header label - visible with data', });
lyr_MEIGGS_USO_DE_SUELO_EXISTENTE_SII_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});