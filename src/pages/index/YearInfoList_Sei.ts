
import { YearInfoList} from "./YearInfoList";
import { data_Gengo } from "./../data/data_Gengo";
import { model_Gengo } from './../data/model_Gengo';

export class YearInfoList_Sei extends YearInfoList{

    protected getWareki(arg:number, startYear:number):string{
        let rtn: string = "";
        for(let gengoInfo of data_Gengo){
            if(gengoInfo.id=="1"){continue;}

            let startYear:number = Number(new Date(gengoInfo.start).getFullYear());
            let endYear:number = Number(new Date(gengoInfo.end).getFullYear());
            if(startYear <= arg && arg <= endYear){
                let waYear: string = (arg - startYear + 1).toString();
                if(arg - startYear == 0){ waYear = "元";}

                if(rtn != ""){rtn += "/"}
                rtn += gengoInfo.name + waYear + "年";
            }
        }
        return rtn;
    }
}