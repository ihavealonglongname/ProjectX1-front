export class common_util {
    
    public number_convert(arg:number): string{
        let rtn:string="";
        let strArg:string = arg.toString();
        for(var i=0; i<strArg.length;i++){
            rtn += this.number_convert_single(strArg.charAt(i));
        }
        return rtn;
    }

    private number_convert_single(arg: string): string {
        let rtn: string = arg;
        switch (arg) {
            case "0":
                rtn = "十";
                break;
            case "1":
                rtn = "一";
                break;
            case "2":
                rtn = "二";
                break;
            case "3":
                rtn = "三";
                break;
            case "4":
                rtn = "四";
                break;
            case "5":
                rtn = "五";
                break;
            case "6":
                rtn = "六";
                break;
            case "7":
                rtn = "七";
                break;
            case "8":
                rtn = "八";
                break;
            case "9":
                rtn = "九";
                break;
        }
        return rtn;
    }
}