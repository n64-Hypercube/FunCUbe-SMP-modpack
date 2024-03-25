ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "forge:small_nickel_dust_crushable"}],
        "processingTime": 200,
        'results': [{"item": "thermal:nickel_dust"}]})
    })