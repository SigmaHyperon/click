/**
 * 
 */
function resource(name, amount){
	
	this.name;
	this.amount;
	this.unlocked = false;
}


$(function(){
	$(".game .menu .btn").on("click", function(e){
		$(".game .content .content-tab").hide();
		$(".game .content .content-tab#"+$(this).attr("name")).show();
	});
	Game.init();
});

var Game = {
	resources: [],
	energy: {},
	production: {},
	buildings: {},
	ui: {},
	init: function(){
		var iron = new resource();
		iron.name = "iron";
		iron.amount = 0;
		iron.unlocked = true;
		Game.resources.push(iron);
		
		Game.ui.init();
		
		console.log("Game init done");
	}
};

Game.ui.init = function(){
	Game.ui.resources.init();
};

Game.ui.resources = {
	init: function(){
		this.table = $(".game .content .sidebar table#resources tbody");
		this.update();
	},
	update: function(){
		this.clear();
		for(item in Game.resources){
			if(Game.resources[item].unlocked){
				this.addRecord(Game.resources[item].name, Game.resources[item].amount);
			}
		}
	},
	addRecord: function(resource, amount){
		$(this.table).append("<tr><td>"+resource+"</td><td>"+amount+"</td></tr>");
	},
	clear: function(){
		$(this.table).children().remove();
	}
};