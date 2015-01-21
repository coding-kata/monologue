// LICENSE : MIT
"use strict";
/**
 * @type {Backbone.Events}
 */
var emitter = require("../Dispatcher/status-dispatcher");
var action = require("../Constants/status-constant");
function NewStatusView(options) {
    var that = this;
    this.statuses = options.statuses;
    emitter.on(action.STATUS_ADD, this.clearInput, this);
    this.el = options.el;
    this.el.on('submit', function (event) {
        event.preventDefault();
        that.addStatus(event);
    });
}
NewStatusView.prototype.addStatus = function (event) {
    var that = this;
    this.statuses.add({
        text: that.el.find("textarea").val(),
        success: function (data) {
            emitter.trigger(action.STATUS_ADD, data.text);
        }
    });
};
NewStatusView.prototype.clearInput = function clearInput() {
    this.el.val("");
};

module.exports = NewStatusView;