ServerEvents.recipes(event => {
    event.replaceInput({ input:'immersiveengineering:slab_sheetmetal_copper'},'immersiveengineering:slab_sheetmetal_copper','createdeco:copper_sheet_slab')
    event.replaceInput({ input:'immersiveengineering:sheetmetal_copper'},'immersiveengineering:sheetmetal_copper','createdeco:copper_sheet_metal')
    event.replaceInput({ input:'immersiveengineering:plate_copper'},'immersiveengineering:plate_copper','create:copper_sheet')
    event.replaceInput({ input:'thermal:copper_plate'},'thermal:copper_plate','create:copper_sheet')
    event.replaceInput({input:'iceandfire:copper_nugget'},'iceandfire:copper_nugget','create:copper_nugget')
    event.replaceInput([{input: 'immersiveengineering:ingot_steel'}, {input: 'ad_astra:steel_ingot'}],['immersiveengineering:ingot_steel', 'ad_astra:steel_ingot'],'mekanism:ingot_steel')
})