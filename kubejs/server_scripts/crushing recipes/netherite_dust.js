ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:small_netherite_dust_crushable"}],
        "processingTime": 200,
        'results': [{"item": "thermal:netherite_dust"}]})
    })