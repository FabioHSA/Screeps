var spawner = {
    run:function(spawn) {
        //Pre settings
        var numberOfHarvesters = Number(2);
        var numberOfUpgraders = Number(2);
        var numberOfBuilders = Number(0);
        //Harvesters spawn code
        var harversters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        if(harvesters.length < numberOfHarvesters) {
            spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        }
        //Upgraders spawn code
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        if(upgraders.length < numberOfUpgraders) {
            spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        }
        //Builders spawn code
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        if(builders.length < numberOfBuilders) {
            spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
        }
    }
}

module.exports = spawner;