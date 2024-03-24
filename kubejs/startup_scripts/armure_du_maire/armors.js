StartupEvents.registry('item', e => {
    e.create('mayor_jacket', "chestplate")
    .displayName('veston du maire')
    .maxDamage(-1)
    .rarity('rare')
    .tooltip("le veston du costume d'iron man")
    .tier('mayor')

    e.create('mayor_topper', 'helmet')
    .displayName('haut-de-forme du maire')
    .maxDamage(-1)
    .rarity('rare')
    .tooltip("le chapeau le plus classe (ringard) du monde")
    .tier('mayor')

    e.create('mayor_trousers', 'leggings')
    .displayName('pantalon du maire')
    .maxDamage(-1)
    .rarity('rare')
    .tooltip("la dernière pièce du MIB")
    .tier('mayor')

    e.create("mayors_formal_shoes", 'boots')
    .displayName('chaussures classe du maire')
    .maxDamage(-1)
    .rarity('rare')
    .tooltip("les chaussures les plus glissantes du monde")
    .tier('mayor')


})