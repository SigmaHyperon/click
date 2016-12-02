function resource(name, amount){
	this.name;
	this.amount;
	this.unlocked = false;
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

var resourceList = function(){
		this.wood = new resource("wood");
		this.copper = new resource("copper");
		this.bronze = new resource("bronze");
		this.steel = new resource("steel");
		this.aluminium = new resource("aluminium");
		this.oil = new resource("oil");
		this.plastics = new resource("plastics");
		this.cFiber = new resource("carbon fiber");
		this.nMaterials = new resource("nano materials");
};