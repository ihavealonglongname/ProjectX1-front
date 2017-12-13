/// <reference path="./../../../node_modules/@types/jquery/index.d.ts" />

import { CommonBase } from "./../base/CommonBase";

//元号情報
import { data_Gengo } from './../data/data_Gengo';
import { model_Gengo } from './../data/model_Gengo';

//今年
import { data_YEAR } from './../data/data_Year';

//各年の情報
import { YearInfoList } from './YearInfoList';
import { YearInfo } from './YearInfo';

class Entry extends CommonBase {
    //1:西歴
    //2:新元号
    //3:平成
    //4:昭和
    //5:大正
    //6:明治
    private targetIndex: string;

    public Init() {
        super.Init();

        //当ページ該当するメニューを取得する。
        this.targetIndex = this.getUrlParam("ti");
        if (this.targetIndex == null) {
            this.targetIndex = "3"
        }

        this.execute();
    }

    //画面内容を生成する。
    execute() {
        //該当年号を表記する
        super.f_active(this.targetIndex);

        //該当年号の情報を取得する
        let gengo_info: model_Gengo = data_Gengo.find(n => n.id == this.targetIndex)

        //該当年号のタイトル情報を表示する
        let endDateStr: string = gengo_info.end;
        if (gengo_info.id == "2") { endDateStr = ""; }
        let gengoRange: string = "（" + gengo_info.start + "～" + endDateStr + "）";
        if (gengo_info.id == "1") { gengoRange = "" }
        super.ELEContent("right-name", gengo_info.name + gengoRange);

        //該当年号のコメントを表示する
        super.ELEContent("right-desc", gengo_info.desc);
        console.log((1878 - 1863) % 12);
        if (this.targetIndex != "1") {
            //西暦以外の場合、該当年号の情報を表示する
            let yearInfoList: YearInfoList = new YearInfoList(gengo_info);
            let yearInfoListData: Array<YearInfo> = yearInfoList.getData();
            for (let yearInfo of yearInfoListData) {
                $("tbody").append(`
            <tr>
            <td>` + yearInfo.wa + `</td>
            <td>` + yearInfo.sei + `</td>
            <td>
                <ruby>
                    ` + yearInfo.shi.name + `<rt>` + yearInfo.shi.rt + `</rt>
                </ruby>
            </td>
            <td>
                <ruby>
                ` + yearInfo.kan.name + `<rt>` + yearInfo.kan.rt + `</rt>
                ` + yearInfo.shi.name + `<rt>` + yearInfo.shi.rt + `</rt>
                </ruby>
            </td>
            <td>` + yearInfo.age + `</td>
            <td><a target="_blank" href="view.html?a=` + yearInfo.sei + `">年齢早見表` + yearInfo.sei + `＞＞</a></td>
        </tr>　
            `)
            }
        } else {
            //西暦の場合

            //「和暦」と「和暦」を置き換える
            super.ELEContent("right-wareki", "西暦");
            super.ELEContent("right-seireki", "和暦");
        }

    }
}

let target = new Entry();
target.Init();