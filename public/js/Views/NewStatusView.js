// LICENSE : MIT
"use strict";
/**
 * @type {Backbone.Events}
 */
var emitter = require("../Dispatcher/status-dispatcher");
var action = require("../Constants/status-constant");
var NewStatusView = Backbone.View.extend({
    initialize: function (options) {
        var that = this;
        this.statuses = options.statuses;
        emitter.on(action.STATUS_ADD, this.clearInput, this);
        this.el = options.el;
        this.el.on('submit', function (event) {
            event.preventDefault();
            that.addStatus(event);
        });
    },
    addStatus: function () {
        var that = this;
        this.statuses.add({
            text: that.el.find("textarea").val(),
            success: function (data) {
                emitter.trigger(action.STATUS_ADD, data.text);
            }
        });
    },
    clearInput: function clearInput() {
        this.el.val("");
    }
});

module.exports = NewStatusView;