ServerEvents.recipes(event => {
    event.replaceOutput(
        { output: 'iceandfire:copper_nugget' }, // Arg 1: the filter
        'iceandfire:copper_nugget',            // Arg 2: the item to replace
        'create:copper_nugget')         // Arg 3: the item to replace it with
    event.replaceOutput(
        { output: 'immersiveengineering:nugget_copper' }, // Arg 1: the filter
        'immersiveengineering:nugget_copper',            // Arg 2: the item to replace
        'create:copper_nugget')         // Arg 3: the item to replace it with
    event.replaceOutput(
        { output: 'thermal:copper_nugget' }, // Arg 1: the filter
        'thermal:copper_nugget',            // Arg 2: the item to replace
        'create:copper_nugget')         // Arg 3: the item to replace it with
    event.replaceOutput(
        { output: 'immersiveengineering:ingot_nickel' }, // Arg 1: the filter
        'immersiveengineering:ingot_nickel',            // Arg 2: the item to replace
        'thermal:nickel_ingot')// Arg 3: the item to replace it with
    //copper plates         
    event.replaceOutput({ output: 'immersiveengineering:sheetmetal_copper'}, 'immersiveengineering:sheetmetal_copper', 'createdeco:copper_sheet_metal')
    event.replaceOutput({ output: 'immersiveengineering:slab_sheetmetal_copper'}, 'immersiveengineering:slab_sheetmetal_copper', 'createdeco:copper_sheet_slab')
    event.replaceOutput({ output:'immersiveengineering:plate_copper'}, 'immersiveengineering:plate_copper', 'create:copper_sheet')
    event.replaceOutput({ output:'thermal:copper_plate'}, 'thermal:copper_plate', 'create:copper_sheet')
    //steel armors
    event.replaceOutput({ id:'immersiveengineering:crafting/armor_steel_legs'}, 'immersiveengineering:armor_steel_legs', 'mekanismtools:steel_leggings')
    event.replaceOutput({ id:'immersiveengineering:crafting/armor_steel_feet'}, 'immersiveengineering:armor_steel_feet', 'mekanismtools:steel_boots')
    event.replaceOutput({ id:'immersiveengineering:crafting/armor_steel_head'}, 'immersiveengineering:armor_steel_head', 'mekanismtools:steel_helmet')
    event.replaceOutput({ id:'immersiveengineering:crafting/armor_steel_chest'}, 'immersiveengineering:armor_steel_chest', 'mekanismtools:steel_chestplate')
    event.replaceOutput({ id:'immersiveengineering:crafting/sword_steel'},'immersiveengineering:sword_steel', 'mekanismtools:steel_sword')
    event.replaceOutput({ id:'immersiveengineering:crafting/hoe_steel'}, "immersiveengineering:hoe_steel", 'mekanismtools:steel_hoe' )
    event.replaceOutput({ id:'immersiveengineering:crafting/axe_steel'}, 'immersiveengineering:axe_steel' , 'mekanismtools:steel_axe')
    event.replaceOutput({ id:'immersiveengineering:crafting/shovel_steel'}, 'immersiveengineering:shovel_steel', 'mekanismtools:steel_shovel')
    event.replaceOutput({ id:"immersiveengineering:crafting/pickaxe_steel"}, "immersiveengineering:pickaxe_steel" , 'mekanismtools:steel_pickaxe')
    event.replaceOutput({ output: 'immersiveengineering:dust_steel'}, 'immersiveengineering:dust_steel', 'mekanism:dust_steel')
    event.replaceOutput([{output: 'ad_astra:steel_nugget'},{output: 'immersiveengineering:nugget_steel'}], ['immersiveengineering:nugget_steel', 'ad_astra:steel_nugget'], 'mekanism:nugget_steel')
    event.replaceOutput([{output: 'immersiveengineering:ingot_steel'}, {output: 'ad_astra:steel_ingot'}],['immersiveengineering:ingot_steel', 'ad_astra:steel_ingot'],'mekanism:ingot_steel')
    })