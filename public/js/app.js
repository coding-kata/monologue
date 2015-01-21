function Statuses() {

}

Statuses.prototype.fetchList = function (options) {
    $.ajax({
        url: '/statuses',
        dataType: 'json',
        success: options.success
    });
};
Statuses.prototype.add = function (options) {
    $.ajax({
        url: '/statuses',
        type: 'POST',
        dataType: 'json',
        data: {text: options.text},
        success: options.success
    });
};

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

jQuery(function ($) {
    var statuses = new Statuses();

    new NewStatusView({statuses: statuses});
    statuses.fetchList({
        success: function (data) {
            var $statuses = $('#statuses');
            for (var i = 0; data.length > i; i++) {
                $statuses.append('<li>' + data[i].text + '</li>');
            }
        }
    });
});