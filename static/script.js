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
    });

    function display() {
        var year = $('#years').slider("value");
        var make = $('#makes').val();
        console.log(make, year);
        
        //data for make and year
        var car = car_data[year][make];
        
    }

});
