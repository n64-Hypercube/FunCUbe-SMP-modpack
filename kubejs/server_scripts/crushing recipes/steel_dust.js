ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:small_steel_dust_crushable"}],
        "processingTime": 200,
        'results': [{"item": "mekanism:dust_steel"}]})
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:steel_dust_crushable"}],
        "processingTime": 200,
        "results": [{"chance": 0.75,"item": "mekanism:dust_steel"},{"chance": 0.75,"item": 'mekanism:dust_steel'},{"item": "mekanism:dust_steel"}]})

    })