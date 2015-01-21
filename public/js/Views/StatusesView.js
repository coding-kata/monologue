// LICENSE : MIT
"use strict";
/**
 * @type {Backbone.Events}
 */
var emitter = require("../Dispatcher/status-dispatcher");
var action = require("../Constants/status-constant");
function StatuesView() {
    emitter.on(action.STATUS_ADD, this.appendStatus, this);
}
StatuesView.prototype.appendStatus = function (text) {
    $("#statuses").append('<li>' + text + '</lib>');
};

module.exports = StatuesView;