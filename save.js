Parse.initialize("om9ynedsIy67rU9vfQh8IVR2vv0A6WnFz0jgWUrP", "mzPU7M8YQwD83alRhWwGtM9niEiDcSKs4mOKSNbp");
      var GameScore = Parse.Object.extend("GameScore");
       
      // Create a new instance of that class.
      var gameScore = new GameScore();
       
      // Alternatively, you can use the typical Backbone syntax.
      var Achievement = Parse.Object.extend({
        className: "Achievement"
      });
      var GameScore = Parse.Object.extend("GameScore");
      var gameScore = new GameScore();
       
      gameScore.set("score", 1337);
      gameScore.set("playerName", "Sean Plott");
      gameScore.set("cheatMode", false);
       
      gameScore.save(null, {
        success: function(gameScore) {
          // Execute any logic that should take place after the object is saved.
          alert('New object created with objectId: ' + gameScore.id);
        },
        error: function(gameScore, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and description.
          alert('Failed to create new object, with error code: ' + error.description);
        }
      });
      var TestObject = Parse.Object.extend("TestObject");
      var testObject = new TestObject();
      testObject.save({foo: "bar3",too: "mm"}).then(function(object) {
        alert("yay! it worked");
      });