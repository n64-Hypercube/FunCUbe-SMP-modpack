ServerEvents.recipes(event => {
    event.custom({
        "type":["create:crushing"],
        "ingredients": [{"tag": "forge:small_lapis_dust_crushable"}],
        "processingTime": 200, 
        "results": [{"item": "thermal:lapis_dust" }]})
    event.custom({
        "type":["create:crushing"],
        "ingredients": [{"tag": "forge:lapis_dust_crushable"}],
        "processingTime": 200, 
        "results": [{"item": "thermal:lapis_dust" }, {"item": "thermal:lapis_dust", "chance": 0.75},{"item": "thermal:lapis_dust", "chance": 0.75}]})
})