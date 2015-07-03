if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    altboiler.config({
      action: altboiler.getTemplate('loader.html', Assets),
      css: Assets.getText('loader.css'),
      js: Assets.getText('loader.js'),
      onLoad: function (next) {
        function disappear () {
          document.getElementsByClassName('altboiler_loader')[0]
            .style.opacity = 0
        }
        setTimeout(disappear, 4000)
        setTimeout(next, 4200)
      }
    })
  });
}
