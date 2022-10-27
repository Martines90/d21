import { DEFAULT_LANG } from './constants'

const scenarioEN = {}

const scenarioHU = {
  firstProtest: {
    title: 'Az első tüntetés',
  },
  secondProtest: {
    title: 'A második tüntetés',
  },
  oneDayStrike: {
    title: 'Egynapos országos sztrájk',
  },
  threeDayStrike: {
    title: 'Háromnapos országos sztrájk',
  },
  oneWeekStrikeAndBlockade: {
    title: 'Egyhetes országos sztrájk és útblokád',
  },
  endless0_24ProtestAtAllGovBuilding: {
    title: 'Letáborozás minden kormányzati épület elött',
  },
}

export const S_TEXTS = DEFAULT_LANG === 'hu' ? scenarioHU : scenarioEN

const ideologyEN = {
  theGoalOfOurMovement: {
    title: '(1) The goal of our movement',
    intro: '',
    whatTheFrameworkGoodFor: '',
    rethinkOfVotingIntro: '',
    problemWithVoting: '',
    crowdEasyToBeManipulated: '',
    newSystemWillBeMoreProfessionnal: '',
    ciitizenCanVoteLike: '',
    minRequirementsToVote: {
      readTheDescriptionOfTheTopic: '',
      readOneProAndOneConExpertArticle: '',
    },
    wayOfArticleReadByCitizenCheck: '',
  },
}

const ideologyHU = {
  theGoalOfOurMovement: {
    title: '(1) Mozgalmunk célja',
    intro:
      'A célja ennek az egész mozgalomnak – küldetésnek, hogy kikényszerítsünk a politikai vezetőinkből egy új digitális-jogi keretrendszernek a megvalósítását. Ez a D21 keretrendszer, ami a 21. század újragondolt demokráciáinak elsődleges alappilléreként fog funkcionálni. Ezzel a társadalom képes lesz kompetencia-, tudás-, érintettségi szint és mindenek elött elfogulatlansági alapon, napi szintű érdemi ráhatást gyakorolni a döntéshozói elit tevékenykedésére.',
    whatTheFrameworkGoodFor:
      'A keretrendszernek hála az országunkat, illetve városainkat, községeinket érintő minden fajsúlyos napirendre kerülő kérdést a nép monitorozhat és súlyozott szavazati értékével támogathat, illetve megvétózhat. Kormányzati beruházások, pályázati pénzek, projektek, törvénymódosítások, rendeletek, stb. Egyetlen fillér se fog csak úgy elköltésre kerülni a nép engedélye nélkül. A népet a mindenkori kormánynak állandó partnernek kell tekintenie amiről ez a keretrendszer megkerülhetetlenségével és logikájával fog gondoskodni.',
    rethinkOfVotingIntro:
      'Egyik legsarkalatosabb pontja ennek a keretrendszernek a „szavazás” fogalmának sokkal szofisztikáltabb – kibővített – újragondolt értelmezésén alapszik.',
    problemWithVoting:
      'Jelenleg, azon nagy ritka alkalmakkor, amikor „beleszólhatunk” bármibe is, legyen az a választások, egy népszavazás, vagy a mára hungarikumnak számító nemzetikonzultáció, akkor azt kell konstatáljuk, hogy a szavazás koncepciója továbbra is egy meglehetősen ékegyszerű, évezredes hagyományra visszatekintő, lebutított elvet követ. Ez nem más, mint az egy ember = egy szavazat elve. Ennyi, ez az őskori szinten megragadt modell, amire a hatalom úgy hivatkozik, mint a legfőbb "demokratikus" jogunk gyakorlásának az intézménye, az, amivel kiszúrják még ma is a szemünket.',
    crowdEasyToBeManipulated:
      'Elég csak egy megvezetett-manipulált (média túlsúly, demagóg politikai üzenetek, fizetett propaganda hadjárat) tömeg és máris el lehet dönteni egy szavazást olyan irányba, amilyen irányba az adott érdekcsoport dominánsabb ráhatást tud prezentálni.',
    newSystemWillBeMoreProfessionnal:
      'A D21 (digitális-jogi) keretrendszer, egy az év 365 napjában futó, minden kérdésre kiterjedő/alkalmazható szavazási modell formájában sokkal professzionálisabb módon gondolja újra, egészen az alapoktól a „szavazás” idejét múlt gyakorlatát.',
    ciitizenCanVoteLike:
      'Az állampolgár online azonosítást (Ügyfélkapu) követően a következőképpen tud majd szavazni a rendszerben:',
    minRequirementsToVote: {
      readTheDescriptionOfTheTopic:
        '1.	Elolvassa a szavazás témájának leírását (min 1 oldal, maximum 3 oldal).',
      readOneProAndOneConExpertArticle:
        '2.	Elolvas legalább 1-1 pozitív és negatív szakértői cikket (min 1 oldal, maximum 5 oldal) a szavazásról.',
    },
    wayOfArticleReadByCitizenCheck:
      'Ez a minimum feltétele annak, hogy legalább le lehessen adni egy szavazatot. A szövegek értő elolvasását szövegértési teszttel ellenőrizi a rendszer. (5 kérdésre kell válaszolni, amit a rendszer kiválaszt-kisorsol 50 kérdésből)',
    extraWaysTOIncreaseTheValueOfYourVote:
      'Ezen felül a szavazatod értékét növelheted a következő módokon:',
    extraWaysTOIncreaseTheValueOfYourVoteAre: {
      readMoreExpertArticle:
        '1.	Elolvasol még több (maximum 5) szakértői pro – kontra cikk párt.',
      readCriticalReactionOnExpertArticlesArticles:
        '2.	Elolvasol a pro – kontra cikkekre (amiket elolvastál) reagáló „kritika” cikkeket is.',
      readAttechedContentAboutTheVotingTopic:
        '3. A szavazás témájához csatolt ismeretterjesztő anyagokból, szükséges háttértudást növelő tartalmakból is elolvasol párat.',
    },
    moreExtraVoteValueIncreaseFactors:
      'Ami még extra, szavazati érték növelő tényező, ha az állampolgár iskolai végzettsége is illeszkedik a szavazás témakörébe, illetve, ha az adott állampolgár érintettségi szintje is növelheti szavazásnak az értékét: Pld, ha abortusz témáról szavazunk, akkor a nemed, tehát, hogy nő vagy, előnyt jelent, úgy hogy emiatt megháromszorozódik a szavazatod fentebbi módokon kalkulált értéke.',
    theFormulaHowYourVoteValueCalculated:
      'A szavazati értékedet adó képlet így fest:',
    votingValueCalcedFormula:
      '[2 (szavazás témája + 1-1 pro és kontra szakértői cikk) pont + szakértői pro-kontra cikkek száma (0 - 5) pont + szakértői pro és kontra cikkekre reagáló cikkek száma (0 - 5) pont + csatolt ismeretanyagok, szakirodalom elolvasása (0 - 5) pont ]  * végzettségi szint (1-3) pont * érintettségi szint (1-3) pont',
    noteAboutExpertArticlesAndOtherContents:
      'Fontos még, hogy a szakértői cikkeket és egyéb tartalmakat a szavazók értékelhetik és ezáltal az igénytelen, valótlanságokat állító, rossz tartalmak lejjebb rangsorólódhatnak és így senki se fogja olvasni azokat. Az igényes tartalmak viszont népszerűségnek örvendhetnek és feljebb kerülhetnek a többség látómezőjébe érve ezzel.',
    theReasonWhyThisConceptIsSoStrong:
      'Amiért ez a modell roppant erős, az elsősorban a fentebb közölt szavazati érték súlyozási logika. A társadalom tagjait ezzel rákényszeríti, hogy képben legyenek a szavazás témájának alapkérdésével, valamint annak negatív, illetve pozitív következményeivel. Ezen felül ösztönözi és értékeli az adott szavazási témába vágó további kritikák elolvasását – megértését, illetve a tárgyi tudás – ismeretek növelését.',
    whatTheFramworkExpectsAsTheRecepieOfItsSuccess:
      'A keretrendszer arra épít, hogy az adott szavazás tárgyának - kérdéskörének mentén egy minőségileg tájékozódott, a valóságbuborékjából – komfortzónájából kimozdult, kiművelt állampolgár szava már érdemben tud funkcionálni a döntéshozói körök szintjén is. Erre van szükség. Ez garantálja azt, hogy a tömeg ne mindenhez (is) értő, felületesen tájékozódott, érzelmi alapon bevonódott csordaként vegyen részt egy ország igazgatásának folyamatában, hanem tényleg komolyan vehető, az elittel egyenértékű partnerként. Ezen felül a motiváció az önfejlesztésre és tanulásra is megnő a társadalom körében, mivel az emberekben fokozatosan egyre jobban tudatosul, hogy immáron ők irányítanak, ők felelnek a saját sorsukért.',
    downloadSpecText: {
      pt1: 'A keretrendszernek a részletes specifikációját innen:',
      linkText: 'D21_KERETRENDSZER.pdf',
      pt2: 'is le tudod tölteni.',
    },
    lastComment:
      'Megjegyzés: Ez nem egy kőbevésett modell, ez a keretrendszer jelenleg csak egy irányadó koncepció. A végleges verzió további alapos tervezési munkálatokat követel meg, majd ezt követően a folyamatos finomítások fogják kész szintre emelni ezt a népi kontrollt megvalósító kormányzási platformot. Ehhez az is kell, hogy Te is gondolkozz ezen, kezd el elsajátítani magadban egy ilyen keretrendszer létezésének a gondolatát. Látni fogod, hogy mennyire sok probléma gyökere vezethető vissza egy ilyen keretrendszernek a hiányára. Szembesülni fogsz azza, hogy mekkora tragédia is az, hogy jelenleg nincsen egy ilyen kifinomult és hatékony, a politikusainkat és vezetőinket a helyes irányban tartó/kényszerítő fékező-ellensúlyozó eszköz a nép kezében.',
  },
  theWeightOfTheStake: {
    title: '(2) A tét súlya',
    theHiddenPotentialInThisFramework:
      'Az előző pontban felvázolt digitális-jogi keretrendszer (D21) létrehozásának kiharcolása, mint a zászlónkra tűzött végcél, elsőre meglehet nem hangzik nagy durranásnak. A legtöbben, akik politikával foglalkoznak és forradalmi változásra törekszenek, a szokásos „rendszerváltás”, „kormányváltás” és társai vezényszavakat szeretik puffogtatni. Ők helycserében gondolkoznak. A versenytársaikhoz hasonlóan a kormányrúdra szeretnék tapasztani a kezüket. Ebben a hangoskodó - melldöngetők uralta közegben egy ilyen kitűzött cél, mint a miénk, könnyen tűnhet visszafogott erőkifejtésnek, hiszen mi nem akarunk senkit se leváltani, és mi magunk sem szeretnénk hatalomra törni a szó klasszikus értelmében. Azonban ez a „szerénység” senkit se tévesszen meg, mert a mi határozott elképzelésünk, azaz az ügyünk és egyben küldetésünk, alapjaiban fogja kibillenteni a mindenkori elitet hierarchikus hatalomgyakorlási pozíciójából. Olyan paradigmaváltást idézünk elő, olyan betonbiztos, kőbevésett kereteket szabunk, amik a nap 24 órájában rövid pórázra fogják a politikai elitet. A politikusok lesznek a mi szolgáink, ahogy annak eredetileg is kellene lennie. Mi nem újabb (rab)szolgatartókat szeretnénk hatalmi pozícióba juttatni, mi a nép és a döntéshozók jelenlegi relációját, azaz az alá – fölérendelt viszonyát fogjuk mellérendelt viszonnyá változtatni! A 21. századi technikai lehetőségek, a „szavazás” elavult koncepciójának újragondolásával karöltve lehetővé teszik mindezt.',
    whyWeHaveToPushThroughThis:
      'Ehhez viszont keresztűl kell vinnünk ezt a forradalmi változást! Ez az ügy létkérdés mindenki számára, mert csakis ez a keretrendszer garantálhatja a jövőben azt, hogy a társadalmunk felnőttként képes legyen a saját sorsáról belátóan és szakavatottan döntéseket hozni. Mindaddig, amíg ez a keretrendszer nem valósul meg, addig a közéletnek, a belpolitikának az önmagát újra és újra kitermelő mocsarának a bűzét kell szagolnunk és terméketlen – meddő talajának „gyümölcseit” kell elszenvednünk.',
    sameCirclesTimeToTime:
      'Ugyanazok a körök újra és újra, a menü mindig: Lop, csal, hazudik, korrupt, haveroknak oszt pénzt, inkompetens, értelmetlen forrásfelhasználások, istenkomplexusos vezetők, ideológiai alapon irányító, politikai-hatalmi érdek vezérlete megalománok, fontoskodó, egoból igazgató nagyságok, az ő hűbéreseik és a szervilis végrehajtó pártkatonáik.',
    theBestPoliticanIsStillWouldNotBeGood:
      'Ráadásul, ha még meg is idelizálnánk egy tökéletes politikai vezetést, jóravaló - becsületes, hozzáértő politikusok képében, még akkor se lenne képes egy ilyen vezetés a D21 keretrendszerben működő társadalomnál eredményesebben kormányozni. A nép kritikus és sokféle szemüvegével, amit ez a keretrendszer biztosítani fog, a hibaszázalékok lecsökkennek, a tökéletlenségek minimálisra redukálódnak és a társadalom valódi virágzásnak minden szinten.',
    cantRelyOnWhatWeHaveNow:
      'Éppen ezért NEM építhetünk csakis kizárólag a szűk politikai elit erkölcsi, tudásbéli és kompetencia nívójára. Ez egyenlő az öngyilkossággal. A történelem számtalan példával tud szolgálni arra vonatkozóan, hogy milyen az, amikor egyének, vagy/és a fanatizált-agymosott tömegek elvakult célokba kapaszkodva, az önreflexióra – önkorrekcióra késztető körülmények módszeres leépítésével – kiiktatásával akar boldogulni. Önkéntelenül is hibákat követnek el, vakvágányra futnak, vagy akár teljesen kisiklatják az életü(n)ket és végezetűl, ahogy az lenni szokott, majd a történelem távlatából megítéltetve az „utólag levont tanulság” hasznával tudnak csak szolgálni.',
    theStakeIs:
      'A tét, hogy hagyjuk továbbra is ebben a mederben folyni a dolgokat, vagy szakítunk végre a szándékosan előidézett és fenntartott bábeli zűrzavarral, amiben mindig percemberkék tépik ki egymás kezéből a kormányrudat, hogy aztán feltegyék a lemezlejátszóra ugyanazt a régi lemezt.',
    paradigmChangeInThe21thCentury:
      'Paradigmaváltást a 21. század demokráciáiba!',
    weDemandTheD21Framewrok:
      'Követeljük, hogy vezessék be a D21 keretrendszert!',
  },
  theRoad: {
    title: '(3) Az út, ahogyan célt érünk',
    howDoWePushOurLeadersToMakeThisHappen:
      'Tehát a fő kérdés a jelenlegi fázisban, hogy mégis, hogyan vesszük rá politikusainkat - vezetőinket, hogy létrehozzák számunkra ezt a merőben új ország/város/község kormányzási modellt, amiben mi, a nép, végre aktív, a politikusok felett kontrollt és hatalmat gyakorló szereplőkké emelkedünk fel a passzív (négyévente behúzok egy X-et) szerepünkből?',
    pressurizeTool:
      'Az egyetlen eszköz a mozgalmunk koncepciójának/céljának terjesztésén túl, az a kívülről fokozatosan növelt, módszeresen adagolt nyomásgyakorlás eszköze. Fel kell hívni magunkra a figyelmet. Megkerülhetetlen, ignorálhatatlan méretűvé és erejűvé kell duzzadnia közösségünknek.',
    prewrittenScenariobook:
      'Ehhez elengedhetetlen, hogy legyen egy előre megírt cselekvési forgatókönyv a kezünkben.',
    theAppContainsTheScenariobookAndTheMessageToGov:
      'Az applikáció ezt is tartalmazza a „D21 forgatókönyv” tab alatt. Itt ki vannak tűzve dátummal jelzett mérföldkövek, amik előre meghatározzák mozgalmunk számára, hogy mikor és hogyan kell újra és újra egyre erősebb nyomatékot adni ennek az ügynek. Ezek az időpontok kőbevésettek, megváltoztathatatlanok. Elkerülhetetlenül beteljesülő próféciákként üzenik a mindenkori hatalomnak: „Döntsd el, hogy megszoksz, vagy megszöksz. Létrehozod a D21 keretrendszert és integrálod a társadalmunkat a kormányzás döntéshozó mechanizmusaiba, vagy megtapasztalod, milyen is a nép elsöprő haragjával szembenézni.”',
    howWeGonnaMakeItInPractice:
      'Eleinte csak békés demonstrációk, felvonulások formájában keltünk feltünést. Aztán, ha nincs nyitottság az állam részéről a keretrendszer implementálására, elkezdünk tömegesen sztrájkolni, útblokádokat emelni. Ha ez se hoz eredményt, akkor elkezdünk hosszabb sztrájkokat szervezni. Letáborozunk a parlament elé, a közintézmények elé, mindenhol ott leszünk napokig, hetekig, hónapokig. Ország – világ látni fogja az eltökéltségünket és észreveszi a célt is, ami ennyire elszánttá tesz minket.',
    whatGivesUsThePower: 'Mi adja majd ehhez az erőt?',
    theMainMotivationToAct:
      'A fő motivációt a cselekvésre – szerveződésre a D21 keretrendszer szükségszerűségének fontossága, az ebből a rendszerből következő temérdek előny és pozitív hozadék éles és kitörölhetetlen víziója szolgáltatja. Az a tudat, hogy ezzel az áttöréssel végleg levethetjük a mellőzöttség és kiszolgáltatottság igáját, hogy végre érdemi – minőségi véleményt alkothatunk a társadalmunkat érintő kérdésekről és a leadott súlyozott szavazatainknak köszönhetően egyben direkt ráhatással is lehetünk a döntési folyamatokra. Ez a fejekben bekövetkező paradigmaváltás, amikor egyre többen kezdjük megérteni, hogy a társadalomra rátelepedő problémák sokaságának súlya, hogyan is orvosolható gyökeresen és véglegesen, olyan elementáris erőt fog biztosítani mindannyiunk számára, amivel a legkeményebb betonfalon is átmegyünk. Ez az a fajta felismerés, ami eleinte, a rossz beidegződések – berögzültségek miatt nehezen fog átmenni. Azonban amint az egyénben megérik ennek az új demokrácia modellnek a gondolata, úgy az azonosulásának a mértéke is hatványozott lesz. A mozgalom követőiben, a megérésük pillanatától olyan fűtőerő keletkezik, ami sohasem fog kihunyni, legyen bármekkora az ellenszél. Ez a mozgalom nem egy virtuális platformokon megnyilvánuló, social média felületekbe ágyazott jelenség lesz, nem, ami itt megszületik, az húsbavágóan valós, face to face interakciókat preferáló emberi közösségek adta talpazaton nyugszik.',
    spreadTheIdeologyPersonally:
      'Személyesen terjesztjük a modellt, a mozgalmat. Leülünk és beszélgetünk egymással, érvelünk, türelmesen válaszolunk minden kérdésre és hagyjuk, hogy minden potenciális új követőben magától szökkenjen szárba ez a mag.',
  },
  yourRoleInTheMovement: {
    title: '(4) A TE szerepet a mozgalomban',
    peopleWhoMasterTheIdeology:
      'Azon emberek, akik eljutnak arra a pontra, hogy készség szinten elsajátítják ezt a rendhagyóan új demokrácia modellt, amit ez a D21 keretrendszer képvisel, azok számára azonmód egyértelművé válik a küldetésünk rendkívüli fontossága. Erre kell építenünk elsősorban!',
    yourRoleToMakePeopleAchieveThis:
      'Éppen ezért a Te feladatod, hogy minél több ember eljusson erre a szintre, mert ez a fejekben végbemenő felismerés adja a kőszikla szilárdságú alapot az egész mozgalomnak. Egy pontot, egy ütközőt, ahonnan már senki sem hátrál, ahonnan csakis a cél felé vezet az út. Idővel, az alulról építkező fáradtságos munkánknak köszönhetően olyan szinten magától értetődően fogunk tekinteni ennek a keretrendszernek a szükségességére, mint arra, hogy ahhoz levegő kell, hogy tudjunk lélegezni.',
    theBattleIsOngoingAtIntellectualLevel:
      'Ezt a csatát szellemi fronton kell elsősorban megvívnunk. Meg kell győznöd arról a közvetlen és tágabb környezetedet is, hogy jelenleg nincsenek biztosítva a társadalmunk számára hatékony lehetőségek a gazdasági és politikai elit működésének konstruktív és érdemi befolyásolására.',
    weHaveToMakePeopleRecogniseWhatIsDemocracyToday:
      'Tudatosítanunk kell az emberekben, hogy jelenleg egy elavult és szándékosan életben tartott „demokrácia” modellel kell beérnünk. Nincs ráhatásunk semmire és senkire. Szólásszabadság, média nyilvánosság ereje, előre bejelentett tüntetések és a ciklusonként esedékes szavazások, illetve a nehézkesen levezényelhető népszavazások. Ezek mind vesződséges, energiát felemésztő, hatékonyságukban inkább siralmasan nevetséges módozatai a népnek az elitre való nyomásgyakorlásának. Lényegében lyukas vödröt adnak a kezünkbe, hogy azzal merjünk vizet. Aztán röhögnek esetlen próbálkozásainkon, vergődésünkön.',
    theGameIsRigged:
      'Az országban (sőt az egész világon) olyan pályán kell játszanunk, ahol mind a szabályok, mind a körülmények, és főként a játék alaplogikája is eleve kudarcra ítél bármilyen érdemi, a nép irányából kifejeződő akaratot. Technikai értelemben a nép neve jelenleg: Kuss.',
    yourRoleIsMakePeopleUnderstandWhatTheyAreLivingInAndWhatIsTheSolution:
      'A Te feladatod megértetni az emberekkel, hogy amiben most vannak, ahogy az egész hatalomgyakorlási modell ki van találva, az egy nevetségesen abszurd és elfogadhatatlan felállás, egy börtön a szabad akarat, a gondolatok, a cselekvési képesség számára. Azonban a jó hír, hogy ennek nem kell így lennie! A megoldás, a kiút itt van a kezünkben a D21 keretrendszer formájában! Ehhez első lépésben a megnyomorított tudatukat kell felszabadítanod, rá kell ébresztened a többi embert magad körül arra, hogy valójában nincs sötétség a szobában, pusztán a szemüket kötötték be.',
    educateAndTrainYourself:
      'Ehhez az kell, hogy képezd magad, sajátítsd el az összefüggéseket, amin ez az egész modell és a mozgalom alapszik. Készülj fel a vitákra, a szkeptikus kérdésekre, kritikus megjegyzésekre.',
    afterThisStartInfluencePeople:
      'Ezt követően kezd el terjeszteni a keretrendszer koncepcióját, valamint ezt az alkalmazást, mint a közös célkitűzésünk elérésének eszközét és állj készen azokra az időkre is, amikor tettekre lesz szükség!',
  },
}

export const I_TEXTS = DEFAULT_LANG === 'en' ? ideologyEN : ideologyHU

const hu = {
  navBar: {
    ourPhilosophy: 'Filozófiánk',
    scenario: 'A forgatókönyv',
  },
  newConnection: {
    validationError: {
      qrCodeExpired:
        'A generált QR kód már nem elég friss :( Kérj az új kapcsolatodtól egy frissebb QR kódot!',
      invalidNewConnIdInfo: 'Hibás adatok!',
    },
  },
}

const en = {
  navBar: {
    ourPhilosophy: 'Our philosophy',
    scenario: 'The scenariobook',
  },
  newConnection: {
    validationError: {
      qrCodeExpired:
        'QR code generation time has run out of date! Ask your connection to re-identify him/herself and scan the ID QR code again.',
      invalidNewConnIdInfo: 'Invalid new connection ID info!',
    },
  },
}

const TEXTS = DEFAULT_LANG === 'en' ? en : hu

export default TEXTS
