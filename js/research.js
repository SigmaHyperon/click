var research = function(){
	this.name;
	this.cost = new resourceList();
	this.effect;
	this.age;
	this.category;
	this.unlocked = false;
};

var researchNames = ["writing", "calendar", "mining"];

var researchList = {};

for (id in researchNames){
	var name = researchNames[id];
	researchList[name] = new research();
	researchList[name].name = name;
}

researchList.writing.age = 0;
researchList.writing.category = "science";
researchList.writing.cost.wood.amount = 5;