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
          "yaw": -2.598581839974152,
          "pitch": 0.03889439905106329,
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
          "yaw": 0.4739453118678938,
          "pitch": 0.024755610158280206,
          "rotation": 0,
          "target": "0-pokj-dzienny"
        },
        {
          "yaw": -3.025636648750476,
          "pitch": 0.0660976005185514,
          "rotation": 0,
          "target": "2-siownia"
        },
        {
          "yaw": 2.8841015373148036,
          "pitch": 0.0733839181226994,
          "rotation": 0,
          "target": "3-azienka"
        },
        {
          "yaw": 1.8385043987523009,
          "pitch": 0.058489062528142455,
          "rotation": 0,
          "target": "4-komunikacja---pitro"
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
          "yaw": -0.3524045938158302,
          "pitch": 0.007240915037442619,
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
          "yaw": -0.5490223213583167,
          "pitch": 0.013618523161454732,
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
          "yaw": 0.18802507799225943,
          "pitch": 0.022756575782771904,
          "rotation": 0,
          "target": "1-komunikacja---parter"
        },
        {
          "yaw": -0.3433102085945041,
          "pitch": 0.02677002162550224,
          "rotation": 0,
          "target": "5-biuro"
        },
        {
          "yaw": -2.9009326486514393,
          "pitch": 0.040967733066564094,
          "rotation": 0,
          "target": "6-pokj"
        },
        {
          "yaw": 2.6211116575277327,
          "pitch": 0.026091723965084412,
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
          "yaw": 1.0620630418453398,
          "pitch": 0.035293959890502435,
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
          "yaw": -2.5561071384928304,
          "pitch": -0.0024394428390550615,
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
          "yaw": 2.600953850001524,
          "pitch": 0.005586243367305954,
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
