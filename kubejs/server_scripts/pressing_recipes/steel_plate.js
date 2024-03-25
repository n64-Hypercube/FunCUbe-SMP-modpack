ServerEvents.recipes(event => {
    event.custom({
        "type": "create:pressing",
        "ingredients": [{"item": 'mekanism:ingot_steel'}],
        "results": [{"item": "ad_astra:steel_plate"}]
    })
})