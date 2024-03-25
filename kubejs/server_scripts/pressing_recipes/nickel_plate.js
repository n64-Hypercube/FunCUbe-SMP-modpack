ServerEvents.recipes(event => {
    event.custom({
        "type": "create:pressing",
        "ingredients": [{"item": "thermal:nickel_ingot"}],
        "results": [{"item": "thermal:nickel_sheet"}]
    })
})