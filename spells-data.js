/* Spell catalog: Sorcerer, Warlock, Hexblade and wizard cantrips (PHB, Xanathar's, Tasha's).
   Descriptions are short summaries, not the book text: check the book for the full rules.
   Fields: name|level|school|cast|range|components|duration|lists|summary
   cast: a = 1 action, b = 1 bonus action, r = 1 reaction. duration: C:... = concentration.
   lists: S Sorcerer, W Warlock, H Hexblade expanded, E wizard cantrip (High Elf). */
window.SPELL_DB=`
Acid Splash|0|Con|a|60 ft|V,S|Instantaneous|SE|One creature, or two within 5 ft of each other: DEX save or 1d6 acid damage.
Blade Ward|0|Abj|a|Self|V,S|1 round|SWE|Until the end of your next turn, resistance to bludgeoning, piercing and slashing damage from weapon attacks.
Booming Blade|0|Evo|a|Self (5 ft radius)|S,M (weapon worth 1 sp)|1 round|SWE|Melee weapon attack; on a hit the target is sheathed in booming energy and takes thunder damage if it willingly moves 5 ft or more.
Chill Touch|0|Nec|a|120 ft|V,S|1 round|SWE|Ranged spell attack, 1d8 necrotic; target can't regain HP until your next turn (undead also has disadvantage on attacks against you).
Control Flames|0|Trn|a|60 ft|S|Instantaneous or 1 hour|SE|Expand, douse, light or recolor a nonmagical flame in a 5-ft cube, or make shapes in it.
Create Bonfire|0|Con|a|60 ft|V,S|C:1 minute|SWE|5-ft-cube bonfire; creatures in it or entering it take 1d8 fire (DEX save negates).
Dancing Lights|0|Evo|a|120 ft|V,S,M (phosphorus or wychwood)|C:1 minute|SE|Up to four torch-sized lights that you can move 60 ft as a bonus action.
Eldritch Blast|0|Evo|a|120 ft|V,S|Instantaneous|W|Ranged spell attack, 1d10 force; more beams at levels 5, 11 and 17.
Fire Bolt|0|Evo|a|120 ft|V,S|Instantaneous|SE|Ranged spell attack, 1d10 fire; ignites unattended flammable objects.
Friends|0|Enc|a|Self|S,M (makeup)|C:1 minute|SWE|Advantage on CHA checks against one creature that is not hostile to you; it becomes hostile and knows afterward.
Frostbite|0|Evo|a|60 ft|V,S|Instantaneous|SWE|CON save or 1d6 cold damage and disadvantage on its next weapon attack roll.
Green-Flame Blade|0|Evo|a|Self (5 ft radius)|S,M (weapon worth 1 sp)|Instantaneous|SWE|Melee weapon attack; on a hit green fire leaps to another creature within 5 ft of the target for damage equal to your spellcasting modifier.
Gust|0|Trn|a|30 ft|V,S|Instantaneous|SE|Push a Medium or smaller creature 5 ft (STR save), push an object, or create a harmless breeze.
Infestation|0|Con|a|30 ft|V,S,M (a living flea)|Instantaneous|SWE|CON save or 1d6 poison damage and the target moves 5 ft in a random direction.
Light|0|Evo|a|Touch|V,M (firefly or phosphorescent moss)|1 hour|SE|One object sheds bright light in a 20-ft radius (plus 20 ft dim).
Lightning Lure|0|Evo|a|Self (15 ft radius)|V|Instantaneous|SWE|STR save or pulled up to 10 ft toward you; if it ends within 5 ft it takes 1d8 lightning.
Mage Hand|0|Con|a|30 ft|V,S|1 minute|SWE|Spectral hand that manipulates objects up to 10 lb; no attacks.
Magic Stone|0|Trn|b|Touch|V,S|1 minute|W|Imbue up to three pebbles; thrown or slung they use your spellcasting modifier and deal 1d6 + modifier bludgeoning.
Mending|0|Trn|1 minute|Touch|V,S,M (two lodestones)|Instantaneous|SE|Repair a single break or tear of 1 ft or less in an object.
Message|0|Trn|a|120 ft|V,S,M (copper wire)|1 round|SE|Whisper to a creature; only it hears and can answer.
Mind Sliver|0|Enc|a|60 ft|V|1 round|SWE|INT save or 1d6 psychic damage and subtract 1d4 from its next saving throw.
Minor Illusion|0|Ill|a|30 ft|S,M (fleece)|1 minute|SWE|Create a sound or an image of an object in a 5-ft cube; Investigation vs your spell save DC reveals it.
Mold Earth|0|Trn|a|30 ft|S|Instantaneous or 1 hour|SE|Excavate or shape loose earth in a 5-ft cube, or color or texture it.
Poison Spray|0|Con|a|10 ft|V,S|Instantaneous|SWE|CON save or 1d12 poison damage.
Prestidigitation|0|Trn|a|10 ft|V,S|1 hour|SWE|Minor magical tricks: sensory effects, light or snuff a flame, clean, soil, chill, warm, flavor, mark or make a small trinket.
Ray of Frost|0|Evo|a|60 ft|V,S|Instantaneous|SE|Ranged spell attack, 1d8 cold and speed reduced by 10 ft until the start of your next turn.
Shape Water|0|Trn|a|30 ft|S|Instantaneous or 1 hour|SE|Move, shape, recolor or freeze water in a 5-ft cube.
Shocking Grasp|0|Evo|a|Touch|V,S|Instantaneous|SE|Melee spell attack (advantage against metal armor), 1d8 lightning; target can't take reactions until its next turn.
Sword Burst|0|Con|a|Self (5 ft radius)|V|Instantaneous|SWE|Creatures within 5 ft make a DEX save or take 1d6 force damage.
Thunderclap|0|Evo|a|Self (5 ft radius)|S|Instantaneous|SWE|Creatures within 5 ft make a CON save or take 1d6 thunder damage; audible to 100 ft.
Toll the Dead|0|Nec|a|60 ft|V,S|Instantaneous|WE|WIS save or 1d8 necrotic damage (1d12 if the target is missing hit points).
True Strike|0|Div|a|30 ft|S|C:1 round|SWE|Advantage on your first attack roll against the target on your next turn.
Absorb Elements|1|Abj|r|Self|S|1 round|S|When you take acid, cold, fire, lightning or thunder damage: resistance to it, and your next melee hit deals +1d6 of that type.
Armor of Agathys|1|Abj|a|Self|V,S,M (cup of water)|1 hour|W|5 temporary HP; while you have them, melee attackers take 5 cold damage. Scales with slot (5 per slot level).
Arms of Hadar|1|Con|a|Self (10 ft radius)|V,S|Instantaneous|W|STR save or 2d6 necrotic and no reactions; half damage on success. +1d6 per slot level.
Burning Hands|1|Evo|a|Self (15 ft cone)|V,S|Instantaneous|S|DEX save or 3d6 fire damage (half on success); ignites flammable objects. +1d6 per slot level.
Catapult|1|Trn|a|60 ft|S|Instantaneous|S|Hurl a 1 to 5 lb object 90 ft; DEX save or 3d8 bludgeoning to a creature in its path. +1d8 and +5 lb per slot level.
Cause Fear|1|Nec|a|60 ft|V|C:1 minute|W|WIS save or frightened (repeat each turn); no effect on undead or constructs. One extra target per slot level.
Charm Person|1|Enc|a|30 ft|V,S|1 hour|SW|WIS save (advantage if fighting you) or charmed by you; it knows afterward. One extra target per slot level.
Chaos Bolt|1|Evo|a|120 ft|V,S|Instantaneous|S|Ranged spell attack, 2d8 + 1d6 damage of a type set by the d8s; matching dice make it leap to another target.
Chromatic Orb|1|Evo|a|90 ft|V,S,M (diamond worth 50 gp)|Instantaneous|S|Ranged spell attack, 3d8 damage of your choice (acid, cold, fire, lightning, poison, thunder). +1d8 per slot level.
Color Spray|1|Ill|a|Self (15 ft cone)|V,S,M (colored powder or wax)|1 round|S|Roll 6d10: blind creatures in the cone, lowest HP first, up to that total of hit points. +2d10 per slot level.
Comprehend Languages|1|Div|a|Self|V,S,M (pinch of soot and salt)|1 hour|SW|Understand any spoken language and read any written one you touch. Ritual.
Detect Magic|1|Div|a|Self|V,S|C:10 minutes|S|Sense magic within 30 ft and see its aura and school with an action. Ritual.
Disguise Self|1|Ill|a|Self|V,S|1 hour|S|Change your appearance; physical inspection or an Investigation check vs your DC reveals it.
Earth Tremor|1|Evo|a|10 ft|V,S|Instantaneous|S|Creatures within 10 ft: DEX save or 1d6 bludgeoning and knocked prone; the ground becomes difficult terrain. +1d6 per slot level.
Expeditious Retreat|1|Trn|b|Self|V,S|C:10 minutes|SW|Take the Dash action as a bonus action each turn.
False Life|1|Nec|a|Self|V,S,M (alcohol or distilled spirits)|1 hour|S|Gain 1d4 + 4 temporary hit points. +5 per slot level.
Feather Fall|1|Trn|r|60 ft|V,M (feather)|1 minute|S|Up to five falling creatures descend 60 ft per round and take no fall damage.
Fog Cloud|1|Con|a|120 ft|V,S|C:1 hour|S|20-ft-radius sphere of fog that heavily obscures the area. +20 ft radius per slot level.
Hellish Rebuke|1|Evo|r|60 ft|V,S|Instantaneous|W|When damaged by a creature you see: DEX save or 2d10 fire damage (half on success). +1d10 per slot level.
Hex|1|Ench|b|90 ft|V,S,M (eye of a newt)|C:1 hour|W|Curse a creature: +1d6 necrotic on your hits, and disadvantage on its checks with one ability of your choice.
Ice Knife|1|Con|a|60 ft|S,M (drop of water or ice)|Instantaneous|S|Ranged spell attack 1d10 piercing, then DEX save for 2d6 cold to the target and creatures within 5 ft. +1d6 per slot level.
Illusory Script|1|Ill|1 minute|Touch|S,M (lead-based ink worth 10 gp)|10 days|W|Write text that only chosen readers can read; others see gibberish or a different message. Ritual.
Jump|1|Trn|a|Touch|V,S,M (grasshopper hind leg)|1 minute|S|Target's jump distance is tripled.
Mage Armor|1|Abj|a|Touch|V,S,M (cured leather)|8 hours|S|Willing creature without armor has AC 13 + DEX modifier.
Magic Missile|1|Evo|a|120 ft|V,S|Instantaneous|S|Three darts of 1d4 + 1 force damage that always hit. One extra dart per slot level.
Protection from Evil and Good|1|Abj|a|Touch|V,S,M (holy water or powdered silver and iron)|C:10 minutes|W|Aberrations, celestials, elementals, fey, fiends and undead have disadvantage to attack the target and can't charm, frighten or possess it.
Ray of Sickness|1|Nec|a|60 ft|V,S|Instantaneous|S|Ranged spell attack, 2d8 poison damage and CON save or poisoned until the end of your next turn. +1d8 per slot level.
Shield|1|Abj|r|Self|V,S|1 round|SH|Reaction when hit or targeted by magic missile: +5 AC until your next turn and no damage from magic missile.
Silent Image|1|Ill|a|60 ft|V,S,M (fleece)|C:10 minutes|S|Image of an object, creature or phenomenon in a 15-ft cube that you can move; no sound or smell.
Sleep|1|Enc|a|90 ft|V,S,M (sand, rose petals or a cricket)|1 minute|S|Roll 5d8: creatures within 20 ft of a point fall unconscious in ascending HP order, up to that total. +2d8 per slot level.
Tasha's Caustic Brew|1|Evo|a|Self (30 ft line)|V,S,M (rotten egg or skunk cabbage)|C:1 minute|S|DEX save or covered in acid, taking 2d4 acid damage at the start of each of its turns until it uses an action to scrape it off. +2d4 per slot level.
Thunderwave|1|Evo|a|Self (15 ft cube)|V,S|Instantaneous|S|CON save or 2d8 thunder damage and pushed 10 ft (half damage and no push on success); audible to 300 ft. +1d8 per slot level.
Unseen Servant|1|Con|a|60 ft|V,S,M (string and wood)|1 hour|W|Invisible, mindless force that performs simple tasks for you. Ritual.
Witch Bolt|1|Evo|a|30 ft|V,S,M (twig from a lightning-struck tree)|C:1 minute|SW|Ranged spell attack 1d12 lightning, then each turn you can use an action to deal 1d12 automatically. +1d12 per slot level.
Wrathful Smite|1|Evo|b|Self|V|C:1 minute|H|Next melee weapon hit deals +1d6 psychic and WIS save or frightened.
Aganazzar's Scorcher|2|Evo|a|30 ft|V,S,M (red dragon scale)|Instantaneous|S|5-ft-wide, 30-ft-long line: DEX save or 3d8 fire damage (half on success). +1d8 per slot level.
Alter Self|2|Trn|a|Self|V,S|C:1 hour|S|Aquatic adaptation, change appearance, or grow natural weapons (1d6 unarmed strikes, magical).
Blindness/Deafness|2|Nec|a|30 ft|V|1 minute|S|CON save or blinded or deafened (repeat save each turn). One extra target per slot level above 2.
Blur|2|Ill|a|Self|V|C:1 minute|SH|Attack rolls against you have disadvantage (not against creatures with blindsight or that ignore illusions).
Cloud of Daggers|2|Con|a|60 ft|V,S,M (sliver of glass)|C:1 minute|SW|5-ft cube of spinning daggers: 4d4 slashing to creatures that enter or start there. +2d4 per slot level.
Crown of Madness|2|Enc|a|120 ft|V,S|C:1 minute|SW|WIS save or charmed; it must attack a creature you choose within its reach (repeat save each turn).
Darkness|2|Evo|a|60 ft|V,M (bat fur and pitch)|C:10 minutes|SW|15-ft-radius sphere of magical darkness that darkvision cannot see through.
Darkvision|2|Trn|a|Touch|V,S,M (dried carrot or agate)|8 hours|S|Willing creature gains darkvision 60 ft.
Detect Thoughts|2|Div|a|Self|V,S,M (copper piece)|C:1 minute|S|Read the surface thoughts of creatures within 30 ft; probe deeper with a WIS save.
Dragon's Breath|2|Trn|b|Touch|V,S,M (hot pepper)|C:1 minute|S|Target gains a breath weapon: 15-ft cone of 3d6 acid, cold, fire, lightning or poison (DEX save for half). +1d6 per slot level.
Enhance Ability|2|Trn|a|Touch|V,S,M (fur or feather)|C:1 hour|S|Advantage on checks with one ability score plus a related benefit (e.g. Bear's Endurance, Fox's Cunning).
Enlarge/Reduce|2|Trn|a|30 ft|V,S,M (iron powder)|C:1 minute|S|Make a creature or object larger (+1d4 weapon damage, advantage on STR) or smaller (−1d4, disadvantage on STR).
Enthrall|2|Enc|a|60 ft|V,S|1 minute|W|WIS save or disadvantage on Perception against creatures other than you for the duration.
Gust of Wind|2|Evo|a|Self (60 ft line)|V,S,M (legume seed)|C:1 minute|S|60-ft-long line of strong wind: STR save or pushed 15 ft; it hampers flying and snuffs flames.
Hold Person|2|Enc|a|60 ft|V,S,M (iron)|C:1 minute|SW|WIS save or a humanoid is paralyzed (repeat save each turn). One extra target per slot level.
Invisibility|2|Ill|a|Touch|V,S,M (eyelash in gum arabic)|C:1 hour|SW|Target is invisible until it attacks or casts a spell. One extra target per slot level.
Knock|2|Trn|a|60 ft|V|Instantaneous|S|Open a locked or stuck door, chest or shackles; the knock is audible within 300 ft.
Levitate|2|Trn|a|60 ft|V,S,M (leather loop or wire)|C:10 minutes|S|One creature or loose object up to 500 lb rises 20 ft and can move 20 ft per turn.
Mind Spike|2|Div|a|60 ft|S|C:1 hour|SW|WIS save or 3d8 psychic damage (half on success) and you know its location while you concentrate. +1d8 per slot level.
Mirror Image|2|Ill|a|Self|V,S|1 minute|SW|Three illusory duplicates make attacks against you miss on a roll; each hit destroys one.
Misty Step|2|Con|b|Self|V|Instantaneous|SW|Teleport up to 30 ft to an unoccupied space you can see.
Phantasmal Force|2|Ill|a|60 ft|V,S,M (fleece)|C:1 minute|S|INT save or a creature believes in an illusion and takes 1d6 psychic damage each turn while it applies.
Ray of Enfeeblement|2|Nec|a|60 ft|V,S|C:1 minute|W|Ranged spell attack; the target deals half damage with STR-based weapon attacks (CON save each turn to end).
Scorching Ray|2|Evo|a|120 ft|V,S|Instantaneous|S|Three rays, each a ranged spell attack for 2d6 fire damage. One extra ray per slot level.
See Invisibility|2|Div|a|Self|V,S,M (talc and silver powder)|1 hour|S|See invisible creatures and objects, and into the Ethereal Plane.
Shadow Blade|2|Ill|b|Self|V,S|C:1 minute|SW|Sword of solidified shadow: finesse, light, thrown (20/60), 2d8 psychic; advantage in dim light or darkness. Damage grows with slot level.
Shatter|2|Evo|a|60 ft|V,S,M (mica chip)|Instantaneous|SW|10-ft-radius sphere: CON save or 3d8 thunder damage (half on success); inorganic creatures have disadvantage. +1d8 per slot level.
Spider Climb|2|Trn|a|Touch|V,S,M (drop of bitumen and a spider)|C:1 hour|SW|Climb walls and ceilings with hands free; climbing speed equal to your walking speed.
Suggestion|2|Enc|a|30 ft|V,M (snake tongue and honey)|C:8 hours|SW|WIS save or a creature pursues a reasonable course of action you describe.
Warding Wind|2|Evo|a|Self|V|C:10 minutes|S|10-ft-radius wind around you: deafens, extinguishes flames, disperses gas and difficult terrain for ranged attackers.
Web|2|Con|a|60 ft|V,S,M (spiderweb)|C:1 hour|S|20-ft cube of webbing: DEX save or restrained (STR check to break free); webs are flammable.
Blink|3|Trn|a|Self|V,S|1 minute|SH|At the end of each turn roll d20: on 11 or higher you vanish to the Ethereal Plane and return at the start of your next turn.
Clairvoyance|3|Div|10 minutes|1 mile|V,S,M (focus worth 100 gp)|C:10 minutes|S|Create an invisible sensor to see or hear at a familiar or obvious location.
Counterspell|3|Abj|r|60 ft|S|Instantaneous|SW|Interrupt a spell of 3rd level or lower; higher levels need an ability check (DC 10 + spell level).
Daylight|3|Evo|a|60 ft|V,S|1 hour|S|60-ft-radius sphere of bright light (plus 60 ft dim); dispels darkness of lower level.
Dispel Magic|3|Abj|a|120 ft|V,S|Instantaneous|SW|End spells of 3rd level or lower on a target; higher levels need an ability check (DC 10 + spell level).
Enemies Abound|3|Enc|a|120 ft|V,S|C:1 minute|SW|INT save or a creature believes everyone is its enemy and attacks a random creature in reach or range.
Erupting Earth|3|Trn|a|120 ft|V,S,M (piece of obsidian)|Instantaneous|S|20-ft cube: DEX save or 3d12 bludgeoning (half on success); the ground becomes difficult terrain. +1d12 per slot level.
Elemental Weapon|3|Trn|a|Touch|V,S|C:1 hour|H|Nonmagical weapon becomes magical with +1 to attack and +1d4 acid, cold, fire, lightning or thunder damage; bonus improves at higher slots.
Fear|3|Ill|a|Self (30 ft cone)|V,S,M (white feather or a hen's heart)|C:1 minute|SW|WIS save or frightened; creatures must drop what they hold and flee.
Fireball|3|Evo|a|150 ft|V,S,M (bat guano and sulfur)|Instantaneous|S|20-ft-radius sphere: DEX save or 8d6 fire damage (half on success). +1d6 per slot level.
Flame Arrows|3|Trn|a|Touch|V,S|C:1 hour|S|Imbue up to 12 pieces of ammunition: each deals an extra 1d6 fire damage on a hit.
Fly|3|Trn|a|Touch|V,S,M (wing feather)|C:10 minutes|SW|Target gains a flying speed of 60 ft. One extra target per slot level.
Gaseous Form|3|Trn|a|Touch|V,S,M (gauze and smoke)|C:1 hour|SW|Willing creature becomes a misty cloud with fly speed 10 ft, resistance to nonmagical damage and advantage on STR, DEX and CON saves.
Haste|3|Trn|a|30 ft|V,S,M (licorice root shaving)|C:1 minute|S|Speed doubled, +2 AC, advantage on DEX saves and an extra action (limited); the target is lethargic when it ends.
Hunger of Hadar|3|Con|a|150 ft|V,S,M (pickled octopus tentacle)|C:1 minute|W|20-ft-radius void: blinds, difficult terrain, 2d6 cold at the start of turns and 2d6 acid at the end.
Hypnotic Pattern|3|Ill|a|120 ft|S,M (glowing stick of incense or crystal vial)|C:1 minute|SW|30-ft cube: WIS save or charmed and incapacitated with speed 0.
Intellect Fortress|3|Abj|a|30 ft|V|C:1 hour|SW|Target gains resistance to psychic damage and advantage on INT, WIS and CHA saves. One extra target per slot level.
Lightning Bolt|3|Evo|a|Self (100 ft line)|V,S,M (fur and an amber rod)|Instantaneous|S|5-ft-wide, 100-ft line: DEX save or 8d6 lightning damage (half on success). +1d6 per slot level.
Magic Circle|3|Abj|1 minute|10 ft|V,S,M (holy water or silver and iron powder worth 100 gp)|1 hour|W|10-ft-radius, 20-ft-tall cylinder keeps out celestials, elementals, fey, fiends or undead (or traps them).
Major Image|3|Ill|a|120 ft|V,S,M (fleece)|C:10 minutes|SW|Image of an object, creature or phenomenon in a 20-ft cube with sound, smell and temperature.
Melf's Minute Meteors|3|Evo|a|Self|V,S,M (niter, sulfur and pine tar)|C:10 minutes|S|Six meteors you launch two at a time as a bonus action: 20-ft sphere, DEX save or 2d6 fire damage each. Two extra meteors per slot level.
Protection from Energy|3|Abj|a|Touch|V,S|C:1 hour|S|Willing creature gains resistance to acid, cold, fire, lightning or thunder damage (your choice).
Remove Curse|3|Abj|a|Touch|V,S|Instantaneous|W|Ends all curses affecting a creature or object; a cursed item's attunement can be broken.
Sleet Storm|3|Con|a|150 ft|V,S,M (dust and water)|C:1 minute|S|40-ft-radius, 20-ft-tall cylinder: heavily obscured, extinguishes flames, difficult terrain, DEX save or prone, concentration checks.
Slow|3|Trn|a|120 ft|V,S,M (drop of molasses)|C:1 minute|S|Up to six creatures: WIS save or −2 AC and DEX saves, speed halved, one action or bonus action and no reactions.
Stinking Cloud|3|Con|a|90 ft|V,S,M (rotten egg or skunk cabbage)|C:1 minute|S|20-ft-radius gas cloud: CON save or the creature loses its action retching.
Summon Lesser Demons|3|Con|a|60 ft|V,S,M (blood-stained vial)|C:1 hour|W|Summon demons (by CR) that are hostile to everyone; you don't control them.
Thunder Step|3|Con|a|90 ft|V|Instantaneous|SW|Teleport up to 90 ft with a willing creature; creatures within 10 ft of where you left take 3d10 thunder damage. +1d10 per slot level.
Tongues|3|Div|a|Touch|V,M (clay ziggurat model)|1 hour|SW|Target understands any language it hears and everyone understands it.
Vampiric Touch|3|Nec|a|Self|V,S|C:1 minute|W|Melee spell attack 3d6 necrotic and you regain half the damage dealt; repeat as an action each turn. +1d6 per slot level.
Water Breathing|3|Trn|a|30 ft|V,S,M (reed or straw)|24 hours|S|Up to ten willing creatures can breathe underwater. Ritual.
Water Walk|3|Trn|a|30 ft|V,S,M (cork)|1 hour|S|Up to ten creatures can walk on liquid surfaces. Ritual.
Banishing Smite|5|Abj|b|Self|V|C:1 minute|H|Your next weapon hit deals +5d10 force; under 50 HP the target is banished.
Banishment|4|Abj|a|60 ft|V,S,M (an item distasteful to the target)|C:1 minute|SW|CHA save or banished to another plane; permanent if native to another plane and you concentrate for the full minute. One extra target per slot level.
Blight|4|Nec|a|30 ft|V,S|Instantaneous|SW|CON save or 8d8 necrotic damage (half on success); plants take max damage. +1d8 per slot level.
Branding Smite|2|Div|b|Self|V|C:1 minute|H|Your next weapon hit deals +2d6 radiant and the target glows and can't turn invisible.
Charm Monster|4|Enc|a|30 ft|V,S|1 hour|SW|WIS save (advantage if fighting) or any creature is charmed by you. One extra target per slot level.
Confusion|4|Enc|a|90 ft|V,S,M (three nut shells)|C:1 minute|S|10-ft-radius sphere: WIS save or creatures act randomly each turn (repeat save at end of turns).
Dimension Door|4|Con|a|500 ft|V|Instantaneous|SW|Teleport yourself, and one willing creature, up to 500 ft to a place you can see or visualize.
Dominate Beast|4|Enc|a|60 ft|V,S|C:1 minute|S|WIS save or a beast is charmed and obeys your commands.
Greater Invisibility|4|Ill|a|Touch|V,S|C:1 minute|S|Target is invisible, even while it attacks or casts spells.
Hallucinatory Terrain|4|Ill|10 minutes|300 ft|V,S,M (mushroom, stimulant and pine needle)|24 hours|W|Make natural terrain in a 150-ft cube look, sound and smell like different terrain.
Ice Storm|4|Evo|a|300 ft|V,S,M (pinch of dust and a few drops of water)|Instantaneous|S|20-ft-radius, 40-ft-high cylinder: DEX save or 2d8 bludgeoning plus 4d6 cold (half on success); difficult terrain.
Phantasmal Killer|4|Ill|a|120 ft|V,S|C:1 minute|H|WIS save or frightened and takes 4d10 psychic damage each turn it can see you (repeat save at end of turns).
Polymorph|4|Trn|a|60 ft|V,S,M (caterpillar cocoon)|C:1 hour|S|WIS save (unwilling) or a creature becomes a beast of equal or lower CR.
Raulothim's Psychic Lance|4|Enc|a|120 ft|V|Instantaneous|SW|INT save or 7d6 psychic damage (half on success) and incapacitated until the end of your next turn.
Shadow of Moil|4|Nec|a|Self|V,S,M (undead eyeball in a gem worth 150 gp)|C:1 minute|W|Heavily obscured shadows: attackers have disadvantage, necrotic damage reflected, dim-light darkness.
Sickening Radiance|4|Evo|a|120 ft|V,S|C:10 minutes|SW|30-ft radius: CON save or 4d10 radiant damage and a level of exhaustion; light you can't dim.
Staggering Smite|4|Evo|b|Self|V|C:1 minute|H|Your next weapon hit deals +4d6 psychic and WIS save or disadvantage on attacks, checks and no reactions.
Stoneskin|4|Abj|a|Touch|V,S,M (diamond dust worth 100 gp)|C:1 hour|S|Willing creature gains resistance to nonmagical bludgeoning, piercing and slashing damage.
Summon Aberration|4|Con|a|90 ft|V,S,M (pickled tentacle and eyeball in a jar worth 400 gp)|C:1 hour|W|Summon an aberrant spirit that fights for you and obeys your commands.
Vitriolic Sphere|4|Evo|a|150 ft|V,S,M (drop of giant slug bile)|Instantaneous|S|20-ft-radius sphere: DEX save or 10d4 acid damage (half on success) plus 5d4 acid at the end of its next turn if it failed. +2d4 per slot level.
Wall of Fire|4|Evo|a|120 ft|V,S,M (piece of phosphorus)|C:1 minute|S|Wall up to 60 ft long: DEX save or 5d8 fire damage on one side and the same to creatures that enter or end there. +1d8 per slot level.
Animate Objects|5|Trn|a|120 ft|V,S|C:1 minute|S|Animate up to ten Small objects (or fewer larger ones) that fight for you as a bonus action command.
Cloudkill|5|Con|a|120 ft|V,S|C:10 minutes|S|20-ft-radius fog that moves 10 ft away each turn: CON save or 5d8 poison damage (half on success). +1d8 per slot level.
Cone of Cold|5|Evo|a|Self (60 ft cone)|V,S,M (small crystal or glass cone)|Instantaneous|SH|CON save or 8d8 cold damage (half on success). +1d8 per slot level.
Contact Other Plane|5|Div|1 minute|Self|V|1 minute|W|Ask an otherworldly entity up to five questions; INT save at DC 15 or take 6d6 psychic damage and be insane. Ritual.
Creation|5|Ill|1 minute|30 ft|V,S,M (tiny piece of matter of the same type)|Special|S|Create a nonliving object of vegetable or mineral matter that lasts for a time based on its material.
Dominate Person|5|Enc|a|60 ft|V,S|C:1 minute|S|WIS save or a humanoid is charmed and obeys your commands.
Dream|5|Ill|1 minute|Special|V,S,M (sand, ink and a writing quill)|8 hours|W|Shape a sleeping creature's dream, or give it a nightmare (3d6 psychic damage, no rest benefits).
Enervation|5|Nec|a|60 ft|V,S|C:1 minute|SW|DEX save or 4d8 necrotic damage each turn and you regain half; a successful save ends it. +1d8 per slot level.
Far Step|5|Con|b|Self|V|C:1 minute|SW|Teleport up to 60 ft to a space you can see as a bonus action each turn for the duration.
Hold Monster|5|Enc|a|90 ft|V,S,M (small piece of iron)|C:1 minute|SW|WIS save or any creature is paralyzed (repeat save each turn). One extra target per slot level.
Immolation|5|Evo|a|90 ft|V|C:1 minute|S|DEX save or 8d6 fire damage (half on success); on a failed save the target burns for 4d6 fire per turn until it ends.
Infernal Calling|5|Con|a|90 ft|V,S,M (ruby worth 999 gp)|C:1 hour|W|Summon a devil of CR 6 or lower; it might not obey you if its allegiance is not sealed.
Insect Plague|5|Con|a|300 ft|V,S,M (locusts, a cheese rind or a bit of sugar)|C:10 minutes|S|20-ft-radius swarm of locusts: CON save or 4d10 piercing damage (half on success); difficult terrain, lightly obscured. +1d10 per slot level.
Negative Energy Flood|5|Nec|a|60 ft|V,M (broken bone and a square of black silk)|Instantaneous|W|CON save or 5d12 necrotic damage; a creature killed this way becomes a zombie.
Scrying|5|Div|10 minutes|Self|V,S,M (focus worth 1,000 gp)|C:10 minutes|W|See and hear a creature on the same plane (WIS save modified by knowledge).
Seeming|5|Ill|a|30 ft|V,S|8 hours|S|Change the appearance of any number of creatures you can see; unwilling creatures get a CHA save.
Synaptic Static|5|Enc|a|120 ft|V,S|Instantaneous|SW|20-ft-radius sphere: INT save or 8d6 psychic damage (half on success) and a −1d6 penalty on attacks, checks and concentration for 1 minute.
Telekinesis|5|Trn|a|60 ft|V,S|C:10 minutes|S|Move a creature (contested STR) or an object up to 1,000 lb, 30 ft per turn.
Teleportation Circle|5|Con|1 minute|10 ft|V,M (rare chalks and inks worth 50 gp)|1 round|S|Draw a circle that links to a permanent teleportation circle you know.
Wall of Light|5|Evo|a|120 ft|V,S,M (hand mirror)|C:10 minutes|W|Wall of light: bright light, 4d8 radiant damage and blindness; you can launch a ray as an action.
Wall of Stone|5|Evo|a|120 ft|V,S,M (cube of granite)|C:10 minutes|S|Create a stone wall of ten 10-ft by 10-ft panels (6 in thick); it can be made permanent.
Arcane Gate|6|Con|a|500 ft|V,S|C:10 minutes|SW|Create two linked teleportation portals within range, 10 ft apart.
Chain Lightning|6|Evo|a|150 ft|V,S,M (fur, amber, glass and silver rods)|Instantaneous|S|Bolt of 10d8 lightning to a target and up to three others within 30 ft (DEX save for half).
Circle of Death|6|Nec|a|150 ft|V,S,M (black pearl powder worth 500 gp)|Instantaneous|SW|60-ft-radius sphere: CON save or 8d6 necrotic damage (half on success). +2d6 per slot level.
Create Undead|6|Nec|1 minute|10 ft|V,S,M (clay pot of grave dirt, a black onyx gem worth 150 gp)|Instantaneous|W|Raise up to three ghouls from corpses (night only); you control them for 24 hours.
Disintegrate|6|Trn|a|60 ft|V,S,M (lodestone and dust)|Instantaneous|S|DEX save or 10d6 + 40 force damage; a creature reduced to 0 HP is reduced to ash.
Eyebite|6|Nec|a|Self|V,S|C:1 minute|SW|Each turn a creature within 60 ft you choose makes a WIS save or is asleep, panicked or sickened.
Flesh to Stone|6|Trn|a|60 ft|V,S,M (pinch of lime, water and earth)|C:1 minute|W|CON save (repeated each turn): restrained and gradually petrified; permanent after three failures.
Globe of Invulnerability|6|Abj|a|Self (10 ft radius)|V,S,M (glass or crystal bead)|C:1 minute|S|Spells of 5th level or lower can't affect anything inside the globe. Higher slots raise the limit.
Investiture of Flame|6|Trn|a|Self|V,S|C:10 minutes|SW|Immune to fire, resistance to cold; creatures within 5 ft take 1d10 fire damage, and you can use an action for a 15-ft line of 4d8 fire.
Investiture of Ice|6|Trn|a|Self|V,S|C:10 minutes|SW|Immune to cold, resistance to fire; difficult terrain around you; an action for a 15-ft cone of 4d6 cold.
Investiture of Stone|6|Trn|a|Self|V,S|C:10 minutes|SW|Resistance to nonmagical bludgeoning, piercing and slashing damage; an action to shake the earth within 15 ft.
Investiture of Wind|6|Trn|a|Self|V,S|C:10 minutes|SW|Ranged attacks against you have disadvantage, 60-ft fly speed; an action for a 15-ft cube of 2d10 bludgeoning.
Mass Suggestion|6|Enc|a|60 ft|V,M (snake tongue and honey)|24 hours|SW|Up to twelve creatures: WIS save or they follow a reasonable course of action you suggest.
Mental Prison|6|Ill|a|60 ft|S|C:1 minute|SW|INT save or 5d10 psychic damage and restrained by an illusory cell; 10d10 more if it leaves it.
Move Earth|6|Trn|a|120 ft|V,S,M (iron blade and soil)|C:2 hours|S|Reshape terrain in a 40-ft square by up to 10 ft over time.
Otherworldly Guise|6|Trn|b|Self|V,S,M (an object engraved with a symbol of the Outer Planes worth 500 gp)|C:1 minute|SW|Gain fly speed 40 ft, resistance to radiant and necrotic (or fire/poison), +2 AC, immunity to charm and magic weapon attacks; use your spellcasting for attacks.
Scatter|6|Con|a|30 ft|V|Instantaneous|SW|Teleport up to five creatures (WIS save for unwilling) to unoccupied spaces within 120 ft.
Soul Cage|6|Nec|r|60 ft|V,S,M (tiny silver cage worth 100 gp)|8 hours|W|When a humanoid dies within 60 ft, trap its soul to gain several benefits for 8 hours.
Sunbeam|6|Evo|a|Self (60 ft line)|V,S,M (magnifying glass)|C:1 minute|S|60-ft line: CON save or 6d8 radiant damage and blinded; repeat as an action on later turns.
True Seeing|6|Div|a|Touch|V,S,M (ointment worth 25 gp)|1 hour|SW|Target gains truesight, sees invisible things and through illusions up to 120 ft.
Crown of Stars|7|Evo|a|Self|V,S|1 hour|S|Seven motes of light orbit you; use a bonus action to hurl one as a ranged spell attack for 4d12 radiant.
Delayed Blast Fireball|7|Evo|a|150 ft|V,S,M (ball of bat guano and sulfur)|C:1 minute|S|Bead that explodes in a 20-ft radius for 12d6 fire (DEX save for half); damage grows each turn you concentrate.
Etherealness|7|Trn|a|Self|V,S|Up to 8 hours|SW|Step into the Ethereal Plane for up to 8 hours. Two extra creatures per slot level above 7.
Finger of Death|7|Nec|a|60 ft|V,S|Instantaneous|SW|CON save or 7d8 + 30 necrotic damage (half on success); a humanoid killed becomes a zombie.
Fire Storm|7|Evo|a|150 ft|V,S|Instantaneous|S|Up to ten 10-ft cubes: DEX save or 7d10 fire damage (half on success).
Forcecage|7|Evo|a|60 ft|V,S,M (ruby dust worth 1,500 gp)|1 hour|W|Invisible cage or box of force that traps anything inside and blocks teleportation.
Plane Shift|7|Con|a|Touch|V,S,M (forked metal rod worth 250 gp)|Instantaneous|SW|Travel to another plane or banish an unwilling creature (CHA save).
Power Word Pain|7|Enc|a|60 ft|V|Instantaneous|SW|A creature with 100 HP or fewer takes pain: speed 10 ft, disadvantage on attacks, checks and saves, and concentration problems; CON save repeated each turn.
Prismatic Spray|7|Evo|a|Self (60 ft cone)|V,S|Instantaneous|S|Eight rays; each creature rolls a d8 for the color that affects it (damage, restraint, petrification or banishment).
Reverse Gravity|7|Trn|a|100 ft|V,S,M (lodestone and iron filings)|C:1 minute|S|50-ft-radius, 100-ft-high cylinder where gravity is reversed.
Teleport|7|Con|a|10 ft|V|Instantaneous|S|Teleport yourself and up to eight others to a known location; accuracy depends on how well you know the destination.
Whirlwind|7|Evo|a|300 ft|V,M (piece of straw)|C:1 minute|S|10-ft-radius, 30-ft-high cyclone: DEX save or 10d6 bludgeoning damage; it may carry creatures.
Abi-Dalzim's Horrid Wilting|8|Nec|a|150 ft|V,S,M (a bit of sponge)|Instantaneous|S|30-ft cube: CON save or 12d8 necrotic damage (half on success); plants and water elementals take more.
Demiplane|8|Con|b|60 ft|S|1 hour|W|Create a door to a 30-ft-cube extradimensional room.
Dominate Monster|8|Enc|a|60 ft|V,S|C:1 hour|SW|WIS save or any creature is charmed and obeys your commands.
Earthquake|8|Evo|a|500 ft|V,S,M (pinch of dirt, a rock and clay)|C:1 minute|S|100-ft-radius tremor: difficult terrain, concentration damage, fissures, structures can collapse.
Feeblemind|8|Enc|a|150 ft|V,S,M (clay, crystal, glass and mineral spheres)|Instantaneous|W|INT save or 4d6 psychic damage and INT and CHA become 1.
Glibness|8|Trn|a|Self|V|1 hour|W|Your CHA checks treat a d20 roll under 15 as 15 and magic can't detect your lies.
Incendiary Cloud|8|Con|a|150 ft|V,S|C:1 minute|S|20-ft-radius cloud of smoke and embers: DEX save or 10d8 fire damage (half on success) each turn.
Maddening Darkness|8|Evo|a|150 ft|V,M (drop of pitch and a piece of coal)|C:10 minutes|W|60-ft-radius darkness that lights can't pierce; creatures in it take 8d8 psychic damage each turn (WIS save for half).
Power Word Stun|8|Enc|a|60 ft|V|Instantaneous|SW|A creature with 150 HP or fewer is stunned; CON save at the end of each of its turns.
Sunburst|8|Evo|a|150 ft|V,S,M (fire and a piece of sunstone)|Instantaneous|S|60-ft-radius sphere: CON save or 12d6 radiant damage and blinded (half damage on success).
Astral Projection|9|Nec|1 hour|10 ft|V,S,M (a jacinth worth 1,000 gp and a silver bar worth 100 gp per target)|Special|W|Project yourself and up to eight others to the Astral Plane.
Blade of Disaster|9|Con|b|60 ft|V,S|C:1 minute|SW|A tiny planar rift that you command: two attacks per turn (4d12 force each; crits on 18 or higher).
Foresight|9|Div|1 minute|Touch|V,S,M (hummingbird feather)|8 hours|W|Willing target can't be surprised and has advantage on attacks, checks and saves; attackers have disadvantage.
Gate|9|Con|a|60 ft|V,S,M (diamond worth 5,000 gp)|C:1 minute|SW|Open a portal to a specific place on another plane, or call a named creature through.
Imprisonment|9|Abj|1 minute|30 ft|V,S,M (vellum or a statuette worth 5,000 gp)|Until dispelled|W|WIS save or a creature is imprisoned (burial, chaining, slumber and more) until freed.
Meteor Swarm|9|Evo|a|1 mile|V,S|Instantaneous|S|Four 40-ft-radius blasts: DEX save or 20d6 fire and 20d6 bludgeoning damage (half on success).
Power Word Kill|9|Enc|a|60 ft|V|Instantaneous|SW|A creature with 100 HP or fewer dies.
Psychic Scream|9|Enc|a|90 ft|S|Instantaneous|SW|Up to ten creatures: INT save or 14d6 psychic damage (half on success) and stunned.
Time Stop|9|Trn|a|Self|V|Instantaneous|S|Take 1d4 + 1 extra turns in a row while time stops for others.
True Polymorph|9|Trn|a|30 ft|V,S,M (drop of mercury, gum arabic and smoke)|C:1 hour|S|Transform a creature into a creature, an object into a creature, or the reverse; permanent after concentrating for the full hour.
Wish|9|Con|a|Self|V|Instantaneous|S|The mightiest spell: duplicate any spell of 8th level or lower, or attempt a greater wish with risks.
`;
