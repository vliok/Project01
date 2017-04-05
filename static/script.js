var car_data;
$(document).ready( function() {
    $.getJSON("/data/", function(r) {
        car_data = r;
    })

    function update_dropdown(year) {
        var dropdown = document.querySelector('#makes');
        while (dropdown.firstElementChild) {
            dropdown.remove(dropdown.firstElementChild);
        }

        for (make in car_data[year]) {
            var new_node = document.createElement("option");
            new_node.setAttribute("value", make);
            new_node.innerHTML = make;
            dropdown.appendChild(new_node);
        }
    }

    $('#years').slider({
        min: 2009,
        max: 2012,
        create: function(e, ui) {
            $("#custom-handle").text( $(this).slider("value") );
        },
        slide: function(e, ui) {
            $("#custom-handle").text(ui.value);
        },
        stop: function(e, ui) {
            var year = ui.value;
            update_dropdown(year)
            display();
        }
    });

    $('#makes').on('change', function() {
        display();
        anime();
    });

    function display() {
        var year = $('#years').slider("value");
        var make = $('#makes').val();
        console.log(make, year);
        
        //data for make and year
        var car = car_data[year][make];
        
        d3.select('#display').text(JSON.stringify(car));
    }

});


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
var big = {

"2009Audi" : "https://static.cargurus.com/images/site/2008/09/10/21/15/2009_audi_a3-pic-65074-1600x1200.jpeg",
"2009BMW" : "https://media.ed.edmunds-media.com/bmw/7-series/2009/oem/2009_bmw_7-series_sedan_750li_s_oem_1_500.jpg",
"2009Chevrolet" : "https://static.cargurus.com/images/site/2009/08/06/12/33/2009-chevrolet-silverado-hybrid-pic-52066-1600x1200.png",
"2009Hyundai" : "http://st.automobilemag.com/uploads/sites/11/2009/12/0911_03_z-2010_hyundai_elantra_blue-side_view.jpg",
"2009Infiniti" : "http://www.blogcdn.com/www.autoblog.com/media/2012/04/lead2-2012-infiniti-ex35-review.jpg",
"2009Lotus" : "https://s-media-cache-ak0.pinimg.com/originals/e0/47/ae/e047ae0e661deec9d08f558f0230cc95.jpg",
"2009Maybach" : "https://cdn04.carsforsale.com/3/468869/2778863/thumb/545876642.jpg",
"2009Nissan" : "http://st.motortrend.com/uploads/sites/5/2012/02/2013-Nissan-370z-side-view.jpg",
"2010AMG" : "http://st.motortrend.com/uploads/sites/5/2008/02/112_0802_04z-2008_mercedes_benz_c63_AMG-right_side_view.jpg",
"2010Acura" : "http://st.automobilemag.com/uploads/sites/11/2010/03/1003_11_z-2010_acura_mDX-side_view.jpg",
"2010Aston Martin" : "http://www.blogcdn.com/www.autoblog.com/media/2010/03/05amrapidefd2011opt.jpg",
"2010Audi" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuhn7rtcH0jUXgY8ePlJW2vj7cTTcZzyan8MaiTBKNvBW2sRX0Gw",
"2010BMW" : "http://www.autotribute.com/wp-content/uploads/2010/02/2011-BMW-X5-4.jpg",
"2010BMW Motorrad" : "https://images.carstory.com/5102266018371754236/4/c/320x180",
"2010Bentley" : "https://upload.wikimedia.org/wikipedia/commons/9/94/Bentley_Continental_Flying_Spur_side_20100731.jpg",
"2010Buick" : "http://st.motortrend.com/uploads/sites/5/2012/04/2013-Buick-Enclave-side.jpg",
"2010Cadillac" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8yPdCrkVXG1ma6XZPaO9xzfwo0fNuEFH7AThLZY8rfdU1-nIsA",
"2010Chevrolet" : "https://static.cargurus.com/images/site/2010/01/20/22/14/2010_chevrolet_colorado-pic-3056726734462114662-1600x1200.png",
"2011AMG" : "http://www.blogcdn.com/www.autoblog.com/media/2011/11/lead2-mercedes-c63-amg-black-series.jpg",
"2011Acura" : "https://media.ed.edmunds-media.com/acura/mdx/2011/oem/2011_acura_mdx_4dr-suv_base_fq_oem_1_500.jpg",
"2011Aston Martin" : "https://www.cstatic-images.com/phototab/7/d/2/b7/f6cce38b65af23577b1d09da563.jpg",
"2011Audi" : "http://www.bestcarsnews.com/wp-content/uploads/2011/07/2011-Audi-A3.jpg",
"2011Buick" : "http://www.roadtests.com/images/buick/enclave/2011/760/2011_buick_enclave_picture%20(9).jpg",
"2011Dodge" : "http://spidercars.net/wp-content/uploads/images/2011-Dodge-Avenger_7622.jpg",
"2012Acura" : "http://www.blogcdn.com/www.autoblog.com/media/2011/09/lead2-2012-acura-tl-sh-awd-review.jpg",
"2012Aston Martin" : "http://st.motortrend.com/uploads/sites/5/2011/02/2012-aston-martin-virage-side.jpg?interpolation=lanczos-none&fit=around%7C660%3A414",
"2012Jeep" : "http://onsurga.com/wp-content/uploads/2012/04/2012-Jeep-Compass.jpg",
"2012Kia" : "http://images.newcars.com/images/car-pictures/original/2012-Kia-Sedona-Minivan-Van-LX-Front-wheel-Drive-Passenger-Van-Photo-7.png"

};
            
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

var anime = function(event){
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
	            //n.setAttribute("href", "http://www.lambocars.com/images/gallardo/gallsuper5.jpg" );
                    var aoe = String($('#years').slider("value")) + String($('#makes').val());
                    if(big[aoe] != null){
                         aoe = big[aoe];
                    }
                    else{
                         aoe = "http://www.lambocars.com/images/gallardo/gallsuper5.jpg";
                    }
                    n.setAttribute("href", aoe);
	            n.setAttribute("x", j + parseInt(zi.left));
                    if(j >= 2 * c){
                        j=0;
                    }
	            n.setAttribute("y", d - 770 + parseInt(zi.top));
	            n.setAttribute("height","150");
		    n.setAttribute("width","200");
                    n.setAttribute("preserveAspectRatio", "none");
	            a.appendChild(n);

                    /*
                    var rec = document.createElementNS("http://www.w3.org/2000/svg","rect");
                    rec.setAttribute("x", j + parseInt(zi.left) + 100);
                    rec.setAttribute("y", parseInt(zi.top) + d - 240);
                    rec.setAttribute("height", "20");
                    rec.setAttribute("width", "10");  
                    a.appendChild(rec);
                    */

                    j++;
                        
                    var road = document.createElementNS("http://www.w3.org/2000/svg","image");	
	            road.setAttribute("href", "http://previewcf.turbosquid.com/Preview/2014/08/01__15_05_14/road%20and%20sidewalk_01LOW.jpg601e495b-872b-4974-853b-d03136d39c75Larger.jpg" );
	            road.setAttribute("x", parseInt(zi.left));
	            road.setAttribute("y", parseInt(zi.top) + d - 640);
	            road.setAttribute("height","100");
		    road.setAttribute("width",2 * c);
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
/*
window.onload = function(){
      anime();
};
*/