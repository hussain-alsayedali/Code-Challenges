function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
let fighter1 = new Fighter("Lew", 10, 2)
let fighter2 = new Fighter("Harry", 5, 4)

let firstAttacker = 'Lew'

if(firstAttacker === fighter1.name){
    while(fighter1.health >= 0 && fighter2.health >= 0){
        fighter2.health -= fighter1.damagePerAttack
        if(fighter2.health <= 0){
            console.log('2dead')
            return fighter1.name
        } 
        fighter1.health -= fighter2.damagePerAttack
        if(fighter1.health <= 0){
            console.log('1dead')
            return fighter2.name
        } 
    }
}
else{
    while(fighter1.health >= 0 && fighter2.health >= 0){
        fighter1.health -= fighter2.damagePerAttack
        if(fighter1.health <= 0){
            console.log('1dead')
            return fighter2.name
        } 
        fighter2.health -= fighter1.damagePerAttack
        if(fighter2.health <= 0){
            console.log('2dead')
            return fighter1.name
        } 
    }
}