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
       {
name: `Aatrox`,
p: `Blood Well`,
q: `Dark Flight`,
w: `Blades of Torment`,
e: `Blood Thirst / Blood Price`,
r: `Massacre`
},
{
name: `Ahri`,
p: `Essence Theft`,
q: `Orb of Deception`,
w: `Charm`,
e: `Fox-Fire`,
r: `Spirit Rush`
},
{
name: `Akali`,
p: `Twin Disciplines`,
q: `Mark of the Assassin`,
w: `Crescent Slash`,
e: `Twilight Shroud`,
r: `Shadow Dance`
},
{
name: `Alistar`,
p: `Triumphant Roar`,
q: `Pulverize`,
w: `Trample`,
e: `Headbutt`,
r: `Unbreakable Will`
},
{
name: `Amumu`,
p: `Cursed Touch`,
q: `Bandage Toss`,
w: `Tantrum`,
e: `Despair`,
r: `Curse of the Sad Mummy`
},
{
name: `Anivia`,
p: `Rebirth`,
q: `Flash Frost`,
w: `Frostbite`,
e: `Crystallize`,
r: `Glacial Storm`
},
{
name: `Annie`,
p: `Pyromania`,
q: `Disintegrate`,
w: `Molten Shield`,
e: `Incinerate`,
r: `Summon Tibbers`
},
{
name: `Aphelios`,
p: `The Hitman and the Seer `,
q: `Weapons of the Faithful`,
w: `Phase `,
e: `Calibrum, Severum, Gravitum, Infernum, Crescendum`,
r: `Moonlight Vigil`
},
{
name: `Ashe`,
p: `Frost Shot`,
q: `Ranger's Focus`,
w: `Hawkshot`,
e: `Volley`,
r: `Enchanted Crystal Arrow`
},
{
name: `AurelionSol`,
p: `Center of the Universe`,
q: `Starsurge`,
w: `Comet of Legend`,
e: `Celestial Expansion`,
r: `Voice of Light`
},
{
name: `Azir`,
p: `Shurima's Legacy`,
q: `Conquering Sands`,
w: `Shifting Sands`,
e: `Arise!`,
r: `Emperor's Divide`
},
{
name: `Bard`,
p: `Traveler's Call`,
q: `Cosmic Binding`,
w: `Magical Journey`,
e: `Caretaker's Shrine`,
r: `Tempered Fate`
},
{
name: `Blitzcrank`,
p: `Mana Barrier`,
q: `Rocket Grab`,
w: `Power Fist`,
e: `Overdrive`,
r: `Static Field`
},
{
name: `Brand`,
p: `Blaze`,
q: `Sear`,
w: `Conflagration`,
e: `Pillar of Flame`,
r: `Pyroclasm`
},
{
name: `Braum`,
p: `Concussive Blows`,
q: `Winter's Bite`,
w: `Unbreakable`,
e: `Stand Behind Me`,
r: `Glacial Fissure`
},
{
name: `Caitlyn`,
p: `Headshot`,
q: `Piltover Peacemaker`,
w: `90 Caliber Net`,
e: `Yordle Snap Trap`,
r: `Ace in the Hole`
},
{
name: `Camille`,
p: `Adaptive Defenses`,
q: `Precision Protocol`,
w: `Hookshot`,
e: `Tactical Sweep`,
r: `The Hextech Ultimatum`
},
{
name: `Cassiopeia`,
p: `Serpentine Grace`,
q: `Noxious Blast`,
w: `Twin Fang`,
e: `Miasma`,
r: `Petrifying Gaze`
},
{
name: `Chogath`,
p: `Carnivore`,
q: `Rupture`,
w: `Vorpal Spikes`,
e: `Feral Scream`,
r: `Feast`
},
{
name: `Corki`,
p: `Hextech Munitions`,
q: `Phosphorus Bomb`,
w: `Gatling Gun`,
e: `Valkyrie / Special Delivery`,
r: `Missile Barrage`
},
{
name: `Darius`,
p: `Hemorrhage`,
q: `Decimate`,
w: `Apprehend`,
e: `Crippling Strike`,
r: `Noxian Guillotine`
},
{
name: `Diana`,
p: ` Scorn of the Moon`,
q: `Moonsilver Blade`,
w: `Pale Cascade`,
e: `Crescent Strike`,
r: `Moonfall`
},
{
name: `DrMundo`,
p: `Adrenaline Rush`,
q: `Infected Cleaver`,
w: `Masochism`,
e: `Burning Agony`,
r: `Sadism`
},
{
name: `Draven`,
p: `League of Draven`,
q: `Spinning Axe`,
w: `Stand Aside`,
e: `Blood Rush`,
r: `Whirling Death`
},
{
name: `Ekko`,
p: `Z-Drive Resonance`,
q: `Timewinder`,
w: `Phase Dive`,
e: `Parallel Convergence`,
r: `Chronobreak`
},
{
name: `Elise`,
p: `Spider Queen`,
q: `Neurotoxin / Venomous Bite`,
w: `Cocoon / Rappel`,
e: `Volatile Spiderling / Skittering Frenzy`,
r: `Spider Form / Human Form`
},
{
name: `Evelynn`,
p: ` Agony's Embrace`,
q: `Demon Shade`,
w: `Allure`,
e: `Hate Spike`,
r: `Whiplash`
},
{
name: `Ezreal`,
p: `Rising Spell Force`,
q: `Mystic Shot`,
w: `Arcane Shift`,
e: `Essence Flux`,
r: `Trueshot Barrage`
},
{
name: `Fiddlesticks`,
p: `Dread`,
q: `Terrify`,
w: `Dark Wind`,
e: `Drain`,
r: `Crowstorm`
},
{
name: `Fiora`,
p: `Duelist's Dance`,
q: `Lunge`,
w: `Bladework`,
e: `Riposte`,
r: `Grand Challenge`
},
{
name: `Fizz`,
p: `Nimble Fighter`,
q: `Urchin Strike`,
e: `Seastone Trident`,
w: `Playful / Trickster`,
r: `Chum the Waters`
},
{
name: `Galio`,
p: `Colossal Smash`,
q: `Winds of War`,
w: `Justice Punch`,
e: `Shield of Durand`,
r: `Hero's Entrance`
},
{
name: `Gangplank`,
p: `Trial by Fire`,
q: `Parrrley`,
w: `Powder Keg`,
e: `Remove Scurvy`,
r: `Cannon Barrage`
},
{
name: `Garen`,
p: `Perseverance`,
q: `Decisive Strike`,
w: `Judgment`,
e: `Courage`,
r: `Demacian Justice`
},
{
name: `Gnar`,
p: `Rage Gene`,
q: `Boomerang Throw / Boulder Toss`,
w: `Hop / Crunch`,
e: `Hyper / Wallop`,
r: `GNAR!`
},
{
name: `Gragas`,
p: `Happy Hour`,
q: `Barrel Roll`,
w: `Body Slam`,
e: `Drunken Rage`,
r: `Explosive Cask`
},
{
name: `Graves`,
p: `New Destiny`,
q: `End of the Line`,
w: `Quickdraw`,
e: `Smoke Screen`,
r: `Collateral Damage`
},
{
name: `Hecarim`,
p: `Warpath`,
q: `Rampage`,
w: `Devastating Charge`,
e: `Spirit of Dread`,
r: `Onslaught of Shadows`
},
{
name: `Heimerdinger`,
p: `Hextech Affinity`,
q: `H-28G Evolution Turret`,
w: `CH-2 Electron Storm Grenade`,
e: `Hextech Micro-Rockets`,
r: `UPGRADE!!!`
},
{
name: `Illaoi`,
p: `Prophet of an Elder God`,
q: `Tentacle Smash`,
w: `Test of Spirit`,
e: `Harsh Lesson`,
r: `Leap of Faith`
},
{
name: `Irelia`,
p: `Ionian Fervor`,
q: `Bladesurge`,
w: `Equilibrium Strike`,
e: `Hiten Style`,
r: `Transcendent Blades`
},
{
name: `Ivern`,
p: `Friend of the Forest`,
q: `Rootcaller`,
w: `Triggerseed`,
e: `Brushmaker`,
r: `Daisy!`
},
{
name: `Janna`,
p: `Tailwind`,
q: `Howling Gale`,
w: `Eye of the Storm`,
e: `Zephyr`,
r: `Monsoon`
},
{
name: `JarvanIV`,
p: `Martial Cadence`,
q: `Dragon Strike`,
w: `Demacian Standard`,
e: `Golden Aegis`,
r: `Cataclysm`
},
{
name: `Jax`,
p: ` Grandmaster at Arms`,
q: `Relentless Assault`,
w: `Empower`,
e: `Leap Strike`,
r: `Counter Strike`
},
{
name: `Jayce`,
p: `Hextech Capacitor`,
q: `To the Skies! / Shock Blast`,
w: `Thundering Blow / Acceleration Gate`,
e: `Lightning Field / Hyper Charge`,
r: `Transform Mercury Cannon / Transform Mercury Hammer`
},
{
name: `Jhin`,
p: `Whisper`,
q: `Dancing Grenade`,
w: `Captive Audience`,
e: `Deadly Flourish`,
r: `Curtain Call`
},
{
name: `Jinx`,
p: `Get Excited!`,
q: `Switcheroo!`,
w: `Flame Chompers!`,
e: `Zap!`,
r: `Super Mega Death Rocket!`
},
{
name: `Kaisa`,
p: `Second Skin`,
q: `Icathian Rain`,
w: `Supercharge`,
e: `Void Seeker`,
r: `Killer Instinct`
},
{
name: `Kalista`,
p: `Martial Poise`,
q: `Pierce`,
w: `Rend`,
e: `Sentinel`,
r: `Fate's Call`
},
{
name: `Karma`,
p: `Gathering Fire`,
q: `Inner Flame`,
w: `Inspire`,
e: `Focused Resolve`,
r: `Mantra`
},
{
name: `Karthus`,
p: `Death Defied`,
q: `Lay Waste`,
w: `Defile`,
e: `Wall of Pain`,
r: `Requiem`
},
{
name: `Kassadin`,
p: `Void Stone`,
q: `Null Sphere`,
w: `Force Pulse`,
e: `Nether Blade`,
r: `Riftwalk`
},
{
name: `Katarina`,
p: `Voracity`,
q: `Bouncing Blade`,
w: `Shunpo`,
e: `Preparation`,
r: `Death Lotus`
},
{
name: `Kayle`,
p: `Holy Fervor`,
q: `Reckoning`,
e: `Divine Blessing`,
w: `Righteous Fury`,
r: `Intervention`
},
{
name: `Kayn`,
p: `The Darkin Scythe`,
q: `Reaping Slash`,
w: `Shadow Step`,
e: `Blade's Reach`,
r: `Umbral Trespass`
},
{
name: `Kennen`,
p: `Mark of the Storm`,
q: `Thundering Shuriken`,
w: `Lightning Rush`,
e: `Electrical Surge`,
r: `Slicing Maelstrom`
},
{
name: `Khazix`,
p: `Unseen Threat`,
q: `Taste Their Fear`,
w: `Leap`,
e: `Void Spike`,
r: `Void Assault`
},
{
name: `Kindred`,
p: `Mark of the Kindred`,
q: `Dance of Arrows`,
w: `Mounting Dread`,
e: `Wolf's Frenzy`,
r: `Lamb's Respite`
},
{
name: `Kled`,
p: `Skaarl the Cowardly Lizard`,
q: `Beartrap on a Rope / Pocket Pistol`,
w: `Jousting`,
e: `Violent Tendencies`,
r: `Chaaaaaaaarge!!!`
},
{
name: `KogMaw`,
p: `Icathian Surprise`,
q: `Caustic Spittle`,
w: `Void Ooze`,
e: `Bio-Arcane Barrage`,
r: `Living Artillery`
},
{
name: `LeBlanc`,
p: `Sigil of Malice`,
q: `Shatter Orb`,
w: `Ethereal Chains`,
e: `Distortion`,
r: `Mimic / Mimic Shatter Orb`
},
{
name: `LeeSin`,
p: `Flurry`,
q: `Sonic Wave / Resonating Strike`,
w: `Tempest / Cripple`,
e: `Safeguard / Iron Will`,
r: `Dragon's Rage`
},
{
name: `Leona`,
p: `Sunlight`,
q: `Shield of Daybreak`,
w: `Zenith Blade`,
e: `Eclipse`,
r: `Solar Flare`
},
{
name: `Lillia`,
p: `Dream-Laden Bough`,
q: `Blooming Blows`,
w: `Swirlseed`,
e: `Watch Out! Eep! `,
r: `Lifting Lullaby`
},
{
name: `Lissandra`,
p: `Iceborn`,
q: `Ice Shard`,
w: `Glacial Path`,
e: `Ring of Frost`,
r: `Frozen Tomb`
},
{
name: `Lucian`,
p: `Lightslinger`,
q: `Piercing Light`,
w: `Relentless Pursuit`,
e: `Ardent Blaze`,
r: `The Culling`
},
{
name: `Lulu`,
p: `Pix`,
q: ` Faerie Companion`,
w: `Whimsy`,
e: `Glitterlance`,
r: `Help`
},
{
name: `Lux`,
p: `Illumination`,
q: `Light Binding`,
w: `Lucent Singularity`,
e: `Prismatic Barrier`,
r: `Final Spark`
},
{
name: `Malphite`,
p: ` Shard of the Monolith`,
q: `Granite Shield`,
w: `Brutal Strikes`,
e: `Seismic Shard`,
r: `Ground Slam`
},
{
name: `Malzahar`,
p: `Void Shift`,
q: `Call of the Void`,
w: `Malefic Visions`,
e: `Void Swarm`,
r: `Nether Grasp`
},
{
name: `Maokai`,
p: `Sap Magic`,
q: `Bramble Smash`,
w: `Sapling Toss`,
e: `Twisted Advance`,
r: `Nature's Grasp`
},
{
name: `MasterYi`,
p: `Double Strike`,
q: `Alpha Strike`,
w: `Wuju Style`,
e: `Meditate`,
r: `Highlander`
},
{
name: `MissFortune`,
p: `Love Tap`,
q: `Double Up`,
w: `Make It Rain`,
e: `Strut`,
r: `Bullet Time`
},
{
name: `Mordekaiser`,
p: `Iron Man`,
q: `Mace of Spades`,
w: `Siphon of Destruction`,
e: `Harvester of Sorrow`,
r: `Children of the Grave`
},
{
name: `Morgana`,
p: ` Fallen Angel`,
q: `Soul Siphon`,
w: `Tormented Soil`,
e: `Dark Binding`,
r: `Black Shield`
},
{
name: `Nami`,
p: `Surging Tides`,
q: `Aqua Prison`,
w: `Tidecaller's Blessing`,
e: `Ebb and Flow`,
r: `Tidal Wave`
},
{
name: `Nasus`,
p: `Soul Eater`,
q: `Siphoning Strike`,
w: `Spirit Fire`,
e: `Wither`,
r: `Fury of the Sands`
},
{
name: `Nautilus`,
p: `Staggering Blow`,
q: `Dredge Line`,
w: `Riptide`,
e: `Titan's Wrath`,
r: `Depth Charge`
},
{
name: `Neeko`,
p: `Inherent Glamour`,
q: `Blooming Burst`,
w: `Tangle-Barbs`,
e: `Shapesplitter`,
r: `Pop Blossom`
},
{
name: `Nidalee`,
p: `Prowl`,
q: `Javelin Toss / Takedown`,
w: `Primal Surge / Swipe`,
e: `Bushwhack / Pounce`,
r: `Aspect of the Cougar`
},
{
name: `Nocturne`,
p: `Umbra Blades`,
q: `Duskbringer`,
w: `Unspeakable Horror`,
e: `Shroud of Darkness`,
r: `Paranoia`
},
{
name: `Nunu`,
p: `Visionary`,
q: `Consume`,
w: `Ice Blast`,
e: `Blood Boil`,
r: `Absolute Zero`
},
{
name: `Olaf`,
p: `Berserker Rage`,
q: `Undertow`,
w: `Reckless Swing`,
e: `Vicious Strikes`,
r: `Ragnarok`
},
{
name: `Orianna`,
p: `Clockwork Windup`,
q: `Command Attack`,
w: `Command Protect`,
e: `Command Dissonance`,
r: `Command Shockwave`
},
{
name: `Ornn`,
p: `Living Forge`,
q: `Volcanic Rupture`,
w: `Searing Charge`,
e: `Bellows Breath`,
r: `Call of the Forge God`
},
{
name: `Pantheon`,
p: `Aegis Protection`,
q: `Spear Shot`,
w: `Heartseeker Strike`,
e: `Aegis of Zeonia`,
r: `Grand Skyfall`
},
{
name: `Poppy`,
p: ` Keeper of the Hammer`,
q: `Iron Ambassador`,
w: `Steadfast Presence`,
e: `Hammer Shock`,
r: `Heroic Charge`
},
{
name: `Pyke`,
p: `Gift of the Drowned Ones`,
q: `Bone Skewer`,
w: `Phantom Undertow`,
e: `Ghostwater Dive`,
r: `Death From Below`
},
{
name: `Qiyana`,
p: `Royal Privlege`,
q: `Edge of Ixtal`,
e: `Elemental Wrath`,
w: `Terrashape`,
r: `Audacity`
},
{
name: `Quinn`,
p: ` Demacia's Wings`,
q: `Harrier`,
w: `Heightened Senses`,
e: `Blinding Assault`,
r: `Vault`
},
{
name: `Rakan`,
p: `Fey Feathers`,
q: `Gleaming Quill`,
w: `Battle Dance`,
e: `Grand Entrance`,
r: `The Quickness`
},
{
name: `Rammus`,
p: `Spiked Shell`,
q: `Powerball`,
w: `Frenzying Taunt`,
e: `Defensive Ball Curl`,
r: `Tremors`
},
{
name: `RekSai`,
p: `Fury of the Xer'Sai`,
q: `Queen's Wrath / Prey Seeker`,
w: `Furious Bite / Tunnel`,
e: `Burrow / Unburrow`,
r: `Void Rush`
},
{
name: `Renekton`,
p: `Reign of Anger`,
q: `Cull the Meek`,
w: `Slice`,
e: `Ruthless Predator`,
r: `Dominus`
},
{
name: `Rengar`,
p: `Unseen Predator`,
q: `Savagery`,
w: `Bola Strike`,
e: `Battle Roar`,
r: `Thrill of the Hunt`
},
{
name: `Riven`,
p: `Runic Blade`,
q: `Broken Wings`,
w: `Valor`,
e: `Ki Burst`,
r: `Blade of the Exile / Wind Slash`
},
{
name: `Rumble`,
p: `Junkyard Titan`,
q: `Flamespitter`,
w: `Electro Harpoon`,
e: `Scrap Shield`,
r: `The Equalizer`
},
{
name: `Ryze`,
p: `Arcane Mastery`,
q: `Overload`,
w: `Spell Flux`,
e: `Rune Prison`,
r: `Realm Warp`
},
{
name: `Samira`,
p: `Daredevil Impulse`,
q: `Flair`,
w: `Wild Rush`,
e: `Blade Whirl`,
r: `Infero Trigger`
},
{
name: `Sejuani`,
p: ` Fury of the North`,
q: `Fury of the North`,
w: `Winter's Wrath`,
e: `Arctic Assault`,
r: `Permafrost`
},
{
name: `Senna`,
p: `Absolution`,
q: `Piercing Darkness`,
w: `Curse of the Black Mist`,
e: `Last Embrace`,
r: `Dawning Shadow`
},
{
name: `Seraphine`,
p: `Stage Presence`,
q: `High Note`,
w: `Beat Drop`,
e: `Surround Sound`,
r: `Encore`
},
{
name: `Sett`,
p: `Pit Grit`,
q: `Knuckle Down`,
w: `Facebreaker`,
e: `Haymaker`,
r: `The Show Stopper`
},
{
name: `Shaco`,
p: `Backstab`,
q: `Deceive`,
w: `Two-Shiv Poison`,
e: `Jack in the Box`,
r: `Hallucinate`
},
{
name: `Shen`,
p: `Ki Barrier`,
q: `Twilight Assault`,
w: `Shadow Dash`,
e: `Spirit's Refuge`,
r: `Stand United`
},
{
name: `Shyvana`,
p: `Fury of the Dragonborn`,
q: `Twin Bite`,
w: `Flame Breath`,
e: `Burnout`,
r: `Dragon's Descent`
},
{
name: `Singed`,
p: `Noxious Slipstream`,
q: `Poison Trail`,
w: `Fling`,
e: `Mega Adhesive`,
r: `Insanity Potion`
},
{
name: `Sion`,
p: `Glory in Death / Death Surge`,
q: `Decimating Smash`,
w: `Roar of the Slayer`,
e: `Soul Furnace`,
r: `Unstoppable Onslaught`
},
{
name: `Sivir`,
p: `Fleet of Foot`,
q: `Boomerang Blade`,
w: `Spell Shield`,
e: `Ricochet`,
r: `On the Hunt`
},
{
name: `Skarner`,
p: `Crystal Spires`,
q: `Crystal Slash`,
w: `Fracture`,
e: `Crystalline Exoskeleton`,
r: `Impale`
},
{
name: `Sona`,
p: ` Maven of the Strings`,
q: `Power Chord`,
w: `Aria of Perseverance`,
e: `Hymn of Valor`,
r: `Song of Celerity`
},
{
name: `Soraka`,
p: `Salvation`,
q: `Starcall`,
w: `Equinox`,
e: `Astral Infusion`,
r: `Wish`
},
{
name: `Swain`,
p: `Carrion Renewal`,
q: `Decrepify`,
w: `Torment`,
e: `Nevermove`,
r: `Ravenous Flock`
},
{
name: `Sylas`,
p: `Petricite Burst`,
q: `Chain Leash`,
w: `Abscond / Abduct`,
e: `Kingslayer`,
r: `Hijack`
},
{
name: `Syndra`,
p: `Transcendent`,
q: `Dark Sphere`,
w: `Scatter the Weak`,
e: `Force of Will`,
r: `Unleashed Power`
},
{
name: `TahmKench`,
p: `An Acquired Taste`,
q: `Tongue Lash`,
w: `Thick Skin`,
e: `Devour / Regurgitate`,
r: `Abyssal Voyage`
},
{
name: `Taliyah`,
p: `Rock Surfing`,
q: `Threaded Volley`,
w: `Unraveled Earth`,
e: `Seismic Shove`,
r: `Weaver's Wall`
},
{
name: `Talon`,
p: `Blade's End`,
q: `Noxian Diplomacy`,
w: `Assassin's Path`,
e: `Rake`,
r: `Shadow Assault`
},
{
name: `Taric`,
p: `Bravado`,
q: `Starlight's Touch`,
w: `Dazzle`,
e: `Bastion`,
r: `Cosmic Radiance`
},
{
name: `Teemo`,
p: `Guerrilla Warfare`,
q: `Blinding Dart`,
w: `Toxic Shot`,
e: `Move Quick`,
r: `Noxious Trap`
},
{
name: `Thresh`,
p: `Damnation`,
q: `Death Sentence`,
w: `Flay`,
e: `Dark Passage`,
r: `The Box`
},
{
name: `Tristana`,
p: `Draw a Bead`,
q: `Rapid Fire`,
w: `Explosive Charge`,
e: `Rocket Jump`,
r: `Buster Shot`
},
{
name: `Trundle`,
p: `King's Tribute`,
q: `Chomp`,
w: `Pillar of Ice`,
e: `Frozen Domain`,
r: `Subjugate`
},
{
name: `Tryndamere`,
p: `Battle Fury`,
q: `Bloodlust`,
w: `Spinning Slash`,
e: `Mocking Shout`,
r: `Undying Rage`
},
{
name: `TwistedFate`,
p: `Loaded Dice`,
q: `Wild Cards`,
w: `Stacked Deck`,
e: `Pick a Card`,
r: `Destiny`
},
{
name: `Twitch`,
p: `Deadly Venom`,
q: `Ambush`,
w: `Contaminate`,
e: `Venom Cask`,
r: `Spray and Pray`
},
{
name: `Udyr`,
p: `Monkey's Agility`,
q: `Tiger Stance`,
w: `Bear Stance`,
e: `Turtle Stance`,
r: `Phoenix Stance`
},
{
name: `Urgot`,
p: `Echoing Flames`,
q: `Corrosive Charge`,
w: `Disdain`,
e: `Purge`,
r: `Fear Beyond Death`
},
{
name: `Varus`,
p: `Living Vengeance`,
q: `Piercing Arrow`,
w: `Hail of Arrows`,
e: `Blighted Quiver`,
r: `Chain of Corruption`
},
{
name: `Vayne`,
p: `Night Hunter`,
q: `Tumble`,
w: `Condemn`,
e: `Silver Bolts`,
r: `Final Hour`
},
{
name: `Veigar`,
p: `Phenomenal Evil Power`,
q: `Baleful Strike`,
w: `Event Horizon`,
e: `Dark Matter`,
r: `Primordial Burst`
},
{
name: `Velkoz`,
p: `Organic Deconstruction`,
q: `Plasma Fission`,
w: `Tectonic Disruption`,
e: `Void Rift`,
r: `Life Form Disintegration Ray`
},
{
name: `Vi`,
p: `Blast Shield`,
q: `Vault Breaker`,
w: `Excessive Force`,
e: `Denting Blows`,
r: `Assault and Battery`
},
{
name: `Viktor`,
p: `Glorious Evolution`,
q: `Siphon Power`,
w: `Death Ray`,
e: `Gravity Field`,
r: `Chaos Storm`
},
{
name: `Vladimir`,
p: `Crimson Pact`,
q: `Transfusion`,
w: `Tides of Blood`,
e: `Sanguine Pool`,
r: `Hemoplague`
},
{
name: `Volibear`,
p: `Chosen of the Storm`,
q: `Rolling Thunder`,
w: `Majestic Roar`,
e: `Frenzy`,
r: `Thunder Claws`
},
{
name: `Warwick`,
p: `Eternal Hunger`,
q: `Jaws of the Beast`,
w: `Primal Howl`,
e: `Blood Hunt`,
r: `Infinite Duress`
},
{
name: `Wukong`,
p: `Stone Skin`,
q: `Crushing Blow`,
w: `Nimbus Strike`,
e: `Decoy`,
r: `Cyclone`
},
{
name: `Xayah`,
p: `Clean Cuts`,
q: `Double Daggers`,
w: `Bladecaller`,
e: `Deadly Plumage`,
r: `Featherstorm`
},
{
name: `Xerath`,
p: `Mana Surge`,
q: `Arcanopulse`,
w: `Shocking Orb`,
e: `Eye of Destruction`,
r: `Rite of the Arcane`
},
{
name: `XinZhao`,
p: `Determination`,
q: `Three Talon Strike`,
w: `Audacious Charge`,
e: `Wind Becomes Lightning`,
r: `Crescent Guard`
},
{
name: `Yasuo`,
p: `Way of the Wanderer`,
q: `Steel Tempest`,
w: `Sweeping Blade`,
e: `Wind Wall`,
r: `Last Breath`
},
{
name: `Yone`,
p: `Way of the Hunter`,
q: `Mortal Steel`,
w: `Soul Unbound`,
e: `Spirit Cleave`,
r: `Fate Sealed`
},
{
name: `Yorick`,
p: ` Shepherd of Souls`,
q: `Shepherd of Souls`,
e: `Last Rites`,
w: `Dark Procession`,
r: `Mourning Mist`
},
{
name: `Yuumi`,
p: `Bop 'n' Block`,
q: `Prowling Projectile`,
w: `Zoomies`,
e: `You and Me!`,
r: `Final Chapter`
},
{
name: `Zac`,
p: `Cell Division`,
q: `Stretching Strikes`,
w: `Elastic Slingshot`,
e: `Unstable Matter`,
r: `Let's Bounce!`
},
{
name: `Zed`,
p: `Contempt for the Weak`,
q: `Razor Shuriken`,
w: `Shadow Slash`,
e: `Living Shadow`,
r: `Death Mark`
},
{
name: `Ziggs`,
p: `Short Fuse`,
q: `Bouncing Bomb`,
w: `Hexplosive Minefield`,
e: `Satchel Charge`,
r: `Mega Inferno Bomb`
},
{
name: `Zilean`,
p: `Time in a Bottle`,
q: `Time Bomb`,
w: `Time Warp`,
e: `Rewind`,
r: `Chronoshift`
},
{
name: `Zoe`,
p: `More Sparkles!`,
q: `Paddle Star`,
w: `Sleepy Trouble Bubble`,
e: `Spell Thief`,
r: `Portal Jump`
},
{
name: `Zyra`,
p: ` Rise of the Thorns`,
q: `Garden of Thorns`,
w: `Rampant Growth`,
e: `Deadly Spines`,
r: `Grasping Roots`
}

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
