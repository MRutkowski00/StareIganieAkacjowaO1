var APP_DATA = {
  "scenes": [
    {
      "id": "0-pokj-dzienny",
      "name": "Pokój dzienny",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5929912664054093,
          "pitch": 0.041685338717943665,
          "rotation": 0,
          "target": "1-komunikacja---parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-komunikacja---parter",
      "name": "Komunikacja - parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5242060304127438,
          "pitch": 0.033151428482600664,
          "rotation": 0,
          "target": "0-pokj-dzienny"
        },
        {
          "yaw": 1.8796793456933534,
          "pitch": 0.022844524841339364,
          "rotation": 0,
          "target": "4-komunikacja---pitro"
        },
        {
          "yaw": -3.0384359413971254,
          "pitch": 0.01965685246289084,
          "rotation": 0,
          "target": "2-siownia"
        },
        {
          "yaw": 2.844708846002601,
          "pitch": 0.01713717508043544,
          "rotation": 0,
          "target": "3-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-siownia",
      "name": "Siłownia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33416199462961416,
          "pitch": 0.04370252623835569,
          "rotation": 0,
          "target": "1-komunikacja---parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-azienka",
      "name": "Łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5782666416634683,
          "pitch": 0.013147247115858463,
          "rotation": 0,
          "target": "1-komunikacja---parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-komunikacja---pitro",
      "name": "Komunikacja - piętro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1278841593890956,
          "pitch": 0.035694891834243236,
          "rotation": 0,
          "target": "1-komunikacja---parter"
        },
        {
          "yaw": -0.3591837170707084,
          "pitch": 0.03369369112098752,
          "rotation": 0,
          "target": "5-biuro"
        },
        {
          "yaw": -2.9276625332809303,
          "pitch": 0.04165063754594556,
          "rotation": 0,
          "target": "6-pokj"
        },
        {
          "yaw": 2.545978151244592,
          "pitch": 0.030658569235619382,
          "rotation": 0,
          "target": "7-sypialnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-biuro",
      "name": "Biuro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0626988335300798,
          "pitch": 0.027273914875578953,
          "rotation": 0,
          "target": "4-komunikacja---pitro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pokj",
      "name": "Pokój",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.59564235978797,
          "pitch": -0.08655666130234252,
          "rotation": 0,
          "target": "4-komunikacja---pitro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sypialnia",
      "name": "Sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.665068344983104,
          "pitch": -0.031651565831630535,
          "rotation": 0,
          "target": "4-komunikacja---pitro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Stare Iganie ul. Akacjowa",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
