// дисклеймер 5 это 8, а 6 это 9


// Setup the new Howl.
const sound1 = new Howl({
    src: ['UNIT6111A.mp3']
});

// Setup the new Howl.
const sound2 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound3 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound4 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound5 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound6 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound7 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound8 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound9 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound10 = new Howl({
    src: ['UNIT70C.mp3']
});


const sound11 = new Howl({
    src: ['UNIT70C.mp3']
});

const sound12 = new Howl({
    src: ['UNIT70C.mp3']
});

let animation1_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container'), // required
    path: 'forbeta/attackstrelok.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation1_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container'), // required
    path: 'forbeta/staystrelok.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation1_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container'), // required
    path: 'forbeta/hurtstrelok.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation1_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container'), // required
    path: 'forbeta/weaponstrelok.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation2_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container2'), // required
    path: 'forbeta/attackmage.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation2_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container2'), // required
    path: 'forbeta/staymage.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation2_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container2'), // required
    path: 'forbeta/hurtmage.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation2_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container2'), // required
    path: 'forbeta/weaponmage.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation3_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container3'), // required
    path: 'forbeta/attackshoot.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation3_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container3'), // required
    path: 'forbeta/stayshoot.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation3_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container3'), // required
    path: 'forbeta/hurtshoot.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation3_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container3'), // required
    path: 'forbeta/weaponshoot.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation4_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container4'), // required
    path: 'forbeta/attackpaladin.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation4_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container4'), // required
    path: 'forbeta/staypaladin.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation4_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container4'), // required
    path: 'forbeta/hurtpaladin.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation4_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container4'), // required
    path: 'forbeta/weaponpaladin.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation5_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container5'), // required
    path: 'forbeta/attackberserk.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation5_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container5'), // required
    path: 'forbeta/stayberserk.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation5_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container5'), // required
    path: '/forbeta/hurtberserk.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation5_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container5'), // required
    path: 'forbeta/weaponberserk.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation6_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container6'), // required
    path: 'forbeta/attackdark.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation6_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container6'), // required
    path: 'forbeta/staydark.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation6_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container6'), // required
    path: 'forbeta/hurtdark.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation6_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container6'), // required
    path: 'forbeta/weapondark.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation7_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container7'), // required
    path: 'attack2.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation7_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container7'), // required
    path: 'stay2.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation7_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container7'), // required
    path: 'hurt2.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation7_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container7'), // required
    path: 'weapon2.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation8_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container8'), // required
    path: 'forbeta/attackpagas.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation8_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container8'), // required
    path: 'forbeta/staypagas.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation8_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container8'), // required
    path: 'forbeta/hurtpagas.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation8_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container8'), // required
    path: 'forbeta/weaponpagas.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation9_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container9'), // required
    path: 'forbeta/attackdospeh.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation9_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container9'), // required
    path: 'forbeta/staydospeh.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation9_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container9'), // required
    path: 'forbeta/hurtdospeh.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation9_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container9'), // required
    path: 'forbeta/weapondospeh.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation10_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container10'), // required
    path: 'forbeta/attacksovet.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation10_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container10'), // required
    path: 'forbeta/staysovet.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation10_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container10'), // required
    path: 'forbeta/hurtsovet.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation10_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container10'), // required
    path: 'forbeta/weaponsovet.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation11_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container11'), // required
    path: 'forbeta/attackdemon.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation11_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container11'), // required
    path: 'forbeta/staydemon.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation11_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container11'), // required
    path: 'forbeta/hurtdemon.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation11_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container11'), // required
    path: 'forbeta/weapondemon.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation12_attack = bodymovin.loadAnimation({

    container: document.getElementById('attack-container12'), // required
    path: 'forbeta/attackdarkmage.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation12_stay = bodymovin.loadAnimation({

    container: document.getElementById('stay-container12'), // required
    path: 'forbeta/staydarkmage.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation12_hurt = bodymovin.loadAnimation({

    container: document.getElementById('hurt-container12'), // required
    path: 'forbeta/hurtdarkmage.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation12_weapon = bodymovin.loadAnimation({

    container: document.getElementById('weapon-container12'), // required
    path: 'forbeta/weapondarkmage.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation11_magic = bodymovin.loadAnimation({

    container: document.getElementById('mage-container'), // required
    path: 'forbeta/demonmagic.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation12_magic = bodymovin.loadAnimation({

    container: document.getElementById('mage-container2'), // required
    path: 'forbeta/demonmagic.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation2_magic = bodymovin.loadAnimation({

    container: document.getElementById('mage-container'), // required
    path: 'forbeta/demonmagic.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation1_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation2_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container2'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation3_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container3'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation4_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container4'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation5_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container5'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation6_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container6'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation7_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container7'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation8_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container8'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation9_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container9'), // required
    path: 'forbeta/humandeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation10_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container10'), // required
    path: 'forbeta/demondeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation11_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container11'), // required
    path: 'forbeta/demondeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

let animation12_death = bodymovin.loadAnimation({

    container: document.getElementById('death-container12'), // required
    path: 'forbeta/demondeath.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});



const creatures = [
    {
        damage: 20,
        lastingdamage: 100,
    health: 45,
        mazhealth: 45,
        team: "blue",
    where: "behind",
    position: 3,
    type: "archer",
    who: "Прорицательница",
        initiative: 35,
        realinit: 130,
    paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 1,
        typeofattack: "new",
        typeofsecondattack: "newnew",
        immunity: ["fire", "water", "air", "earth", "death", "poison", "mind", "weapon"],
        protection: ["fire", "water", "air"],
        moreprotection: [0, 1, 1],
        armor: 0.2,
        defensearmor: 0,
        accuracy: [1, 0.1],
        alive: 1,
        id: 1,
        animattack: function() {
            animation1_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation1_stay.play();
        },
        animhurt: function() {
            animation1_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation1_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation1_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation1_death.playSegments([0, 56], true);
        },
        sound: function() {
            sound1.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV9").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV9").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
},
    {
    damage: 50,
        lastingdamage: 0,
    health: 120,
        mazhealth: 120,
    team: "blue",
    where: "ahead",
    position: 2,
    type: "mage",
    who: "Маг",
        initiative: 120,
        realinit: 120,
    paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 1,
        typeofattack: "weapon",
        typeofsecondattack: "no",
        immunity: ["fire", "water", "air", "weapon"],
        protection: [],
        moreprotection: [],
        armor: 0,
        defensearmor: 0,
        accuracy: [0.8],
        alive: 1,
        id: 2,
        animattack: function() {
            animation2_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation2_stay.play();
        },
        animhurt: function() {
            animation2_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation2_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation2_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation2_death.playSegments([0, 56], true);
        },
        sound: function() {
            sound2.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container2").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV5").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV5").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
}, {
    damage: 50,
        lastingdamage: 300,
    health: 370,
        mazhealth: 370,
    team: "blue",
    where: "ahead",
    position: 1,
    type: "archer",
    who: "Лучник",
        initiative: 110,
        realinit: 110,
    paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "water",
        typeofsecondattack: "water",
        immunity: [],
        protection: [],
        moreprotection: [],
        armor: 0,
        defensearmor: 0,
        accuracy: [0.8],
        alive: 1,
        id: 3,
        animattack: function() {
            animation3_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation3_stay.play();
        },
        animhurt: function() {
            animation3_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation3_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation3_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation3_death.playSegments([0, 56], true);
        },
        sound: function() {
            sound3.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container3").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV").classList.remove("el");
        },
        removerednow: function() {
        setTimeout(this.removered, 1000);
},
}, {
    damage: 50,
        lastingdamage: 0,
    health: 165,
        mazhealth: 165,
    team: "blue",
    where: "ahead",
    position: 3,
    type: "archer",
    who: "Паладин",
        initiative: 100,
        realinit: 100,
    paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "weapon",
        typeofsecondattack: "mind",
        immunity: ["death"],
        protection: [],
        moreprotection: [],
        armor: 0,
        defensearmor: 0,
        accuracy: [0.8],
        alive: 1,
        id: 4,
        animattack: function() {
            animation4_attack.playSegments([0, 56], true);
        },
        animstay: function() {
            animation4_stay.play();
        },
        animhurt: function() {
            animation4_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation4_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation4_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation4_death.playSegments([0, 56], true);
        },
        sound: function() {
            sound4.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container4").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV10").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV10").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
},  {
    damage: 40,
        lastingdamage: 0,
    health: 300,
        mazhealth: 300,
    team: "red",
    where: "ahead",
    position: 3,
    type: "archer",
    who: "Темный паладин",
        initiative: 90,
        realinit: 90,
    paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "death",
        typeofsecondattack: "no",
        immunity: ["fire", "life", "air"],
        protection: [],
        moreprotection: [],
        armor: 0.5,
        defensearmor: 0,
        accuracy: [0.7],
        alive: 1,
        id: 6,
        animattack: function() {
            animation6_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation6_stay.play();
        },
        animhurt: function() {
            animation6_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation6_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation5_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation5_death.playSegments([0, 56], true);
        },
        sound: function() {
            sound6.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container6").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV3").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV3").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        }
}, {
    damage: 80,
        lastingdamage: 0,
    health: 150,
        mazhealth: 150,
    team: "red",
    where: "behind",
    position: 1,
    type: "archer",
    who: "Герцог",
        initiative: 80,
        realinit: 80,
    paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "death",
        typeofsecondattack: "no",
        immunity: [],
        protection: ["life", "water", "air"],
        moreprotection: [1, 1, 1],
        armor: 0.5,
        defensearmor: 0,
        accuracy: [0.8],
        alive: 1,
        id: 7,
        animattack: function() {
            animation7_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation7_stay.play();
        },
        animhurt: function() {
            animation7_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation7_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation6_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation6_death.playSegments([0, 56], true);
        },
        sound: function() {
            sound7.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container7").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV11").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV11").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
}, {
    damage: 100,
        lastingdamage: 0,
    health: 600,
        mazhealth: 600,
    team: "blue",
    where: "behind",
    position: 2,
    type: "archer",
    who: "Рыцарь на пегасе",
        initiative: 70,
        realinit: 70,
    paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "life",
        typeofsecondattack: "no",
        immunity: [],
        protection: ["death"],
        moreprotection: [1],
        armor: 0.2,
        defensearmor: 0,
        accuracy: [1],
        alive: 1,
        id: 8,
        animattack: function() {
            animation8_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation8_stay.play();
        },
        animhurt: function() {
            animation8_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation8_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation7_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation7_death.playSegments([0, 56], true);
        },
        sound: function() {
            sound8.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container8").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV6").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV6").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
},
    {
        damage: 50,
        lastingdamage: 0,
        health: 1000,
        mazhealth: 300,
        team: "red",
        where: "ahead",
        position: 1,
        type: "archer",
        who: "Берсеркер",
        initiative: 60,
        realinit: 60,
        paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 1,
        typeofattack: "weapon",
        typeofsecondattack: "no",
        immunity: ["mind",],
        protection: [],
        moreprotection: [1],
        armor: 0.2,
        defensearmor: 0,
        accuracy: [0.8],
        alive: 1,
        id: 5,
        animattack: function () {
            animation5_attack.playSegments([0, 46], true);
        },
        animstay: function () {
            animation5_stay.play();
        },
        animhurt: function () {
            animation5_hurt.playSegments([0, 18], true);
        },
        animweapon: function () {
            animation5_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation8_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation8_death.playSegments([0, 56], true);
        },
        sound: function () {
            sound1.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container5").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV7").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV7").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
    }, {
        damage: 100,
        lastingdamage: 0,
        health: 200,
        mazhealth: 200,
        team: "blue",
        where: "behind",
        position: 1,
        type: "archer",
        who: "Оживший доспех",
        initiative: 50,
        realinit: 50,
        paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "mind",
        typeofsecondattack: "no",
        immunity: [],
        protection: [],
        moreprotection: [],
        armor: 0,
        defensearmor: 0,
        accuracy: [0.5],
        alive: 1,
        id: 9,
        animattack: function() {
            animation9_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation9_stay.play();
        },
        animhurt: function() {
            animation9_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation9_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation9_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation9_death.playSegments([0, 56], true);
        },
        sound: function() {
            sound9.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container9").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV2").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV2").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
    },{
        damage: 150,
        lastingdamage: 20,
        health: 400,
        mazhealth: 400,
        team: "red",
        where: "behind",
        position: 2,
        type: "archer",
        who: "Советник",
        initiative: 40,
        realinit: 40,
        paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "newattack",
        typeofsecondattack: "poison",
        immunity: [],
        protection: ["earth", "water", "life"],
        moreprotection: [1, 1, 1],
        armor: 0,
        defensearmor: 0,
        accuracy: [0.8, 0.7],
        alive: 1,
        id: 10,
        animattack: function() {
            animation10_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation10_stay.play();
        },
        animhurt: function() {
            animation10_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation10_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation10_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation10_death.playSegments([0, 46], true);
        },
        sound: function() {
            sound10.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container10").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV12").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV12").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
    },
    {
        damage: 100,
        lastingdamage: 0,
        health: 300,
        mazhealth: 300,
        team: "red",
        where: "behind",
        position: 3,
        type: "mage",
        who: "Демонолог",
        initiative: 30,
        realinit: 30,
        paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "life",
        typeofsecondattack: "no",
        immunity: [],
        protection: [],
        moreprotection: [],
        armor: 0,
        defensearmor: 0,
        accuracy: [1],
        alive: 1,
        id: 11,
        animattack: function() {
            animation11_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation11_stay.play();
        },
        animhurt: function() {
            animation11_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation11_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation11_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation11_death.playSegments([0, 46], true);
        },
        sound: function() {
            sound11.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container11").style.visibility = hide ? "hidden" : "visible";
        },
        animatmage: (type, hide) => {
            document.getElementById(type + "-container2").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV8").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV8").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
    },
    {
        damage: 100,
        lastingdamage: 0,
        health: 60,
        mazhealth: 300,
        team: "red",
        where: "behind",
        position: 3,
        type: "mage",
        who: "Колдун",
        initiative: 20,
        realinit: 20,
        paralized: 0,
        petrification: 0,
        poisoned: 0,
        effect: 0,
        fireeffect: 0,
        watereffect: 0,
        imp: 0,
        summoned: 0,
        teammated: 0,
        runningaway: 0,
        shotsleft: 0,
        typeofattack: "life",
        typeofsecondattack: "no",
        immunity: [],
        protection: [],
        moreprotection: [],
        armor: 0,
        defensearmor: 0,
        accuracy: [1],
        alive: 1,
        id: 12,
        animattack: function() {
            animation12_attack.playSegments([0, 46], true);
        },
        animstay: function() {
            animation12_stay.play();
        },
        animhurt: function() {
            animation12_hurt.playSegments([0, 18], true);
        },
        animweapon: function() {
            animation12_weapon.playSegments([0, 18], true);
        },
        animmagic: function() {
            animation12_magic.playSegments([0, 46], true);
        },
        animdeath: function() {
            animation12_death.playSegments([0, 46], true);
        },
        sound: function() {
            sound12.play();
        },
        animat: (type, hide) => {
            document.getElementById(type + "-container12").style.visibility = hide ? "hidden" : "visible";
        },
        animatmage: (type, hide) => {
            document.getElementById(type + "-container2").style.visibility = hide ? "hidden" : "visible";
        },
        glowred: function() {
            document.getElementById("myDIV4").classList.add("el");
        },
        removered: function() {
            document.getElementById("myDIV4").classList.remove("el");
        },
        removerednow: function() {
            setTimeout(this.removered, 1000);
        },
    },
    ];

// Превращенные в импов

animation1_stay.play();
animation2_stay.play();
animation3_stay.play();
animation4_stay.play();
animation5_stay.play();
animation6_stay.play();
animation7_stay.play();
animation8_stay.play();
animation9_stay.play();
animation10_stay.play();
animation11_stay.play();
animation12_stay.play();

//animation11_magic.play();
//animation12_magic.play();
//animation2_magic.play();
//attackedCreature.animhurt();

//animation11.play();
//animation12.play();



document.getElementById("attack-container").style.visibility = "hidden";
document.getElementById("attack-container2").style.visibility = "hidden";
document.getElementById("attack-container3").style.visibility = "hidden";
document.getElementById("attack-container4").style.visibility = "hidden";
document.getElementById("attack-container5").style.visibility = "hidden";
document.getElementById("attack-container6").style.visibility = "hidden";
document.getElementById("attack-container7").style.visibility = "hidden";
document.getElementById("attack-container8").style.visibility = "hidden";
document.getElementById("attack-container9").style.visibility = "hidden";
document.getElementById("attack-container10").style.visibility = "hidden";
document.getElementById("attack-container11").style.visibility = "hidden";
document.getElementById("attack-container12").style.visibility = "hidden";

document.getElementById("hurt-container").style.visibility = "hidden";
document.getElementById("hurt-container2").style.visibility = "hidden";
document.getElementById("hurt-container3").style.visibility = "hidden";
document.getElementById("hurt-container4").style.visibility = "hidden";
document.getElementById("hurt-container5").style.visibility = "hidden";
document.getElementById("hurt-container6").style.visibility = "hidden";
document.getElementById("hurt-container7").style.visibility = "hidden";
document.getElementById("hurt-container8").style.visibility = "hidden";
document.getElementById("hurt-container9").style.visibility = "hidden";
document.getElementById("hurt-container10").style.visibility = "hidden";
document.getElementById("hurt-container11").style.visibility = "hidden";
document.getElementById("hurt-container12").style.visibility = "hidden";

document.getElementById("weapon-container").style.visibility = "hidden";
document.getElementById("weapon-container2").style.visibility = "hidden";
document.getElementById("weapon-container3").style.visibility = "hidden";
document.getElementById("weapon-container4").style.visibility = "hidden";
document.getElementById("weapon-container5").style.visibility = "hidden";
document.getElementById("weapon-container6").style.visibility = "hidden";
document.getElementById("weapon-container7").style.visibility = "hidden";
document.getElementById("weapon-container8").style.visibility = "hidden";
document.getElementById("weapon-container9").style.visibility = "hidden";
document.getElementById("weapon-container10").style.visibility = "hidden";
document.getElementById("weapon-container11").style.visibility = "hidden";
document.getElementById("weapon-container12").style.visibility = "hidden";

document.getElementById("death-container").style.visibility = "hidden";
document.getElementById("death-container2").style.visibility = "hidden";
document.getElementById("death-container3").style.visibility = "hidden";
document.getElementById("death-container4").style.visibility = "hidden";
document.getElementById("death-container5").style.visibility = "hidden";
document.getElementById("death-container6").style.visibility = "hidden";
document.getElementById("death-container7").style.visibility = "hidden";
document.getElementById("death-container8").style.visibility = "hidden";
document.getElementById("death-container9").style.visibility = "hidden";
document.getElementById("death-container10").style.visibility = "hidden";
document.getElementById("death-container11").style.visibility = "hidden";
document.getElementById("death-container12").style.visibility = "hidden";


//document.getElementById("mage-container").style.visibility = "hidden";
//document.getElementById("mage-container2").style.visibility = "hidden";

//document.getElementById("stay-container").style.visibility = "hidden";
//document.getElementById("stay-container2").style.visibility = "hidden";


/*document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = creatures[3].who;
    button.setAttribute("style", "color:red")
    button.style.position = 'absolute';
    button.style.left = '250px';
    button.style.top = '340px';

    button.onclick = function() {
      attack(4);
    };

    var container = document.getElementById('container');
    container.appendChild(button);
}, false);
*/

let rect12 = document.getElementById('rectangle12');

rect12.onclick = function() {
    attack(11);
    console.log("Атакован 12 контейнер");
};

let rect11 = document.getElementById('rectangle11');

rect11.onclick = function() {
    attack(10);
    console.log("Атакован 11 контейнер");
};

let rect10 = document.getElementById('rectangle10');

rect10.onclick = function() {
    attack(9);
    console.log("Атакован 10 контейнер");
};

let rect9 = document.getElementById('rectangle6');

rect9.onclick = function() {
    attack(8);
    console.log("Атакован 9 контейнер");
};

let rect8 = document.getElementById('rectangle5');

rect8.onclick = function() {
    attack(7);
    console.log("Атакован 8 контейнер");
};

let rect7 = document.getElementById('rectangle7');

rect7.onclick = function() {
    attack(6);
    console.log("Атакован 7 контейнер");
};

let rect6 = document.getElementById('rectangle9');

rect6.onclick = function() {
    attack(5);
    console.log("Атакован 6 контейнер");
};

let rect5 = document.getElementById('rectangle8');

rect5.onclick = function() {
    attack(4);
    console.log("Атакован 5 контейнер");
};

let rect4 = document.getElementById('rectangle4');

rect4.onclick = function() {
    attack(3);
    console.log("Атакован 4 контейнер");
};

let rect3 = document.getElementById('rectangle3');

rect3.onclick = function() {
    attack(2);
    console.log("Атакован 3 контейнер");
};

let rect2 = document.getElementById('rectangle2');

rect2.onclick = function() {
    attack(1);
    console.log("Атакован 2 контейнер");
};

let rect1 = document.getElementById('rectangle1');

rect1.onclick = function() {
    attack(0);
    console.log("Атакован 1 контейнер");
};

sortByinit(creatures);

rect1.classList.toggle("onewhomoves");
rect2.classList.toggle("onewhomoves");
rect3.classList.toggle("onewhomoves");
rect4.classList.toggle("onewhomoves");
rect5.classList.toggle("onewhomoves");
rect6.classList.toggle("onewhomoves");
rect7.classList.toggle("onewhomoves");
rect8.classList.toggle("onewhomoves");
rect9.classList.toggle("onewhomoves");
rect10.classList.toggle("onewhomoves");
rect11.classList.toggle("onewhomoves");
rect12.classList.toggle("onewhomoves");

yourfucknigturn = creatures[0]["id"];
console.log(yourfucknigturn);

if (yourfucknigturn === 1) {
    rect1.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 2) {
    rect2.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 3) {
    rect3.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 4) {
    rect4.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 5) {
    rect5.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 6) {
    rect6.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 7) {
    rect7.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 8) {
    rect8.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 9) {
    rect9.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 10) {
    rect10.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 11) {
    rect11.classList.toggle("onewhomoves");
}
if (yourfucknigturn === 12) {
    rect12.classList.toggle("onewhomoves");
}

/*let cont3 = document.getElementById('other-container3');

cont3.onclick = function() {
    attack(5);
};*/

animation2_magic.addEventListener('enterFrame', () => {
    animation2_magic.setSubframe(false);
    if (animation2_magic.currentFrame === 45) {
        if (globalattacker.realattacker.type === "mage") {
            document.getElementById("mage-container").style.visibility = "hidden";
    }
}});

animation2_attack.addEventListener('enterFrame', () => {
    animation2_attack.setSubframe(false);
    if (animation2_attack.currentFrame === 45) {
        if (globalattacker.realattacker.type === "mage") {
            globalattacker.realattacker.animat('weapon', true);
            console.log(globalattacked.realattacked.team);
            animmagicteam = creatures
                .filter(creature => creature.team === globalattacked.realattacked.team)
                .filter(creature => creature.health > 0)
            animmagicteam.map(function (name) {
                console.log(name);
                name.animat('stay', false);
                name.animat('hurt', true);
            })
        }
        else {
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
            globalattacked.realattacked.animat('stay', false);
            globalattacked.realattacked.animat('hurt', true);
        }
    }
});

animation2_attack.addEventListener('enterFrame', () => {
    animation2_attack.setSubframe(false);
    console.log('enterFrame', animation1_attack.currentFrame);
    if (animation2_attack.currentFrame === 25) {
        if (globalattacker.realattacker.type === "mage") {
            if (globalattacker.realattacker.team === "red") {
                globalattacker.realattacker.animmagic();
            } else {
                globalattacker.realattacker.animmagic();
            }
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
            animmagicteam = creatures
                .filter(creature => creature.team === globalattacked.realattacked.team)
                .filter(creature => creature.health > 0)
            animmagicteam.map(function (name) {
                console.log(name);
                name.animat('hurt', false);
                name.animat('stay', true);
                name.animhurt();
            })
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
        }
        else {
            globalattacked.realattacked.animat('hurt', false);
            globalattacked.realattacked.animat('stay', true);
            globalattacker.realattacker.animat('weapon', true);
            globalattacked.realattacked.animhurt();
        }
    }
});

animation1_death.addEventListener('enterFrame', () => {
    animation1_death.setSubframe(false);
    if (animation1_death.currentFrame === 55)
        {
            creatures.map(function(name) {

                someoneisskull = name["health"];
                console.log(someoneisdead);
                if (someoneisskull <= 0)
                {
                    name.animat('death', true);
                    name.animat('stay', true);
                    name.animat('hurt', true);
                    name.alive = 2;
                }
            })
        }
    });

animation2_death.addEventListener('enterFrame', () => {
    animation2_death.setSubframe(false);
    if (animation2_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation3_death.addEventListener('enterFrame', () => {
    animation3_death.setSubframe(false);
    if (animation3_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation4_death.addEventListener('enterFrame', () => {
    animation4_death.setSubframe(false);
    if (animation4_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation5_death.addEventListener('enterFrame', () => {
    animation5_death.setSubframe(false);
    if (animation5_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation6_death.addEventListener('enterFrame', () => {
    animation6_death.setSubframe(false);
    if (animation6_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation7_death.addEventListener('enterFrame', () => {
    animation7_death.setSubframe(false);
    if (animation7_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation8_death.addEventListener('enterFrame', () => {
    animation8_death.setSubframe(false);
    if (animation8_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation9_death.addEventListener('enterFrame', () => {
    animation9_death.setSubframe(false);
    if (animation9_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation10_death.addEventListener('enterFrame', () => {
    animation10_death.setSubframe(false);
    if (animation10_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation11_death.addEventListener('enterFrame', () => {
    animation11_death.setSubframe(false);
    if (animation11_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation12_death.addEventListener('enterFrame', () => {
    animation12_death.setSubframe(false);
    if (animation12_death.currentFrame === 55)
    {
        creatures.map(function(name) {

            someoneisskull = name["health"];
            console.log(someoneisdead);
            if (someoneisskull <= 0)
            {
                name.animat('death', true);
                name.animat('stay', true);
                name.animat('hurt', true);
                name.alive = 2;
            }
        })
    }
});

animation4_death.addEventListener('enterFrame', () => {
    animation4_death.setSubframe(false);
    if (animation4_death.currentFrame === 55)
    {
        creatures[0].animat('death', true);
        creatures[0].animat('stay', true);
    }
});

animation1_attack.addEventListener('enterFrame', () => {
    animation1_attack.setSubframe(false);
    if (animation1_attack.currentFrame === 45) {
        if (globalattacker.realattacker.type === "mage") {
            globalattacker.realattacker.animat('weapon', true);
            console.log(globalattacked.realattacked.team);
            animmagicteam = creatures
                .filter(creature => creature.team === globalattacked.realattacked.team)
                .filter(creature => creature.health > 0)
            animmagicteam.map(function (name) {
                console.log(name);
                name.animat('stay', false);
                name.animat('hurt', true);
            })
        }
        else {
            if (globalattacker.realattacker.health > 0) {
                globalattacker.realattacker.animat('attack', true);
                globalattacker.realattacker.animat('stay', false);
                globalattacked.realattacked.animat('stay', false);
                globalattacked.realattacked.animat('hurt', true);
            }
        }
    }
});

animation1_attack.addEventListener('enterFrame', () => {
    animation1_attack.setSubframe(false);
    console.log('enterFrame', animation1_attack.currentFrame);
    if (animation1_attack.currentFrame === 25) {
        if (globalattacker.realattacker.type === "mage") {
            if (globalattacker.realattacker.team === "red") {
                globalattacker.realattacker.animmagic();
            } else {
                globalattacker.realattacker.animmagic();
            }
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
            animmagicteam = creatures
                .filter(creature => creature.team === globalattacked.realattacked.team)
                .filter(creature => creature.health > 0)
            animmagicteam.map(function (name) {
                console.log(name);
                name.animat('hurt', false);
                name.animat('stay', true);
                name.animhurt();
            })
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
        }
        else {
            if (globalattacker.realattacker.health > 0) {
                globalattacked.realattacked.animat('hurt', false);
                globalattacked.realattacked.animat('stay', true);
                globalattacker.realattacker.animat('weapon', true);
                globalattacked.realattacked.animhurt();
            }
        }
    }
});

animation3_attack.addEventListener('enterFrame', () => {
    animation3_attack.setSubframe(false);
    if (animation3_attack.currentFrame === 25) {
        globalattacked.realattacked.animat('hurt', false);
        globalattacked.realattacked.animat('stay', true);
        globalattacker.realattacker.animat('weapon', true);
        console.log(globalattacked.realattacked.team);
        animmagicteam = creatures
            .filter(creature => creature.team === globalattacked.realattacked.team)
            .filter(creature => creature.health > 0)
        animmagicteam.map(function(name) {
            console.log(name);
            name.animhurt();
        })
        globalattacked.realattacked.animhurt();
        animmagicteam[0].animhurt();
        animmagicteam[1].animhurt();
        animmagicteam[2].animhurt();
        console.log(globalattacked.realattacked);
        console.log(animmagicteam[0]);
    }
});



animation3_attack.addEventListener('enterFrame', () => {
    animation3_attack.setSubframe(false);
    console.log('enterFrame', animation3_attack.currentFrame);
    if (animation3_attack.currentFrame === 45) {
        globalattacker.realattacker.animat('attack', true);
        globalattacker.realattacker.animat('stay', false);
        globalattacked.realattacked.animat('stay', false);
        globalattacked.realattacked.animat('hurt', true);
    }
});

animation4_attack.addEventListener('enterFrame', () => {
    animation4_attack.setSubframe(false);
    if (animation4_attack.currentFrame === 25) {
        globalattacked.realattacked.animat('hurt', false);
        globalattacked.realattacked.animat('stay', true);
        globalattacker.realattacker.animat('weapon', true);
        console.log(globalattacked.realattacked.team);
        animmagicteam = creatures
            .filter(creature => creature.team === globalattacked.realattacked.team)
            .filter(creature => creature.health > 0)
        animmagicteam.map(function(name) {
            name.animhurt();
        })
        globalattacked.realattacked.animhurt();
        console.log(globalattacked.realattacked);
        console.log(animmagicteam[0]);
        animmagicteam[0].animhurt();
        animmagicteam[1].animhurt();
        animmagicteam[2].animhurt();
    }
});



animation4_attack.addEventListener('enterFrame', () => {
    animation4_attack.setSubframe(false);
    console.log('enterFrame', animation3_attack.currentFrame);
    if (animation4_attack.currentFrame === 45) {
        globalattacker.realattacker.animat('attack', true);
        globalattacker.realattacker.animat('stay', false);
        globalattacked.realattacked.animat('stay', false);
        globalattacked.realattacked.animat('hurt', true);
    }
});

animation5_attack.addEventListener('enterFrame', () => {
    animation5_attack.setSubframe(false);
    if (animation5_attack.currentFrame === 25) {
        globalattacked.realattacked.animat('hurt', false);
        globalattacked.realattacked.animat('stay', true);
        globalattacker.realattacker.animat('weapon', true);
        globalattacked.realattacked.animhurt();
    }
});



animation5_attack.addEventListener('enterFrame', () => {
    animation5_attack.setSubframe(false);
    console.log('enterFrame', animation3_attack.currentFrame);
    if (animation5_attack.currentFrame === 45) {
        globalattacker.realattacker.animat('attack', true);
        globalattacker.realattacker.animat('stay', false);
        globalattacked.realattacked.animat('stay', false);
        globalattacked.realattacked.animat('hurt', true);
    }
});

animation6_attack.addEventListener('enterFrame', () => {
    animation6_attack.setSubframe(false);
    if (animation6_attack.currentFrame === 25) {
        globalattacked.realattacked.animat('hurt', false);
        globalattacked.realattacked.animat('stay', true);
        globalattacker.realattacker.animat('weapon', true);
        globalattacked.realattacked.animhurt();
    }
});



animation6_attack.addEventListener('enterFrame', () => {
    animation6_attack.setSubframe(false);
    console.log('enterFrame', animation3_attack.currentFrame);
    if (animation6_attack.currentFrame === 45) {
        globalattacker.realattacker.animat('attack', true);
        globalattacker.realattacker.animat('stay', false);
        globalattacked.realattacked.animat('stay', false);
        globalattacked.realattacked.animat('hurt', true);
    }
});

animation7_attack.addEventListener('enterFrame', () => {
    animation7_attack.setSubframe(false);
    if (animation7_attack.currentFrame === 25) {
        globalattacked.realattacked.animat('hurt', false);
        globalattacked.realattacked.animat('stay', true);
        globalattacker.realattacker.animat('weapon', true);
        globalattacked.realattacked.animhurt();
    }
});



animation7_attack.addEventListener('enterFrame', () => {
    animation7_attack.setSubframe(false);
    console.log('enterFrame', animation3_attack.currentFrame);
    if (animation7_attack.currentFrame === 45) {
        globalattacker.realattacker.animat('attack', true);
        globalattacker.realattacker.animat('stay', false);
        globalattacked.realattacked.animat('stay', false);
        globalattacked.realattacked.animat('hurt', true);
    }
});

animation8_attack.addEventListener('enterFrame', () => {
    animation8_attack.setSubframe(false);
    if (animation8_attack.currentFrame === 25) {
        globalattacked.realattacked.animat('hurt', false);
        globalattacked.realattacked.animat('stay', true);
        globalattacker.realattacker.animat('weapon', true);
        globalattacked.realattacked.animhurt();
    }
});



animation8_attack.addEventListener('enterFrame', () => {
    animation8_attack.setSubframe(false);
    console.log('enterFrame', animation3_attack.currentFrame);
    if (animation8_attack.currentFrame === 45) {
        globalattacker.realattacker.animat('attack', true);
        globalattacker.realattacker.animat('stay', false);
        globalattacked.realattacked.animat('stay', false);
        globalattacked.realattacked.animat('hurt', true);
    }
});

animation9_attack.addEventListener('enterFrame', () => {
    animation9_attack.setSubframe(false);
    if (animation9_attack.currentFrame === 25) {
        globalattacked.realattacked.animat('hurt', false);
        globalattacked.realattacked.animat('stay', true);
        globalattacker.realattacker.animat('weapon', true);
        globalattacked.realattacked.animhurt();
    }
});



animation9_attack.addEventListener('enterFrame', () => {
    animation9_attack.setSubframe(false);
    console.log('enterFrame', animation3_attack.currentFrame);
    if (animation9_attack.currentFrame === 45) {
        globalattacker.realattacker.animat('attack', true);
        globalattacker.realattacker.animat('stay', false);
        globalattacked.realattacked.animat('stay', false);
        globalattacked.realattacked.animat('hurt', true);
    }
});

animation10_attack.addEventListener('enterFrame', () => {
    animation10_attack.setSubframe(false);
    if (animation10_attack.currentFrame === 25) {
        globalattacked.realattacked.animat('hurt', false);
        globalattacked.realattacked.animat('stay', true);
        globalattacker.realattacker.animat('weapon', true);
        globalattacked.realattacked.animhurt();
    }
});



animation10_attack.addEventListener('enterFrame', () => {
    animation10_attack.setSubframe(false);
    console.log('enterFrame', animation3_attack.currentFrame);
    if (animation10_attack.currentFrame === 45) {
        globalattacker.realattacker.animat('attack', true);
        globalattacker.realattacker.animat('stay', false);
        globalattacked.realattacked.animat('stay', false);
        globalattacked.realattacked.animat('hurt', true);
    }
});

animation11_attack.addEventListener('enterFrame', () => {
    animation11_attack.setSubframe(false);
    if (animation11_attack.currentFrame === 45) {
        if (globalattacker.realattacker.type === "mage") {
            globalattacker.realattacker.animat('weapon', true);
            console.log(globalattacked.realattacked.team);
            animmagicteam = creatures
                .filter(creature => creature.team === globalattacked.realattacked.team)
                .filter(creature => creature.health > 0)
            animmagicteam.map(function (name) {
                console.log(name);
                name.animat('stay', false);
                name.animat('hurt', true);
            })
            //document.getElementById("mage-container").style.visibility = "hidden";
        }
        else {
            if (globalattacker.realattacker.health > 0) {
                globalattacker.realattacker.animat('attack', true);
                globalattacker.realattacker.animat('stay', false);
                globalattacked.realattacked.animat('stay', false);
                globalattacked.realattacked.animat('hurt', true);
            }
        }
    }
});

animation11_attack.addEventListener('enterFrame', () => {
    animation11_attack.setSubframe(false);
    console.log('enterFrame', animation11_attack.currentFrame);
    if (animation11_attack.currentFrame === 25) {
        if (globalattacker.realattacker.type === "mage") {
            if (globalattacker.realattacker.team === "red") {
                console.log("икккккк");
                globalattacker.realattacker.animmagic();
            } else {
                console.log("ик");
                globalattacker.realattacker.animmagic();
            }
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
            animmagicteam = creatures
                .filter(creature => creature.team === globalattacked.realattacked.team)
                .filter(creature => creature.health > 0)
            animmagicteam.map(function (name) {
                console.log(name);
                name.animat('hurt', false);
                name.animat('stay', true);
                name.animhurt();
            })
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
        }
        else {
            globalattacked.realattacked.animat('hurt', false);
            globalattacked.realattacked.animat('stay', true);
            globalattacker.realattacker.animat('weapon', true);
            globalattacked.realattacked.animhurt();
        }
    }
});

animation12_attack.addEventListener('enterFrame', () => {
    animation12_attack.setSubframe(false);
    if (animation12_attack.currentFrame === 45) {
        if (globalattacker.realattacker.type === "mage") {
            globalattacker.realattacker.animat('weapon', true);
            console.log(globalattacked.realattacked.team);
            animmagicteam = creatures
                .filter(creature => creature.team === globalattacked.realattacked.team)
                .filter(creature => creature.health > 0)
            animmagicteam.map(function (name) {
                console.log(name);
                name.animat('stay', false);
                name.animat('hurt', true);
            })
            //document.getElementById("mage-container").style.visibility = "hidden";
        }
        else {
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
            globalattacked.realattacked.animat('stay', false);
            globalattacked.realattacked.animat('hurt', true);
        }
    }
});

animation12_attack.addEventListener('enterFrame', () => {
    animation12_attack.setSubframe(false);
    console.log('enterFrame', animation12_attack.currentFrame);
    if (animation12_attack.currentFrame === 25) {
        if (globalattacker.realattacker.type === "mage") {
            if (globalattacker.realattacker.team === "red") {
                globalattacker.realattacker.animmagic();
            } else {
                globalattacker.realattacker.animmagic();
            }
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
            animmagicteam = creatures
                .filter(creature => creature.team === globalattacked.realattacked.team)
                .filter(creature => creature.health > 0)
            animmagicteam.map(function (name) {
                console.log(name);
                name.animat('hurt', false);
                name.animat('stay', true);
                name.animhurt();
            })
            globalattacker.realattacker.animat('attack', true);
            globalattacker.realattacker.animat('stay', false);
        }
        else {
            globalattacked.realattacked.animat('hurt', false);
            globalattacked.realattacked.animat('stay', true);
            globalattacker.realattacker.animat('weapon', true);
            globalattacked.realattacked.animhurt();
        }
    }
});

/*
animation1_attack.addEventListener('enterFrame', () => {
    animation1_attack.setSubframe(false);
    console.log('enterFrame', animation1_attack.currentFrame);
    if (animation1_attack.currentFrame === 30) {
        document.getElementById("stay-container2").style.visibility = "visible";
        document.getElementById("attack-container").style.visibility = "hidden";
        document.getElementById("weapon-container").style.visibility = "hidden";
        document.getElementById("hurt-container").style.visibility = "hidden";
        globalfunc.jjjj.animhurt;
    }
});
*/

/*document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = creatures[4].who;
    button.setAttribute("style", "color:red")
    button.style.position = 'absolute';
    button.style.left = '250px';
    button.style.top = '580px';

    button.onclick = function() {
        attack(5);

    };

    var container2 = document.getElementById('container2');
    container2.appendChild(button);
}, false);
*/

const transformedtoimps = [];

// Убежавшие ребята
const ranaway = [];

function sortByinit(creatures) {
    creatures.sort((a, b) => a.initiative < b.initiative ? 1 : -1);
}

sortByinit(creatures);

window.attackerCreature = creatures[0];

const attack = (creatureIndex) => {
    goforwardnum = 0;
    console.log((`На вход ${creatureIndex}`))
    while (goforwardnum < creatures.length)
    {
        kindacreaaat = creatures[goforwardnum]["id"];
      if (kindacreaaat === creatureIndex + 1)
      {
          remembertheguy = goforwardnum;
      }
        goforwardnum++;
    }
    console.log((`На выход ${remembertheguy}`))
    performAttack(creatures[remembertheguy])
}

const updateHealthView = (creature, i) => {

    goforwardnum = 0;

    while (goforwardnum < creatures.length)
    {
        kindacreaaat = creatures[goforwardnum]["id"];
        if (kindacreaaat === i + 1)
        {
            remembertheguy = goforwardnum;
        }
        goforwardnum++;
    }


    const elm = document.getElementById(`delta${i}`)

    if (!elm) {
        return
    }

// эта часть должна делать здоровье юнита равным 0 если оно меньше 0, но нет уверенности что она работает
    elm.innerText = creatures[remembertheguy]["health"] > 0 ? creatures[remembertheguy]["health"] : 'Dead'
    if (creatures[remembertheguy]["type"] === "empty") {elm.innerText = 'Empty'}
    if (creatures[remembertheguy]["health"] < 0) {creatures[remembertheguy]["health"] = 0}

}

// Функция для высшего вампира
function drinklife() {

    // начало смотри тип "вампир", даем здоровье нашим юнитам. Сначала равномерно всем юнитам, а когда один достигает максимума здоровья то равномерно остальным и так в цикле
    const ourteam = creatures
        .filter(creature => creature.team === attackerCreature.team)
        .filter(creature => creature.health < creature.mazhealth)
        .filter(creature => creature.health > 0)
    console.log(ourteam);
    totallywrong = 0;
    totallywrongarray = [];
    while (totallywrong < ourteam.length) {

        thiiswrongthing = ourteam[totallywrong]["health"]
        thiisalsowrongthing = ourteam[totallywrong]["mazhealth"]
        stillwrongway = thiisalsowrongthing - thiiswrongthing;
        totallywrongarray.push(stillwrongway);
        totallywrong++;
    }
    console.log(totallywrongarray);
    healbythis = Math.min(...totallywrongarray)
    console.log(healbythis);

    if (totallywrongarray.length === 0) {console.log("Время закончится");}
// срабатывает если восстановление здоровья каждого юнита скажем +20 меньше чем высосал вампир
    else if (healbythis * ourteam.length >= heavampire) {
        console.log("Лечим всех юнитов");
        healthyouget = heavampire / ourteam.length;
        whatsleft = heavampire % ourteam.length;
        console.log(whatsleft);
        healthyouget = Math.floor(healthyouget);
        console.log(`Все вылечены на ${healthyouget}`)
        ourteam.forEach(newcreature => newcreature.health += healthyouget)
            // Исправление последствий округления
        deathbycycle = 0;
        while (deathbycycle < whatsleft) {
            ourteam[deathbycycle]["health"] += 1;
            console.log(`Мы прибавили 1 к ${ourteam[deathbycycle]["who"]}`);
            deathbycycle++;
        }
    }
// срабатывает если восстановление здоровья одного из юнитов до максимума скажем +3, меньше чем есть у вампира
    else {
        console.log(healbythis);
        console.log("Лечим юнитом с мин здоровьем");
        //healbythis = Math.round(healbythis);
        ourteam.forEach(newcreature => newcreature.health += healbythis)
        heavampire = heavampire - (healbythis * ourteam.length);
        drinklife();
    }
}

iiiij = 0;
currentUser = 0
const nextTurn = () => {
    // Сортировка по инициативе (которая пока не доделана)
    console.log(creatures);
    console.log(creatures);
    console.log(creatures);
    console.log(creatures);
    console.log(creatures);
// Астерот делает второй ход потому что может (не забыть добавить пропадание второго хода при защите)

    if (attackerCreature.type === "Asterot" && attackerCreature.shotsleft > 0) {
        if (attackerCreature.defensearmor === 0.5) {
            attackerCreature.shotsleft--;
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
        else {
            console.log("Второй удар")
            attackerCreature.shotsleft--;
            console.log(attackerCreature.shotsleft);
            return // no friendly fire
        }
    }

    else if (attackerCreature.type === "elfarcher" && attackerCreature.shotsleft > 0) {

            if (attackerCreature.defensearmor === 0.5) {
                attackerCreature.shotsleft--;
                nextTurn()
                creatures.forEach((creature, i) => updateHealthView(creature, i))
                document.getElementById("delta12").innerHTML = attackerCreature.who;
                return // no friendly fire
            }
            else {
                console.log("Второй удар")
                attackerCreature.shotsleft--;
                console.log(attackerCreature.shotsleft);
            }
        }


    else {
        console.log(creatures[creatures.length - 1]["initiative"]);
// Отметка кто ходит
        let newstillaliveCreatures = creatures
            .filter(creature => (creature.health > 0))
            .filter(creature => (creature.initiative > 0))
        yourfucknigturn = newstillaliveCreatures[0]["id"];
        console.log(yourfucknigturn);
        if (yourfucknigturn === 1) {
            rect1.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 2) {
            rect2.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 3) {
            rect3.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 4) {
            rect4.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 5) {
            rect5.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 6) {
            rect6.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 7) {
            rect7.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 8) {
            rect8.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 9) {
            rect9.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 10) {
            rect10.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 11) {
            rect11.classList.toggle("onewhomoves");
        }
        if (yourfucknigturn === 12) {
            rect12.classList.toggle("onewhomoves");
        }

if (creatures[creatures.length - 1]["initiative"] > 1) {
    attackerCreature.initiative = attackerCreature.initiative - 200;
}

else if ((attackerCreature.initiative < 1) && (attackerCreature.initiative > 0)) {}
else {
    lastinitget = creatures[creatures.length - 1]["initiative"];
    attackerCreature.initiative = lastinitget - 50;
    console.log(creatures);
}
        let newaliveCreatures = creatures
            .filter(creature => (creature.health > 0))
            .filter(creature => (creature.initiative > 0))

if (newaliveCreatures.length > 0) {}
    else {
        console.log("Новый ход наступил");
        creatures.forEach(creature => creature.initiative = creature.realinit);

    messuptheinit = 0;

    while (messuptheinit < creatures.length)

    {
        randthisnumber = getRandomIntInclusive(-10, 10);
        creatures[messuptheinit]["initiative"] = creatures[messuptheinit]["initiative"] + randthisnumber;
        rywreywqry = creatures[messuptheinit]["initiative"];
        console.log(rywreywqry);
        messuptheinit++;
    }
    }

        console.log(newaliveCreatures)


        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
        }

        console.log(creatures);

    sortByinit(creatures);

    function sortByinit(creatures) {
        creatures.sort((a, b) => a.initiative < b.initiative ? 1 : -1);
    }

    console.log(creatures);

    attackerCreature.madeturn = 1;

    let aliveCreatures = creatures
        .filter(creature => (creature.health > 0))


  /*  if (somealiveCreatures.length == 0) {
        const aliveCreatures = creatures
        .filter(creature => (creature.health > 0))}
        else {
        const aliveCreatures = creatures
            .filter(creature => (creature.health > 0))
            .filter(creature => (creature.madeturn === 0))
    }
*/




        // Инициатива!!!

   /*     notanothercycle = 0;
        arraylywrongarray = [];
        forthearauinit = 0;
        while (notanothercycle < aliveCreatures.length) {
            forthearauinit = aliveCreatures[notanothercycle]["madeturn"];
            console.log(forthearauinit);
            arraylywrongarray.push(forthearauinit);
            notanothercycle++;
        }
        console.log(arraylywrongarray);
        trueornottru = arraylywrongarray.every(elem => elem === 1);
        console.log(trueornottru);
        if (trueornottru) {
            aliveCreatures.forEach(creature => creature.madeturn = 0)}
        console.log(aliveCreatures);


        creatures.forEach((creature, i) => updateHealthView(creature, i))

        document.getElementById("delta12").innerHTML = attackerCreature.who;

        console.log(creatures);
*/
// Очень плохая реализация отравления, однако работающая каким-то чудом. Юнит получает урон и если умрет, то ходит следующий юнит.
        console.log(currentUser.iiiij);
        console.log(currentUser.iiiij);
        console.log(currentUser.iiiij);
        console.log(currentUser.iiiij);
        console.log(currentUser.iiiij);
        if (currentUser.iiiij !== undefined) {
            thisisbad = aliveCreatures.indexOf(attackerCreature);
            console.log(thisisbad);
            dlina = aliveCreatures.length;
            if (currentUser.iiiij === 0) {window.attackerCreature = aliveCreatures[0]} else

            {   window.attackerCreature = aliveCreatures[0]
                //window.attackerCreature = aliveCreatures[currentUser.iiiij - 1]
                console.log("туда");
            }
            console.log("сюда");
            console.log("сюда");
            console.log("сюда");
            console.log(currentUser.iiiij);
            currentUser.iiiij = undefined;
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
        }

        else {
            window.attackerCreature = aliveCreatures[0];
            //window.attackerCreature = aliveCreatures[(aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length];
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            console.log("just be here");
            console.log("как");
            console.log("как");
            console.log("как");
            console.log(attackerCreature.who);
            console.log(creatures);
            console.log(aliveCreatures);
        }
//что-то должно восстанавливать Астероту вторую атаку для следующего хода и это делает код ниже

        checkkk = (aliveCreatures.indexOf(attackerCreature) - 1) % aliveCreatures.length;
console.log(checkkk);
if (checkkk === -1) {checkkk = aliveCreatures.length - 1}
else {}

        if (aliveCreatures[checkkk]["type"] === "Asterot") {
            console.log(aliveCreatures[checkkk]);
            console.log(checkkk);
            aliveCreatures[checkkk]["shotsleft"] = 1;
        console.log("Восстанавливаем 1")
        }
else {}

        checkarcher = (aliveCreatures.indexOf(attackerCreature) - 1) % aliveCreatures.length;
        console.log(checkarcher);
        if (checkarcher === -1) {checkarcher = aliveCreatures.length - 1}
        else {}

        if (aliveCreatures[checkarcher]["type"] === "elfarcher") {
            console.log(aliveCreatures[checkarcher]);
            console.log(checkarcher);
            aliveCreatures[checkarcher]["shotsleft"] = 1;
            console.log("Восстанавливаем 1")
        }
        else {}


        document.getElementById("delta12").innerHTML = attackerCreature.who;

// Более ранние попытки сделать отравление, менее успешные

        //attackerCreature.health = attackerCreature.health - attackerCreature.fireeffect - attackerCreature.poisoned;

// Горение, если ты подожжен то получаешь урон и можешь умереть
       /* takelifewithfire()

        function takelifewithfire() {
            if (attackerCreature.fireeffect > 0) {
                attackerCreature.health -= attackerCreature.fireeffect;
                console.log(`атака огнем ${attackerCreature.who}`);
                if (attackerCreature.health <= 0) {
                    // Если ты умер то ходит следующий и он тоже может гореть, и умереть
                    window.attackerCreature = aliveCreatures[(aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length]
                    if (attackerCreature.poisoned > 0 && attackerCreature.effect === 2) {
                        takelifewithfire()
                    }
                }
            }
            else {}
        }
        */

// Вторая часть реализации отравления. Или первая есть идти от причины к следствию наверное.
        takelife()

        function takelife() {
            if (attackerCreature.poisoned > 0) {
                console.log(attackerCreature.poisoned);
                attackerCreature.health -= attackerCreature.poisoned;
                console.log(`атака ядом ${attackerCreature.who}`);
                creatures.forEach((creature, i) => updateHealthView(creature, i));
                // отравление может закончится предварительно
                if (Math.random() < 0.3) {
                    attackerCreature.poisoned = 0;
                    console.log(`яд снят`);}
                if (attackerCreature.health <= 0) {
                    // глобальные функции пришлось использовать чтобы рекурсия работала, и все не ломалось
                    window.currentUser = {
                        iiiij: (aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length
                    };
                    console.log(`номерок ${iiiij}`);
                    console.log(`номерок ${currentUser.iiiij}`);
                    nextTurn();
                }
            }
            else {}
        }

// Полная копия отравления, только огнем
        takelifewithfire()

        function takelifewithfire() {
            if (attackerCreature.fireeffect > 0) {
                console.log(attackerCreature.fireeffect);
                attackerCreature.health -= attackerCreature.fireeffect;
                console.log(`атака огнем ${attackerCreature.who}`);
                creatures.forEach((creature, i) => updateHealthView(creature, i));
                // горение может закончится предварительно
                if (Math.random() < 0.3) {
                    attackerCreature.fireeffect = 0;
                    console.log(`горение снято`);}
                if (attackerCreature.health <= 0) {
                    // глобальные функции пришлось использовать чтобы рекурсия работала, и все не ломалось
                    window.currentUser = {
                        iiiij: (aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length
                    };
                    console.log(`номерок ${iiiij}`);
                    console.log(`номерок ${currentUser.iiiij}`);
                    nextTurn();
                }
            }
            else {}
        }

// Полная копия отравления, только морозом
// 5% от урона за критический удар. только +5 могут обычные юниты больше урона нанести
        takelifewithice()

        function takelifewithice() {
            if (attackerCreature.watereffect > 0) {
                console.log(attackerCreature.watereffect);
                attackerCreature.health -= attackerCreature.watereffect;
                console.log(`атака морозом ${attackerCreature.who}`);
                creatures.forEach((creature, i) => updateHealthView(creature, i));
                // мороз может закончится предварительно
                if (Math.random() < 0.3) {
                    attackerCreature.watereffect = 0;
                    console.log(`Мороз снят`);}
                if (attackerCreature.health <= 0) {
                    // глобальные функции пришлось использовать чтобы рекурсия работала, и все не ломалось
                    window.currentUser = {
                        iiiij: (aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length
                    };
                    console.log(`номерок ${iiiij}`);
                    console.log(`номерок ${currentUser.iiiij}`);
                    nextTurn();
                }
            }
            else {}
        }


// Если юнита превратили в ипа есть шанс превратиться обратно, вернув юниту все свойства, забрав их из таблицы импов. Найти там юнита по айди.
        impfunc()

        function impfunc() {
            if (attackerCreature.imp === 1) {
                if (Math.random() < 0.5) {
                    currentlyimps = transformedtoimps.length;
                    countthem = 0;

                    while (countthem < currentlyimps) {
                        if (attackerCreature.id === transformedtoimps[countthem][4]) {

                            attackerCreature.damage = transformedtoimps[countthem][0]
                            attackerCreature.type = transformedtoimps[countthem][1]
                            attackerCreature.who = transformedtoimps[countthem][2]
                            attackerCreature.lastingdamage = transformedtoimps[countthem][3]
                            tosplice = countthem;

                        } else {}
                        countthem++;
                    }

                    transformedtoimps.splice(tosplice, 1)
                    attackerCreature.imp = 0;
                    console.log(`Перестал быть импом ${attackerCreature.who}`);
                } else {
                    console.log(`Остался импом ${attackerCreature.who}`);
                }
            } else {}
        }

        // Можно выйти из паралича или нет, но в любом случае придется пропустить ход
        fullparalize()

        function fullparalize() {
            if (attackerCreature.paralized === 1) {
                if (Math.random() < 0.5) {
                    attackerCreature.paralized = 0;
                    console.log(`Паралич снят с ${attackerCreature.who}`);
                    nextTurn();
                } else {
                    console.log(`${attackerCreature.who} пас`);
                    nextTurn();
                }
            } else {
            }
        }
        // Окаменение работает как паралич, но снимается всегда
        stonen()

        function stonen() {
            if (attackerCreature.petrification === 1) {
                attackerCreature.petrification = 0;
                console.log(`Окаменение снято снят с ${attackerCreature.who}`);
                nextTurn();
            } else {
            }
        }

        console.log(attackerCreature);
// Пора бежать и добавляться в массив убежавших (не доделано)
        justrun()

        function justrun() {
            if (attackerCreature.runningaway === 1 && attackerCreature.paralized === 0 && attackerCreature.petrification === 0) {
                console.log(aliveCreatures.indexOf(attackerCreature))
                theindexof = aliveCreatures.indexOf(attackerCreature);
                aliveCreatures[theindexof]["health"] = 0;
                ranaway.push([attackerCreature.damage, attackerCreature.type, attackerCreature.who, attackerCreature.lastingdamage, attackerCreature.id,]);
                console.log("Добавлено");
                console.log(ranaway);
                window.attackerCreature = aliveCreatures[(aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length]
                creatures.forEach((creature, i) => updateHealthView(creature, i))
                document.getElementById("delta12").innerHTML = attackerCreature.who;
                takelifewithfire()
                takelife()
                stonen()
                fullparalize()
                impfunc()
                if (attackerCreature.runningaway === 1 && attackerCreature.paralized === 0 && attackerCreature.petrification === 0) {
                    justrun()
                }
            }
            else {}

        }
        attackerCreature.defensearmor = 0;
        console.log((aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length)
        console.log((aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length)
        console.log((aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length)
    }

    let newstillaliveCreatures = creatures
        .filter(creature => (creature.health > 0))
        .filter(creature => (creature.initiative > 0))

    yourfucknigturn = newstillaliveCreatures[0]["id"];
    console.log(yourfucknigturn);
    if (yourfucknigturn === 1) {
        rect1.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 2) {
        rect2.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 3) {
        rect3.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 4) {
        rect4.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 5) {
        rect5.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 6) {
        rect6.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 7) {
        rect7.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 8) {
        rect8.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 9) {
        rect9.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 10) {
        rect10.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 11) {
        rect11.classList.toggle("onewhomoves");
    }
    if (yourfucknigturn === 12) {
        rect12.classList.toggle("onewhomoves");
    }

    // кто-то умер
    creatures.map(function(name) {

        someoneisdead = name["health"];
        console.log(someoneisdead);
        if (someoneisdead <= 0)
        {
            if (name.alive === 1) {
                name.animat('stay', true);
                name.animat('death', false);
                name.animdeath();
                name.alive = 0;
                console.log("разве ты не мертв")
            }
        }

    })

    creatures.map(function(name) {

        someoneisskull2 = name.alive;
        if (someoneisskull2 === 2)
        {
            name.animat('death', true);
            name.animat('stay', true);
            name.animat('hurt', true);
        }
    })
    // это может помочь избавиться от артефактов weapon
}


<!--Нужно два хода чтобы убежать-->
const runrun = () => {
    attackerCreature.runningaway = 1;
    nextTurn();
}

const wait = () => {
    attackerCreature.initiative = attackerCreature.initiative * 0.01;
    nextTurn();
}

const realdefense = () => {
    attackerCreature.defensearmor = 0.5;
    nextTurn();
}


const performAttack = (attackedCreature) => {
    if (attackedCreature.team === attackerCreature.team) {

    if (attackerCreature.type === "sundancer") {
        const ourteam = creatures
            .filter(creature => creature.team === attackerCreature.team)
            .filter(creature => creature.health > 0)
            ourteam.map(function(name) {
                whatindex = name.protection.indexOf("fire");
                if (whatindex === -1) {
                    name.health = name.health + attackerCreature.damage;
                    if (name.health > name.mazhealth) {name.health = name.mazhealth}
                    name.protection.push("fire");
                    name.moreprotection.push(1);
                }
                else {
                    name.health = name.health + attackerCreature.damage;
                    if (name.health > name.mazhealth) {name.health = name.mazhealth}
                    name.moreprotection[whatindex] = 1;
                }
            })
        nextTurn()
        creatures.forEach((creature, i) => updateHealthView(creature, i))
        document.getElementById("delta12").innerHTML = attackerCreature.who;
        return // no friendly fire
        }

        else if (attackerCreature.type === "airdancer") {
            const ourteam = creatures
                .filter(creature => creature.team === attackerCreature.team)
                .filter(creature => creature.health > 0)
            ourteam.map(function(name) {
                whatindex = name.protection.indexOf("air");
                if (whatindex === -1) {
                    name.health = name.health + attackerCreature.damage;
                    if (name.health > name.mazhealth) {name.health = name.mazhealth}
                    name.protection.push("air");
                    name.moreprotection.push(1);
                }
                else {
                    name.health = name.health + attackerCreature.damage;
                    if (name.health > name.mazhealth) {name.health = name.mazhealth}
                    name.moreprotection[whatindex] = 1;
                }
            })
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }

    else if (attackerCreature.type === "elfcleric")
    {
        if (attackedCreature.health > 0) {
            whatindex = attackedCreature.protection.indexOf("fire");
            whatindex2 = attackedCreature.protection.indexOf("air");
            whatindex3 = attackedCreature.protection.indexOf("earth");
            whatindex4 = attackedCreature.protection.indexOf("water");
            if (whatindex === -1) {
                attackedCreature.protection.push("air");
                attackedCreature.moreprotection.push(1);}
            else {attackedCreature.moreprotection[whatindex] = 1;}

            if (whatindex2 === -1) {
                attackedCreature.protection.push("earth");
                attackedCreature.moreprotection.push(1);}
            else {attackedCreature.moreprotection[whatindex] = 1;}

            if (whatindex3 === -1) {
                attackedCreature.protection.push("water");
                attackedCreature.moreprotection.push(1);}
            else {attackedCreature.moreprotection[whatindex] = 1;}

            if (whatindex4 === -1) {
                attackedCreature.protection.push("fire");
                attackedCreature.moreprotection.push(1);}
            else {attackedCreature.moreprotection[whatindex] = 1;}

            attackedCreature.health += attackerCreature.damage;
            if (attackedCreature.health > attackedCreature.mazhealth) {
                attackedCreature.health = attackedCreature.mazhealth;
            }
            else {}
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
        else {
            console.log("Нельзя воскрешать мертвых");
            return // no friendly fire}
        }
    }

        else if (attackerCreature.who === "Повелитель волков" && attackedCreature.who === "Повелитель волков") {
            attackedCreature.type = "warrior"
            attackedCreature.who = "Дух Фенрира";
            attackedCreature.initiative = -100;
            attackedCreature.realinit = 70;
            attackedCreature.damage = 100;
            attackedCreature.health = 300;
            attackedCreature.mazhealth = 300;
            attackedCreature.typeofattack = "weapon"
            console.log("Превратился в волка")
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
      //  else {return}


// Призываем зомби на пустое место, или на место мертвого чувака
       else if (attackerCreature.type === "summoner" && attackedCreature.health <= 0) {console.log("Выполняйся сейчас")
            console.log(creatures);
findthezombieid = attackedCreature.id;
console.log(attackedCreature.id);
            console.log(creatures.length);
            finditnow = 0;

            while (finditnow < creatures.length) {
                if (finditnow === findthezombieid) {
                    console.log(creatures[finditnow]);
                    console.log(finditnow);
                    ourneededid = finditnow;
                }
                finditnow++;
            }
            attackedCreature.who = "Зомби";
            attackedCreature.damage = 60;
            attackedCreature.lastingdamage = 0;
            attackedCreature.health = 300;
            attackedCreature.mazhealth = 300;
            attackedCreature.type = "warrior";
            attackedCreature.paralized = 0;
            attackedCreature.poisoned = 0;
            attackedCreature.summoned = 1;
            console.log(creatures);

            nextTurn()

            creatures.forEach((creature, i) => updateHealthView(creature, i))

            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
// Призываем воздушного элементаля на пустое место, или на место мертвого чувака
        else if (attackerCreature.type === "empiresummoner" && attackedCreature.health <= 0) {console.log("Выполняйся сейчас")
            console.log(creatures);
            findthezombieid = attackedCreature.id;
            console.log(attackedCreature.id);
            console.log(creatures.length);
            finditnow = 0;

            while (finditnow < creatures.length) {
                if (finditnow === findthezombieid) {
                    console.log(creatures[finditnow]);
                    console.log(finditnow);
                    ourneededid = finditnow;
                }
                finditnow++;
            }
            attackedCreature.who = "Элементаль воздуха";
            attackedCreature.damage = 70;
            attackedCreature.lastingdamage = 0;
            attackedCreature.health = 100;
            attackedCreature.mazhealth = 100;
            attackedCreature.type = "archer";
            attackedCreature.paralized = 0;
            attackedCreature.poisoned = 0;
            attackedCreature.summoned = 1;
            console.log(creatures);

            nextTurn()

            creatures.forEach((creature, i) => updateHealthView(creature, i))

            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
// Двойник навсегда превращается в любого юнита в начале боя
        else if (attackerCreature.type === "doppelganger") {
            attackerCreature.who = attackedCreature.who;
            attackerCreature.damage = attackedCreature.damage;
            attackerCreature.lastingdamage = attackedCreature.lastingdamage;
            attackerCreature.health = attackedCreature.health;
            attackerCreature.mazhealth = attackedCreature.mazhealth;
            attackerCreature.type = attackedCreature.type;
            attackerCreature.paralized = attackedCreature.paralized;
            attackerCreature.poisoned = attackedCreature.poisoned;
            attackerCreature.summoned = 2;
            nextTurn()

            creatures.forEach((creature, i) => updateHealthView(creature, i))

            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
// Клерик лечит своих юнитов
        else if (attackerCreature.type === "cleric")
        {
            if (attackedCreature.health > 0) {
                attackedCreature.health += attackerCreature.damage;
                if (attackedCreature.health > attackedCreature.mazhealth) {
                    attackedCreature.health = attackedCreature.mazhealth;
                }
                else {}
                nextTurn()

                creatures.forEach((creature, i) => updateHealthView(creature, i))

                document.getElementById("delta12").innerHTML = attackerCreature.who;
                return // no friendly fire
            }
            else {
                console.log("Нельзя воскрешать мертвых");
                return // no friendly fire}
            }
        }

        // Патриарх может воскрешать, а не только лечить и надо будет сделать чтобы он не воскрешал убежавших или призванных
        else if (attackerCreature.type === "Patriach")
        {
            if (attackedCreature.health > 0) {
                attackedCreature.health += attackerCreature.damage;
                if (attackedCreature.health > attackedCreature.mazhealth) {
                    attackedCreature.health = attackedCreature.mazhealth;
                }
                else {}
                nextTurn()

                creatures.forEach((creature, i) => updateHealthView(creature, i))

                document.getElementById("delta12").innerHTML = attackerCreature.who;
                return // no friendly fire
            }
            else {
                attackedCreature.health = Math.round(attackedCreature.mazhealth / 2);
                nextTurn()

                creatures.forEach((creature, i) => updateHealthView(creature, i))

                document.getElementById("delta12").innerHTML = attackerCreature.who;
                return // no friendly fire
            }
        }
        // Лечим всех с помощью плохого цикла, но не воскрешаем
        else if (attackerCreature.type === "masscleric")
        {
            if (attackedCreature.health > 0) {
                const ourteam = creatures
                    .filter(creature => creature.team === attackerCreature.team)
                    .filter(creature => creature.health > 0)
                ourteam.forEach(creature => creature.health += attackerCreature.damage);
                let iiiii = 0;
                while (iiiii < ourteam.length) {
                    if (ourteam[iiiii].health > ourteam[iiiii].mazhealth) {
                        ourteam[iiiii].health = ourteam[iiiii].mazhealth
                    }
                    iiiii++;
                }
            }
            else {
                console.log("Нельзя воскрешать мертвых");
                return // no friendly fire}
            }

            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }

    else if (attackerCreature.type === "profit")
    {
        if (attackedCreature.health > 0) {
            const ourteam = creatures
                .filter(creature => creature.team === attackerCreature.team)
                .filter(creature => creature.health > 0)
            ourteam.forEach(creature => creature.fireeffect = 0);
            ourteam.forEach(creature => creature.watereffect = 0);
            ourteam.forEach(creature => creature.poisoned = 0);
            ourteam.forEach(creature => creature.paralized = 0);
            // Распревращение из импа

            hailtucycles = 0;

            while (hailtucycles < ourteam.length) {
                varforprofit = ourteam[hailtucycles];
                console.log(varforprofit)
                if (varforprofit.imp === 1) {
                    console.log(varforprofit.imp);
                        currentlyimps = transformedtoimps.length;
                        countthem = 0;

                        while (countthem < currentlyimps) {
                            if (varforprofit.id === transformedtoimps[countthem][4]) {
                                varforprofit.damage = transformedtoimps[countthem][0]
                                varforprofit.type = transformedtoimps[countthem][1]
                                varforprofit.who = transformedtoimps[countthem][2]
                                varforprofit.lastingdamage = transformedtoimps[countthem][3]
                                tosplice = countthem;
                            }
                            else {}
                            countthem++;
                        }
                        transformedtoimps.splice(tosplice, 1)
                        varforprofit.imp = 0;
                        console.log(`Перестал быть импом ${varforprofit.who}`);
                } else {}
                hailtucycles++;
            }

            ourteam.forEach(creature => creature.health += attackerCreature.damage);
            let iiiii = 0;
            while (iiiii < ourteam.length) {
                if (ourteam[iiiii].health > ourteam[iiiii].mazhealth) {
                    ourteam[iiiii].health = ourteam[iiiii].mazhealth
                }
                iiiii++;
            }
        }
        else {
            console.log("Нельзя воскрешать мертвых");
            return // no friendly fire}
        }

        nextTurn()
        creatures.forEach((creature, i) => updateHealthView(creature, i))
        document.getElementById("delta12").innerHTML = attackerCreature.who;
        return // no friendly fire
    }

        else if (attackerCreature.type === "druid")
        {
            attackedCreature.damage = attackedCreature.damage * 1.75;
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
        else if (attackerCreature.type === "archdruid")
        {
            attackedCreature.damage = attackedCreature.damage * 2;
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
        else if (attackerCreature.type === "herbalist") {
            attackedCreature.damage = attackedCreature.damage * 1.25;
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
        else if (attackerCreature.type === "initiated") {
            attackedCreature.damage = attackedCreature.damage * 1.5;
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }
        else if (attackerCreature.type === "alchemist") {
            attackedCreature.initiative = 120;
            console.log(attackedCreature.initiative);
            nextTurn()
            creatures.forEach((creature, i) => updateHealthView(creature, i))
            document.getElementById("delta12").innerHTML = attackerCreature.who;
            return // no friendly fire
        }

else {
                console.log("Это ваш юнит");
                return // no friendly fire
        }
    }
// вернуть let если что
    let enemyTeam = creatures
        .filter(creature => creature.team === attackedCreature.team)
        .filter(creature => creature.health > 0)
    if (attackedCreature.health <= 0) {
        console.log("already dead")
        return
    }
    else
    {

       function checkshild () {enemyTeam.map(function(name) {
           whatindex = name.protection.indexOf(attackerCreature.typeofattack);
           if (name.immunity.includes(attackerCreature.typeofattack)) {console.log(`Иммунитет у ${name.who}`)
               eggerim = enemyTeam.indexOf(name);
               delete enemyTeam[eggerim];
           }
           else if (whatindex !== -1) {
               if (name.moreprotection[whatindex] === 1) {
                   console.log(`Защита у ${name.who}`)
                   name.moreprotection[whatindex] = 0;
                   egger = enemyTeam.indexOf(name);
                   delete enemyTeam[egger];
               }
               else {}
           }
           else {}
       });
           enemyTeam = enemyTeam.filter(function( element ) {
               return element !== undefined;
           });}

        function justattack () {
            whatindex = attackedCreature.protection.indexOf(attackerCreature.typeofattack);
           if (attackedCreature.immunity.includes(attackerCreature.typeofattack)) {console.log(`Иммунитет у ${attackedCreature.who}`)
               return 0;}
           else if (whatindex !== -1) {
               if (attackedCreature.moreprotection[whatindex] === 1) {
                   console.log(`Защита у ${attackedCreature.who}`)
                   attackedCreature.moreprotection[whatindex] = 0;
                   return 0;
               }
               else {return 1;}
           }
           else {return 1;}
        }

        function justanotherattack () {
            whatindex = attackedCreature.protection.indexOf(attackerCreature.typeofsecondattack);
            if (attackedCreature.immunity.includes(attackerCreature.typeofsecondattack)) {console.log(`Иммунитет у ${attackedCreature.who}`)
                return 0;}
            else if (whatindex !== -1) {
                if (attackedCreature.moreprotection[whatindex] === 1) {
                    console.log(`Защита у ${attackedCreature.who}`)
                    attackedCreature.moreprotection[whatindex] = 0;
                    return 0;
                }
                else {return 1;}
            }
            else {return 1;}
        }

        function checkprotection () {enemyTeam.map(function(name) {
            whatindex = name.protection.indexOf(attackerCreature.typeofsecondattack);
            if (name.immunity.includes(attackerCreature.typeofsecondattack)) {console.log(`Иммунитет ко 2 атаке у ${name.who}`)
                eggerim = enemyTeam.indexOf(name);
                delete enemyTeam[eggerim];
            }
            else if (whatindex !== -1) {
                if (name.moreprotection[whatindex] === 1) {
                    console.log(`Защита от второй атаки у ${name.who}`)
                    name.moreprotection[whatindex] = 0;
                    egger = enemyTeam.indexOf(name);
                    delete enemyTeam[egger];
                }
                else {}
            }
            else {}
        });
            enemyTeam = enemyTeam.filter(function( element ) {
                return element !== undefined;
            });}


        if (attackerCreature.type === "mage") {
            checkshild ();
            enemyTeam.forEach(creature => creature.health -= Math.floor((attackerCreature.damage * (1 - creature.armor) * (1 - creature.defensearmor))));
            if (attackedCreature.team === "blue") {
                attackerCreature.animat('attack', false);
                attackerCreature.animat('weapon', false);
                attackerCreature.animatmage('mage', false);
                attackerCreature.animat('stay', true);
                attackerCreature.animattack();
                attackerCreature.sound();
                attackerCreature.animweapon();
                console.log("Не синяя команда")
                window.globalattacker = {
                    realattacker: attackerCreature,
                };
                window.globalattacked = {
                    realattacked: attackedCreature,
                };
            }
            else {
                attackerCreature.animat('attack', false);
                attackerCreature.animat('weapon', false);
                attackerCreature.animat('mage', false);
                attackerCreature.animat('stay', true);
                attackerCreature.animattack();
                attackerCreature.sound();
                attackerCreature.animweapon();
                console.log("Не синяя команда")
                window.globalattacker = {
                    realattacker: attackerCreature,
                };
                window.globalattacked = {
                    realattacked: attackedCreature,
                };
            }
        }

       else if (attackerCreature.type === "hermit") {
            checkshild ();
            enemyTeam.forEach(creature => creature.health -= Math.floor((attackerCreature.damage * (1 - creature.armor) * (1 - creature.defensearmor))));
            checkprotection();
            enemyTeam.forEach(creature => creature.initiative = Math.random() < attackerCreature.accuracy[1] ? creature.initiative - 20 : creature.initiative)
            hatethecycles = 0;
            while (hatethecycles < enemyTeam.length) {
                if (enemyTeam[hatethecycles]["initiative"] < 0 && enemyTeam[hatethecycles]["initiative"] > -10) {enemyTeam[hatethecycles]["initiative"] = 0}
                hatethecycles++;
            }
        }

        else if (attackerCreature.type === "teurg") {
            checkshild ();
            enemyTeam.forEach(creature => creature.health -= Math.floor((attackerCreature.damage * (1 - creature.armor) * (1 - creature.defensearmor))));
            checkprotection();
            enemyTeam = enemyTeam
                .filter(creature => creature.armor > 0)
            console.log(enemyTeam)
            enemyTeam.forEach(creature => creature.armor = Math.random() < attackerCreature.accuracy[1] ? creature.armor - 0.15 : creature.armor)
            hatethecycles = 0;
            while (hatethecycles < enemyTeam.length) {
                if (enemyTeam[hatethecycles]["armor"] < 0) {enemyTeam[hatethecycles]["armor"] = 0}
                hatethecycles++;
            }
        }

        else if (attackerCreature.type === "snakedragon") {
            checkshild ();
            enemyTeam.forEach(creature => creature.health -= Math.floor((attackerCreature.damage * (1 - creature.armor) * (1 - creature.defensearmor))));
            checkprotection();
            enemyTeam.forEach(creature => creature.poisoned = Math.random() < attackerCreature.accuracy[1] ? attackerCreature.lastingdamage : creature.poisoned)
        }

        else if (attackerCreature.type === "teamat") {
            // Тиамат забирает треть здоровья всех юнитов, но только один раз
            checkshild();
            enemyTeam.forEach(creature => creature.health -= Math.floor((attackerCreature.damage * (1 - creature.armor) * (1 - creature.defensearmor))));
            checkprotection();
            betterwayfind = 0;
            vampiresum = 0;
            while (betterwayfind < enemyTeam.length) {
                if (enemyTeam[betterwayfind]["teammated"] === 0) {
                    if (Math.random() < 0.8) {
                        newdam = enemyTeam[betterwayfind]["damage"];
                        newdam = newdam * 0.66;
                        newdam = Math.round(newdam);
                        enemyTeam[betterwayfind]["damage"] = newdam;
                        enemyTeam[betterwayfind]["teammated"] = 1;
                    }
                }
                else {}
                betterwayfind++;
            }
            console.log(enemyTeam);
        }
        // Вампиры забирают треть нанесенного урона у всех юнитов противника
          else if (attackerCreature.type === "vampire") {
              checkshild();
              betterwayfind = 0;
              vampiresum = 0;
              while (betterwayfind < enemyTeam.length) {
                  vampiresum = enemyTeam[betterwayfind]["health"] + vampiresum;
                  console.log(vampiresum)
                  betterwayfind++;
              }
firstpartofpuzzle = vampiresum;

              enemyTeam.forEach(creature => creature.health -= Math.floor((attackerCreature.damage * (1 - creature.armor) * (1 - creature.defensearmor))));
// Сводим отрицательное здоровье к нулю
            betterwayfind = 0;
            vampiresum = 0;
            while (betterwayfind < enemyTeam.length) {
             if (enemyTeam[betterwayfind]["health"] < 0) {enemyTeam[betterwayfind]["health"] = 0}
                betterwayfind++;
            }

            betterwayfind = 0;
            vampiresum = 0;
            while (betterwayfind < enemyTeam.length) {
                vampiresum = enemyTeam[betterwayfind]["health"] + vampiresum;
                console.log(vampiresum)
                betterwayfind++;
            }
            secondpartofpuzzle = vampiresum;

            getvampirehealth = (firstpartofpuzzle - secondpartofpuzzle)/2;
            getvampirehealth = Math.floor(getvampirehealth);
            console.log(getvampirehealth);
            attackerCreature.health = getvampirehealth + attackerCreature.health;
            if (attackerCreature.health > attackerCreature.mazhealth) {attackerCreature.health = attackerCreature.mazhealth}
            else {}
        }
        // Высшие вампиры делают тоже самое а потом раздают равномерно здоровье своим юнитам, но сначала до максимума себе. Ужасные циклы
        else if (attackerCreature.type === "highvampire") {
            checkshild();
            betterwayfind = 0;
            vampiresum = 0;
            while (betterwayfind < enemyTeam.length) {
                vampiresum = enemyTeam[betterwayfind]["health"] + vampiresum;
                betterwayfind++;
            }
            firstpartofpuzzle = vampiresum;

            enemyTeam.forEach(creature => creature.health -= Math.floor((attackerCreature.damage * (1 - creature.armor) * (1 - creature.defensearmor))));
// Сводим отрицательное здоровье к нулю
            betterwayfind = 0;
            vampiresum = 0;
            while (betterwayfind < enemyTeam.length) {
                if (enemyTeam[betterwayfind]["health"] < 0) {
                    enemyTeam[betterwayfind]["health"] = 0
                }
                betterwayfind++;
            }

            betterwayfind = 0;
            vampiresum = 0;
            while (betterwayfind < enemyTeam.length) {
                vampiresum = enemyTeam[betterwayfind]["health"] + vampiresum;
                betterwayfind++;
            }
            secondpartofpuzzle = vampiresum;

            getvampirehealth = (firstpartofpuzzle - secondpartofpuzzle) / 2;
            getvampirehealth = Math.floor(getvampirehealth);
            console.log(getvampirehealth);
            futurehealth = getvampirehealth + attackerCreature.health;
            if (futurehealth >= attackerCreature.mazhealth) {
                heavampire = futurehealth - attackerCreature.mazhealth;
                attackerCreature.health = attackerCreature.mazhealth;
                drinklife()
            }
            else {attackerCreature.health = futurehealth}
        }
        // Воин с добавлением подтипов внизу
        else if (attackerCreature.type === "warrior") {
            const creaturesAhead = enemyTeam.filter(creature => creature.where === 'ahead')
            const creaturesBehind = enemyTeam.filter(creature => creature.where === 'behind')
            const mydamnteam = creatures
                .filter(creature => creature.team === attackerCreature.team)
                .filter(creature => creature.health > 0)
            const mycreaturesAhead = mydamnteam.filter(creature => creature.where === 'ahead')
            const mycreaturesBehind = mydamnteam.filter(creature => creature.where === 'behind')

            if (mycreaturesAhead.length > 0 && attackerCreature.where === 'behind') {
                console.log("Нельзя атаковать ребят из за спины")
                return // no friendly fire}
            }
            let creaturesAttackable = creaturesAhead.length > 0 ? creaturesAhead : creaturesBehind

            if (creaturesAttackable.length > 1) {
                creaturesAttackable = creaturesAttackable.filter(creature => Math.abs(creature.position - attackerCreature.position) <= 1)
            }

            if (!creaturesAttackable.includes(attackedCreature)) {
                return //can't attack this creature
            }

            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.health -= Math.floor((attackerCreature.damage * (1 - attackedCreature.armor) * (1 - attackedCreature.defensearmor)));}
            else {}


            if (attackerCreature.who === "Повелитель ада") {
                protectedornot2 = justanotherattack();
                if (protectedornot2 === 1) {
                    if (Math.random() < attackerCreature.accuracy[1]) {
                        attackedCreature.petrification = 1;
                        console.log(`${attackedCreature.who} окаменен`);
                    }
                    else {}
                }
                else {}
            }


                       if (attackerCreature.who === "Владыка") {
                           protectedornot2 = justanotherattack();
                           if (protectedornot2 === 1) {
                               if (Math.random() < attackerCreature.accuracy[1]) {
                                   attackedCreature.fireeffect = attackedCreature.lastingdamage;
                                   attackedCreature.effect = 2;
                               }
                               else {}
                           }
                           else {}
                       }

            if (attackerCreature.who === "Сын Имира") {
                protectedornot2 = justanotherattack();
                if (protectedornot2 === 1) {
                    if (Math.random() < attackerCreature.accuracy[1]) {
                        attackedCreature.fireeffect = attackedCreature.lastingdamage;
                        attackedCreature.effect = 3;
                    }
                    else {}
                }
                else {}
            }
        }

        else if (attackerCreature.type === "uterchild") {
            const creaturesAhead = enemyTeam.filter(creature => creature.where === 'ahead')
            const creaturesBehind = enemyTeam.filter(creature => creature.where === 'behind')
            const mydamnteam = creatures
                .filter(creature => creature.team === attackerCreature.team)
                .filter(creature => creature.health > 0)
            const mycreaturesAhead = mydamnteam.filter(creature => creature.where === 'ahead')
            const mycreaturesBehind = mydamnteam.filter(creature => creature.where === 'behind')

            if (mycreaturesAhead.length > 0 && attackerCreature.where === 'behind') {
                console.log("Нельзя атаковать ребят из за спины")
                return // no friendly fire}
            }
            let creaturesAttackable = creaturesAhead.length > 0 ? creaturesAhead : creaturesBehind

            if (creaturesAttackable.length > 1) {
                creaturesAttackable = creaturesAttackable.filter(creature => Math.abs(creature.position - attackerCreature.position) <= 1)
            }

            if (!creaturesAttackable.includes(attackedCreature)) {
                return //can't attack this creature
            }

            protectedornot = justattack();
            if (protectedornot === 1) {
                attackedCreature.health -= Math.floor((attackerCreature.damage * (1 - attackedCreature.armor) * (1 - attackedCreature.defensearmor)));
            } else {
            }
            protectedornot2 = justanotherattack();
            if (protectedornot2 === 1) {
                if (Math.random() < attackerCreature.accuracy[1]) {
                    attackedCreature.paralized = 1;
                    console.log(`${attackedCreature.who} парализован`);
                } else {
                }
            }
        }
// Астерот атакует дважды
        else if (attackerCreature.type === "Asterot") {
            const creaturesAhead = enemyTeam.filter(creature => creature.where === 'ahead')
            const creaturesBehind = enemyTeam.filter(creature => creature.where === 'behind')
            const mydamnteam = creatures
                .filter(creature => creature.team === attackerCreature.team)
                .filter(creature => creature.health > 0)
            const mycreaturesAhead = mydamnteam.filter(creature => creature.where === 'ahead')
            const mycreaturesBehind = mydamnteam.filter(creature => creature.where === 'behind')

            if (mycreaturesAhead.length > 0 && attackerCreature.where === 'behind') {
                console.log("Нельзя атаковать ребят из за спины")
                return // no friendly fire}
            }
            let creaturesAttackable = creaturesAhead.length > 0 ? creaturesAhead : creaturesBehind

            if (creaturesAttackable.length > 1) {
                creaturesAttackable = creaturesAttackable.filter(creature => Math.abs(creature.position - attackerCreature.position) <= 1)
            }

            if (!creaturesAttackable.includes(attackedCreature)) {
                return //can't attack this creature
            }

            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.health -= Math.floor((attackerCreature.damage * (1 - attackedCreature.armor) * (1 - attackedCreature.defensearmor)));}
            else {}

            if (attackedCreature.team === "blue") {
                attackerCreature.animat('attack', false);
                attackerCreature.animat('weapon', false);
                attackerCreature.animat('stay', true);
                attackerCreature.animattack();
                attackerCreature.sound();
                attackerCreature.animweapon();
                console.log("Не синяя команда")
                window.globalattacker = {
                    realattacker: attackerCreature,
                };
                window.globalattacked = {
                    realattacked: attackedCreature,
                };
            }
            else {
                attackerCreature.animat('attack', false);
                attackerCreature.animat('weapon', false);
                attackerCreature.animat('stay', true);
                attackerCreature.animattack();
                attackerCreature.sound();
                attackerCreature.animweapon();
                console.log("Не синяя команда")
                window.globalattacker = {
                    realattacker: attackerCreature,
                };
                window.globalattacked = {
                    realattacked: attackedCreature,
                };
            }
        }

        else if (attackerCreature.type === "wildcentaur") {
            const creaturesAhead = enemyTeam.filter(creature => creature.where === 'ahead')
            const creaturesBehind = enemyTeam.filter(creature => creature.where === 'behind')
            const mydamnteam = creatures
                .filter(creature => creature.team === attackerCreature.team)
                .filter(creature => creature.health > 0)
            const mycreaturesAhead = mydamnteam.filter(creature => creature.where === 'ahead')
            const mycreaturesBehind = mydamnteam.filter(creature => creature.where === 'behind')

            if (mycreaturesAhead.length > 0 && attackerCreature.where === 'behind') {
                console.log("Нельзя атаковать ребят из за спины")
                return // no friendly fire}
            }
            let creaturesAttackable = creaturesAhead.length > 0 ? creaturesAhead : creaturesBehind

            if (creaturesAttackable.length > 1) {
                creaturesAttackable = creaturesAttackable.filter(creature => Math.abs(creature.position - attackerCreature.position) <= 1)
            }

            if (!creaturesAttackable.includes(attackedCreature)) {
                return //can't attack this creature
            }
            critdamage = Math.floor(attackerCreature.damage * 0.05);
            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.health -= Math.floor((attackerCreature.damage * (1 - attackedCreature.armor)) * (1 - attackedCreature.defensearmor) + critdamage);}
            else {}
        }
// Лучник, да
        else if (attackerCreature.type === "archer") {
            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.health -= Math.floor((attackerCreature.damage * (1 - attackedCreature.armor) * (1 - attackedCreature.defensearmor)));}
            else {}
            if (attackedCreature.team === "blue") {
                attackerCreature.animat('attack', false);
                attackerCreature.animat('weapon', false);
                attackerCreature.animat('stay', true);
                attackerCreature.animattack();
                attackerCreature.sound();
                attackerCreature.animweapon();
                attackedCreature.glowred();
                attackedCreature.removerednow();
                console.log("Не синяя команда")
                window.globalattacker = {
                    realattacker: attackerCreature,
                };
                window.globalattacked = {
                    realattacked: attackedCreature,
                };
            }
            else {
                attackerCreature.animat('attack', false);
                attackerCreature.animat('weapon', false);
                attackerCreature.animat('stay', true);
                attackerCreature.animattack();
                attackerCreature.sound();
                attackerCreature.animweapon();
                attackedCreature.glowred();
                attackedCreature.removerednow();
                console.log("Не синяя команда")
                window.globalattacker = {
                    realattacker: attackerCreature,
                };
                window.globalattacked = {
                    realattacked: attackedCreature,
                };
            }
        }

        else if (attackerCreature.type === "elfarcher") {
            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.health -= Math.floor((attackerCreature.damage * (1 - attackedCreature.armor) * (1 - attackedCreature.defensearmor)));}
            else {}
        }
// Как лучник только добавляет яд, урон каждый ход тому кого атаковал
        else if (attackerCreature.type === "Assasin") {
            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.health -= Math.floor((attackerCreature.damage * (1 - attackedCreature.armor) * (1 - attackedCreature.defensearmor)));}
            else {}
            if (Math.random() < attackerCreature.accuracy[1]) {attackedCreature.poisoned = attackerCreature.lastingdamage}
            attackedCreature.effect = 1;
        }




// Призрак парализует а утер-демон парализует всех
        else if (attackerCreature.type === "ghost") {
            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.paralized = 1;}
            else {}
        } else if (attackerCreature.type === "uter") {
            checkshild ();
            enemyTeam.forEach(creature => creature.health -= Math.floor((attackerCreature.damage * (1 - creature.armor) * (1 - creature.defensearmor))));
            checkprotection();
            enemyTeam.forEach(creature => creature.paralized = Math.random() < attackerCreature.accuracy[1] ? 1 : 0)
            console.log(attackerCreature.accuracy[1]);
            console.log(enemyTeam);
        }
        // Инкуб окаменяет всех, а Тень парализует всех не нанося урона
        else if (attackerCreature.type === "incub") {
            checkshild();
            enemyTeam.forEach(creature => creature.petrification = Math.random() < 0.6 ? 1 : 0)
        }

        else if (attackerCreature.type === "shadow") {
            checkshild();
            enemyTeam.forEach(creature => creature.paralized = Math.random() < 0.5 ? 1 : 0)
        } else if (attackerCreature.type === "betrezen") {
            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.health -= Math.floor((attackerCreature.damage * (1 - attackedCreature.armor) * (1 - attackedCreature.defensearmor)));}
            else {}
            attackedCreature.paralized = Math.random() < 0.9 ? 1 : 0;
        }
        // Ведьма превращает одного юнита в импа меняя его характеристики. А самого юнита закидывает в таблицу импов
        else if (attackerCreature.type === "witch") {
            if (attackedCreature.imp === 1) {console.log("Уже имп");
            return}
            else
            {
                protectedornot = justattack();
                if (protectedornot === 1) {transformedtoimps.push([attackedCreature.damage, attackedCreature.type, attackedCreature.who, attackedCreature.lastingdamage, attackedCreature.id,]);
                    console.log(attackedCreature.who)
                    attackedCreature.imp = 1;
                    attackedCreature.damage = 20;
                    attackedCreature.type = "warrior";
                    attackedCreature.who = "Имп";
                    attackedCreature.lastingdamage = 0;}
                else {}
                }
            }
        // Суккуб делает это со всеми. С помощью цикла который надо бы поменять
        else if (attackerCreature.type === "succubus") {
            //придется написать для этого отдельную функцию
            let enemyTeam = creatures
                .filter(creature => creature.team === attackedCreature.team)
                .filter(creature => creature.health > 0)
                 checkshild();

countthemall = enemyTeam.length;

            let iiiii2 = 0;
            while (iiiii2 < countthemall) {
                {
                    batterarray = enemyTeam[iiiii2]

if (batterarray.imp !== 1) {
    if (Math.random() < 0.5) {

        transformedtoimps.push([batterarray.damage, batterarray.type, batterarray.who, batterarray.lastingdamage, batterarray.id,]);
        batterarray.imp = 1;
        batterarray.damage = 20;
        batterarray.type = "warrior";
        batterarray.lastingdamage = 0;
    }
    else {}
}
        else {}
                }
                iiiii2++;
            }
        }
        // Снова двойник только превращающийся во врагов, а не своих юнитов
        else if (attackerCreature.type === "doppelganger") {
            attackerCreature.who = attackedCreature.who;
            attackerCreature.damage = attackedCreature.damage;
            attackerCreature.lastingdamage = attackedCreature.lastingdamage;
            attackerCreature.health = attackedCreature.health;
            attackerCreature.mazhealth = attackedCreature.mazhealth;
            attackerCreature.type = attackedCreature.type;
            attackerCreature.paralized = attackedCreature.paralized;
            attackerCreature.poisoned = attackedCreature.poisoned;
            attackerCreature.summoned = 2;
        }
        // Баронесса заставляет убегать
        else if (attackerCreature.type === "baroness") {
            protectedornot = justattack();
            if (protectedornot === 1) {attackedCreature.runningaway = 1;}
            else {}
        }
        // Лечащие юниты и призыватели не должны влиять на врагов
        else if (attackerCreature.type === "cleric") {
            console.log("нет");
            return // no friendly fire
        } else if (attackerCreature.type === "Patriach") {
            console.log("нет");
            return // no friendly fire
        } else if (attackerCreature.type === "masscleric") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "summoner") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "empiresummoner") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "druid") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "archdruid") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "herbalist") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "initiated") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "alchemist") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "sundancer") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "airdancer") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "elfcleric") {
            console.log("нет");
            return // no friendly fire
        }
        else if (attackerCreature.type === "profit") {
            console.log("нет");
            return // no friendly fire
        }
    }
// юнит уже походил, нужно для инициативы


    console.log(attackerCreature);

    // Следующий ход, обновление здоровья и кто ходит
    nextTurn()

    creatures.forEach((creature, i) => updateHealthView(creature, i))

    document.getElementById("delta12").innerHTML = attackerCreature.who;

};
