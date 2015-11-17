// one line comment

function makeObjects(name, gender,opponent){
var numberObject= {
    name: name,
    gender: gender,
    level: 1,
    weapon: "wooden sword",
    power: Math.floor(Math.random() * 100) + 1,
    fight: function(){
        return "rushes to the arena with ";
    },
    faceoff: function(opponent){
        if(this.power>opponent.power)
           return this.name + " killed " + opponent.name;
        else
            return opponent.name + " killed " + this.name;
    }
};
return numberObject;
}

var objects = [];
objects.push(makeObjects("Babak", "M","Lauren"));
objects.push(makeObjects("Ziad", "M","Nora"));
objects.push(makeObjects("Nora", "M","Babak"));
objects.push(makeObjects("Laurren", "F","Ziad"));
console.log(objects[0].fight());
console.log(objects[0].faceoff(objects[1]));
//console.log(objects);