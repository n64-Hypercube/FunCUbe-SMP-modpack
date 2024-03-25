ServerEvents.recipes(event => {
    event.custom({
    "type": "create:crushing",
    "ingredients": [{"tag": "forge:diamond_dust_crushable"}],
    "processingTime": 200, 
    "results": [{"chance": 0.75,"item": "thermal:diamond_dust"},{"chance": 0.75,"item": "thermal:diamond_dust"}, {"item": "thermal:diamond_dust"}]
    })
    event.custom({
    "type": "create:crushing",
    "ingredients": [{"tag": "forge:small_diamond_dust_crushable"}],
    "processingTime": 200, 
    "results": [{"item": "thermal:diamond_dust"}]
    })
})