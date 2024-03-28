ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:small_quartz_dust_crushable"}],
        "processingTime": 200,
        'results': [{"item": "thermal:quartz_dust"}]})
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:quartz_dust_crushable"}],
        "processingTime": 200, 
        "results": [{"chance": 0.75,"item": "thermal:quartz_dust"},{"chance": 0.75,"item": "thermal:quartz_dust"}, {"item": "thermal:quartz_dust"}]
        })
    })