
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-facebook-connect.FacebookConnectPlugin",
          "file": "plugins/cordova-plugin-facebook-connect/www/facebook-native.js",
          "pluginId": "cordova-plugin-facebook-connect",
        "clobbers": [
          "facebookConnectPlugin"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-facebook-connect": "2.3.0"
    };
    // BOTTOM OF METADATA
    });
    