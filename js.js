function myFunction()
{
Parse.initialize("om9ynedsIy67rU9vfQh8IVR2vv0A6WnFz0jgWUrP", "mzPU7M8YQwD83alRhWwGtM9niEiDcSKs4mOKSNbp");
      var TechBathroom = Parse.Object.extend("TechBathroom");
      var techbathroom1 = new TechBathroom();
      techbathroom1.save({gender: "F", floor: 0, latitude: 42.05722, longitude: 87.6752778, stallnumber: 3 });
      var techbathroom2 = new TechBathroom();
      techbathroom2.save({gender: "F", floor: 0, latitude: 42.05750, longitude: 87.6755556, stallnumber: 3 }).then(function(object) {
        alert("yay! it worked");
      });
      var techbathroom3 = new TechBathroom();
      techbathroom3.save({gender: "F", floor: 0, latitude: 42.05778, longitude: 87.6758333, stallnumber: 4 }).then(function(object) {
        alert("yay! it worked");
      });
      var techbathroom4 = new TechBathroom();
      techbathroom4.save({gender: "F", floor: 0, latitude: 42.05778, longitude: 87.6766667, stallnumber: 3 }).then(function(object) {
        alert("yay! it worked");
      });                  
      var techbathroom5 = new TechBathroom();
      techbathroom5.save({gender: "F", floor: 0, latitude: 42.05806, longitude: 87.6750000, stallnumber: 3 }).then(function(object) {
        alert("yay! it worked");
      });                  


};
