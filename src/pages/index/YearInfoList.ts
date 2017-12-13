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
            yearInfo.wa = this.getWareki(i,Number(startDate.getFullYear()));
            
            //支(1864年：甲子年)
            yearInfo.shi = this.getShi12(i);

            //干(1864年：甲子年)
            yearInfo.kan = this.getKan10(i);

            //年齢（満年齢）
            yearInfo.age = this.getAge(i);
            
            yearInfoList.push(yearInfo);
        }
        return yearInfoList;
    }

    protected getWareki(arg: number, startYear: number):string{
        let waYear: string = (arg - startYear + 1).toString();
        if(arg - startYear == 0){ waYear = "元";}
        return this.data.name + waYear + "年";
    }

    /**
     * 干情報を取得する
     * @param arg 西暦年
     */
    protected getKan10(arg: number):model_Kanji{
        let index:number = (arg-1864)%10 + 1;
        return data_kan10.find(x => x.id == index.toString());
    }

    /**
     * 支情報を取得する
     * @param arg 西暦年
     */
    protected getShi12(arg: number):model_Kanji{
        let index:number = (arg-1864)%12 + 1;
        return data_shi12.find(x => x.id == index.toString());
    }

    /**
     * 年齢情報を取得する
     * @param arg 西暦年
     */
    protected getAge(arg: number):string{
        let fullAge:number = data_YEAR - arg;
        if(fullAge < 0){
            return "-"
        }else{
            return "満 " + fullAge + " 歳";
        }
    }

}

