import { model_Kanji } from './../data/model_kanji';

export class YearInfo {
    //和暦
    wa: string;
    //西暦
    sei: string;
    //支
    shi: model_Kanji;
    //干
    kan: model_Kanji;
    //年齢（満年齢）
    age: string;
  }