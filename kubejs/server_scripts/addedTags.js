ServerEvents.tags('item', event => {
    event.add('forge:copper_dust_crushable',//adds copper_dust_crushable tag on every copper stuff
        ['iceandfire:dragonarmor_copper_head', 
        'iceandfire:dragonarmor_copper_neck', 
        'iceandfire:dragonarmor_copper_body', 
        'iceandfire:dragonarmor_copper_tail', 
        'iceandfire:armor_copper_metal_helmet', 
        'iceandfire:armor_copper_metal_chestplate', 
        'iceandfire:armor_copper_metal_leggings', 
        'iceandfire:armor_copper_metal_boots',
        'create:copper_diving_helmet',
        'create_sa:copper_jetpack_chestplate',
        'create_sa:copper_exoskeleton_chestplate', 
        'create:copper_backtank', 
        'create:copper_diving_boots', 
        'iceandfire:copper_pickaxe', 
        'iceandfire:copper_axe',
        'thermal:copper_gear'])
    event.add('forge:small_copper_dust_crushable',[//small_copper_dust_crushable
        'iceandfire:copper_hoe',
        'iceandfire:copper_shovel', 
        'iceandfire:copper_sword',
        'create:copper_sheet',
        'create_things_and_misc:copper_knife',])//small_copper_dust_crushable
    event.add('forge:small_nickel_dust_crushable',
    ['create:crushed_raw_nickel', 
    'thermal:nickel_ingot', 
    'thermal:raw_nickel', 
    'thermal:nickel_plate', 
    'thermal:nickel_gear'])
    event.add('forge:diamond_dust_crushable', //adds diamond_dust_crushable tag on every diamond stuff
        ['minecraft:diamond_axe', 
        'minecraft:diamond_pickaxe', 
        'minecraft:diamond_chestplate', 
        'minecraft:diamond_helmet', 
        'minecraft:diamond_leggings', 
        'minecraft:diamond_boots', 
        'minecraft:diamond_horse_armor', 
        'iceandfire:diamond_hippogryph_armor',
        'theoneprobe:diamond_helmet_probe',
        'twilightforest:diamond_minotaur_axe',
        'thermal:diamond_gear', 
        'iceandfire:dragonarmor_diamond_head', 
        'iceandfire:dragonarmor_diamond_neck', 
        'iceandfire:dragonarmor_diamond_body', 
        'iceandfire:dragonarmor_diamond_tail'])
    event.add('forge:small_diamond_dust_crushable', //small_diamond_dust_crushable
        ['botania:mana_diamond', 
        'minecraft:diamond_shovel', 
        'minecraft:diamond_sword',
        'minecraft:diamond_hoe',
        'aether:diamond_gloves'])
    event.add('forge:steel_dust_crushable',//steel_dust_crushable
        'mekanismtools:steel_paxel', 
        ['ad_astra:steel_cable', 
        'mekanismtools:steel_axe', 
        'mekanismtools:steel_pickaxe', 
        'ad_astra:steel_tank', 
        'ad_astra:steel_engine', 
        'immersiveengineering:drillhead_steel', 
        'immersiveengineering:component_steel', 
        'mekanismtools:steel_boots', 
        'mekanismtools:steel_leggings', 
        'mekanismtools:steel_helmet', 
        'mekanismtools:steel_chestplate', 
        'mekanismtools:steel_shield'])
    event.add('forge:small_steel_dust_crushable', //small_steel_dust_crushable
        ['mekanismtools:steel_shovel',
        'mekanismtools:steel_sword',
        'mekanismtools:steel_hoe',  
        'mekanism:ingot_steel', 
        'immersiveengineering:wire_steel', 
        'ad_astra:steel_plate'])
    event.add('forge:gold_dust_crushable',//gold_dust_crushable
        ['minecraft:golden_axe', 
        'minecraft:golden_pickaxe', 
        'minecraft:golden_leggings', 
        'minecraft:golden_boots',
        'minecraft:golden_helmet',
        'minecraft:golden_chestplate', 
        'minecraft:golden_apple', 
        'minecraft:enchanted_golden_apple', 
        'thermal:gold_gear', 
        'aether:golden_ring', 
        'twilightforest:gold_minotaur_axe', 
        'mekanismtools:gold_paxel', 
        'iceandfire:dragonarmor_gold_head', 
        'iceandfire:dragonarmor_gold_neck', 
        'iceandfire:dragonarmor_gold_body', 
        'iceandfire:dragonarmor_gold_tail', 
        'iceandfire:gold_hippogryph_armor', 
        'theoneprobe:gold_helmet_probe', 
        'minecraft:golden_horse_armor'])
    event.add('forge:small_gold_dust_crushable', //forge:small_gold_dust_crushable
        ['create_new_age:overcharged_gold', 
        'create:golden_sheet', 
        'minecraft:golden_hoe', 
        'minecraft:golden_sword',
        'minecraft:golden_shovel',
        'minecraft:gold_ingot', 
        'minecraft:raw_gold', 
        'create:crushed_raw_gold', 
        'aether:golden_gloves', 
        'create_new_age:overcharged_golden_sheet'])


    event.add('forge:sheetmetal_slabs', 'createdeco:copper_sheet_slab')
    event.add('forge:sheetmetals', 'createdeco:copper_sheet_metal')
    event.add('forge:sheetmetals/copper', 'createdeco:copper_sheet_metal')
})
ServerEvents.tags('block', event => {
    event.add('forge:sheetmetals/copper',['createdeco:copper_sheet_metal','chipped:sheet_waxed_copper_block'])
    event.add('forge:sheetmetals',['createdeco:copper_sheet_metal','chipped:sheet_waxed_copper_block'])
    event.add('forge:sheetmetal_slabs', 'createdeco:copper_sheet_slab')
})