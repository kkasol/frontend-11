import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
interface IKakaoMapPageProps {
  useditemAddress: string;
}
export default function KakaoMapPage(props: IKakaoMapPageProps): JSX.Element {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2505c3d7a19d578c115df86ac747fe70";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        const container = document.getElementById("map");
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.49221, 126.900169), // 지도의 중심좌표.
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        setMap(map);

        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch(props.useditemAddress, placesSearchCB);
        function placesSearchCB(data: any, status: any, pagination: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            var bounds = new window.kakao.maps.LatLngBounds();

            for (var i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }

            map.setBounds(bounds);
          }
          function displayMarker(place: any) {
            var marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(place.y, place.x),
            });

            window.kakao.maps.event.addListener(marker, "click", function () {
              infowindow.setContent(
                '<div style="padding:5px;font-size:12px;">' +
                  place.place_name +
                  "</div>"
              );
              infowindow.open(map, marker);
            });
          }
        }
      }, []);
    };
  });

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>;
    </>
  );
}
