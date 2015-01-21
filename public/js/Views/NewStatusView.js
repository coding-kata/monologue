// LICENSE : MIT
"use strict";
function NewStatusView(options) {
    var that = this;
    this.statuses = options.statuses;
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
            that.appendStatus(data.text);
            that.clearInput();
        }
    });
};
NewStatusView.prototype.appendStatus = function appendStatus(text) {
    $('#statuses').append('<li>' + text + '</li>');
};
NewStatusView.prototype.clearInput = function clearInput() {
    $('#js-new-status').val("");
};

module.exports = NewStatusView;