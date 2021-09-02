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

/*
* Author: Steven McNally (Y1977934)
* TM470 Project
*/

// declaring global controller variable
var controller;

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    // Create the BellaghyGAC object for use by the HTML view
    controller = new BellaghyGAC();
}

//Javascript 'class' containing the model, providing controller 'methods' for the HTML view
function BellaghyGAC() {
    console.log("Creating controller/model");
    
    
    
    // PRIVATE VARIABLES AND FUNCTIONS - available only to code inside the controller/model
    // Note these are declared as function functionName() {...}
    
    // private variables
    
    
    
    
    
    
    
    
    
    
    // PUBLIC FUNCTIONS - available to the view
    // Note these are declared as this.functionName = function () {...}
    
    // Controller function for 'Football' button
    this.football = function () {
        console.log("Football button pressed");
        location.replace("football.html");
    }
    
    // Controller function for 'Camogie' button
    this.camogie = function () {
        console.log("Camogie button pressed");
        getPrevWidget();
    }
    
    // Controller function for 'Notifications' button
    this.notifications = function () {
        console.log("Notifications button pressed");
        getPrevWidget();
    }
    
}
