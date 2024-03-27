ServerEvents.recipes(event => {
    event.custom({
    "type": "create:crushing",
    "ingredients": [{"tag": "forge:iron_dust_crushable"}],
    "processingTime": 200, 
    "results": [{"chance": 0.75,"item": "thermal:iron_dust"},{"chance": 0.75,"item": "thermal:iron_dust"}, {"item": "thermal:iron_dust"}]
    })
    event.custom({
    "type": "create:crushing",
    "ingredients": [{"tag": "forge:small_iron_dust_crushable"}],
    "processingTime": 200, 
    "results": [{"item": "thermal:iron_dust"}]
    })
})