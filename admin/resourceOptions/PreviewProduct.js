const AdminJS = require("adminjs");
const PreviewProductModel = require("../../models/PreviewProduct");
//const features = require("../features");

/** @type {AdminJS.ResourceOptions} */
const options = {
  //listProperties: ["uploadedFile", "name", "post", "text"],
  //editProperties: ["uploadedFile", "name", "post", "text"],
  navigation: {
    icon: "UserCertification",
  },
  properties: {},
};

module.exports = {
  resource: PreviewProductModel,
  options,
  //features,
};
