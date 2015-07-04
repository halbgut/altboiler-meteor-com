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
        function cleanUp () {
          if(!window.altboiler_hasTimePassed) {
            return setTimeout(cleanUp, 0)
          }
          document.getElementsByClassName('altboiler_loader')[0].style.opacity = 0
          removeInterval()
          setTimeout(next, 200)
        }
        function removeInterval () {
          clearInterval(window.boilerplate_interval)
        }
        setTimeout(cleanUp, 0)
      }
    })
  });
}
