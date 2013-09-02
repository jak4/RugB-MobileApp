(function() {
  this.MobileApp = (function() {
    function MobileApp() {
      return true;
    }

    MobileApp.prototype.onDeviceReady = function(ext_options) {
      var _this = this;
      if (ext_options == null) {
        ext_options = {};
      }
      alert('The time is now: ' + Date().toLocaleString());
      $('#server-time').click(function(e) {
        return _this.getTimeFromServer();
      });
      return true;
    };

    MobileApp.prototype.getTimeFromServer = function() {
      var _this = this;
      return $.ajax({
        type: 'GET',
        url: 'http://localhost:4568/index',
        success: (function(response) {
          return _this.successCallback(response);
        })
      }, 'json').fail(function(jqXHR, textStatus, errorThrown) {
        return _this.failCallback(jqXHR, textStatus, errorThrown);
      });
    };

    MobileApp.prototype.successCallback = function(response) {
      var time;
      time = response.time;
      return alert('The server time is: ' + time);
    };

    MobileApp.prototype.failCallback = function(jqXHR, textStatus, errorThrown) {
      return alert(textStatus);
    };

    return MobileApp;

  })();

}).call(this);
