ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [{"tag": "forge:ingots/nickel"},{"tag": "forge:ingots/copper"}],
        "results": [{"item": "thermal:constantan_ingot", "count":2}],
        "heatRequirement": "heated",
    })
})