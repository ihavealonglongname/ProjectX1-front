import { LeftArea } from "./Left_Area";

export class CommonBase {

    public left_area: LeftArea;
    constructor() {
        this.left_area = new LeftArea();
    }

    public Init(){
        this.left_area.Init();
    }

    getUrlParam(name: string) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        let r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return r[2]; return null; //返回参数值
    }

    ELEContent(id: string,content: string){
        $("#" + id).html(content);
    }
}