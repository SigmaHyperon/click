/**
 * 
 */

$(function(){
	Game.init();
});

var Game = {
	resources: {},
	energy: {},
	production: {},
	buildings: {},
	research: {},
	ui: {},
	init: function(){
		Game.research.init();
		Game.resources.init();
		Game.buildings.init();
		Game.ui.init();
		
		console.log("Game init done");
	}
}

Game.resources ={
	list: {},
	init: function(){
		this.list = new resourceList();
	},
	unlock: function(name){
		if(!this.isUnlocked(name)){
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
		if(typeof this.list[name] != "undefined"){
			return this.list[name].unlocked;
		}
		return false;
	}
};

Game.ui.init = function(){
	Game.ui.resources.init();
	Game.ui.buildings.init();
	Game.ui.menu.init();
};

Game.ui.resources = {
	init: function(){
		this.table = $(".game .content .sidebar table#resources tbody");
		this.update();
	},
	update: function(){
		this.clear();
		for(item in Game.resources.list){
			if(Game.resources.list[item].unlocked){
				this.addRecord(Game.resources.list[item].name, Game.resources.list[item].amount);
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

Game.ui.buildings = {
	template: function(newBuilding){
		return "<div class='btn'>"+newBuilding.name+"</div>";
	},
	init: function(){
		this.tab = $(".game .content .content-tab#buildings");
		this.update();
	},
	update: function(){
		$(this.tab).children().remove();
		for(id in Game.buildings.list){
			$(this.tab).append(this.template(Game.buildings.list[id]));
		};
	}
};

Game.ui.menu = {
	init: function(){
		$(".game .menu .btn").on("click", function(e){
			$(".game .content .content-tab").hide();
			$(".game .content .content-tab#"+$(this).attr("id")).show();
		});
		$(".game .content .content-tab#main").show();
	},
};

Game.research = {
	init: function(){
		this.list = researchList;
	},
};
Game.buildings = {
	init: function(){
		this.list = buildingList;
	},
}