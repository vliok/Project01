var car_data;
$.getJSON("/data/", data_callback)

function data_callback(r) {
    car_data = r;
    main();
};

function main() {
    console.log(car_data[0]);
}
