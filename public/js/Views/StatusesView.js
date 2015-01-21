// LICENSE : MIT
"use strict";
/**
 * @type {Backbone.Events}
 */
var emitter = require("../Dispatcher/status-dispatcher");
var action = require("../Constants/status-constant");
var StatuesView = Backbone.View.extend({
    initialize: function (options) {
        this.collection.on(action.STATUS_ADD, this.appendStatus, this);
    },
    appendStatus: function (status) {
        $(this.el).append('<li>' + status.escape("text") + '</lib>');
    }
});

module.exports = StatuesView;