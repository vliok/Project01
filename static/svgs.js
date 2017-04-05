
var a = document.getElementById("a");
var q = document.getElementById("circle");
var t = document.getElementById("dvd");
var r = document.getElementById("clear");
var c = a.getAttribute('width')/2;
var d = a.getAttribute('height')/2;
var zi = $(a).offset();
var f = 1;
var u = 1;
var rid;
var prac = ["1979", "1986", "1996", "2001", "2012"]
            
var draw = function(event){
               clear();
               var e = document.createElementNS("http://www.w3.org/2000/svg","circle");	
	       e.setAttribute("cx", c );
	       e.setAttribute("cy", d);
	       e.setAttribute("r",u);
	       e.setAttribute("fill","purple");
	       a.appendChild(e);
	       u += f;
               if(u == c || u == d){
	          f = -1;
	       }
	       if(u == 0){
	          f = 1;
	       }
	       rid = window.requestAnimationFrame( draw );
}

var anime = function(stuff){
    var j = 0;
    //var mop = Math.round(900/(stuff[4] - stuff[0]));
               var anim = function(event){
               /*   var lol;
                    if(j > 600){
                       lol = 800;
                    }
                    if(j > 400){
                       lol = 600;
                    }
                    else if(j > 200){
                       lol = 400; 
                    }
                    else{
                       lol = 200;
                    }               */
                    clear();
                    var n = document.createElementNS("http://www.w3.org/2000/svg","image");	
	            n.setAttribute("href", "http://www.lambocars.com/images/gallardo/gallsuper5.jpg" );
	            n.setAttribute("x", j + parseInt(zi.left));
	            n.setAttribute("y", d - 150 + parseInt(zi.top));
	            n.setAttribute("height","200");
		    n.setAttribute("width","200");
	            a.appendChild(n);

                    var rec = document.createElementNS("http://www.w3.org/2000/svg","rect");
                    rec.setAttribute("x", j + parseInt(zi.left) + 100);
                    rec.setAttribute("y", parseInt(zi.top) + d + 60);
                    rec.setAttribute("height", "20");
                    rec.setAttribute("width", "10");  
                    a.appendChild(rec);

                    j++;
                        
                    var road = document.createElementNS("http://www.w3.org/2000/svg","image");	
	            road.setAttribute("href", "http://previewcf.turbosquid.com/Preview/2014/08/01__15_05_14/road%20and%20sidewalk_01LOW.jpg601e495b-872b-4974-853b-d03136d39c75Larger.jpg" );
	            road.setAttribute("x", parseInt(zi.left));
	            road.setAttribute("y", parseInt(zi.top) + d - 40);
	            road.setAttribute("height","100");
		    road.setAttribute("width","1000");
                    road.setAttribute("preserveAspectRatio", "none");
	            a.appendChild(road);
 
                    
                    /*
                    if((100 >= Math.abs(200 - j)) || (100 >= Math.abs(400 - j)) || (100 >= Math.abs(600 - j)) || (100 >= Math.abs(800 - j))){
                       var z = document.createElementNS("http://www.w3.org/2000/svg","line");
                       z.setAttribute("x1", lol + parseInt(zi.left));
                       z.setAttribute("y1", parseInt(zi.top) + d - 150);
                       z.setAttribute("x2", lol + parseInt(zi.left));
                       z.setAttribute("y2", parseInt(zi.top) + d - 20);
                       z.setAttribute("style", "stroke:rgb(102,51,153);stroke-width:3");
                       a.appendChild(z);
                    }
                      (scrapped transformation points)
                    */
                    
                    rid = window.requestAnimationFrame( anim );

               }
     anim();
}

var clear = function(event){
    while(a.hasChildNodes()){
	a.removeChild(a.childNodes[0]);
        window.cancelAnimationFrame(rid);
    }
}

window.onload = function(){
      anime(prac);
};
