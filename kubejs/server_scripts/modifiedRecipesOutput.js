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
        'thermal:nickel_ingot')         // Arg 3: the item to replace it with
})  