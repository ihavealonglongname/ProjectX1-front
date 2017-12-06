class entry{
    data:string = "zaq1xsw2";
    data_field:string = "data";

    init(){
        
        console.log($(this.data).text());
        let content: string = $("#test").html().replace("{{data}}","abcdefg");
        $("#test").html(content);
    }

    identity<T>(arg: T): T {
        return arg;
    }
}

let page = new entry();
page.init()