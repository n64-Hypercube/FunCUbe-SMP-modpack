ServerEvents.recipes(event => {
    event.remove({ id: 'create_sa:copper_hoe_recipe' })
    event.remove({ id: 'create_sa:copper_shovel_recipe' })
    event.remove({ id: 'create_sa:copper_pickaxe_recipe' })
    event.remove({ id: 'create_sa:copper_axe_recipe' })
    event.remove({ id: 'create_sa:copper_sword_recipe' })
    event.remove({ id: 'create_sa:copper_helmet_recipe' })
    event.remove({ id: 'create_sa:copper_leggings_recipe' })
    event.remove({ id: 'create_sa:copper_chestplate_recipe' })
    event.remove({ id: 'create_sa:copper_boots_recipe' })
    event.remove({ id: 'create_sa:copper_hoe_recipe' })
    event.remove({ id: 'create_sa:copper_flamethrower_recipe' })
    //↓,removes copper nuggets to ingot recipes from immersive, thermal, and ice&fire
    event.remove({id: 'immersiveengineering:crafting/nugget_copper_to_copper_ingot'})    
    event.remove({id: 'thermal:storage/copper_ingot_from_nuggets'})
    event.remove({id: 'create:blasting/nickel_ingot_compat_thermal'})
    event.remove({id: 'create:smelting/nickel_ingot_compat_thermal'})
    event.remove({id: 'create:blasting/ingot_nickel_compat_immersiveengineering'})
    event.remove({id: 'create:splashing/thermal/crushed_raw_nickel'})
    event.remove({id: 'create:smelting/nickel_ingot_compat_thermal'})
    event.remove({id: 'thermal:furnace_1499172612'})
    event.remove({id: 'thermal:smelting/copper_ingot_from_dust_blasting'})
    event.remove({id: 'thermal:smelting/copper_ingot_from_dust_smelting'})
    event.remove({id: 'thermal:furnace_1241797241'})
    event.remove({id: 'immersiveengineering:smelting/copper_ingot_from_dust'})
    event.remove({id: 'immersiveengineering:smelting/copper_ingot_from_dust_from_blasting'})
    event.remove({id: 'ad_astra:recipes/steel_ingot_from_nuggets'})
    event.remove({id: 'immersiveengineering:crafting/nugget_steel_to_ingot_steel'})
    event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
    event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_nickel'})
    event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_silver'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_gold'})
    event.remove({id:'ad_astra:recipes/steel_ingot'})
    event.remove({id:'mekanism:processing/steel/ingot/from_block'})
    event.remove({id:'immersiveengineering:crafting/nugget_constantan_to_ingot_constantan'})
    event.remove({id:'immersiveengineering:crafting/ingot_constantan_to_nugget_constantan'})
    event.remove({id:'immersiveengineering:crafting/constantan_mix'})
    event.remove({id:'immersiveengineering:crafting/storage_constantan_from_slab'})
    event.remove({id:'immersiveengineering:crafting/ingot_constantan_to_storage_constantan'})
    event.remove({id:'immersiveengineering:crafting/storage_constantan_to_ingot_constantan'})
    event.remove({id:'immersiveengineering:crafting/storage_constantan_to_slab'})
    event.remove({id:'thermal:fire_charge/constantan_ingot_2'})
    event.remove({id:'immersiveengineering:smelting/ingot_constantan_from_dust_from_blasting'})
    event.remove({id:'thermal:smelting/constantan_ingot_from_dust_smelting'})
    event.remove({id:''})
    event.remove({id:''})
    event.remove({id:''})
    event.remove({id:''})
    event.remove({id:''})
    event.remove({id:''})
    event.remove({id:'mekanism:processing/gold/dust/from_ingot'})
    event.remove({id:'immersiveengineering:smelting/gold_ingot_from_dust_from_blasting'})
    event.remove({id:'thermal:smelting/gold_ingot_from_dust_blasting'})
    event.remove({id:'immersiveengineering:smelting/gold_ingot_from_dust'})
    event.remove({input:'immersiveengineering:shovel_steel'})
    event.remove({input:'immersiveengineering:pickaxe_steel'})
    event.remove({input:'immersiveengineering:axe_steel'})
    event.remove({input:'immersiveengineering:hoe_steel'})
    event.remove({id:'ad_astra:recipes/steel_block'})
    event.remove({id:'mekanism:storage_blocks/steel'})
    event.remove({id:'mekanism:processing/steel/ingot/from_dust_smelting'})
    event.remove({id:'mekanism:processing/steel/ingot/from_dust_blasting'})
    event.remove({input: 'immersiveengineering:sword_steel'})
    //steel stuff
    
})