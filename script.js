(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  {
   "scrollBarOpacity": 0.5,
   "left": "15%",
   "children": [
    "this.Container_5645B517_5EBA_61DA_41CE_5170204AEC9E"
   ],
   "scrollBarVisible": "rollOver",
   "layout": "horizontal",
   "backgroundOpacity": 0,
   "right": "15%",
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "borderRadius": 0,
   "overflow": "scroll",
   "propagateClick": false,
   "minHeight": 1,
   "class": "Container",
   "bottom": "0%",
   "scrollBarWidth": 10,
   "height": 142,
   "minWidth": 1,
   "borderSize": 0,
   "paddingBottom": 0,
   "gap": 10,
   "paddingTop": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "DownMenuContainer"
   },
   "shadow": false,
   "horizontalAlign": "center"
  },
  "this.IconButton_357D0D25_076B_395A_418B_92F8849024A0",
  "this.IconButton_39824157_2AC0_30AF_41C3_6B2880903F5A",
  "this.Container_2214E3B4_2FC5_5D93_41B3_6239A6584030",
  "this.Container_11469FA3_0003_6AAF_4124_EC189393BE88",
  "this.Container_3ECB2A75_2FDB_2E92_41B7_858A5D2A0637",
  "this.Container_3CCA3458_2FDB_FA92_41B1_D0F9F29108A2",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_357D0D25_076B_395A_418B_92F8849024A0], 'cardboardAvailable')",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3D025AA4_07E5_3B5B_414B_16CBCEC0EA1C",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3D025AA4_07E5_3B5B_414B_16CBCEC0EA1C.ogg",
  "mp3Url": "media/audio_3D025AA4_07E5_3B5B_414B_16CBCEC0EA1C.mp3"
 },
 "data": {
  "label": "Shak Jamal Bedroom"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3DC55160_07EB_29DA_4198_26C4BFFD25D4",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3DC55160_07EB_29DA_4198_26C4BFFD25D4.ogg",
  "mp3Url": "media/audio_3DC55160_07EB_29DA_4198_26C4BFFD25D4.mp3"
 },
 "data": {
  "label": "Living room 2nd floor"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 27.2,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_31227244_0725_2BDA_4194_3FEF4D8E82D6",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_31227244_0725_2BDA_4194_3FEF4D8E82D6_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -0.39,
 "hideEasing": "cubic_out",
 "hfov": 5.92
},
{
 "initialPosition": {
  "yaw": -8.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B7849B4_4571_9DA4_4188_81A41C9A9269"
},
{
 "initialPosition": {
  "yaw": 6.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BC2CA7B_4571_9EA3_4185_44E39C5AAEA8"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 50.32,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_32CB674B_0725_29EE_4188_0C7A15945E19",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_32CB674B_0725_29EE_4188_0C7A15945E19_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -3.9,
 "hideEasing": "cubic_out",
 "hfov": 5.91
},
{
 "duration": 500,
 "id": "effect_577457E6_43D3_75A5_41D0_5DC9A7AB2A6E",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_camera"
},
{
 "initialPosition": {
  "yaw": -133.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65143BAE_4571_9DA4_41CD_E4BB0BAF4673"
},
{
 "duration": 500,
 "id": "effect_57F2F52F_43D0_8AA4_41D0_6897F2ABCFC2",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_3B387D0A_2F4B_2A76_41BE_328980041886",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -12.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_657BEBD1_4571_9DFC_41C1_5D62485D883A"
},
{
 "levels": [
  {
   "url": "media/popup_3BB6142C_072B_2FAA_4175_90509DBA00F6_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_3BB6142C_072B_2FAA_4175_90509DBA00F6_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_3BB6142C_072B_2FAA_4175_90509DBA00F6_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_3BB6142C_072B_2FAA_4175_90509DBA00F6_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_3BB6142C_072B_2FAA_4175_90509DBA00F6_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_3BB6142C_072B_2FAA_4175_90509DBA00F6_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42A69BEC_071B_F8AB_4175_FEB7BF97FFC4",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_38ACCBC9_07E5_58EA_417F_8E46D2F885E1",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_38ACCBC9_07E5_58EA_417F_8E46D2F885E1.ogg",
  "mp3Url": "media/audio_38ACCBC9_07E5_58EA_417F_8E46D2F885E1.mp3"
 },
 "data": {
  "label": "Shek Rehana room"
 }
},
{
 "duration": 500,
 "id": "effect_2A483601_30C5_E672_41C0_EACB27B59047",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -76.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65BFCC00_4571_9A5D_41BD_E3FCC70E8D10"
},
{
 "duration": 500,
 "id": "effect_58227198_4577_8A6D_41BC_21FD15C6780A",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_camera"
},
{
 "initialPosition": {
  "yaw": 123.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B3A8958_4571_9AED_41CD_D63BCA4A9A1B"
},
{
 "levels": [
  {
   "url": "media/popup_32CB674B_0725_29EE_4188_0C7A15945E19_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_32CB674B_0725_29EE_4188_0C7A15945E19_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_32CB674B_0725_29EE_4188_0C7A15945E19_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_32CB674B_0725_29EE_4188_0C7A15945E19_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_32CB674B_0725_29EE_4188_0C7A15945E19_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_32CB674B_0725_29EE_4188_0C7A15945E19_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42A5EBEB_071B_F8AD_4154_79A2FECD3BF2",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_camera"
},
{
 "initialPosition": {
  "yaw": 130.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B28493F_4571_9AA3_41C9_2898AD325EB4"
},
{
 "thumbnailUrl": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_t.jpg",
 "label": "D06 Corridor Passage",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF",
 "overlays": [
  "this.overlay_336118E7_073B_58A5_415E_E775A90278C2",
  "this.popup_31466DCA_073B_D8EE_4196_B324C6CD2A88",
  "this.overlay_39F92087_2AC0_11AF_419F_2E7B3D0EC5CB",
  "this.overlay_39802E00_2AC0_30A2_41C4_D1F8563C947E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 169.39,
   "class": "AdjacentPanorama",
   "backwardYaw": -177.48,
   "panorama": "this.panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_3E6B0004_0725_275A_416E_1860858679B5_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_3E6B0004_0725_275A_416E_1860858679B5_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_3E6B0004_0725_275A_416E_1860858679B5_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_3E6B0004_0725_275A_416E_1860858679B5_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_3E6B0004_0725_275A_416E_1860858679B5_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_3E6B0004_0725_275A_416E_1860858679B5_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42B16BFA_071B_F8AF_4181_109AC1162676",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -56.96,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -11.94,
 "hideEasing": "cubic_out",
 "hfov": 5.79
},
{
 "levels": [
  {
   "url": "media/popup_31227244_0725_2BDA_4194_3FEF4D8E82D6_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_31227244_0725_2BDA_4194_3FEF4D8E82D6_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_31227244_0725_2BDA_4194_3FEF4D8E82D6_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_31227244_0725_2BDA_4194_3FEF4D8E82D6_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_31227244_0725_2BDA_4194_3FEF4D8E82D6_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_31227244_0725_2BDA_4194_3FEF4D8E82D6_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42A0EBEE_071B_F8A7_4152_9F5324F17C5E",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -102.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B7559A2_4571_9A5C_41C4_DB5D76A4740C"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_camera"
},
{
 "levels": [
  {
   "url": "media/popup_12012729_019C_CC94_4171_A44AE9501AC7_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_12012729_019C_CC94_4171_A44AE9501AC7_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_12012729_019C_CC94_4171_A44AE9501AC7_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_12012729_019C_CC94_4171_A44AE9501AC7_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_12012729_019C_CC94_4171_A44AE9501AC7_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_12012729_019C_CC94_4171_A44AE9501AC7_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_17E0AB12_019F_44B4_416F_4C7CBCF2A694",
 "class": "ImageResource"
},
{
 "duration": 500,
 "id": "effect_3BD2447A_2F4C_FA96_41B0_282C9E4F87A4",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "thumbnailUrl": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_t.jpg",
 "label": "D01 Entry1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524",
 "overlays": [
  "this.overlay_307CEA05_0725_DB5A_4186_A038628C73AB",
  "this.popup_32CB674B_0725_29EE_4188_0C7A15945E19",
  "this.overlay_39B5B457_2AC0_10AF_41C0_D6055D49A454",
  "this.overlay_3853EB90_2AC0_77A2_419E_CE72A240F8D6",
  "this.overlay_399D60FF_2AC0_115E_41BC_B02C0245064B",
  "this.overlay_4CAC676C_42D0_96A5_41D0_96446EF2D21C",
  "this.popup_4DF674B8_42D0_8BAC_41C6_C3677BD93129"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -45.29,
   "panorama": "this.panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53",
   "distance": 1
  },
  {
   "yaw": 171.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 103.3,
   "panorama": "this.panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 11.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6537DB96_4571_9E64_41C0_AEC9FC0C5ABC"
},
{
 "duration": 200,
 "id": "effect_3B57411A_2F45_FA96_41B2_2052F98E30D0",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "thumbnailUrl": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_t.jpg",
 "label": "D13 Living Room (Second Floor)",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D",
 "overlays": [
  "this.overlay_324F1E81_072D_DB5A_416F_6131B334FAB5",
  "this.popup_3062772C_072D_69AA_4190_69D1B4745596",
  "this.overlay_398F1A43_2AC0_10A6_41BA_D763E268398C",
  "this.overlay_39FF7947_2AC0_10AE_41AA_19DBEB8A340F",
  "this.overlay_398B79D1_2AC0_F3A3_4166_3E2675127666",
  "this.overlay_39E26FD1_2AC0_2FA2_4195_B41024F3127D",
  "this.overlay_4D444972_42F1_BABC_41B7_B162E3042762",
  "this.popup_5251A095_42F1_8A64_41C4_AF20477D0E46"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -60.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 36,
   "panorama": "this.panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C",
   "distance": 1
  },
  {
   "yaw": 46.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -56.7,
   "panorama": "this.panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA",
   "distance": 1
  },
  {
   "yaw": 158.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -160.77,
   "panorama": "this.panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_312DD96B_07FB_59AD_417B_F4DE46006D6E",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_312DD96B_07FB_59AD_417B_F4DE46006D6E.ogg",
  "mp3Url": "media/audio_312DD96B_07FB_59AD_417B_F4DE46006D6E.mp3"
 },
 "data": {
  "label": "Entry1OrGarden"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3D3F3271_07EB_2BBA_4196_5B3D2EAC418C",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3D3F3271_07EB_2BBA_4196_5B3D2EAC418C.ogg",
  "mp3Url": "media/audio_3D3F3271_07EB_2BBA_4196_5B3D2EAC418C.mp3"
 },
 "data": {
  "label": "Balcony"
 }
},
{
 "initialPosition": {
  "yaw": 14.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65278B8A_4571_9E6C_41A7_05D6B4E4A9F3"
},
{
 "thumbnailUrl": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_t.jpg",
 "label": "D10 Bangabandhu Library",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99",
 "overlays": [
  "this.overlay_32D4D1FA_072B_E8AF_4131_7AC881EEBC9C",
  "this.popup_300779A4_072B_795A_4197_BC4503975CDD",
  "this.overlay_398A425A_2AC0_10A6_41A2_1CA1B0446664",
  "this.overlay_39F142BE_2AC0_31E1_41B5_9C5BDDC5DD9F",
  "this.overlay_4D6D2D6D_42D0_9AA7_4198_F998E8D65A0A",
  "this.popup_53D84986_42CF_9A64_41B9_C7BD2C512ECA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -173.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.47,
   "panorama": "this.panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -32.84,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_31466DCA_073B_D8EE_4196_B324C6CD2A88",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_31466DCA_073B_D8EE_4196_B324C6CD2A88_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -5.91,
 "hideEasing": "cubic_out",
 "hfov": 5.89
},
{
 "thumbnailUrl": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_t.jpg",
 "label": "D12 Bangabandhu Room",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA",
 "overlays": [
  "this.overlay_32B45050_072F_27FA_4197_36FF980F7707",
  "this.popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969",
  "this.overlay_39903ED6_2AC0_71AE_41AD_6D0C5B24C520",
  "this.overlay_39841CE7_2AC0_316E_41BC_94C22D920711",
  "this.overlay_39DF46A4_2AC0_11E2_419D_C3A1EF332CC3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -56.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 46.55,
   "panorama": "this.panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D",
   "distance": 1
  },
  {
   "yaw": -165.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 133.72,
   "panorama": "this.panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -179.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6458AB1C_4571_9E64_41CB_890650986381"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -142.85,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5251A095_42F1_8A64_41C4_AF20477D0E46",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5251A095_42F1_8A64_41C4_AF20477D0E46_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 693
   }
  ]
 },
 "pitch": 16.12,
 "hideEasing": "cubic_out",
 "hfov": 4.48
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -93.45,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_4DF674B8_42D0_8BAC_41C6_C3677BD93129",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4DF674B8_42D0_8BAC_41C6_C3677BD93129_0_0.jpg",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 580
   },
   {
    "url": "media/popup_4DF674B8_42D0_8BAC_41C6_C3677BD93129_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 296
   }
  ]
 },
 "pitch": 11.33,
 "hideEasing": "cubic_out",
 "hfov": 4.19
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 62.63,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -14.2,
 "hideEasing": "cubic_out",
 "hfov": 5.74
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3A5C37C2_07E5_68DE_4199_78F8FC5D1447",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3A5C37C2_07E5_68DE_4199_78F8FC5D1447.ogg",
  "mp3Url": "media/audio_3A5C37C2_07E5_68DE_4199_78F8FC5D1447.mp3"
 },
 "data": {
  "label": "SecondFloorEntry"
 }
},
{
 "levels": [
  {
   "url": "media/popup_30FCB183_071B_295E_4196_DE7C1790A0B5_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_30FCB183_071B_295E_4196_DE7C1790A0B5_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_30FCB183_071B_295E_4196_DE7C1790A0B5_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_30FCB183_071B_295E_4196_DE7C1790A0B5_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_30FCB183_071B_295E_4196_DE7C1790A0B5_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_30FCB183_071B_295E_4196_DE7C1790A0B5_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42BC7BFC_071B_F8AA_418C_7E35676C0D8F",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_t.jpg",
 "label": "D04 Pigeon Nest",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF",
 "overlays": [
  "this.overlay_33FC9EBD_0725_38AA_4192_7553BC983E7C",
  "this.popup_31227244_0725_2BDA_4194_3FEF4D8E82D6",
  "this.overlay_399ED471_2AC0_3162_41AF_BD49B1378C5B",
  "this.overlay_39FE4E32_2AC0_30E6_4193_6F18F57B1875"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -71.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.73,
   "panorama": "this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3A97A0D9_071B_E8EA_4195_937621426F3B",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3A97A0D9_071B_E8EA_4195_937621426F3B.ogg",
  "mp3Url": "media/audio_3A97A0D9_071B_E8EA_4195_937621426F3B.mp3"
 },
 "data": {
  "label": "Shak Kamal Bedroom"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -96.9,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_3BB6142C_072B_2FAA_4175_90509DBA00F6",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3BB6142C_072B_2FAA_4175_90509DBA00F6_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -0.64,
 "hideEasing": "cubic_out",
 "hfov": 5.92
},
{
 "levels": [
  {
   "url": "media/popup_31766594_0727_297A_418B_8200551A944A_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_31766594_0727_297A_418B_8200551A944A_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_31766594_0727_297A_418B_8200551A944A_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_31766594_0727_297A_418B_8200551A944A_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_31766594_0727_297A_418B_8200551A944A_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_31766594_0727_297A_418B_8200551A944A_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42B75BF9_071B_F8AD_4199_15EBFC4B29CA",
 "class": "ImageResource"
},
{
 "duration": 500,
 "id": "effect_50CD62AF_43D1_8FA4_4185_B6DC056BF34C",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 52.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BECAA52_4571_9EFC_41B2_F8B1E88C5105"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -88.36,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_30784B64_0725_39DA_4190_7D40EF278DBE",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_30784B64_0725_39DA_4190_7D40EF278DBE_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -6.16,
 "hideEasing": "cubic_out",
 "hfov": 5.89
},
{
 "levels": [
  {
   "url": "media/popup_305B8113_0725_297D_418A_55EAD904C004_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_305B8113_0725_297D_418A_55EAD904C004_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_305B8113_0725_297D_418A_55EAD904C004_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_305B8113_0725_297D_418A_55EAD904C004_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_305B8113_0725_297D_418A_55EAD904C004_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_305B8113_0725_297D_418A_55EAD904C004_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42AD3BF1_071B_F8BD_415E_0471D798351C",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -40.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64143AD9_4571_9FE2_41C6_4024EBE2AA35"
},
{
 "initialPosition": {
  "yaw": 172.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64277A9F_4571_9E63_41C6_34BD77CA83C2"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 84.71,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_12012729_019C_CC94_4171_A44AE9501AC7",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_12012729_019C_CC94_4171_A44AE9501AC7_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -12.11,
 "hideEasing": "cubic_out",
 "hfov": 6.72
},
{
 "thumbnailUrl": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_t.jpg",
 "label": "D00 Garden",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53",
 "overlays": [
  "this.overlay_13D3CB54_0184_C4BC_4178_71BE21913D20",
  "this.popup_12012729_019C_CC94_4171_A44AE9501AC7",
  "this.overlay_38F84899_2AC0_11A2_41AA_135EDA005C44",
  "this.overlay_399B8F15_2AC0_10A2_41A3_D9889797FB40"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -45.29,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.15,
   "panorama": "this.panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 500,
 "id": "effect_3B94E4AE_2F4D_3B8E_41A1_D583580A7C82",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_31AFA113_071D_297D_4196_C786211A6709_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_31AFA113_071D_297D_4196_C786211A6709_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_31AFA113_071D_297D_4196_C786211A6709_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_31AFA113_071D_297D_4196_C786211A6709_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_31AFA113_071D_297D_4196_C786211A6709_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_31AFA113_071D_297D_4196_C786211A6709_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42BD9BFE_071B_F8A6_418F_E2F2B9F9D9FD",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_1294F843_0187_4494_416D_2D60A4D5E626",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_1294F843_0187_4494_416D_2D60A4D5E626.ogg",
  "mp3Url": "media/audio_1294F843_0187_4494_416D_2D60A4D5E626.mp3"
 },
 "data": {
  "label": "Garden"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_camera"
},
{
 "initialPosition": {
  "yaw": -43.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BD10A8D_4571_9E67_41C8_B8D0033F6568"
},
{
 "thumbnailUrl": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_t.jpg",
 "label": "D08 Corridor Passage (3rd Shot)",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7",
 "overlays": [
  "this.overlay_3984E7E3_2AC0_3F67_41C5_1D97CDC2E28D",
  "this.overlay_39957CEA_2AC0_1166_41C0_C5B13F3AB3BF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 139.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 37,
   "panorama": "this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A",
   "distance": 1
  },
  {
   "yaw": -67.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 3.59,
   "panorama": "this.panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_301160F4_072B_E8BA_4171_8F3EE97010B5_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_301160F4_072B_E8BA_4171_8F3EE97010B5_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_301160F4_072B_E8BA_4171_8F3EE97010B5_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_301160F4_072B_E8BA_4171_8F3EE97010B5_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_301160F4_072B_E8BA_4171_8F3EE97010B5_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_301160F4_072B_E8BA_4171_8F3EE97010B5_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42B50BF7_071B_F8A5_4187_65AFD027DE8A",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_t.jpg",
 "label": "D19 Bangabandhu Office",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F75327C7_FC25_3504_41EE_F09E39A83F26",
 "overlays": [
  "this.overlay_335A5553_071B_29FE_4191_CD8D501E34E2",
  "this.popup_30FCB183_071B_295E_4196_DE7C1790A0B5",
  "this.overlay_39954B70_2AC0_1762_41B1_0F9792711D84",
  "this.overlay_398E4A71_2AC0_3162_41C1_BA649CA6C447",
  "this.overlay_39F84F4C_2AC0_70A2_4191_537BAD307E1E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -173.18,
   "class": "AdjacentPanorama",
   "backwardYaw": -8.72,
   "panorama": "this.panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D",
   "distance": 1
  },
  {
   "yaw": -126.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 114.63,
   "panorama": "this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 200,
 "id": "effect_3B7F7CE9_2F4B_2BB5_41BC_226E995E68F3",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_camera"
},
{
 "levels": [
  {
   "url": "media/popup_300779A4_072B_795A_4197_BC4503975CDD_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_300779A4_072B_795A_4197_BC4503975CDD_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_300779A4_072B_795A_4197_BC4503975CDD_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_300779A4_072B_795A_4197_BC4503975CDD_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_300779A4_072B_795A_4197_BC4503975CDD_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_300779A4_072B_795A_4197_BC4503975CDD_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42AECBF2_071B_F8BF_418D_1774AEBD8F86",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_30784B64_0725_39DA_4190_7D40EF278DBE_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_30784B64_0725_39DA_4190_7D40EF278DBE_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_30784B64_0725_39DA_4190_7D40EF278DBE_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_30784B64_0725_39DA_4190_7D40EF278DBE_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_30784B64_0725_39DA_4190_7D40EF278DBE_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_30784B64_0725_39DA_4190_7D40EF278DBE_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42B2CBFB_071B_F8AE_4180_62CA844DA49A",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -26.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64936B4E_4571_9EE4_41AE_B5A2CC8C28A3"
},
{
 "levels": [
  {
   "url": "media/popup_308F42C1_072C_E8DA_4184_306672E0AA85_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_308F42C1_072C_E8DA_4184_306672E0AA85_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_308F42C1_072C_E8DA_4184_306672E0AA85_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_308F42C1_072C_E8DA_4184_306672E0AA85_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_308F42C1_072C_E8DA_4184_306672E0AA85_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_308F42C1_072C_E8DA_4184_306672E0AA85_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42A70BED_071B_F8A5_4180_B733AB1DF5FF",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3F271382_07FD_295F_4185_2CFF40F5BD54",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3F271382_07FD_295F_4185_2CFF40F5BD54.ogg",
  "mp3Url": "media/audio_3F271382_07FD_295F_4185_2CFF40F5BD54.mp3"
 },
 "data": {
  "label": "OutsideStairs"
 }
},
{
 "thumbnailUrl": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_t.jpg",
 "label": "D21 Roof",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE",
 "overlays": [
  "this.overlay_3981F8A3_2AC0_11E6_41B9_6E1CADF74140",
  "this.overlay_398978EA_2AC0_7166_4187_74C9E8C079FC",
  "this.overlay_39E352F5_2AC0_3163_41A1_4CE4246118B3",
  "this.overlay_390BBC06_2AC0_10AE_41BA_1895751B13F4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -124.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 153.32,
   "panorama": "this.panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C",
   "distance": 1
  },
  {
   "yaw": 167.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.39,
   "panorama": "this.panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889",
   "distance": 1
  },
  {
   "yaw": 114.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -126.04,
   "panorama": "this.panorama_F75327C7_FC25_3504_41EE_F09E39A83F26",
   "distance": 1
  },
  {
   "yaw": 136.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -72.37,
   "panorama": "this.panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 112.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_647A9B03_4571_9E63_4182_706687EB1FC1"
},
{
 "levels": [
  {
   "url": "media/popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42A1DBEF_071B_F8A5_4195_C3F560165EE4",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -117,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -10.69,
 "hideEasing": "cubic_out",
 "hfov": 5.82
},
{
 "initialPosition": {
  "yaw": 6.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B62F98B_4571_9A63_41D0_2E24AC9578E1"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -39.12,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_31766594_0727_297A_418B_8200551A944A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_31766594_0727_297A_418B_8200551A944A_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -4.41,
 "hideEasing": "cubic_out",
 "hfov": 5.9
},
{
 "levels": [
  {
   "url": "media/popup_53D84986_42CF_9A64_41B9_C7BD2C512ECA_0_0.jpg",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1062
  },
  {
   "url": "media/popup_53D84986_42CF_9A64_41B9_C7BD2C512ECA_0_1.jpg",
   "width": 964,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_53D84986_42CF_9A64_41B9_C7BD2C512ECA_0_2.jpg",
   "width": 482,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_50C3DF2D_42F0_B6A4_41C7_E5788205C496",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_t.jpg",
 "label": "D16 Sheikh Jamal's Room",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6",
 "overlays": [
  "this.overlay_336BD73F_0727_29A5_418C_1491B363FE2D",
  "this.popup_31766594_0727_297A_418B_8200551A944A",
  "this.overlay_39804AB1_2AC0_11E3_41C5_2E89CF5F6100",
  "this.overlay_39FE66DB_2AC0_31A7_4191_5824DD2C5D9A",
  "this.overlay_398A382D_2AC0_10E2_41AD_FF51E453F87B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 91.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 65.64,
   "panorama": "this.panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229",
   "distance": 1
  },
  {
   "yaw": 37.75,
   "class": "AdjacentPanorama",
   "backwardYaw": -117.17,
   "panorama": "this.panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -144,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B30994B_4571_9AE3_41C5_5A5BEF7E15EE"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -102.68,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_3E6B0004_0725_275A_416E_1860858679B5",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3E6B0004_0725_275A_416E_1860858679B5_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -12.7,
 "hideEasing": "cubic_out",
 "hfov": 5.78
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -27.81,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_3062772C_072D_69AA_4190_69D1B4745596",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3062772C_072D_69AA_4190_69D1B4745596_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -14.45,
 "hideEasing": "cubic_out",
 "hfov": 5.73
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 11.88,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_30FCB183_071B_295E_4196_DE7C1790A0B5",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_30FCB183_071B_295E_4196_DE7C1790A0B5_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -8.42,
 "hideEasing": "cubic_out",
 "hfov": 5.86
},
{
 "duration": 200,
 "id": "effect_2A387D48_30C5_2AF3_41B2_7C5FB4594E59",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "thumbnailUrl": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_t.jpg",
 "label": "D03 Kitchen Outside",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A",
 "overlays": [
  "this.overlay_3486A86C_007D_35B9_4164_9AEAEF3BCAD6",
  "this.overlay_3253C596_0727_2966_4166_1DB81F365344",
  "this.popup_308F42C1_072C_E8DA_4184_306672E0AA85",
  "this.overlay_39832585_2AC0_F3A2_41BF_31592C9B3AA4",
  "this.overlay_3984D54A_2AC0_10A6_419D_3211C09AF27C",
  "this.overlay_39998CFD_2AC0_7163_4181_0820AED612B3",
  "this.overlay_39FF6E00_2AC0_10A2_41C2_B0540DE0F548",
  "this.overlay_39264964_2AC0_1362_41B0_1ED7DA113890"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -9.73,
   "class": "AdjacentPanorama",
   "backwardYaw": -71.25,
   "panorama": "this.panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF",
   "distance": 1
  },
  {
   "yaw": -49.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 117.89,
   "panorama": "this.panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C"
  },
  {
   "yaw": 37,
   "class": "AdjacentPanorama",
   "backwardYaw": 139.5,
   "panorama": "this.panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7",
   "distance": 1
  },
  {
   "yaw": 170.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -12.25,
   "panorama": "this.panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 107.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64C15B72_4571_9EBC_41C8_24CB517E593D"
},
{
 "thumbnailUrl": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_t.jpg",
 "label": "D09 Living Room (Ground Floor)",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A",
 "overlays": [
  "this.overlay_32D2C21A_0725_2B6E_4191_27453C8EA175",
  "this.popup_305B8113_0725_297D_418A_55EAD904C004",
  "this.overlay_399ABA3F_2AC0_30DE_41B8_1E14ABF4238B",
  "this.overlay_39817A26_2AC0_10EE_4183_E62030C40DF1",
  "this.overlay_398C1CE7_2AC0_316E_4195_02C8205CD10E",
  "this.overlay_4DA9238F_42D7_8E63_41B0_6334CBA6C47A",
  "this.overlay_5270446F_42D0_8AA3_41A5_0B6AC8552157",
  "this.popup_4D349B0D_42D1_9E64_41CD_41F9061382E0",
  "this.popup_52D6BBF4_42D0_FDA5_41B9_9D6CD5F673F1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -7.47,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.77,
   "panorama": "this.panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99",
   "distance": 1
  },
  {
   "yaw": -153.17,
   "class": "AdjacentPanorama",
   "backwardYaw": 77.44,
   "panorama": "this.panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 500,
 "id": "effect_57E07D97_43D1_BA64_41BB_58CDB8133D7F",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 62.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BBFEA17_4571_9E64_41B3_23F05EE84E4A"
},
{
 "thumbnailUrl": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_t.jpg",
 "label": "D07 Corridor Passage (2nd Shot)",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD",
 "overlays": [
  "this.overlay_3983F726_2AC0_10EE_41AD_A2D06E194C1D",
  "this.overlay_39941132_2AC0_10E6_4184_95FF5C393F5A",
  "this.overlay_39E6AC14_2AC1_F0A2_41B3_C605B1FB4252"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -177.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.39,
   "panorama": "this.panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF",
   "distance": 1
  },
  {
   "yaw": 3.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.51,
   "panorama": "this.panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7",
   "distance": 1
  },
  {
   "yaw": 77.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -153.17,
   "panorama": "this.panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 200,
 "id": "effect_3B563FD2_2F4D_6596_4143_0C018A281010",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -114.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BA98A01_4571_9E5C_41AC_E616216EF112"
},
{
 "initialPosition": {
  "yaw": 19.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B0C2965_4571_9AA7_41C2_72135FFB2349"
},
{
 "initialPosition": {
  "yaw": 134.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65AFDBF4_4571_9DA5_41C8_862850D5B3D2"
},
{
 "thumbnailUrl": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_t.jpg",
 "label": "D15 Main Stairs",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743",
 "overlays": [
  "this.overlay_3FDAC70B_0724_E96E_4170_8CC5682BF385",
  "this.popup_32C52ED4_0725_38FB_4193_ADCE0F605F80",
  "this.overlay_39AEE83F_2AC0_10DF_41C3_868FC2E6E381",
  "this.overlay_39F9E7F2_2AC0_1F61_41B0_B9B004CDE799",
  "this.overlay_3989ECA6_2AC0_31EE_41AE_EB8E5733A448",
  "this.overlay_39EE7F87_2AC0_6FAE_41AA_683D560F3C67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -117.17,
   "class": "AdjacentPanorama",
   "backwardYaw": 37.75,
   "panorama": "this.panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6",
   "distance": 1
  },
  {
   "yaw": -160.77,
   "class": "AdjacentPanorama",
   "backwardYaw": 158.84,
   "panorama": "this.panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D",
   "distance": 1
  },
  {
   "yaw": -127.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -122.78,
   "panorama": "this.panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -65.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B18097E_4571_9AA5_41C4_FCD877163838"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3D87F6C4_07E5_28DA_418F_FB335914CC6E",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3D87F6C4_07E5_28DA_418F_FB335914CC6E.ogg",
  "mp3Url": "media/audio_3D87F6C4_07E5_28DA_418F_FB335914CC6E.mp3"
 },
 "data": {
  "label": "Downstairs corridor"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -55.45,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_32C52ED4_0725_38FB_4193_ADCE0F605F80",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_32C52ED4_0725_38FB_4193_ADCE0F605F80_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -8.68,
 "hideEasing": "cubic_out",
 "hfov": 5.85
},
{
 "thumbnailUrl": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_254DC6DA_2A40_11A6_4189_9651545C58FC",
  "this.overlay_3A2ADEC7_2A40_11AE_4199_18AF1EFECF05",
  "this.overlay_3A99B6E5_2A40_1162_41B9_BC575B2CB622",
  "this.overlay_3A28182D_2A40_70E2_419A_D401C0C8221B",
  "this.overlay_3A5D5ACF_2A40_11BE_419C_A0F47C620BD1",
  "this.overlay_3B2F8336_2A40_10EE_4187_4739D27CC20E",
  "this.overlay_25E7B4EC_2A40_1162_41AF_4AC6E3CFF25C",
  "this.overlay_3A4B363B_2A40_10E7_41B7_4746947DA835"
 ],
 "label": "AAHome2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -73.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B9C1A40_4571_9EDC_41B4_0BA91D8C1A5A"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_camera"
},
{
 "levels": [
  {
   "url": "media/popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42AA6BF4_071B_F8A4_4115_63E37F8D6BE0",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42A81BF3_071B_F8BD_4195_A730CBC3644F",
 "class": "ImageResource"
},
{
 "duration": 500,
 "id": "effect_57390437_43D3_8AA3_41CA_B4835603A4A8",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3DAFFA79_07E4_DBAA_4172_CEAB68BE2688",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3DAFFA79_07E4_DBAA_4172_CEAB68BE2688.ogg",
  "mp3Url": "media/audio_3DAFFA79_07E4_DBAA_4172_CEAB68BE2688.mp3"
 },
 "data": {
  "label": "Bangabandhu Library"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3D5708F8_07E7_38AA_4191_F310B676FBDC",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3D5708F8_07E7_38AA_4191_F310B676FBDC.ogg",
  "mp3Url": "media/audio_3D5708F8_07E7_38AA_4191_F310B676FBDC.mp3"
 },
 "data": {
  "label": "Downstairs living room"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_camera"
},
{
 "initialPosition": {
  "yaw": -9.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B4C39C7_4571_9DE4_41AF_871CEF4C0438"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3C33AFFB_07FB_D8AE_4175_D65243FD37BC",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3C33AFFB_07FB_D8AE_4175_D65243FD37BC.ogg",
  "mp3Url": "media/audio_3C33AFFB_07FB_D8AE_4175_D65243FD37BC.mp3"
 },
 "data": {
  "label": "Kitchen"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 79.21,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_31AFA113_071D_297D_4196_C786211A6709",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_31AFA113_071D_297D_4196_C786211A6709_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -9.18,
 "hideEasing": "cubic_out",
 "hfov": 5.85
},
{
 "initialPosition": {
  "yaw": 108.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64379AB6_4571_9FA5_41CE_4D8101A9917A"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -58.71,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_300779A4_072B_795A_4197_BC4503975CDD",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_300779A4_072B_795A_4197_BC4503975CDD_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -15.21,
 "hideEasing": "cubic_out",
 "hfov": 5.71
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 44.54,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_301160F4_072B_E8BA_4171_8F3EE97010B5",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_301160F4_072B_E8BA_4171_8F3EE97010B5_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -5.41,
 "hideEasing": "cubic_out",
 "hfov": 5.89
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_camera"
},
{
 "initialPosition": {
  "yaw": -10.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_646ABAF7_4571_9FA3_419F_57F271E5E2D2"
},
{
 "thumbnailUrl": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_t.jpg",
 "label": "D05 Kitchen",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1",
 "overlays": [
  "this.overlay_330BAA13_0725_7B7D_4175_3270A5792A39",
  "this.popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42",
  "this.overlay_39980C5B_2AC0_70A6_41C5_3BF1565162AB",
  "this.overlay_39FE1107_2AC0_10AE_4171_90C5EEBF9204"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 117.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -49.67,
   "panorama": "this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 500,
 "id": "effect_3C78A512_2F4F_3A97_41A0_75E1E3E460BD",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -176.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65586BE8_4571_9DAD_41B3_336B762F3B41"
},
{
 "initialPosition": {
  "yaw": 167.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64646AEA_4571_9FAD_41B7_7243E71F1F76"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 25.93,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_53D84986_42CF_9A64_41B9_C7BD2C512ECA",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_53D84986_42CF_9A64_41B9_C7BD2C512ECA_0_1.jpg",
    "width": 964,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -13.37,
 "hideEasing": "cubic_out",
 "hfov": 6.56
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -50.73,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_4D349B0D_42D1_9E64_41CD_41F9061382E0",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4D349B0D_42D1_9E64_41CD_41F9061382E0_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 725
   }
  ]
 },
 "pitch": 17.22,
 "hideEasing": "cubic_out",
 "hfov": 10.74
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_camera"
},
{
 "initialPosition": {
  "yaw": -66.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BFCCA64_4571_9EA5_41CA_A75F0BA25FF6"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3A30F745_071F_E9E5_418A_69C4527110C0",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3A30F745_071F_E9E5_418A_69C4527110C0.ogg",
  "mp3Url": "media/audio_3A30F745_071F_E9E5_418A_69C4527110C0.mp3"
 },
 "data": {
  "label": "LivingRoom3rdFloor"
 }
},
{
 "initialPosition": {
  "yaw": -46.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_651B9BB9_4571_9DAC_41C6_8A7FB581EEDF"
},
{
 "items": [
  {
   "media": "this.panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_camera"
  },
  {
   "media": "this.panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_camera"
  },
  {
   "media": "this.panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_camera"
  },
  {
   "media": "this.panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_camera"
  },
  {
   "media": "this.panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_camera"
  },
  {
   "media": "this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_camera"
  },
  {
   "media": "this.panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_camera"
  },
  {
   "media": "this.panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 7)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_camera"
  },
  {
   "media": "this.panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 8)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_camera"
  },
  {
   "media": "this.panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_camera"
  },
  {
   "media": "this.panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 10)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_camera"
  },
  {
   "media": "this.panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_camera"
  },
  {
   "media": "this.panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 12)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_camera"
  },
  {
   "media": "this.panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_camera"
  },
  {
   "media": "this.panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_camera"
  },
  {
   "media": "this.panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_camera"
  },
  {
   "media": "this.panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_camera"
  },
  {
   "media": "this.panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_camera"
  },
  {
   "media": "this.panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 18)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_camera"
  },
  {
   "media": "this.panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_camera"
  },
  {
   "media": "this.panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_camera"
  },
  {
   "media": "this.panorama_F75327C7_FC25_3504_41EE_F09E39A83F26",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 21)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_camera"
  },
  {
   "media": "this.panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 22)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_camera"
  },
  {
   "media": "this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE",
   "end": "this.trigger('tourEnded')",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 23)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 101.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_656BEBC5_4571_9DE4_41BC_35B2096B59C4"
},
{
 "levels": [
  {
   "url": "media/popup_32C52ED4_0725_38FB_4193_ADCE0F605F80_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_32C52ED4_0725_38FB_4193_ADCE0F605F80_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_32C52ED4_0725_38FB_4193_ADCE0F605F80_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_32C52ED4_0725_38FB_4193_ADCE0F605F80_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_32C52ED4_0725_38FB_4193_ADCE0F605F80_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_32C52ED4_0725_38FB_4193_ADCE0F605F80_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42B5DBF8_071B_F8AB_4191_9A5FF26A5BCE",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -88.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64D1FB7E_4571_9EA4_4183_FBDFEE30F7B8"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3CA96DC7_07FD_58E6_4172_F3643B3564A2",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3CA96DC7_07FD_58E6_4172_F3643B3564A2.ogg",
  "mp3Url": "media/audio_3CA96DC7_07FD_58E6_4172_F3643B3564A2.mp3"
 },
 "data": {
  "label": "Pigeon Home"
 }
},
{
 "duration": 500,
 "id": "effect_50E2B827_43D0_BAA4_41AA_E3DCA37D2CDF",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 2.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B8E1A29_4571_9EAC_41CD_84528DF46971"
},
{
 "levels": [
  {
   "url": "media/popup_4D349B0D_42D1_9E64_41CD_41F9061382E0_0_0.jpg",
   "width": 3168,
   "class": "ImageResourceLevel",
   "height": 2244
  },
  {
   "url": "media/popup_4D349B0D_42D1_9E64_41CD_41F9061382E0_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1450
  },
  {
   "url": "media/popup_4D349B0D_42D1_9E64_41CD_41F9061382E0_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 725
  },
  {
   "url": "media/popup_4D349B0D_42D1_9E64_41CD_41F9061382E0_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 362
  }
 ],
 "id": "ImageResource_50FFFF2A_42F0_B6AC_4182_B3C86FE15270",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_t.jpg",
 "label": "D14 Sheikh Rehana's Room",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3",
 "overlays": [
  "this.overlay_32A5FFD1_072B_58FD_413F_6F75DBD008EC",
  "this.popup_301160F4_072B_E8BA_4171_8F3EE97010B5",
  "this.overlay_399E38FF_2AC0_115F_41A3_408095B22DA0",
  "this.overlay_39FD06D7_2AC0_11AE_41C5_1728038330B4",
  "this.overlay_3982135A_2AC0_10A6_41A9_B518B6150415"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -168.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 106.34,
   "panorama": "this.panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229",
   "distance": 1
  },
  {
   "yaw": -122.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.85,
   "panorama": "this.panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 55.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BA479EF_4571_9DA4_41BC_47CB27A41E0A"
},
{
 "thumbnailUrl": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_t.jpg",
 "label": "AA home",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223",
 "overlays": [
  "this.overlay_18EB4301_0A4D_650F_41A1_8C9A53BFEB9B",
  "this.overlay_1986A0F3_0A74_A4F3_4185_979799E9BDF0",
  "this.overlay_1F9B89A2_0A7B_6512_419F_5763C064C323",
  "this.overlay_1E13D04C_0A7B_A316_4177_0BD856C75D58",
  "this.overlay_1FA7DC3C_0A75_6375_4172_F510091C8AFA",
  "this.overlay_18BA0164_0A74_E516_418D_6FCDAF393A12",
  "this.overlay_1EA4046D_0A74_E316_419A_3399B146711C",
  "this.overlay_1E3906F0_0A74_EF0D_418E_CF4B8210E071"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_t.jpg",
 "label": "D02 Outside Stairs",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5",
 "overlays": [
  "this.overlay_338698C5_0003_36EB_4159_FE591B84EA28",
  "this.overlay_3D99E001_072B_275A_4184_A9CDAEB91DBC",
  "this.popup_3BB6142C_072B_2FAA_4175_90509DBA00F6",
  "this.overlay_39E76BFB_2AC0_1767_41A6_1EF2A84F9357",
  "this.overlay_39E4EF23_2AC0_F0E6_41B2_A6DD435CCE42"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 103.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.22,
   "panorama": "this.panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524",
   "distance": 1
  },
  {
   "yaw": -12.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 170.15,
   "panorama": "this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "buttonMoveRight": "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
 "buttonPlayRight": "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
 "displayPlaybackBar": true,
 "buttonZoomOut": "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
 "buttonMoveUp": "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonPlayPause": "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "buttonPlayLeft": "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
 "buttonMoveLeft": "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonRestart": "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
 "buttonMoveDown": "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
 "buttonPause": "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonZoomIn": "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
 "buttonCardboardView": "this.IconButton_357D0D25_076B_395A_418B_92F8849024A0",
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "yaw": -143,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65499BDC_4571_9DE5_41CA_8FAFFDF588AB"
},
{
 "levels": [
  {
   "url": "media/popup_5251A095_42F1_8A64_41C4_AF20477D0E46_0_0.jpg",
   "width": 2488,
   "class": "ImageResourceLevel",
   "height": 1684
  },
  {
   "url": "media/popup_5251A095_42F1_8A64_41C4_AF20477D0E46_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1386
  },
  {
   "url": "media/popup_5251A095_42F1_8A64_41C4_AF20477D0E46_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 693
  },
  {
   "url": "media/popup_5251A095_42F1_8A64_41C4_AF20477D0E46_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 346
  }
 ],
 "id": "ImageResource_50C88F31_42F0_B6BC_41C5_2A09C34B92D3",
 "class": "ImageResource"
},
{
 "duration": 500,
 "id": "effect_50AF45E8_43D3_B5AD_41D0_9EFA4791EF74",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_camera"
},
{
 "initialPosition": {
  "yaw": -142.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64AF1B28_4571_9EAC_41CD_9B0EB14CF167"
},
{
 "thumbnailUrl": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_t.jpg",
 "label": "D20 Living Room (Third Floor)",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D",
 "overlays": [
  "this.overlay_301B5872_071D_27BE_4196_ADEAA5FF996B",
  "this.popup_31AFA113_071D_297D_4196_C786211A6709",
  "this.overlay_39998D7F_2AC0_135E_41B5_B055EA7BF81D",
  "this.overlay_3983784B_2AC0_30A6_41C0_025505B9A1C1",
  "this.overlay_398FC9D0_2AC0_13A1_41A9_E7F5BCCD1B35",
  "this.overlay_39E01FF2_2AC0_EF66_41C3_6DECF32A5049"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -78.73,
   "class": "AdjacentPanorama",
   "backwardYaw": 113.54,
   "panorama": "this.panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889",
   "distance": 1
  },
  {
   "yaw": -8.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.18,
   "panorama": "this.panorama_F75327C7_FC25_3504_41EE_F09E39A83F26",
   "distance": 1
  },
  {
   "yaw": -72.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 136.23,
   "panorama": "this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -62.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64059AC8_4571_9FED_41C8_3A957DBEF512"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 131.21,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_308F42C1_072C_E8DA_4184_306672E0AA85",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_308F42C1_072C_E8DA_4184_306672E0AA85_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -11.44,
 "hideEasing": "cubic_out",
 "hfov": 5.8
},
{
 "initialPosition": {
  "yaw": 119.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B51A9DD_4571_9DE4_41B8_369AA1C17C30"
},
{
 "duration": 500,
 "id": "effect_3B581781_2F45_6675_41B4_3A606EBF08ED",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_camera"
},
{
 "initialPosition": {
  "yaw": -148.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64E34B5A_4571_9EEC_41D0_8E720086DB8E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_camera"
},
{
 "duration": 500,
 "id": "effect_50BC5BBF_43D0_BDA3_41C0_6CA65E934B7E",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 57.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_648D5B42_4571_9EDC_41C4_3E23ACEE5AB5"
},
{
 "initialPosition": {
  "yaw": 170.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6505BBA2_4571_9E5C_41C2_B39542B1E369"
},
{
 "thumbnailUrl": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_t.jpg",
 "label": "D18 Sheikh Kamal's Room",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889",
 "overlays": [
  "this.overlay_3C58A894_0725_277A_4198_485BE4CC8686",
  "this.popup_30784B64_0725_39DA_4190_7D40EF278DBE",
  "this.overlay_39ADA2A2_2AC0_31E6_41C4_A5AD0487B2E6",
  "this.overlay_39F6EA65_2AC0_1162_419C_CA858096EAF6",
  "this.overlay_398BA842_2AC7_F0A6_41B1_B92A7040A383"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 113.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -78.73,
   "panorama": "this.panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D",
   "distance": 1
  },
  {
   "yaw": 31.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.64,
   "panorama": "this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_t.jpg",
 "label": "D17 Second Floor Entry",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C",
 "overlays": [
  "this.overlay_3033174C_0727_29EA_4171_F2929502DD52",
  "this.popup_3E6B0004_0725_275A_416E_1860858679B5",
  "this.overlay_399C9BD5_2AC0_17A2_41A4_7FB6E42A7705",
  "this.overlay_39EF42E3_2AC0_3167_41AF_37722FF617A8",
  "this.overlay_3985969C_2AC0_11A2_41B4_3D95D283EBE1",
  "this.overlay_39D6EED5_2AC0_71A2_41B9_9DCA87FB56D4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7"
  },
  {
   "yaw": 36,
   "class": "AdjacentPanorama",
   "backwardYaw": -60.22,
   "panorama": "this.panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D",
   "distance": 1
  },
  {
   "yaw": 153.32,
   "class": "AdjacentPanorama",
   "backwardYaw": -124.79,
   "panorama": "this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3E11AEF0_07FF_38BA_4181_614C5F429616",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3E11AEF0_07FF_38BA_4181_614C5F429616.ogg",
  "mp3Url": "media/audio_3E11AEF0_07FF_38BA_4181_614C5F429616.mp3"
 },
 "data": {
  "label": "KitchenOutside"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 50.32,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_305B8113_0725_297D_418A_55EAD904C004",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_305B8113_0725_297D_418A_55EAD904C004_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -8.68,
 "hideEasing": "cubic_out",
 "hfov": 5.85
},
{
 "levels": [
  {
   "url": "media/popup_3062772C_072D_69AA_4190_69D1B4745596_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_3062772C_072D_69AA_4190_69D1B4745596_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_3062772C_072D_69AA_4190_69D1B4745596_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_3062772C_072D_69AA_4190_69D1B4745596_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_3062772C_072D_69AA_4190_69D1B4745596_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_3062772C_072D_69AA_4190_69D1B4745596_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42ABDBF6_071B_F8A7_418F_6345F4172026",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 53.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64F13B66_4571_9EA4_41C0_757682EF3F65"
},
{
 "thumbnailUrl": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_t.jpg",
 "label": "D11 Balcony",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229",
 "overlays": [
  "this.overlay_33C59482_072D_6F5F_4174_29D45CA5D60C",
  "this.popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA",
  "this.overlay_3997604E_2AC0_10A1_41C4_10A4706B8182",
  "this.overlay_39FC79E5_2AC0_1362_41B4_DABA86A54B99",
  "this.overlay_39FAA35A_2AC0_10A6_41B5_D1BBA5526F0E",
  "this.overlay_39CBB7EC_2AC3_FF61_41AD_65FBA8E7A896"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 65.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.55,
   "panorama": "this.panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6",
   "distance": 1
  },
  {
   "yaw": 133.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.48,
   "panorama": "this.panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA",
   "distance": 1
  },
  {
   "yaw": 106.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.25,
   "panorama": "this.panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 26.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6448AB10_4571_9E7C_41C9_65BDBD1FD33B"
},
{
 "initialPosition": {
  "yaw": 171.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B153971_4571_9ABF_41C0_2B082F039A85"
},
{
 "levels": [
  {
   "url": "media/popup_31466DCA_073B_D8EE_4196_B324C6CD2A88_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_31466DCA_073B_D8EE_4196_B324C6CD2A88_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_31466DCA_073B_D8EE_4196_B324C6CD2A88_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_31466DCA_073B_D8EE_4196_B324C6CD2A88_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_31466DCA_073B_D8EE_4196_B324C6CD2A88_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_31466DCA_073B_D8EE_4196_B324C6CD2A88_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_42A28BF0_071B_F8BB_417E_DE88714361EE",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3C240EB1_07ED_58BA_418D_E13594D1B0D7",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3C240EB1_07ED_58BA_418D_E13594D1B0D7.ogg",
  "mp3Url": "media/audio_3C240EB1_07ED_58BA_418D_E13594D1B0D7.mp3"
 },
 "data": {
  "label": "BangabandhuRoom"
 }
},
{
 "initialPosition": {
  "yaw": -21.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_64BD2B35_4571_9EA4_41BF_7311317C8993"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 155.58,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_52D6BBF4_42D0_FDA5_41B9_9D6CD5F673F1",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_52D6BBF4_42D0_FDA5_41B9_9D6CD5F673F1_0_0.jpg",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 898
   },
   {
    "url": "media/popup_52D6BBF4_42D0_FDA5_41B9_9D6CD5F673F1_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 459
   }
  ]
 },
 "pitch": 19.05,
 "hideEasing": "cubic_out",
 "hfov": 10.63
},
{
 "duration": 500,
 "id": "effect_57A25247_43D0_8EE3_418E_71E6D29A6C99",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3DE6D17B_07E7_29AE_4162_5C5E448A97FD",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3DE6D17B_07E7_29AE_4162_5C5E448A97FD.ogg",
  "mp3Url": "media/audio_3DE6D17B_07E7_29AE_4162_5C5E448A97FD.mp3"
 },
 "data": {
  "label": "Main Staris"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_3AF84ED4_071D_78FA_4188_AB81F9EE5459",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3AF84ED4_071D_78FA_4188_AB81F9EE5459.ogg",
  "mp3Url": "media/audio_3AF84ED4_071D_78FA_4188_AB81F9EE5459.mp3"
 },
 "data": {
  "label": "BangabandhuOffice"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "progressBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 1,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "progressBorderColor": "#AAAAAA",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 20,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_5645B517_5EBA_61DA_41CE_5170204AEC9E",
 "backgroundOpacity": 0,
 "width": 360,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "overflow": "hidden",
 "children": [
  "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
  "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
  "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
  "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
  "this.Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
  "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
  "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
  "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
  "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": "96.479%",
 "minWidth": 360,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container31983"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "right",
 "maxHeight": 42,
 "maxWidth": 42,
 "id": "IconButton_357D0D25_076B_395A_418B_92F8849024A0",
 "backgroundOpacity": 0,
 "width": 42,
 "right": "0.48%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "1.64%",
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_357D0D25_076B_395A_418B_92F8849024A0.png",
 "data": {
  "name": "VRButton"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 630,
 "maxWidth": 630,
 "id": "IconButton_39824157_2AC0_30AF_41C3_6B2880903F5A",
 "backgroundOpacity": 0,
 "width": 63.05,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "1.05%",
 "height": 61,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.IconButton_39824157_2AC0_30AF_41C3_6B2880903F5A, false, 0, this.effect_2A483601_30C5_E672_41C0_EACB27B59047, 'hideEffect', false); this.setComponentVisibility(this.Container_2214E3B4_2FC5_5D93_41B3_6239A6584030, false, 0, this.effect_2A483601_30C5_E672_41C0_EACB27B59047, 'hideEffect', false); this.setComponentVisibility(this.Container_11469FA3_0003_6AAF_4124_EC189393BE88, false, 0, this.effect_2A483601_30C5_E672_41C0_EACB27B59047, 'hideEffect', false); this.setComponentVisibility(this.Container_3ECB2A75_2FDB_2E92_41B7_858A5D2A0637, false, 0, this.effect_2A483601_30C5_E672_41C0_EACB27B59047, 'hideEffect', false); this.setComponentVisibility(this.Container_3CCA3458_2FDB_FA92_41B1_D0F9F29108A2, false, 0, this.effect_2A483601_30C5_E672_41C0_EACB27B59047, 'hideEffect', false)",
 "iconURL": "skin/IconButton_39824157_2AC0_30AF_41C3_6B2880903F5A.png",
 "data": {
  "name": "HomeButton"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2214E3B4_2FC5_5D93_41B3_6239A6584030",
 "backgroundOpacity": 0,
 "width": 293,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "right": "4.46%",
 "children": [
  "this.IconButton_21AA3EE6_2FCB_E7BE_41C6_DFF3D2DD4C27",
  "this.IconButton_21C6D8F6_2FCD_2B9F_41C0_BFFDBD7A8D3C",
  "this.IconButton_22C65B58_2FCD_2E92_41C3_609E2BC7A60C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "2.19%",
 "scrollBarWidth": 10,
 "height": 47,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "DhanmondiButtonContainer"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_11469FA3_0003_6AAF_4124_EC189393BE88",
 "backgroundOpacity": 0.3,
 "width": 360,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "right": "1.57%",
 "children": [
  "this.Image_3CE7EF40_2FDD_E6F2_41AD_B22D0C0DFE81",
  "this.IconButton_136509EC_0003_56BA_4120_04AE34C508B0",
  "this.IconButton_107113F3_001F_DAAF_4113_2793BB1D8D80",
  "this.IconButton_5147E099_4350_8A6C_41B8_9AD6B08BF4A7",
  "this.IconButton_1070E563_001D_3FAF_40FD_088DD57FDAA0",
  "this.IconButton_512C4D82_4357_7A5C_41C6_F73534F678E0",
  "this.IconButton_10847BAA_001F_EABE_4123_17EB07554AA0",
  "this.IconButton_52F69E8B_4350_966C_41C3_9E5C1DE3CB29",
  "this.IconButton_1073E2CB_001F_FAFF_4122_C6088C6931DC",
  "this.IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5",
  "this.IconButton_119A84FB_001F_DE9F_4117_9536EB318048",
  "this.IconButton_526E1031_4370_8ABF_4196_E621EC233F54",
  "this.IconButton_10ADEC8B_001F_ED7F_4103_625B1E974A30",
  "this.IconButton_526D2211_4370_8E7C_41C0_5362708C3586",
  "this.IconButton_1087CB9A_001F_2A9E_4104_E5240D306B00",
  "this.IconButton_526D23D2_4370_8DFC_41A1_95F16EA8FFDA",
  "this.IconButton_109246F9_001E_FA9A_4113_9B85ED785998",
  "this.IconButton_526D0561_4370_8ADF_41CB_9ED681A1A12F",
  "this.IconButton_10C472C1_0003_3AEB_412E_CE5F5B1B7198",
  "this.IconButton_526D2701_4370_965F_41B3_05BF46761C18",
  "this.IconButton_10BBF142_001F_57EE_4112_98AC936646B0",
  "this.IconButton_526D2871_4370_9ABF_419B_CC7D921B7F39",
  "this.IconButton_107016C2_001F_7AEE_4124_BB37FAFAA178",
  "this.IconButton_526C79E0_4370_9DDD_41CD_FF3AAB808A74"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 10,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "8.64%",
 "height": 200,
 "minWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Dhanmondi1stFloorMenu"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3ECB2A75_2FDB_2E92_41B7_858A5D2A0637",
 "backgroundOpacity": 0.3,
 "width": 360,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "right": "1.57%",
 "children": [
  "this.Image_3CA2A494_2FC7_3B93_41B4_8DB175FB6437",
  "this.IconButton_3C3D2DC2_2F5C_E5F6_41BE_58258F8AF755",
  "this.IconButton_1071FF22_001F_6BAE_40D1_EB1BE8C1F700",
  "this.IconButton_50250BCF_433F_FDE4_41B0_971E43A3AAF7",
  "this.IconButton_1070756B_001F_5FBE_412B_6F1E4FF448D4",
  "this.IconButton_507BAC5A_4331_9AED_41AC_5378DF23B06F",
  "this.IconButton_108EC52A_001F_3FB9_412C_076EDEA2A8B0",
  "this.IconButton_51225E42_4331_96DC_41B3_A77B681B5F8F",
  "this.IconButton_10718322_001E_DBA9_4114_0B018FBFE9A0",
  "this.IconButton_51225FF3_4331_95BC_41A3_2D45529447F7",
  "this.IconButton_10A1F8AA_001E_D6B9_4121_9D9895245890",
  "this.IconButton_5122416B_4331_8AAC_41D0_9AA8BB0E89D8",
  "this.IconButton_10846F12_001F_6B6E_411D_1E493DACC8C0",
  "this.IconButton_512222EB_4331_8FAC_41B7_A38170A2EBE2",
  "this.IconButton_10700D1B_001E_EF9F_4121_FCC22FBA556C",
  "this.IconButton_5122345B_4331_8AEC_4191_9CFEEC8C3042"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "8.64%",
 "height": 200,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Dhanmondi2ndFloorMenu"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3CCA3458_2FDB_FA92_41B1_D0F9F29108A2",
 "backgroundOpacity": 0.3,
 "width": 360,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "right": "1.57%",
 "children": [
  "this.Image_3CEE4156_2FC7_DA9E_4196_6C10E383FF15",
  "this.IconButton_3C1F65A5_2F5D_25B9_41C0_9928BE41BE1C",
  "this.IconButton_108608EA_001E_D6B9_4129_DA26B302B778",
  "this.IconButton_50E91946_4333_7AE4_41A1_ECCC19F6E618",
  "this.IconButton_10708E82_001D_2D69_412B_DF58578AEBA0",
  "this.IconButton_5025042C_4330_8AA4_41B9_E2C0CDE39043",
  "this.IconButton_11A9A924_0003_57A9_40D0_6201A6958C00",
  "this.IconButton_51CC464A_4330_96ED_418F_C3A94B0364BD",
  "this.IconButton_11A89B1E_001D_2B96_4128_D2E1D2343AB8",
  "this.IconButton_51CDD853_4330_9AE3_41C0_76A4CD3EAEA6"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "8.64%",
 "height": 200,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Dhanmondi3rdFloorMenu"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "UIComponent",
 "top": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent86014"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "class": "ZoomImage",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage86015"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "CloseButton",
 "top": 10,
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "data": {
  "name": "CloseButton86016"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": -32.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_31466DCA_073B_D8EE_4196_B324C6CD2A88, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42A28BF0_071B_F8BB_417E_DE88714361EE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42FA8BD8_071B_F8EB_4190_129501D9833E",
   "pitch": -5.91,
   "hfov": 5.89,
   "yaw": -32.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_336118E7_073B_58A5_415E_E775A90278C2",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 44.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3D87F6C4_07E5_28DA_418F_FB335914CC6E).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3D87F6C4_07E5_28DA_418F_FB335914CC6E); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3D87F6C4_07E5_28DA_418F_FB335914CC6E); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -7.42,
   "yaw": 44.79,
   "distance": 50
  }
 ],
 "id": "overlay_39F92087_2AC0_11AF_419F_2E7B3D0EC5CB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": 169.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD, this.camera_5B8E1A29_4571_9EAC_41CD_84528DF46971); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.IconButton_526D0561_4370_8ADF_41CB_9ED681A1A12F, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Corridor Passage 2"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": 0.21,
   "yaw": 169.39,
   "distance": 50
  }
 ],
 "id": "overlay_39802E00_2AC0_30A2_41C4_D1F8563C947E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": 50.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_32CB674B_0725_29EE_4188_0C7A15945E19, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42A5EBEB_071B_F8AD_4154_79A2FECD3BF2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42FEFBD5_071B_F8E5_4198_DDA722C9BB9B",
   "pitch": -3.9,
   "hfov": 5.91,
   "yaw": 50.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_307CEA05_0725_DB5A_4186_A038628C73AB",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": 0.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_6_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53, this.camera_65AFDBF4_4571_9DA5_41C8_862850D5B3D2); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.IconButton_5147E099_4350_8A6C_41B8_9AD6B08BF4A7, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Garden"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_6_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -4.14,
   "yaw": 0.15,
   "distance": 50
  }
 ],
 "id": "overlay_39B5B457_2AC0_10AF_41C0_D6055D49A454",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.84,
   "yaw": 171.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_7_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5, this.camera_65BFCC00_4571_9A5D_41BD_E3FCC70E8D10); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.IconButton_52F69E8B_4350_966C_41C3_9E5C1DE3CB29, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Outside Stairs"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_7_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -9.67,
   "yaw": 171.22,
   "distance": 50
  }
 ],
 "id": "overlay_3853EB90_2AC0_77A2_419E_CE72A240F8D6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": 84.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_312DD96B_07FB_59AD_417B_F4DE46006D6E).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_312DD96B_07FB_59AD_417B_F4DE46006D6E); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_312DD96B_07FB_59AD_417B_F4DE46006D6E); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_8_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -3.65,
   "yaw": 84.48,
   "distance": 50
  }
 ],
 "id": "overlay_399D60FF_2AC0_115E_41BC_B02C0245064B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.19,
   "yaw": -93.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_4DF674B8_42D0_8BAC_41C6_C3677BD93129, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_9_0.png",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ]
   },
   "pitch": 11.33,
   "yaw": -93.45,
   "distance": 50
  }
 ],
 "id": "overlay_4CAC676C_42D0_96A5_41D0_96446EF2D21C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.73,
   "yaw": -27.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3062772C_072D_69AA_4190_69D1B4745596, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42ABDBF6_071B_F8A7_418F_6345F4172026, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42C0CBDB_071B_F8ED_4198_D4B3C2D6709C",
   "pitch": -14.45,
   "hfov": 5.73,
   "yaw": -27.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_324F1E81_072D_DB5A_416F_6131B334FAB5",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.76,
   "yaw": 25.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3DC55160_07EB_29DA_4198_26C4BFFD25D4).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3DC55160_07EB_29DA_4198_26C4BFFD25D4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3DC55160_07EB_29DA_4198_26C4BFFD25D4); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_6_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -13.2,
   "yaw": 25.19,
   "distance": 50
  }
 ],
 "id": "overlay_398F1A43_2AC0_10A6_41BA_D763E268398C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.67,
   "yaw": 46.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_7_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA, this.camera_5B3A8958_4571_9AED_41CD_D63BCA4A9A1B); this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.IconButton_507BAC5A_4331_9AED_41AC_5378DF23B06F, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bangabandhu Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_7_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -16.88,
   "yaw": 46.55,
   "distance": 50
  }
 ],
 "id": "overlay_39FF7947_2AC0_10AE_41AA_19DBEB8A340F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.75,
   "yaw": -60.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_8_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C, this.camera_5B30994B_4571_9AE3_41C5_5A5BEF7E15EE); this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.IconButton_5122345B_4331_8AEC_4191_9CFEEC8C3042, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Second Floor Entry"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_8_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -13.61,
   "yaw": -60.22,
   "distance": 50
  }
 ],
 "id": "overlay_398B79D1_2AC0_F3A3_4166_3E2675127666",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.78,
   "yaw": 158.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_9_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743, this.camera_5B0C2965_4571_9AA7_41C2_72135FFB2349); this.mainPlayList.set('selectedIndex', 17); this.setComponentVisibility(this.IconButton_5122416B_4331_8AAC_41D0_9AA8BB0E89D8, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Main Stairs"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_9_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -12.61,
   "yaw": 158.84,
   "distance": 50
  }
 ],
 "id": "overlay_39E26FD1_2AC0_2FA2_4195_B41024F3127D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.48,
   "yaw": -142.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5251A095_42F1_8A64_41C4_AF20477D0E46, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_50C88F31_42F0_B6BC_41C5_2A09C34B92D3, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_10_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ]
   },
   "pitch": 16.12,
   "yaw": -142.85,
   "distance": 50
  }
 ],
 "id": "overlay_4D444972_42F1_BABC_41B7_B162E3042762",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -58.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_300779A4_072B_795A_4197_BC4503975CDD, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42AECBF2_071B_F8BF_418D_1774AEBD8F86, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42C51BD9_071B_F8ED_4192_E5C62061F3FC",
   "pitch": -15.21,
   "hfov": 5.71,
   "yaw": -58.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32D4D1FA_072B_E8AF_4131_7AC881EEBC9C",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.8,
   "yaw": 125.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3DAFFA79_07E4_DBAA_4172_CEAB68BE2688).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3DAFFA79_07E4_DBAA_4172_CEAB68BE2688); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3DAFFA79_07E4_DBAA_4172_CEAB68BE2688); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -11.44,
   "yaw": 125.18,
   "distance": 50
  }
 ],
 "id": "overlay_398A425A_2AC0_10A6_41A2_1CA1B0446664",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.5,
   "yaw": -173.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A, this.camera_64277A9F_4571_9E63_41C6_34BD77CA83C2); this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.IconButton_526D2871_4370_9ABF_419B_CC7D921B7F39, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room (Ground Floor)"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -21.65,
   "yaw": -173.77,
   "distance": 50
  }
 ],
 "id": "overlay_39F142BE_2AC0_31E1_41B5_9C5BDDC5DD9F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.51,
   "yaw": 25.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -13.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_53D84986_42CF_9A64_41B9_C7BD2C512ECA, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_50C3DF2D_42F0_B6A4_41C7_E5788205C496, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0_HS_6_0.png",
      "width": 113,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ]
   },
   "pitch": -13.37,
   "yaw": 25.93,
   "distance": 50
  }
 ],
 "id": "overlay_4D6D2D6D_42D0_9AA7_4198_F998E8D65A0A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.74,
   "yaw": 62.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_30C33DE1_072F_38DD_418D_9AA0CB2F8969, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42AA6BF4_071B_F8A4_4115_63E37F8D6BE0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42C7FBDA_071B_F8EF_4153_B8B63D32BEC4",
   "pitch": -14.2,
   "hfov": 5.74,
   "yaw": 62.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32B45050_072F_27FA_4197_36FF980F7707",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.79,
   "yaw": 0.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3C240EB1_07ED_58BA_418D_E13594D1B0D7).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3C240EB1_07ED_58BA_418D_E13594D1B0D7); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3C240EB1_07ED_58BA_418D_E13594D1B0D7); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -12.19,
   "yaw": 0.32,
   "distance": 50
  }
 ],
 "id": "overlay_39903ED6_2AC0_71AE_41AD_6D0C5B24C520",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.74,
   "yaw": -56.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D, this.camera_65143BAE_4571_9DA4_41CD_E4BB0BAF4673); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.IconButton_51225E42_4331_96DC_41B3_A77B681B5F8F, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room (Second Floor)"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -14.36,
   "yaw": -56.7,
   "distance": 50
  }
 ],
 "id": "overlay_39841CE7_2AC0_316E_41BC_94C22D920711",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.79,
   "yaw": -165.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229, this.camera_651B9BB9_4571_9DAC_41C6_8A7FB581EEDF); this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.IconButton_50250BCF_433F_FDE4_41B0_971E43A3AAF7, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Balcony"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0_HS_6_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -11.85,
   "yaw": -165.48,
   "distance": 50
  }
 ],
 "id": "overlay_39DF46A4_2AC0_11E2_419D_C3A1EF332CC3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": 27.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_31227244_0725_2BDA_4194_3FEF4D8E82D6, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42A0EBEE_071B_F8A7_4152_9F5324F17C5E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42F9CBD7_071B_F8E5_417F_AF2611485C97",
   "pitch": -0.39,
   "hfov": 5.92,
   "yaw": 27.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33FC9EBD_0725_38AA_4192_7553BC983E7C",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": 98.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3CA96DC7_07FD_58E6_4172_F3643B3564A2).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3CA96DC7_07FD_58E6_4172_F3643B3564A2); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3CA96DC7_07FD_58E6_4172_F3643B3564A2); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -0.64,
   "yaw": 98.05,
   "distance": 50
  }
 ],
 "id": "overlay_399ED471_2AC0_3162_41AF_BD49B1378C5B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": -71.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A, this.camera_6505BBA2_4571_9E5C_41C2_B39542B1E369); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen Outside"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -2.69,
   "yaw": -71.25,
   "distance": 50
  }
 ],
 "id": "overlay_39FE4E32_2AC0_30E6_4193_6F18F57B1875",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.72,
   "yaw": 84.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_12012729_019C_CC94_4171_A44AE9501AC7, {'pressedBackgroundOpacity':0.27,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.27,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.27,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_17E0AB12_019F_44B4_416F_4C7CBCF2A694, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42FD1BD4_071B_F8E4_4181_E39EB0A9E1C5",
   "pitch": -12.11,
   "hfov": 6.72,
   "yaw": 84.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_13D3CB54_0184_C4BC_4178_71BE21913D20",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": -45.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524, this.camera_6458AB1C_4571_9E64_41CB_890650986381); this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.IconButton_512C4D82_4357_7A5C_41C6_F73534F678E0, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Entry1"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0_HS_4_0.png",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": -5.95,
   "yaw": -45.29,
   "distance": 50
  }
 ],
 "id": "overlay_38F84899_2AC0_11A2_41AA_135EDA005C44",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.76,
   "yaw": 40.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_1294F843_0187_4494_416D_2D60A4D5E626).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1294F843_0187_4494_416D_2D60A4D5E626); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1294F843_0187_4494_416D_2D60A4D5E626); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0_HS_5_0.png",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ]
   },
   "pitch": -10.26,
   "yaw": 40.49,
   "distance": 50
  }
 ],
 "id": "overlay_399B8F15_2AC0_10A2_41A3_D9889797FB40",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.72,
   "yaw": -67.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD, this.camera_65586BE8_4571_9DAD_41B3_336B762F3B41); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.IconButton_526D0561_4370_8ADF_41CB_9ED681A1A12F, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Corridor Passage 2"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0_HS_2_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -14.87,
   "yaw": -67.51,
   "distance": 50
  }
 ],
 "id": "overlay_3984E7E3_2AC0_3F67_41C5_1D97CDC2E28D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.76,
   "yaw": 139.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A, this.camera_65499BDC_4571_9DE5_41CA_8FAFFDF588AB); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen Outside"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -13.36,
   "yaw": 139.5,
   "distance": 50
  }
 ],
 "id": "overlay_39957CEA_2AC0_1166_41C0_C5B13F3AB3BF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.86,
   "yaw": 11.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_30FCB183_071B_295E_4196_DE7C1790A0B5, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42BC7BFC_071B_F8AA_418C_7E35676C0D8F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42CE8BDE_071B_F8E7_4175_9024518EC4A8",
   "pitch": -8.42,
   "hfov": 5.86,
   "yaw": 11.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_335A5553_071B_29FE_4191_CD8D501E34E2",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.88,
   "yaw": 104.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3AF84ED4_071D_78FA_4188_AB81F9EE5459).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3AF84ED4_071D_78FA_4188_AB81F9EE5459); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3AF84ED4_071D_78FA_4188_AB81F9EE5459); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -6.67,
   "yaw": 104.58,
   "distance": 50
  }
 ],
 "id": "overlay_39954B70_2AC0_1762_41B1_0F9792711D84",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.79,
   "yaw": -126.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE, this.camera_5B18097E_4571_9AA5_41C4_FCD877163838); this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.IconButton_51CDD853_4330_9AE3_41C0_76A4CD3EAEA6, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Roof"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -12.1,
   "yaw": -126.04,
   "distance": 50
  }
 ],
 "id": "overlay_398E4A71_2AC0_3162_41C1_BA649CA6C447",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.81,
   "yaw": -173.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D, this.camera_5B153971_4571_9ABF_41C0_2B082F039A85); this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.IconButton_51CC464A_4330_96ED_418F_C3A94B0364BD, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room (Third Floor)"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0_HS_6_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -11.31,
   "yaw": -173.18,
   "distance": 50
  }
 ],
 "id": "overlay_39F84F4C_2AC0_70A2_4191_537BAD307E1E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": 114.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F75327C7_FC25_3504_41EE_F09E39A83F26, this.camera_64F13B66_4571_9EA4_41C0_757682EF3F65); this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.IconButton_5025042C_4330_8AA4_41B9_E2C0CDE39043, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bangabandhu Office"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0_HS_4_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -2.81,
   "yaw": 114.63,
   "distance": 50
  }
 ],
 "id": "overlay_3981F8A3_2AC0_11E6_41B9_6E1CADF74140",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.9,
   "yaw": 136.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0_HS_5_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D, this.camera_64C15B72_4571_9EBC_41C8_24CB517E593D); this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.IconButton_51CC464A_4330_96ED_418F_C3A94B0364BD, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room (Third Floor)"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0_HS_5_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -4.57,
   "yaw": 136.23,
   "distance": 50
  }
 ],
 "id": "overlay_398978EA_2AC0_7166_4187_74C9E8C079FC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.88,
   "yaw": 167.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0_HS_6_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889, this.camera_64E34B5A_4571_9EEC_41D0_8E720086DB8E); this.mainPlayList.set('selectedIndex', 20); this.setComponentVisibility(this.IconButton_50E91946_4333_7AE4_41A1_ECCC19F6E618, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Sheikh Kamal's Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0_HS_6_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -6.83,
   "yaw": 167.64,
   "distance": 50
  }
 ],
 "id": "overlay_39E352F5_2AC0_3163_41A1_4CE4246118B3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.88,
   "yaw": -124.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0_HS_7_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C, this.camera_64936B4E_4571_9EE4_41AE_B5A2CC8C28A3); this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.IconButton_5122345B_4331_8AEC_4191_9CFEEC8C3042, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Second Floor Entry"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE_0_HS_7_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -6.58,
   "yaw": -124.79,
   "distance": 50
  }
 ],
 "id": "overlay_390BBC06_2AC0_10AE_41BA_1895751B13F4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.9,
   "yaw": -39.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_31766594_0727_297A_418B_8200551A944A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42B75BF9_071B_F8AD_4199_15EBFC4B29CA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42C3ABDD_071B_F8E5_4198_AE1222A4D863",
   "pitch": -4.41,
   "hfov": 5.9,
   "yaw": -39.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_336BD73F_0727_29A5_418C_1491B363FE2D",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.9,
   "yaw": -17.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3D025AA4_07E5_3B5B_414B_16CBCEC0EA1C).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3D025AA4_07E5_3B5B_414B_16CBCEC0EA1C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3D025AA4_07E5_3B5B_414B_16CBCEC0EA1C); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -4.41,
   "yaw": -17.01,
   "distance": 50
  }
 ],
 "id": "overlay_39804AB1_2AC0_11E3_41C5_2E89CF5F6100",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.79,
   "yaw": 37.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743, this.camera_5BBFEA17_4571_9E64_41B3_23F05EE84E4A); this.mainPlayList.set('selectedIndex', 17); this.setComponentVisibility(this.IconButton_5122416B_4331_8AAC_41D0_9AA8BB0E89D8, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Main Stairs"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -11.85,
   "yaw": 37.75,
   "distance": 50
  }
 ],
 "id": "overlay_39FE66DB_2AC0_31A7_4191_5824DD2C5D9A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.79,
   "yaw": 91.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229, this.camera_5BA98A01_4571_9E5C_41AC_E616216EF112); this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.IconButton_50250BCF_433F_FDE4_41B0_971E43A3AAF7, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Balcony"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0_HS_6_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -11.85,
   "yaw": 91.55,
   "distance": 50
  }
 ],
 "id": "overlay_398A382D_2AC0_10E2_41AD_FF51E453F87B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.86,
   "yaw": 170.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5, this.camera_64646AEA_4571_9FAD_41B7_7243E71F1F76); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.IconButton_52F69E8B_4350_966C_41C3_9E5C1DE3CB29, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Outside Stairs"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -8.08,
   "yaw": 170.15,
   "distance": 50
  }
 ],
 "id": "overlay_3486A86C_007D_35B9_4164_9AEAEF3BCAD6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.8,
   "yaw": 131.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_308F42C1_072C_E8DA_4184_306672E0AA85, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42A70BED_071B_F8A5_4180_B733AB1DF5FF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42F97BD6_071B_F8E7_4179_63682691F038",
   "pitch": -11.44,
   "hfov": 5.8,
   "yaw": 131.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3253C596_0727_2966_4166_1DB81F365344",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.8,
   "yaw": 98.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3E11AEF0_07FF_38BA_4181_614C5F429616).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3E11AEF0_07FF_38BA_4181_614C5F429616); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3E11AEF0_07FF_38BA_4181_614C5F429616); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }; this.setComponentVisibility(this.IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_7_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -11.44,
   "yaw": 98.05,
   "distance": 50
  }
 ],
 "id": "overlay_39832585_2AC0_F3A2_41BF_31592C9B3AA4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.81,
   "yaw": -49.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_8_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1, this.camera_64059AC8_4571_9FED_41C8_3A957DBEF512); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.IconButton_526E1031_4370_8ABF_4196_E621EC233F54, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_8_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -11.35,
   "yaw": -49.67,
   "distance": 50
  }
 ],
 "id": "overlay_3984D54A_2AC0_10A6_419D_3211C09AF27C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": -9.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_9_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF, this.camera_64379AB6_4571_9FA5_41CE_4D8101A9917A); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.IconButton_526D2211_4370_8E7C_41C0_5362708C3586, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pigeon Nest"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_9_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -6.07,
   "yaw": -9.73,
   "distance": 50
  }
 ],
 "id": "overlay_39998CFD_2AC0_7163_4181_0820AED612B3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.8,
   "yaw": 37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_10_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7, this.camera_64143AD9_4571_9FE2_41C6_4024EBE2AA35); this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.IconButton_526D2701_4370_965F_41B3_05BF46761C18, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Corridor Passage 3"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_10_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -11.6,
   "yaw": 37,
   "distance": 50
  }
 ],
 "id": "overlay_39FF6E00_2AC0_10A2_41C2_B0540DE0F548",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.78,
   "yaw": 59.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_11_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.IconButton_5122345B_4331_8AEC_4191_9CFEEC8C3042, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Second Floor Entry"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_11_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -12.35,
   "yaw": 59.36,
   "distance": 50
  }
 ],
 "id": "overlay_39264964_2AC0_1362_41B0_1ED7DA113890",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.85,
   "yaw": 50.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_305B8113_0725_297D_418A_55EAD904C004, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42AD3BF1_071B_F8BD_415E_0471D798351C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42C48BD9_071B_F8ED_4176_061CE750689F",
   "pitch": -8.68,
   "hfov": 5.85,
   "yaw": 50.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32D2C21A_0725_2B6E_4191_27453C8EA175",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.86,
   "yaw": 139.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3D5708F8_07E7_38AA_4191_F310B676FBDC).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3D5708F8_07E7_38AA_4191_F310B676FBDC); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3D5708F8_07E7_38AA_4191_F310B676FBDC); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_7_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -8.42,
   "yaw": 139.75,
   "distance": 50
  }
 ],
 "id": "overlay_399ABA3F_2AC0_30DE_41B8_1E14ABF4238B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.8,
   "yaw": -7.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_8_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99, this.camera_5B62F98B_4571_9A63_41D0_2E24AC9578E1); this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.IconButton_526C79E0_4370_9DDD_41CD_FF3AAB808A74, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bangabandhu Library"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_8_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -11.6,
   "yaw": -7.47,
   "distance": 50
  }
 ],
 "id": "overlay_39817A26_2AC0_10EE_4183_E62030C40DF1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.77,
   "yaw": -153.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_9_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD, this.camera_5B7559A2_4571_9A5C_41C4_DB5D76A4740C); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.IconButton_526D0561_4370_8ADF_41CB_9ED681A1A12F, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Corridor Passage 2"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_9_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -12.86,
   "yaw": -153.17,
   "distance": 50
  }
 ],
 "id": "overlay_398C1CE7_2AC0_316E_4195_02C8205CD10E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.74,
   "yaw": -50.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_10_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_4D349B0D_42D1_9E64_41CD_41F9061382E0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_50FFFF2A_42F0_B6AC_4182_B3C86FE15270, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_10_0.png",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 154
     }
    ]
   },
   "pitch": 17.22,
   "yaw": -50.73,
   "distance": 50
  }
 ],
 "id": "overlay_4DA9238F_42D7_8E63_41B0_6334CBA6C47A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.63,
   "yaw": 155.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_11_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_52D6BBF4_42D0_FDA5_41B9_9D6CD5F673F1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_11_0.png",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 154
     }
    ]
   },
   "pitch": 19.05,
   "yaw": 155.58,
   "distance": 50
  }
 ],
 "id": "overlay_5270446F_42D0_8AA3_41A5_0B6AC8552157",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.77,
   "yaw": 77.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A, this.camera_6448AB10_4571_9E7C_41C9_65BDBD1FD33B); this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.IconButton_526D2871_4370_9ABF_419B_CC7D921B7F39, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room (Ground Floor)"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -12.86,
   "yaw": 77.44,
   "distance": 50
  }
 ],
 "id": "overlay_3983F726_2AC0_10EE_41AD_A2D06E194C1D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 3.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A3BE3A_FC25_370F_41C7_0FB475724FE7, this.camera_647A9B03_4571_9E63_4182_706687EB1FC1); this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.IconButton_526D2701_4370_965F_41B3_05BF46761C18, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Corridor Passage 3"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -7.58,
   "yaw": 3.59,
   "distance": 50
  }
 ],
 "id": "overlay_39941132_2AC0_10E6_4184_95FF5C393F5A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": -177.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF, this.camera_646ABAF7_4571_9FA3_419F_57F271E5E2D2); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.IconButton_526D23D2_4370_8DFC_41A1_95F16EA8FFDA, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Corridor Passage"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753536D_FC25_2D05_41D1_FBE6887ED1DD_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -3.27,
   "yaw": -177.48,
   "distance": 50
  }
 ],
 "id": "overlay_39E6AC14_2AC1_F0A2_41B3_C605B1FB4252",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.85,
   "yaw": -55.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_32C52ED4_0725_38FB_4193_ADCE0F605F80, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42B5DBF8_071B_F8AB_4191_9A5FF26A5BCE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42C2BBDC_071B_F8EB_418B_E703575A3EBE",
   "pitch": -8.68,
   "hfov": 5.85,
   "yaw": -55.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3FDAC70B_0724_E96E_4170_8CC5682BF385",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.86,
   "yaw": 67.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3DE6D17B_07E7_29AE_4162_5C5E448A97FD).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3DE6D17B_07E7_29AE_4162_5C5E448A97FD); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3DE6D17B_07E7_29AE_4162_5C5E448A97FD); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -8.17,
   "yaw": 67.4,
   "distance": 50
  }
 ],
 "id": "overlay_39AEE83F_2AC0_10DF_41C3_868FC2E6E381",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.84,
   "yaw": -127.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3, this.camera_648D5B42_4571_9EDC_41C4_3E23ACEE5AB5); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.IconButton_51225FF3_4331_95BC_41A3_2D45529447F7, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Sheikh Rehana's Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_6_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -9.26,
   "yaw": -127.85,
   "distance": 50
  }
 ],
 "id": "overlay_39F9E7F2_2AC0_1F61_41B0_B9B004CDE799",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.82,
   "yaw": -160.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_7_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D, this.camera_64BD2B35_4571_9EA4_41BF_7311317C8993); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.IconButton_51225E42_4331_96DC_41B3_A77B681B5F8F, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room (Second Floor)"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_7_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -10.85,
   "yaw": -160.77,
   "distance": 50
  }
 ],
 "id": "overlay_3989ECA6_2AC0_31EE_41AE_EB8E5733A448",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.83,
   "yaw": -117.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_8_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6, this.camera_64AF1B28_4571_9EAC_41CD_9B0EB14CF167); this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.IconButton_512222EB_4331_8FAC_41B7_A38170A2EBE2, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Sheikh Jamal's Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_8_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -10,
   "yaw": -117.17,
   "distance": 50
  }
 ],
 "id": "overlay_39EE7F87_2AC0_6FAE_41AA_683D560F3C67",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.75,
   "yaw": -4.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_0_0.png",
      "width": 734,
      "class": "ImageResourceLevel",
      "height": 429
     }
    ]
   },
   "pitch": 19.38,
   "yaw": -4.01,
   "distance": 50
  }
 ],
 "id": "overlay_254DC6DA_2A40_11A6_4189_9651545C58FC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.72,
   "yaw": 31.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.IconButton_39824157_2AC0_30AF_41C3_6B2880903F5A, true, 0, this.effect_58227198_4577_8A6D_41BC_21FD15C6780A, 'showEffect', false); this.setComponentVisibility(this.Container_2214E3B4_2FC5_5D93_41B3_6239A6584030, true, 0, this.effect_58227198_4577_8A6D_41BC_21FD15C6780A, 'showEffect', false); this.setComponentVisibility(this.IconButton_5147E099_4350_8A6C_41B8_9AD6B08BF4A7, true, 0, this.effect_58227198_4577_8A6D_41BC_21FD15C6780A, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_4_0.png",
      "width": 734,
      "class": "ImageResourceLevel",
      "height": 429
     }
    ]
   },
   "pitch": 19.63,
   "yaw": 31.42,
   "distance": 50
  }
 ],
 "id": "overlay_3A2ADEC7_2A40_11AE_4199_18AF1EFECF05",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.83,
   "yaw": -4.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_5_0.png",
      "width": 734,
      "class": "ImageResourceLevel",
      "height": 429
     }
    ]
   },
   "pitch": -3.98,
   "yaw": -4.26,
   "distance": 50
  }
 ],
 "id": "overlay_3A99B6E5_2A40_1162_41B9_BC575B2CB622",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.83,
   "yaw": 30.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_6_0.png",
      "width": 734,
      "class": "ImageResourceLevel",
      "height": 429
     }
    ]
   },
   "pitch": -3.98,
   "yaw": 30.66,
   "distance": 50
  }
 ],
 "id": "overlay_3A28182D_2A40_70E2_419A_D401C0C8221B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "hfov": 15.2,
   "yaw": -3.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_7_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_7_0.png",
      "width": 572,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": 11.38,
   "hfov": 15.2,
   "yaw": -3.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3A5D5ACF_2A40_11BE_419C_A0F47C620BD1",
 "data": {
  "label": "\u09ac\u0999\u09cd\u0997\u09ac\u09a8\u09cd\u09a7\u09c1 \u09ae\u09be\u099c\u09be\u09b0"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "hfov": 15.15,
   "yaw": -4.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_8_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_8_0.png",
      "width": 572,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": -12.14,
   "hfov": 15.15,
   "yaw": -4.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3B2F8336_2A40_10EE_4187_4739D27CC20E",
 "data": {
  "label": "\u09ac\u0999\u09cd\u0997\u09ac\u09a8\u09cd\u09a7\u09c1 \u09ae\u09be\u099c\u09be\u09b0"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "hfov": 20.36,
   "yaw": 30.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_9_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_9_0.png",
      "width": 769,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ]
   },
   "pitch": -11.89,
   "hfov": 20.36,
   "yaw": 30.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_25E7B4EC_2A40_1162_41AF_4AC6E3CFF25C",
 "data": {
  "label": "\u09b8\u09cb\u09b9\u09b0\u09be\u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a6\u09c0 \u0989\u09a6\u09cd\u09af\u09be\u09a8"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "hfov": 14.79,
   "yaw": 31.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_10_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_271FFAA6_2A40_F1E1_41AF_B8A8A658B8ED_0_HS_10_0.png",
      "width": 557,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": 11.38,
   "hfov": 14.79,
   "yaw": 31.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3A4B363B_2A40_10E7_41B7_4746947DA835",
 "data": {
  "label": "\u09ac\u0999\u09cd\u0997\u09ac\u09a8\u09cd\u09a7\u09c1 \u09af\u09be\u09a6\u09c1\u0998\u09b0"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.79,
   "yaw": -56.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_310ADA7C_0724_FBAA_4188_6ED8EE9D2E42, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42A1DBEF_071B_F8A5_4195_C3F560165EE4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_3B19FF0E_0725_F966_4198_F7455846FC6C",
   "pitch": -11.94,
   "hfov": 5.79,
   "yaw": -56.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_330BAA13_0725_7B7D_4175_3270A5792A39",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.77,
   "yaw": 59.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3C33AFFB_07FB_D8AE_4175_D65243FD37BC).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3C33AFFB_07FB_D8AE_4175_D65243FD37BC); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3C33AFFB_07FB_D8AE_4175_D65243FD37BC); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -12.95,
   "yaw": 59.11,
   "distance": 50
  }
 ],
 "id": "overlay_39980C5B_2AC0_70A6_41C5_3BF1565162AB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.64,
   "yaw": 117.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A, this.camera_5B28493F_4571_9AA3_41C9_2898AD325EB4); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen Outside"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -17.63,
   "yaw": 117.89,
   "distance": 50
  }
 ],
 "id": "overlay_39FE1107_2AC0_10AE_4171_90C5EEBF9204",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": 44.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_301160F4_072B_E8BA_4171_8F3EE97010B5, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42B50BF7_071B_F8A5_4187_65AFD027DE8A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_3B257F13_0725_F97E_4184_3CF6F4C520A4",
   "pitch": -5.41,
   "hfov": 5.89,
   "yaw": 44.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32A5FFD1_072B_58FD_413F_6F75DBD008EC",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.9,
   "yaw": 141.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_38ACCBC9_07E5_58EA_417F_8E46D2F885E1).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_38ACCBC9_07E5_58EA_417F_8E46D2F885E1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_38ACCBC9_07E5_58EA_417F_8E46D2F885E1); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -4.66,
   "yaw": 141.26,
   "distance": 50
  }
 ],
 "id": "overlay_399E38FF_2AC0_115F_41A3_408095B22DA0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.67,
   "yaw": -122.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743, this.camera_5BECAA52_4571_9EFC_41B2_F8B1E88C5105); this.mainPlayList.set('selectedIndex', 17); this.setComponentVisibility(this.IconButton_5122416B_4331_8AAC_41D0_9AA8BB0E89D8, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Main Stairs"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -16.63,
   "yaw": -122.78,
   "distance": 50
  }
 ],
 "id": "overlay_39FD06D7_2AC0_11AE_41C5_1728038330B4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.73,
   "yaw": -168.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229, this.camera_5B9C1A40_4571_9EDC_41B4_0BA91D8C1A5A); this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.IconButton_50250BCF_433F_FDE4_41B0_971E43A3AAF7, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Balcony"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.73,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0_HS_6_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -14.62,
   "yaw": -168.25,
   "distance": 50
  }
 ],
 "id": "overlay_3982135A_2AC0_10A6_41A9_B518B6150415",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.25,
   "yaw": -32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 18.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_0_0.png",
      "width": 522,
      "class": "ImageResourceLevel",
      "height": 307
     }
    ]
   },
   "pitch": 18.22,
   "yaw": -32,
   "distance": 50
  }
 ],
 "id": "overlay_18EB4301_0A4D_650F_41A1_8C9A53BFEB9B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.14,
   "yaw": 4.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_4_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 18.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_11469FA3_0003_6AAF_4124_EC189393BE88, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_136509EC_0003_56BA_4120_04AE34C508B0, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.14,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_4_0.png",
      "width": 496,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": 18.12,
   "yaw": 4.71,
   "distance": 50
  }
 ],
 "id": "overlay_1986A0F3_0A74_A4F3_4185_979799E9BDF0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.94,
   "yaw": -32.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_5_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_5_0.png",
      "width": 515,
      "class": "ImageResourceLevel",
      "height": 345
     }
    ]
   },
   "pitch": -7.83,
   "yaw": -32.45,
   "distance": 50
  }
 ],
 "id": "overlay_1F9B89A2_0A7B_6512_419F_5763C064C323",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.29,
   "yaw": 5.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_6_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_6_0.png",
      "width": 458,
      "class": "ImageResourceLevel",
      "height": 312
     }
    ]
   },
   "pitch": -7.84,
   "yaw": 5.54,
   "distance": 50
  }
 ],
 "id": "overlay_1E13D04C_0A7B_A316_4177_0BD856C75D58",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "hfov": 24.8,
   "yaw": -34.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0_HS_7_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 8.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Hello"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0_HS_7_0.png",
      "width": 535,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ]
   },
   "pitch": 8.77,
   "hfov": 24.8,
   "yaw": -34.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FA7DC3C_0A75_6375_4172_F510091C8AFA",
 "data": {
  "label": "         \u09ac\u0999\u09cd\u0997\u09ac\u09a8\u09cd\u09a7\u09c1 \u09ae\u09be\u099c\u09be\u09b0"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "hfov": 24.84,
   "yaw": 4.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0_HS_8_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Hello"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0_HS_8_0.png",
      "width": 535,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ]
   },
   "pitch": 8.46,
   "hfov": 24.84,
   "yaw": 4.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_18BA0164_0A74_E516_418D_6FCDAF393A12",
 "data": {
  "label": "        \u09ac\u0999\u09cd\u0997\u09ac\u09a8\u09cd\u09a7\u09c1 \u09af\u09be\u09a6\u09c1\u0998\u09b0"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "hfov": 23.8,
   "yaw": -33.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_9_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Hello"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_1_HS_9_0.png",
      "width": 535,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ]
   },
   "pitch": -18.59,
   "hfov": 23.8,
   "yaw": -33.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1EA4046D_0A74_E316_419A_3399B146711C",
 "data": {
  "label": "        \u09ac\u0999\u09cd\u0997\u09ac\u09a8\u09cd\u09a7\u09c1 \u09ae\u09be\u099c\u09be\u09b0"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "hfov": 23.86,
   "yaw": 5.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0_HS_10_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -18.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Hello"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07FAA27D_0A4F_A7F6_418A_8A77256E6223_0_HS_10_0.png",
      "width": 535,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ]
   },
   "pitch": -18.09,
   "hfov": 23.86,
   "yaw": 5.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1E3906F0_0A74_EF0D_418E_CF4B8210E071",
 "data": {
  "label": "     \u09b8\u09cb\u09b9\u09b0\u09be\u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a6\u09c0 \u0989\u09a6\u09cd\u09af\u09be\u09a8"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": 103.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0_HS_1_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524, this.camera_5B7849B4_4571_9DA4_4188_81A41C9A9269); this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.IconButton_512C4D82_4357_7A5C_41C6_F73534F678E0, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Entry1"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0_HS_1_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -2.27,
   "yaw": 103.3,
   "distance": 50
  }
 ],
 "id": "overlay_338698C5_0003_36EB_4159_FE591B84EA28",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": -96.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3BB6142C_072B_2FAA_4175_90509DBA00F6, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42A69BEC_071B_F8AB_4175_FEB7BF97FFC4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42FF3BD5_071B_F8E5_4175_0245506A39D3",
   "pitch": -0.64,
   "hfov": 5.92,
   "yaw": -96.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3D99E001_072B_275A_4184_A9CDAEB91DBC",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": -58.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3F271382_07FD_295F_4185_2CFF40F5BD54).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3F271382_07FD_295F_4185_2CFF40F5BD54); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3F271382_07FD_295F_4185_2CFF40F5BD54); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -0.13,
   "yaw": -58.97,
   "distance": 50
  }
 ],
 "id": "overlay_39E76BFB_2AC0_1767_41A6_1EF2A84F9357",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": -12.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A, this.camera_5B4C39C7_4571_9DE4_41AF_871CEF4C0438); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen Outside"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -2.02,
   "yaw": -12.25,
   "distance": 50
  }
 ],
 "id": "overlay_39E4EF23_2AC0_F0E6_41B2_A6DD435CCE42",
 "data": {
  "label": "Image"
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_pressed.png",
 "data": {
  "name": "Button31992"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_pressed.png",
 "data": {
  "name": "Button31993"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_pressed.png",
 "data": {
  "name": "Button31984"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_pressed.png",
 "data": {
  "name": "Button31989"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5_pressed.png",
 "data": {
  "name": "Button31994"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_pressed.png",
 "data": {
  "name": "Button31986"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_pressed.png",
 "data": {
  "name": "Button31987"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_pressed.png",
 "data": {
  "name": "Button31985"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_pressed.png",
 "data": {
  "name": "Button31991"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2_pressed.png",
 "data": {
  "name": "Button31990"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA.png",
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_pressed.png",
 "data": {
  "name": "Button31995"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.85,
   "yaw": 79.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_31AFA113_071D_297D_4196_C786211A6709, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42BD9BFE_071B_F8A6_418F_E2F2B9F9D9FD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42C87BDF_071B_F8E5_4164_FBE72782EF5A",
   "pitch": -9.18,
   "hfov": 5.85,
   "yaw": 79.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_301B5872_071D_27BE_4196_ADEAA5FF996B",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.83,
   "yaw": 155.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3A30F745_071F_E9E5_418A_69C4527110C0).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3A30F745_071F_E9E5_418A_69C4527110C0); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3A30F745_071F_E9E5_418A_69C4527110C0); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -10.18,
   "yaw": 155.58,
   "distance": 50
  }
 ],
 "id": "overlay_39998D7F_2AC0_135E_41B5_B055EA7BF81D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.83,
   "yaw": -8.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F75327C7_FC25_3504_41EE_F09E39A83F26, this.camera_5BC2CA7B_4571_9EA3_4185_44E39C5AAEA8); this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.IconButton_5025042C_4330_8AA4_41B9_E2C0CDE39043, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bangabandhu Office"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_6_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -10.09,
   "yaw": -8.72,
   "distance": 50
  }
 ],
 "id": "overlay_3983784B_2AC0_30A6_41C0_025505B9A1C1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.84,
   "yaw": -72.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_7_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE, this.camera_5BD10A8D_4571_9E67_41C8_B8D0033F6568); this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.IconButton_51CDD853_4330_9AE3_41C0_76A4CD3EAEA6, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Roof"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_7_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -9.28,
   "yaw": -72.37,
   "distance": 50
  }
 ],
 "id": "overlay_398FC9D0_2AC0_13A1_41A9_E7F5BCCD1B35",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.83,
   "yaw": -78.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_8_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889, this.camera_5BFCCA64_4571_9EA5_41CA_A75F0BA25FF6); this.mainPlayList.set('selectedIndex', 20); this.setComponentVisibility(this.IconButton_50E91946_4333_7AE4_41A1_ECCC19F6E618, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Sheikh Kamal's Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_8_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -10.17,
   "yaw": -78.73,
   "distance": 50
  }
 ],
 "id": "overlay_39E01FF2_2AC0_EF66_41C3_6DECF32A5049",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": -88.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_30784B64_0725_39DA_4190_7D40EF278DBE, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42B2CBFB_071B_F8AE_4180_62CA844DA49A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42CD8BDE_071B_F8E7_4182_A7A2B3B79485",
   "pitch": -6.16,
   "hfov": 5.89,
   "yaw": -88.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3C58A894_0725_277A_4198_485BE4CC8686",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": -27.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3A97A0D9_071B_E8EA_4195_937621426F3B).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3A97A0D9_071B_E8EA_4195_937621426F3B); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3A97A0D9_071B_E8EA_4195_937621426F3B); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 0.87,
   "yaw": -27.31,
   "distance": 50
  }
 ],
 "id": "overlay_39ADA2A2_2AC0_31E6_41C4_A5AD0487B2E6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.88,
   "yaw": 31.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE, this.camera_657BEBD1_4571_9DFC_41C1_5D62485D883A); this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.IconButton_51CDD853_4330_9AE3_41C0_76A4CD3EAEA6, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Roof"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -7.07,
   "yaw": 31.39,
   "distance": 50
  }
 ],
 "id": "overlay_39F6EA65_2AC0_1162_419C_CA858096EAF6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 113.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D, this.camera_656BEBC5_4571_9DE4_41BC_35B2096B59C4); this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.IconButton_51CC464A_4330_96ED_418F_C3A94B0364BD, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room (Third Floor)"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0_HS_6_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -7.32,
   "yaw": 113.54,
   "distance": 50
  }
 ],
 "id": "overlay_398BA842_2AC7_F0A6_41B1_B92A7040A383",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.78,
   "yaw": -102.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3E6B0004_0725_275A_416E_1860858679B5, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42B16BFA_071B_F8AF_4181_109AC1162676, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42CD6BDD_071B_F8E5_418F_1B0D9C0DDFC6",
   "pitch": -12.7,
   "hfov": 5.78,
   "yaw": -102.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3033174C_0727_29EA_4171_F2929502DD52",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.77,
   "yaw": -43.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3A5C37C2_07E5_68DE_4199_78F8FC5D1447).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3A5C37C2_07E5_68DE_4199_78F8FC5D1447); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3A5C37C2_07E5_68DE_4199_78F8FC5D1447); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -12.95,
   "yaw": -43.14,
   "distance": 50
  }
 ],
 "id": "overlay_399C9BD5_2AC0_17A2_41A4_7FB6E42A7705",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.69,
   "yaw": 36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D, this.camera_5B51A9DD_4571_9DE4_41B8_369AA1C17C30); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.IconButton_51225E42_4331_96DC_41B3_A77B681B5F8F, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room (Second Floor)"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_6_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -16.12,
   "yaw": 36,
   "distance": 50
  }
 ],
 "id": "overlay_39EF42E3_2AC0_3167_41AF_37722FF617A8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.7,
   "yaw": 146.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_7_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.IconButton_526D2701_4370_965F_41B3_05BF46761C18, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Corridor Passage 3"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_7_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -15.68,
   "yaw": 146.82,
   "distance": 50
  }
 ],
 "id": "overlay_3985969C_2AC0_11A2_41B4_3D95D283EBE1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.72,
   "yaw": 153.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_8_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7ACFD6F_FC25_1504_41EB_CD3417B0D3FE, this.camera_5BA479EF_4571_9DA4_41BC_47CB27A41E0A); this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.IconButton_51CDD853_4330_9AE3_41C0_76A4CD3EAEA6, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Roof"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_8_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -15.12,
   "yaw": 153.32,
   "distance": 50
  }
 ],
 "id": "overlay_39D6EED5_2AC0_71A2_41B9_9DCA87FB56D4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.82,
   "yaw": -117,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_32C37EA4_072D_DB5A_4191_0EEB4BBB2ABA, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_42A81BF3_071B_F8BD_4195_A730CBC3644F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_42C6DBDA_071B_F8EF_4187_4DEDA6FDF478",
   "pitch": -10.69,
   "hfov": 5.82,
   "yaw": -117,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33C59482_072D_6F5F_4174_29D45CA5D60C",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 23.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_3D3F3271_07EB_2BBA_4196_5B3D2EAC418C).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3D3F3271_07EB_2BBA_4196_5B3D2EAC418C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3D3F3271_07EB_2BBA_4196_5B3D2EAC418C); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -7.17,
   "yaw": 23.69,
   "distance": 50
  }
 ],
 "id": "overlay_3997604E_2AC0_10A1_41C4_10A4706B8182",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 65.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6, this.camera_64D1FB7E_4571_9EA4_4183_FBDFEE30F7B8); this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.IconButton_512222EB_4331_8FAC_41B7_A38170A2EBE2, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Sheikh Jamal's Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_6_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -7.33,
   "yaw": 65.64,
   "distance": 50
  }
 ],
 "id": "overlay_39FC79E5_2AC0_1362_41B4_DABA86A54B99",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": 106.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_7_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3, this.camera_6537DB96_4571_9E64_41C0_AEC9FC0C5ABC); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.IconButton_51225FF3_4331_95BC_41A3_2D45529447F7, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Sheikh Rehana's Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_7_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -6.07,
   "yaw": 106.34,
   "distance": 50
  }
 ],
 "id": "overlay_39FAA35A_2AC0_10A6_41B5_D1BBA5526F0E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": 133.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_8_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA, this.camera_65278B8A_4571_9E6C_41A7_05D6B4E4A9F3); this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.IconButton_507BAC5A_4331_9AED_41AC_5378DF23B06F, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bangabandhu Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_8_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -5.57,
   "yaw": 133.72,
   "distance": 50
  }
 ],
 "id": "overlay_39CBB7EC_2AC3_FF61_41AD_65FBA8E7A896",
 "data": {
  "label": "Image"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "overflow": "hidden",
 "children": [
  "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
  "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
  "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "minWidth": 20,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container31988"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "center",
 "maxHeight": 110,
 "maxWidth": 292,
 "id": "IconButton_21AA3EE6_2FCB_E7BE_41C6_DFF3D2DD4C27",
 "backgroundOpacity": 0,
 "width": 89,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "0%",
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_11469FA3_0003_6AAF_4124_EC189393BE88, true, 0, this.effect_3BD2447A_2F4C_FA96_41B0_282C9E4F87A4, 'showEffect', false); this.setComponentVisibility(this.Container_3ECB2A75_2FDB_2E92_41B7_858A5D2A0637, false, 0, this.effect_3B563FD2_2F4D_6596_4143_0C018A281010, 'hideEffect', false); this.setComponentVisibility(this.Container_3CCA3458_2FDB_FA92_41B1_D0F9F29108A2, false, 0, this.effect_3B563FD2_2F4D_6596_4143_0C018A281010, 'hideEffect', false)",
 "iconURL": "skin/IconButton_21AA3EE6_2FCB_E7BE_41C6_DFF3D2DD4C27.JPG",
 "data": {
  "name": "Dhanmondi1stFloorButton"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 110,
 "maxWidth": 292,
 "id": "IconButton_21C6D8F6_2FCD_2B9F_41C0_BFFDBD7A8D3C",
 "backgroundOpacity": 0,
 "width": 89,
 "right": "34.47%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "0%",
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_3ECB2A75_2FDB_2E92_41B7_858A5D2A0637, true, 0, this.effect_3B387D0A_2F4B_2A76_41BE_328980041886, 'showEffect', false); this.setComponentVisibility(this.Container_11469FA3_0003_6AAF_4124_EC189393BE88, false, 0, this.effect_3B7F7CE9_2F4B_2BB5_41BC_226E995E68F3, 'hideEffect', false); this.setComponentVisibility(this.Container_3CCA3458_2FDB_FA92_41B1_D0F9F29108A2, false, 0, this.effect_3B7F7CE9_2F4B_2BB5_41BC_226E995E68F3, 'hideEffect', false)",
 "iconURL": "skin/IconButton_21C6D8F6_2FCD_2B9F_41C0_BFFDBD7A8D3C.JPG",
 "data": {
  "name": "Dhanmondi2ndFloorButton"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 110,
 "maxWidth": 292,
 "id": "IconButton_22C65B58_2FCD_2E92_41C3_609E2BC7A60C",
 "left": "0.68%",
 "width": 89,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "0%",
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_3CCA3458_2FDB_FA92_41B1_D0F9F29108A2, true, 0, this.effect_3B581781_2F45_6675_41B4_3A606EBF08ED, 'showEffect', false); this.setComponentVisibility(this.Container_11469FA3_0003_6AAF_4124_EC189393BE88, false, 0, this.effect_3B57411A_2F45_FA96_41B2_2052F98E30D0, 'hideEffect', false); this.setComponentVisibility(this.Container_3ECB2A75_2FDB_2E92_41B7_858A5D2A0637, false, 0, this.effect_3B57411A_2F45_FA96_41B2_2052F98E30D0, 'hideEffect', false)",
 "iconURL": "skin/IconButton_22C65B58_2FCD_2E92_41C3_609E2BC7A60C.JPG",
 "data": {
  "name": "Dhanmondi3rdFloorButton"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 1048,
 "maxWidth": 1048,
 "id": "Image_3CE7EF40_2FDD_E6F2_41AD_B22D0C0DFE81",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_3CE7EF40_2FDD_E6F2_41AD_B22D0C0DFE81.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image5051"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 512,
 "maxWidth": 488,
 "id": "IconButton_136509EC_0003_56BA_4120_04AE34C508B0",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "right": "2.42%",
 "width": "8.611%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "3.4%",
 "toolTip": "Cancel",
 "toolTipShadowVerticalLength": 0,
 "height": "17.5%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.setComponentVisibility(this.Container_11469FA3_0003_6AAF_4124_EC189393BE88, false, 0, this.effect_2A387D48_30C5_2AF3_41B2_7C5FB4594E59, 'hideEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_136509EC_0003_56BA_4120_04AE34C508B0.png",
 "data": {
  "name": "Cancel1stFloorButton"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_107113F3_001F_DAAF_4113_2793BB1D8D80",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "right": "18.33%",
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Garden",
 "toolTipShadowVerticalLength": 0,
 "bottom": "9%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.IconButton_5147E099_4350_8A6C_41B8_9AD6B08BF4A7, true, 0, this.effect_50AF45E8_43D3_B5AD_41D0_9EFA4791EF74, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_107113F3_001F_DAAF_4113_2793BB1D8D80.png",
 "data": {
  "name": "Garden"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_5147E099_4350_8A6C_41B8_9AD6B08BF4A7",
 "backgroundOpacity": 0,
 "width": 38,
 "right": "14.72%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "9.5%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5147E099_4350_8A6C_41B8_9AD6B08BF4A7.png",
 "data": {
  "name": "GardenTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_1070E563_001D_3FAF_40FD_088DD57FDAA0",
 "left": "34.71%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Entry01",
 "toolTipShadowVerticalLength": 0,
 "bottom": "26.5%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.IconButton_512C4D82_4357_7A5C_41C6_F73534F678E0, true, 0, this.effect_57E07D97_43D1_BA64_41BB_58CDB8133D7F, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_1070E563_001D_3FAF_40FD_088DD57FDAA0.png",
 "data": {
  "name": "Entry"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_512C4D82_4357_7A5C_41C6_F73534F678E0",
 "left": "34.44%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "25%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_512C4D82_4357_7A5C_41C6_F73534F678E0.png",
 "data": {
  "name": "EntryTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10847BAA_001F_EABE_4123_17EB07554AA0",
 "left": "1.39%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "18.5%",
 "toolTip": "Outside Stairs",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.IconButton_52F69E8B_4350_966C_41C3_9E5C1DE3CB29, true, 0, this.effect_50E2B827_43D0_BAA4_41AA_E3DCA37D2CDF, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10847BAA_001F_EABE_4123_17EB07554AA0.png",
 "data": {
  "name": "OutsideStairs"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_52F69E8B_4350_966C_41C3_9E5C1DE3CB29",
 "left": "1.67%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "13%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_52F69E8B_4350_966C_41C3_9E5C1DE3CB29.png",
 "data": {
  "name": "OutsideStairsTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_1073E2CB_001F_FAFF_4122_C6088C6931DC",
 "left": "17.49%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "5%",
 "toolTip": "Kitchen Outside",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5, true, 0, this.effect_50CD62AF_43D1_8FA4_4185_B6DC056BF34C, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_1073E2CB_001F_FAFF_4122_C6088C6931DC.png",
 "data": {
  "name": "KitchenOutside"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5",
 "left": "18.06%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "0%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5248BD89_434F_7A6F_41B5_96E6E385C8D5.png",
 "data": {
  "name": "KitchenOutsideTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_119A84FB_001F_DE9F_4117_9536EB318048",
 "left": "33.33%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.33%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "0%",
 "toolTip": "Kitchen",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.IconButton_526E1031_4370_8ABF_4196_E621EC233F54, true, 0, this.effect_50BC5BBF_43D0_BDA3_41C0_6CA65E934B7E, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_119A84FB_001F_DE9F_4117_9536EB318048.png",
 "data": {
  "name": "Kitchen"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_526E1031_4370_8ABF_4196_E621EC233F54",
 "left": "33.89%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "0%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_526E1031_4370_8ABF_4196_E621EC233F54.png",
 "data": {
  "name": "KitchenTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10ADEC8B_001F_ED7F_4103_625B1E974A30",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "right": "29.16%",
 "width": "8.33%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "4.5%",
 "toolTip": "Pigeon Nest",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.IconButton_526D2211_4370_8E7C_41C0_5362708C3586, true, 0, this.effect_577457E6_43D3_75A5_41D0_5DC9A7AB2A6E, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10ADEC8B_001F_ED7F_4103_625B1E974A30.png",
 "data": {
  "name": "PigeonNest"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_526D2211_4370_8E7C_41C0_5362708C3586",
 "backgroundOpacity": 0,
 "width": 38,
 "right": "26.67%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "0%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_526D2211_4370_8E7C_41C0_5362708C3586.png",
 "data": {
  "name": "PigeonNestTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_1087CB9A_001F_2A9E_4104_E5240D306B00",
 "left": "20.29%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.33%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Corridor Passage",
 "toolTipShadowVerticalLength": 0,
 "bottom": "32.5%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.IconButton_526D23D2_4370_8DFC_41A1_95F16EA8FFDA, true, 0, this.effect_57390437_43D3_8AA3_41CA_B4835603A4A8, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_1087CB9A_001F_2A9E_4104_E5240D306B00.png",
 "data": {
  "name": "CorridorPassage"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_526D23D2_4370_8DFC_41A1_95F16EA8FFDA",
 "left": "20.28%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "28.5%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_526D23D2_4370_8DFC_41A1_95F16EA8FFDA.png",
 "data": {
  "name": "CorridorPassageTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_109246F9_001E_FA9A_4113_9B85ED785998",
 "left": "20.84%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.33%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "33.5%",
 "toolTip": "Corridor Passage 2",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.IconButton_526D0561_4370_8ADF_41CB_9ED681A1A12F, true, 0, this.effect_57F2F52F_43D0_8AA4_41D0_6897F2ABCFC2, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_109246F9_001E_FA9A_4113_9B85ED785998.png",
 "data": {
  "name": "CorridorPassage2"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_526D0561_4370_8ADF_41CB_9ED681A1A12F",
 "left": "20.28%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "32.5%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_526D0561_4370_8ADF_41CB_9ED681A1A12F.png",
 "data": {
  "name": "CorridorPassage2Tik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10C472C1_0003_3AEB_412E_CE5F5B1B7198",
 "left": "20.84%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.33%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "18%",
 "toolTip": "Corridor Passage 3",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.IconButton_526D2701_4370_965F_41B3_05BF46761C18, true, 0, this.effect_57A25247_43D0_8EE3_418E_71E6D29A6C99, 'showEffect', false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10C472C1_0003_3AEB_412E_CE5F5B1B7198.png",
 "data": {
  "name": "CorridorPassage3"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_526D2701_4370_965F_41B3_05BF46761C18",
 "left": "20.56%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "15.5%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_526D2701_4370_965F_41B3_05BF46761C18.png",
 "data": {
  "name": "CorridorPassage3Tik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10BBF142_001F_57EE_4112_98AC936646B0",
 "left": "35.56%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "28%",
 "toolTip": "Living Room (Ground Floor)",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.IconButton_526D2871_4370_9ABF_419B_CC7D921B7F39, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10BBF142_001F_57EE_4112_98AC936646B0.png",
 "data": {
  "name": "LivingRoomGroundF"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_526D2871_4370_9ABF_419B_CC7D921B7F39",
 "left": "35.56%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "24.5%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_526D2871_4370_9ABF_419B_CC7D921B7F39.png",
 "data": {
  "name": "LivingRoomGroundFTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_107016C2_001F_7AEE_4124_BB37FAFAA178",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "right": "41.39%",
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "35.5%",
 "toolTip": "Bangabandhu Library",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.IconButton_526C79E0_4370_9DDD_41CD_FF3AAB808A74, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_107016C2_001F_7AEE_4124_BB37FAFAA178.png",
 "data": {
  "name": "BBLibrary"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_526C79E0_4370_9DDD_41CD_FF3AAB808A74",
 "backgroundOpacity": 0,
 "width": 38,
 "right": "38.61%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "30.5%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_526C79E0_4370_9DDD_41CD_FF3AAB808A74.png",
 "data": {
  "name": "BBLibraryTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "maxHeight": 1048,
 "maxWidth": 1048,
 "id": "Image_3CA2A494_2FC7_3B93_41B4_8DB175FB6437",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_3CA2A494_2FC7_3B93_41B4_8DB175FB6437.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image5818"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 488,
 "id": "IconButton_3C3D2DC2_2F5C_E5F6_41BE_58258F8AF755",
 "backgroundOpacity": 0,
 "width": 43,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "1.5%",
 "height": 39,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_3ECB2A75_2FDB_2E92_41B7_858A5D2A0637, false, 0, this.effect_3B94E4AE_2F4D_3B8E_41A1_D583580A7C82, 'hideEffect', false)",
 "iconURL": "skin/IconButton_3C3D2DC2_2F5C_E5F6_41BE_58258F8AF755.png",
 "data": {
  "name": "Cancel2ndFloor"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_1071FF22_001F_6BAE_40D1_EB1BE8C1F700",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "right": "35.83%",
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Balcony",
 "toolTipShadowVerticalLength": 0,
 "bottom": "13%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.IconButton_50250BCF_433F_FDE4_41B0_971E43A3AAF7, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_1071FF22_001F_6BAE_40D1_EB1BE8C1F700.png",
 "data": {
  "name": "Balcony"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_50250BCF_433F_FDE4_41B0_971E43A3AAF7",
 "backgroundOpacity": 0,
 "width": 38,
 "right": "32.78%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "14.5%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_50250BCF_433F_FDE4_41B0_971E43A3AAF7.png",
 "data": {
  "name": "BalconyTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_1070756B_001F_5FBE_412B_6F1E4FF448D4",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "right": "39.44%",
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Bangabandhu Room",
 "toolTipShadowVerticalLength": 0,
 "bottom": "38.5%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.IconButton_507BAC5A_4331_9AED_41AC_5378DF23B06F, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_1070756B_001F_5FBE_412B_6F1E4FF448D4.png",
 "data": {
  "name": "BBRoom"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_507BAC5A_4331_9AED_41AC_5378DF23B06F",
 "backgroundOpacity": 0,
 "width": 38,
 "right": "36.39%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "39%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_507BAC5A_4331_9AED_41AC_5378DF23B06F.png",
 "data": {
  "name": "BBRoomTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_108EC52A_001F_3FB9_412C_076EDEA2A8B0",
 "left": "29.44%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "33.5%",
 "toolTip": "Living Room (Second Floor)",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.IconButton_51225E42_4331_96DC_41B3_A77B681B5F8F, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_108EC52A_001F_3FB9_412C_076EDEA2A8B0.png",
 "data": {
  "name": "LivingRoom2ndF"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_51225E42_4331_96DC_41B3_A77B681B5F8F",
 "left": "30.28%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "29%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_51225E42_4331_96DC_41B3_A77B681B5F8F.png",
 "data": {
  "name": "LivingRoom2ndFTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10718322_001E_DBA9_4114_0B018FBFE9A0",
 "left": "37.22%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Sheikh Rehana's Room",
 "toolTipShadowVerticalLength": 0,
 "bottom": "30.5%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.IconButton_51225FF3_4331_95BC_41A3_2D45529447F7, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10718322_001E_DBA9_4114_0B018FBFE9A0.png",
 "data": {
  "name": "SheikhRehanaRoom"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_51225FF3_4331_95BC_41A3_2D45529447F7",
 "left": "37.78%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "32%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_51225FF3_4331_95BC_41A3_2D45529447F7.png",
 "data": {
  "name": "SheikhRehanaRoomTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10A1F8AA_001E_D6B9_4121_9D9895245890",
 "left": "14.72%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Main Stairs",
 "toolTipShadowVerticalLength": 0,
 "bottom": "35.5%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 17); this.setComponentVisibility(this.IconButton_5122416B_4331_8AAC_41D0_9AA8BB0E89D8, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10A1F8AA_001E_D6B9_4121_9D9895245890.png",
 "data": {
  "name": "MainStairs"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_5122416B_4331_8AAC_41D0_9AA8BB0E89D8",
 "left": "15%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "35.5%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5122416B_4331_8AAC_41D0_9AA8BB0E89D8.png",
 "data": {
  "name": "MainStairsTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10846F12_001F_6B6E_411D_1E493DACC8C0",
 "left": "4.44%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Sheikh Jamal's Room",
 "toolTipShadowVerticalLength": 0,
 "bottom": "13.5%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.IconButton_512222EB_4331_8FAC_41B7_A38170A2EBE2, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10846F12_001F_6B6E_411D_1E493DACC8C0.png",
 "data": {
  "name": "SheikhJamalRoom"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_512222EB_4331_8FAC_41B7_A38170A2EBE2",
 "left": "5%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "14.5%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_512222EB_4331_8FAC_41B7_A38170A2EBE2.png",
 "data": {
  "name": "SheikhJamalRoomTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10700D1B_001E_EF9F_4121_FCC22FBA556C",
 "left": "33.06%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "14.5%",
 "toolTip": "Second Floor Entry",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.IconButton_5122345B_4331_8AEC_4191_9CFEEC8C3042, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10700D1B_001E_EF9F_4121_FCC22FBA556C.png",
 "data": {
  "name": "SecondFloorEntry"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_5122345B_4331_8AEC_4191_9CFEEC8C3042",
 "left": "34.44%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "7.5%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5122345B_4331_8AEC_4191_9CFEEC8C3042.png",
 "data": {
  "name": "SecondFloorEntryTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "maxHeight": 1048,
 "maxWidth": 1048,
 "id": "Image_3CEE4156_2FC7_DA9E_4196_6C10E383FF15",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_3CEE4156_2FC7_DA9E_4196_6C10E383FF15.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image5936"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 488,
 "id": "IconButton_3C1F65A5_2F5D_25B9_41C0_9928BE41BE1C",
 "backgroundOpacity": 0,
 "width": 36,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "3%",
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_3CCA3458_2FDB_FA92_41B1_D0F9F29108A2, false, 0, this.effect_3C78A512_2F4F_3A97_41A0_75E1E3E460BD, 'hideEffect', false)",
 "iconURL": "skin/IconButton_3C1F65A5_2F5D_25B9_41C0_9928BE41BE1C.png",
 "data": {
  "name": "Cancel3rdFloor"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_108608EA_001E_D6B9_4129_DA26B302B778",
 "left": "21.94%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "top": "27.5%",
 "toolTip": "Sheikh Kamal's Room",
 "toolTipShadowVerticalLength": 0,
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 20); this.setComponentVisibility(this.IconButton_50E91946_4333_7AE4_41A1_ECCC19F6E618, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_108608EA_001E_D6B9_4129_DA26B302B778.png",
 "data": {
  "name": "SheikhKamalRoom"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_50E91946_4333_7AE4_41A1_ECCC19F6E618",
 "left": "23.33%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "22%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_50E91946_4333_7AE4_41A1_ECCC19F6E618.png",
 "data": {
  "name": "SheikhKamalRoomTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_10708E82_001D_2D69_412B_DF58578AEBA0",
 "left": "21.94%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Bangabandhu Office",
 "toolTipShadowVerticalLength": 0,
 "bottom": "18%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.IconButton_5025042C_4330_8AA4_41B9_E2C0CDE39043, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_10708E82_001D_2D69_412B_DF58578AEBA0.png",
 "data": {
  "name": "BBOffice"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_5025042C_4330_8AA4_41B9_E2C0CDE39043",
 "left": "23.33%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "20%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5025042C_4330_8AA4_41B9_E2C0CDE39043.png",
 "data": {
  "name": "BBOfficeTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_11A9A924_0003_57A9_40D0_6201A6958C00",
 "left": "12.5%",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "backgroundOpacity": 0,
 "toolTipShadowOpacity": 1,
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Living Room (Third Floor)",
 "toolTipShadowVerticalLength": 0,
 "bottom": "33.5%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.IconButton_51CC464A_4330_96ED_418F_C3A94B0364BD, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_11A9A924_0003_57A9_40D0_6201A6958C00.png",
 "data": {
  "name": "LivingRoom3rdF"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_51CC464A_4330_96ED_418F_C3A94B0364BD",
 "left": "13.61%",
 "width": 38,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "35.5%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_51CC464A_4330_96ED_418F_C3A94B0364BD.png",
 "data": {
  "name": "LivingRoom3rdFTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 57,
 "maxWidth": 64,
 "id": "IconButton_11A89B1E_001D_2B96_4128_D2E1D2343AB8",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "right": "38.89%",
 "width": "8.333%",
 "verticalAlign": "middle",
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "IconButton",
 "toolTip": "Roof",
 "toolTipShadowVerticalLength": 0,
 "bottom": "40.5%",
 "height": "15%",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "transparencyActive": false,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.IconButton_51CDD853_4330_9AE3_41C0_76A4CD3EAEA6, true, 0, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_11A89B1E_001D_2B96_4128_D2E1D2343AB8.png",
 "data": {
  "name": "Roof"
 },
 "shadow": false,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "center",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "IconButton_51CDD853_4330_9AE3_41C0_76A4CD3EAEA6",
 "backgroundOpacity": 0,
 "width": 38,
 "right": "35.28%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "top": "39.5%",
 "height": 38,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_51CDD853_4330_9AE3_41C0_76A4CD3EAEA6.png",
 "data": {
  "name": "RoofTik"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7A7D64E_FC25_1704_41D5_DE63F6A388FF_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42FA8BD8_071B_F8EB_4190_129501D9833E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7AAC0B8_FC25_2B0C_41E7_007DE1D89524_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42FEFBD5_071B_F8E5_4198_DDA722C9BB9B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F753F731_FC25_351D_41E3_5AA0E318FE4D_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42C0CBDB_071B_F8ED_4198_D4B3C2D6709C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7BDA618_FC25_F70C_41D5_2E58FCA8AC99_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42C51BD9_071B_F8ED_4192_E5C62061F3FC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7B9FBEA_FC25_1D0F_41C5_E7D2502237CA_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42C7FBDA_071B_F8EF_4153_B8B63D32BEC4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F753608E_FC25_6B04_41D3_B07BBE698EAF_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42F9CBD7_071B_F8E5_417F_AF2611485C97",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F01F4C2B_FC25_1B0C_41D3_74241C683C53_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42FD1BD4_071B_F8E4_4181_E39EB0A9E1C5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F75327C7_FC25_3504_41EE_F09E39A83F26_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42CE8BDE_071B_F8E7_4175_9024518EC4A8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7A3E73D_FC25_7504_41EB_F4C5BBF5FBB6_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42C3ABDD_071B_F8E5_4198_AE1222A4D863",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7B9B607_FC25_1705_41CD_C0E4014FEB1A_0_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42F97BD6_071B_F8E7_4179_63682691F038",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7533904_FC25_1AFB_41E3_8661929E7D2A_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42C48BD9_071B_F8ED_4176_061CE750689F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7532C5D_FC25_1B04_41E0_60ABAA7C4743_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42C2BBDC_071B_F8EB_418B_E703575A3EBE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7B90BDF_FC25_7D05_419E_62E03F1FEDC1_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_3B19FF0E_0725_F966_4198_F7455846FC6C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7A2B1A9_FC25_2D0C_41CF_7E7251A112C3_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_3B257F13_0725_F97E_4184_3CF6F4C520A4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F752CB54_FC25_3D04_41D5_D09A7FFBFDF5_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42FF3BD5_071B_F8E5_4175_0245506A39D3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7A25264_FC25_2F3B_41EC_393942E5C22D_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42C87BDF_071B_F8E5_4164_FBE72782EF5A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F7A2CD05_FC25_1507_41D5_1A69A99E8889_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42CD8BDE_071B_F8E7_4182_A7A2B3B79485",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F753627E_FC25_6F07_41C1_3729E6BAA79C_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42CD6BDD_071B_F8E5_418F_1B0D9C0DDFC6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F753D128_FC25_ED0C_41D7_00A6D2F2C229_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_42C6DBDA_071B_F8EF_4187_4DEDA6FDF478",
 "rowCount": 6,
 "frameCount": 24
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player43899"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
