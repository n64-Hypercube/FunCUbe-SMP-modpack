JEIEvents.hideItems(event => {

    event.hide([
        /ae2:facade/,
        ['arseng:creative_source_cell',
        'theoneprobe:creativeprobe',
        'ars_nouveau:creative_source_jar', 
        'ars_nouveau:creative_spell_book',
        'securitycraft:admin_tool', 
        'apotheosis:boss_summoner', 
        'ae2:creative_energy_cell', 
        'ae2:creative_item_cell', 
        'ae2:creative_fluid_cell', 
        'appmek:creative_chemical_cell', 
        'botania:creative_pool', 
        'botania:infrangible_platform', 
        'botania:lens_storm',
        'botania:corporea_spark_creative', 
        'buildinggadgets:construction_paste_container_creative', 
        'create:creative_motor', 'create:creative_fluid_tank', 
        'create:creative_crate', 'create:creative_blaze_cake', 
        'create:handheld_worldshaper', 
        'createaddition:creative_energy', 
        'create_sa:creative_filling_tank', 
        'iceandfire:creative_dragon_meal', 
        'mekanism:creative_bin', 
        'mekanism:creative_fluid_tank', 
        'mekanism:creative_energy_cube', 
        'mekanism:creative_chemical_tank',
        'thermal:rf_coil_creative_augment', 
        'thermal:fluid_tank_creative_augment', 
        'thermal:machine_efficiency_creative_augment', 
        'thermal:machine_catalyst_creative_augment', 
        'immersiveengineering:capacitor_creative', 
        Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'),
    
        ]
    ])    
})

JEIEvents.addItems(event => {

    event.add([
        Item.of('ae2:facade', '{item:"minecraft:stone"}')
    ])
})