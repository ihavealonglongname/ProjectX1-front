import { model_Gengo } from './model_Gengo';
import { data_END_YEAR } from './data_Year';

export const data_Gengo: model_Gengo[] = [
    {
        id: "1", name: '西歴', start: "1868/01/01", end: data_END_YEAR + "/12/31",
        desc: `
        西暦（せいれき）とは、キリスト教でキリスト（救世主）と見なされるイエス・キリストが生まれたとされる年の翌年を元年（紀元）とした紀年法である。<br/>
        ラテン文字表記はヨーロッパ各国で異なるが、日本語や英語圏では、ラテン語の「A.D.」又は「AD」が使われる。A.D.またADとは「アンノドミニ (Anno Domini)」の略であり、「主（イエス・キリスト）の年に」という意味。<br/>
        西暦紀元、キリスト紀元ともいう。<br/>
        西ヨーロッパのキリスト教（カトリック教会、および後のプロテスタント）地域から徐々に普及し、西欧諸国が世界各地で進めた植民活動などによって伝わった結果、現在において世界で最も広く使われている紀年法となっている。
        `
    },
    {
        id: "2", name: '新元号', start: "2019/05/01", end: data_END_YEAR + "/12/31",
        desc: `
        天皇陛下が退位される日を２０１９年４月３０日とする政令を決定した。<br/>
        皇太子さまが翌５月１日に新天皇に即位され、新元号となる。<br/>
        天皇の退位は江戸時代の１８１７年の光格天皇以来、約２００年ぶりで、現行憲法下では初めて。        
        `
    },
    {
        id: "3", name: '平成', start: "1989/01/08", end: "2019/04/30",
        desc: `
        平成（へいせい）は日本の元号の一つ。<br/>
        今上天皇在位中の1989年（平成元年）1月8日から現在に至る。<br/>
        2019年（平成31年）4月30日に今上天皇退位により終了する予定であり、予定通り終了した場合、30年113日間（＝11,070日間）にわたることとなる。<br/>
        2001年（平成13年）の始まりには西暦における20世紀から21世紀への世紀の転換もあった。<br/>
        日本の元号では昭和（64年）・明治（45年）・応永（35年）に次いで4番目の長さである（5番目は延暦の25年）。
        `
    },
    {
        id: "4", name: '昭和', start: "1926/12/25", end: "1989/01/07",
        desc: `
        昭和（しょうわ）は日本の元号の一つ。大正の後、平成の前。<br/>
        昭和天皇の在位期間[1]である1926年（昭和元年）12月25日から1989年（昭和64年）1月7日まで。20世紀の大半を占める。<br/>
        昭和は、日本の歴代元号の中で最も長く続いた元号であり、元年と64年は使用期間が共に7日間であるため実際の時間としては62年と14日となる。<br/>
        なお、外国の元号を含めても最も長く続いた元号であり、歴史上60年以上続いた元号は日本の昭和（64年）、清の康熙（61年）および乾隆（60年）しかない。<br/>
        第二次世界大戦が終結した1945年（昭和20年）を境にして近代と現代に区切ることがある。
        `
    },
    {
        id: "5", name: '大正', start: "1912/07/30", end: "1926/12/24",
        desc: `大正（たいしょう）は日本の元号の一つ。明治の後、昭和の前。<br/>
        大正天皇の在位期間である1912年（明治45年／大正元年）7月30日から1926年（大正15年／昭和元年）12月25日までの期間。`
    },
    {
        id: "6", name: '明治', start: "1868/01/25", end: "1912/07/29",
        desc: `明治（めいじ）は日本の元号の一つ。慶応の後、大正の前。<br/>
    新暦1868年1月25日（旧暦慶応4年1月1日／明治元年1月1日）から1912年（明治45年）7月30日までの期間を指す。<br/>
    日本での一世一元の制による最初の元号。明治天皇在位期間とほぼ一致する。<br/>
    ただし、実際に改元の詔書が出されたのは新暦1868年10月23日（旧暦慶応4年9月8日）で慶応4年1月1日に遡って明治元年1月1日とすると定めた。<br/>
    これが、明治時代である。
    `
    }
];