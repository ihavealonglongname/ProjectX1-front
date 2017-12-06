var entry = /** @class */ (function () {
    function entry() {
        this.data = "zaq1xsw2";
        this.data_field = "data";
    }
    entry.prototype.init = function () {
        console.log($(this.data).text());
        var content = $("#test").html().replace("{{data}}", "abcdefg");
        $("#test").html(content);
    };
    entry.prototype.identity = function (arg) {
        return arg;
    };
    return entry;
}());
var page = new entry();
page.init();
