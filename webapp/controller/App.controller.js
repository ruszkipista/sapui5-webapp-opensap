sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"opensap/myapp/model/formatter"
], function (Controller, MessageToast, Filter, FilterOperator, formatter) {
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

        onFilterProducts: function(oEvent){
			// build filter array
			const aFilter = [], 
                sQuery = oEvent.getParameter("query"),
				// retrieve list control
				oList = this.getView().byId("productsList"),
				// get binding for aggregation 'items'
				oBinding = oList.getBinding("items");

			if (sQuery) {
                // case-sensitive!
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}
			// apply filter. 
			// passing an empty filter array [] removes the filter making all entries visible again
			oBinding.filter(aFilter);
        },

		onItemSelected: function(oEvent) {
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("productDetailsPanel");
	
			oProductDetailPanel.bindElement({ path: sPath });
			oProductDetailPanel.setVisible(true); 
		},

        onExit: function(){}
    });
})