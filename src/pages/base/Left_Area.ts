export class LeftArea{
    constructor(){

    }

    public Init() {
        $("#left-area-1").on('click',this.f_n);
        $("#left-area-2").on('click',this.f_k);
        $("#left-area-3").on('click',this.f_h);
        $("#left-area-4").on('click',this.f_s);
        $("#left-area-5").on('click',this.f_t);
        $("#left-area-6").on('click',this.f_m);
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

    public f_active(target:string){
        $("#left-area-1").removeClass("active");
        $("#left-area-2").removeClass("active");
        $("#left-area-3").removeClass("active");
        $("#left-area-4").removeClass("active");
        $("#left-area-5").removeClass("active");
        $("#left-area-6").removeClass("active");
        $("#left-area-"+target).addClass("active");
    }
}