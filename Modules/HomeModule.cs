using Nancy;
using Bids.Objects;
using System.Collections.Generic;
using System;

namespace Bidder
{
  public class HomeModule : NancyModule
  {
    public HomeModule()
    {
      // Car bmw = new Car("BMW", "M3", 2003, 100000, 5000, "img/bmw.jpg");
      // bmw.Save(bmw);
      // bmw.Save(new Car("Porshe", "M3", 2003, 100000, 5000, "img/bmw.jpg"));

      Get["/"] = _ => {
        List<Car> listOfCars = Car.GetAllCars();
        // Console.WriteLine(listOfCars[1].getCar());
        return View["list_all_cars.cshtml", listOfCars];
      };
      Get["/car/{id}"] = parameters => {
        return View["car.cshtml", Car.getCarById(parameters.id)];
      };
      Get["/car/{id}/buy"] = parameters => {
        Car.buyCar(parameters.id);
        return View["list_all_cars.cshtml", Car.GetAllCars()];
      };
      Post["/addCar"] = _ => {
        // Get form data
        string fieldString = "year model make miles price pic"; // string of all the input names
        string[] fields = fieldString.Split(' '); // split the strings into array
        Dictionary<string, string> fieldData = new Dictionary<string,string>() {}; // Dictionary for the field data
        foreach(string field in fields) { // iterate through the array of fields
          fieldData.Add(field, Request.Form[field]);// store the field data in the dictionary
        }
        // foreach( KeyValuePair<string,string> row in fieldData ) { // write the field data to the console to see if it worked
        //   Console.WriteLine(row.Key + " " + row.Value);
        // }
        // Parse ints
        int milesInt = 0;
        int.TryParse(fieldData["miles"], out milesInt);
        int priceInt = 0;
        int.TryParse(fieldData["price"], out priceInt);
        int yearInt = 0;
        int.TryParse(fieldData["year"], out yearInt);

        // make a new car
        Car newCar = new Car(fieldData["make"], fieldData["model"], yearInt, milesInt, priceInt, fieldData["pic"]);
        newCar.Save(); // save the car to the list
        return View["list_all_cars.cshtml", Car.GetAllCars()]; // display list of all cars
      };
      Post["/search"] = _ => {
        string search = Request.Form["search"];
        return View["list_all_cars.cshtml", Car.searchByMakeModel(search)];
      };


    }
  }
}
