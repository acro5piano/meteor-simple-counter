Counter = new Mongo.Collection("counter");

if (Meteor.isClient) {
  Template.body.helpers({
    count : function () {
       return Counter.findOne({});
    }
  });

  Template.body.events({
    "click button" : function(){
        var obj = Counter.findOne({});
        console.log(obj);
        Counter.update(obj._id,{
            $set :{value : obj.value + 1 }
        });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Counter.remove({});
    Counter.insert({
      value:0,
      createdAt: new Date()
    });
  });
}


