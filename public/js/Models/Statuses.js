// LICENSE : MIT
"use strict";
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

module.exports = Statuses;