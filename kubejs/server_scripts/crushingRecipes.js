ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:ingots/copper"
            }
          }
        ],
        "ingredients": [
          {
            "tag": "forge:ingots/copper"//takes 1 copper ingot 
          }
        ],
        "processingTime": 200, // and 200 "processingTime"
        "results": [
          {
            "item": "thermal:copper_dust"//to make a copper dust
          }
        ]
    })
    event.custom({
        "type": "create:crushing",
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:dusts/copper"
            }
          }
        ],
        "ingredients": [
          {
            "tag": "forge:ingots/copper"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "item": "thermal:copper_dust"
          }
        ]
    })
    event.custom({
        "type": "create:crushing",
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "create:dusts/copper"
            }
          }
        ],
        "ingredients": [
          {
            "item": "create:crushed_raw_copper"// takes 1 crushed raw copper
          }
        ],
        "processingTime": 200, // and 200 "processingTime"
        "results": [
          {
            "item": "thermal:copper_dust" // to make a copper dust
          }
        ]
    })
    event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "tag": "forge:copper_dust_crushable"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "chance": 0.75,
            "item": "thermal:copper_dust"
          },
          {
            "chance": 0.75,
            "item": "thermal:copper_dust"
          },
          {
            "item": "thermal:copper_dust"
          }
        ]
    })
    event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "tag": "forge:diamond_dust_crushable"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "chance": 0.75,
            "item": "thermal:diamond_dust"
          },
          {
            "chance": 0.75,
            "item": "thermal:diamond_dust"
          },
          {
            "item": "thermal:diamond_dust"
          }
        ]
    })
  })
