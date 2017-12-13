import { model_Gengo } from './../data/model_Gengo';
import { YearInfo } from './YearInfo';

//今年
import { data_YEAR } from './../data/data_Year';

//干支情報
import { model_Kanji } from './../data/model_kanji';
import { data_shi12 } from './../data/data_shi12';
import { data_kan10 } from './../data/data_kan10';


import { common_util } from './../util/common_util';

export class YearInfoList{
    private data: model_Gengo;
    private util: common_util;

    constructor(data: model_Gengo){
        this.data = data;
        this.util = new common_util();
    }

    public getData(): Array<YearInfo>{
        let yearInfoList: Array<YearInfo> = new Array<YearInfo>();

        let startDate: Date = new Date(this.data.start);
        let endDate: Date = new Date(this.data.end);
        for (var i = Number(endDate.getFullYear()); i >= Number(startDate.getFullYear()); i--) {
            let yearInfo: YearInfo = new YearInfo();
            //西暦
            yearInfo.sei = i.toString();

            //和暦
            let waYear: string = (i - Number(startDate.getFullYear()) + 1).toString();
            if(i - Number(startDate.getFullYear()) == 0){ waYear = "元";}
            yearInfo.wa = this.data.name + waYear + "年";
            
            //支(1864年：甲子年)
            let shi12Index:number = (i-1864)%12 + 1;
            let shi12Data:model_Kanji=  data_shi12.find(x => x.id == shi12Index.toString());
            yearInfo.shi = shi12Data;

            //干(1864年：甲子年)
            let kan10Index:number = (i-1864)%10 + 1;
            let kan10Data:model_Kanji=  data_kan10.find(x => x.id == kan10Index.toString());
            yearInfo.kan = kan10Data;

            //年齢（満年齢）
            let fullAge:number = data_YEAR - i;
            if(fullAge < 0){
                yearInfo.age = ""
            }else{
                yearInfo.age = "満 " + fullAge + " 歳";
            }
            

            yearInfoList.push(yearInfo);
        }
        return yearInfoList;
    }
}

