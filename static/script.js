var car_data;
$.getJSON("/data/", data_callback)

function data_callback(r) {
    car_data = r;
}

$(document).ready( function() {
    //console.log(car_data);
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
            console.log(ui.value);
        }
    });
    $('#makes').selectmenu();
});
