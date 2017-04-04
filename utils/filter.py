import cars

car_data = cars.get_cars(test=False)

car_list = list(set( [m['Identification']['Make'] for m in car_data] ))

year_list = list(set( [m['Identification']['Year'] for m in car_data] ))
print sorted(year_list)
