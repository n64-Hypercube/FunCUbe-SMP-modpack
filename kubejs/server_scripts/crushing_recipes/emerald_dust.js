ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "minecraft:emerald"}],
        "processingTime": 200,
        'results': [{"item": "thermal:emerald_dust"}]})
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "thermal:emerald_gear"}],
        "processingTime": 200, 
        "results": [{"chance": 0.75,"item": "thermal:emerald_dust"},{"chance": 0.75,"item": "thermal:emerald_dust"}, {"item": "thermal:emerald_dust"}]
        })
    })