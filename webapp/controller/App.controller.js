sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "opensap/myapp/model/formatter"  // name/space / folder / file name
], function(Controller, MessageToast, formatter){
    "use strict";

    return Controller.extend("opensap.myapp.controller.App", {
        onInit: function(){},

        formatter: formatter,

        onShowHello : function() {
			// read msg from i18n model
			const oBundle = this.getView().getModel("i18n").getResourceBundle();
			const sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
            // substitute placeholder in message with parameter
			const sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
        },

        onExit: function(){}
    });
})