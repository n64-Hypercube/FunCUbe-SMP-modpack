StartupEvents.registry('item', e => {
    e.create('mayor_jacket')
    .displayName('veston du maire')
    .maxDamage(-1)
    .rarity('legendary')
    .tooltip("le veston du costume d'iron man")
    .tier('mayor_clothes')

    e.create('mayor_topper')
    .displayName('haut-de-forme du maire')
    .maxDamage(-1)
    .rarity('legendary')
    .tooltip("le chapeau le plus classe (ringard) du monde")
    .tier('mayor_clothes')

    e.create('mayor_trousers')
    .displayName('pantalon du maire')
    .maxDamage(-1)
    .rarity('legendary')
    .tooltip("la dernière pièce du MIB")
    .tier('mayor_clothes')

    e.create("mayor's_formal_shoes")
    .displayName('chaussures classe du maire')
    .maxDamage(-1)
    .rarity('legendary')
    .tooltip("les chaussures les plus glissantes du monde")
    .tier('mayor_clothes')



})