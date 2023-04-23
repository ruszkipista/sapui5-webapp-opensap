sap.ui.define([], function() {
	"use strict";

	return {
		delivery: function(sUnitOfMeasure, iWeight) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			if(sUnitOfMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				return oResourceBundle.getText("formatterMailDelivery");
			} else if (iWeight < 5) {
				return oResourceBundle.getText("formatterParcelDelivery");
			} else {
				return oResourceBundle.getText("formatterCarrierDelivery");
			}
		}
	};
});