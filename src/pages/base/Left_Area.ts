export class LeftArea{
    constructor(){

    }

    public Init() {
        $("#left-area-n").on('click',this.f_n);
        $("#left-area-k").on('click',this.f_k);
        $("#left-area-h").on('click',this.f_h);
        $("#left-area-s").on('click',this.f_s);
        $("#left-area-t").on('click',this.f_t);
        $("#left-area-m").on('click',this.f_m);
    }

    //西歴
    private f_n(){
        window.location.href = "index.html?ti=1";        
    }

    //新元号
    private f_k(){
        window.location.href = "index.html?ti=2";
    }

    //平成
    private f_h(){
        window.location.href = "index.html";
    }

    //昭和
    private f_s(){
        window.location.href = "index.html?ti=4";
    }

    //大正
    private f_t(){
        window.location.href = "index.html?ti=5";
    }

    //明治
    private f_m(){
        window.location.href = "index.html?ti=6";
    }
}