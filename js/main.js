/**
 * 
 */




$(function(){
	$(".game .menu .btn").on("click", function(e){
		$(".game .content .content-tab").hide();
		$(".game .content .content-tab#"+$(this).attr("name")).show();
	});
	Game.init();
});

var Game = {
	resources: {},
	energy: {},
	production: {},
	buildings: {},
	ui: {},
	init: function(){
		Game.resources.init();
		Game.ui.init();
		
		console.log("Game init done");
	}
}

Game.resources ={
	list: {},
	init: function(){
		this.list = reslist;
		this.unlock("wood");
	},
	unlock: function(name){
		if(this.isUnlocked(name)){
			this.list[name].unlocked = true;
			return true;
		}
		return false;
	},
	add: function(name, amount){
		if(this.isUnlocked(name)){
			this.list[name].amount += amount;
			return true;
		}
		return false;
	},
	isUnlocked: function(name){
		if(this.list.indexOf(name) > 0){
			return this.list[name].unlocked;
		}
		return false;
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