// LICENSE : MIT
"use strict";
var Status = require("./Status");
var StatusList = Backbone.Collection.extend({
    model: Status
});
StatusList.prototype.fetchList = function (options) {
    $.ajax({
        url: '/statuses',
        dataType: 'json',
        success: options.success
    });
};
module.exports = StatusList;