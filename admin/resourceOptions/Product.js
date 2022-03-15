const AdminJS = require("adminjs");
const ProductModel = require("../../models/Product");
//const features = require("../features");

/** @type {AdminJS.ResourceOptions} */
const options = {
  //listProperties: ["uploadedFile", "name", "post", "text"],
  //editProperties: ["uploadedFile", "name", "post", "text"],
  navigation: {
    icon: "UserCertification",
  },
  properties: {}
};

module.exports = {
  resource: ProductModel,
  options,
  //features,
};

