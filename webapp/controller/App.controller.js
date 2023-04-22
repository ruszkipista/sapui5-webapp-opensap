sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast){
    "use strict";

    return Controller.extend("opensap.myapp.controller.App", {
        onInit: function(){},

        onShowHello : function() {
            MessageToast.show("Hello openSAP!");
        },

        onExit: function(){}
    });
})