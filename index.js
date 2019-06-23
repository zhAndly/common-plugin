;(function(){
	//下载地址（必填）
	if(map.isIOS){
		map.downUrl = "https://itunes.apple.com/us/app/id834878585";
	}else{
		map.downUrl = "https://itunes.apple.com/us/app/id834878585";
	};
	window.app = {
		initFlag : true,
		squareNum : 0,
		initCount : 0,
		canvas : new createjs.Stage("canvas"),
		// 橙色、红色、绿色、蓝色、黄色
		color: ["#ffa50073", "#ff00004a", "#4caf508a", "#ffff0066", "#2196f354"]
	};
	window.utils = {
		init : function(){
			createjs.Touch.enable(app.canvas);
			utils.createGridBg();
			utils.createInnerStar();
			utils.createInnerStar1();
			utils.createInnerStar2();
			utils.createInnerStar3();
			utils.createInnerStar4();
			utils.createInnerStar5();
			utils.createInnerStar6();
			utils.createInnerStar7();
			utils.createInnerStar8();
			utils.createInnerStar9();
			if("ontouchend" in document){
            	var startName = "touchstart";
            	var moveName = "touchmove";
            	var endName = "touchend";
            }else{
            	var startName = "mousedown";
            	// mouseover mousemove
            	var moveName = "mouseover";
            	var endName = "mouseup";
            };
            app.canvas.addEventListener(startName, utils.touchStart);
            app.canvas.addEventListener(moveName, utils.touchMove);
            app.canvas.addEventListener(endName, utils.touchEnd);
		},
		guideHide : function(event){
			app.cover.style.display = "none";
			app.guide.style.display = "none";
		},
		// 网格背景图
		createGridBg : function(){
			app.gridBox = new createjs.Container();
			app.gridBox.x = app.min*0.04;
			app.gridBox.y = app.min*0.15;
			Crt.sence.addChild(app.gridBox);
			createjs.Touch.enable(app.gridBox);
			for(var i = 0; i < 5; i++){
				for(var j = 0; j < 5; j++){
					app["grid_" + i + "_" +j] = Crt.drawRoundRect({
						color : "#80808070",
						width : app.min*0.18,
						height : app.min*0.18,
						x : app.min*0.185*j,
						y : app.min*0.185*i,
						container : app.gridBox,
						round : app.min*0.02 /*圆角*/
					});
				};
			};
			/**
				横轴: x, 纵轴: y;
				0-0: 第一行第一列, 0-1: 第一行第二列, 以此类推
			*/
			var grid = {
				'0-0' : {star: ''},'0-1' : {star: 'orange'},'0-2' : {star: 'red'},'0-3' : {star: ''},'0-4' : {star: 'green'},
				'1-0' : {star: ''},'1-1' : {star: 'red'},'1-2' : {star: ''},'1-3' : {star: ''},'1-4' : {star: 'blue'},
				'2-0' : {star: 'orange'},'2-1' : {star: ''},'2-2' : {star: 'yellow'},'2-3' : {star: ''},'2-4' : {star: ''},
				'3-0' : {star: 'blue'},'3-1' : {star: 'yellow'},'3-2' : {star: 'green'},'3-3' : {star: ''},'3-4' : {star: ''},
				'4-0' : {star: ''},'4-1' : {star: ''},'4-2' : {star: ''},'4-3' : {star: ''},'4-4' : {star: ''}
			};
			// app.gridBox.on("click",function(e){
			// 	if(e.target.name == 'roundRect'){
			// 		return false;
			// 	}else{
			// 		console.log(Crt.sence)
			// 	}
	  //       })
		},
		// 网格内星星渲染
		createStarTemplate : function(num, starCoe, unique){
			var currentPos = {x:starCoe.x, y:starCoe.y},
				curScaleX = (0.1*app.min)/358,
				curScaleY = (0.1*app.min)/336,
				img = window.IMGRESOURCES[num].src,
				star = Crt.drawImg({
	                src: img,
	                container: app.gridBox,
	                x: app.min*currentPos.x,
	                y: app.min*currentPos.y,
	                scaleX: curScaleX,
	                scaleY: curScaleY
	            });
	            star.name = unique;
		},
		createInnerStar : function(){
			utils.createStarTemplate(0, {x:0.23, y:0.04}, 'orange');
		},
		createInnerStar1 : function(){
			utils.createStarTemplate(1, {x:0.41, y:0.04}, 'red');
		},
		createInnerStar2 : function(){
			utils.createStarTemplate(2, {x:0.78, y:0.04}, 'green');
		},
		createInnerStar3 : function(){
			utils.createStarTemplate(1, {x:0.23, y:0.22}, 'red');
		},
		createInnerStar4 : function(){
			utils.createStarTemplate(3, {x:0.78, y:0.22}, 'blue');
		},
		createInnerStar5 : function(){
			utils.createStarTemplate(0, {x:0.04, y:0.41}, 'orange');
		},
		createInnerStar6 : function(){
			utils.createStarTemplate(4, {x:0.41, y:0.41}, 'yellow');
		},
		createInnerStar7 : function(){
			utils.createStarTemplate(3, {x:0.04, y:0.6}, 'blue');
		},
		createInnerStar8 : function(){
			utils.createStarTemplate(4, {x:0.23, y:0.6}, 'yellow');
		},
		createInnerStar9 : function(){
			utils.createStarTemplate(2, {x:0.41, y:0.6}, 'green');
		},
		touchStart : function(event){
			// app.moveTarget = event.target;
			// app.moveTarget.x1 = app.moveTarget.x;
			// app.moveTarget.y1 = app.moveTarget.y;
			// app.moveTarget.x = 0;
			// app.moveTarget.y = 0;
			// app.moveTarget.scaleX = 1.8;
			// app.moveTarget.scaleY = 1.8;
			// app.moveTarget.addEventListener("pressmove", utils.touchMove);
			// app.moveTarget.addEventListener("pressup", utils.touchEnd);
			// for(var i = 0; i < app.moveTarget.children.length; i++){
			// 	var pos = app.moveTarget.children[i].pos;
			// 	app.moveTarget.children[i].x = app.moveTarget.children[i].x + app.min*0.01*app.moveTarget.children[i].pos[1];
			// 	app.moveTarget.children[i].y = app.moveTarget.children[i].y + app.min*0.01*app.moveTarget.children[i].pos[0];
			// };
		},
		touchMove : function(){
			console.log();
		},
		touchEnd : function(){
			// app.count.innerHTML = Number(app.count.innerHTML) + 1;
			// if(app.count.innerHTML >=5){};

			// app.moveTarget.removeEventListener("pressmove", utils.touchMove);
			// app.moveTarget.removeEventListener("pressup", utils.touchEnd);
			// if(false){}else{
			// 	for(var i = 0; i < app.moveTarget.children.length; i++){
			// 		var pos = app.moveTarget.children[i].pos;
			// 		createjs.Tween.get(app.moveTarget.children[i]).to({
			// 			x : app.moveTarget.children[i].x - app.min*0.01*app.moveTarget.children[i].pos[1],
			// 			y : app.moveTarget.children[i].y - app.min*0.01*app.moveTarget.children[i].pos[0]
			// 		}, 400, createjs.Ease.linear);
			// 	};
			// 	createjs.Tween.get(app.moveTarget).to({
			// 		x : app.moveTarget.x1,
			// 		y : app.moveTarget.y1,
			// 		scaleX : 1,
			// 		scaleY : 1
			// 	}, 400, createjs.Ease.linear);
			// };
		},
		randomNum : function (m,n){
		　　return Number((Math.random()*(m - n) + n).toFixed(2));
		},
	};
	//屏幕旋转函数（必填）
	map.ad_resize = function(flag){
		var ad_width = 414,
			ad_height = 736;
        app.dw = map.getScreenSize().width;
        app.dh = map.getScreenSize().height;
        rate = app.dw/app.dh;
		app.vw = 0;
		app.vh = 0;
		if(app.dw < app.dh){
			document.body.setAttribute("class", "vertical");
			if(app.dw/app.dh < ad_width/ad_height){
				app.vw = app.dw;
				app.vh = (ad_height*app.dw)/ad_width;
			}else{
				app.vh = app.dh;
				app.vw = (app.dh*ad_width)/ad_height;
			};
			app.header.style.width = app.footer.style.width = '100%';
		}else{
			document.body.setAttribute("class", "horizontal");
			if(app.dw/app.dh < ad_height/ad_width){
				app.vh = (app.dw*ad_width)/ad_height;
				app.vw = app.dw;
			}else{
				app.vw = (app.dh*ad_height)/ad_width;
				app.vh = app.dh;
			};
			app.fh = (0.75 * app.vh).toFixed(2);
			app.header.style.width = app.footer.style.width = app.fh + 'px';
		};
		app.min = app.vw < app.vh ? app.vw : app.vh;
		app.main.style.width = app.vw + "px";
		app.main.style.height = app.vh + "px";
        app.canvas.width = app.vw;
    	app.canvas.height = app.vh;
    	app.fs = app.min/10;
		document.querySelector("html").style.fontSize = app.fs +'px';
		Crt.autoResize();
	};
	//初始化函数（必填）
	map.ad_init = function(){
		if(app.initFlag){
			app.installBtn = document.getElementById("installBtn");
			app.main = document.getElementById("main");
			app.cover = document.getElementById("cover");
			app.end = document.getElementById("end");
			app.guide = document.getElementById("guide");
			app.count = document.getElementById("count");
			app.step = document.getElementById("step");
			app.percent = document.getElementById("percent");
			app.canvas = document.getElementById("canvas");
			app.header = document.querySelector('.header');
			app.footer = document.querySelector('.footer');
		};
		map.ad_resize();
		if(app.initFlag){
			Crt.init({
				// bgColor : "#f00",
				type : "vertical",
				id : "canvas",
				rate : 1.2,
				scale: 1,
				distance:{
					x : app.vw*0.07,
					y : app.vh*0.25
				}
			});
			app.initFlag = false;
			Crt.preLoad(window.IMGRESOURCES,function() {
	            utils.init();
	        });
		};
	};
	//下载事件（必填）
	window.ad_downloaded = function(){
		map.platDown();
	};
})();