require('../less/styles.less')

const $ = require('jquery')
const io = require('socket.io-client')

const Chat = require('./game/Chat')
const Game = require('./game/Game')

$(document).ready(() => {
  const socket = io()
  const game = Game.create(socket, 'canvas', 'leaderboard')
  Chat.create(socket, 'chat-display', 'chat-input')

  $('#name-input').focus()

  /**
   * Function to send the player name to the server.
   * @return {false}
   */
  const sendName = () => {
    const name = $('#name-input').val()
    if (! /^[a-zA-Z0-9- ]*$/.test(name) == true) {
      window.alert('Your name cannot use special characters, only a-z, A-Z or 0-9');
    }
else    if  (name && name.length < 15) {
      $('#name-prompt-container').empty()
      $('#name-prompt-container').append(
          $('<span>').addClass('fa fa-2x fa-spinner fa-pulse'))
      socket.emit('new-player', {name}, () => {
        $('#name-prompt-overlay').remove();
        $('#canvas').focus();
        game.run();
      })
    } else {
      window.alert('Username must be between 1 and 15 characters in length.')
    }
    return falsenode
  }
  $('#name-form').submit(sendName)
  $('#name-submit').click(sendName)
})
