import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import Footer from "@/components/Footer";

const privacy = () => {
  return (
    <>
      <Headers />
      <Categories />
      <div>
        <p className="text-center text-3xl text-white bg-gray-800 py-16">
          Subscription Policy
        </p>
        <div className="sm:max-w-[640px] w-full px-[30px] mx-auto my-20">
          <p>{`구독 약관

무료 기간 구독
당사는 서비스에 대한 무료 기간 구독을 제공할 수 있습니다. 무료 기간 종료 최소 24시간 전에 취소를 요청하지 않으면 선택한 구독 기간에 대해 결제 화면에 표시된 가격으로 자동 청구됩니다.

구독
구독은 취소할 때까지 각 기간(매주, 매월, 6개월, 매년 또는 구매 시 선택한 옵션에 따라 다름)이 끝날 때마다 자동으로 갱신됩니다.

결제 방법
구매 확인 시 구매 시 제출한 결제 방법으로 요금이 청구됩니다. 귀하는 제출한 결제 방법으로 해당 요금을 청구할 수 있도록 당사에 권한을 부여합니다.

취소
구독을 취소한다는 것은 자동 갱신이 비활성화되지만, 현재 기간의 남은 시간 동안 구독 기능에 계속 접근할 수 있다는 것을 의미합니다. 앱을 삭제한다고 해서 구독이 취소되지 않는다는 점을 유의하십시오.

당사 웹사이트에서 구독을 구매하거나 시험을 활성화한 경우:
시험 또는 구독을 취소하려면 고객 지원 센터에 연락하거나 웹사이트 또는 앱 내에서 "구독 취소" 메커니즘을 사용하여 시험 기간이나 현재 구독 기간 종료 최소 24시간 전에 취소할 수 있습니다.

변경 사항
적용 가능한 법률이 허용하는 최대 범위 내에서, 당사는 언제든지 구독 요금을 변경할 수 있습니다. 우리는 앱에 새로운 가격을 게시하거나 이메일 알림을 보내거나 기타 두드러진 방법으로 가격 변경에 대한 합리적인 공지를 할 것입니다. 새로운 요금을 지불하고 싶지 않다면, 변경이 시행되기 전에 해당 구독을 취소할 수 있습니다.

환불
당사 웹사이트에서 구독을 구매하거나 시험을 활성화한 경우:
환불 보장 정책/이용 약관을 참조하십시오.

연락처
구독 약관과 관련하여 질문이 있는 경우, 고객 지원 센터에 연락하십시오.

이 정보의 스크린샷을 찍어 참조용으로 보관하십시오. 이는 구독을 관리하는 데 도움이 될 수 있습니다.

마지막 업데이트: 2023년 12월 31일`}</p>
          <br />
          <small>Copyright © 2023 myfate.com</small>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "subMenus",
        "footer",
        "common",
      ])),
    },
  };
}

export default privacy;
