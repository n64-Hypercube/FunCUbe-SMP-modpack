ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:small_certus_dust_crushable"}],
        "processingTime": 200,
        'results': [{"item": "ae2:certus_quartz_dust"}]})
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:certus_dust_crushable"}],
        "processingTime": 200, 
        "results": [{"chance": 0.75,"item": "ae2:certus_quartz_dust"},{"chance": 0.75,"item": "ae2:certus_quartz_dust"}, {"item": "ae2:certus_quartz_dust"}]
        })
    })