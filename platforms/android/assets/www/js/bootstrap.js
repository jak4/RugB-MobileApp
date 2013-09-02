/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
window.HAML = {};

var app = {

    // Application Constructor
    initialize: function() {
        mobileapp       = new MobileApp();
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
//        $('#content #main').html(window.HAML['index']());
//        showDeviceProperties();
        mobileapp.onDeviceReady();
    },

    showDeviceProperties: function() {
        var element = document.getElementById('deviceProperties');

        element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
            'Device Cordova: '  + device.cordova + '<br />' +
            'Device Platform: ' + device.platform + '<br />' +
            'Device UUID: '     + device.uuid     + '<br />' +
            'Device Model: '    + device.model     + '<br />' +
            'Device Version: '  + device.version  + '<br />';
    }
};
