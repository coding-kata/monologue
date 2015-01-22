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
        this.collection.on(action.STATUS_ADD, this.clearInput, this);
        $(this.el).on('submit', function (event) {
            event.preventDefault();
            that.addStatus(event);
        });
    },
    addStatus: function (event) {
        this.collection.create({
            text: $(this.el).find("textarea").val()
        });
    },
    clearInput: function clearInput() {
        $(this.el).val("");
    }
});

module.exports = NewStatusView;