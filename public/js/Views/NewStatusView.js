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
    $('#js-new-status').on('submit', function (event) {
        event.preventDefault();
        that.addStatus(event);
    });
}
NewStatusView.prototype.addStatus = function (event) {
    var that = this;
    this.statuses.add({
        text: $(event.target).find("textarea").val(),
        success: function (data) {
            emitter.trigger(action.STATUS_ADD, data.text);
        }
    });
};
NewStatusView.prototype.clearInput = function clearInput() {
    $('#js-new-status').val("");
};

module.exports = NewStatusView;