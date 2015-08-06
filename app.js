var ConvetVBComment = (function () {
    function ConvetVBComment(before, after) {
        this.before = before;
        this.after = after;
    }
    ConvetVBComment.prototype.Convert = function () {
        var src = this.before.value.split("\n");
        var desc = new Array();
        for (var lineIndex = 0; lineIndex < src.length; lineIndex++) {
            var temp = src[lineIndex];
            while (temp.lastIndexOf("\t") > 0) {
                temp = temp.replace("\t", "");
            }
            if (temp.length > 0) {
                desc.push("'" + temp + "\n");
            }
        }
        this.after.value = desc.join("");
    };
    ConvetVBComment.prototype.ReomveEmptyRow = function () {
        var src = this.before.value.split("\n");
        var desc = new Array();
        for (var lineIndex = 0; lineIndex < src.length; lineIndex++) {
            var temp = src[lineIndex];
            while (temp.lastIndexOf("\t") > 0) {
                temp = temp.replace("\t", "");
            }
            if (temp.length > 0) {
                desc.push(temp + "\n");
            }
        }
        this.after.value = desc.join("");
    };
    return ConvetVBComment;
})();
window.onload = function () {
    var button = document.getElementById('convert');
    var converter = new ConvetVBComment(document.getElementById('before'), document.getElementById('after'));
    button.onclick = function () {
        converter.Convert();
    };
    button = document.getElementById('reomveEmptyRow');
    button.onclick = function () {
        converter.ReomveEmptyRow();
    };
};
