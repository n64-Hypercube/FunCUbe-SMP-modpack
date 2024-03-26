ServerEvents.recipes(event => {
    event.custom({
        "type":["create:crushing"],
        "ingredients": [{"tag": "forge:small_copper_dust_crushable"}],
        "processingTime": 200, 
        "results": [{"item": "thermal:copper_dust" }]})
    event.custom({
        "type":["create:crushing"],
        "ingredients": [{"tag": "forge:copper_dust_crushable"}],
        "processingTime": 200, 
        "results": [{"item": "thermal:copper_dust" }, {"item": "thermal:copper_dust", "chance": 0.75},{"item": "thermal:copper_dust", "chance": 0.75}]})
})