ramble = function ramble () {
  var i = Math.round(Math.random() * 10)
  stuff[i]()
}


var styles = 'color: green; font-style: italic;'
var stuff = [
 function () {

    console.info('Cool features of the %cconsole', 'font-style: italic; color: rebeccapurple')
    console.info('%cYou can style the output', 'font-size: 20px')
    console.info('%cconsole.info(\'%\\cYou can style the output\', \'font-size: 20px\')', styles)
    console.info('%cYou\'ll need to remove replace', styles)
    console.info('%\\c')
    console.info('%cwith', styles)
    console.info('%c')
    console.info('%cin order for this to work', styles)

  },

  function () {

    console.info('Cool features of the %cconsole', 'font-style: italic; color: rebeccapurple')
    console.dir(console)
    console.info('%cconsole.dir(console)', styles)

  },

  function () {

    console.info('Cool features of the %cconsole', 'font-style: italic; color: rebeccapurple')
    console.group()
    console.info('%cconsole.group(); console.info(...); console.groupEnd()', styles)
    console.groupEnd()

  },

  function () {

    console.info('Cool features of the %cconsole', 'font-style: italic; color: rebeccapurple')
    console.info('%cHere\'s one of my favorites:', styles)
    ; ['','',''].forEach(console.count.bind(console, 'A count'))
    console.info('%c[\'\',\'\',\'\'].forEach(console.count.bind(console, \'A count\')', styles)

  },

  function () {

    console.info('You can call %cramble%c to see more rambling :)', styles)

  },

  function () {

    console.info('in 1956 a man appeared on the popular TV show \"I\'ve Got A Secret\" who had witnessed \nAbraham Lincoln\'s assassination on April 14th, 1865')

  },

  function () {

    console.info('The core Meteor package %cWebApp%c has an (ATOW) undocumented feature called %cWebApp.\nrawConnectHandlers%c with wich you can install connect handlers before most routers install theirs.', styles)

  },

  function () {

    console.info('Paul the Octopus was so precise in his predictions during the 2010 FIFA World Cup that he \nreceived death threats from German fans and had to be offered state protection.\nhttps://en.wikipedia.org/wiki/Paul_the_Octopus')

  },

  function () {

    console.log('Coca-Cola introduced Tab-Clear to ruin the Crystal Pepsi marketing campaign. Tab-Clear was \nmarketed as an inferior diet drink. This confused consumers into thinking Crystal Pepsi was also an \ninferior diet drink. Both drinks died within 6 months.\nhttps://en.wikipedia.org/wiki/Tab_Clear#Post-discontinuation')

  },

  function () {

    console.log('ATOW Meteor subscriptions are blocking (server-side). This means that if you subscribe to two \npublications at the same time, the server will wait for the first one to be entierly published before \npublishing the next one,')

  },

  function () {

    console.log('After Tupac was cremated, his ashes were mixed with marijuana and smoked by members of his hip-hop group, Outlawz.')

  }
]

ramble()