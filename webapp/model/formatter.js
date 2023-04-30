sap.ui.define([
	"sap/base/security/encodeURL"
	], function(encodeURL) {
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
		},

		/**
		* Formats an address for an embedded google map
		* @public
		* @param {string} sHouseNumber the house number
		* @param {string} sStreet the street
		* @param {string} sZIP the postal code
		* @param {string} sCity the city
		* @param {string} sCountry the country
		* @returns {string} sValue a google maps URL that can be bound to an image
		*/
		formatMapUrl: function(sHouseNumber, sStreet, sZIP, sCity, sCountry) {
			return '<iframe src="https://maps.google.com/maps?output=embed&amp;q='
				+ encodeURL(sHouseNumber + ", " + sStreet + ", " + sZIP +  " " + sCity + ", " + sCountry)
				+ '" width="100%" height="600" frameborder="0"></iframe>';
		}
	};
});