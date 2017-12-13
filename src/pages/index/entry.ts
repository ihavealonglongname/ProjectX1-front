/// <reference path="./../../../node_modules/@types/jquery/index.d.ts" />

import { CommonBase } from "./../base/CommonBase";

//元号情報
import { data_Gengo } from './../data/data_Gengo';
import { model_Gengo } from './../data/model_Gengo';

//今年
import { data_YEAR } from './../data/data_Year';

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
        super.f_active(this.targetIndex);

        let gengo_info: model_Gengo = data_Gengo.find(n => n.id == this.targetIndex)

        super.ELEContent("right-name",gengo_info.name);
        super.ELEContent("right-desc",gengo_info.desc);
        let aa: string = "123";

        $("tbody").append(`
        
        <tr>
        <td>平成`+ aa +`年</td>
        <td>2018</td>
        <td>
            <ruby>
                戌<rt>いぬ</rt>
            </ruby>
        </td>
        <td>
            <ruby>
                戊<rt>つちのえ</rt>
                戌<rt>いぬ</rt>
            </ruby>
        </td>
        <td>一歳(0)</td>
        <td></td>
    </tr>
        `)

    }
}

let target = new Entry();
target.Init();