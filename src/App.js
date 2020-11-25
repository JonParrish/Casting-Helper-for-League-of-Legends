const path = require('path')
import React from "react";
import FontSizeChanger from 'react-font-size-changer';
import Select from 'react-select';
// import { Dropdown as Dropdown } from 'react-css-dropdown'
// import 'react-css-dropdown/dist/index.css'
//import { StyleSheet, Text, View } from "react-native";
// function readFile(file) {
//   var f = new File([""], "filename.txt", {type: "text/plain"})
//   if (f) {
//     var r = new FileReader();
//     r.onload = function(e) { 
//         //var contents = e.target.result;             
//         var ct = r.result;
//         var words = ct.split(' ');            
//         //alert(words[0] + 'test'); //this alert goes off but no values from words[0] are displayed
//     }
//     r.readAsText(f);
//   } else { 
//     alert("Failed to load file");
//   }
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '', 
      test: [ ],
      champList: [ ],
      champName: ' ',
      fakeName: ' ',
      tempChampQ: ' ', 
      tempChampW: ' ', 
      tempChampE: ' ', 
      tempChampR: ' ',
      allyChampions: [ ],
      value2: '', 
      test2: [ ],
      champName2: ' ',
      fakeName2: ' ',
      tempChampQe: ' ', 
      tempChampWe: ' ', 
      tempChampEe: ' ', 
      tempChampRe: ' ',
      enemyChampions: [ ],
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
        { value: `Zyra`, label: `Zyra` },
       ],
       abilites: [
        { name: `Aatrox`, p: `Blood Well`, q: `Dark Flight`, e: `Blood Thirst / Blood Price`, w:`Blades of Torment`, r:`Massacre`},
        { name: `Ahri`, p: `Essence Theft`, q: `Orb of Deception`, e: `Fox-Fire`, w:`Charm`, r:`Spirit Rush`},
        { name: `Akali`, p: `Twin Disciplines`, q: `Mark of the Assassin`, e: `Twilight Shroud`, w:`Crescent Slash`, r:`Shadow Dance`},
        { name: `Alistar`, p: `Triumphant Roar`, q: `Pulverize`, e: `Headbutt`, w:`Trample`, r:`Unbreakable Will`},
        { name: `Amumu`, p: `Cursed Touch`, q: `Bandage Toss`, e: `Despair`, w:`Tantrum`, r:`Curse of the Sad Mummy`},
        { name: `Anivia`, p: `Rebirth`, q: `Flash Frost`, e: `Crystallize`, w:`Frostbite`, r:`Glacial Storm`},
        { name: `Annie`, p: `Pyromania`, q: `Disintegrate`, e: `Incinerate`, w:`Molten Shield`, r:`Summon Tibbers`},
        { name: `Aphelios`, p: `The Hitman and the Seer `, q: `Weapons of the Faithful`, e: `Calibrum, Severum, Gravitum, Infernum, Crescendum`, w:`Phase `, r:`Moonlight Vigil`},
        { name: `Ashe`, p: `Frost Shot`, q: `Ranger's Focus`, e: `Volley`, w:`Hawkshot`, r:`Enchanted Crystal Arrow`},
        { name: `AurelionSol`, p: `Center of the Universe`, q: `Starsurge`, e: `Celestial Expansion`, w:`Comet of Legend`, r:`Voice of Light`},
        { name: `Azir`, p: `Shurima's Legacy`, q: `Conquering Sands`, e: `Arise!`, w:`Shifting Sands`, r:`Emperor's Divide`},
        { name: `Bard`, p: `Traveler's Call`, q: `Cosmic Binding`, e: `Caretaker's Shrine`, w:`Magical Journey`, r:`Tempered Fate`},
        { name: `Blitzcrank`, p: `Mana Barrier`, q: `Rocket Grab`, e: `Overdrive`, w:`Power Fist`, r:`Static Field`},
        { name: `Brand`, p: `Blaze`, q: `Sear`, e: `Pillar of Flame`, w:`Conflagration`, r:`Pyroclasm`},
        { name: `Braum`, p: `Concussive Blows`, q: `Winter's Bite`, e: `Stand Behind Me`, w:`Unbreakable`, r:`Glacial Fissure`},
        { name: `Caitlyn`, p: `Headshot`, q: `Piltover Peacemaker`, e: `Yordle Snap Trap`, w:`90 Caliber Net`, r:`Ace in the Hole`},
        { name: `Camille`, p: `Adaptive Defenses`, q: `Precision Protocol`, e: `Tactical Sweep`, w:`Hookshot`, r:`The Hextech Ultimatum`},
        { name: `Cassiopeia`, p: `Serpentine Grace`, q: `Noxious Blast`, e: `Miasma`, w:`Twin Fang`, r:`Petrifying Gaze`},
        { name: `Chogath`, p: `Carnivore`, q: `Rupture`, e: `Feral Scream`, w:`Vorpal Spikes`, r:`Feast`},
        { name: `Corki`, p: `Hextech Munitions`, q: `Phosphorus Bomb`, e: `Valkyrie / Special Delivery`, w:`Gatling Gun`, r:`Missile Barrage`},
        { name: `Darius`, p: `Hemorrhage`, q: `Decimate`, e: `Crippling Strike`, w:`Apprehend`, r:`Noxian Guillotine`},
        { name: `Diana`, p: ` Scorn of the Moon`, q: `Moonsilver Blade`, e: `Crescent Strike`, w:`Pale Cascade`, r:`Moonfall`},
        { name: `DrMundo`, p: `Adrenaline Rush`, q: `Infected Cleaver`, e: `Burning Agony`, w:`Masochism`, r:`Sadism`},
        { name: `Draven`, p: `League of Draven`, q: `Spinning Axe`, e: `Blood Rush`, w:`Stand Aside`, r:`Whirling Death`},
        { name: `Ekko`, p: `Z-Drive Resonance`, q: `Timewinder`, e: `Parallel Convergence`, w:`Phase Dive`, r:`Chronobreak`},
        { name: `Elise`, p: `Spider Queen`, q: `Neurotoxin / Venomous Bite`, e: `Volatile Spiderling / Skittering Frenzy`, w:`Cocoon / Rappel`, r:`Spider Form / Human Form`},
        { name: `Evelynn`, p: ` Agony's Embrace`, q: `Demon Shade`, e: `Hate Spike`, w:`Allure`, r:`Whiplash`},
        { name: `Ezreal`, p: `Rising Spell Force`, q: `Mystic Shot`, e: `Essence Flux`, w:`Arcane Shift`, r:`Trueshot Barrage`},
        { name: `Fiddlesticks`, p: `Dread`, q: `Terrify`, e: `Drain`, w:`Dark Wind`, r:`Crowstorm`},
        { name: `Fiora`, p: `Duelist's Dance`, q: `Lunge`, e: `Riposte`, w:`Bladework`, r:`Grand Challenge`},
        { name: `Fizz`, p: `Nimble Fighter`, q: `Urchin Strike`, e: `Seastone Trident`, w:`Playful / Trickster`, r:`Chum the Waters`},
        { name: `Galio`, p: `Colossal Smash`, q: `Winds of War`, e: `Shield of Durand`, w:`Justice Punch`, r:`Hero's Entrance`},
        { name: `Gangplank`, p: `Trial by Fire`, q: `Parrrley`, e: `Remove Scurvy`, w:`Powder Keg`, r:`Cannon Barrage`},
        { name: `Garen`, p: `Perseverance`, q: `Decisive Strike`, e: `Courage`, w:`Judgment`, r:`Demacian Justice`},
        { name: `Gnar`, p: `Rage Gene`, q: `Boomerang Throw / Boulder Toss`, e: `Hyper / Wallop`, w:`Hop / Crunch`, r:`GNAR!`},
        { name: `Gragas`, p: `Happy Hour`, q: `Barrel Roll`, e: `Drunken Rage`, w:`Body Slam`, r:`Explosive Cask`},
        { name: `Graves`, p: `New Destiny`, q: `End of the Line`, e: `Smoke Screen`, w:`Quickdraw`, r:`Collateral Damage`},
        { name: `Hecarim`, p: `Warpath`, q: `Rampage`, e: `Spirit of Dread`, w:`Devastating Charge`, r:`Onslaught of Shadows`},
        { name: `Heimerdinger`, p: `Hextech Affinity`, q: `H-28G Evolution Turret`, e: `Hextech Micro-Rockets`, w:`CH-2 Electron Storm Grenade`, r:`UPGRADE!!!`},
        { name: `Illaoi`, p: `Prophet of an Elder God`, q: `Tentacle Smash`, e: `Harsh Lesson`, w:`Test of Spirit`, r:`Leap of Faith`},
        { name: `Irelia`, p: `Ionian Fervor`, q: `Bladesurge`, e: `Hiten Style`, w:`Equilibrium Strike`, r:`Transcendent Blades`},
        { name: `Ivern`, p: `Friend of the Forest`, q: `Rootcaller`, e: `Brushmaker`, w:`Triggerseed`, r:`Daisy!`},
        { name: `Janna`, p: `Tailwind`, q: `Howling Gale`, e: `Zephyr`, w:`Eye of the Storm`, r:`Monsoon`},
        { name: `JarvanIV`, p: `Martial Cadence`, q: `Dragon Strike`, e: `Golden Aegis`, w:`Demacian Standard`, r:`Cataclysm`},
        { name: `Jax`, p: ` Grandmaster at Arms`, q: `Relentless Assault`, e: `Leap Strike`, w:`Empower`, r:`Counter Strike`},
        { name: `Jayce`, p: `Hextech Capacitor`, q: `To the Skies! / Shock Blast`, e: `Lightning Field / Hyper Charge`, w:`Thundering Blow / Acceleration Gate`, r:`Transform Mercury Cannon / Transform Mercury Hammer`},
        { name: `Jhin`, p: `Whisper`, q: `Dancing Grenade`, e: `Deadly Flourish`, w:`Captive Audience`, r:`Curtain Call`},
        { name: `Jinx`, p: `Get Excited!`, q: `Switcheroo!`, e: `Zap!`, w:`Flame Chompers!`, r:`Super Mega Death Rocket!`},
        { name: `Kaisa`, p: `Second Skin`, q: `Icathian Rain`, e: `Void Seeker`, w:`Supercharge`, r:`Killer Instinct`},
        { name: `Kalista`, p: `Martial Poise`, q: `Pierce`, e: `Sentinel`, w:`Rend`, r:`Fate's Call`},
        { name: `Karma`, p: `Gathering Fire`, q: `Inner Flame`, e: `Focused Resolve`, w:`Inspire`, r:`Mantra`},
        { name: `Karthus`, p: `Death Defied`, q: `Lay Waste`, e: `Wall of Pain`, w:`Defile`, r:`Requiem`},
        { name: `Kassadin`, p: `Void Stone`, q: `Null Sphere`, e: `Nether Blade`, w:`Force Pulse`, r:`Riftwalk`},
        { name: `Katarina`, p: `Voracity`, q: `Bouncing Blade`, e: `Preparation`, w:`Shunpo`, r:`Death Lotus`},
        { name: `Kayle`, p: `Holy Fervor`, q: `Reckoning`, e: `Divine Blessing`, w:`Righteous Fury`, r:`Intervention`},
        { name: `Kayn`, p: `The Darkin Scythe`, q: `Reaping Slash`, e: `Blade's Reach`, w:`Shadow Step`, r:`Umbral Trespass`},
        { name: `Kennen`, p: `Mark of the Storm`, q: `Thundering Shuriken`, e: `Electrical Surge`, w:`Lightning Rush`, r:`Slicing Maelstrom`},
        { name: `Khazix`, p: `Unseen Threat`, q: `Taste Their Fear`, e: `Void Spike`, w:`Leap`, r:`Void Assault`},
        { name: `Kindred`, p: `Mark of the Kindred`, q: `Dance of Arrows`, e: `Wolf's Frenzy`, w:`Mounting Dread`, r:`Lamb's Respite`},
        { name: `Kled`, p: `Skaarl the Cowardly Lizard`, q: `Beartrap on a Rope / Pocket Pistol`, e: `Violent Tendencies`, w:`Jousting`, r:`Chaaaaaaaarge!!!`},
        { name: `KogMaw`, p: `Icathian Surprise`, q: `Caustic Spittle`, e: `Bio-Arcane Barrage`, w:`Void Ooze`, r:`Living Artillery`},
        { name: `LeBlanc`, p: `Sigil of Malice`, q: `Shatter Orb`, e: `Distortion`, w:`Ethereal Chains`, r:`Mimic / Mimic Shatter Orb`},
        { name: `LeeSin`, p: `Flurry`, q: `Sonic Wave / Resonating Strike`, e: `Safeguard / Iron Will`, w:`Tempest / Cripple`, r:`Dragon's Rage`},
        { name: `Leona`, p: `Sunlight`, q: `Shield of Daybreak`, e: `Eclipse`, w:`Zenith Blade`, r:`Solar Flare`},
        { name: `Lillia`, p: `Dream-Laden Bough`, q: `Blooming Blows`, e: `Watch Out! Eep! `, w:`Swirlseed`, r:`Lifting Lullaby`},
        { name: `Lissandra`, p: `Iceborn`, q: `Ice Shard`, e: `Ring of Frost`, w:`Glacial Path`, r:`Frozen Tomb`},
        { name: `Lucian`, p: `Lightslinger`, q: `Piercing Light`, e: `Ardent Blaze`, w:`Relentless Pursuit`, r:`The Culling`},
        { name: `Lulu`, p: `Pix`, q: ` Faerie Companion`, e: `Glitterlance`, w:`Whimsy`, r:`Help`},
        { name: `Lux`, p: `Illumination`, q: `Light Binding`, e: `Prismatic Barrier`, w:`Lucent Singularity`, r:`Final Spark`},
        { name: `Malphite`, p: ` Shard of the Monolith`, q: `Granite Shield`, e: `Seismic Shard`, w:`Brutal Strikes`, r:`Ground Slam`},
        { name: `Malzahar`, p: `Void Shift`, q: `Call of the Void`, e: `Void Swarm`, w:`Malefic Visions`, r:`Nether Grasp`},
        { name: `Maokai`, p: `Sap Magic`, q: `Bramble Smash`, e: `Twisted Advance`, w:`Sapling Toss`, r:`Nature's Grasp`},
        { name: `MasterYi`, p: `Double Strike`, q: `Alpha Strike`, e: `Meditate`, w:`Wuju Style`, r:`Highlander`},
        { name: `MissFortune`, p: `Love Tap`, q: `Double Up`, e: `Strut`, w:`Make It Rain`, r:`Bullet Time`},
        { name: `Mordekaiser`, p: `Iron Man`, q: `Mace of Spades`, e: `Harvester of Sorrow`, w:`Siphon of Destruction`, r:`Children of the Grave`},
        { name: `Morgana`, p: ` Fallen Angel`, q: `Soul Siphon`, e: `Dark Binding`, w:`Tormented Soil`, r:`Black Shield`},
        { name: `Nami`, p: `Surging Tides`, q: `Aqua Prison`, e: `Ebb and Flow`, w:`Tidecaller's Blessing`, r:`Tidal Wave`},
        { name: `Nasus`, p: `Soul Eater`, q: `Siphoning Strike`, e: `Wither`, w:`Spirit Fire`, r:`Fury of the Sands`},
        { name: `Nautilus`, p: `Staggering Blow`, q: `Dredge Line`, e: `Titan's Wrath`, w:`Riptide`, r:`Depth Charge`},
        { name: `Neeko`, p: `Inherent Glamour`, q: `Blooming Burst`, e: `Shapesplitter`, w:`Tangle-Barbs`, r:`Pop Blossom`},
        { name: `Nidalee`, p: `Prowl`, q: `Javelin Toss / Takedown`, e: `Bushwhack / Pounce`, w:`Primal Surge / Swipe`, r:`Aspect of the Cougar`},
        { name: `Nocturne`, p: `Umbra Blades`, q: `Duskbringer`, e: `Shroud of Darkness`, w:`Unspeakable Horror`, r:`Paranoia`},
        { name: `Nunu`, p: `Visionary`, q: `Consume`, e: `Blood Boil`, w:`Ice Blast`, r:`Absolute Zero`},
        { name: `Olaf`, p: `Berserker Rage`, q: `Undertow`, e: `Vicious Strikes`, w:`Reckless Swing`, r:`Ragnarok`},
        { name: `Orianna`, p: `Clockwork Windup`, q: `Command Attack`, e: `Command Dissonance`, w:`Command Protect`, r:`Command Shockwave`},
        { name: `Ornn`, p: `Living Forge`, q: `Volcanic Rupture`, e: `Bellows Breath`, w:`Searing Charge`, r:`Call of the Forge God`},
        { name: `Pantheon`, p: `Aegis Protection`, q: `Spear Shot`, e: `Aegis of Zeonia`, w:`Heartseeker Strike`, r:`Grand Skyfall`},
        { name: `Poppy`, p: ` Keeper of the Hammer`, q: `Iron Ambassador`, e: `Hammer Shock`, w:`Steadfast Presence`, r:`Heroic Charge`},
        { name: `Pyke`, p: `Gift of the Drowned Ones`, q: `Bone Skewer`, e: `Ghostwater Dive`, w:`Phantom Undertow`, r:`Death From Below`},
        { name: `Qiyana`, p: `Royal Privlege`, q: `Edge of Ixtal`, e: `Elemental Wrath`, w:`Terrashape`, r:`Audacity`},
        { name: `Quinn`, p: ` Demacia's Wings`, q: `Harrier`, e: `Blinding Assault`, w:`Heightened Senses`, r:`Vault`},
        { name: `Rakan`, p: `Fey Feathers`, q: `Gleaming Quill`, e: `Grand Entrance`, w:`Battle Dance`, r:`The Quickness`},
        { name: `Rammus`, p: `Spiked Shell`, q: `Powerball`, e: `Defensive Ball Curl`, w:`Frenzying Taunt`, r:`Tremors`},
        { name: `RekSai`, p: `Fury of the Xer'Sai`, q: `Queen's Wrath / Prey Seeker`, e: `Burrow / Unburrow`, w:`Furious Bite / Tunnel`, r:`Void Rush`},
        { name: `Renekton`, p: `Reign of Anger`, q: `Cull the Meek`, e: `Ruthless Predator`, w:`Slice`, r:`Dominus`},
        { name: `Rengar`, p: `Unseen Predator`, q: `Savagery`, e: `Battle Roar`, w:`Bola Strike`, r:`Thrill of the Hunt`},
        { name: `Riven`, p: `Runic Blade`, q: `Broken Wings`, e: `Ki Burst`, w:`Valor`, r:`Blade of the Exile / Wind Slash`},
        { name: `Rumble`, p: `Junkyard Titan`, q: `Flamespitter`, e: `Scrap Shield`, w:`Electro Harpoon`, r:`The Equalizer`},
        { name: `Ryze`, p: `Arcane Mastery`, q: `Overload`, e: `Rune Prison`, w:`Spell Flux`, r:`Realm Warp`},
        { name: `Samira`, p: `Daredevil Impulse`, q: `Flair`, e: `Blade Whirl`, w:`Wild Rush`, r:`Infero Trigger`},
        { name: `Sejuani`, p: ` Fury of the North`, q: `Fury of the North`, e: `Arctic Assault`, w:`Winter's Wrath`, r:`Permafrost`},
        { name: `Senna`, p: `Absolution`, q: `Piercing Darkness`, e: `Last Embrace`, w:`Curse of the Black Mist`, r:`Dawning Shadow`},
        { name: `Seraphine`, p: `Stage Presence`, q: `High Note`, e: `Surround Sound`, w:`Beat Drop`, r:`Encore`},
        { name: `Sett`, p: `Pit Grit`, q: `Knuckle Down`, e: `Haymaker`, w:`Facebreaker`, r:`The Show Stopper`},
        { name: `Shaco`, p: `Backstab`, q: `Deceive`, e: `Jack in the Box`, w:`Two-Shiv Poison`, r:`Hallucinate`},
        { name: `Shen`, p: `Ki Barrier`, q: `Twilight Assault`, e: `Spirit's Refuge`, w:`Shadow Dash`, r:`Stand United`},
        { name: `Shyvana`, p: `Fury of the Dragonborn`, q: `Twin Bite`, e: `Burnout`, w:`Flame Breath`, r:`Dragon's Descent`},
        { name: `Singed`, p: `Noxious Slipstream`, q: `Poison Trail`, e: `Mega Adhesive`, w:`Fling`, r:`Insanity Potion`},
        { name: `Sion`, p: `Glory in Death / Death Surge`, q: `Decimating Smash`, e: `Soul Furnace`, w:`Roar of the Slayer`, r:`Unstoppable Onslaught`},
        { name: `Sivir`, p: `Fleet of Foot`, q: `Boomerang Blade`, e: `Ricochet`, w:`Spell Shield`, r:`On the Hunt`},
        { name: `Skarner`, p: `Crystal Spires`, q: `Crystal Slash`, e: `Crystalline Exoskeleton`, w:`Fracture`, r:`Impale`},
        { name: `Sona`, p: ` Maven of the Strings`, q: `Power Chord`, e: `Hymn of Valor`, w:`Aria of Perseverance`, r:`Song of Celerity`},
        { name: `Soraka`, p: `Salvation`, q: `Starcall`, e: `Astral Infusion`, w:`Equinox`, r:`Wish`},
        { name: `Swain`, p: `Carrion Renewal`, q: `Decrepify`, e: `Nevermove`, w:`Torment`, r:`Ravenous Flock`},
        { name: `Sylas`, p: `Petricite Burst`, q: `Chain Leash`, e: `Kingslayer`, w:`Abscond / Abduct`, r:`Hijack`},
        { name: `Syndra`, p: `Transcendent`, q: `Dark Sphere`, e: `Force of Will`, w:`Scatter the Weak`, r:`Unleashed Power`},
        { name: `TahmKench`, p: `An Acquired Taste`, q: `Tongue Lash`, e: `Devour / Regurgitate`, w:`Thick Skin`, r:`Abyssal Voyage`},
        { name: `Taliyah`, p: `Rock Surfing`, q: `Threaded Volley`, e: `Seismic Shove`, w:`Unraveled Earth`, r:`Weaver's Wall`},
        { name: `Talon`, p: `Blade's End`, q: `Noxian Diplomacy`, e: `Rake`, w:`Assassin's Path`, r:`Shadow Assault`},
        { name: `Taric`, p: `Bravado`, q: `Starlight's Touch`, e: `Bastion`, w:`Dazzle`, r:`Cosmic Radiance`},
        { name: `Teemo`, p: `Guerrilla Warfare`, q: `Blinding Dart`, e: `Move Quick`, w:`Toxic Shot`, r:`Noxious Trap`},
        { name: `Thresh`, p: `Damnation`, q: `Death Sentence`, e: `Dark Passage`, w:`Flay`, r:`The Box`},
        { name: `Tristana`, p: `Draw a Bead`, q: `Rapid Fire`, e: `Rocket Jump`, w:`Explosive Charge`, r:`Buster Shot`},
        { name: `Trundle`, p: `King's Tribute`, q: `Chomp`, e: `Frozen Domain`, w:`Pillar of Ice`, r:`Subjugate`},
        { name: `Tryndamere`, p: `Battle Fury`, q: `Bloodlust`, e: `Mocking Shout`, w:`Spinning Slash`, r:`Undying Rage`},
        { name: `TwistedFate`, p: `Loaded Dice`, q: `Wild Cards`, e: `Pick a Card`, w:`Stacked Deck`, r:`Destiny`},
        { name: `Twitch`, p: `Deadly Venom`, q: `Ambush`, e: `Venom Cask`, w:`Contaminate`, r:`Spray and Pray`},
        { name: `Udyr`, p: `Monkey's Agility`, q: `Tiger Stance`, e: `Turtle Stance`, w:`Bear Stance`, r:`Phoenix Stance`},
        { name: `Urgot`, p: `Echoing Flames`, q: `Corrosive Charge`, e: `Purge`, w:`Disdain`, r:`Fear Beyond Death`},
        { name: `Varus`, p: `Living Vengeance`, q: `Piercing Arrow`, e: `Blighted Quiver`, w:`Hail of Arrows`, r:`Chain of Corruption`},
        { name: `Vayne`, p: `Night Hunter`, q: `Tumble`, e: `Silver Bolts`, w:`Condemn`, r:`Final Hour`},
        { name: `Veigar`, p: `Phenomenal Evil Power`, q: `Baleful Strike`, e: `Dark Matter`, w:`Event Horizon`, r:`Primordial Burst`},
        { name: `Velkoz`, p: `Organic Deconstruction`, q: `Plasma Fission`, e: `Void Rift`, w:`Tectonic Disruption`, r:`Life Form Disintegration Ray`},
        { name: `Vi`, p: `Blast Shield`, q: `Vault Breaker`, e: `Denting Blows`, w:`Excessive Force`, r:`Assault and Battery`},
        { name: `Viktor`, p: `Glorious Evolution`, q: `Siphon Power`, e: `Gravity Field`, w:`Death Ray`, r:`Chaos Storm`},
        { name: `Vladimir`, p: `Crimson Pact`, q: `Transfusion`, e: `Sanguine Pool`, w:`Tides of Blood`, r:`Hemoplague`},
        { name: `Volibear`, p: `Chosen of the Storm`, q: `Rolling Thunder`, e: `Frenzy`, w:`Majestic Roar`, r:`Thunder Claws`},
        { name: `Warwick`, p: `Eternal Hunger`, q: `Jaws of the Beast`, e: `Blood Hunt`, w:`Primal Howl`, r:`Infinite Duress`},
        { name: `Wukong`, p: `Stone Skin`, q: `Crushing Blow`, e: `Decoy`, w:`Nimbus Strike`, r:`Cyclone`},
        { name: `Xayah`, p: `Clean Cuts`, q: `Double Daggers`, e: `Deadly Plumage`, w:`Bladecaller`, r:`Featherstorm`},
        { name: `Xerath`, p: `Mana Surge`, q: `Arcanopulse`, e: `Eye of Destruction`, w:`Shocking Orb`, r:`Rite of the Arcane`},
        { name: `XinZhao`, p: `Determination`, q: `Three Talon Strike`, e: `Wind Becomes Lightning`, w:`Audacious Charge`, r:`Crescent Guard`},
        { name: `Yasuo`, p: `Way of the Wanderer`, q: `Steel Tempest`, e: `Wind Wall`, w:`Sweeping Blade`, r:`Last Breath`},
        { name: `Yone`, p: `Way of the Hunter`, q: `Mortal Steel`, e: `Spirit Cleave`, w:`Soul Unbound`, r:`Fate Sealed`},
        { name: `Yorick`, p: ` Shepherd of Souls`, q: `Shepherd of Souls`, e: `Last Rites`, w:`Dark Procession`, r:`Mourning Mist`},
        { name: `Yuumi`, p: `Bop 'n' Block`, q: `Prowling Projectile`, e: `You and Me!`, w:`Zoomies`, r:`Final Chapter`},
        { name: `Zac`, p: `Cell Division`, q: `Stretching Strikes`, e: `Unstable Matter`, w:`Elastic Slingshot`, r:`Let's Bounce!`},
        { name: `Zed`, p: `Contempt for the Weak`, q: `Razor Shuriken`, e: `Living Shadow`, w:`Shadow Slash`, r:`Death Mark`},
        { name: `Ziggs`, p: `Short Fuse`, q: `Bouncing Bomb`, e: `Satchel Charge`, w:`Hexplosive Minefield`, r:`Mega Inferno Bomb`},
        { name: `Zilean`, p: `Time in a Bottle`, q: `Time Bomb`, e: `Rewind`, w:`Time Warp`, r:`Chronoshift`},
        { name: `Zoe`, p: `More Sparkles!`, q: `Paddle Star`, e: `Spell Thief`, w:`Sleepy Trouble Bubble`, r:`Portal Jump`},
        { name: `Zyra`, p: ` Rise of the Thorns`, q: `Garden of Thorns`, e: `Deadly Spines`, w:`Rampant Growth`, r:`Grasping Roots`},

       ],
      tempChampUwU: { name: `Test`, p: `passive`, q: `qqq`, e: `eee`, w:`www`, r:`rrrr`},
      
    };
 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.state.champList = readFile("champNames.txt");
  }

  //function to clear all fields and arrays of champions
  clearAllFields(id, event) {
    if (id === "clear"){
      var tempArray3 = [ ]
      var tempArray4 = [ ]
      this.setState({allyChampions: tempArray3})
      this.setState({enemyChampions: tempArray4})
      this.setState({value: ""})
    } else {}
    event.preventDefault();
  }


  handleChange(vv) {
    // this.setState({value: this.refs.chosenValue});
     this.setState({value: vv});
     console.log("Chosen Value:   " + this.state.value);
  }
  
  handleSubmit(id, event) {
    console.log('Current Value is: ' + this.state.value.value);
    fetch(`http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion/${this.state.value.value}.json`) 
    .then(response => response.json())
    .then(json => {
      this.setState({
        test: JSON.parse(JSON.stringify(json)),
      })

      var containsRed = id;
      //var containsBlue = event.target.id;
      
      if (containsRed === 'RedTeam' || containsRed === 'red') {

        
        console.log("REEEEEEEEEEEEEEEEEDDDDDD")
        // this.setState({ champName2: this.state.value.value});
        // this.setState({ tempChampQe: `this.state.test.data.${this.state.value.value}.spells[0].name`})
        // this.setState({ tempChampWe: `this.state.test.data.${this.state.value.value}.spells[1].name`})
        // this.setState({ tempChampEe: `this.state.test.data.${this.state.value.value}.spells[2].name`})
        // this.setState({ tempChampRe: `this.state.test.data.${this.state.value.value}.spells[3].name`})

        var array = this.state.abilites;
        var champdata = array.find(x => x.name === this.state.value.value);

        console.log(champdata);
        this.setState({ champName2: this.state.value.value});
        this.setState({ tempChampQe: champdata.q})
        this.setState({ tempChampWe: champdata.w})
        this.setState({ tempChampEe: champdata.e})
        this.setState({ tempChampRe: champdata.r});

        // var i = 0; 
        // for (i = 0; i < 153; i++) {
        //   console.log(this.state.abilities[i].name);
        //   if (this.state.abilities[i].name === this.state.value.value) {
        //     console.log(this.state.abilities[i]);
        //   }
        // }
      




        //Creates a tempArray out of the current champions array and pushes the new champion on to the end of it, adding to the array the new champ's info. 
        var temparray2 = this.state.enemyChampions;
        temparray2.push( this.state.champName2, 
          (this.state.tempChampQe),
          (this.state.tempChampWe),
          (this.state.tempChampEe),
          (this.state.tempChampRe)); 
        
        //Sets champArray to the tempArray with the new champ's info and the old, combined. 
        this.setState({enemyChampions: temparray2})
        // console.log("tesssst " + this.state.allyChampions[0]);
        // console.log("tesssst " + this.state.allyChampions[1]);
        //console.log("Champ Array:  " + this.state.allyChampions);
  
        console.log(json);
  /* Works to display Champion info to console. */
        //eslint-disable-next-line 
        console.log(this.state.champName2 +"'s Q is: "+ (this.state.tempChampQe));
        console.log(this.state.champName2 +"'s W is: "+ (this.state.tempChampWe));
        console.log(this.state.champName2 +"'s E is: "+ (this.state.tempChampEe));
        console.log(this.state.champName2 +"'s R should be: "+ (this.state.tempChampRe))
      }
      else {
        console.log("BLUUUUUUUUUUUE")

        var array = this.state.abilites;
        var champdata = array.find(x => x.name === this.state.value.value);

        console.log(champdata);
        this.setState({ champName: this.state.value.value});
        this.setState({ tempChampQ: champdata.q})
        this.setState({ tempChampW: champdata.w})
        this.setState({ tempChampE: champdata.e})
        this.setState({ tempChampR: champdata.r});

      //Creates a tempArray out of the current champions array and pushes the new champion on to the end of it, adding to the array the new champ's info. 
      var temparray = this.state.allyChampions;
      temparray.push( this.state.champName, 
        (this.state.tempChampQ),
        (this.state.tempChampW),
        (this.state.tempChampE),
        (this.state.tempChampR)); 

      //Sets champArray to the tempArray with the new champ's info and the old, combined. 
      this.setState({allyChampions: temparray})
      // console.log("tesssst " + this.state.allyChampions[0]);
      // console.log("tesssst " + this.state.allyChampions[1]);
      //console.log("Champ Array:  " + this.state.allyChampions);

      console.log(json)
/* Works to display Champion info to console. */
      //eslint-disable-next-line 
      console.log(this.state.champName +"'s Q is: "+ (this.state.tempChampQ));
      console.log(this.state.champName +"'s W is: "+ (this.state.tempChampW));
      console.log(this.state.champName +"'s E is: "+ (this.state.tempChampE));
      console.log(this.state.champName +"'s R should be: "+ (this.state.tempChampR))

    }
    this.setState({value: ""});
    });

     event.preventDefault();
  }

  render() {
    // var { test } = this.state;
    return (
      <div              
        style = {{
          padding: '25px 50px 75px 30%',
          align: 'center',
          width: '50%'
        }}>
        
        <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            down: <span style={{'fontSize': '20px', align: 'right'}}>A</span>,
            up: <span style={{'fontSize': '36px'}}>A</span>,
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
          <button style = {{ position: 'absolute', right: 0, top: '20px' }} onClick={(e) => this.clearAllFields('clear', e)}>Clear All</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Champion Lookup: 
            <Select value="testV" onChange={this.handleChange} options={this.state.options} />
          </label>
          <br />
          <button  style = {{ width: '40%', padding: '10px'}} onClick={(e) => this.handleSubmit('blue', e)}>Add to Blue</button>
          <button  style = {{ width: '40%', padding: '10px'}} onClick={(e) => this.handleSubmit('red', e)}>Add to Red</button>

        </form>
      </div>
      <div id="target"
              style={{
                position: 'absolute',
                left: '20px',
                width: '300px',
                border: '3px solid blue',
                padding: '10px',
                float: 'left'
                
              }}>
        <ul>
        <p className="content">
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
        
        
        <div id="target" 
        style={{
          position: 'absolute',
          right: '20px',
          width: '300px',
          border: '3px solid red',
          padding: '10px',
          float: 'right'
          
        }}>


          <ul>
            <p className="content">
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
    );
  }
  
}
