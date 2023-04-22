sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast){
    "use strict";

    return Controller.extend("opensap.myapp.controller.App", {
        onInit: function(){},

        onShowHello : function() {
			// read msg from i18n model
			const oBundle = this.getView().getModel("i18n").getResourceBundle();
			const sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			const sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
        },

        onExit: function(){}
    });
})