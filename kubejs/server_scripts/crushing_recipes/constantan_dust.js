ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:small_constantan_dust_crushable"}],
        "processingTime": 200,
        'results': [{"item": "thermal:constantan_dust"}]})
    })