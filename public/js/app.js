var StatusList = require("./Models/StatusCollection");
var NewStatusView = require("./Views/NewStatusView");
var StatusesView = require("./Views/StatusesView");
jQuery(function ($) {
    var statuses = new StatusList();
    new NewStatusView({
        el: $('#js-new-status'),
        collection: statuses
    });
    new StatusesView({
        el: $('#statuses'),
        collection: statuses
    });
    statuses.fetchList({
        success: function (data) {
            var $statuses = $('#statuses');
            for (var i = 0; data.length > i; i++) {
                $statuses.append('<li>' + data[i].text + '</li>');
            }
        }
    });
});