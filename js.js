function myFunction()
{
Parse.initialize("om9ynedsIy67rU9vfQh8IVR2vv0A6WnFz0jgWUrP", "mzPU7M8YQwD83alRhWwGtM9niEiDcSKs4mOKSNbp");
      var TechBathroom = Parse.Object.extend("TechBathroom");
      var techbathroom = new TechBathroom();
      techbathroom.save({gender: "M", floor: 0, latitude: 42.05722, longitude: 87.67528, stallnumber: 3 }).then(function(object) {
        alert("yay! it worked");
      });
};
