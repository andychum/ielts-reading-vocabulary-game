// Original IELTS-style vocabulary, phrase and reading practice content with Japanese learning support.
// Each item: English | Japanese meaning | closest meaning/paraphrase | example or usage cue.
const rawWords=`essential|不可欠な|necessary|Water is essential for life.
significant|重要な・かなり大きい|important|The change was significant.
increase|増加する|rise|The number of visitors increased.
decrease|減少する|decline|Costs decreased over time.
expand|拡大する|grow|The city continued to expand.
reduce|減らす|lower|Trees reduce surface temperatures.
provide|提供する|supply|Parks provide shade.
require|必要とする|need|The project requires planning.
obtain|得る|acquire|Researchers obtained more data.
maintain|維持する|keep|It is expensive to maintain a bridge.
contribute|貢献する|help|Volunteers contribute to research.
evaluate|評価する|assess|Scientists evaluate the results.
indicate|示す|suggest|The figures indicate growth.
affect|影響を与える|influence|Sleep can affect concentration.
prevent|防ぐ|stop|Good storage can prevent waste.
reliable|信頼できる|dependable|The results are reliable.
accurate|正確な|precise|Accurate information is essential.
sufficient|十分な|enough|Students need sufficient rest.
limited|限られた|restricted|Space is limited in cities.
available|利用できる|accessible|Fresh water is not always available.
vulnerable|影響を受けやすい|at risk|Older residents may be vulnerable to heat.
accessible|利用しやすい|easy to reach|The park is accessible by bus.
considerable|かなりの|substantial|The project requires considerable funding.
complex|複雑な|complicated|Memory is a complex process.
selective|選択的な|choosing some|Memory can be selective.
consistent|一貫した|regular|A consistent schedule can help.
additional|追加の|extra|The school offered additional support.
unfamiliar|なじみのない|unknown|She met unfamiliar vocabulary.
gradually|徐々に|slowly|The temperature gradually increased.
particularly|特に|especially|This is particularly useful.
infrastructure|社会基盤・設備|basic systems|Parks are part of urban infrastructure.
moisture|水分・湿気|water content|Leaves release moisture.
irrigation|灌漑・水やり|watering|New trees may need irrigation.
species|生物の種|type of organism|Different species have different needs.
maturity|成熟|full development|A tree needs years to reach maturity.
concrete|コンクリート|building material|Concrete surfaces absorb heat.
heatwave|熱波|period of extreme heat|Heatwaves can affect vulnerable people.
psychological|心理的な|mental|Parks may improve psychological well-being.
association|関連性|connection|Researchers found an association.
neighbourhood|近隣地域|local area|This neighbourhood has few trees.
biological|生物学的な|related to living things|Sleep is a biological process.
recovery|回復|return to health|Sleep supports physical recovery.
adolescent|思春期の若者|teenager|Adolescents often sleep later.
attention|注意力|focus|Poor sleep affects attention.
concentration|集中力|focus|Reading requires concentration.
regulation|調節|control|Sleep supports emotional regulation.
compensate|埋め合わせる|make up for|Some students compensate at weekends.
routine|日課・習慣|regular pattern|A bedtime routine can help.
retention|記憶の保持|keeping information|Revision improves vocabulary retention.
recall|思い出す|remember|Try to recall words without notes.
supply chain|供給網|production and delivery network|Food waste occurs along the supply chain.
storage|保管|keeping for later|Poor storage damages crops.
facility|設備・施設|building or service|Storage facilities can protect food.
nutritional|栄養の|related to nutrients|The food has nutritional value.
discard|捨てる|throw away|Shops may discard edible products.
uniform|均一な|the same in form|Buyers sometimes prefer a uniform shape.
edible|食べられる|safe to eat|Edible food may be wasted.
perishable|傷みやすい|spoils easily|Fish is a perishable product.
refrigeration|冷却保存|cold storage|Refrigeration protects fresh food.
composting|堆肥化|turning waste into compost|Composting returns nutrients to soil.
conventional|従来型の|traditional|Conventional power stations use fuel.
variability|変動性|changeability|Solar power has variability.
demand|需要|need for goods|Electricity demand peaks in the evening.
generation|発電・生成|production|Energy generation changes daily.
consumption|消費|use|Energy consumption rises in winter.
absorb|吸収する|take in|A battery can absorb energy.
exceed|上回る|go beyond|Supply may exceed demand.
transmission|送電・伝達|transfer|Transmission lines connect regions.
efficiency|効率|effective use|Energy efficiency can improve.
resilient|回復力のある|able to recover|A resilient network can handle problems.
evolve|進化・変化する|develop over time|Languages evolve over generations.
migration|移住・移動|movement|Migration spreads languages.
innovation|新しい工夫|new idea|Digital communication encourages innovation.
linguist|言語学者|language researcher|Linguists study how languages change.
borrowing|借用|taking from another language|Borrowing changes vocabulary.
pronunciation|発音|way of saying words|Pronunciation may change over time.
convention|慣習・決まり|usual practice|Formal writing follows conventions.
register|言葉の形式・文体|level of formality|Academic writing needs a clear register.
audience|読み手・聞き手|people receiving a message|Choose language for your audience.
interpret|解釈する|understand meaning|Readers may interpret the chart differently.
artefact|人工遺物|human-made historical object|An artefact reveals past trade.
reconstruct|再構築する|build again|Archaeologists reconstruct trade routes.
intermediary|仲介者|middle person|Goods may pass through intermediaries.
composition|組成・構成|what something contains|Experts analyse chemical composition.
assumption|仮定・思い込み|belief without proof|An assumption may be wrong.
manufacture|製造する|produce|Factories manufacture clothing.
organism|生物|living thing|Coral reefs support many organisms.
microscopic|微小な|extremely small|Microscopic algae live in coral.
photosynthesis|光合成|making energy from light|Plants use photosynthesis.
bleaching|白化|loss of colour|Heat can cause coral bleaching.
vulnerable to|〜の影響を受けやすい|at risk from|Coral is vulnerable to warming.
not necessarily|必ずしも〜ではない|not always|Bleached coral is not necessarily dead.
rather than|〜ではなく|instead of|Study meaning rather than isolated words.
due to|〜が原因で|because of|The delay was due to storms.
as a result|その結果|therefore|It rained; as a result, roads flooded.
whereas|一方で|while in contrast|Some birds migrate whereas others remain.
nevertheless|それにもかかわらず|however|The method is costly; nevertheless, it works.
account for|〜を考慮する・説明する|take into consideration|Studies must account for other factors.
depend on|〜によって決まる|be influenced by|Growth depends on rainfall.
a wide range of|幅広い|many different|Volunteers take part in a wide range of projects.`;
window.WORDS=rawWords.trim().split('\n').map((line,id)=>{const [term,jp,syn,example]=line.split('|');return{id,term,jp,syn,example,group:id<30?'Academic core':id<50?'People & learning':id<80?'IELTS topics':'Phrases & meaning'}});

window.SENTENCES=[
 {text:'Although the number of visitors increased, spending declined.',choices:['訪問者も支出も増えた。','訪問者は増えたが、支出は減った。','訪問者も支出も減った。'],correct:1,explain:'Although は逆接。increased と declined が反対の動きを表します。'},
 {text:'The findings do not necessarily prove that parks improve mental health.',choices:['公園の効果が完全に証明された。','公園は健康に悪い。','その結果だけでは効果が証明されたとは限らない。'],correct:2,explain:'not necessarily = 必ずしも〜ではない。prove は「証明する」。'},
 {text:'The results may vary depending on the amount of rainfall.',choices:['雨量によって結果が異なる可能性がある。','結果はいつも同じだ。','雨が降らないことが証明された。'],correct:0,explain:'may は可能性。vary は「変わる」、depending on は「〜次第で」。'},
 {text:'Some products are discarded even when they remain edible.',choices:['食べられなくなった物だけ捨てられる。','まだ食べられるのに捨てられる商品もある。','全商品が保存される。'],correct:1,explain:'even when = 〜の場合でも。edible = 食べられる。'},
 {text:'The new technology requires substantial investment.',choices:['新技術にはかなりの投資が必要だ。','新技術は費用が掛からない。','投資額が減った。'],correct:0,explain:'requires = needs、substantial = considerable（かなりの）。'},
 {text:'The association does not establish a direct cause.',choices:['関連性があれば原因も確定する。','直接的な原因は既に証明された。','関連性だけでは直接の原因は確定しない。'],correct:2,explain:'association = 関連性。establish a cause = 原因を確定する。'},
 {text:'The strategy is effective only under certain conditions.',choices:['どんな状況でも有効だ。','特定の条件の下でのみ有効だ。','効果がないと証明された。'],correct:1,explain:'only under certain conditions = 特定の条件に限って。'},
 {text:'Unlike conventional stations, solar panels depend on the weather.',choices:['太陽光発電は天気に左右される。','従来の発電所も太陽光も天気と無関係だ。','太陽光発電は夜に最も発電する。'],correct:0,explain:'Unlike = 〜とは違い、depend on = 〜次第。'},
 {text:'The policy may reduce waste rather than eliminate it.',choices:['廃棄物を完全になくす。','廃棄物が増える。','廃棄物を減らせても、完全にはなくさないかもしれない。'],correct:2,explain:'rather than は対比。reduce と eliminate の違いに注意。'},
 {text:'Researchers should account for differences between neighbourhoods.',choices:['地区ごとの違いを考慮すべきだ。','どの地区も同じだと考える。','研究者は地区を数えるだけでよい。'],correct:0,explain:'account for = 考慮する。differences between = 〜間の違い。'},
 {text:'The benefit is limited because the evidence is insufficient.',choices:['証拠は完全なので効果は大きい。','証拠が不十分なため、効果には限界がある。','効果は永久に続く。'],correct:1,explain:'limited = 限られた、insufficient = not enough。'},
 {text:'Some species are more vulnerable to environmental changes than others.',choices:['すべての種が同じ程度に強い。','環境の変化は全く影響しない。','他の種より変化の影響を受けやすい種がある。'],correct:2,explain:'more ... than others は比較。vulnerable to = 〜に弱い。'},
 {text:'The rise in demand was mainly due to population growth.',choices:['需要増加の主な原因は人口増加だった。','需要は人口減少で減った。','人口と需要は無関係だ。'],correct:0,explain:'due to = because of。mainly = 主に。'},
 {text:'Although the explanation is complex, the main idea is simple.',choices:['説明も要点も難しい。','説明は複雑だが、中心的な考えは簡単だ。','説明は存在しない。'],correct:1,explain:'Although は譲歩・対比。main idea = 中心的な考え。'},
 {text:'The results indicate a decline in the proportion of young people.',choices:['若者の割合が増えた。','若者の総数が必ずゼロになった。','若者の割合が減ったことを結果が示す。'],correct:2,explain:'indicate = show、decline = decrease、proportion = 割合。'},
 {text:'The report distinguishes correlation from causation.',choices:['報告書は関連性と因果関係を区別している。','関連性と因果関係は同じだと述べる。','原因を全く調べていない。'],correct:0,explain:'distinguish A from B = AとBを区別する。'},
 {text:'As a result of improved storage, less food was wasted.',choices:['保存方法が悪化して食品ロスが増えた。','保存が改善した結果、食品ロスが減った。','食品ロスは保存と関係がない。'],correct:1,explain:'as a result of = 〜の結果。less food was wasted = 廃棄量が減った。'},
 {text:'A dictionary records usage rather than controlling it.',choices:['辞書は言葉の使用を禁止する。','辞書は言葉を変えない。','辞書は使い方を支配するより、使われ方を記録する。'],correct:2,explain:'rather than = 〜ではなく。record はここでは「記録する」。'},
 {text:'The method may be appropriate for some learners but not for everyone.',choices:['一部には合っても、全員に合うとは限らない。','すべての学習者に合う。','誰にも使えない。'],correct:0,explain:'some ... but not everyone = 一部には当てはまるが、全員ではない。'},
 {text:'Compared with rural areas, city centres often contain more concrete surfaces.',choices:['都市中心部には田舎よりコンクリートが少ない。','地方と比較すると、都市中心部にはコンクリート面が多いことが多い。','どこも全く同じ面積だ。'],correct:1,explain:'Compared with = 〜と比べて。often は「常に」ではない。'}
];

window.READINGS=[
 {title:'Urban Green Spaces',topic:'Environment',text:'A. Urban trees provide shade and release moisture, which can lower surface temperatures. However, the cooling effect depends on tree species and the amount of water available.\n\nB. Green spaces may also support mental well-being. Researchers have observed an association between access to nature and lower stress, but this does not prove that parks alone cause better health.',qs:[{q:'Trees can lower local temperatures.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'A explains shade and moisture can lower temperatures.'},{q:'Every park directly causes better mental health.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B says the association does not prove parks alone cause better health.'},{q:'The study involved exactly 500 residents.',a:['TRUE','FALSE','NOT GIVEN'],correct:2,e:'No participant number is provided.'}]},
 {title:'Sleep and Learning',topic:'Science',text:'A. Sleep supports learning and physical recovery. During some stages, the brain appears to strengthen selected memories. This may help students recall information the following day.\n\nB. Adolescents often experience changes in their internal body clocks. Early school timetables can make it difficult to obtain sufficient rest.',qs:[{q:'Sleep may support memory.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'A says the brain may strengthen selected memories.'},{q:'All adolescents find early bedtimes easy.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B says changes can make sufficient rest difficult.'},{q:'The school opens at 7:15 a.m.',a:['TRUE','FALSE','NOT GIVEN'],correct:2,e:'There is no exact school opening time.'}]},
 {title:'Food Waste',topic:'Society',text:'A. Food is sometimes discarded because it fails cosmetic standards, even when its nutritional value remains unchanged. This creates waste at an early stage of the supply chain.\n\nB. Best-before labels often describe quality rather than immediate safety. Clearer labels may help consumers avoid unnecessary waste.',qs:[{q:'Appearance can be a reason food is rejected.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'A describes cosmetic standards.'},{q:'Best-before always means food is immediately unsafe.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B contrasts quality with immediate safety.'},{q:'The supermarket charges £2 for the food.',a:['TRUE','FALSE','NOT GIVEN'],correct:2,e:'No price is stated.'}]},
 {title:'Renewable Energy',topic:'Technology',text:'A. Solar panels generate different amounts of electricity according to weather and time of day. Demand may peak after sunset, when solar generation has stopped.\n\nB. Batteries can absorb electricity when supply exceeds demand and release it later. However, storage alone cannot solve every problem in an electricity network.',qs:[{q:'Solar power output can change.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'A states output depends on weather and time.'},{q:'Batteries solve every energy-network problem.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B explicitly says storage alone cannot solve every problem.'},{q:'The battery was installed in 2018.',a:['TRUE','FALSE','NOT GIVEN'],correct:2,e:'No installation date is given.'}]},
 {title:'Ancient Trade',topic:'History',text:'A. Archaeologists find objects far from the places where they were made. Such discoveries suggest contact between communities, but they do not prove that each owner travelled abroad.\n\nB. By examining chemical composition, researchers may identify the origin of raw materials. Yet similar materials can sometimes be found in different regions.',qs:[{q:'An imported object proves its owner visited another country.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'A says imported objects do not prove personal travel.'},{q:'Chemical analysis may help identify an origin.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'B states that composition may help identify origin.'},{q:'The pottery was bought for 100 coins.',a:['TRUE','FALSE','NOT GIVEN'],correct:2,e:'No price appears in the passage.'}]},
 {title:'Coral Reefs',topic:'Environment',text:'A. Coral reefs provide shelter for many marine organisms. Some corals depend on microscopic algae for energy. The partnership benefits both organisms.\n\nB. Prolonged heat stress may cause coral bleaching. Bleached corals are not necessarily dead, but repeated heat events can reduce their ability to recover.',qs:[{q:'Some corals depend on algae.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'A states the partnership provides energy.'},{q:'Every bleached coral dies immediately.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B says not necessarily dead.'},{q:'This reef is the oldest in the world.',a:['TRUE','FALSE','NOT GIVEN'],correct:2,e:'No age ranking is given.'}]},
 {title:'Citizen Science',topic:'Research',text:'A. Volunteers can collect bird sightings and classify photographs. Their work may produce observations across a wide geographical area.\n\nB. Data quality is still important. Researchers may ask several volunteers to examine the same image. Agreement can improve reliability, but it does not guarantee that every identification is correct.',qs:[{q:'Volunteers may collect information across large areas.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'A mentions wide geographical areas.'},{q:'Agreement always guarantees correct results.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B explicitly says agreement does not guarantee correctness.'},{q:'All volunteers receive a salary.',a:['TRUE','FALSE','NOT GIVEN'],correct:2,e:'Payment is not discussed.'}]},
 {title:'Rainwater in Cities',topic:'Environment',text:'A. Roads and buildings can prevent rain from soaking into soil. During intense storms, water may exceed the capacity of drainage systems.\n\nB. Rain gardens and permeable pavements can reduce runoff. Their performance depends partly on soil conditions and regular maintenance. These measures support, but cannot replace, emergency flood warnings.',qs:[{q:'Urban surfaces may prevent water entering soil.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'A says roads and buildings can prevent soaking.'},{q:'Rain gardens make flood warnings unnecessary.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B says they cannot replace emergency warnings.'},{q:'The example takes place in Kyoto.',a:['TRUE','FALSE','NOT GIVEN'],correct:2,e:'No city is named.'}]}
];

// Expansion pack: 400 additional IELTS-relevant words and phrases.
// Japanese glosses and simple contexts are written for guided Band 4 -> 5.5 study.
const extraRaw=`analyse|分析する|examine closely|Scientists analyse samples from the river.
approach|方法・取り組み方|method|The school tried a new approach to reading.
aspect|側面|part|Cost is one aspect of the problem.
assess|評価する|evaluate|Teachers assess students' progress.
benefit|利点・利益|advantage|Exercise has several health benefits.
challenge|課題・難題|difficulty|Transport remains a major challenge.
claim|主張する|state|The author claims that the method works.
compare|比較する|look at differences|The study compares two groups.
consequence|結果・影響|result|Pollution can have serious consequences.
context|文脈・状況|surrounding information|The meaning depends on context.
contrast|対比する|show differences|The text contrasts old and new methods.
data|データ|information|The researchers collected data.
demonstrate|明らかにする|show|The experiment demonstrates a clear effect.
derive from|〜に由来する|come from|Many English words derive from Latin.
evidence|証拠|proof or information|The report presents new evidence.
factor|要因|influence|Weather is an important factor.
feature|特徴|characteristic|The building has several unusual features.
identify|特定する|recognise|The team identified three problems.
imply|暗に示す|suggest indirectly|The result may imply a change.
influence|影響を与える|affect|Friends can influence study habits.
investigate|調査する|examine|Experts investigate the cause.
method|方法|procedure|This method takes less time.
objective|目的・客観的な|goal|The main objective is to reduce waste.
outcome|結果|result|The final outcome was positive.
pattern|傾向・型|trend|A clear pattern appeared in the data.
predict|予測する|forecast|It is hard to predict future demand.
primary|主な・第一の|main|The primary reason was cost.
principle|原則|basic rule|The design follows a simple principle.
process|過程|series of steps|Learning is a gradual process.
proportion|割合|share|A high proportion of students walked.
range|範囲|variety|The survey covered a broad range of ages.
respond|反応する|react|Plants respond to light.
result in|〜という結果になる|lead to|Poor sleep can result in errors.
similar|似ている|alike|The two methods produced similar results.
source|情報源・出所|origin|Check the source of the information.
specific|特定の・具体的な|particular|The report gives specific examples.
statistics|統計|numerical data|The statistics show a rise.
strategy|戦略|plan|A reading strategy can save time.
trend|傾向|general direction|The graph shows a downward trend.
valid|妥当な・有効な|sound|The researcher checked whether the test was valid.
achievement|達成|success|Finishing the course was an achievement.
assignment|課題|school task|The assignment is due on Friday.
attendance|出席|presence|Attendance improved during the term.
curriculum|教育課程|course content|The curriculum includes science.
discipline|学問分野・規律|field of study|History is an academic discipline.
enrol|入学・登録する|sign up|Students enrol in the programme.
feedback|助言・講評|comments|Useful feedback helps students improve.
foundation|基礎|base|Vocabulary provides a foundation for reading.
guidance|指導・助言|advice|Students need clear guidance.
independent|自立した|self-directed|Independent study builds confidence.
instruction|指示・授業|direction|Read the instructions carefully.
literacy|読み書き能力|reading and writing skills|Literacy is important in daily life.
motivation|意欲|desire to act|Motivation can change over time.
participate|参加する|take part|Many students participate in clubs.
performance|成績・能力の発揮|how well someone does|Sleep affects exam performance.
prior knowledge|事前知識|what you already know|Prior knowledge makes a text easier.
qualification|資格|certificate|The job requires a qualification.
revise|復習する・修正する|review|She revises vocabulary every evening.
scholarship|奨学金|study grant|He received a scholarship.
skill|技能|ability|Skimming is a useful reading skill.
strengthen|強化する|make stronger|Daily practice strengthens memory.
syllabus|学習範囲|course outline|The syllabus lists the main topics.
term|学期・用語|school period|The first term begins in April.
timetable|時間割|schedule|The new timetable starts next week.
tuition|授業・授業料|teaching|Tuition fees can be expensive.
undergraduate|大学学部生|first-degree student|The university has many undergraduates.
workload|作業量・学習量|amount of work|A heavy workload causes stress.
academic achievement|学業上の成果|school success|Regular study supports academic achievement.
critical thinking|批判的思考|careful judgement|Critical thinking helps evaluate claims.
learning environment|学習環境|study setting|A quiet learning environment may help.
drop out|中退する|leave a course early|Some learners drop out before graduation.
keep up with|〜についていく|stay at the same pace|She struggled to keep up with lessons.
pay attention to|〜に注意する|focus on|Pay attention to words such as although.
take into account|〜を考慮する|consider|We must take age into account.
in contrast to|〜とは対照的に|unlike|In contrast to cities, villages are quieter.
on the other hand|一方で|in contrast|The method is cheap; on the other hand, it is slow.
in addition to|〜に加えて|as well as|In addition to English, she studies French.
in terms of|〜の点では|regarding|The project succeeded in terms of cost.
with regard to|〜に関して|concerning|The report raises questions with regard to safety.
in the long term|長期的には|over time|The policy may help in the long term.
short-term|短期的な|temporary|The change has short-term benefits.
long-term|長期的な|lasting|Long-term planning is important.
on average|平均すると|typically|On average, students read for an hour.
approximately|およそ|about|Approximately 200 people attended.
roughly|おおよそ|around|The journey takes roughly two hours.
almost|ほとんど|nearly|Almost half the group agreed.
slightly|わずかに|a little|The rate increased slightly.
sharply|急激に|quickly and greatly|Prices rose sharply.
steadily|着実に|at a regular pace|The number grew steadily.
fluctuate|変動する|rise and fall|Temperatures fluctuate each day.
remain stable|安定したままである|stay unchanged|The figures remained stable.
reach a peak|最高点に達する|hit the highest point|Sales reached a peak in July.
fall below|〜を下回る|drop under|The figure fell below 20%.
rise above|〜を上回る|increase beyond|Demand rose above supply.
the majority of|〜の大多数|most of|The majority of students preferred the new plan.
a minority of|〜の少数|a small group of|A minority of respondents disagreed.
twice as many|2倍の数|double the number|Twice as many people chose buses.
remain unchanged|変化しないままである|stay the same|The total remained unchanged.
make up|〜を構成する|form|Women make up half the team.
account for a share|割合を占める|represent a part|Cars account for a large share of travel.
respectively|それぞれ|in the stated order|The figures were 10 and 20, respectively.
overall|全体として|in general|Overall, the results were positive.
by comparison|比較すると|in contrast|By comparison, the second method was cheaper.
in particular|特に|especially|One result was important in particular.
for instance|例えば|for example|Some animals, for instance whales, migrate.
such as|〜のような|for example|Cities need services such as transport.
namely|すなわち|that is|One factor matters, namely cost.
in other words|言い換えると|put differently|In other words, the plan did not work.
in spite of|〜にもかかわらず|despite|In spite of the rain, the event continued.
despite|〜にもかかわらず|in spite of|Despite the cost, the project went ahead.
even though|〜なのに|although|Even though it was late, they continued.
provided that|〜という条件なら|if|You may enter provided that you register.
unless|〜でない限り|if not|The plant will die unless it gets water.
as long as|〜である限り|provided that|The device works as long as it has power.
whether or not|〜かどうかにかかわらず|regardless of whether|The lesson runs whether or not it rains.
regardless of|〜に関係なく|no matter|Everyone can join regardless of age.
therefore|したがって|so|The roads flooded; therefore, schools closed.
consequently|その結果|as a result|Demand fell; consequently, prices dropped.
owing to|〜のために|because of|Flights were delayed owing to fog.
lead to|〜につながる|cause|Too much waste can lead to pollution.
be associated with|〜と関連がある|be linked to|Exercise is associated with better sleep.
be linked to|〜に結びついている|be connected with|Smoking is linked to health risks.
be responsible for|〜の原因である・担当する|cause or manage|The council is responsible for the park.
play a role in|〜に役割を果たす|contribute to|Trees play a role in cooling streets.
have an impact on|〜に影響する|affect|Noise can have an impact on learning.
be likely to|〜しそうである|probably will|Older buildings are likely to need repairs.
be unlikely to|〜しそうにない|probably will not|The change is unlikely to happen soon.
be capable of|〜する能力がある|be able to|The device is capable of storing energy.
be exposed to|〜にさらされる|come into contact with|Workers may be exposed to dust.
be based on|〜に基づく|use as a foundation|The report is based on interviews.
be made up of|〜から構成される|consist of|The class is made up of 20 students.
consist of|〜で構成される|be composed of|The meal consists of vegetables and rice.
be divided into|〜に分けられる|be separated into|The report is divided into three sections.
in response to|〜に応じて|as a reaction to|The rule changed in response to complaints.
as opposed to|〜とは対照的に|rather than|The study used adults as opposed to children.
in comparison with|〜と比べて|compared with|In comparison with last year, sales fell.
to some extent|ある程度は|partly|To some extent, the idea worked.
to a large extent|大部分は|mostly|The success was to a large extent due to teamwork.
at the expense of|〜を犠牲にして|by harming|Growth came at the expense of forests.
in favour of|〜を支持して|supporting|Most voters were in favour of the plan.
in place of|〜の代わりに|instead of|Use trains in place of cars.
in the absence of|〜がない場合|without|In the absence of rain, crops failed.
in relation to|〜との関係で|concerning|The results vary in relation to age.
in accordance with|〜に従って|following|Work was done in accordance with the rules.
be subject to|〜の対象となる|be affected by|The price is subject to change.
accountability|説明責任|responsibility|Public officials need accountability.
allocate|割り当てる|distribute|The government allocated funds to schools.
authority|権限・当局|official power|The local authority manages the roads.
ban|禁止する|prohibit|The city banned some plastic bags.
budget|予算|spending plan|The library has a limited budget.
campaign|運動・活動|organised effort|The campaign encourages recycling.
citizen|市民|member of a country|Citizens can vote in elections.
community|地域社会|local group|The community supported the project.
comply with|〜を守る|follow|Factories must comply with safety rules.
conduct|実施する|carry out|The team conducted a survey.
consultation|協議|discussion|Public consultation began in June.
debate|議論する|discuss|Experts debate the new policy.
decision-making|意思決定|choosing actions|Data can improve decision-making.
enforce|施行する|make people obey|Police enforce traffic laws.
establish|設立する・確立する|set up|The council established a new service.
fund|資金を出す|finance|Taxes fund public transport.
implement|実施する|put into action|The school implemented a new policy.
initiative|新しい取り組み|new plan|A local initiative reduced litter.
legislation|法律|laws|New legislation protects wildlife.
measure|対策・測定する|action or assess|The city introduced safety measures.
monitor|監視・観察する|track|Officials monitor air quality.
objective evidence|客観的な証拠|unbiased proof|The decision needs objective evidence.
participation|参加|involvement|Public participation was high.
policy|方針・政策|official plan|The policy aims to reduce emissions.
priority|優先事項|main concern|Clean water is a priority.
proposal|提案|suggested plan|The proposal was approved.
public awareness|一般の認識|people's knowledge|The campaign raised public awareness.
reform|改革|change for improvement|The government announced education reform.
regulate|規制する|control by rules|Laws regulate food safety.
resource|資源|useful supply|Water is a limited resource.
restrict|制限する|limit|The new rule restricts parking.
revenue|収入|income|Ticket sales provide revenue.
subsidy|補助金|financial support|Farmers received a subsidy.
survey|調査|questionnaire study|A survey asked 300 residents.
taxation|課税|collecting taxes|Taxation pays for public services.
transparent|透明な・明確な|open and clear|The process should be transparent.
voluntary|自発的な|optional|Participation is voluntary.
public sector|公共部門|government services|The public sector employs teachers.
private sector|民間部門|businesses|The private sector invested in the project.
under pressure|圧力を受けて|stressed|Hospitals are under pressure in winter.
address a problem|問題に取り組む|deal with an issue|The plan aims to address the problem.
raise awareness|認識を高める|make people aware|Posters raise awareness of recycling.
take measures|対策を講じる|act|Authorities took measures to improve safety.
access to|〜を利用できること|ability to use|Some villages lack access to clean water.
affordable|手頃な価格の|not too expensive|The town needs affordable housing.
amenity|生活に便利な施設|useful local facility|Parks are valuable urban amenities.
commute|通勤・通学する|travel to work|Many people commute by train.
congestion|混雑|crowding|Traffic congestion increases travel time.
density|密度|amount per area|Population density is high here.
development|開発・発展|growth|New development changed the district.
district|地区|area|The shopping district is busy.
dwelling|住居|home|The survey counted 500 dwellings.
housing|住宅|places to live|Housing costs have risen.
inequality|不平等|unequal conditions|Income inequality has increased.
land use|土地利用|use of land|Land use changes as cities grow.
pedestrian|歩行者|person walking|The crossing protects pedestrians.
population growth|人口増加|increase in people|Population growth affects schools.
public transport|公共交通|buses and trains|Good public transport reduces car use.
rural|田舎の|countryside|Rural communities may have fewer services.
suburb|郊外|area outside city centre|Families moved to the suburbs.
urban|都市の|city-related|Urban areas need green space.
urbanisation|都市化|growth of cities|Urbanisation changes land use.
walkable|歩いて移動しやすい|easy to walk around|Walkable streets encourage exercise.
workforce|労働力|workers|The city has a young workforce.
commuter|通勤者|person travelling to work|Commuters arrived before nine.
infrastructure investment|インフラ投資|spending on basic systems|Infrastructure investment improved transport.
quality of life|生活の質|well-being|Parks may improve quality of life.
living standard|生活水準|level of comfort|Living standards improved.
social isolation|社会的孤立|lack of contact|Social isolation can affect older people.
social interaction|社会的交流|contact with others|Community events support social interaction.
accessible to|〜に利用しやすい|easy for|The service is accessible to children.
make use of|〜を活用する|use|Residents make use of local parks.
cope with|〜に対処する|manage|Cities must cope with extreme heat.
deal with|〜に取り組む|handle|The council must deal with congestion.
at risk of|〜の危険がある|in danger of|Coastal houses are at risk of flooding.
adapt to|〜に適応する|adjust to|Animals adapt to changing conditions.
adaptation|適応|adjustment|Adaptation helps species survive.
biodiversity|生物多様性|variety of life|Forests support biodiversity.
carbon dioxide|二酸化炭素|CO2|Burning fuel releases carbon dioxide.
climate|気候|usual weather pattern|The region has a dry climate.
conservation|保全|protection|Conservation projects protect habitats.
contamination|汚染|pollution|Water contamination threatens health.
deforestation|森林破壊|cutting down forests|Deforestation removes animal habitats.
drought|干ばつ|long dry period|The drought damaged crops.
ecosystem|生態系|living system|A forest is a complex ecosystem.
emission|排出物|release|Vehicle emissions affect air quality.
endangered|絶滅危惧の|at risk of extinction|The turtle is endangered.
erosion|侵食|wearing away|Heavy rain causes soil erosion.
extinct|絶滅した|no longer existing|Some species became extinct.
fossil fuel|化石燃料|coal oil or gas|Fossil fuels produce emissions.
habitat|生息地|natural home|Wetlands provide bird habitat.
landfill|埋立地|waste disposal site|Rubbish is sent to landfill.
pollutant|汚染物質|harmful substance|Factories release pollutants.
renewable|再生可能な|naturally replaceable|Wind is a renewable energy source.
restoration|復元・修復|bringing back|Wetland restoration takes time.
sustainable|持続可能な|able to continue|Sustainable farming protects soil.
threat|脅威|danger|Warming is a threat to coral.
toxic|有毒な|poisonous|Some chemicals are toxic.
wastewater|廃水|used water|Wastewater must be treated.
wildlife|野生生物|wild animals|The reserve protects wildlife.
ecological|生態学的な|related to ecosystems|The project has ecological benefits.
environmental impact|環境への影響|effect on nature|The factory's environmental impact was assessed.
natural resource|天然資源|material from nature|Water is a natural resource.
carbon footprint|二酸化炭素排出量の目安|emissions measure|Flying increases a traveller's carbon footprint.
greenhouse gas|温室効果ガス|heat-trapping gas|Carbon dioxide is a greenhouse gas.
recycle|再利用のために処理する|process for reuse|Glass can be recycled.
reuse|再使用する|use again|Some bottles can be reused.
runoff|地表を流れる雨水|surface water flow|Heavy rain produces runoff.
soil fertility|土壌の肥沃さ|ability to support plants|Compost improves soil fertility.
water scarcity|水不足|lack of water|Water scarcity affects farms.
water treatment|水処理|cleaning water|Water treatment removes harmful material.
weather conditions|天候条件|state of weather|Weather conditions affect travel.
protect against|〜から守る|defend from|Trees protect soil against erosion.
preserve|保存・保護する|keep safe|The group aims to preserve forests.
respond to climate change|気候変動に対応する|adapt to warming|Cities must respond to climate change.
physical activity|身体活動|exercise|Walking increases physical activity.
anxiety|不安|worry|Exams can cause anxiety.
appetite|食欲|desire to eat|Illness can reduce appetite.
balanced diet|バランスの良い食事|healthy range of foods|A balanced diet supports health.
chronic|慢性的な|long-lasting|Chronic stress affects sleep.
diagnosis|診断|identification of illness|Early diagnosis may help treatment.
disorder|障害・疾患|health condition|Sleep disorders affect many people.
immune system|免疫系|body defence|Sleep supports the immune system.
infection|感染|illness from germs|Clean water reduces infection.
mental health|心の健康|emotional well-being|Social contact supports mental health.
nutrition|栄養|food and health|Good nutrition is important.
obesity|肥満|excess body fat|Obesity can increase health risks.
prevention|予防|stopping something|Prevention is often easier than treatment.
symptom|症状|sign of illness|Fever is a common symptom.
treatment|治療|medical care|Early treatment can help.
well-being|心身の健康|health and happiness|Parks may support well-being.
sedentary|座りがちな|not physically active|A sedentary lifestyle can affect health.
stress level|ストレスの程度|amount of stress|The survey measured stress levels.
life expectancy|平均余命|expected years of life|Life expectancy has increased.
healthcare|医療サービス|medical services|Rural areas need better healthcare.
public health|公衆衛生|community health|Vaccination supports public health.
recovery time|回復時間|time to recover|Recovery time differs among patients.
side effect|副作用|unwanted effect|Some medicines have side effects.
sleep deprivation|睡眠不足|lack of sleep|Sleep deprivation affects memory.
habit|習慣|regular behaviour|Reading is a useful habit.
moderate|適度な|not extreme|Moderate exercise can be helpful.
excessive|過度の|too much|Excessive screen time may affect sleep.
be beneficial to|〜に有益である|help|Daily movement can be beneficial to health.
be harmful to|〜に有害である|damage|Smoke can be harmful to lungs.
recover from|〜から回復する|get better after|She recovered from the illness.
be at greater risk|より高い危険にさらされる|face more danger|Older people may be at greater risk.
associated risk|関連する危険性|linked danger|Researchers examined associated risks.
artificial intelligence|人工知能|AI|Artificial intelligence can analyse images.
algorithm|アルゴリズム|set of rules|The algorithm sorts the results.
automation|自動化|use of machines|Automation can change jobs.
database|データベース|organised data store|The database contains records.
digital divide|デジタル格差|gap in technology access|The digital divide affects rural learners.
device|機器|equipment|Students use a digital device.
detect|検出する|find|Sensors detect movement.
develop|開発する|create|Engineers develop new tools.
efficient|効率的な|working with little waste|An efficient system saves power.
electricity grid|送電網|power network|The electricity grid connects towns.
encrypt|暗号化する|protect data with code|Apps encrypt private messages.
equipment|装置・設備|tools|The laboratory uses specialist equipment.
function|機能する|work|The device functions without batteries.
innovation in|〜における革新|new improvement|Innovation in farming saves water.
internet access|インターネット接続|connection to the web|Internet access varies by region.
machine learning|機械学習|learning from data|Machine learning can recognise patterns.
manual|手作業の|done by hand|Manual sorting takes time.
network|網・つながり|connected system|A network links computers.
privacy|プライバシー|control over personal information|Privacy matters when using apps.
prototype|試作品|early model|The team tested a prototype.
remote|遠隔の|far away|Remote learning uses video lessons.
sensor|センサー|measuring device|A sensor measures temperature.
software|ソフトウェア|computer program|The software records results.
technological change|技術的変化|technology development|Technological change affects employment.
upgrade|改善・更新する|improve|The school upgraded its computers.
virtual|仮想の|computer-based|Students entered a virtual classroom.
wireless|無線の|without cables|Wireless devices need a signal.
store information|情報を保存する|save data|The computer can store information.
process data|データを処理する|handle information|The system processes data quickly.
replace human workers|人間の労働者に取って代わる|substitute for people|Machines may replace human workers in some tasks.
rely on technology|技術に頼る|depend on devices|Many services rely on technology.
human error|人為的なミス|mistake by a person|Automation may reduce human error.
face-to-face|対面の|in person|Some learners prefer face-to-face lessons.
online platform|オンライン基盤|web service|The online platform hosts lessons.
user-friendly|使いやすい|easy to use|The app has a user-friendly design.
time-consuming|時間がかかる|taking much time|Manual checks are time-consuming.
cost-effective|費用対効果の高い|good value|The new system is cost-effective.
accessibility|利用しやすさ|ease of access|Accessibility is important in app design.
technical issue|技術的な問題|equipment problem|A technical issue delayed the class.
data protection|データ保護|keeping information safe|The company improved data protection.
be replaced by|〜に置き換えられる|give way to|Old equipment may be replaced by new machines.
adapt rapidly|急速に適応する|adjust quickly|Businesses must adapt rapidly.
agriculture|農業|farming|Agriculture uses large amounts of water.
crop|作物|farm plant|Rice is an important crop.
cultivation|栽培|growing plants|Rice cultivation requires water.
fertiliser|肥料|plant nutrient|Fertiliser can improve yields.
harvest|収穫する|collect crops|Farmers harvest wheat in summer.
livestock|家畜|farm animals|Livestock need clean water.
pesticide|農薬|pest-killing chemical|Some pesticides affect insects.
yield|収穫量|crop output|The drought reduced crop yields.
food security|食料安全保障|reliable food supply|Food security is a global concern.
malnutrition|栄養不良|poor nutrition|Malnutrition affects child growth.
distribution|流通・配分|delivery|Food distribution is difficult in remote areas.
retailer|小売業者|shop seller|Retailers sometimes reject damaged packages.
consumer|消費者|buyer|Consumers choose affordable products.
producer|生産者|maker|Local producers sell fresh vegetables.
expiration date|消費期限|use-by date|Check the expiration date on the label.
preservation|保存|keeping fresh|Food preservation reduces waste.
portion|一人前・部分|serving|Restaurants can offer smaller portions.
surplus|余剰|extra supply|The farm donated surplus food.
shortage|不足|lack|The country faced a wheat shortage.
supply|供給|amount available|The supply of rice increased.
trade-off|一方を得るための犠牲|compromise|There is a trade-off between cost and quality.
transport costs|輸送費|delivery expenses|Transport costs increase prices.
organic farming|有機農業|farming without certain chemicals|Organic farming can be labour-intensive.
soil quality|土の質|condition of soil|Poor soil quality reduces yields.
food processing|食品加工|preparing food in factories|Food processing uses water and energy.
farm productivity|農業生産性|farm output per input|New tools improved farm productivity.
meet demand|需要を満たす|satisfy needs|Farmers must meet demand for food.
go to waste|無駄になる|be thrown away|Fresh produce may go to waste.
cut down on|〜を減らす|reduce|Families can cut down on food waste.
be suitable for|〜に適している|fit for|The soil is suitable for rice.
ancient civilisation|古代文明|early complex society|The site belonged to an ancient civilisation.
archaeological|考古学の|related to ancient remains|Archaeological evidence reveals trade.
archive|記録保管所|record collection|The archive contains old letters.
chronology|年代順|time order|Chronology helps explain events.
colony|植民地|controlled territory|The island became a colony.
cultural exchange|文化交流|sharing traditions|Trade encouraged cultural exchange.
excavation|発掘|digging for remains|The excavation revealed pottery.
heritage|遺産|inherited culture|The town protects its heritage.
historical record|歴史資料|document from the past|Historical records mention the city.
inscription|碑文・刻まれた文字|written marks|The inscription names a king.
merchant|商人|trader|Merchants travelled by sea.
monument|記念碑・遺跡|important structure|The monument is centuries old.
origin|起源|beginning|The object has an uncertain origin.
preserved|保存された|kept safe|The preserved documents are fragile.
ritual|儀式|ceremony|The community performed a ritual.
settlement|定住地|place people live|The settlement grew near the river.
trade route|交易路|path for goods|The trade route crossed mountains.
translation|翻訳|change of language|The translation was incomplete.
transportation|輸送|movement of goods|Transportation costs influenced trade.
valuable|価値のある|worth much|The artefact was valuable.
evidence suggests|証拠は〜を示唆する|findings indicate|Evidence suggests the town was a port.
date back to|〜までさかのぼる|originate in|The temple dates back to the 12th century.
pass down|受け継ぐ|transmit|Stories were passed down through families.
be traced to|〜に起源をたどれる|be linked back to|The custom can be traced to early settlers.
interpretation|解釈|explanation|Historians disagree over the interpretation.
historian|歴史学者|history researcher|The historian studied trade records.
archaeologist|考古学者|ancient-remains researcher|An archaeologist examined the site.
discovery|発見|finding|The discovery changed the theory.
evolution|進化・発展|gradual change|The evolution of language takes centuries.
traditional practice|伝統的な慣習|old custom|The festival preserves traditional practices.
economic growth|経済成長|expansion of economy|Economic growth increased incomes.
employment|雇用|jobs|The factory provides employment.
unemployment|失業|lack of work|Unemployment rose after the closure.
income|収入|earnings|Household income affects spending.
expenditure|支出|spending|Education expenditure increased.
investment|投資|money for future returns|Public investment funded the railway.
inflation|物価上昇|general price rise|Inflation makes goods more expensive.
interest rate|金利|cost of borrowing|Higher interest rates affect loans.
loan|融資・借金|borrowed money|The company took out a loan.
profit|利益|money gained|The business made a profit.
loss|損失|money lost|The shop reported a loss.
market|市場|place for trade|Demand affects the market.
competition|競争|rivalry|Competition may lower prices.
industry|産業|economic sector|Tourism is an important industry.
manufacturing|製造業|making products|Manufacturing employs many workers.
service sector|サービス業|service industries|The service sector grew.
labour|労働|work|Some jobs require skilled labour.
productivity|生産性|output per effort|Training can improve productivity.
purchase|購入する|buy|Many families purchase food online.
consumer behaviour|消費者行動|how buyers act|Advertising affects consumer behaviour.
household|世帯|people living together|Household spending varies.
poverty|貧困|being very poor|Education may help reduce poverty.
wealth|富|money and assets|Wealth is unevenly distributed.
trade|貿易|buying and selling|International trade increased.
export|輸出する|sell abroad|The country exports rice.
import|輸入する|buy from abroad|The country imports fuel.
scarce|不足している|in short supply|Clean water is scarce.
economy|経済|system of trade|The economy grew slowly.
financial support|金銭的支援|funding help|Students may need financial support.
price rise|値上がり|increase in cost|The price rise affected families.
cost of living|生活費|daily expenses|The cost of living is rising.
afford|〜を買う余裕がある|be able to pay|Some families cannot afford a car.
be in demand|需要がある|be wanted|Nurses are in demand.
benefit from|〜から利益を得る|gain from|Local shops benefit from tourism.
depend heavily on|〜に大きく依存する|rely strongly on|The island depends heavily on tourism.
economic pressure|経済的圧力|financial strain|High rents create economic pressure.
employment opportunities|雇用機会|job chances|The town offers few employment opportunities.
income gap|所得格差|difference in earnings|The income gap widened.
generate income|収入を生む|earn money|Tourism can generate income.
economic activity|経済活動|business and trade|The festival increased economic activity.
sample|標本・調査対象|small selected group|The study used a sample of 200 people.
participant|参加者|person taking part|Every participant completed a form.
variable|変数・変化する要素|factor that changes|Age was an important variable.
control group|対照群|comparison group|The control group did not receive treatment.
experiment|実験|scientific test|The experiment lasted six weeks.
hypothesis|仮説|idea to test|The scientists tested a hypothesis.
observation|観察|what is noticed|The study recorded daily observations.
measurement|測定|quantifying|Accurate measurement is important.
questionnaire|アンケート|written survey|Participants completed a questionnaire.
interview|面接・聞き取り|spoken questions|The team used interviews.
qualitative|質的な|descriptive|Qualitative research explores experiences.
quantitative|量的な|numerical|Quantitative research uses numbers.
findings|研究結果|results|The findings support the theory.
conclusion|結論|final judgement|The conclusion needs evidence.
limitation|限界|weakness|A small sample is a limitation.
bias|偏り|unfair influence|Bias can affect research.
random|無作為の|by chance|Participants were chosen at random.
representative|代表的な|typical of a group|The sample may not be representative.
peer review|専門家による審査|expert checking|Peer review checks research quality.
replicate|再現する|repeat a study|Other teams tried to replicate the results.
correlation|相関関係|link between variables|Correlation does not always mean causation.
causation|因果関係|cause and effect|The study did not prove causation.
uncertainty|不確実性|lack of certainty|The report describes uncertainty.
margin of error|誤差の範囲|possible inaccuracy|The poll has a margin of error.
statistically significant|統計的に有意な|unlikely due to chance|The difference was statistically significant.
interpret the results|結果を解釈する|explain findings|Experts interpret the results carefully.
draw a conclusion|結論を出す|decide from evidence|Do not draw a conclusion too soon.
conduct research|研究を行う|carry out a study|The university conducts research.
collect evidence|証拠を集める|gather proof|Investigators collect evidence.
support a claim|主張を裏付ける|back an argument|The data support the claim.
challenge an assumption|思い込みに疑問を呈する|question a belief|New evidence challenged an assumption.
rule out|可能性を除外する|exclude|The test ruled out several causes.
be consistent with|〜と一致する|agree with|The finding is consistent with earlier work.
inconsistent|一致しない|not matching|The results were inconsistent.
the extent to which|〜がどの程度か|how much|The study examined the extent to which sleep affects memory.
distinguish between|〜を区別する|tell apart|Distinguish between fact and opinion.
according to|〜によれば|as stated by|According to the report, demand rose.
the author argues|筆者は〜と論じる|writer claims|The author argues that change is necessary.
the passage states|本文は〜と述べる|text says|The passage states that the trial was short.
there is no evidence|証拠がない|proof is absent|There is no evidence of a direct cause.
cannot be inferred|推測できない|not supported by text|The exact number cannot be inferred.
not mentioned|言及されていない|not stated|The price is not mentioned.
contradict|矛盾する|oppose|The figures contradict the claim.
confirm|確認する|verify|The experiment confirmed the result.
suggest|示唆する|indicate|The results suggest a link.
state explicitly|明確に述べる|say directly|The writer states explicitly that costs rose.
refer to|〜に言及する|mention|The paragraph refers to urban parks.
main idea|主旨|central point|Find the main idea of each paragraph.
supporting detail|補足情報|extra evidence|The second sentence gives a supporting detail.
topic sentence|主題文|main sentence|The topic sentence introduces the idea.
paraphrase|言い換える|express differently|IELTS questions often paraphrase the passage.
keyword|重要語|important word|Underline the keyword in the question.
scan for|〜を探し読みする|search quickly|Scan for names and dates.
skim|ざっと読む|read quickly for gist|Skim the text before answering.
infer|推測する|conclude from clues|Infer the meaning from context.
implied meaning|暗示された意味|suggested sense|The implied meaning is not stated directly.
literal meaning|文字通りの意味|direct sense|The literal meaning differs from the idiom.
opinion|意見|personal view|The sentence expresses an opinion.
fact|事実|verified information|Separate fact from opinion.
statement|記述・主張|sentence or claim|Decide whether the statement agrees.
heading|見出し|section title|Match each heading to a paragraph.
summary|要約|short account|Complete the summary using the text.
locate|見つける|find|Locate the evidence before choosing.
evidence line|根拠の一文|sentence with proof|Read the evidence line again.
question type|問題形式|kind of question|Different question types need different strategies.
multiple choice|選択式問題|choose an option|Multiple choice requires careful reading.
matching headings|見出しの組み合わせ|heading task|Matching headings tests main ideas.
true false not given|正誤・記載なし|TFNG task|True False Not Given depends on the text.
not given|本文に情報なし|not stated|Choose Not Given if the text is silent.
false statement|本文と矛盾する文|contradiction|A false statement contradicts the text.
true statement|本文と一致する文|agreement|A true statement matches the text.
avoid guessing|当て推量を避ける|use evidence|Avoid guessing from general knowledge.
read carefully|注意深く読む|examine the wording|Read carefully when you see all or always.
under time pressure|時間のプレッシャーの下で|with little time|Students read under time pressure.
manage time|時間を管理する|use time wisely|Manage time across the three passages.
double-check|再確認する|check again|Double-check your spelling.
change your answer|答えを変更する|revise a choice|Change your answer only with a reason.
eliminate options|選択肢を消去する|remove wrong answers|Eliminate options that contradict the text.
find supporting evidence|裏付けを探す|locate proof|Find supporting evidence for every answer.
misinterpret|誤解する|understand wrongly|Readers may misinterpret a complex sentence.
sentence structure|文の構造|grammar pattern|Sentence structure helps reveal the meaning.
relative clause|関係詞節|who which clause|A relative clause adds information.
passive voice|受動態|be plus past participle|The passive voice focuses on an action.
conditional|条件文|if sentence|A conditional explains a possible situation.
negation|否定|not or no|Negation can reverse the meaning.
comparison|比較|looking at differences|The comparison uses more than.
contrast marker|対比の合図語|however although|However is a contrast marker.
cause and effect|原因と結果|reason and result|Identify cause and effect in the paragraph.
exception|例外|case outside a rule|The text mentions one exception.
qualifier|限定表現|word limiting a claim|Some is an important qualifier.
hedging|断定を避ける表現|cautious language|May is common in academic hedging.
possibility|可能性|chance|The writer describes a possibility.
certainty|確実性|being sure|The evidence does not provide certainty.
likely|可能性が高い|probable|Rain is likely tomorrow.
possible|可能な|may happen|Several explanations are possible.
unlikely|可能性が低い|improbable|The result is unlikely to change.
not all|すべてが〜というわけではない|some may not|Not all students learn in the same way.
only a few|ほんの少数|very small number|Only a few respondents disagreed.
at least|少なくとも|no fewer than|At least 30 people joined.
at most|多くても|no more than|At most ten people can enter.
no longer|もはや〜ない|not anymore|The bridge is no longer used.
previously|以前は|before|The site was previously a farm.
subsequently|その後|later|The policy was subsequently revised.
meanwhile|その間に|at the same time|Meanwhile, other teams collected data.
initially|最初は|at first|Initially, the plan seemed expensive.
eventually|最終的に|in the end|The town eventually built a library.
currently|現在は|at present|The station is currently closed.
frequently|頻繁に|often|This phrase frequently appears in reports.
rarely|めったに〜ない|not often|The species is rarely seen.
occasionally|時々|sometimes|The machine occasionally stops.
predominantly|主として|mainly|The area is predominantly residential.
relatively|比較的|in comparison|The method is relatively cheap.
substantially|大幅に|considerably|The new design substantially reduced costs.
potentially|潜在的に|possibly|The change is potentially useful.
apparently|見たところ|seemingly|The two results are apparently similar.
arguably|議論の余地はあるが|possibly|This is arguably the most useful approach.
conversely|逆に|in contrast|Some prices rose; conversely, others fell.
alternatively|別の方法として|instead|Alternatively, students can take the train.
simultaneously|同時に|at the same time|Two events happened simultaneously.
increasingly|ますます|more and more|People increasingly use digital services.
widely|広く|broadly|The method is widely used.
commonly|一般に|usually|The term is commonly used in science.
primarily|主として|mainly|The project is primarily for students.
partially|部分的に|not completely|The road was partially closed.
entirely|完全に|completely|The idea is not entirely new.
exclusively|〜だけに|only|The course is exclusively for adults.
merely|単に|only|The figure is merely an estimate.
otherwise|さもなければ|if not|Leave early; otherwise, you may miss the train.
thus|したがって|therefore|The sample was small; thus, conclusions are limited.
nonetheless|それでも|nevertheless|The test was hard; nonetheless, she passed.
furthermore|さらに|moreover|The plan is cheap; furthermore, it saves time.
moreover|そのうえ|in addition|The device is light; moreover, it is efficient.
notably|特に注目すべきことに|particularly|Notably, the second group improved.
specifically|具体的には|in detail|The report focuses specifically on teenagers.
indeed|実際に|in fact|The difference was indeed significant.
generally|一般的に|usually|The method is generally effective.
typically|典型的には|usually|Typically, the school opens at eight.
ultimately|結局|in the end|Ultimately, the decision depends on cost.
consequent|結果として生じる|resulting|The consequent rise in prices affected families.
emerging|新たに現れた|developing|Emerging technology changes work.
existing|既存の|already present|Existing rules may need revision.
former|以前の|previous|The former factory is now a museum.
latter|後者|second of two|Of the two methods, the latter is faster.
prior to|〜より前に|before|Prior to the test, she revised vocabulary.
following|〜の後に|after|Following the storm, roads were closed.
throughout|〜の間ずっと・全域に|across|Rain continued throughout the night.
within|〜以内に|inside a limit|Results arrived within a week.
beyond|〜を超えて|outside|The changes extend beyond the city.
among|〜の間で|within a group|The opinion was common among teenagers.
between|〜の間で|separating two|The difference between the groups was small.
approximately equal|ほぼ等しい|nearly the same|The totals were approximately equal.
in excess of|〜を超える|more than|Costs were in excess of £1,000.
less than half|半分未満|under fifty percent|Less than half of the group agreed.
more than double|2倍超|over twice|The number more than doubled.
a gradual rise|緩やかな増加|slow increase|The chart shows a gradual rise.
a dramatic fall|急激な減少|sharp drop|The graph shows a dramatic fall.
little change|ほとんど変化なし|small difference|There was little change in the total.
the figure for|〜の数値|number relating to|The figure for Japan increased.
the number of|〜の数|count of|The number of visitors doubled.
the amount of|〜の量|quantity of|The amount of water decreased.
the rate of|〜の率|speed or proportion|The rate of growth slowed.
the percentage of|〜の割合|percent share|The percentage of cyclists rose.
the level of|〜の水準|amount or degree|The level of pollution fell.
a higher proportion|より高い割合|greater share|A higher proportion used buses.
a small increase|わずかな増加|slight rise|There was a small increase in demand.
a steady decline|着実な減少|regular fall|The chart shows a steady decline.
remain constant|一定のままである|stay fixed|The temperature remained constant.
vary considerably|かなり異なる|differ greatly|Costs vary considerably by region.
roughly half|約半分|about fifty percent|Roughly half the respondents agreed.
one in three|3人に1人|a third|One in three students walked to school.
as many as|多いと〜も|up to|As many as 100 people joined.
as few as|少ないと〜だけ|only|As few as five people attended.
twice the rate|2倍の率|double the proportion|The second group had twice the rate.
the remaining|残りの|the rest|The remaining students chose trains.
an upward trend|上昇傾向|rising pattern|The chart shows an upward trend.
a downward trend|下降傾向|falling pattern|The data show a downward trend.
be followed by|〜が続く|come next|The rise was followed by a decline.
level off|横ばいになる|stop rising|Sales levelled off in August.
bottom out|底を打つ|reach the lowest point|Prices bottomed out in March.
peak at|〜で最高になる|reach maximum|Demand peaked at 90 units.
drop to|〜まで下がる|fall to|The total dropped to 15.
increase by|〜だけ増える|rise by an amount|The total increased by 20.
increase to|〜まで増える|reach a number|The total increased to 80.
decrease by|〜だけ減る|fall by an amount|Costs decreased by 10%.
decrease to|〜まで減る|reach a lower number|Costs decreased to £50.
compared with|〜と比べて|in comparison with|Compared with 2020, sales were higher.
over the period|その期間にわたって|during the time|Prices fell over the period.
from then on|それ以降|after that|From then on, demand remained stable.
at the beginning of|〜の初めに|at the start|At the beginning of the year, sales were low.
at the end of|〜の終わりに|at the finish|At the end of the year, sales rose.
in the meantime|その間に|meanwhile|In the meantime, costs increased.
over time|時間とともに|gradually|The meaning changed over time.
in recent years|近年|lately|In recent years, cycling has become popular.
for the time being|当面は|temporarily|For the time being, the library is closed.
at present|現在|now|At present, the results are uncertain.
in the future|将来|later|The town plans to expand in the future.
as a whole|全体として|overall|The class as a whole improved.
in general|一般的に|overall|In general, prices increased.
in summary|要約すると|to sum up|In summary, the changes were positive.
in conclusion|結論として|finally|In conclusion, more study is needed.
above all|何よりも|most importantly|Above all, the evidence must be reliable.
first and foremost|何より第一に|most importantly|First and foremost, students need rest.
at the same time|同時に|meanwhile|Costs fell at the same time.
in turn|それがさらに|as a consequence|Lower costs may, in turn, increase demand.
as such|そのため|therefore|The evidence is limited; as such, caution is needed.
by contrast|対照的に|conversely|By contrast, the second group improved.
in comparison|比較すると|by contrast|In comparison, the first method was slower.
on the contrary|それどころか|quite the opposite|It did not fail; on the contrary, it succeeded.
even so|それでも|nevertheless|The work was difficult; even so, they finished.
all the same|それでも|nevertheless|It was expensive; all the same, they bought it.
for this reason|この理由で|therefore|For this reason, the school changed its rules.
as a consequence|結果として|as a result|Rain fell; as a consequence, roads flooded.
in consequence|その結果|therefore|The service closed; in consequence, travel became harder.
in light of|〜を考慮すると|considering|In light of new evidence, the plan changed.
given that|〜ということを考えると|considering that|Given that time is short, start now.
assuming that|〜と仮定すると|if|Assuming that costs fall, demand may rise.
on condition that|〜を条件として|provided that|You may join on condition that you register.
in case of|〜の場合に|if there is|In case of fire, use the stairs.
in the event of|〜が起きた場合|if|In the event of flooding, follow warnings.
by means of|〜によって|using|Scientists measured heat by means of sensors.
with the help of|〜の助けで|using assistance|She improved with the help of her teacher.
in order to|〜するために|so as to|They planted trees in order to reduce heat.
so that|〜するように|in order that|The text is clear so that everyone can read it.
with the aim of|〜を目的に|intending to|The project began with the aim of saving energy.
for the purpose of|〜を目的として|to|Data were collected for the purpose of research.
in an effort to|〜しようとして|trying to|The town acted in an effort to reduce waste.
with respect to|〜に関して|regarding|The results differ with respect to age.
as regards|〜については|concerning|As regards cost, the second method is better.
concerning|〜に関して|about|The report gives information concerning safety.
in connection with|〜に関連して|related to|The police asked questions in connection with the event.
in association with|〜と協力して・関連して|together with|The school worked in association with a charity.
involving|〜を含む|including|The study involved 80 students.
including|〜を含めて|with|Several cities, including Osaka, joined.
excluding|〜を除いて|without|The price is £10, excluding tax.
apart from|〜を除けば・加えて|except for|Apart from the cost, the plan is useful.
except for|〜を除いて|excluding|Everyone agreed except for one person.
other than|〜以外の|except|There was no option other than waiting.
in addition|さらに|also|In addition, the method is cheap.
as well as|〜だけでなく|and also|The course teaches reading as well as writing.
not only but also|〜だけでなく〜も|both|The plan is not only cheap but also effective.
both and|〜も〜も|two together|Both teachers and students agreed.
either or|〜か〜のどちらか|one of two|Choose either the first or the second option.
neither nor|〜も〜もない|not either|Neither method nor result was reliable.
whether or|〜か〜か|if one or the other|We do not know whether costs will rise or fall.
as opposed to|〜とは対照的に|rather than|The data describe adults as opposed to children.
instead of|〜の代わりに|rather than|Use examples instead of memorising lists.
in preference to|〜より優先して|rather than|Many students chose trains in preference to buses.
on behalf of|〜を代表して|representing|She spoke on behalf of the class.
according to the data|データによると|as figures show|According to the data, sales rose.
the evidence indicates|証拠は〜を示す|findings suggest|The evidence indicates a small improvement.
the results reveal|結果は〜を明らかにする|findings show|The results reveal a clear pattern.
this suggests that|これは〜を示唆する|this indicates|This suggests that the strategy may work.
it is clear that|〜なのは明らか|obviously|It is clear that demand increased.
it appears that|〜のように見える|it seems|It appears that students prefer online lessons.
it is possible that|〜の可能性がある|perhaps|It is possible that the weather affected results.
there is a tendency to|〜する傾向がある|often|There is a tendency to spend more in winter.
be more likely than|〜より可能性が高い|more probable|Group A was more likely than Group B to improve.
be less likely than|〜より可能性が低い|less probable|Older cars are less likely than new ones to be efficient.
be influenced by|〜に影響される|be affected by|Choices may be influenced by friends.
be determined by|〜によって決まる|depend on|The cost is determined by distance.
be attributed to|〜が原因とされる|be explained by|The increase was attributed to better transport.
be caused by|〜によって起きる|result from|The delay was caused by rain.
result from|〜から生じる|be caused by|Damage can result from storms.
stem from|〜に由来する|come from|The problem stems from poor planning.
arise from|〜から生じる|result from|Difficulties arise from limited funding.
bring about|〜を引き起こす|cause|New laws may bring about change.
give rise to|〜を生じさせる|cause|Overcrowding can give rise to problems.
be dependent on|〜に依存する|rely on|The outcome is dependent on weather.
be independent of|〜に左右されない|not depend on|The method is independent of electricity.
be characteristic of|〜の特徴である|typical of|Heavy rain is characteristic of the season.
be typical of|〜に典型的である|common in|The behaviour is typical of teenagers.
be unique to|〜に固有である|only found in|The plant is unique to the island.
be common among|〜の間で一般的|frequent in|The habit is common among students.
be widespread|広く見られる|common|The practice is widespread.
be concentrated in|〜に集中している|located mainly in|Jobs are concentrated in cities.
be distributed across|〜に分布する|spread over|The species is distributed across the region.
be characterised by|〜を特徴とする|be marked by|The climate is characterised by heavy rain.
be composed of|〜から構成される|consist of|The panel is composed of experts.
be regarded as|〜と見なされる|be seen as|The area is regarded as safe.
be considered|〜と考えられる|be thought|The method is considered effective.
be defined as|〜と定義される|mean|Literacy is defined as the ability to read and write.
be classified as|〜に分類される|be grouped as|The animal is classified as endangered.
be referred to as|〜と呼ばれる|be called|This process is referred to as recycling.
be known for|〜で知られる|be famous for|The region is known for its forests.
be found in|〜に見られる|exist in|The mineral is found in several countries.
be used for|〜に使われる|serve to|The tool is used for measuring heat.
be designed to|〜するよう設計される|be made to|The app is designed to help readers.
be intended to|〜を意図する|aim to|The policy is intended to reduce waste.
be aimed at|〜を対象・目的とする|target|The programme is aimed at teenagers.
be suitable for|〜に適する|be appropriate for|The lesson is suitable for beginners.
be relevant to|〜に関連する|be connected to|The example is relevant to the question.
be essential for|〜に不可欠である|be necessary for|Water is essential for life.
be sufficient for|〜に十分である|be enough for|The amount is sufficient for one day.
be inadequate for|〜には不十分である|not enough for|The funding was inadequate for the plan.
be limited to|〜に限られる|be restricted to|The trial was limited to adults.
be available to|〜が利用できる|be accessible to|The service is available to students.
be accessible by|〜でアクセスできる|can be reached by|The museum is accessible by train.
be vulnerable to|〜の影響を受けやすい|be at risk from|The reef is vulnerable to heat.
be resistant to|〜に耐性がある|withstand|The crop is resistant to drought.
be affected by|〜の影響を受ける|be influenced by|The harvest was affected by rain.
be involved in|〜に関与する|take part in|Volunteers are involved in research.
be engaged in|〜に従事する|take part in|Many workers are engaged in farming.
be aware of|〜を認識している|know about|Students should be aware of time limits.
be familiar with|〜に慣れている|know well|She is familiar with the question types.
be concerned about|〜を心配する|worry about|Residents are concerned about pollution.
be interested in|〜に関心がある|care about|She is interested in marine life.
be responsible for|〜に責任がある|be in charge of|The team is responsible for maintenance.
be compared to|〜と比較される|be likened to|The result was compared to earlier data.
be distinguished from|〜と区別される|be told apart from|Fact must be distinguished from opinion.
be accompanied by|〜を伴う|come with|The rise was accompanied by higher costs.
be followed by|〜の後に続く|come after|A decline was followed by recovery.
be replaced with|〜に置き換えられる|be substituted with|Old lights were replaced with LEDs.
be reduced by|〜だけ減らされる|be lowered by|Emissions were reduced by 15%.
be increased by|〜だけ増やされる|be raised by|Funding was increased by £1,000.
be measured in|〜の単位で測定される|use units of|Distance is measured in kilometres.
be expressed as|〜として表される|be shown as|The result is expressed as a percentage.
be represented by|〜で表される|be shown by|The trend is represented by a line.
be illustrated by|〜によって示される|be shown by|The idea is illustrated by the diagram.
be supported by|〜に裏付けられる|be backed by|The claim is supported by evidence.
be contradicted by|〜と矛盾する|be opposed by|The theory is contradicted by new findings.
be explained by|〜によって説明される|be accounted for by|The change may be explained by weather.
be influenced by factors|要因によって左右される|depend on conditions|The results are influenced by factors such as age.
be subject to change|変更される可能性がある|may change|The timetable is subject to change.
be carried out|実施される|be conducted|The survey was carried out in June.
be taken into consideration|考慮に入れられる|be considered|Cost must be taken into consideration.
be taken for granted|当然と考えられる|be assumed|Clean water is often taken for granted.
be taken seriously|真剣に受け止められる|be treated as important|The warning should be taken seriously.
be in decline|衰退中である|be decreasing|The population is in decline.
be on the rise|増加中である|be increasing|Online study is on the rise.
be under threat|脅威にさらされている|be endangered|The habitat is under threat.
be of importance|重要である|matter|The issue is of importance to residents.
be of benefit|有益である|be helpful|The change may be of benefit to students.
be of concern|懸念事項である|be worrying|The pollution level is of concern.
be in favour of|〜を支持している|support|Most voters are in favour of the proposal.
be opposed to|〜に反対している|disagree with|Some residents are opposed to the plan.
be in need of|〜を必要としている|need|The old bridge is in need of repair.
be in charge of|〜を担当している|manage|The team is in charge of the survey.
be in contact with|〜と接触している|communicate with|The school is in contact with parents.
be in danger of|〜の危険がある|be at risk of|The species is in danger of extinction.
be at the centre of|〜の中心にある|be central to|Transport is at the centre of the debate.
be a matter of|〜の問題である|be about|The decision is a matter of safety.
be a result of|〜の結果である|be caused by|The delay was a result of heavy rain.
be an example of|〜の例である|illustrate|This is an example of adaptation.
be a sign of|〜の兆候である|indicate|The change may be a sign of recovery.
be a source of|〜の原因・源となる|provide|Noise can be a source of stress.
be a barrier to|〜の障壁である|prevent|Cost can be a barrier to education.
be a threat to|〜への脅威である|endanger|Pollution is a threat to wildlife.
be an alternative to|〜の代替手段である|replace|Buses are an alternative to cars.
be in contrast with|〜と対照的である|differ from|The result is in contrast with earlier findings.
be in line with|〜と一致している|agree with|The data are in line with predictions.
be in conflict with|〜と衝突・矛盾する|disagree with|The new claim is in conflict with the evidence.
be in accordance with|〜に従っている|follow|The work was in accordance with the rules.
be consistent over time|長期にわたり一貫している|stay similar|The trend was consistent over time.
be effective in|〜に効果がある|work for|The method was effective in reducing waste.
be successful in|〜に成功する|achieve|The team was successful in raising funds.
be unable to|〜できない|cannot|The device was unable to detect movement.
be able to|〜できる|can|She was able to complete the task.
be expected to|〜すると予想される|probably will|Demand is expected to rise.
be predicted to|〜すると予測される|be forecast to|Temperatures are predicted to increase.
be assumed to|〜だと仮定される|be supposed|The method is assumed to be safe.
be estimated to|〜と推定される|be calculated roughly|The population is estimated to be 10,000.
be reported to|〜と報告されている|be said to|The figures are reported to be accurate.
be shown to|〜と示されている|be demonstrated to|Exercise was shown to improve sleep.
be found to|〜と分かった|be discovered to|The method was found to be effective.
be thought to|〜と考えられている|be believed to|The building is thought to be ancient.
be believed to|〜と信じられている|be thought to|The species is believed to be rare.
be considered likely|可能性が高いと考えられる|be probable|Further growth is considered likely.
be considered unlikely|可能性が低いと考えられる|be improbable|A quick recovery is considered unlikely.
be difficult to determine|判断が難しい|hard to establish|The exact cause is difficult to determine.
be impossible to confirm|確認できない|cannot verify|The date is impossible to confirm.
be open to interpretation|解釈の余地がある|have several meanings|The statement is open to interpretation.
be open to debate|議論の余地がある|be disputed|The policy's success is open to debate.
be worth considering|検討する価値がある|deserve thought|The alternative is worth considering.
be worth noting|注目に値する|be important to mention|It is worth noting that costs fell.
be of little use|ほとんど役に立たない|not helpful|The old data are of little use.
be of great value|非常に価値がある|be very useful|The findings are of great value.
be of limited value|価値・有用性が限られる|not very useful|The small sample is of limited value.
be essential to understand|理解することが不可欠|need to grasp|It is essential to understand the context.
be important to recognise|認識することが重要|need to notice|It is important to recognise the exception.
be necessary to examine|調べることが必要|need to inspect|It is necessary to examine the evidence.
be possible to infer|推測することが可能|can conclude|It may be possible to infer the cause.
be insufficient to prove|証明するには不十分|not enough to establish|The sample is insufficient to prove the claim.
be unable to account for|〜を説明できない|fail to explain|The theory is unable to account for the difference.
be closely related to|〜と密接な関係がある|strongly linked to|Sleep is closely related to memory.
be directly linked to|〜と直接結びつく|directly connected to|The change was directly linked to the policy.
be indirectly affected by|間接的に影響を受ける|be influenced through|Shops were indirectly affected by the storm.
be strongly influenced by|〜に強く影響される|depend heavily on|Results were strongly influenced by age.
be relatively independent|比較的独立している|less dependent|The system is relatively independent of weather.
be highly dependent on|〜に大きく依存する|rely heavily on|Solar output is highly dependent on sunlight.
be partly responsible for|〜の原因の一部である|contribute to|Traffic is partly responsible for pollution.
be mainly attributable to|主に〜が原因である|mostly result from|The decline is mainly attributable to cost.
be largely due to|大部分は〜が原因である|mostly because of|The loss was largely due to flooding.
be primarily caused by|主に〜によって引き起こされる|mainly result from|The problem was primarily caused by a shortage.
be one of several factors|複数要因の一つである|be one influence|Price is one of several factors.
be one possible explanation|考えられる説明の一つである|be a potential reason|Weather is one possible explanation.
be only a partial explanation|一部しか説明できない|not fully account for|The theory is only a partial explanation.
be supported to some extent|ある程度裏付けられている|partly supported|The claim is supported to some extent.
be clearly demonstrated|明確に示される|plainly shown|The difference was clearly demonstrated.
be difficult to generalise|一般化しにくい|hard to apply widely|Small studies may be difficult to generalise.
be consistent with earlier findings|以前の結果と一致する|agree with prior work|The result is consistent with earlier findings.
be inconsistent with the claim|主張と一致しない|contradict the statement|The data are inconsistent with the claim.
be open to further research|さらに研究の余地がある|need more study|The topic is open to further research.
be a promising approach|有望な方法である|look useful|The new method is a promising approach.
be a potential solution|解決策になる可能性がある|possible answer|Recycling may be a potential solution.
be a major obstacle|大きな障害である|serious barrier|Cost remains a major obstacle.
be a key contributor|主要な要因である|important cause|Transport is a key contributor to emissions.
be a significant proportion|かなりの割合である|large share|Students form a significant proportion of users.
be a relatively small share|比較的小さな割合である|minor proportion|Cyclists were a relatively small share.
be a matter of debate|議論の対象である|disputed issue|The cause is a matter of debate.
be subject to uncertainty|不確実性がある|not fully known|The prediction is subject to uncertainty.
be dependent on context|文脈によって決まる|vary by situation|Word meanings can be dependent on context.
be interpreted differently|異なる解釈がされる|be understood in different ways|The sentence can be interpreted differently.
be commonly misunderstood|よく誤解される|often misread|Not Given is commonly misunderstood.
be easily confused with|〜と混同しやすい|mistaken for|Affect is easily confused with effect.
be used interchangeably|同じ意味で使われる|used as synonyms|The terms are sometimes used interchangeably.
be used in a different sense|別の意味で使われる|have another meaning|The word is used in a different sense here.
be interpreted in context|文脈の中で解釈される|read with surrounding words|The phrase must be interpreted in context.
be read as a whole|全体として読む|consider together|The sentence should be read as a whole.
be broken into parts|部分に分解される|split up|The long sentence can be broken into parts.
be linked by a contrast word|逆接語でつながる|connected by however|The ideas are linked by a contrast word.
be qualified by|〜によって限定される|be limited by|The claim is qualified by the word some.
be weakened by|〜によって弱められる|made less certain|The argument is weakened by poor evidence.
be strengthened by|〜によって強められる|made more convincing|The claim is strengthened by new data.
be supported with examples|例で裏付けられる|illustrated|The idea is supported with examples.
be left unstated|明記されないままである|not mentioned|The exact number is left unstated.
be explicitly mentioned|明確に言及される|directly stated|The cost is explicitly mentioned.
be implied rather than stated|明言されず示唆される|suggested indirectly|The reason is implied rather than stated.
be contradicted in the passage|本文と矛盾する|oppose text|The claim is contradicted in the passage.
be absent from the text|本文に書かれていない|not included|The answer is absent from the text.
be supported by the passage|本文に裏付けられる|agree with text|The statement is supported by the passage.
be too strong a claim|断定が強すぎる|overstate|Always is often too strong a claim.
be more cautious than|〜より慎重な表現である|less certain|May is more cautious than must.
be different from|〜と異なる|not the same as|The result is different from the prediction.
be similar to|〜に似ている|resemble|The idea is similar to the earlier theory.
be the opposite of|〜の反対である|contrast with|Increase is the opposite of decrease.
be a synonym for|〜の同義語である|mean much the same|Rise can be a synonym for increase.
be a paraphrase of|〜の言い換えである|express the same idea|Due to is a paraphrase of because of.
be found in paragraph|段落に見つかる|appear in section|The answer can be found in paragraph B.
be supported by a sentence|一文で根拠が示される|have sentence evidence|The answer is supported by a sentence.
be unrelated to the question|問題と無関係である|not relevant|This detail is unrelated to the question.
be essential for accuracy|正確さに不可欠である|needed for correctness|Checking negatives is essential for accuracy.
be difficult to distinguish|区別が難しい|hard to tell apart|True and Not Given can be difficult to distinguish.
be easier to remember|覚えやすい|simpler to recall|Phrases in context are easier to remember.
be remembered through examples|例を通して覚えられる|learn in context|Words can be remembered through examples.
be reviewed regularly|定期的に復習される|revisited often|Vocabulary should be reviewed regularly.
be practised in context|文脈で練習される|used in sentences|New phrases should be practised in context.
be improved gradually|徐々に向上する|get better slowly|Reading ability can be improved gradually.
be developed through practice|練習で身に付く|grow with repetition|Comprehension is developed through practice.
be assessed fairly|公平に評価される|judged without bias|Work should be assessed fairly.
be corrected with feedback|講評によって修正される|improved with advice|Mistakes can be corrected with feedback.
be learned over time|時間をかけて身に付く|develop gradually|Academic vocabulary is learned over time.
be reinforced by repetition|反復によって定着する|strengthened by review|Memory is reinforced by repetition.
be tested under time limits|制限時間で試される|timed|Reading skills are tested under time limits.
be answered using evidence|根拠を使って答えられる|supported by text|Questions must be answered using evidence.
be checked for accuracy|正確さを確認される|verified|Answers should be checked for accuracy.
be explained in Japanese|日本語で説明される|clarified in Japanese|New phrases can be explained in Japanese.
be compared with the original|原文と比較される|checked against text|The answer should be compared with the original.
be useful for IELTS Reading|IELTSリーディングに役立つ|help reading tests|Paraphrases are useful for IELTS Reading.
be worth revising|復習する価値がある|deserve review|Mistaken words are worth revising.
be challenging at first|最初は難しい|initially hard|Long passages may be challenging at first.
be manageable in small steps|小さな段階なら取り組める|easier in parts|A long text is manageable in small steps.
be achievable with practice|練習で達成可能|possible through effort|Progress is achievable with practice.
be more than a guess|単なる推測以上の根拠がある|have evidence|A good answer must be more than a guess.
be based on the passage alone|本文だけに基づく|use only text|TFNG answers must be based on the passage alone.
be useful to remember|覚えておくと役立つ|worth learning|This phrase is useful to remember.
be repeated in different contexts|異なる文脈で繰り返される|reused across topics|A key word may be repeated in different contexts.
be confused by unfamiliar words|知らない語に戸惑う|struggle with vocabulary|Readers can be confused by unfamiliar words.
be guided by context clues|文脈の手掛かりで判断する|use nearby hints|Meaning can be guided by context clues.
be helped by paraphrases|言い換えが助けになる|use synonyms|Reading can be helped by paraphrases.
be able to explain why|理由を説明できる|justify|Try to be able to explain why an answer is true.
be ready for review|復習の準備ができている|prepared to revisit|The mistakes are ready for review.
be more confident with reading|読解により自信がある|feel surer|Practice helps her be more confident with reading.`;
const existingTerms=new Set(window.WORDS.map(x=>x.term.toLowerCase()));
const extraPool=extraRaw.trim().split('\n').map(line=>line.split('|')).filter(([term,jp,syn,example])=>{if(!term||!jp||!syn||!example||existingTerms.has(term.toLowerCase()))return false;existingTerms.add(term.toLowerCase());return true;});
// Evenly sample across all thematic packs; every candidate has been hand-glossed.
const selectedExtra=Array.from({length:400},(_,i)=>extraPool[Math.floor(i*extraPool.length/400)]);
const advancedRaw=`exacerbate|悪化させる|make worse|Drought may exacerbate water shortages.
mitigate|和らげる・軽減する|reduce the severity|Trees can mitigate extreme urban heat.
undermine|弱める・損なう|weaken|Poor evidence may undermine the argument.
disproportionately|不釣り合いなほど|to an unequal degree|Floods disproportionately affect poorer households.
plausible|もっともらしい|reasonable or believable|The explanation seems plausible.
tentative|暫定的な|not yet certain|Researchers reached a tentative conclusion.
ambiguous|曖昧な|unclear|The wording of the claim is ambiguous.
subsequent|その後の|later|Subsequent studies found similar results.
preceding|前の・先行する|earlier|The preceding paragraph explains the cause.
underlying|根底にある|basic or hidden|The report explores underlying causes.
inherent|本来備わっている|built-in|Every method has inherent limitations.
subtle|微妙な|not obvious|The two statements have a subtle difference.
compelling|説得力のある|convincing|The evidence presents a compelling case.
controversial|議論を呼ぶ|disputed|The new policy remains controversial.
feasible|実行可能な|practical|The proposal is technically feasible.
viable|実現可能な・持続できる|workable|The project needs a viable funding plan.
comprehensive|包括的な|complete and broad|A comprehensive survey covered many districts.
preliminary|予備的な|early|Preliminary results suggest improvement.
conclusive|決定的な|proving a point|The evidence is not conclusive.
negligible|無視できるほど小さい|very small|The change was negligible.
substantial|かなり大きい|considerable|The programme requires substantial resources.
scarcity|不足・希少性|shortage|Water scarcity threatens agriculture.
depletion|枯渇・減少|using up|Groundwater depletion is a serious concern.
degradation|劣化・悪化|deterioration|Soil degradation reduces productivity.
intervention|介入・対策|action to change a situation|Early intervention can prevent further damage.
constraint|制約|limitation|Funding is a major constraint.
discrepancy|食い違い|difference that should not exist|The two reports show a discrepancy.
inconsistency|不一致|lack of agreement|An inconsistency appeared in the figures.
attributable to|〜に起因する|caused by|Some changes were attributable to rainfall.
predominant|主な・支配的な|main|Cost was the predominant concern.
pervasive|広範囲に及ぶ|widespread|Plastic pollution is pervasive.
inevitable|避けられない|unavoidable|Some uncertainty is inevitable.
retain|保持する|keep|Wetlands retain rainwater.
enhance|高める|improve|Better lighting may enhance safety.
facilitate|容易にする|make easier|Technology can facilitate communication.
inhibit|妨げる|prevent or slow|Stress can inhibit learning.
accelerate|加速する|speed up|Warm temperatures can accelerate growth.
decelerate|減速する|slow down|Growth began to decelerate.
accumulate|蓄積する|build up|Pollutants may accumulate in soil.
disperse|分散する|spread out|Wind can disperse particles.
sustain|維持する|keep going|The scheme may sustain local employment.
fluctuation|変動|rise and fall|Daily fluctuations complicate planning.
threshold|しきい値・限界点|critical level|Damage rises above a temperature threshold.
prolonged|長期にわたる|lasting a long time|Prolonged heat can harm coral.
intermittent|断続的な|stopping and starting|Intermittent rainfall affected the trial.
consecutive|連続した|one after another|Three consecutive dry years reduced yields.
whereby|それによって〜する|by which|A system was created whereby water is reused.
inasmuch as|〜という点で|to the extent that|The plan helped inasmuch as it saved water.
albeit|〜ではあるが|although|The trial worked, albeit on a small scale.
notwithstanding|〜にもかかわらず|despite|Notwithstanding these limits, the results are useful.
insofar as|〜する限りにおいて|to the extent that|The claim is valid insofar as the data are accurate.
by virtue of|〜のおかげで・理由で|because of|The city cooled by virtue of its tree cover.
in conjunction with|〜と併せて|together with|The strategy works in conjunction with other measures.
in the wake of|〜の後を受けて|following|Rules changed in the wake of the flood.
attributed partly to|一部は〜に起因するとされる|partly explained by|The decline was attributed partly to migration.
to the detriment of|〜を犠牲にして|harming|Expansion occurred to the detriment of wildlife.
be contingent on|〜次第である|depend on|Success is contingent on continued funding.
fall short of|〜に届かない|fail to reach|The results fall short of expectations.
bear in mind|心に留める|remember|Bear in mind that correlation is not causation.
call into question|〜に疑問を投げかける|challenge|New data call the conclusion into question.`;
const advanced=advancedRaw.trim().split('\n').map(x=>x.split('|'));
selectedExtra.splice(340,advanced.length,...advanced);
window.WORDS.push(...selectedExtra.map(([term,jp,syn,example],offset)=>({id:100+offset,term,jp,syn,example,group:'IELTS expansion'})));

window.SENTENCES.push(
 {text:'Although the scheme reduced traffic in the city centre, it did not necessarily improve air quality in surrounding districts.',choices:['都心の交通量は減ったが、周辺地区の空気まで改善したとは限らない。','都心と周辺地区の交通量は必ず増えた。','周辺地区の空気は確実に改善した。'],correct:0,explain:'主節は it did not necessarily improve ...。「必ずしも改善しなかった」と読む。Although は譲歩、surrounding は「周辺の」。'},
 {text:'The researchers, whose earlier findings had been disputed, conducted a larger study to determine whether the pattern could be replicated.',choices:['以前の研究結果に異論があった研究者たちは、同じ傾向が再現するか調べるため規模の大きい研究を行った。','研究者は先行研究を一度も発表していない。','大規模研究ですべての異論が消えた。'],correct:0,explain:'whose earlier findings had been disputed は researchers の説明。to determine whether = 〜かどうかを確かめるため。'},
 {text:'The extent to which children benefit from outdoor learning appears to depend partly on the quality of the activities provided.',choices:['屋外学習の効果は活動内容の質にも一部左右されるようだ。','全ての子どもが同じ効果を必ず得る。','屋外学習の質は無関係だ。'],correct:0,explain:'The extent to which = どの程度〜か。主語が長いが動詞は appears。depend partly on = 一部は〜次第。'},
 {text:'Notwithstanding the apparent increase in productivity, managers warned that the figures might be misleading because fewer workers had been surveyed.',choices:['生産性が上がったように見えても、調査人数が減ったため数字が誤解を招くかもしれないと管理者は警告した。','調査人数が増えたので数字は完全に正しい。','管理者は生産性の低下を証明した。'],correct:0,explain:'Notwithstanding = despite。might be misleading は「誤解を招く可能性」。because 以下が理由。'},
 {text:'A decline in the number of complaints does not in itself demonstrate that the underlying problem has been resolved.',choices:['苦情の減少だけでは、根本問題が解決した証拠にはならない。','苦情が減ったので根本問題は確実に解決した。','苦情の数は増え続けている。'],correct:0,explain:'does not in itself demonstrate = それ自体では証明しない。that 節が証明されていない内容。'},
 {text:'Provided that maintenance is carried out regularly, the system is expected to remain effective for several decades.',choices:['定期的な保守が行われれば、システムは数十年間有効と見込まれる。','保守の有無にかかわらず必ず壊れる。','数十年の保守は不要だ。'],correct:0,explain:'Provided that = if。is expected to = 〜と予想される。受動態 maintenance is carried out。'},
 {text:'The policy may disproportionately affect households that rely on public transport, particularly those living beyond the urban centre.',choices:['特に都心から離れた公共交通依存世帯に、政策の影響が不釣り合いに大きい可能性がある。','公共交通を使わない世帯にだけ影響する。','全世帯への影響は必ず等しい。'],correct:0,explain:'that rely on public transport は households を修飾。particularly those = 特にそのような世帯。may は断定ではない。'},
 {text:'Rather than indicating a complete recovery, the rise may simply reflect a temporary change in consumer behaviour.',choices:['その増加は完全回復を示すのではなく、消費者行動の一時的変化を反映するだけかもしれない。','増加は完全回復を確実に証明する。','消費者の行動は全く変わっていない。'],correct:0,explain:'Rather than A, B は「AではなくB」。may simply reflect は「単に反映しているかもしれない」。'},
 {text:'Only when the data from several regions were combined did the researchers identify a statistically significant difference.',choices:['複数地域のデータを合わせて初めて、統計的に有意な差が見つかった。','どの地域でも最初から有意差が見つかった。','データを合わせた後、全ての差が消えた。'],correct:0,explain:'Only when が文頭に来る倒置：did the researchers identify。通常語順は researchers identified。'},
 {text:'While some commentators regard the intervention as successful, others argue that its long-term consequences remain uncertain.',choices:['介入を成功と見る人もいる一方、長期的影響はなお不明だと主張する人もいる。','全員が介入に反対している。','長期的影響は完全に確定した。'],correct:0,explain:'While = 一方で。regard A as B = AをBと見なす。remain uncertain = 不明のままである。'},
 {text:'The fact that a species survives in captivity does not imply that it can be reintroduced successfully into its natural habitat.',choices:['飼育下で生き残ることは、自然の生息地へうまく戻せることを意味しない。','飼育下で生きられれば野生復帰は必ず成功する。','その種は飼育下では生きられない。'],correct:0,explain:'The fact that ... が長い主語。does not imply that ... が述語と内容。'},
 {text:'Having accounted for differences in income and age, the authors found that the apparent relationship was considerably weaker.',choices:['所得と年齢の違いを考慮した後、見かけ上の関係はかなり弱いと分かった。','所得と年齢を無視したら関係が強まった。','関係がないと完全に証明された。'],correct:0,explain:'Having accounted for = 考慮した後で。apparent relationship = 見かけ上の関連。'},
 {text:'Neither the survey nor the interviews provide sufficient evidence to establish why participation declined.',choices:['調査も面接も、参加が減った理由を確定する十分な証拠にはならない。','両方の調査は理由を完全に証明した。','参加者が増えた理由が確定した。'],correct:0,explain:'Neither A nor B = AもBも〜ない。to establish why = なぜかを確定するための。'},
 {text:'Had the council invested earlier in drainage, the damage caused by the storm might have been less severe.',choices:['議会がもっと早く排水設備に投資していれば、嵐の被害は軽かったかもしれない。','議会が早く投資したので被害はゼロだった。','排水投資は嵐を引き起こした。'],correct:0,explain:'Had the council invested = If the council had invested の倒置。might have been は過去の仮定。'},
 {text:'The materials from which the artefacts were made suggest that trade extended beyond the region, although the precise routes remain unknown.',choices:['遺物の素材から交易が地域外まで及んだことが示唆されるが、正確な経路は不明だ。','遺物の交易路は全て判明している。','素材は全て地元で作られたと証明された。'],correct:0,explain:'from which the artefacts were made は materials の説明。although が「ただし」を導く。'},
 {text:'What matters most is not how many words a learner recognises in isolation but whether she can understand them in context.',choices:['重要なのは単語を単独でいくつ知るかではなく、文脈で理解できるかどうかだ。','単語の暗記数だけが重要だ。','文脈を読む必要は全くない。'],correct:0,explain:'What matters most が主語。not A but B = AではなくB。whether = 〜かどうか。'},
 {text:'The benefits were more pronounced among participants who had received regular feedback than among those who studied entirely on their own.',choices:['定期的なフィードバックを受けた参加者のほうが、完全独学の参加者より効果が顕著だった。','独学の参加者のほうが必ず優れていた。','フィードバックを受けた人はいなかった。'],correct:0,explain:'more pronounced ... than = 〜より顕著。who had received は participants を修飾。'},
 {text:'Unless the findings can be replicated in a more representative sample, they should be treated as tentative rather than conclusive.',choices:['より代表性のある標本で再現できない限り、結果は決定的ではなく暫定的と扱うべきだ。','再現できなくても決定的だと扱うべきだ。','標本の代表性は一切関係ない。'],correct:0,explain:'Unless = 〜でない限り。tentative rather than conclusive = 決定的でなく暫定的。'},
 {text:'The device, which was initially designed to monitor rainfall, has subsequently been adapted to measure soil moisture.',choices:['当初は雨量観測用だった機器が、その後土壌水分の測定用に改良された。','最初から土壌水分しか測れなかった。','現在は雨量も土壌水分も測れない。'],correct:0,explain:'which was initially designed ... は device の説明。has subsequently been adapted は現在完了受動態。'},
 {text:'It is possible that the apparent improvement was attributable partly to changes in how the results were recorded.',choices:['見かけ上の改善は、結果の記録方法の変化が一部原因だった可能性がある。','改善の理由は完全に特定された。','記録方法は変化していない。'],correct:0,explain:'It is possible that = 〜の可能性。attributable partly to = 一部は〜が原因。'}
);

// More demanding original Academic Reading mini-passages: varied official-style question formats.
window.READINGS.push(
 {title:'Urban Heat and Unequal Risk',topic:'Environment · Band 6 focus',text:'A. Cities often record higher temperatures than the countryside around them. Buildings and paved surfaces absorb heat during the day and release it slowly after sunset. Trees can mitigate this effect by providing shade and releasing moisture, yet their cooling performance varies according to species, soil conditions and the amount of water available. A newly planted tree may take years to provide substantial shade.\n\nB. Heat exposure is not evenly distributed. Lower-income neighbourhoods may contain fewer mature trees and more paved areas, while residents who work outdoors or cannot afford cooling equipment may face a greater risk. This does not mean that income alone determines an individual\'s exposure; age, housing design and working hours also matter.\n\nC. Some councils have responded by increasing tree cover, adding reflective roofs and creating public cooling centres. These interventions can reduce local temperatures, but their success is contingent on maintenance and accessibility. Consequently, a programme that increases the total number of trees may still fall short of protecting those who are most vulnerable.',qs:[
 {kind:'True / False / Not Given',q:'All newly planted trees provide substantial shade immediately.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'A says a new tree may take years to provide substantial shade.',jp:'all と immediately が本文に反する。「数年かかる可能性」に注意。',evidence:'A · A newly planted tree may take years...'},
 {kind:'Multiple choice',q:'According to paragraph B, which factor may increase heat risk?',a:['The ability to pay for cooling equipment','An identical amount of tree cover in every area','A complete absence of outdoor employment','A guarantee of equal exposure'],correct:0,e:'B links risk to being unable to afford cooling equipment.',jp:'may face a greater risk を言い換えた選択肢を探す。',evidence:'B · cannot afford cooling equipment'},
 {kind:'Matching headings',q:'Choose the best heading for paragraph C.',a:['The history of modern roofing','Solutions whose benefits depend on implementation','Why cities are always colder than rural areas','The cost of planting a single tree'],correct:1,e:'C discusses several solutions and says success depends on maintenance and access.',jp:'段落全体の主旨。個々の「木」「屋根」だけでなく対策の限界を含む見出し。',evidence:'C · success is contingent on maintenance and accessibility'},
 {kind:'Matching information',q:'Which paragraph mentions several personal factors besides income?',a:['Paragraph A','Paragraph B','Paragraph C'],correct:1,e:'B lists age, housing design and working hours.',jp:'具体的な列挙を探す問題。',evidence:'B · age, housing design and working hours'},
 {kind:'Sentence completion',q:'Complete: A programme may fail to protect the most ______ residents.',a:['vulnerable','reflective','mature','paved'],correct:0,e:'C ends with those who are most vulnerable.',jp:'最上級 most の後には形容詞 vulnerable。本文の原語を確認。',evidence:'C · most vulnerable'},
 {kind:'Summary completion',q:'Complete: Cooling projects require regular ______ to remain effective.',a:['maintenance','exposure','employment','absorption'],correct:0,e:'C explains their success depends on maintenance and accessibility.',jp:'「有効性を保つには保守が必要」の言い換え。',evidence:'C · contingent on maintenance'}
 ]},
 {title:'Sleep, Memory and School Timetables',topic:'Science · Band 6 focus',text:'A. Sleep is not simply a period when the brain stops working. During different stages of sleep, neural processes appear to strengthen some recently acquired memories while weakening information that is less useful. However, researchers disagree about precisely which mechanisms are responsible, and it would be misleading to claim that every memory improves after one good night.\n\nB. Adolescents frequently experience a shift in their internal body clocks, making it difficult for some to fall asleep early. When schools begin lessons at an unusually early hour, students may obtain less rest than they need. Several studies have found an association between later school start times and improved attendance, although the size of the benefit differs between communities.\n\nC. Adjusting timetables is not without constraints. Bus schedules, family routines and after-school activities may all be affected. Moreover, later starting times alone cannot compensate for irregular sleeping habits or excessive screen use late at night. Researchers therefore recommend evaluating timetable reforms alongside other measures, rather than assuming that a single intervention will resolve every problem.',qs:[
 {kind:'Multiple choice',q:'What is the main point of paragraph A?',a:['Sleep involves selective memory processes, but details remain uncertain.','All memories improve equally after sleep.','The brain is inactive during sleep.','Scientists have fully explained memory.'],correct:0,e:'A mentions memory strengthening and weakening, then uncertainty.',jp:'前半の説明と後半の限定の両方を含む答えが正しい。',evidence:'A · strengthen some ... weakening ... researchers disagree'},
 {kind:'True / False / Not Given',q:'Every community experiences the same benefit from later school starts.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B says the benefit differs between communities.',jp:'Every と differs が反対。',evidence:'B · differs between communities'},
 {kind:'Matching information',q:'Which paragraph lists practical difficulties of changing school hours?',a:['Paragraph A','Paragraph B','Paragraph C'],correct:2,e:'C lists transport, family routines and activities.',jp:'lists practical difficulties = 制約を列挙する。',evidence:'C · Bus schedules, family routines...'},
 {kind:'Matching headings',q:'Best heading for paragraph B?',a:['The complete explanation of sleep stages','Teenage body clocks and possible effects of school hours','How digital screens improve memory','School funding in rural areas'],correct:1,e:'B connects adolescent sleep timing with later school starts.',jp:'段落Bの前半と後半をまとめる見出しを選ぶ。',evidence:'B · Adolescents ... later school start times'},
 {kind:'Sentence completion',q:'Complete: Later school hours cannot fully compensate for ______ sleeping habits.',a:['irregular','selective','neural','recent'],correct:0,e:'C explicitly mentions irregular sleeping habits.',jp:'compensate for = 埋め合わせる。完全な解決ではない。',evidence:'C · cannot compensate for irregular sleeping habits'},
 {kind:'Summary completion',q:'Complete: Researchers recommend assessing timetable changes alongside other ______.',a:['measures','memories','communities','stages'],correct:0,e:'C says evaluate reforms alongside other measures.',jp:'alongside = 〜と併せて。',evidence:'C · alongside other measures'}
 ]},
 {title:'Food Waste Beyond the Supermarket',topic:'Society · Band 6 focus',text:'A. Food loss occurs long before products reach household kitchens. At farms, crops may be damaged by weather, pests or unsuitable storage facilities. During transportation, refrigeration failures can cause perishable goods to deteriorate, while delays may reduce the time remaining for retailers to sell them. These losses are particularly severe where infrastructure is limited.\n\nB. Retailers also reject some produce because of cosmetic standards. A vegetable may be safe and nutritious yet considered unattractive because its shape or colour differs from what customers expect. Campaigns that encourage consumers to purchase imperfect produce have shown promise, although their overall impact is difficult to measure across an entire supply chain.\n\nC. Labelling adds a further challenge. A best-before date generally indicates when quality may decline, whereas a use-by date relates more directly to safety. Confusing these labels can lead households to discard edible food. Clearer guidance might reduce unnecessary waste, but it would not address losses caused by drought, damaged roads or a lack of cold storage. Therefore, no single solution can eliminate all food waste.',qs:[
 {kind:'True / False / Not Given',q:'Food loss can occur before goods arrive at shops.',a:['TRUE','FALSE','NOT GIVEN'],correct:0,e:'A describes losses at farms and during transport.',jp:'before reaching household kitchens だけでなく farms と transportation の具体例。',evidence:'A · At farms ... During transportation'},
 {kind:'Matching headings',q:'Best heading for paragraph C?',a:['The benefits of perfect appearance','Labelling confusion and the limits of one solution','How to increase crop yields','Why all dates indicate danger'],correct:1,e:'C concerns two labels and why better labels cannot solve all causes.',jp:'まとめの no single solution が主旨の鍵。',evidence:'C · no single solution can eliminate all food waste'},
 {kind:'Multiple choice',q:'Why might a safe vegetable be rejected?',a:['Its appearance does not meet expectations.','Its nutrients have disappeared.','Its transport cost is always zero.','It cannot be stored under any conditions.'],correct:0,e:'B says colour and shape can fail cosmetic standards.',jp:'cosmetic standards = 外見上の基準。safe と nutritious に注意。',evidence:'B · safe and nutritious yet considered unattractive'},
 {kind:'Matching information',q:'Which paragraph explains refrigeration problems in transport?',a:['Paragraph A','Paragraph B','Paragraph C'],correct:0,e:'A describes refrigeration failures.',jp:'refrigeration failures が見つけるべき情報。',evidence:'A · refrigeration failures'},
 {kind:'Sentence completion',q:'Complete: A best-before date mainly concerns food ______.',a:['quality','appearance','weight','origin'],correct:0,e:'C contrasts quality with safety.',jp:'best-before = 主に品質、use-by = 安全性。',evidence:'C · indicates when quality may decline'},
 {kind:'Summary completion',q:'Complete: Better labels cannot prevent losses caused by inadequate ______.',a:['cold storage','cosmetic standards','household habits','consumer expectations'],correct:0,e:'C lists lack of cold storage among causes labels cannot fix.',jp:'lack of cold storage を inadequate cold storage と言い換えている。',evidence:'C · a lack of cold storage'}
 ]},
 {title:'Citizen Science and Reliable Data',topic:'Research · Band 6 focus',text:'A. Citizen-science projects invite members of the public to gather observations that would be difficult for a small team of professional researchers to collect alone. Volunteers might identify birds, photograph insects or record changes in local waterways. Because participants live in different regions, such programmes can provide a broad geographical coverage that would otherwise be expensive to achieve.\n\nB. Yet a large number of observations does not automatically produce reliable evidence. Volunteers differ in their experience, and some species are easily confused. Projects may address these limitations by supplying training materials and asking several participants to classify the same photograph. Agreement increases confidence, but it cannot guarantee accuracy if all observers make a similar mistake.\n\nC. Some researchers use automated systems to flag unusual records for further examination. Others compare volunteer observations with measurements collected by specialists. These procedures can strengthen the data, albeit at additional cost. The value of citizen science therefore depends not merely on how much information is collected, but also on whether the information is checked and interpreted appropriately.',qs:[
 {kind:'Matching information',q:'Which paragraph describes comparing public observations with expert measurements?',a:['Paragraph A','Paragraph B','Paragraph C'],correct:2,e:'C mentions specialist measurements.',jp:'compare ... with = 〜と照合する。',evidence:'C · compare volunteer observations with measurements ... by specialists'},
 {kind:'True / False / Not Given',q:'When volunteers agree, the identification is always correct.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B says agreement cannot guarantee accuracy.',jp:'always / guarantee の強い断定に注意。',evidence:'B · cannot guarantee accuracy'},
 {kind:'Multiple choice',q:'What is one advantage of citizen science?',a:['Observations from a wider area','No need to check any observations','Every volunteer is already an expert','No costs of any kind'],correct:0,e:'A says participation across regions provides broad coverage.',jp:'broad geographical coverage の言い換え。',evidence:'A · broad geographical coverage'},
 {kind:'Matching headings',q:'Best heading for paragraph B?',a:['Expanding the study area','Why numbers alone do not ensure accuracy','The history of cameras','Replacing every researcher'],correct:1,e:'B contrasts many observations with reliability problems.',jp:'does not automatically = 必ずしも〜にならない。',evidence:'B · does not automatically produce reliable evidence'},
 {kind:'Sentence completion',q:'Complete: Automated systems can flag ______ records for checking.',a:['unusual','ordinary','unpaid','historic'],correct:0,e:'C explicitly says flag unusual records.',jp:'flag = 注意すべきものとして印を付ける。',evidence:'C · flag unusual records'},
 {kind:'Summary completion',q:'Complete: The value of volunteer data depends on the ______ of the information, not just its quantity.',a:['verification','location','cost','appearance'],correct:0,e:'C stresses that information needs checking and interpretation.',jp:'whether ... checked を verification（検証）と名詞化。',evidence:'C · whether the information is checked'}
 ]},
 {title:'Ancient Trade and Uncertain Routes',topic:'History · Band 6 focus',text:'A. Archaeologists sometimes discover objects made from materials that are not naturally available near the excavation site. Chemical analysis can suggest where the materials originated, although similar mineral compositions may occur in more than one location. Consequently, identifying a source is often less straightforward than it first appears.\n\nB. The presence of a foreign object does not establish that its final owner travelled to the place where it was manufactured. Goods could have passed through several intermediaries, each exchanging them with another community. Moreover, an artefact may have been reused or moved centuries after it was produced. Researchers therefore reconstruct trade networks by combining objects with written records and other evidence.\n\nC. Some routes can be identified with reasonable confidence, whereas others remain tentative because surviving evidence is incomplete. Historians may revise a proposed route when a new excavation reveals a previously unknown settlement. Rather than describing ancient commerce as a single fixed system, current research increasingly emphasises how connections evolved in response to geography, political change and demand.',qs:[
 {kind:'True / False / Not Given',q:'A foreign object proves its owner personally visited the place it was made.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B says it does not establish personal travel.',jp:'presence of an object と personal travel を混同しない。',evidence:'B · does not establish that its final owner travelled'},
 {kind:'Multiple choice',q:'Why can chemical identification be uncertain?',a:['Similar materials may exist in different places.','All objects contain no minerals.','No trade took place in ancient times.','Every object has a written label.'],correct:0,e:'A mentions similar compositions in multiple locations.',jp:'although 以下の例外が答え。',evidence:'A · similar mineral compositions may occur in more than one location'},
 {kind:'Matching headings',q:'Best heading for paragraph B?',a:['Why one object does not reveal a complete journey','Modern transport costs','The best metal for a sword','How to date every historical letter'],correct:0,e:'B explains intermediary exchange and reuse.',jp:'段落全体を表す：一つの遺物だけでは移動経路は確定しない。',evidence:'B · several intermediaries ... reused or moved'},
 {kind:'Matching information',q:'Which paragraph mentions trade routes being changed by new discoveries?',a:['Paragraph A','Paragraph B','Paragraph C'],correct:2,e:'C describes revising routes after excavations.',jp:'revise a proposed route = 仮説上の経路を修正する。',evidence:'C · revise a proposed route when a new excavation reveals...'},
 {kind:'Sentence completion',q:'Complete: Goods may have passed through several ______.',a:['intermediaries','excavations','compositions','settlements'],correct:0,e:'B uses this exact term.',jp:'intermediary = 仲介者。',evidence:'B · passed through several intermediaries'},
 {kind:'Summary completion',q:'Complete: Some historical routes remain ______ because evidence is incomplete.',a:['tentative','identical','recent','efficient'],correct:0,e:'C says others remain tentative.',jp:'tentative = 暫定的な、確定していない。',evidence:'C · remain tentative'}
 ]},
 {title:'Solar Power, Storage and Demand',topic:'Technology · Band 6 focus',text:'A. Solar electricity generation is intermittent because it depends on daylight and weather. At times, production exceeds local demand; at others, particularly after sunset, consumers may need more power than solar panels can provide. This mismatch is a challenge for networks that have historically relied on power stations capable of adjusting output.\n\nB. Batteries can absorb excess electricity and release it later. However, their usefulness is limited by storage capacity, efficiency losses and cost. A large battery might help manage fluctuations over a few hours but may be inadequate during several consecutive cloudy days. Engineers therefore explore a combination of storage, flexible demand and connections between regions.\n\nC. Flexible demand means shifting some electricity use to periods when supply is plentiful. For instance, certain industrial processes can be scheduled for the middle of the day, when solar generation is relatively high. Yet such adjustments are not feasible for every service: hospitals and other essential facilities require reliable power continuously. The most resilient system is thus likely to combine several approaches, rather than depend exclusively on one technology.',qs:[
 {kind:'Multiple choice',q:'What is the central challenge in paragraph A?',a:['Electricity supply and demand do not always occur at the same time.','Solar panels always generate at night.','Traditional stations cannot change their output.','Consumers never need electricity after sunset.'],correct:0,e:'A discusses the mismatch between production and demand.',jp:'mismatch = 不一致。具体例（日没後）だけでなく中心的な問題を選ぶ。',evidence:'A · This mismatch is a challenge'},
 {kind:'True / False / Not Given',q:'Batteries can meet every demand during a long period of cloudy weather.',a:['TRUE','FALSE','NOT GIVEN'],correct:1,e:'B says they may be inadequate over consecutive cloudy days.',jp:'every と inadequate が矛盾。',evidence:'B · may be inadequate during several consecutive cloudy days'},
 {kind:'Matching headings',q:'Best heading for paragraph C?',a:['Why solar panels are inexpensive','Changing the timing of electricity use and its limits','The history of hospital construction','A system that uses batteries only'],correct:1,e:'C defines flexible demand and explains exceptions.',jp:'定義・例・制約までまとめる見出し。',evidence:'C · Flexible demand means shifting ... not feasible for every service'},
 {kind:'Matching information',q:'Which paragraph discusses energy being lost during storage?',a:['Paragraph A','Paragraph B','Paragraph C'],correct:1,e:'B includes efficiency losses.',jp:'efficiency losses は「効率上の損失」。',evidence:'B · efficiency losses'},
 {kind:'Sentence completion',q:'Complete: Some industrial activities can be scheduled when power supply is ______.',a:['plentiful','intermittent','essential','exclusive'],correct:0,e:'C uses plentiful for abundant supply.',jp:'plentiful = 豊富な。',evidence:'C · periods when supply is plentiful'},
 {kind:'Summary completion',q:'Complete: A resilient network will probably depend on a ______ of approaches.',a:['combination','shortage','reduction','failure'],correct:0,e:'C concludes several approaches are needed.',jp:'rather than depend exclusively が単一技術ではないことを示す。',evidence:'C · combine several approaches'}
 ]}
);

// Sentence Detective challenge set: longer Band 6-level syntax, paraphrase and qualification.
const sentenceChallengeRaw=`Although an increase in visitor numbers was initially welcomed by local businesses, the resulting pressure on public transport led some residents to question whether tourism was entirely beneficial.|観光客増加は当初歓迎されたが、公共交通への負担から観光が全面的に有益か疑問が生じた。|観光客が減ったため交通は改善し、住民は全員歓迎した。|観光は全住民に確実に利益をもたらすと証明された。|Although が譲歩、the resulting pressure が主語、whether が「〜かどうか」。
The committee concluded that, unless additional funding could be secured, the restoration project would have to be postponed despite its potential environmental benefits.|追加資金が確保できない限り、環境面の利益が見込まれても修復計画は延期が必要だと委員会は結論づけた。|追加資金が確保されたので計画は完了した。|環境面の利益がないため計画を中止した。|unless = if not、despite = 〜にもかかわらず。would have to は「必要になる」。
What appeared to be a sudden improvement in examination results was later attributed largely to changes in the way students had been selected for the study.|試験結果の急な改善に見えたものは、後に調査対象生徒の選び方の変更が主な原因とされた。|全員の学力が突然上がったと確定した。|選考方法は一度も変わらなかった。|What appeared to be ... が長い主語。was attributed to = 原因とされた。
The researchers were unable to establish whether the reduction in emissions was caused by the new policy or by an unrelated decline in industrial activity.|排出量減少が新政策によるのか、無関係な産業活動の低下によるのか研究者には確定できなかった。|新政策だけが原因だと証明した。|産業活動が増えたため排出量も増えた。|unable to establish whether A or B = AかBかを確定できない。
Even where renewable electricity is plentiful, a reliable supply cannot be guaranteed without systems capable of balancing production and demand.|再生可能電力が豊富な場所でも、生産と需要を調整できる仕組みなしに安定供給は保証できない。|再生可能電力が豊富なら調整設備は不要だ。|電力が少ない場所だけで需要が発生する。|Even where は「〜の場所でも」。without は否定条件。
The findings, which were based on a relatively small sample, should be interpreted cautiously rather than treated as conclusive evidence.|比較的小さい標本に基づく研究結果は、決定的証拠とするより慎重に解釈すべきだ。|小標本であっても決定的証拠とされた。|標本数が非常に大きいため注意は不要だ。|which 以下が findings の説明。rather than で対比。
Only after the survey had been repeated in several countries did a consistent pattern begin to emerge from the data.|複数国で調査を繰り返して初めて、データに一貫した傾向が現れ始めた。|一国で最初に調べた時から傾向は完全に明らかだった。|繰り返すほど傾向が消えた。|Only after 文頭による倒置：did ... begin。
The fact that many participants reported feeling less stressed does not necessarily imply that the treatment itself was responsible for the change.|参加者の多くがストレス減少を報告しても、その治療自体が原因とは限らない。|治療が唯一の原因だと確実に証明された。|参加者は全員ストレス増加を報告した。|The fact that が主語、does not necessarily imply が述語。
While the new irrigation system reduced water consumption, its installation costs were considerably higher than those anticipated by the farmers.|新しい灌漑設備は水使用量を減らした一方、設置費は農家の予想を大きく上回った。|水使用量も設置費も予想より減った。|設置費は最初から完全に予想どおりだった。|While は対比。those は installation costs を指す。
Had the original data been available, the investigators might have reached a different conclusion about the apparent decline in biodiversity.|元データが利用できていれば、生物多様性の見かけ上の低下について異なる結論に至ったかもしれない。|元データがあったので確実に同じ結論になった。|生物多様性が増えたことは証明された。|Had ... been = If ... had been の倒置、might have + 過去分詞。
It is not the total amount of rainfall but the frequency of intense storms that determines the risk of flooding in this particular region.|この地域の洪水リスクを決めるのは総雨量ではなく激しい嵐の頻度だ。|総雨量だけが洪水リスクを決める。|嵐の頻度は洪水に全く関係ないと述べる。|It is not A but B that ... の強調構文。
As the population ages, demand for healthcare services is expected to rise, although the extent of the increase remains difficult to predict.|高齢化に伴い医療需要は増えると予想されるが、その増加の程度は予測しにくい。|高齢化で医療需要は確実に減少する。|需要増加の正確な規模はすでに判明している。|As = 〜につれて、although 以下で予測の限界を述べる。
Because the two species occupy similar habitats, researchers must distinguish changes caused by competition from those attributable to temperature.|二種が似た生息地にいるため、競争による変化と気温による変化を区別しなければならない。|二種は全く異なる生息地におり比較不能だ。|すべての変化は気温だけが原因とされた。|distinguish A from B = AとBを区別。those は changes。
The proposal would be financially viable only if the predicted savings were achieved within the first three years of operation.|予測された節約額が運用開始から3年以内に実現する場合に限り、提案は財政的に成り立つ。|提案は条件なしで利益を生む。|節約額は運用開始以前に確定した。|only if は強い条件。within = 〜以内に。
Not all forms of digital learning are equally effective, particularly when students receive little feedback on mistakes they repeatedly make.|デジタル学習がすべて同じ効果とは限らず、特に繰り返す誤りへの講評が少ない場合はそうだ。|全形式が完全に同じ効果を持つ。|誤りの講評は効果と無関係だと証明された。|Not all = 全てが〜ではない。particularly when が条件を限定。
The decline in the number of recorded accidents may reflect improved safety, but it could also result from changes in reporting practices.|記録された事故件数の減少は安全改善を示すかもしれないが、報告方法の変化が原因の可能性もある。|事故減少は安全改善だけが原因だ。|報告方法が変わると事故数は必ず増える。|may と could also で複数の可能性を示す。
Compared with conventional materials, the alternative was lighter and easier to recycle, yet it proved less resistant to prolonged heat.|従来素材より軽く再利用しやすかったが、長時間の熱への耐性は低いと分かった。|代替素材は重く、再利用できなかった。|従来素材より熱にも強いと証明された。|Compared with と yet の二つの対比に注意。
The author argues that the absence of evidence for a direct relationship should not be confused with evidence that no relationship exists.|筆者は、直接関係の証拠がないことと、関係が存在しない証拠を混同すべきでないと論じる。|証拠が見つからなければ関係は存在しないと証明される。|直接関係があると断定している。|absence of evidence ≠ evidence of absence。否定の範囲を確認。
The degree to which public awareness campaigns change behaviour depends not only on the information presented but also on whether practical alternatives are available.|啓発活動が行動を変える程度は、情報だけでなく実行可能な代替手段の有無にも左右される。|情報さえあれば行動は必ず変わる。|代替手段があるかどうかは全く無関係だ。|not only A but also B、whether = 〜かどうか。
No sooner had the transport system been upgraded than passenger numbers began to exceed the capacity of the busiest routes.|交通システムを改善するとすぐ、最も混雑する路線で利用客数が輸送能力を超え始めた。|改善後、利用客数はすぐゼロになった。|路線の輸送能力が利用客数を常に上回った。|No sooner had ... than = 〜するとすぐ。
Whereas some historians interpret the objects as evidence of direct trade, others suggest that they may have passed through several intermediaries.|遺物を直接交易の証拠と解釈する歴史家もいれば、複数の仲介者を経た可能性を示す人もいる。|全歴史家が直接交易だけを支持した。|仲介者が存在したことは完全に否定された。|Whereas は意見の対比。may have + 過去分詞は過去の可能性。
Insofar as the measurements accurately reflect conditions in the field, the model provides a useful estimate of future crop yields.|測定値が実地条件を正しく反映している限り、このモデルは将来の収穫量の有用な推定となる。|測定が不正確でも予測は必ず正しい。|モデルは収穫量を測るものではない。|Insofar as = 〜する限り。文全体が条件付き。
The survey did not reveal a significant difference between the groups once differences in age and income had been taken into account.|年齢と所得の差を考慮すると、調査では集団間に有意差が見られなかった。|年齢と所得を考慮すると差は必ず大きくなった。|調査は年齢と所得を全く調べていない。|once = 〜した時点で、had been taken into account は受動態。
The more frequently learners encounter a word in meaningful contexts, the more likely they are to recognise it when it appears in a new passage.|学習者が意味ある文脈で語に出会う回数が多いほど、新しい文章でも認識できる可能性が高まる。|語に出会う回数が多いほど忘れやすくなる。|新しい文章では全ての語の意味が変わる。|The more ..., the more ... = 〜すればするほど。
Although the species appears to have recovered in one protected area, there is insufficient evidence to conclude that the wider population is no longer at risk.|保護区の一つでは種が回復したように見えるが、全体がもはや危険でないと結論づける証拠は不十分だ。|一地域の回復で全体の安全が確定した。|種は全ての保護区で絶滅した。|appears to have recovered = 回復したようだ。insufficient evidence が結論を制限。
The increase in online purchases, which was particularly pronounced among younger consumers, did not lead to the expected reduction in delivery costs.|特に若い消費者に顕著だったネット購入の増加は、予想された配送費削減につながらなかった。|ネット購入増加で配送費は予想どおり必ず減った。|若い消費者はネット購入を減らした。|which 節は increase を説明。did not lead to が主述語。
Such measures are unlikely to be effective unless they are accompanied by a broader strategy addressing the underlying causes of the problem.|そのような対策は、問題の根本原因に取り組む広い戦略を伴わない限り有効になりにくい。|単独の対策だけで問題は必ず解決する。|根本原因を調べる必要がないと主張する。|unlikely unless = 〜でない限り有効である可能性が低い。
What the researchers found most surprising was not the speed of the change but the fact that it occurred in regions with very different climates.|研究者が最も驚いたのは変化の速さでなく、気候が大きく違う地域でも起こった事実だった。|研究者は変化が遅かったことだけに驚いた。|全地域は同じ気候だった。|What ... found most surprising が主語、not A but B。
The initial results were promising; nevertheless, the team decided to delay publication until the findings had been independently verified.|初期結果は有望だったが、独立した検証が済むまで公表を延期することにした。|初期結果は悪かったので研究を永久に中止した。|検証前にただちに公表した。|nevertheless = それでも。until = 〜まで。
If the temperature threshold is exceeded even briefly, the process may be disrupted in ways that are not immediately visible.|温度の限界を短時間でも超えると、すぐには見えない形で工程が乱れる可能性がある。|限界を超えても工程は必ず安定する。|乱れは必ず直ちに目で見える。|even briefly = 短時間でも。that 節が ways を修飾。
The authors caution against interpreting a correlation between screen use and sleep problems as proof that one necessarily causes the other.|筆者らは画面使用と睡眠問題の相関を、一方が必ず他方の原因という証拠と解釈しないよう警告する。|相関があれば因果関係は確定する。|画面使用と睡眠の関連が完全に否定された。|caution against -ing = 〜しないよう注意。as proof that が誤解の内容。
Much as the committee recognised the social benefits of the programme, it could not justify its rising costs without clearer evidence of long-term effectiveness.|委員会は社会的利益を認めながらも、長期効果の明確な証拠なしに増える費用を正当化できなかった。|利益を認めたので費用は全て正当化された。|委員会は社会的利益を認めていない。|Much as = although。without が否定条件。
The materials, having been exposed to salt water for decades, had become too fragile to be moved without specialised equipment.|何十年も海水にさらされた素材は、専用機器なしには移動できないほど脆くなっていた。|素材は海水に触れていないので丈夫だった。|専用機器がなくても簡単に運べた。|having been exposed は過去の原因を付加、too ... to ... は「〜すぎてできない」。
It remains unclear whether the observed difference can be attributed to the intervention itself, given that the participants were not randomly assigned.|参加者が無作為に割り当てられていなかったため、観察された差を介入自体に帰せるかは不明だ。|無作為割当てなので介入の効果は確定した。|差は観察されなかった。|It remains unclear whether = 〜か不明。given that = 〜を考慮すると。
Despite having access to the same information, the two groups arrived at markedly different conclusions because they interpreted the evidence in different ways.|同じ情報を得られたにもかかわらず、証拠の解釈が違ったため二集団は大きく異なる結論に至った。|情報が全く違ったため結論も違った。|同じ情報なら必ず同じ結論になる。|Despite having = 〜にもかかわらず。because 以下が理由。
It was only when the original measurements were compared with satellite records that the error in the model became apparent.|元の測定値を衛星記録と比較して初めて、モデルの誤りが明らかになった。|衛星記録を見る前から誤りは全て判明していた。|比較してもモデルの誤りは見つからなかった。|It was only when ... that ... の強調構文。
The proposed expansion is expected to create jobs, though some residents fear that it will also place additional pressure on already limited water resources.|事業拡張は雇用を生むと期待される一方、限られた水資源への負担増を恐れる住民もいる。|雇用は確実に減ると予想される。|住民は水資源への影響を心配していない。|though = although。already limited が water resources を修飾。
The longer the delay between learning a new expression and using it, the more difficult it may become to recall the expression accurately.|新表現を学んでから使うまでの間隔が長いほど、正確に思い出すのが難しくなる可能性がある。|使用までの間隔が長いほど必ず覚えやすい。|新表現は復習しなくても絶対忘れない。|The longer ..., the more ...。may で可能性を表す。
The policy was introduced with the intention of reducing inequality, but its actual effects varied considerably between urban and rural communities.|政策は不平等削減を意図して導入されたが、実際の効果は都市と地方でかなり異なった。|政策の効果は全地域で同じだった。|政策は不平等を増やす目的で導入された。|with the intention of = 〜の意図で。but が意図と結果を対比。
It would be premature to claim that the decline is permanent, since the figures cover only a relatively short period.|数値は比較的短期間しか対象としていないため、減少が永久的だと主張するのは早計だ。|長期の数値があるので永久減少は確定した。|減少したという数値は存在しない。|It would be premature to = 〜は早計。since = because。
The technology, which had originally been developed for medical research, was subsequently adapted for use in agricultural monitoring.|当初医療研究用に開発された技術は、その後農業監視に使えるよう改良された。|技術は初めから農業用だけだった。|技術は医療にも農業にも使われていない。|which had originally been developed が技術を説明。subsequently = その後。
Unless the distinction between possibility and certainty is recognised, readers may interpret a cautious scientific claim as a definite fact.|可能性と確実性の違いを認識しないと、読者は慎重な科学的主張を確定した事実と誤解し得る。|可能性と確実性は常に同じ意味だ。|慎重な主張は必ず虚偽である。|Unless = 〜でない限り。as a definite fact は解釈の内容。
Far from being an unnecessary expense, regular maintenance was found to be essential for ensuring the system remained reliable.|定期的な保守は不要な出費どころか、システムの信頼性維持に不可欠だと分かった。|定期保守は完全に不要だと判明した。|保守は信頼性を低下させた。|Far from being = 〜どころか。was found to be = 〜と分かった。
The results seem to support the hypothesis, provided that the unexpected variation in the second group can be satisfactorily explained.|第2集団の予想外の変動を十分説明できるなら、結果は仮説を支持するように見える。|変動が説明できなくても仮説は必ず証明される。|結果は仮説と完全に矛盾する。|provided that = 〜という条件なら。seem to は慎重表現。
No evidence was presented to show that the decline in attendance had been caused by a reduction in the quality of teaching.|出席率の低下が授業の質の低下によると示す証拠は提示されなかった。|授業の質の低下が原因と証明された。|出席率が上がったことが証明された。|No evidence ... to show that = 〜を示す証拠がない。否定の範囲が重要。
What distinguishes this method from earlier approaches is its ability to identify patterns that would otherwise remain hidden in large datasets.|この方法が以前の手法と違うのは、大量データに隠れたままの傾向を見つける能力だ。|以前の手法と全く同じ能力しかない。|大量データの傾向を見つける能力を失った。|What distinguishes A from B が主語。would otherwise remain = さもなければ残る。
Although the number of participants doubled, the proportion who completed the programme remained almost unchanged.|参加者数は2倍になったが、課程を修了した割合はほぼ変わらなかった。|参加者も修了割合も2倍になった。|参加者数は半分になった。|number（人数）と proportion（割合）は別。Although で対比。
The scheme can be regarded as successful only to the extent that it produces lasting improvements rather than temporary changes.|一時的な変化ではなく持続的な改善を生む範囲に限り、その施策を成功と見なせる。|一時的な変化だけで必ず成功と見なせる。|持続的改善を生んでも必ず失敗とする。|only to the extent that = 〜する範囲に限り。rather than = 〜ではなく。
The species has not disappeared entirely, but its surviving populations are so fragmented that recovery without intervention is considered unlikely.|その種は完全に消えたわけではないが、残る個体群が分断されすぎて介入なしの回復は難しいと考えられる。|種は完全に絶滅した。|個体群がまとまっており介入なしでも必ず回復する。|not ... entirely は部分否定。so ... that は結果。
Given the limited number of observations, it is difficult to determine whether the apparent difference reflects a genuine trend or random variation.|観察数が限られるため、見かけ上の差が本当の傾向か偶然の変動か判断しにくい。|観察数が十分なので傾向は完全に確定した。|観察された差は必ず偽りだ。|Given = 〜を考慮すると。whether A or B。
The report acknowledges that, despite considerable investment, the benefits have been less widespread than policymakers originally expected.|報告書は、大きな投資にもかかわらず効果が政策担当者の当初予想ほど広がらなかったと認める。|投資が少なかったので効果は予想以上に広がった。|報告書は効果が全くなかったと断定する。|despite が逆接。less ... than の比較。
So closely are the two processes linked that it is difficult to evaluate the effect of one without taking the other into account.|二つの過程は非常に密接につながっているため、一方を考慮せず他方の効果を評価しにくい。|二つの過程は完全に独立している。|片方を無視しても必ず正確に評価できる。|So closely ... that の倒置。without -ing = 〜せずに。
It is generally assumed that greater access to information improves decision-making, although the quality of that information may be equally important.|情報を得やすいほど意思決定が改善すると一般に考えられるが、情報の質も同程度に重要かもしれない。|情報量さえ多ければ質は関係ない。|情報アクセスは意思決定を必ず悪化させる。|It is assumed that = 〜と仮定される。although が限定。
What the figures do not reveal is how much of the increase can be attributed to changes in the population rather than individual behaviour.|数値からは、増加のうち人口変化による部分と個人行動による部分をどれだけ区別できるか分からない。|増加はすべて個人行動の変化によると数値が示す。|人口は変化していないと証明された。|What ... do not reveal が主語。how much ... が内容。
The use of automated systems may reduce some forms of human error, yet it can introduce new risks if the underlying data are biased.|自動化は一部の人為ミスを減らせるが、元データに偏りがあれば新しい危険を生む可能性がある。|自動化で全ての危険と偏りが消える。|元データの偏りは自動化に一切影響しない。|may と can は可能性、yet は対比、if は条件。
Having examined the available evidence, the committee concluded that there was no sufficient basis for rejecting the alternative explanation.|入手可能な証拠を検討した後、委員会は別の説明を退ける十分な根拠がないと結論づけた。|別の説明が完全に否定されたと結論づけた。|委員会は証拠を一切検討しなかった。|Having examined = 検討した後。no sufficient basis for -ing = 十分な根拠がない。
The impact of the measure is likely to depend on whether households are able to adapt their routines without incurring substantial additional costs.|対策の影響は、家計が大きな追加費用なしに生活習慣を調整できるかどうかに左右されそうだ。|全家計が追加費用なしに必ず調整できる。|家計の生活習慣は効果と無関係だ。|depend on whether = 〜かどうか次第。without incurring = 負担せずに。
Were the region to experience another prolonged drought, the existing storage facilities might prove inadequate to meet agricultural demand.|この地域でまた長い干ばつが起きれば、既存貯水施設では農業需要を満たせないかもしれない。|干ばつが起きても施設は必ず十分だ。|過去に干ばつは一度も起こっていない。|Were ... to = If ... were to の倒置。might prove inadequate = 不十分と分かるかも。
The tendency to focus on average values can conceal substantial differences between individuals, particularly when the sample includes people of very different ages.|平均値ばかり見る傾向は、特に年齢差の大きい標本で個人間の大きな違いを隠し得る。|平均値は個人差を必ずすべて示す。|年齢の違いは標本に含まれていない。|can conceal = 隠す可能性。particularly when が条件を追加。
Even if every participant answers the questionnaire honestly, the findings may still be misleading if important questions were omitted.|全参加者が正直に答えても、重要な質問が欠けていれば結果は誤解を招くかもしれない。|正直に答えれば調査結果は必ず正しい。|重要な質問がなくても影響はないと確定した。|Even if = たとえ〜でも。may still = それでも可能性。
The historical account is based largely on records written by wealthy merchants, whose experiences may not have reflected those of ordinary workers.|歴史記述は主に裕福な商人の記録に基づき、彼らの経験は一般労働者を反映しなかった可能性がある。|記録は一般労働者だけが書いた。|裕福な商人と労働者の経験は必ず同じだった。|whose experiences は merchants を説明。may not have reflected = 過去の可能性。
Although expanding the network would improve access for some communities, it could also make maintenance more complex and expensive.|ネットワーク拡大は一部地域の利用しやすさを改善する一方、維持管理を複雑で高額にする可能性がある。|拡大で全地域の維持費は必ず減る。|拡大はアクセス改善を一切もたらさない。|Although と could also で利点と欠点を対比。
The evidence is consistent with the hypothesis, but it does not rule out the possibility that an unmeasured factor contributed to the outcome.|証拠は仮説と一致するが、測定していない要因が結果に影響した可能性は排除できない。|仮説以外の原因は完全に排除された。|証拠は仮説と完全に矛盾する。|does not rule out the possibility = 可能性を排除しない。
Far fewer students selected the second option than the researchers had anticipated, even though it had been described as the more convenient choice.|便利な選択肢と説明されていたにもかかわらず、2番目を選んだ生徒は予想よりはるかに少なかった。|予想より多くの生徒が2番目を選んだ。|2番目は不便だと最初から説明されていた。|Far fewer ... than は大幅に少ない。even though は譲歩。
The introduction of stricter standards, while potentially beneficial in the long term, may impose costs that smaller producers struggle to absorb.|厳しい基準の導入は長期的に有益かもしれないが、小規模生産者が負担しにくい費用を生む可能性がある。|厳しい基準は必ず全生産者の費用を減らす。|小規模生産者には費用が生じない。|while potentially beneficial は挿入の譲歩。that 節は costs を修飾。`;
const challenge=sentenceChallengeRaw.trim().split('\n').map(line=>{const [text,correct,wrong1,wrong2,explain]=line.split('|');return {text,choices:[correct,wrong1,wrong2],correct:0,explain};});
window.SENTENCES.push(...challenge.slice(0,60));
