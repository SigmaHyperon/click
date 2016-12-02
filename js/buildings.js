function building (){
	this.name;
	this.effect;
	this.amount;
	this.cost = new resourceList();
	this.unlocked = false;
	this.isAffordable = function(){
		for(name in Game.resources.list){
			if(Game.resources.list[name].amount < this.cost[name].amount){
				return false;
			}
		}
		return true;
	};
};

var buildingNames = ["granary", "library", "temple"];

var buildingList = {};

for (id in buildingNames){
	var name = buildingNames[id];
	buildingList[name] = new building();
	buildingList[name].name = name;
}