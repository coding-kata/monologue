var Statuses = require("./Models/Statuses");
var NewStatusView = require("./Views/NewStatusView");
var StatusesView = require("./Views/StatusesView");
jQuery(function ($) {
    var statuses = new Statuses();
    new NewStatusView({statuses: statuses});
    new StatusesView();
    statuses.fetchList({
        success: function (data) {
            var $statuses = $('#statuses');
            for (var i = 0; data.length > i; i++) {
                $statuses.append('<li>' + data[i].text + '</li>');
            }
        }
    });
});