webApp.filter('timestampFilter', function () {
    return function (timestamp) {
        var d = new Date(timestamp * 1000);
        var month = d.getMonth() + 1;

        if (month < 10) {
            month = "0" + month;
        }

        var day = d.getDate();

        if (day < 10) {
            day = "0" + day;
        }

        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();

        if (h < 10) {
            h = "0" + h;
        }

        if (m < 10) {
            m = "0" + m;
        }

        if (s < 10) {
            s = "0" + s;
        }

        return d.getFullYear() + "/" + month + "/" + day + " " + h + ":" + m + ":" + s;
    }
});