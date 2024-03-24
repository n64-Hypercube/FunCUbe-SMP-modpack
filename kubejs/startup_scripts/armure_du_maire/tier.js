ItemEvents.armorTierRegistry(event => {
    event.add('mayor', tier => {
      tier.durabilityMultiplier = -1 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [6, 15, 18, 6] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 10000
      tier.equipSound = 'minecraft:entity.pig.death'
      tier.repairIngredient = '#forge:armor'
      tier.toughness = 5.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 1.0
    })
  })