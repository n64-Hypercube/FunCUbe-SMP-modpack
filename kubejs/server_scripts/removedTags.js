ServerEvents.tags('item', event => {
    //enlève touts les tags de touts les copper nuggets sauf celui de create pour que seul celui de create puisse être utilisé dans la plupart des recettes,
    //les autres sont retirées manuelement dans removedRecipes ou dans le datapack
    event.removeAllTagsFrom(['iceandfire:copper_nugget', 'thermal:copper_nugget', 'immersiveengineering:nugget_copper'])
    //enlève touts les tags de touts les trucs de nickel sauf ceux de thermal pour que seul ceux de thermal puisse être utilisé dans la plupart des recettes,
    //les autres sont retirées manuelement dans removedRecipes ou dans le datapack
    event.removeAllTagsFrom([
        'immersiveengineering:ingot_nickel',
        "immersiveengineering:raw_nickel",
        "immersiveengineering:nugget_nickel",
        "immersiveengineering:plate_nickel",
        "immersiveengineering:dust_nickel",
        "immersiveengineering:sheetmetal_nickel",
        'immersiveengineering:storage_nickel', 
        'immersiveengineering:slab_storage_nickel', 
        'immersiveengineering:raw_block_nickel',
        'mekanism:dust_diamond',
        'createaddition:diamond_grit',
        'immersiveengineering:slab_sheetmetal_copper',
        'immersiveengineering:sheetmetal_copper',
        'immersiveengineering:plate_copper', 
        'thermal:copper_plate',
        'immersiveengineering:dust_copper', 
        'mekanism:dust_copper',
        'immersiveengineering:ingot_steel',
        'ad_astra:steel_ingot',
        'ad_astra:steel_nugget', 
        'immersiveengineering:nugget_steel',
        'immersiveengineering:plate_steel',
        'ad_astra:hammer',
        'immersiveengineering:dust_steel',
        'mekanism:block_steel', 
        'ad_astra:steel_block',
        'immersiveengineering:wire_copper'
    ])
})