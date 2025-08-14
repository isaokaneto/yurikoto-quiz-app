// クイズデータをPDFから抽出してここに配置
const quizData = [
    {
        "id": 1,
        "question": "ユリの花弁の奥で作られる蜜の存在を夜行性の昆虫に知らせるために、ユリは夜間、花弁から何を漂わせるでしょう?",
        "options": ["A. 甘い香り", "B. 鮮やかな光", "C. 熱"],
        "correct_answer": "A. 甘い香り",
        "explanation": "ユリは花弁の奥に蜜を作り、蜜のありかを蛾などの昆虫に知らせるために、夜間になると花弁から甘い香りを漂わせます。"
    },
    {
        "id": 2,
        "question": "ユリが甘い香りを漂わせることは、子孫を残すためのどのような戦略の一つとされていますか?",
        "options": ["A. 生存戦略", "B. 防御戦略", "C. 成長戦略"],
        "correct_answer": "A. 生存戦略",
        "explanation": "ユリの香りは、子孫を残すための巧みな生存戦略の一つです。"
    },
    {
        "id": 3,
        "question": "ユリの色の好みは国によって様々ですが、日本やフランスで好まれる色は主に何色でしょう?",
        "options": ["A. 原色", "B. 白や淡いピンク", "C. 黄色やオレンジ"],
        "correct_answer": "B. 白や淡いピンク",
        "explanation": "日本やフランスでは白や淡いピンクが好まれ、中国やアジア、南アメリカでは原色が好まれています。"
    },
    {
        "id": 4,
        "question": "ユリの色の好みにおいて、アメリカで切り花よりも愛される形態は何でしょう?",
        "options": ["A. ポットのユリ", "B. ドライフラワー", "C. 造花"],
        "correct_answer": "A. ポットのユリ",
        "explanation": "アメリカでは切り花よりポットのユリが愛されるなど、国により好みは千差万別です。"
    },
    {
        "id": 5,
        "question": "美しいオレンジ色のLA ユリの新品種「Kodaira」は、誰を称えて命名されましたか?",
        "options": ["A. フィギュアスケート選手", "B. スピードスケート選手 小平奈緒", "C.陸上選手"],
        "correct_answer": "B. スピードスケート選手 小平奈緒",
        "explanation": "「Kodaira」は、オランダ留学により世界のトップへ躍進したスピードスケート小平奈緒選手を称え命名されました。"
    },
    {
        "id": 6,
        "question": "LA ユリの新品種「Kodaira」を育種したのはどこの会社でしょう?",
        "options": ["A. 日本の育種会社", "B. オランダのフレッターデンハーン社", "C. フランスの園芸会社"],
        "correct_answer": "B. オランダのフレッターデンハーン社",
        "explanation": "「Kodaira」は、オランダフレッターデンハーン社が育種したLA ユリの新品種です。"
    },
    {
        "id": 7,
        "question": "ユリの育種が江戸時代には既に行われていたと考えられますが、ユリの育種は何と何の交雑により始まったとされていますか?",
        "options": ["A. カノコユリとヤマユリ", "B. エゾスカシユリと野生のスカシユリ", "C. テッポウユリとオニユリ"],
        "correct_answer": "B. エゾスカシユリと野生のスカシユリ",
        "explanation": "ユリの育種は、エゾスカシユリと野生のスカシユリの交雑により始まったとされています。"
    },
    {
        "id": 8,
        "question": "世界最初の園芸書とされ、江戸時代のユリの育種について名前が見られる書物は何でしょう?",
        "options": ["A.「画本野山草」", "B.「花壇綱目」", "C.「万葉集」"],
        "correct_answer": "B.「花壇綱目」",
        "explanation": "世界最初の園芸書とされる「花壇綱目」 (1681年)にその名前を見ることができます。"
    },
    {
        "id": 9,
        "question": "OT ハイブリッドは、オリエンタルハイブリッド(OH)と、どのような特徴を持つトランペット(T)との交配により誕生しましたか?",
        "options": ["A. OHにはない黄色、オレンジなど鮮やかな色彩とユーカリのような香りの成分を持つ", "B. 白い花と強い芳香を持つ", "C. 小さな花と短い茎を持つ"],
        "correct_answer": "A. OHにはない黄色、オレンジなど鮮やかな色彩とユーカリのような香りの成分を持つ",
        "explanation": "OT ハイブリッドは、オリエンタルハイブリッド(OH)と、OHにはない黄色、オレンジなど鮮やかな色彩とユーカリのような香りの成分を持つトランペット(T)との交配により、2000年頃に誕生しました。"
    },
    {
        "id": 10,
        "question": "OT ハイブリッドの代表的な品種は何でしょう?",
        "options": ["A. カサブランカとスターゲイザー", "B. イエローウィーンとニンフ", "C. シベリアとバンドーム"],
        "correct_answer": "B. イエローウィーンとニンフ",
        "explanation": "OT ハイブリッドの代表的な品種は、イエローウィーン、ニンフです。"
    },
    {
        "id": 11,
        "question": "ブライダルシーンなどでユリの花粉除去のタイミングが重要とされる問題を解決する具体的な方法は何でしょう?",
        "options": ["A.低温保存", "B. 花木を蒸す(ふかす)方法", "C. 化学薬品の散布"],
        "correct_answer": "B. 花木を蒸す(ふかす)方法",
        "explanation": "ユリの花粉は、温度や時間と共に開いてしまうため、ブライダルシーンなどでは、花粉除去のタイミングが重要です。その問題を解決するのが花木を蒸す(ふかす)方法です。"
    },
    {
        "id": 12,
        "question": "白ユリは「純潔」の花言葉が込められブライダルシーンで活躍しますが、特にヨーロッパ原産の白ユリで『受胎告知』に描かれている意味深い花は何でしょう?",
        "options": ["A. オリエンタルリリー", "B. マドンナリリー", "C. テッポウユリ"],
        "correct_answer": "B. マドンナリリー",
        "explanation": "白ユリは「純潔」の花言葉が込められブライダルシーンで活躍し、聖母マリアとの強い結びつきがあり、ヨーロッパ原産のマドンナリリーは『受胎告知』にも描かれている意味深い花とされています。"
    },
    {
        "id": 13,
        "question": "フラワーデザインで人気があり、正しくは暗紫色であるユリの色は何でしょう?",
        "options": ["A. 青いユリ", "B. 黒いユリ", "C. 緑のユリ"],
        "correct_answer": "B. 黒いユリ",
        "explanation": "フラワーデザインでは、黒いユリ(正しくは暗紫色)は人気があり、多くのファンがいます。"
    },
    {
        "id": 14,
        "question": "ガーデンデザインに人気で、花壇や庭などで放任栽培しても毎年花を咲かせる丈夫な品種であるユリの系統は何でしょう?",
        "options": ["A. LA 系", "B. OH 系", "C. AH 系"],
        "correct_answer": "C. AH 系",
        "explanation": "多彩な色を持つAH系はガーデンデザインにも人気で、花壇や庭などで放任栽培しても毎年花を咲かせる丈夫な品種です。"
    },
    {
        "id": 15,
        "question": "ユリの原種は北半球の温帯地域を中心に100種以上が確認されていますが、その中で日本に自生している原種の数は何種類でしょう?",
        "options": ["A. 6種類", "B. 14 種類", "C. 100種類"],
        "correct_answer": "B. 14 種類",
        "explanation": "ユリの原種は、北半球の温帯地域を中心に100種以上が確認されており、その中でもアジア圏には半数以上が分布しています。日本には14種類の原種が自生しています。"
    },
    {
        "id": 16,
        "question": "日本固有種のユリは6種ありますが、次のうち日本の固有種ではないものはどれでしょう?",
        "options": ["A. スカシユリ", "B. ササユリ", "C. トランペットリリー"],
        "correct_answer": "C. トランペットリリー",
        "explanation": "日本の固有種はウケユリ、ササユリ、スカシユリ、タモトユリ、ヒメサユリ、ヤマユリの6種です。トランペットリリーはアジアに自生するユリの総称です。"
    },
    {
        "id": 17,
        "question": "高知県はユリの生産地として全国トップクラスですが、生産量、出荷量、産出額のいずれも全国何位でしょう?",
        "options": ["A. 1位", "B. 2位", "C. 3位"],
        "correct_answer": "B. 2位",
        "explanation": "高知県は、ユリの生産量、出荷量、産出額がいずれも全国2位です。"
    },
    {
        "id": 18,
        "question": "高知県は温暖で多日照の気候条件を活かし、ユリを約何月から何月頃まで出荷していますか?",
        "options": ["A.1月から3月", "B.5月から9月", "C. 11月頃から6月頃"],
        "correct_answer": "C. 11月頃から6月頃",
        "explanation": "高知県は、温暖で多日照の気候条件を活かし、11月頃から6月頃までユリを出荷しています。"
    },
    {
        "id": 19,
        "question": "ユリの出荷量が日本一の産地は次のうちどこでしょう?",
        "options": ["A. 新潟県", "B. 高知県", "C. 埼玉県"],
        "correct_answer": "C. 埼玉県",
        "explanation": "埼玉県は、ユリの出荷量が日本一の産地です。"
    },
    {
        "id": 20,
        "question": "埼玉県北部に位置する深谷市で、昭和30~40年代ごろからユリが導入されたきっかけは何でしょう?",
        "options": ["A. 温泉熱を利用した栽培", "B. 元々桑の栽培が盛んで、桑の木の間で球根を植えたこと", "C. 大規模な花き専門農園が設立されたこと"],
        "correct_answer": "B. 元々桑の栽培が盛んで、桑の木の間で球根を植えたこと",
        "explanation": "埼玉県北部に位置する深谷市は、昭和30~40年代ごろから、チューリップ、スイセン、クロッカスなどの球根切り花とともにユリも導入されました。元々この辺りは桑の木の栽培が盛んで、桑の木の間で球根を植えていたのがきっかけです。"
    },
    {
        "id": 21,
        "question": "2003年に品種登録された白い OH ユリ 「シベリア」が世界で最も栽培されている切り花と言われる理由は次のうちどれでしょう?",
        "options": ["A. 珍しい青い花色のため", "B. 耐輸送性に優れており、丈夫なため", "C. 無香性で扱いやすいため"],
        "correct_answer": "B. 耐輸送性に優れており、丈夫なため",
        "explanation": "2003年に品種登録された白い OH ユリである「シベリア」は、耐輸送性に優れており、丈夫なため、世界で最も栽培されているユリ切り花といえます。"
    },
    {
        "id": 22,
        "question": "LAユリは、色鮮やかなアジアティック系(A)のスカシユリと、花の形状がエレガントで香り高いロンギフローラム系(L)の何を組み合わせて生まれたユリでしょう?",
        "options": ["A. ヤマユリ", "B. テッポウユリ", "C. カサブランカ"],
        "correct_answer": "B. テッポウユリ",
        "explanation": "LAユリは、色彩が豊かなアジアティック系(A)であるスカシユリと、花の形状がエレガントで香り高いロンギフローラム系(L)であるテッポウユリを組み合わせて生まれた、鮮やかな花色を持つユリです。"
    },
    {
        "id": 23,
        "question": "西洋ユリの歴史が始まったとされる、紀元前1500年ごろのクレタ島(ギリシャ)の遺跡から壁画や壺が発掘されたユリは何でしょう?",
        "options": ["A. オリエンタルリリー", "B. マドンナリリー", "C. トランペットリリー"],
        "correct_answer": "B. マドンナリリー",
        "explanation": "西洋ユリの歴史は「マドンナリリー (聖母のユリ)」から始まります。紀元前1500年ごろのクレタ島(ギリシャ)の遺跡から「マドンナリリー」が描かれた壁画や壺が発掘されました。"
    },
    {
        "id": 24,
        "question": "聖母マリアが手に持つマドンナリリーは、処女でキリストを宿した奇跡を表していますが、その特徴として何が描かれていませんでしたか?",
        "options": ["A. 葉", "B. 茎", "C. 花粉"],
        "correct_answer": "C. 花粉",
        "explanation": "処女でキリストを宿した聖母マリアが手に持つマドンナリリーには花粉が描かれていませんでした。1本に描かれた3輪は「前も最中も後も」ずっと乙女であった奇跡を表しています。"
    },
    {
        "id": 25,
        "question": "2018年度のオランダ国内のユリの球根栽培量は約何億球でしたか?",
        "options": ["A. 5 億球", "B. 10億球", "C. 15億3900万球"],
        "correct_answer": "C. 15億3900万球",
        "explanation": "2018年度、オランダ国内のユリの球根栽培は15億3900万球でした。"
    },
    {
        "id": 26,
        "question": "2018年度、オランダから EU 外へ輸出されたユリの球根の数はおよそ何億球でしたか?",
        "options": ["A. 5億球", "B. 12億1900万球", "C. 15 億球"],
        "correct_answer": "B. 12億1900万球",
        "explanation": "2018年度、12億1900万球がEU外へ輸出されています。"
    },
    {
        "id": 27,
        "question": "ユリの球根貿易において、日本はオランダのEU 外輸出国の中で何位で、何%のシェアを持っていますか?",
        "options": ["A. 1位、10%", "B. 3位、8%", "C. 6位、6%"],
        "correct_answer": "C. 6位、6%",
        "explanation": "日本はEU外中第6位の輸出国で6%のシェアです。"
    },
    {
        "id": 28,
        "question": "ポット用の「タイニーシリーズ」は、小ぶりながらも切り花としても人気がありますが、主にどの系統のユリでしょう?",
        "options": ["A. カサブランカ", "B. スカシユリ", "C. テッポウユリ"],
        "correct_answer": "B. スカシユリ",
        "explanation": "ポット用の「タイニーシリーズ」は、小ぶりながらも切花としても人気のスカシユリです。"
    },
    {
        "id": 29,
        "question": "「タイニーダブルユー」の特に扱いやすい特徴は何でしょう?",
        "options": ["A. 花びらの先が尖っている", "B. 無花粉である", "C. 香りが非常に強い"],
        "correct_answer": "B. 無花粉である",
        "explanation": "「タイニーダブルユー」は花びらの先が丸く、無花粉のため扱いやすく、可愛らしい形状が特徴です。"
    },
    {
        "id": 30,
        "question": "「美 Lily 7034」は、蕾の数が3-4輪に引き締まった美ボディに仕上がっているのは、どのような栽培方法の結果でしょう?",
        "options": ["A. 化学肥料を多用する", "B. ストレスなく栽培される", "C. 日照時間を厳密に管理する"],
        "correct_answer": "B. ストレスなく栽培される",
        "explanation": "ストレスなく栽培されるので、水揚げも良く、蕾の数が3-4輪に引き締まったフォーメーションは、綺麗に咲ききるための美ボディに仕上がっています。"
    },
    {
        "id": 31,
        "question": "ユリの根には2つの役割がありますが、水分や養分を吸収する役割を持つのはどちらの根でしょう?",
        "options": ["A. 球根下から出る下根", "B. 球根上から出る上根", "C. 茎から出る気根"],
        "correct_answer": "B. 球根上から出る上根",
        "explanation": "1つ目は、大きく成長する茎を支える球根下から出る下根。2つ目は水分や養分を吸収する球根上から出る上根です。"
    },
    {
        "id": 32,
        "question": "ユリの栽培において、地温が発根適温を上回る場合に、冷蔵庫で球根に発根を促す処理を何と呼ぶでしょう?",
        "options": ["A. バーナリゼーション", "B. プレルーティング", "C. 水耕栽培"],
        "correct_answer": "B. プレルーティング",
        "explanation": "プレルーティングとは、地温が発根適温(9~13℃)を上回ると、球根を植え付けても上根がなかなか発生しないため、発根適温にした冷蔵庫で球根に発根を促す処理を行うことです。"
    },
    {
        "id": 33,
        "question": "プレルーティング処理によって、植え付け後速やかに上根が発生することで、ユリの栽培でどのような良い効果が期待できますか?",
        "options": ["A. 花の色が濃くなる", "B. 花重が増加し、奇形花、落蕾の割合が減少する", "C. 花の香りが強くなる"],
        "correct_answer": "B. 花重が増加し、奇形花、落蕾の割合が減少する",
        "explanation": "植え付け後、速やかに上根が発生するため花重が増加し、奇形花、落蕾の割合が減少するユリを育てることができます。"
    },
    {
        "id": 34,
        "question": "花径10cm 前後の小ぶりな花を沢山咲かせる小輪多花性のスカシユリで、AHで無花粉、ブーケなどでも人気の品種は何でしょう?",
        "options": ["A. シベリア", "B. リトルキッス", "C. バンドーム"],
        "correct_answer": "B. リトルキッス",
        "explanation": "ユリは一般的に花が大きく豪華なイメージですが、「リトルキッス」は花径10cm 前後の小ぶりな花を沢山咲かせる小輪多花性のスカシユリです。AHで無花粉、小輪系のため、他の花と合わせてもアレンジがしやすく、ブーケなどでも人気があります。"
    },
    {
        "id": 35,
        "question": "奈良県率川神社で行われる「ゆり祭」としても知られる日本最古の祭りの一つ、三枝祭で奉納されるユリは何でしょう?",
        "options": ["A. ヤマユリ", "B. ササユリ", "C. テッポウユリ"],
        "correct_answer": "B. ササユリ",
        "explanation": "「ゆり祭」としても知られる率川神社の代表的な神事は、飛鳥時代、文武天皇の頃から伝わる日本最古の祭りのひとつとされており、疫病を鎮めることを祈るお祭りといわれています。この祭りは初日、大神神社から届けられた三輪山に咲くササユリを率川神社に奉納するところから始まります。"
    },
    {
        "id": 36,
        "question": "新潟県のユリ栽培において、出荷量は全国3位ですが、作付面積は何位でしょう?",
        "options": ["A. 1位", "B. 2位", "C. 4位"],
        "correct_answer": "A. 1位",
        "explanation": "新潟県のほぼ全域で作られるユリは、出荷量は全国3位ですが、作付け面積は1位です。"
    },
    {
        "id": 37,
        "question": "ユリの香りは、ポリネーターと呼ばれる花粉の送粉者を呼び寄せるために放出されますが、夜間のポリネーターは主に何でしょう?",
        "options": ["A. 蝶", "B. 蛾", "C. 蜂"],
        "correct_answer": "B. 蛾",
        "explanation": "ユリは夜、開花と同時に甘い香りを漂わせます。ポリネーターと呼ばれる花粉の送粉者(蛾などの昆虫)を呼び寄せるためです。"
    },
    {
        "id": 38,
        "question": "ユリの香りの分類において、甘く華やかでスパイシーなユリらしい香りを特に何と呼ぶでしょう?",
        "options": ["A. フローラルブーケ", "B. オリエンタルスイート", "C. ハーバルフレッシュ"],
        "correct_answer": "B. オリエンタルスイート",
        "explanation": "香りの分類では、フローラル、ハーバル、フルーティ、スパイシーバニラの、甘く華やかでスパイシーなユリらしい香りを「オリエンタルスイート」と呼びます。"
    },
    {
        "id": 39,
        "question": "ユリの育種会社における新品種発表までにかかる期間は、少なくとも何年でしょう?",
        "options": ["A. 5年", "B.8年", "C. 11年"],
        "correct_answer": "C. 11年",
        "explanation": "開発を始めてから新品種発表まで、少なくとも11年と、育種には多くの時間と労力がかかっています。"
    },
    {
        "id": 40,
        "question": "日本原種のユリで、現在絶滅危惧種に指定されているのは何でしょう?",
        "options": ["A. ヤマユリ", "B. ヒメサユリ", "C. スカシユリ"],
        "correct_answer": "B. ヒメサユリ",
        "explanation": "ヒメサユリは日本原種の、大切なユリですが、今や絶滅危惧種です。"
    },
    {
        "id": 41,
        "question": "近年登場した、花粉が出ないユリのタイプは何と呼ばれていますか?",
        "options": ["A. 不稔性ユリ", "B. 結実性ユリ", "C. 自家受粉ユリ"],
        "correct_answer": "A. 不稔性ユリ",
        "explanation": "長年、服を汚さない無花粉のユリの育種が望まれてきました。近年、不稔性のユリが登場したことで、葯を取り除かずにお客様にお勧めできるようになりました。"
    },
    {
        "id": 42,
        "question": "無花粉タイプの新品種で、赤、ピンク、白のカラーバリエーションを持ち、期待が高まっているシリーズは何でしょう?",
        "options": ["A. スノーシリーズ", "B. リバーシリーズ", "C. マウンテンシリーズ"],
        "correct_answer": "B. リバーシリーズ",
        "explanation": "赤、ピンク、白のカラーバリエーションを持つ無花粉タイプの新品種であるリバーシリーズにも期待が高まっています。"
    },
    {
        "id": 43,
        "question": "ユリの球根は乾燥に非常に敏感ですが、オランダから輸送される際、どのような状態で冷凍されて海上輸送されますか?",
        "options": ["A. 0度", "B. -1.5度", "C. -5度"],
        "correct_answer": "B. -1.5度",
        "explanation": "これらの球根は-1.5度に冷凍された状態で、1ヶ月半かけてリーファーコンテナで海上輸送されます。"
    },
    {
        "id": 44,
        "question": "万葉の時代から愛されてきたユリについて、歌人である大伴家持が秦石竹から贈られたユリを髪につけて詠んだ歌に込められた意味は何でしょう?",
        "options": ["A. ユリの花のように、また後にもお会いしたい", "B. ユリのように美しくありたい", "C. ユリのように強く生きたい"],
        "correct_answer": "A. ユリの花のように、また後にもお会いしたい",
        "explanation": "大友家持は「さ百合花、ゆりも逢(あ)はむと、思へこそ、今のまさかも、うるはしみすれ」と歌を詠みました。意味は「百合(ユリ)の花というように、また後(ユリ:のち)にもお会いしたいと思うからこそ、今この時も、誠実に親しくするのですよ」です。"
    },
    {
        "id": 45,
        "question": "ユリは、根から吸った水を浸透圧と凝集力により葉まで運びますが、その経路となる構造は何でしょう?",
        "options": ["A. 葉脈", "B. 維管束", "C. 根毛"],
        "correct_answer": "B. 維管束",
        "explanation": "植物は、輪状に維管束のある双子葉植物と、全体に維管束のある単子葉植物に分けられます。根から吸った水を、浸透圧と凝集力により、維管束を通って葉まで運びます。"
    },
    {
        "id": 46,
        "question": "ユリの増殖手段として、「球根」 「ムカゴ」「木子」 「タネ」の4つがありますが、タネから育てた場合、開花までにおよそ何年かかりますか?",
        "options": ["A. 3年", "B. 5年", "C. 7年"],
        "correct_answer": "C. 7年",
        "explanation": "球根やムカゴからユリを育てると約3年ほどで花が咲きます。タネから育てる場合には、開花まで7年という長い時間がかかります。"
    },
    {
        "id": 47,
        "question": "2022年に命名された、オランダと縁が深いプロサッカー選手の小野伸二選手を称えた赤い LA ユリの品種名は何でしょう?",
        "options": ["A. Ono Lily", "B. Shinji Ono", "C. Samurai Red"],
        "correct_answer": "B. Shinji Ono",
        "explanation": "2022年、オランダと縁が深い小野伸二選手(現コンサドーレ札幌)を称え、育種会社フレッターデンハーン社が育種した赤い LA ユリに「Shinji Ono」の名前が付けられました。"
    },
    {
        "id": 48,
        "question": "「Shinji Ono」の品種は、いつ頃市場に流通する予定ですか?",
        "options": ["A. 2023年", "B. 2024年", "C. 2025年"],
        "correct_answer": "B. 2024年",
        "explanation": "「Shinji Ono」は2024年に流通する予定です。"
    },
    {
        "id": 49,
        "question": "大きな花弁を持つユリが多くの水を必要とするのは、どのような理由からでしょう?",
        "options": ["A. 光合成を活発に行うため", "B. 水分を蒸散させやすいため", "C. 根の成長を促進するため"],
        "correct_answer": "B. 水分を蒸散させやすいため",
        "explanation": "大きな花弁を持つユリは水分を蒸散させやすいため、多くの水を必要としています。"
    },
    {
        "id": 50,
        "question": "明治時代に日本から外貨を稼ぐ輸出品としてユリの球根が海外へ送られましたが、最盛期にはおよそ何箱ものユリの球根が海を渡ったと言われていますか?",
        "options": ["A. 100万箱", "B. 1000万箱", "C. 4000万箱"],
        "correct_answer": "C. 4000万箱",
        "explanation": "最盛期には4,000万箱ものユリの球根が海を渡ったといわれています。"
    },
    {
        "id": 51,
        "question": "明治初期に愛好されたものの、栽培が難しく病気に弱いために輸出には向かなかった日本のユリは何でしょう?",
        "options": ["A. テッポウユリ", "B. ヤマユリ", "C. ササユリ"],
        "correct_answer": "B. ヤマユリ",
        "explanation": "明治初期に愛好されたヤマユリは、栽培が難しく病気に弱いため輸出には向きませんでした。"
    },
    {
        "id": 52,
        "question": "ユリの香りは花粉から放出されると思われがちですが、実際には花のどの部位の表面から水分の蒸散と共に放たれていますか?",
        "options": ["A. 雄しべ", "B. 雌しべ", "C.花被(花弁)"],
        "correct_answer": "C. 花被(花弁)",
        "explanation": "ユリの香りは花粉から、と思われがちですが、実は花粉ではなく花被(花弁)の表面から水分の蒸散と共に放たれています。"
    },
    {
        "id": 53,
        "question": "ユリの香りが昼より夜に強く香るのはなぜでしょう?",
        "options": ["A. 昼間は光合成が活発なため香りが抑えられる", "B. 夜行性の昆虫を香り(ポリネーター)で誘うため", "C. 夜間の湿度が高いと香りが広がりやすいため"],
        "correct_answer": "B. 夜行性の昆虫を香り(ポリネーター)で誘うため",
        "explanation": "ユリの香りは、昼より夜に強く香り、夜行性の蛾などを香り(ポリネーター)で誘うため夜に強く香りを放ちます。"
    },
    {
        "id": 54,
        "question": "ユリの花は一見6枚の花弁があるように見えますが、本当の花弁は何枚で、何と呼ばれていますか?",
        "options": ["A.3枚、内花被", "B. 3枚、外花被", "C. 6枚、内花被"],
        "correct_answer": "A. 3枚、内花被",
        "explanation": "ユリの花には、一見6枚の花弁があるように見えますが、本当の花弁は内側にある「内花被」と言われる3枚で、外側の3枚は「萼(ガク)」が変化した「外花被」です。"
    },
    {
        "id": 55,
        "question": "ユリの花の構造が3の倍数でできているのは、どのような植物の特徴でしょう?",
        "options": ["A. 双子葉植物", "B. 単子葉植物", "C. 裸子植物"],
        "correct_answer": "B. 単子葉植物",
        "explanation": "花の構造が3の倍数でできているのも単子葉植物の特徴で、チューリップも同じ構造をしています。"
    },
    {
        "id": 56,
        "question": "トランペットリリーとは、トランペットのような形状の花を咲かせるアジアに自生するユリの総称ですが、その具体例として挙げられているのは何でしょう?",
        "options": ["A. カサブランカ", "B. リーガルリリー、ハカタユリ", "C. スターゲイザー"],
        "correct_answer": "B. リーガルリリー、ハカタユリ",
        "explanation": "トランペットリリーとは、トランペットのような形状の花を咲かせる、リーガルリリー、ハカタユリなどのアジアに自生するユリの総称です。"
    },
    {
        "id": 57,
        "question": "ユリの学名である Lilium はラテン語でユリを意味しますが、古代ケルト語の「li: 白い+lium:花」に由来するといわれており、特に何の色から純潔のイメージが連想されるでしょう?",
        "options": ["A. 赤", "B. 白", "C. 黄色"],
        "correct_answer": "B. 白",
        "explanation": "ユリの学名である Liliumは、ラテン語でユリを意味し、古代ケルト語の「li:白い+lium: 花」に由来するといわれています。キリスト教におけるユリの花は「純潔のシンボル」であり、Lilium が語源の英語のLilyにも、「純潔」の意味があります。"
    },
    {
        "id": 58,
        "question": "ユリの基本色は6色ですが、次のうち基本色に含まれないのはどれでしょう?",
        "options": ["A. 白", "B. 青", "C. 濃紫"],
        "correct_answer": "B. 青",
        "explanation": "ユリの基本色は白、赤、オレンジ、黄色、ピンク、濃紫など6色です。"
    },
    {
        "id": 59,
        "question": "ユリの出荷が一年中可能になった主な理由は何でしょう?",
        "options": ["A. 新品種の開発", "B. 促成栽培や抑制栽培の技術向上と球根の氷温保存管理", "C. 海外からの輸入増加"],
        "correct_answer": "B. 促成栽培や抑制栽培の技術向上と球根の氷温保存管理",
        "explanation": "ユリの出荷が一年中可能になった理由は、促成栽培や抑制栽培の技術が向上したからです。ユリの球根を氷温で保存、管理できるようになったことで、一年中栽培可能な球根を作ることができるようになりました。"
    },
    {
        "id": 60,
        "question": "遺伝的に草丈 3040cm程度と大きくならないユリの品種は何と呼ばれていますか?",
        "options": ["A. 高性ユリ", "B. 矮性のユリ", "C. 中性ユリ"],
        "correct_answer": "B. 矮性のユリ",
        "explanation": "矮性のユリというのは、遺伝的に草丈3040cm程度と大きくならない品種のことを指します。"
    },
    {
        "id": 61,
        "question": "矮性のユリは、近年八重の品種が増えてきたことで人気が高まっていますが、どのような用途でよく使われますか?",
        "options": ["A. 切り花としてのみ", "B. ガーデニングやちょっとしたアレンジ", "C. 大規模な花束"],
        "correct_answer": "B. ガーデニングやちょっとしたアレンジ",
        "explanation": "矮性のユリは、小ぶりで花持ちがよく、ガーデニングやちょっとしたアレンジに使われます。"
    },
    {
        "id": 62,
        "question": "ユリの香りの最も重要な役割は何でしょう?",
        "options": ["A. リラックス効果", "B. ポリネーターとなる虫を誘う", "C. 良い眠りを誘う効果"],
        "correct_answer": "B. ポリネーターとなる虫を誘う",
        "explanation": "光合成で作る糖の $1/3$ を使って、蜜を作り、甘い香りで(ポリネーター)蛾を誘い、花弁奥で蜜を、受粉を促すことがユリの香りの最も重要な役割です。"
    },
    {
        "id": 63,
        "question": "オリエンタルユリに含まれる代表的なロマンティックな甘い香りの成分で、スパイシーバニラ系と関連があるのは何でしょう?",
        "options": ["A. リナロール", "B. ユーカリプトール", "C. イソオゲノール"],
        "correct_answer": "C. イソオゲノール",
        "explanation": "イソオゲノールはスパイシーバニラ系 (OH ユリ)の成分です。ユーカリプトールはユーカリ系です。"
    },
    {
        "id": 64,
        "question": "西洋の宗教画における受胎告知の場面で、大天使ガブリエルが聖母マリアに示すマドンナリリーは、どのような意味合いを持つとされていますか?",
        "options": ["A. 悲哀", "B. 純潔", "C. 成功"],
        "correct_answer": "B. 純潔",
        "explanation": "マドンナリリーは純潔の象徴とされています。"
    },
    {
        "id": 65,
        "question": "ユリの語源の由来として、最も有力視されているのは何でしょう?",
        "options": ["A. 花弁が多い「百合」から名付けた", "B. 初めて発見した人物の名前から名付けた", "C. 「揺れる」→「ゆり」から名付けた"],
        "correct_answer": "C. 「揺れる」→「ゆり」から名付けた",
        "explanation": "「ユリ」は古い言葉で「揺れる」を意味する「揺る(ゆる)」に由来します。昔の人々はこの花が風に揺れる様から「ユリ」と命名したと考えられています。"
    },
    {
        "id": 66,
        "question": "ユリの学名であるラテン語の Lilium (リリウム)はどのような意味があるでしょう?",
        "options": ["A. 大きい", "B. 白", "C. 花"],
        "correct_answer": "B. 白",
        "explanation": "Lilium は古代ケルト語の「li: 白い+lium: 花」に由来するといわれています。"
    },
    {
        "id": 67,
        "question": "ユリの球根の湿度管理において、発根を促す処理を行う際に球根を覆うピートモスの状態として適切なのは何でしょう?",
        "options": ["A. 乾燥したピートモス", "B. 温かいピートモス", "C. 湿ったピートモス"],
        "correct_answer": "C. 湿ったピートモス",
        "explanation": "球根を湿ったピートモスで覆うのは、球根の乾燥を防ぐとともに、芽を伸ばすのに必要な水分を供給するためです。"
    },
    {
        "id": 68,
        "question": "ユリには遺伝子を残すために球根、タネ、木子とムカゴの4つの手段がありますが、木子やムカゴから育てると花が咲くまで3年かかるのに対し、種は何年かかるでしょう?",
        "options": ["A. 5年", "B.7年", "C. 10年"],
        "correct_answer": "B. 7年",
        "explanation": "球根やムカゴからユリを育てると約3年ほどで花が咲きます。タネから育てる場合には、開花まで7年という長い時間がかかります。"
    },
    {
        "id": 69,
        "question": "オランダやニュージーランドなどからコンテナ船でユリ球根が輸入される際、コンテナ内は約何度に保たれた状態で運ばれるでしょう?",
        "options": ["A.-1~-2度", "B.-1.5~-2度", "C. -2~-3度"],
        "correct_answer": "B. -1.5~-2度",
        "explanation": "球根は-1.5度に冷凍された状態で、1ヶ月半かけてリーファーコンテナで海上輸送されます。"
    },
    {
        "id": 70,
        "question": "ホームユースとして提案されている『美 Lily 7034』のコンセプトは何でしょう?",
        "options": ["A. 大振りのユリの魅力を知ってもらいたい", "B. 日本原産のユリ ヤマユリの魅力を知ってもらいたい", "C. キュートな八重ユリを多くの人に楽しんで欲しい"],
        "correct_answer": "C. キュートな八重ユリを多くの人に楽しんで欲しい",
        "explanation": "「美 Lily 7034」は、キュートなユリの花を多くの人に楽しんで欲しい、という思いで商品化されました。"
    },
    {
        "id": 71,
        "question": "これから特に注目されるユリの特徴は何でしょう?",
        "options": ["A. 香りの強さ", "B. 無花粉の八重", "C. 草丈の高さ"],
        "correct_answer": "B. 無花粉の八重",
        "explanation": "注目されてくるのは八重と無花粉になります。"
    },
    {
        "id": 72,
        "question": "AH 系タイニーダブルユーの主な特徴は何でしょう?",
        "options": ["A. 草丈が40センチと大変小振りである", "B. 無花粉だが香りがある", "C. 周年栽培されている"],
        "correct_answer": "A. 草丈が40センチと大変小振りである",
        "explanation": "比較的新しい品種の小振りのタイニーダブルユーは、背丈もこれまでのユリよりもだいぶ小さめの40センチです。"
    },
    {
        "id": 73,
        "question": "ユリを長く楽しむために、花瓶と水が清潔に保たれる必要がある主な理由は何でしょう?",
        "options": ["A. 花の香りが悪くなるのを防ぐため", "B. 花弁の発色を良くするため", "C. 細菌(バクテリア)を増やさないため"],
        "correct_answer": "C. 細菌(バクテリア)を増やさないため",
        "explanation": "バクテリアは茎の導管を塞ぎ、水を吸い上げる妨げになるため、清潔に保つ必要があります。"
    },
    {
        "id": 74,
        "question": "世界各国で好まれるユリの色は異なりますが、日本で最も使われているユリの色は何色でしょう?",
        "options": ["A. 黄とオレンジ", "B. 白とピンク", "C. 赤とピンク"],
        "correct_answer": "B. 白とピンク",
        "explanation": "日本やフランスでは白や淡いピンクが好まれ、中国やアジア、南アメリカでは原色が好まれています。"
    },
    {
        "id": 75,
        "question": "ユリの球根にはチューリップにはない特徴がありますが、それは何でしょう?",
        "options": ["A. ムカゴを作る", "B. 水耕栽培ができる", "C. 上根を張る"],
        "correct_answer": "C. 上根を張る",
        "explanation": "ユリは大きく成長する茎を支える下根と、水分や養分を吸収する上根の2つの役割を持つ根により支えられています。特に上根は、ユリを大きく成長させるために、伸ばした芽の1~2cm 上から横に大きく張っていきます。"
    },
    {
        "id": 76,
        "question": "オリエンタルユリのバンドームは淡いピンクのユリですが、その最大の特徴は何でしょう?",
        "options": ["A. 香りがない", "B. 無花粉", "C. 小振り"],
        "correct_answer": "B. 無花粉",
        "explanation": "バンドームは特に葯が黄色でピンクの人気がある無花粉のユリです。"
    },
    {
        "id": 77,
        "question": "花粉が衣服などについてしまった場合の正しい対処法は何ですか?",
        "options": ["A. 水で濡らして洗う", "B. ゴシゴシ擦り洗いする", "C. 粘着テープで叩くように除去する"],
        "correct_answer": "C. 粘着テープで叩くように除去する",
        "explanation": "花粉は油分を含むため水で洗ったり擦るのではなく、粘着テープで叩くように優しく除去しましょう。"
    },
    {
        "id": 78,
        "question": "ブライダルシーンにおいて、ユリを美しく開花させ、同時に花粉の展開を抑制することは可能ですか?",
        "options": ["A.可能", "B.不可能", "C. 部分的に可能"],
        "correct_answer": "A. 可能",
        "explanation": "花木を蒸す方法(自呼吸蒸散で湿度と温度を上げスムーズな開花と湿度により葯の展開を制御する)を用いることで可能です。"
    },
    {
        "id": 79,
        "question": "ユリの原種は世界ではおよそ100種ありますが、日本でしか見られない固有種は何種類でしょう?",
        "options": ["A. 3種類", "B. 6種類", "C. 14 種類"],
        "correct_answer": "B. 6種類",
        "explanation": "日本には14種類の原種が自生しており、中でもウケユリ、ササユリ、スカシュリ、タモトユリ、ヒメサユリ、ヤマユリの6種は日本の固有種です。"
    },
    {
        "id": 80,
        "question": "世界で一番栽培されているユリの品種は何でしょう?",
        "options": ["A. カサブランカ", "B. バンドーム", "C. シベリア"],
        "correct_answer": "C. シベリア",
        "explanation": "2003年に品種登録された白い OH ユリである「シベリア」は、耐輸送性に優れており、丈夫なため、世界で最も栽培されているユリ切り花といえます。"
    },
    {
        "id": 81,
        "question": "ユリの球根を植えるときに、土の表面から球根3つ分のスペースをあけた深さに植えるのはなぜでしょう?",
        "options": ["A. 球根が大きくなるため", "B. 下根の力で球根が上に移動してしまうため", "C. 上根が張るため"],
        "correct_answer": "C. 上根が張るため",
        "explanation": "球根3個分の深さに植えるのは上根が張るからです。上根は水や養分を吸収し、伸ばした芽の1~2cm 上から上根を張ります。"
    },
    {
        "id": 82,
        "question": "球根を保存するときに、ピートモスで包む理由として最も適切なのは何でしょう?",
        "options": ["A. 傷が付くのを防ぐ緩衝材効果があるため", "B. 乾燥を防ぐ保湿効果があるため", "C. 温度を高く保つため"],
        "correct_answer": "B. 乾燥を防ぐ保湿効果があるため",
        "explanation": "球根を湿ったピートモスで覆うのは、球根の乾燥を防ぐとともに、芽を伸ばすのに必要な水分を供給するためです。"
    },
    {
        "id": 83,
        "question": "新潟県魚沼市でのユリの露地栽培の特徴として、主に何が挙げられますか?",
        "options": ["A. 発育が早く収穫や出荷を早められる", "B. 作付面積を広く取れ、雪で浄化された土壌を利用できる", "C. ハウスを使わず自然の雨のみで栽培する"],
        "correct_answer": "B. 作付面積を広く取れ、雪で浄化された土壌を利用できる",
        "explanation": "魚沼地域は、山の残雪を融雪させた畑に、日除けのパイプハウスを建てユリを栽培します。豪雪地帯のため出荷時期が遅くなりますが、ほかの産地からの出荷がない時期に出荷を行うことができます。"
    },
    {
        "id": 84,
        "question": "埼玉県深谷市におけるユリ栽培の特徴として、何が挙げられますか?",
        "options": ["A. 露地栽培が中心", "B. 二毛作栽培を導入", "C. LA ユリの周年栽培"],
        "correct_answer": "C. LA ユリの周年栽培",
        "explanation": "深谷市では、LAユリの周年栽培が行われています。"
    },
    {
        "id": 85,
        "question": "冬のユリ栽培で全国有数の生産県はどこでしょう?",
        "options": ["A. 千葉県", "B. 高知県", "C. 北海道"],
        "correct_answer": "B. 高知県",
        "explanation": "高知県は、温暖で多日照の気候条件を活かし、11月頃から6月頃までユリを出荷しており、冬春期に出荷される全国トップクラスのユリ産地です。"
    }
];

// HTML要素の取得
const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const answerButton = document.getElementById('answer-button');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const resultTextElement = document.getElementById('result-text');
const correctAnswerElement = document.getElementById('correct-answer');
const explanationElement = document.getElementById('explanation');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let selectedOption = null;

// クイズの開始
function startQuiz() {
    // 問題をランダムに並び替える処理を削除
    // quizData.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    showQuestion();
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    answerButton.disabled = false;
    nextButton.disabled = true;
}

// 質問の表示
function showQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        // すべての問題が終了した場合
        endQuiz();
        return;
    }

    const currentQuiz = quizData[currentQuestionIndex];
    questionNumberElement.textContent = `問題: ${currentQuestionIndex + 1} / ${quizData.length}`;
    questionTextElement.textContent = currentQuiz.question;

    optionsContainer.innerHTML = '';
    // 選択肢は元の順番（A, B, C）で表示
    currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button));
        optionsContainer.appendChild(button);
    });

    // 状態をリセット
    selectedOption = null;
    answerButton.disabled = true;
    answerButton.style.opacity = '0.5';
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
}

// 選択肢の選択
function selectOption(button) {
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }
    selectedOption = button;
    selectedOption.classList.add('selected');
    answerButton.disabled = false;
    answerButton.style.opacity = '1';
}

// 回答ボタンのクリック
answerButton.addEventListener('click', () => {
    if (!selectedOption) return;

    const currentQuiz = quizData[currentQuestionIndex];
    answerButton.disabled = true;
    answerButton.style.opacity = '0.5';

    // 選択肢の正解/不正解を判定
    optionsContainer.childNodes.forEach(button => {
        if (button.textContent === currentQuiz.correct_answer) {
            button.classList.add('correct');
        } else if (button === selectedOption) {
            button.classList.add('incorrect');
        }
        button.disabled = true; // 回答後は選択肢を無効化
    });

    // 結果画面を表示
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    if (selectedOption.textContent === currentQuiz.correct_answer) {
        resultTextElement.textContent = '正解！';
        resultTextElement.style.color = '#388e3c';
    } else {
        resultTextElement.textContent = '不正解...';
        resultTextElement.style.color = '#d32f2f';
    }
    correctAnswerElement.textContent = `正解: ${currentQuiz.correct_answer}`;
    explanationElement.textContent = `解説: ${currentQuiz.explanation}`;
    nextButton.disabled = false;
});

// 次へボタンのクリック
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

// クイズの終了
function endQuiz() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultTextElement.textContent = 'クイズ終了！';
    correctAnswerElement.textContent = 'すべての問題が終了しました。';
    explanationElement.textContent = '';
    nextButton.textContent = '最初に戻る';
    // 次へボタンのイベントリスナーを一度削除してから再設定
    nextButton.removeEventListener('click', nextButtonHandler);
    nextButton.addEventListener('click', resetQuiz);
}

// 次へボタンのクリックハンドラー
function nextButtonHandler() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// クイズのリセット
function resetQuiz() {
    nextButton.textContent = '次の問題へ';
    nextButton.removeEventListener('click', resetQuiz);
    nextButton.addEventListener('click', nextButtonHandler);
    startQuiz();
}

// ページ読み込み時にクイズを開始
document.addEventListener('DOMContentLoaded', startQuiz);
