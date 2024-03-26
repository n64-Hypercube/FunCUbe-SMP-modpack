ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:small_gold_dust_crushable"}],
        "processingTime": 200,
        'results': [{"item": "thermal:gold_dust"}]})
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:gold_dust_crushable"}],
        "processingTime": 200,
        "results": [{"chance": 0.75,"item": "thermal:gold_dust"},{"chance": 0.75,"item": 'thermal:gold_dust'},{"item": "thermal:gold_dust"}]})
})