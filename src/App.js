const path = require('path')
import React from 'react'
import FontSizeChanger from 'react-font-size-changer'
import Select from 'react-select'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      test: [],
      champList: [],
      champName: ' ',
      fakeName: ' ',
      tempChampQ: ' ',
      tempChampW: ' ',
      tempChampE: ' ',
      tempChampR: ' ',
      allyChampions: [],
      value2: '',
      test2: [],
      champName2: ' ',
      fakeName2: ' ',
      tempChampQe: ' ',
      tempChampWe: ' ',
      tempChampEe: ' ',
      tempChampRe: ' ',
      enemyChampions: [],
      options: [
        { value: `Aatrox`, label: `Aatrox` },
        { value: `Ahri`, label: `Ahri` },
        { value: `Akali`, label: `Akali` },
        { value: `Alistar`, label: `Alistar` },
        { value: `Amumu`, label: `Amumu` },
        { value: `Anivia`, label: `Anivia` },
        { value: `Annie`, label: `Annie` },
        { value: `Aphelios`, label: `Aphelios` },
        { value: `Ashe`, label: `Ashe` },
        { value: `AurelionSol`, label: `Aurelion Sol` },
        { value: `Azir`, label: `Azir` },
        { value: `Bard`, label: `Bard` },
        { value: `Blitzcrank`, label: `Blitzcrank` },
        { value: `Brand`, label: `Brand` },
        { value: `Braum`, label: `Braum` },
        { value: `Caitlyn`, label: `Caitlyn` },
        { value: `Camille`, label: `Camille` },
        { value: `Cassiopeia`, label: `Cassiopeia` },
        { value: `Chogath`, label: `Cho'Gath` },
        { value: `Corki`, label: `Corki` },
        { value: `Darius`, label: `Darius` },
        { value: `Diana`, label: `Diana` },
        { value: `DrMundo`, label: `Dr. Mundo` },
        { value: `Draven`, label: `Draven` },
        { value: `Ekko`, label: `Ekko` },
        { value: `Elise`, label: `Elise` },
        { value: `Evelynn`, label: `Evelynn` },
        { value: `Ezreal`, label: `Ezreal` },
        { value: `Fiddlesticks`, label: `Fiddlesticks` },
        { value: `Fiora`, label: `Fiora` },
        { value: `Fizz`, label: `Fizz` },
        { value: `Galio`, label: `Galio` },
        { value: `Gangplank`, label: `Gangplank` },
        { value: `Garen`, label: `Garen` },
        { value: `Gnar`, label: `Gnar` },
        { value: `Gragas`, label: `Gragas` },
        { value: `Graves`, label: `Graves` },
        { value: `Hecarim`, label: `Hecarim` },
        { value: `Heimerdinger`, label: `Heimerdinger` },
        { value: `Illaoi`, label: `Illaoi` },
        { value: `Irelia`, label: `Irelia` },
        { value: `Ivern`, label: `Ivern` },
        { value: `Janna`, label: `Janna` },
        { value: `JarvanIV`, label: `Jarvan IV` },
        { value: `Jax`, label: `Jax` },
        { value: `Jayce`, label: `Jayce` },
        { value: `Jhin`, label: `Jhin` },
        { value: `Jinx`, label: `Jinx` },
        { value: `Kaisa`, label: `Kai'Sa` },
        { value: `Kalista`, label: `Kalista` },
        { value: `Karma`, label: `Karma` },
        { value: `Karthus`, label: `Karthus` },
        { value: `Kassadin`, label: `Kassadin` },
        { value: `Katarina`, label: `Katarina` },
        { value: `Kayle`, label: `Kayle` },
        { value: `Kayn`, label: `Kayn` },
        { value: `Kennen`, label: `Kennen` },
        { value: `Khazix`, label: `Kha'Zix` },
        { value: `Kindred`, label: `Kindred` },
        { value: `Kled`, label: `Kled` },
        { value: `KogMaw`, label: `Kog'Maw` },
        { value: `LeBlanc`, label: `LeBlanc` },
        { value: `LeeSin`, label: `Lee Sin` },
        { value: `Leona`, label: `Leona` },
        { value: `Lillia`, label: `Lillia` },
        { value: `Lissandra`, label: `Lissandra` },
        { value: `Lucian`, label: `Lucian` },
        { value: `Lulu`, label: `Lulu` },
        { value: `Lux`, label: `Lux` },
        { value: `Malphite`, label: `Malphite` },
        { value: `Malzahar`, label: `Malzahar` },
        { value: `Maokai`, label: `Maokai` },
        { value: `MasterYi`, label: `Master Yi` },
        { value: `MissFortune`, label: `Miss Fortune` },
        { value: `Mordekaiser`, label: `Mordekaiser` },
        { value: `Morgana`, label: `Morgana` },
        { value: `Name`, label: `Name` },
        { value: `Nami`, label: `Nami` },
        { value: `Nasus`, label: `Nasus` },
        { value: `Nautilus`, label: `Nautilus` },
        { value: `Neeko`, label: `Neeko` },
        { value: `Nidalee`, label: `Nidalee` },
        { value: `Nocturne`, label: `Nocturne` },
        { value: `Nunu`, label: `Nunu` },
        { value: `Olaf`, label: `Olaf` },
        { value: `Orianna`, label: `Orianna` },
        { value: `Ornn`, label: `Ornn` },
        { value: `Pantheon`, label: `Pantheon` },
        { value: `Poppy`, label: `Poppy` },
        { value: `Pyke`, label: `Pyke` },
        { value: `Qiyana`, label: `Qiyana` },
        { value: `Quinn`, label: `Quinn` },
        { value: `Rakan`, label: `Rakan` },
        { value: `Rammus`, label: `Rammus` },
        { value: `RekSai`, label: `Rek'Sai` },
        { value: `Renekton`, label: `Renekton` },
        { value: `Rengar`, label: `Rengar` },
        { value: `Riven`, label: `Riven` },
        { value: `Rumble`, label: `Rumble` },
        { value: `Ryze`, label: `Ryze` },
        { value: `Samira`, label: `Samira` },
        { value: `Sejuani`, label: `Sejuani` },
        { value: `Senna`, label: `Senna` },
        { value: `Seraphine`, label: `Seraphine` },
        { value: `Sett`, label: `Sett` },
        { value: `Shaco`, label: `Shaco` },
        { value: `Shen`, label: `Shen` },
        { value: `Shyvana`, label: `Shyvana` },
        { value: `Singed`, label: `Singed` },
        { value: `Sion`, label: `Sion` },
        { value: `Sivir`, label: `Sivir` },
        { value: `Skarner`, label: `Skarner` },
        { value: `Sona`, label: `Sona` },
        { value: `Soraka`, label: `Soraka` },
        { value: `Swain`, label: `Swain` },
        { value: `Sylas`, label: `Sylas` },
        { value: `Syndra`, label: `Syndra` },
        { value: `TahmKench`, label: `Tahm Kench` },
        { value: `Taliyah`, label: `Taliyah` },
        { value: `Talon`, label: `Talon` },
        { value: `Taric`, label: `Taric` },
        { value: `Teemo`, label: `Teemo` },
        { value: `Thresh`, label: `Thresh` },
        { value: `Tristana`, label: `Tristana` },
        { value: `Trundle`, label: `Trundle` },
        { value: `Tryndamere`, label: `Tryndamere` },
        { value: `TwistedFate`, label: `Twisted Fate` },
        { value: `Twitch`, label: `Twitch` },
        { value: `Udyr`, label: `Udyr` },
        { value: `Urgot`, label: `Urgot` },
        { value: `Varus`, label: `Varus` },
        { value: `Vayne`, label: `Vayne` },
        { value: `Veigar`, label: `Veigar` },
        { value: `Velkoz`, label: `Vel'Koz` },
        { value: `Vi`, label: `Vi` },
        { value: `Viktor`, label: `Viktor` },
        { value: `Vladimir`, label: `Vladimir` },
        { value: `Volibear`, label: `Volibear` },
        { value: `Warwick`, label: `Warwick` },
        { value: `Wukong`, label: `Wukong` },
        { value: `Xayah`, label: `Xayah` },
        { value: `Xerath`, label: `Xerath` },
        { value: `XinZhao`, label: `Xin Zhao` },
        { value: `Yasuo`, label: `Yasuo` },
        { value: `Yone`, label: `Yone` },
        { value: `Yorick`, label: `Yorick` },
        { value: `Yuumi`, label: `Yuumi` },
        { value: `Zac`, label: `Zac` },
        { value: `Zed`, label: `Zed` },
        { value: `Ziggs`, label: `Ziggs` },
        { value: `Zilean`, label: `Zilean` },
        { value: `Zoe`, label: `Zoe` },
        { value: `Zyra`, label: `Zyra` }
      ],
      abilites: [
{ name: `Aatrox`, p: `Blood Well`, q: `Dark Flight`, w: `Blood Thirst / Blood Price`, e:`Blades of Torment`, r:`Massacre`},
{ name: `Ahri`, p: `Essence Theft`, q: `Orb of Deception`, w: `Fox-Fire`, e:`Charm`, r:`Spirit Rush`},
{ name: `Akali`, p: `Twin Disciplines`, q: `Mark of the Assassin`, w: `Twilight Shroud`, e:`Crescent Slash`, r:`Shadow Dance`},
{ name: `Alistar`, p: `Triumphant Roar`, q: `Pulverize`, w: `Headbutt`, e:`Trample`, r:`Unbreakable Will`},
{ name: `Amumu`, p: `Cursed Touch`, q: `Bandage Toss`, w: `Despair`, e:`Tantrum`, r:`Curse of the Sad Mummy`},
{ name: `Anivia`, p: `Rebirth`, q: `Flash Frost`, w: `Crystallize`, e:`Frostbite`, r:`Glacial Storm`},
{ name: `Annie`, p: `Pyromania`, q: `Disintegrate`, w: `Incinerate`, e:`Molten Shield`, r:`Summon Tibbers`},
{ name: `Aphelios`, p: `The Hitman and the Seer `, q: `Weapons of the Faithful`, w: `Calibrum, Severum, Gravitum, Infernum, Crescendum`, e:`Phase `, r:`Moonlight Vigil`},
{ name: `Ashe`, p: `Frost Shot`, q: `Ranger's Focus`, w: `Volley`, e:`Hawkshot`, r:`Enchanted Crystal Arrow`},
{ name: `AurelionSol`, p: `Center of the Universe`, q: `Starsurge`, w: `Celestial Expansion`, e:`Comet of Legend`, r:`Voice of Light`},
{ name: `Azir`, p: `Shurima's Legacy`, q: `Conquering Sands`, w: `Arise!`, e:`Shifting Sands`, r:`Emperor's Divide`},
{ name: `Bard`, p: `Traveler's Call`, q: `Cosmic Binding`, w: `Caretaker's Shrine`, e:`Magical Journey`, r:`Tempered Fate`},
{ name: `Blitzcrank`, p: `Mana Barrier`, q: `Rocket Grab`, w: `Overdrive`, e:`Power Fist`, r:`Static Field`},
{ name: `Brand`, p: `Blaze`, q: `Sear`, w: `Pillar of Flame`, e:`Conflagration`, r:`Pyroclasm`},
{ name: `Braum`, p: `Concussive Blows`, q: `Winter's Bite`, w: `Stand Behind Me`, e:`Unbreakable`, r:`Glacial Fissure`},
{ name: `Caitlyn`, p: `Headshot`, q: `Piltover Peacemaker`, w: `Yordle Snap Trap`, e:`90 Caliber Net`, r:`Ace in the Hole`},
{ name: `Camille`, p: `Adaptive Defenses`, q: `Precision Protocol`, w: `Tactical Sweep`, e:`Hookshot`, r:`The Hextech Ultimatum`},
{ name: `Cassiopeia`, p: `Serpentine Grace`, q: `Noxious Blast`, w: `Miasma`, e:`Twin Fang`, r:`Petrifying Gaze`},
{ name: `Chogath`, p: `Carnivore`, q: `Rupture`, w: `Feral Scream`, e:`Vorpal Spikes`, r:`Feast`},
{ name: `Corki`, p: `Hextech Munitions`, q: `Phosphorus Bomb`, w: `Valkyrie / Special Delivery`, e:`Gatling Gun`, r:`Missile Barrage`},
{ name: `Darius`, p: `Hemorrhage`, q: `Decimate`, w: `Crippling Strike`, e:`Apprehend`, r:`Noxian Guillotine`},
{ name: `Diana`, p: ` Scorn of the Moon`, q: `Moonsilver Blade`, w: `Crescent Strike`, e:`Pale Cascade`, r:`Moonfall`},
{ name: `DrMundo`, p: `Adrenaline Rush`, q: `Infected Cleaver`, w: `Burning Agony`, e:`Masochism`, r:`Sadism`},
{ name: `Draven`, p: `League of Draven`, q: `Spinning Axe`, w: `Blood Rush`, e:`Stand Aside`, r:`Whirling Death`},
{ name: `Ekko`, p: `Z-Drive Resonance`, q: `Timewinder`, w: `Parallel Convergence`, e:`Phase Dive`, r:`Chronobreak`},
{ name: `Elise`, p: `Spider Queen`, q: `Neurotoxin / Venomous Bite`, w: `Volatile Spiderling / Skittering Frenzy`, e:`Cocoon / Rappel`, r:`Spider Form / Human Form`},
{ name: `Evelynn`, p: ` Agony's Embrace`, q: `Demon Shade`, w: `Hate Spike`, e:`Allure`, r:`Whiplash`},
{ name: `Ezreal`, p: `Rising Spell Force`, q: `Mystic Shot`, w: `Essence Flux`, e:`Arcane Shift`, r:`Trueshot Barrage`},
{ name: `Fiddlesticks`, p: `Dread`, q: `Terrify`, w: `Drain`, e:`Dark Wind`, r:`Crowstorm`},
{ name: `Fiora`, p: `Duelist's Dance`, q: `Lunge`, w: `Riposte`, e:`Bladework`, r:`Grand Challenge`},
{ name: `Fizz`, p: `Nimble Fighter`, q: `Urchin Strike`, w: `Seastone Trident`, e:`Playful / Trickster`, r:`Chum the Waters`},
{ name: `Galio`, p: `Colossal Smash`, q: `Winds of War`, w: `Shield of Durand`, e:`Justice Punch`, r:`Hero's Entrance`},
{ name: `Gangplank`, p: `Trial by Fire`, q: `Parrrley`, w: `Remove Scurvy`, e:`Powder Keg`, r:`Cannon Barrage`},
{ name: `Garen`, p: `Perseverance`, q: `Decisive Strike`, w: `Courage`, e:`Judgment`, r:`Demacian Justice`},
{ name: `Gnar`, p: `Rage Gene`, q: `Boomerang Throw / Boulder Toss`, w: `Hyper / Wallop`, e:`Hop / Crunch`, r:`GNAR!`},
{ name: `Gragas`, p: `Happy Hour`, q: `Barrel Roll`, w: `Drunken Rage`, e:`Body Slam`, r:`Explosive Cask`},
{ name: `Graves`, p: `New Destiny`, q: `End of the Line`, w: `Smoke Screen`, e:`Quickdraw`, r:`Collateral Damage`},
{ name: `Hecarim`, p: `Warpath`, q: `Rampage`, w: `Spirit of Dread`, e:`Devastating Charge`, r:`Onslaught of Shadows`},
{ name: `Heimerdinger`, p: `Hextech Affinity`, q: `H-28G Evolution Turret`, w: `Hextech Micro-Rockets`, e:`CH-2 Electron Storm Grenade`, r:`UPGRADE!!!`},
{ name: `Illaoi`, p: `Prophet of an Elder God`, q: `Tentacle Smash`, w: `Harsh Lesson`, e:`Test of Spirit`, r:`Leap of Faith`},
{ name: `Irelia`, p: `Ionian Fervor`, q: `Bladesurge`, w: `Hiten Style`, e:`Equilibrium Strike`, r:`Transcendent Blades`},
{ name: `Ivern`, p: `Friend of the Forest`, q: `Rootcaller`, w: `Brushmaker`, e:`Triggerseed`, r:`Daisy!`},
{ name: `Janna`, p: `Tailwind`, q: `Howling Gale`, w: `Zephyr`, e:`Eye of the Storm`, r:`Monsoon`},
{ name: `JarvanIV`, p: `Martial Cadence`, q: `Dragon Strike`, w: `Golden Aegis`, e:`Demacian Standard`, r:`Cataclysm`},
{ name: `Jax`, p: ` Grandmaster at Arms`, q: `Relentless Assault`, w: `Leap Strike`, e:`Empower`, r:`Counter Strike`},
{ name: `Jayce`, p: `Hextech Capacitor`, q: `To the Skies! / Shock Blast`, w: `Lightning Field / Hyper Charge`, e:`Thundering Blow / Acceleration Gate`, r:`Transform Mercury Cannon / Transform Mercury Hammer`},
{ name: `Jhin`, p: `Whisper`, q: `Dancing Grenade`, w: `Deadly Flourish`, e:`Captive Audience`, r:`Curtain Call`},
{ name: `Jinx`, p: `Get Excited!`, q: `Switcheroo!`, w: `Zap!`, e:`Flame Chompers!`, r:`Super Mega Death Rocket!`},
{ name: `Kaisa`, p: `Second Skin`, q: `Icathian Rain`, w: `Void Seeker`, e:`Supercharge`, r:`Killer Instinct`},
{ name: `Kalista`, p: `Martial Poise`, q: `Pierce`, w: `Sentinel`, e:`Rend`, r:`Fate's Call`},
{ name: `Karma`, p: `Gathering Fire`, q: `Inner Flame`, w: `Focused Resolve`, e:`Inspire`, r:`Mantra`},
{ name: `Karthus`, p: `Death Defied`, q: `Lay Waste`, w: `Wall of Pain`, e:`Defile`, r:`Requiem`},
{ name: `Kassadin`, p: `Void Stone`, q: `Null Sphere`, w: `Nether Blade`, e:`Force Pulse`, r:`Riftwalk`},
{ name: `Katarina`, p: `Voracity`, q: `Bouncing Blade`, w: `Preparation`, e:`Shunpo`, r:`Death Lotus`},
{ name: `Kayle`, p: `Holy Fervor`, q: `Reckoning`, w: `Divine Blessing`, e:`Righteous Fury`, r:`Intervention`},
{ name: `Kayn`, p: `The Darkin Scythe`, q: `Reaping Slash`, w: `Blade's Reach`, e:`Shadow Step`, r:`Umbral Trespass`},
{ name: `Kennen`, p: `Mark of the Storm`, q: `Thundering Shuriken`, w: `Electrical Surge`, e:`Lightning Rush`, r:`Slicing Maelstrom`},
{ name: `Khazix`, p: `Unseen Threat`, q: `Taste Their Fear`, w: `Void Spike`, e:`Leap`, r:`Void Assault`},
{ name: `Kindred`, p: `Mark of the Kindred`, q: `Dance of Arrows`, w: `Wolf's Frenzy`, e:`Mounting Dread`, r:`Lamb's Respite`},
{ name: `Kled`, p: `Skaarl the Cowardly Lizard`, q: `Beartrap on a Rope / Pocket Pistol`, w: `Violent Tendencies`, e:`Jousting`, r:`Chaaaaaaaarge!!!`},
{ name: `KogMaw`, p: `Icathian Surprise`, q: `Caustic Spittle`, w: `Bio-Arcane Barrage`, e:`Void Ooze`, r:`Living Artillery`},
{ name: `LeBlanc`, p: `Sigil of Malice`, q: `Shatter Orb`, w: `Distortion`, e:`Ethereal Chains`, r:`Mimic / Mimic Shatter Orb`},
{ name: `LeeSin`, p: `Flurry`, q: `Sonic Wave / Resonating Strike`, w: `Safeguard / Iron Will`, e:`Tempest / Cripple`, r:`Dragon's Rage`},
{ name: `Leona`, p: `Sunlight`, q: `Shield of Daybreak`, w: `Eclipse`, e:`Zenith Blade`, r:`Solar Flare`},
{ name: `Lillia`, p: `Dream-Laden Bough`, q: `Blooming Blows`, w: `Watch Out! Eep! `, e:`Swirlseed`, r:`Lifting Lullaby`},
{ name: `Lissandra`, p: `Iceborn`, q: `Ice Shard`, w: `Ring of Frost`, e:`Glacial Path`, r:`Frozen Tomb`},
{ name: `Lucian`, p: `Lightslinger`, q: `Piercing Light`, w: `Ardent Blaze`, e:`Relentless Pursuit`, r:`The Culling`},
{ name: `Lulu`, p: `Pix`, q: ` Faerie Companion`, w: `Glitterlance`, e:`Whimsy`, r:`Help`},
{ name: `Lux`, p: `Illumination`, q: `Light Binding`, w: `Prismatic Barrier`, e:`Lucent Singularity`, r:`Final Spark`},
{ name: `Malphite`, p: ` Shard of the Monolith`, q: `Granite Shield`, w: `Seismic Shard`, e:`Brutal Strikes`, r:`Ground Slam`},
{ name: `Malzahar`, p: `Void Shift`, q: `Call of the Void`, w: `Void Swarm`, e:`Malefic Visions`, r:`Nether Grasp`},
{ name: `Maokai`, p: `Sap Magic`, q: `Bramble Smash`, w: `Twisted Advance`, e:`Sapling Toss`, r:`Nature's Grasp`},
{ name: `MasterYi`, p: `Double Strike`, q: `Alpha Strike`, w: `Meditate`, e:`Wuju Style`, r:`Highlander`},
{ name: `MissFortune`, p: `Love Tap`, q: `Double Up`, w: `Strut`, e:`Make It Rain`, r:`Bullet Time`},
{ name: `Mordekaiser`, p: `Iron Man`, q: `Mace of Spades`, w: `Harvester of Sorrow`, e:`Siphon of Destruction`, r:`Children of the Grave`},
{ name: `Morgana`, p: ` Fallen Angel`, q: `Soul Siphon`, w: `Dark Binding`, e:`Tormented Soil`, r:`Black Shield`},
{ name: `Nami`, p: `Surging Tides`, q: `Aqua Prison`, w: `Ebb and Flow`, e:`Tidecaller's Blessing`, r:`Tidal Wave`},
{ name: `Nasus`, p: `Soul Eater`, q: `Siphoning Strike`, w: `Wither`, e:`Spirit Fire`, r:`Fury of the Sands`},
{ name: `Nautilus`, p: `Staggering Blow`, q: `Dredge Line`, w: `Titan's Wrath`, e:`Riptide`, r:`Depth Charge`},
{ name: `Neeko`, p: `Inherent Glamour`, q: `Blooming Burst`, w: `Shapesplitter`, e:`Tangle-Barbs`, r:`Pop Blossom`},
{ name: `Nidalee`, p: `Prowl`, q: `Javelin Toss / Takedown`, w: `Bushwhack / Pounce`, e:`Primal Surge / Swipe`, r:`Aspect of the Cougar`},
{ name: `Nocturne`, p: `Umbra Blades`, q: `Duskbringer`, w: `Shroud of Darkness`, e:`Unspeakable Horror`, r:`Paranoia`},
{ name: `Nunu`, p: `Visionary`, q: `Consume`, w: `Blood Boil`, e:`Ice Blast`, r:`Absolute Zero`},
{ name: `Olaf`, p: `Berserker Rage`, q: `Undertow`, w: `Vicious Strikes`, e:`Reckless Swing`, r:`Ragnarok`},
{ name: `Orianna`, p: `Clockwork Windup`, q: `Command Attack`, w: `Command Dissonance`, e:`Command Protect`, r:`Command Shockwave`},
{ name: `Ornn`, p: `Living Forge`, q: `Volcanic Rupture`, w: `Bellows Breath`, e:`Searing Charge`, r:`Call of the Forge God`},
{ name: `Pantheon`, p: `Aegis Protection`, q: `Spear Shot`, w: `Aegis of Zeonia`, e:`Heartseeker Strike`, r:`Grand Skyfall`},
{ name: `Poppy`, p: ` Keeper of the Hammer`, q: `Iron Ambassador`, w: `Hammer Shock`, e:`Steadfast Presence`, r:`Heroic Charge`},
{ name: `Pyke`, p: `Gift of the Drowned Ones`, q: `Bone Skewer`, w: `Ghostwater Dive`, e:`Phantom Undertow`, r:`Death From Below`},
{ name: `Qiyana`, p: `Royal Privlege`, q: `Edge of Ixtal`, w: `Elemental Wrath`, e:`Terrashape`, r:`Audacity`},
{ name: `Quinn`, p: ` Demacia's Wings`, q: `Harrier`, w: `Blinding Assault`, e:`Heightened Senses`, r:`Vault`},
{ name: `Rakan`, p: `Fey Feathers`, q: `Gleaming Quill`, w: `Grand Entrance`, e:`Battle Dance`, r:`The Quickness`},
{ name: `Rammus`, p: `Spiked Shell`, q: `Powerball`, w: `Defensive Ball Curl`, e:`Frenzying Taunt`, r:`Tremors`},
{ name: `RekSai`, p: `Fury of the Xer'Sai`, q: `Queen's Wrath / Prey Seeker`, w: `Burrow / Unburrow`, e:`Furious Bite / Tunnel`, r:`Void Rush`},
{ name: `Renekton`, p: `Reign of Anger`, q: `Cull the Meek`, w: `Ruthless Predator`, e:`Slice`, r:`Dominus`},
{ name: `Rengar`, p: `Unseen Predator`, q: `Savagery`, w: `Battle Roar`, e:`Bola Strike`, r:`Thrill of the Hunt`},
{ name: `Riven`, p: `Runic Blade`, q: `Broken Wings`, w: `Ki Burst`, e:`Valor`, r:`Blade of the Exile / Wind Slash`},
{ name: `Rumble`, p: `Junkyard Titan`, q: `Flamespitter`, w: `Scrap Shield`, e:`Electro Harpoon`, r:`The Equalizer`},
{ name: `Ryze`, p: `Arcane Mastery`, q: `Overload`, w: `Rune Prison`, e:`Spell Flux`, r:`Realm Warp`},
{ name: `Samira`, p: `Daredevil Impulse`, q: `Flair`, w: `Blade Whirl`, e:`Wild Rush`, r:`Infero Trigger`},
{ name: `Sejuani`, p: ` Fury of the North`, q: `Fury of the North`, w: `Arctic Assault`, e:`Winter's Wrath`, r:`Permafrost`},
{ name: `Senna`, p: `Absolution`, q: `Piercing Darkness`, w: `Last Embrace`, e:`Curse of the Black Mist`, r:`Dawning Shadow`},
{ name: `Seraphine`, p: `Stage Presence`, q: `High Note`, w: `Surround Sound`, e:`Beat Drop`, r:`Encore`},
{ name: `Sett`, p: `Pit Grit`, q: `Knuckle Down`, w: `Haymaker`, e:`Facebreaker`, r:`The Show Stopper`},
{ name: `Shaco`, p: `Backstab`, q: `Deceive`, w: `Jack in the Box`, e:`Two-Shiv Poison`, r:`Hallucinate`},
{ name: `Shen`, p: `Ki Barrier`, q: `Twilight Assault`, w: `Spirit's Refuge`, e:`Shadow Dash`, r:`Stand United`},
{ name: `Shyvana`, p: `Fury of the Dragonborn`, q: `Twin Bite`, w: `Burnout`, e:`Flame Breath`, r:`Dragon's Descent`},
{ name: `Singed`, p: `Noxious Slipstream`, q: `Poison Trail`, w: `Mega Adhesive`, e:`Fling`, r:`Insanity Potion`},
{ name: `Sion`, p: `Glory in Death / Death Surge`, q: `Decimating Smash`, w: `Soul Furnace`, e:`Roar of the Slayer`, r:`Unstoppable Onslaught`},
{ name: `Sivir`, p: `Fleet of Foot`, q: `Boomerang Blade`, w: `Ricochet`, e:`Spell Shield`, r:`On the Hunt`},
{ name: `Skarner`, p: `Crystal Spires`, q: `Crystal Slash`, w: `Crystalline Exoskeleton`, e:`Fracture`, r:`Impale`},
{ name: `Sona`, p: ` Maven of the Strings`, q: `Power Chord`, w: `Hymn of Valor`, e:`Aria of Perseverance`, r:`Song of Celerity`},
{ name: `Soraka`, p: `Salvation`, q: `Starcall`, w: `Astral Infusion`, e:`Equinox`, r:`Wish`},
{ name: `Swain`, p: `Carrion Renewal`, q: `Decrepify`, w: `Nevermove`, e:`Torment`, r:`Ravenous Flock`},
{ name: `Sylas`, p: `Petricite Burst`, q: `Chain Leash`, w: `Kingslayer`, e:`Abscond / Abduct`, r:`Hijack`},
{ name: `Syndra`, p: `Transcendent`, q: `Dark Sphere`, w: `Force of Will`, e:`Scatter the Weak`, r:`Unleashed Power`},
{ name: `TahmKench`, p: `An Acquired Taste`, q: `Tongue Lash`, w: `Devour / Regurgitate`, e:`Thick Skin`, r:`Abyssal Voyage`},
{ name: `Taliyah`, p: `Rock Surfing`, q: `Threaded Volley`, w: `Seismic Shove`, e:`Unraveled Earth`, r:`Weaver's Wall`},
{ name: `Talon`, p: `Blade's End`, q: `Noxian Diplomacy`, w: `Rake`, e:`Assassin's Path`, r:`Shadow Assault`},
{ name: `Taric`, p: `Bravado`, q: `Starlight's Touch`, w: `Bastion`, e:`Dazzle`, r:`Cosmic Radiance`},
{ name: `Teemo`, p: `Guerrilla Warfare`, q: `Blinding Dart`, w: `Move Quick`, e:`Toxic Shot`, r:`Noxious Trap`},
{ name: `Thresh`, p: `Damnation`, q: `Death Sentence`, w: `Dark Passage`, e:`Flay`, r:`The Box`},
{ name: `Tristana`, p: `Draw a Bead`, q: `Rapid Fire`, w: `Rocket Jump`, e:`Explosive Charge`, r:`Buster Shot`},
{ name: `Trundle`, p: `King's Tribute`, q: `Chomp`, w: `Frozen Domain`, e:`Pillar of Ice`, r:`Subjugate`},
{ name: `Tryndamere`, p: `Battle Fury`, q: `Bloodlust`, w: `Mocking Shout`, e:`Spinning Slash`, r:`Undying Rage`},
{ name: `TwistedFate`, p: `Loaded Dice`, q: `Wild Cards`, w: `Pick a Card`, e:`Stacked Deck`, r:`Destiny`},
{ name: `Twitch`, p: `Deadly Venom`, q: `Ambush`, w: `Venom Cask`, e:`Contaminate`, r:`Spray and Pray`},
{ name: `Udyr`, p: `Monkey's Agility`, q: `Tiger Stance`, w: `Turtle Stance`, e:`Bear Stance`, r:`Phoenix Stance`},
{ name: `Urgot`, p: `Echoing Flames`, q: `Corrosive Charge`, w: `Purge`, e:`Disdain`, r:`Fear Beyond Death`},
{ name: `Varus`, p: `Living Vengeance`, q: `Piercing Arrow`, w: `Blighted Quiver`, e:`Hail of Arrows`, r:`Chain of Corruption`},
{ name: `Vayne`, p: `Night Hunter`, q: `Tumble`, w: `Silver Bolts`, e:`Condemn`, r:`Final Hour`},
{ name: `Veigar`, p: `Phenomenal Evil Power`, q: `Baleful Strike`, w: `Dark Matter`, e:`Event Horizon`, r:`Primordial Burst`},
{ name: `Velkoz`, p: `Organic Deconstruction`, q: `Plasma Fission`, w: `Void Rift`, e:`Tectonic Disruption`, r:`Life Form Disintegration Ray`},
{ name: `Vi`, p: `Blast Shield`, q: `Vault Breaker`, w: `Denting Blows`, e:`Excessive Force`, r:`Assault and Battery`},
{ name: `Viktor`, p: `Glorious Evolution`, q: `Siphon Power`, w: `Gravity Field`, e:`Death Ray`, r:`Chaos Storm`},
{ name: `Vladimir`, p: `Crimson Pact`, q: `Transfusion`, w: `Sanguine Pool`, e:`Tides of Blood`, r:`Hemoplague`},
{ name: `Volibear`, p: `Chosen of the Storm`, q: `Rolling Thunder`, w: `Frenzy`, e:`Majestic Roar`, r:`Thunder Claws`},
{ name: `Warwick`, p: `Eternal Hunger`, q: `Jaws of the Beast`, w: `Blood Hunt`, e:`Primal Howl`, r:`Infinite Duress`},
{ name: `Wukong`, p: `Stone Skin`, q: `Crushing Blow`, w: `Decoy`, e:`Nimbus Strike`, r:`Cyclone`},
{ name: `Xayah`, p: `Clean Cuts`, q: `Double Daggers`, w: `Deadly Plumage`, e:`Bladecaller`, r:`Featherstorm`},
{ name: `Xerath`, p: `Mana Surge`, q: `Arcanopulse`, w: `Eye of Destruction`, e:`Shocking Orb`, r:`Rite of the Arcane`},
{ name: `XinZhao`, p: `Determination`, q: `Three Talon Strike`, w: `Wind Becomes Lightning`, e:`Audacious Charge`, r:`Crescent Guard`},
{ name: `Yasuo`, p: `Way of the Wanderer`, q: `Steel Tempest`, w: `Wind Wall`, e:`Sweeping Blade`, r:`Last Breath`},
{ name: `Yone`, p: `Way of the Hunter`, q: `Mortal Steel`, w: `Spirit Cleave`, e:`Soul Unbound`, r:`Fate Sealed`},
{ name: `Yorick`, p: ` Shepherd of Souls`, q: `Shepherd of Souls`, w: `Last Rites`, e:`Dark Procession`, r:`Mourning Mist`},
{ name: `Yuumi`, p: `Bop 'n' Block`, q: `Prowling Projectile`, w: `You and Me!`, e:`Zoomies`, r:`Final Chapter`},
{ name: `Zac`, p: `Cell Division`, q: `Stretching Strikes`, w: `Unstable Matter`, e:`Elastic Slingshot`, r:`Let's Bounce!`},
{ name: `Zed`, p: `Contempt for the Weak`, q: `Razor Shuriken`, w: `Living Shadow`, e:`Shadow Slash`, r:`Death Mark`},
{ name: `Ziggs`, p: `Short Fuse`, q: `Bouncing Bomb`, w: `Satchel Charge`, e:`Hexplosive Minefield`, r:`Mega Inferno Bomb`},
{ name: `Zilean`, p: `Time in a Bottle`, q: `Time Bomb`, w: `Rewind`, e:`Time Warp`, r:`Chronoshift`},
{ name: `Zoe`, p: `More Sparkles!`, q: `Paddle Star`, w: `Spell Thief`, e:`Sleepy Trouble Bubble`, r:`Portal Jump`},
{ name: `Zyra`, p: ` Rise of the Thorns`, q: `Garden of Thorns`, w: `Deadly Spines`, e:`Rampant Growth`, r:`Grasping Roots`},

      ],
      tempChampUwU: {
        name: `Test`,
        p: `passive`,
        q: `qqq`,
        e: `eee`,
        w: `www`,
        r: `rrrr`
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.state.champList = readFile("champNames.txt");
  }

  //function to clear all fields and arrays of champions
  clearAllFields (id, event) {
    if (id === 'clear') {
      var tempArray3 = []
      var tempArray4 = []
      this.setState({ allyChampions: tempArray3 })
      this.setState({ enemyChampions: tempArray4 })
      this.setState({ value: '' })
    } else {
    }
    event.preventDefault()
  }

  handleChange (vv) {
    // this.setState({value: this.refs.chosenValue});
    this.setState({ value: vv }, console.log('Chosen Value:   ' + vv.value))
  }

  handleSubmit (id, event) {
    try {
      console.log('Current Value is: ' + this.state.value.value)
      // fetch(`http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion/${this.state.value.value}.json`)
      // .then(response => response.json())
      // .then(json => {
      //   this.setState({
      //     test: JSON.parse(JSON.stringify(json)),
      //   })

      var containsRed = id
      //var containsBlue = event.target.id;

      if (containsRed === 'RedTeam' || containsRed === 'red') {
        console.log('REEEEEEEEEEEEEEEEEDDDDDD')

        var array = this.state.abilites
        var champdata = array.find(x => x.name === this.state.value.value)

        console.log(champdata)
        //Sets champArray to the tempArray with the new champ's info and the old, combined.
        var temparray2 = []

        if (this.state.enemyChampions.length == 0) {
          console.log('Empty array oh no')
        } else {
          temparray2 = this.state.enemyChampions
          console.log(this.state.enemyChampions)
        }

        console.log(champdata.q)
        temparray2.push(
          champdata.name,
          champdata.q,
          champdata.w,
          champdata.e,
          champdata.r
        )

        console.log(temparray2)

        this.setState({ enemyChampions: temparray2 })

        /* Works to display Champion info to console. */
        //eslint-disable-next-line
      } else {
        console.log('BLUUUUUUUUUUUE')

        var array = this.state.abilites
        var champdata = array.find(x => x.name === this.state.value.value)

        console.log(champdata)
        //Sets champArray to the tempArray with the new champ's info and the old, combined.
        var temparray = []

        if (this.state.allyChampions.length == 0) {
          console.log('Empty array oh no')
        } else {
          temparray = this.state.allyChampions
          console.log(this.state.allyChampions)
        }

        temparray.push(
          champdata.name,
          champdata.q,
          champdata.w,
          champdata.e,
          champdata.r
        )

        console.log(temparray)
        this.setState({ allyChampions: temparray })

        //eslint-disable-next-line
        console.log(this.state.champName + "'s Q is: " + this.state.tempChampQ)
        console.log(this.state.champName + "'s W is: " + this.state.tempChampW)
        console.log(this.state.champName + "'s E is: " + this.state.tempChampE)
        console.log(
          this.state.champName + "'s R should be: " + this.state.tempChampR
        )
      }
      //this.setState({value: ""});
      //});
    } catch (error) {
      console.error()
    }
    event.preventDefault()
  }

  render () {
    // var { test } = this.state;
    return (
      <div
        style={{
          padding: '25px 50px 75px 30%',
          align: 'center',
          width: '50%'
        }}
      >
        <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue)
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            down: <span style={{ fontSize: '20px', align: 'right' }}>A</span>,
            up: <span style={{ fontSize: '36px' }}>A</span>,
            style: {
              backgroundColor: 'black',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
          }}
        />
        <div>
          <button
            style={{ position: 'absolute', right: 0, top: '20px' }}
            onClick={e => this.clearAllFields('clear', e)}
          >
            Clear All
          </button>
          <form onSubmit={this.handleSubmit}>
            <label>
              Champion Lookup:
              <Select
                value='testV'
                onChange={this.handleChange}
                options={this.state.options}
              />
            </label>
            <br />
            <button
              style={{ width: '40%', padding: '10px' }}
              onClick={e => this.handleSubmit('blue', e)}
            >
              Add to Blue
            </button>
            <button
              style={{ width: '40%', padding: '10px' }}
              onClick={e => this.handleSubmit('red', e)}
            >
              Add to Red
            </button>
          </form>
        </div>
        <div
          id='target'
          style={{
            position: 'absolute',
            left: '20px',
            width: '300px',
            border: '3px solid blue',
            padding: '10px',
            float: 'left'
          }}
        >
          <ul>
            <p className='content'>
              <label>Champion Info:</label>
              <li>Name: {this.state.allyChampions[0]} </li>
              <li>Q: {this.state.allyChampions[1]}</li>
              <li>W: {this.state.allyChampions[2]}</li>
              <li>E: {this.state.allyChampions[3]}</li>
              <li>R: {this.state.allyChampions[4]}</li>
              <br></br>
              <li>Name: {this.state.allyChampions[5]}</li>
              <li>Q: {this.state.allyChampions[6]}</li>
              <li>W: {this.state.allyChampions[7]}</li>
              <li>E: {this.state.allyChampions[8]}</li>
              <li>R: {this.state.allyChampions[9]}</li>
              <br></br>
              <li>Name: {this.state.allyChampions[10]} </li>
              <li>Q: {this.state.allyChampions[11]}</li>
              <li>W: {this.state.allyChampions[12]}</li>
              <li>E: {this.state.allyChampions[13]}</li>
              <li>R: {this.state.allyChampions[14]}</li>
              <br></br>
              <li>Name: {this.state.allyChampions[15]} </li>
              <li>Q: {this.state.allyChampions[16]}</li>
              <li>W: {this.state.allyChampions[17]}</li>
              <li>E: {this.state.allyChampions[18]}</li>
              <li>R: {this.state.allyChampions[19]}</li>
              <br></br>
              <li>Name: {this.state.allyChampions[20]} </li>
              <li>Q: {this.state.allyChampions[21]}</li>
              <li>W: {this.state.allyChampions[22]}</li>
              <li>E: {this.state.allyChampions[23]}</li>
              <li>R: {this.state.allyChampions[24]}</li>
              <br></br>
            </p>
          </ul>
        </div>

        <div
          id='target'
          style={{
            position: 'absolute',
            right: '20px',
            width: '300px',
            border: '3px solid red',
            padding: '10px',
            float: 'right'
          }}
        >
          <ul>
            <p className='content'>
              <label>Champion Info:</label>
              <li>Name: {this.state.enemyChampions[0]} </li>
              <li>Q: {this.state.enemyChampions[1]}</li>
              <li>W: {this.state.enemyChampions[2]}</li>
              <li>E: {this.state.enemyChampions[3]}</li>
              <li>R: {this.state.enemyChampions[4]}</li>
              <br></br>
              <li>Name: {this.state.enemyChampions[5]}</li>
              <li>Q: {this.state.enemyChampions[6]}</li>
              <li>W: {this.state.enemyChampions[7]}</li>
              <li>E: {this.state.enemyChampions[8]}</li>
              <li>R: {this.state.enemyChampions[9]}</li>
              <br></br>
              <li>Name: {this.state.enemyChampions[10]} </li>
              <li>Q: {this.state.enemyChampions[11]}</li>
              <li>W: {this.state.enemyChampions[12]}</li>
              <li>E: {this.state.enemyChampions[13]}</li>
              <li>R: {this.state.enemyChampions[14]}</li>
              <br></br>
              <li>Name: {this.state.enemyChampions[15]} </li>
              <li>Q: {this.state.enemyChampions[16]}</li>
              <li>W: {this.state.enemyChampions[17]}</li>
              <li>E: {this.state.enemyChampions[18]}</li>
              <li>R: {this.state.enemyChampions[19]}</li>
              <br></br>
              <li>Name: {this.state.enemyChampions[20]} </li>
              <li>Q: {this.state.enemyChampions[21]}</li>
              <li>W: {this.state.enemyChampions[22]}</li>
              <li>E: {this.state.enemyChampions[23]}</li>
              <li>R: {this.state.enemyChampions[24]}</li>
              <br></br>
            </p>
          </ul>
        </div>
      </div>
    )
  }
}
