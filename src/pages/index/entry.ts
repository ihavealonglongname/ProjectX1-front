/// <reference path="./../../../node_modules/@types/jquery/index.d.ts" />

import { CommonBase } from "./../base/CommonBase";

class Entry extends CommonBase {
    //1:西歴
    //2:新元号
    //3:平成
    //4:昭和
    //5:大正
    //6:明治
    private targetIndex: string;

    public Init(){
        super.Init();

        //当ページ該当するメニューを取得する。
        this.targetIndex = this.getUrlParam("ti");
        if(this.targetIndex == null){
            this.targetIndex = "3"
        }
        
        this.execute();
    }

    //画面内容を生成する。
    execute() {
        super.ELEContent("right-title","昭和");
    }
}

let target = new Entry();
target.Init();