App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    unless data.message.blank?
      $('#messages-table').append data.message
      scroll_bottom()


$(document).on 'turbolinks:load', ->
  if $('#new_message').length > 0
      submit_message()
      scroll_bottom()
      clear_input()

submit_message = () ->
  $('#message_content').on 'keydown', (event) ->
    if event.keyCode is 13 && !event.shiftKey
      $('input').click()
      event.preventDefault()

scroll_bottom = () ->
  $('#messages').scrollTop($('#messages')[0].scrollHeight)

clear_input = () ->  
    $('#new_message input').on 'click', (e) ->
      e.preventDefault();
      $('#new_message').submit()
      $('#message_content').val("")
      return