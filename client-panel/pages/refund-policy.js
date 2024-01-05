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
          Refund Policy
        </p>
        <div className="sm:max-w-[640px] w-full px-[30px] mx-auto my-20">
          <p>{`환불 정책

환불 보장 규칙
적용 가능한 법률에 따른 환불 권리 외에, 당사 웹사이트에서 직접 구매를 한 경우에는 체크아웃 중에 환불 옵션이 제시되었다면, 초기 구매 후 30일 이내 및 구독 기간이 끝나기 전에 고객 지원 센터 또는 이메일을 통해 당사에 연락하고, 구매 후 첫 30일 이내에 최소 7일 연속으로 계획을 따랐다는 증거를 제공한다면 환불을 받을 자격이 있습니다.
a
당사는 귀하의 신청을 검토하고 귀하의 신청이 승인되었는지 여부를 (이메일로) 통지할 것입니다.

중요한 진술
위의 요구 사항을 충족하는 경우에만 "환불 보장"에 따라 전액 자발적 환불을 받을 수 있음을 유의하십시오. 명확성을 위해, 이 "환불 보장"은 다음과 같은 경우에는 적용되지 않습니다:

개인적인 이유(제품이 마음에 들지 않거나 기대에 부합하지 않는 등);
재정적인 이유(청구될 것이라고 예상하지 못했거나, 시험이 구독으로 전환될 것이라고 예상하지 못했거나, 구독이 자동으로 갱신될 것이라고 예상하지 못했거나, 서비스가 유료라는 것을 예상하지 못한 경우 등).
일반 환불 규칙
일반적으로 위에 설명된 조건을 충족하지 못하는 경우, 귀하가 지불한 요금은 환불되지 않으며/또는 교환될 수 없으며, 본문에 달리 명시되어 있거나 적용 가능한 법률에 의해 요구되지 않는 한 그렇습니다.

EU 거주자를 위한 참고 사항: 귀하는 본 계약의 즉각적인 이행에 대해 명시적으로 동의하며, 우리의 서버가 귀하의 구매를 검증하고 해당 구매가 귀하에게 성공적으로 전달되면 계약에서 철회할 권리를 상실한다는 것을 인정합니다. 따라서 디지털 콘텐츠가 결함이 있는 경우가 아니면 환불을 받을 수 없습니다.`}</p>
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
