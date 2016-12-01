function resource(name, amount){
	this.name;
	this.amount;
	this.unlocked = true;
	if(typeof name != "undefined"){
		this.name = name;
		if(typeof amount != "undefined"){
			this.amount = amount;
		}
		else{
			this.amount = 0;
		}
	}
};

var reslist = {
		wood: new resource("wood"),
		copper: new resource("copper"),
		bronze: new resource("bronze"),
		steel: new resource("steel"),
		aluminium: new resource("aluminium"),
		oil: new resource("oil"),
		plastics: new resource("plastics"),
		cFiber: new resource("carbon fiber"),
		nMaterials: new resource("nano materials")
};