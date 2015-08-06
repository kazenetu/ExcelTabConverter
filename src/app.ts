class ConvetVBComment
{
    before: HTMLTextAreaElement;
    after: HTMLTextAreaElement;

    constructor(before: HTMLElement, after: HTMLElement) {
        this.before = <HTMLTextAreaElement>before;
        this.after = <HTMLTextAreaElement>after;
    }

    public Convert():void
    {
        var src: string[] = this.before.value.split("\n");

        var desc: Array<string> = new Array<string>();
        for (var lineIndex = 0; lineIndex < src.length; lineIndex++) {
            var temp: string = src[lineIndex];
            while (temp.lastIndexOf("\t") > 0) {
                temp = temp.replace("\t", "");
            }
            if (temp.length > 0) {
                desc.push("'" + temp + "\n");
            }
        }

        this.after.value = desc.join("");
    }

    public ReomveEmptyRow():void
    {
        var src: string[] = this.before.value.split("\n");

        var desc: Array<string> = new Array<string>();
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
    }

}

window.onload = () => {
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