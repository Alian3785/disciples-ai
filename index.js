
var animation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('icon-container'), // required
    path: 'data.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

var animation2 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('other-container'), // required
    path: 'data2.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Demo Animation", // optional
});

animation.play();
animation2.play();

const creatures = [
    {
        damage: 15,
        health: 45,
        team: "blue",
        where: "behind",
        position: 3,
        type: "mage",
        who: "Сектант",
        paralized: 0,
    }, {
        damage: 25,
        health: 120,
        team: "blue",
        where: "ahead",
        position: 1,
        type: "warrior",
        who: "Одержимый",
        paralized: 0,
    }, {
        damage: 50,
        health: 170,
        team: "blue",
        where: "ahead",
        position: 2,
        type: "warrior",
        who: "Берсеркер",
        paralized: 0,
    }, {
        damage: 60,
        health: 165,
        team: "blue",
        where: "ahead",
        position: 3,
        type: "warrior",
        who: "Герцог",
        paralized: 0,
    }, {
        damage: 50,
        health: 122,
        team: "red",
        where: "ahead",
        position: 1,
        type: "warrior",
        who: "Рыцарь Смерти",
        paralized: 0,
    }, {
        damage: 40,
        health: 300,
        team: "red",
        where: "ahead",
        position: 3,
        type: "mage",
        who: "Дракон Рока",
        paralized: 0,
    }, {
        damage: 30,
        health: 60,
        team: "red",
        where: "behind",
        position: 1,
        type: "mage",
        who: "Колдун",
        paralized: 0,
    }, {
        damage: 30,
        health: 150,
        team: "blue",
        where: "behind",
        position: 2,
        type: "archer",
        who: "Лучник",
        paralized: 0,
    },
    {
        damage: 10,
        health: 200,
        team: "blue",
        where: "behind",
        position: 1,
        type: "ghost",
        who: "призрак",
        paralized: 0,
    },{
        damage: 150,
        health: 1500,
        team: "red",
        where: "behind",
        position: 2,
        type: "uter",
        who: "утер",
        paralized: 0,
    },
    {
        damage: 100,
        health: 300,
        team: "red",
        where: "behind",
        position: 3,
        type: "betrezen",
        who: "Бетрезен",
        paralized: 0,
    },
];

window.attackerCreature = creatures[0];

const attack = (creatureIndex) => {
    performAttack(creatures[creatureIndex])
}

const updateHealthView = (creature, i) => {
    const elm = document.getElementById(`delta${i}`)

    if (!elm) {
        return
    }

    elm.innerText = creature.health > 0 ? creature.health : 'Dead'
}

const nextTurn = () => {
    const aliveCreatures = creatures
        .filter(creature => (creature.health > 0))

    window.attackerCreature = aliveCreatures[(aliveCreatures.indexOf(attackerCreature) + 1) % aliveCreatures.length]

    if (attackerCreature.paralized === 1) {
        attackerCreature.paralized = 0;
        console.log(`Паралич снят с ${attackerCreature.who}`);
        nextTurn();
    }
}

const performAttack = (attackedCreature) => {
    if (attackedCreature.team === attackerCreature.team) {
        return // no friendly fire
    }

    const enemyTeam = creatures
        .filter(creature => creature.team === attackedCreature.team)
        .filter(creature => creature.health > 0)

    if (attackerCreature.type === "mage") {
        enemyTeam.forEach(creature => creature.health -= attackerCreature.damage);
        animation.play();
        animation2.play();
    } else if (attackerCreature.type === "warrior") {
        animation.play();
        animation2.play();
        const creaturesAhead = enemyTeam.filter(creature => creature.where === 'ahead')
        const creaturesBehind = enemyTeam.filter(creature => creature.where === 'behind')

        let creaturesAttackable = creaturesAhead.length > 0 ? creaturesAhead : creaturesBehind

        if (creaturesAttackable.length > 1) {
            creaturesAttackable = creaturesAttackable.filter(creature => Math.abs(creature.position - attackerCreature.position) <= 1)
        }

        if (!creaturesAttackable.includes(attackedCreature)) {
            return //can't attack this creature
        }

        attackedCreature.health -= attackerCreature.damage;
    } else if (attackerCreature.type === "archer") {
        attackedCreature.health -= attackerCreature.damage;
    } else if (attackerCreature.type === "ghost") {
        attackedCreature.paralized = 1;
        alert(attackedCreature.who);
    } else if (attackerCreature.type === "uter") {
        enemyTeam.forEach(creature => creature.health -= attackerCreature.damage)
        enemyTeam.forEach(creature => creature.paralized = Math.random() < 0.6 ? 1 : 0)
    }
    else if (attackerCreature.type === "betrezen") {
        attackedCreature.health -= attackerCreature.damage;
        attackedCreature.paralized = Math.random() < 0.6 ? 1 : 0;
    }

    nextTurn()

    creatures.forEach((creature, i) => updateHealthView(creature, i))

    document.getElementById("delta11").innerHTML = attackerCreature.who;
};