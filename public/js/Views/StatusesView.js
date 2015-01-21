// LICENSE : MIT
"use strict";
/**
 * @type {Backbone.Events}
 */
var emitter = require("../Dispatcher/status-dispatcher");
var action = require("../Constants/status-constant");
var StatuesView = Backbone.View.extend({
    initialize: function (options) {
        this.el = options.el;
        emitter.on(action.STATUS_ADD, this.appendStatus, this);
    },
    appendStatus: function (text) {
        this.el.append('<li>' + text + '</lib>');
    }
});

module.exports = StatuesView;