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
    var statuses = options.statuses;
    $('#js-new-status').on('submit', function (event) {
        event.preventDefault();
        statuses.add({
            text: $(event.target).find("textarea").val(),
            success: function (data) {
                $('#statuses').append('<li>' + data.text + '</li>');
            }
        });
    });
}

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