import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../CSS/Backstage.css"
import "../../CSS/product/product.css"

export default function Backstage(props) {

  let [categoryTitle, setCategoryTitle] = useState([{
    mainTitle: "MARSHALL BACKSTAGE",
    subTitle: "This is a selection of what’s going on at Marshall. For the full story please follow Marshall on social media.",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw2cbc4ae8/images/backstage/category-hero/marshall-category-backstage-Desktop.jpg?sw=2000&sh=2000&sm=fit",
  },
  {
    mainTitle: "MARSHALL BACKSTAGE",
    subTitle: "This is a selection of what’s going on at Marshall. For the full story please follow Marshall on social media.",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw7cc5c0d4/images/backstage/travel-guides/los-angeles/boo-johnson/Marshall_Boo_Johnson_Los_Angeles_Overview_Hero_Desktop.jpg?sw=2000&sh=2000&sm=fit",
  },
  {
    mainTitle: "GUIDED BY MUSIC",
    subTitle: "It’s time to unravel where in the world the music scene is thriving right now. Let the music guide you through boroughs with undisclosed places and secret hideouts – leaving no stone unturned when searching for the best music travel experience.",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw0eb516f6/images/backstage/travel-guides/marshall-backstage-hero-desktop@1.41x.jpg?sw=2000&sh=2000&sm=fit",
  },
  {
    mainTitle: "HOMEWARD BOUND",
    subTitle: "Homeward Bound is a new series from Marshall, where our favourite artists invite us into their homes. Join us as they open their doors to discuss music, design and style - unfolding the story behind their home interior.",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw24a7009a/images/backstage/homeward-bound/zumi-table-desktop@1.41x.jpg?sw=2000&sh=2000&sm=fit",
  },
  {
    mainTitle: "ON THE ROAD",
    subTitle: "Ever wondered what life is like touring the world as an up-and-coming band? We’re giving you an exclusive look of what life is like on the road with some of our favourite artists.",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw79609bdd/images/backstage/on-the-road/allah-las/mh-allahlas-overview_hero_desktop.jpg?sw=2000&sh=2000&sm=fit",
  },
  {
    mainTitle: "LIFE IN STEREO",
    subTitle: "Life in Stereo is an interview series by Marshall, where up-and-coming artists invite a friend or collaborator into their homes and chat about life, music, inspiration and creativity.",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw3db5d40c/images/backstage/life-in-stereo/nilufer-yanya/01-Hero-Desktop.jpg?sw=2000&sh=2000&sm=fit",
  },
  ])
  let [product, setProduct] = useState([{

  }]);

  // 카테고리 이벤트
  let [categoryNum, setCategoryNum] = useState(0);
  useEffect(() => {
    let _category = document.querySelectorAll(".backStageCategory div span");
    for (let ctgr of _category) {
      ctgr.addEventListener("click", (e) => {
        setCategoryNum(Number(e.target.id))
        categoryEvent(Number(e.target.id))
      })
    }
  },[])

  let [categoryName, setCategoryName] = useState()
  const categoryEvent = (name) => {
    switch (name) {
      case 1: setCategoryName("ALL");
        break;
      case 2: setCategoryName("GUIDED BY MUSIC");
        break;
      case 3: setCategoryName("HOMEWARD BOUND");
        break;
      case 4: setCategoryName("ON THE ROAD");
        break;
      case 5: setCategoryName("LIFE IN STEREO");
        break;
      default: setCategoryName(0);
    }
  }
  console.log(categoryName)
  // 메인이미지 변경
  const mainBackGround = {
    background: "url( " + categoryTitle[categoryNum].mainImg + ")no-repeat center/100%",
    height : categoryName === undefined || categoryName === "GUIDED BY MUSIC" ? "34vw" : categoryName === "ALL" || categoryName === "HOMEWARD BOUND"  ? "46vw" : "40vw"
  }
  // 카테고리에 따라 height값 변경
  const _height = {
    height : categoryName === undefined || categoryName === "GUIDED BY MUSIC" ? "34vw" : categoryName === "ALL" || categoryName === "HOMEWARD BOUND"  ? "46vw" : "40vw"
  }

  return (
    <div className="backStageContainer">
      <div style={mainBackGround} className="backStageMain">
        <div className="backStageWrap">
          <div className="mainText">
            <Link id="text1" to="#">{categoryTitle[categoryNum].mainTitle}</Link>
            <Link id="text2" to="#">{categoryTitle[categoryNum].subTitle}</Link>
          </div>
        </div>
        <div className="gradientDiv" style ={_height}>
        </div>
      </div>

      <div className="backStageContants">
        <div className="backStageCategory">
          <h3>FILTER BY CATEGORY</h3>
          <div><span id="1">ALL</span></div>
          <div><span id="2">GUIDED BY MUSIC</span></div>
          <div><span id="3">HOMEWARD BOUND</span></div>
          <div><span id="4">ON THE ROAD</span></div>
          <div><span id="5">LIFE IN STEREO</span></div>
        </div>
        <div className="backStageProduct">
          <div className="backStageTitle">

          </div>
          <div className="backStageList">
          </div>
        </div>
      </div>
    </div>
  )
};