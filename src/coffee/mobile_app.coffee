class @MobileApp
  constructor: () ->
    return true

  onDeviceReady: (ext_options = {}) ->
    alert('The time is now: ' + Date().toLocaleString())

    $('#server-time').click((e) => @getTimeFromServer())

    return true

  getTimeFromServer: () ->
    $.ajax(
      type: 'GET',
      url: 'http://localhost:4568/index',
      success: ((response) => @successCallback(response)),
      'json'
    ).fail((jqXHR, textStatus, errorThrown) => @failCallback(jqXHR, textStatus, errorThrown))

  successCallback: (response) ->
    time = response.time
    alert('The server time is: ' + time)

  failCallback: (jqXHR, textStatus, errorThrown) ->
    alert(textStatus)

