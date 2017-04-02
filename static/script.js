var car_data;

function data_callback(r) {
    car_data = r;
    main();
};



function main() {
    console.log(car_data[0]);
}
