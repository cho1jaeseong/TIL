import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Parallax_Horizontal from "../../component/Carosual/Parallax_Horizontal";
import Header_White from "../../util/Header_White";
import Caro from "../../component/Carosual/Caro";
import { SBImageItem } from "../../component/Carosual/SBImageItem";
import { GlobalColor } from "../../util/colors";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import CardCaro from "../../component/Carosual/IndexX";

const CountryNews = () => {
  const [modal, setModal] = useState(false);
  const data = [
    {
      title: "CU, 호주 위스키 'NED' 출시…\"가성비 위스키 확대\"",
      content:
        "(서울=연합뉴스) 성혜미 기자 = 편의점 CU는 호주산 'NED' 위스키를 국내 최초로 출시하는 등 가성비 위스키 라인업을 확대한다고 6일 밝혔다.\n\nCU, 호주 위스키 'NED' 출시…\"가성비 위스키 확대\"\n[CU제공. 재판매 및 DB금지]\n\n\nNED 위스키(알코올 도수 40%·700㎖)는 호주 멜버른의 톱쉘프 증류소에서 만든 제품으로, 억압에 맞서 싸운 민중 영웅 '네드 켈리'의 이름을 땄다.\n\n인위적인 첨가물 없이 100% 호주산 곡물을 사용했고 버번과 싱글몰트 위스키를 배합한 메시 사워 위스키다.\n\n아메리칸 오크 배럴에서 발효하고 이중 증류했으며 2022년 호주 올해의 위스키에 선정되기도 했다.\n\nCU는 NED 위스키를 호주 현지 시중가보다 최대 50% 저렴한 가격인 약 3만원에 판매한다.\n\n구매자가 집에서 홈 칵테일을 만들 수 있도록 이달 말까지 콜라도 증정한다.\n\nCU는 작년 말 인도산 '룰렛 프리미엄 위스키'를 3만원 이하 저렴한 가격에 출시했다.\n\n해당 제품은 일주일 만에 3천병이 모두 소진돼 2천병을 추가로 공수해서 한 달 동안 총 5천병을 팔았다.\n\nBGF리테일 주류팀 주현돈 MD(상품기획자)는 \"음주 문화 다변화에 따라 가성비 위스키를 중심으로 새로운 술을 즐기고 싶어 하는 수요가 뚜렷하다\"며 \"합리적인 가격에 우수한 품질을 갖춘 새로운 상품을 지속해서 발굴할 것\"이라고 말했다.\n\nnoanoa@yna.co.kr",
      img_url:
        "https://imgnews.pstatic.net/image/001/2024/03/06/AKR20240306025400030_01_i_P4_20240306082905787.jpg?type=w647",
      article_url: "https://n.news.naver.com/mnews/article/001/0014544993",
      datestamp: "2024.03.06. 오전 8:28",
    },
    {
      title: "기아, EV 트렌드 코리아서 ‘EV9 디지털옵션 체험존’ 마련",
      content:
        "기아는 이달 6~8일 기간 서울 강남구 코엑스에서 열리는 'EV 트렌드 코리아 2024'에 참가한다고 6일 밝혔다.\n\n기아는 전기차 충전, 공간·신기술, 지속가능성을 각각 주제로 하는 3개의 전시 공간(존)을 마련했다.\n\n전기차 충전 존에서는 레이 EV를 전시하고 경차에 전기차의 혜택이 더해진 레이 EV의 우수한 경제성을 관람객들이 쉽게 이해할 수 있도록 했다. 또 대형 화면을 통해 기아 EV멤버스 고객들이 경험할 수 있는 다양한 충전 프로그램을 소개한다.\n\n공간·신기술 존에서는 스마트폰을 통해 기아 커넥트 스토어에서 구매한 디지털 사양이 실제 EV9에 무선 소프트웨어 업데이트(OTA)로 적용되는 과정을 체험할 수 있도록 했다. EV9에서 선택 가능한 다양한 시트 배열·기능, 색상 조합 등 주요 기능을 확인할 수 있는 키오스크도 준비했다.\n\n지속가능성 존에서는 EV6 GT-라인 전시와 해양 플라스틱·쓰레기 제거 활동을 하는 비영리단체 '오션클린업'과의 협업 활동을 소개하는 인터랙티브 월을 설치했다. 관람객은 인터랙티브 월을 터치해 태평양 쓰레기섬의 폐플라스틱이 기아의 차량 용품으로 자원화되는 과정을 확인할 수 있다.\n\nEV9에 적용된 지속가능성에 대한 기아의 의지를 담은 10가지 친환경 소재를 소개하는 전시물도 볼 수 있다.\n\n이밖에 기아는 전시장 내에 전기차에 대한 궁금증을 Q&A 방식으로 알아보는 'EV A to Z' 터치 스크린을 마련했다. 관람객이 직접 운전해 코엑스 주변을 돌아볼 수 있도록 시승차 2대도 운영한다.\n\nEV9은 EV 트렌드 코리아가 선정하는 'EV 어워즈 2024'에서 '소비자 선정 올해의 전기차'로 뽑혔다.\n\n이달 6~8일 서울 삼성동 코엑스에서 열리는 '2024 EV 트렌드 코리아' 기아 전시공간. 기아 제공",
      img_url:
        "https://imgnews.pstatic.net/image/029/2024/03/06/0002859273_001_20240306105201086.jpg?type=w647",
      article_url: "https://n.news.naver.com/mnews/article/029/0002859273",
      datestamp: "2024.03.06. 오전 10:50",
    },
    {
      title: "중국산 매트리스 국산으로 속여 미국에 수출했다 적발",
      content:
        "관세청 서울세관은 지난해 원산지 표시를 위반한 물품 286억 원어치를 적발했다고 밝혔습니다.\n\n적발된 업체는 총 42곳이며, 적발 건수는 61건으로 2022년 39건보다 61% 늘었습니다.\n\n단속 결과 중국·베트남산 저가 매트리스의 원산지 표시를 국산으로 바꿔 미국으로 수출한 업체 2곳이 적발됐습니다.\n\n적발 규모는 133억 원입니다.\n\n중국산 태양광 인버터를 국산으로 오인할 수 있게 표시한 업체(39억 원), 중국산 애견 미용 가위의 원산지를 표시하지 않거나 일본산인 것처럼 표시해 판매한 업체 6곳(31억 원) 등도 적발됐습니다.\n\n공공조달 물품인 근무복·전자칠판 등의 원산지 표시를 손상·변경해 납품한 업체 7곳(42억 원)도 단속됐습니다.\n\n이 중 일부 업체는 수입 원료 사용 등으로 국산 기준을 충족하지 못한 제품을 국산으로 표기했습니다.\n\n(사진=관세청 제공, 연합뉴스)",
      img_url:
        "https://imgnews.pstatic.net/image/055/2024/03/06/0001136392_001_20240306112601365.jpg?type=w647",
      article_url: "https://n.news.naver.com/mnews/article/055/0001136392",
      datestamp: "2024.03.06. 오전 11:24",
    },
    {
      title: "“지금이라도 금 사야 할까요?” [세모금]",
      content:
        '씨티 "중기적 금 강세장…불황 헤지"\n베렌버그 "트럼프 당선 시 변동성 확대로 금에 긍정적"\n[게티이미지]\n\n\n[헤럴드경제=김현경 기자] 최근 금값이 사상 최고치를 경신한 가운데, 월가의 전문가들은 금 랠리가 여기서 멈추지 않고 하반기까지 이어질 것으로 내다봤다.\n\n앞서 4일(현지시간) 뉴욕상업거래소에서 4월 인도분 금 선물 종가는 전 거래일 대비 1.5% 오른 온스당 2126.30달러로, 사상 처음으로 온스당 2100달러를 넘어섰다. 금 현물도 온스당 2129달러까지 올랐다.\n\n이로써 금값은 2개월여 만의 사상 최고치 기록을 경신했지만 시장 전문가들은 인플레이션(물가 상승)을 반영한 실질 가격으로 보면 금이 과거 최고점을 한참 밑돌고 있다고 지적한다.\n\n5일 미국 경제전문방송 CNBC에 따르면 미 투자은행 씨티그룹의 애널리스트들은 전날 보고서에서 "금이 하반기에 온스당 평균 2300달러를 기록할 확률이 25%"라며 "중기적인 금 강세장"이라고 전망했다. 기본 시나리오는 온스당 평균 2150달러지만 특수(와일드카드) 시나리오에서는 향후 12~16개월 동안 3000달러까지 갈 수 있다는 것이다.\n\n씨티는 금을 선진 시장의 "불황 헤지(위험 회피)"로 평가하면서 "오는 11월 미국 대선을 둘러싼 불확실성으로 인해 금 시장에 점점 더 순풍이 불고 있다"고 진단했다.\n\n독일 투자은행 베렌버그의 애널리스트들은 "도널드 트럼프 전 미국 대통령이 대선에서 승리할 경우 러시아-우크라이나 전쟁과 이스라엘-하마스 전쟁의 변동성 확대로 안전자산에 대한 선호가 높아져 금에 매우 긍정적일 것"으로 예상했다.\n\n이에 따라 최근 금이 사상 최고가를 기록했음에도 불구하고 기초 상품과 괴리를 보였던 금 연계 주식도 모멘텀을 얻을 것으로 전문가들은 내다봤다.\n\n그동안 미국의 예상보다 양호한 경제 지표와 연방준비제도(Fed·연준)의 긴축 정책이 금과 연계 주식을 억눌러 왔지만, 기준금리가 인하되거나 경제가 압력을 받는 상황에서는 금이 안전한 피난처로 여겨지기 때문이다.\n\n최근 금값이 치솟은 것도 연준의 6월 금리 인하에 대한 시장의 기대가 더욱 확고해진 영향이 있다.\n\n시카고상품거래소(CME) 페드워치에 따르면 연방기금금리 선물 시장은 6월 기준금리가 25bp 인하될 확률을 55%로 반영하고 있다.\n\n네덜란드 금융그룹 ING의 전략가들은 5일 "연준의 정책이 앞으로 몇 달 동안 금 가격 전망에 핵심적인 역할을 할 것"이라며 "시장은 거시적 동인과 지정학적 이벤트에도 반응하기 때문에 따라 금 가격은 몇 달간 변동성을 유지할 것"이라고 전망했다.',
      img_url:
        "https://imgnews.pstatic.net/image/016/2024/03/06/20240306050407_0_20240306112209730.jpg?type=w647",
      article_url: "https://n.news.naver.com/mnews/article/016/0002276231",
      datestamp: "2024.03.06. 오전 11:22",
    },
    {
      title: "비트코인 28개월 만에 사상 최고가…주식 시장은 하락",
      content:
        "비트코인 28개월 만에 사상 최고가…주식 시장은 하락\nKBS뉴스\n재생\n182\n00:00\n01:55\n\n\n\n[앵커]\n\n대표적인 가상화폐인 비트코인이 6만 9천 달러를 넘어서며 사상 최고가를 기록했습니다.\n\n2년 4개월 만입니다.\n\n반면 주식시장은 악재가 이어진 기술주들이 하락하면서 약세를 보였습니다.\n\n뉴욕에서 박일중 특파원입니다.\n\n[리포트]\n\n가장 오래됐고, 전체 가치 규모가 가장 큰 가상화폐인 비트코인의 가격이 한국 시각으로 오늘 새벽 0시쯤 6만 9천3백 달러를 넘어섰습니다.\n\n2021년 11월, 6만 9천 달러 턱밑까지 갔던 종전 사상 최고가를 2년 4개월 만에 넘어선 겁니다.\n\n비트코인은 지난해 10월 이후 160% 올랐고, 2월에만 40% 넘게 상승했습니다.\n\n지난해 말부터 형성됐던 비트코인 현물 ETF에 대한 기대감이 현실화 되는 분위기입니다.\n\n올해 1월 현물 ETF가 승인된 이후 관련 상품에 유입된 금액이 75억 5천만 달러, 우리 돈 10조 원에 이르는 것으로 추산됩니다.\n\n[벤 레이들러/eTORO 글로벌 시장 전략가 : \"현물 ETF가 (거래가 시작된 지) 6주 만에 전 세계에 있는 비트코인의 4%를 사들였습니다.\"]\n\n여기에 다음 달, 비트코인 채굴량이 절반으로 줄어드는 반감기가 되면 공급 속도가 더 줄어들게 되는데 이 또한 비트코인 가격을 끌어올렸습니다.\n\n2천백만 개로 정해진 비트코인 양은 이미 천9백만 개가 채굴된 상태입니다.\n\n다만 비트코인이 지금까지 네 차례나 고점 대비 4분의 1로 떨어진 적이 있어 변동성에 대한 우려는 여전합니다.\n\n가상화폐 시장이 활황을 보인 반면, 주식 시장은 하락했습니다.\n\n애플 아이폰의 중국 판매량이 전년 대비 24% 줄었다는 소식과, 테슬라의 중국 출하량이 감소했고, 독일 공장도 멈췄다는 소식 등으로 주요 기술주가 내린 영향이 컸습니다.\n\n이곳 미국시각으로 6일, 파월 미 연방준비제도 의장이 의회 증언에 나섭니다.\n\n자산 시장에 큰 영향을 줄 통화 정책 방향에 어떤 힌트를 내놓을지 주목됩니다.\n\n뉴욕에서 KBS 뉴스 박일중입니다.\n\n영상편집:이인영/촬영:서대영/자료조사:최유나 서호정\n\n■ 제보하기\n▷ 전화 : 02-781-1234, 4444\n▷ 이메일 : kbs1234@kbs.co.kr\n▷ 카카오톡 : 'KBS제보' 검색, 채널 추가\n▷ 네이버, 유튜브에서 KBS뉴스를 구독해주세요!",
      img_url: null,
      article_url: "https://n.news.naver.com/mnews/article/056/0011675382",
      datestamp: "2024.03.06. 오전 10:11",
    },
    {
      title: "공정위, 中플랫폼 ‘알리’ 첫 조사… 지속적 ‘소비자 보호 위반’ 의혹",
      content:
        "“국내외 업체 차별없이 대응”\n\n공정거래위원회가 중국 쇼핑 플랫폼 ‘알리익스프레스’의 소비자 보호 의무 위반 의혹에 대한 조사에 나섰다.\n\n6일 공정거래위원회에 따르면 공정위 조사원들은 지난주 서울 중구 알리코리아 사무실에 방문해 현장조사를 진행했다. 알리코리아는 알리익스프레스의 국내 마케팅을 담당하고 있다. 공정위는 알리익스프레스가 전자상거래법 등 소비자 보호 의무를 제대로 이행하고 있는지를 점검한 것으로 알려졌다. 또 알리익스프레스를 통해 판매하고 있는 상품에 대한 광고 내용을 적절하게 표시하고 있는지에 대해서도 조사한 것으로 전해졌다.\n\n알리익스프레스는 최근 다양한 소비자 보호 문제로 구설에 올랐다. 지난해 소비자원에서 진행한 알리익스프레스 관련 소비자 상담 건수는 673건으로, 전년(228건) 대비 약 3배로 늘었다. 올해는 1월에만 전년의 31.5%에 이르는 212건의 피해 상담이 이뤄졌다. 전자상거래법상 알리익스프레스와 같은 통신 판매 중개 사업자는 입점업체의 신원 정보 등을 소비자에게 제공해야 하고, 소비자 불만이나 분쟁 해결을 위한 인력·설비를 갖춰 대응해야 한다.\n\n이와 관련, 공정위 관계자는 “알리익스프레스에 대한 조사는 진행 중”이라며 “구체적인 조사 내용 등은 확인해 주기 어렵다”고 말했다. 공정위 측은 이번 조사와 관련해 “국내 소비자 보호를 위해 전자상거래 업체에 대해 상시 모니터링을 하고 있다”며 “법 위반이 확인될 경우 국내외 업체 차별 없이 적극적으로 대응한다는 것이 기본 입장”이라고 설명했다.",
      img_url: null,
      article_url: "https://n.news.naver.com/mnews/article/021/0002624954",
      datestamp: "2024.03.06. 오전 11:58",
    },
  ];
  const openModal = () => {
    setModal(true);
  };

  const RenderNews = ({ item }) => (
    <>
      <Pressable
        onPress={openModal}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.1)",
          borderless: false,
        }}
      >
        <View style={styles.container}>
          <Image source={{ uri: item.img_url }} style={styles.firstImage} />
        </View>
      </Pressable>
      <View style={styles.iconOuterContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="heart-o"
            size={24}
            style={styles.icon}
            color="white"
          />
          <Feather
            name="message-circle"
            size={24}
            style={styles.icon}
            color="white"
          />
          <FontAwesome
            name="paper-plane-o"
            size={24}
            style={styles.icon}
            color="white"
          />
        </View>
        <View>
          <Feather
            name="bookmark"
            size={24}
            style={styles.icon}
            color="white"
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textBold}>좋아요 0개</Text>
        <Text style={styles.textBold}>{item.title}</Text>
        <Text style={styles.text}>댓글 0개 모두 보기</Text>
        <Text style={styles.text}>{item.datestamp}</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "80%",
            borderWidth: 1,
            borderColor: "white",
          }}
        ></View>
      </View>
    </>
  );

  return (
    <>
      <Header_White />

      <ScrollView
        scrollEnabled={modal === false}
        style={{
          backgroundColor: GlobalColor.colors.primary_black,
          position: "relative",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              width: "80%",
              borderWidth: 1,
              borderColor: "black",
            }}
          ></View>
        </View>
        <View
          style={{
            height: 80,
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "black",
              paddingHorizontal: 20,
            }}
          >
            양산교차로
          </Text>
        </View>
        <View>
          {/* <Caro data={data} /> */}
          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  width: "80%",
                  borderWidth: 1,
                  borderColor: "white",
                }}
              ></View>
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => <RenderNews item={item} />}
              keyExtractor={(item) => item.title}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
      {modal && (
        <>
          <View
            style={{
              backgroundColor: GlobalColor.colors.primary_black50,
              position: "absolute",
              top: 0,
              left: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
            </View>
            <CardCaro data={data} setModal={setModal} />
          </View>
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 10,
    backgroundColor: GlobalColor.colors.primary_black,
    borderRadius: 20,
  },
  imageSecond: {
    width: "100%",
    height: 150,
    resizeMode: "stretch",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  firstImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    borderRadius: 20,
  },
  containerSecond: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    marginVertical: 20,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  textContainer: {
    width: "100%",
    padding: 10,
    alignItems: "start",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textContainerSecond: {
    width: "100%",
    padding: 10,
    height: 100,
  },
  textBold: {
    color: "white",
    fontSize: 15,
    marginVertical: 5,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    marginLeft: 5,
  },
  iconOuterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginHorizontal: 10,
  },
  text: {
    color: GlobalColor.colors.primary_gray,
    fontSize: 15,
  },
});

export default CountryNews;
