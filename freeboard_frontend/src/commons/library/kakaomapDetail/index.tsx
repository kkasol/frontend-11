import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapDetailPageProps {
  addressData: string;
}

export default function KakaoMapDetailPage(props: IKakaoMapDetailPageProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=714778af9f72faea8098b146c98d0b50&libraries=services&clusterer&drawing";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        let mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.addressData, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${props.addressData}</div>`,
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [props.addressData]);

  return <div id="map" style={{ width: "605px", height: "280px" }}></div>;
}
