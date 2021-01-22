import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../CSS/Speakers.css"
import "../../CSS/product/product.css"

export default function Speakers(props) {

  let [categoryTitle, setCategoryTitle] = useState([{
    mainTitle: "BUILD YOUR OWN WALL OF SOUND",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw8b196dac/images/categories/speakers/speakers-main-category/Desktop_Hero_Speakers_1927x800.jpg?sw=2000&sh=2000&sm=fit",
    categorytitle: "ALL SPEAKERS",
    subTitle: "Winners aren’t made overnight. Over 50 years of sound and design expertise has been distilled into each and every Marshall speaker, bringing that big stage presence home for your listening enjoyment."
  },
  {
    mainTitle: "CLASSIC MARSHALL LOOKS, MODERN BLUETOOTH TECHNOLOGY",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw70ee33e5/images/categories/speakers/bluetooth-category/Category-speakers-bluetooth-Desktop@1,41x.jpg?sw=2000&sh=2000&sm=fit",
    categorytitle: "BLUETOOTH SPEAKERS",
    subTitle: "From small to large, there’s a Marshall wireless speaker perfect for your home. Over 50 years of knowledge has been distilled into every Marshall speaker for an explosive sound that will make any room come alive with music."
  },
  {
    mainTitle: "MARSHALL PORTABLE SPEAKERS",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw2d2b5cf3/images/categories/speakers/portable-category/hit-the-road-hero-desktop@1,41x.jpg?sw=2000&sh=2000&sm=fit",
    categorytitle: "PORTABLE SPEAKERS",
    subTitle: "Are you ready to hit the road but in need of wireless solution for your music? Don’t let cords get in the way of your journey. Grab a portable, battery-powered Bluetooth speaker from Marshall; crank up the volume and live life to the beat of your own soundtrack."
  },
  ])
  let [product, setProduct] = useState([{
    id: 1,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw1c005e9a/images/marshall/speakers/acton-ii-bt/black/medium/pl-marshall-speakers-acton-ii-black-1700x1700.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "ACTON II BLUETOOTH",
    price: "309.00",
    blueTooth: "BLUETOOTH",
    new: "",
    color: <div><Link to="#"><span style={{ background: "black" }}></span></Link>
      <Link to="#"><span style={{ background: "white" }}></span></Link></div>
  },
  {
    id: 2,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwab985ef2/images/marshall/speakers/stanmore-ii-bt/black/medium/pl-marshall-speakers-stanmore-ii-black-1700x1700.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "STANMORE II BLUETOOTH",
    price: "429.00",
    blueTooth: "BLUETOOTH",
    color: <div><Link to="#"><span style={{ background: "black" }}></span></Link>
      <Link to="#"><span style={{ background: "white" }}></span></Link>
      <Link to="#"><span style={{ background: "#824820" }}></span></Link></div>,
  },
  {
    id: 3,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw4e4a824d/images/marshall/speakers/woburn-ii/black/medium/pl-marshall-speakers-woburn-ii-black-1700x1700.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "WOBURN II BLUETOOTH",
    price: "619.00",
    blueTooth: "BLUETOOTH",
    color: <div><Link to="#"><span style={{ background: "black" }}></span></Link>
      <Link to="#"><span style={{ background: "white" }}></span></Link>
      <Link to="#"><span style={{ background: "#824820" }}></span></Link></div>,
  },
  {
    id: 4,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw88a48dc4/images/marshall/speakers/emberton/medium/Thumbnail_Emberton_medium.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "EMBERTON",
    price: "179.00",
    portable: "PORTABLE",
    blueTooth: "BLUETOOTH",
    color: <div><Link to="#"><span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #000000 50%" }}></span></Link>
      <Link to="#"><span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #b9935e 50% )" }}></span></Link></div>,
  },
  {
    id: 5,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw238395b1/images/marshall/speakers/stockwell-ii/black/medium/pl-marshall-speakers-stockwell-ii-black.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "STOCKWEEL II",
    price: "239.00",
    from: "From",
    portable: "PORTABLE",
    blueTooth: "BLUETOOTH",
    color: <div><Link to="#"><span style={{ background: "black" }}></span></Link>
      <Link to="#"><span style={{ background: "#3F5364 " }}></span></Link>
      <Link to="#"><span style={{ background: "#50294c  " }}></span></Link>
      <Link to="#"><span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #b9935e 50% )" }}></span></Link></div>,
  },
  {
    id: 6,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw997ba8ca/images/marshall/speakers/kilburn-ii/medium/pl-marshall-speakers-kilburn-ii-black-1700x1700.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "KILBURN II",
    price: "99.00",
    from: "From",
    portable: "PORTABLE",
    blueTooth: "BLUETOOTH",
    color: <div><Link to="#"><span style={{ background: "black" }}></span></Link>
      <Link to="#"><span style={{ background: "#50294c  " }}></span></Link></div>,
  },
  {
    id: 7,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwc06d1647/images/marshall/speakers/tufton/medium/pl-marshall-speakers-tufton-black.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "TUFTON",
    price: "499.00",
    portable: "PORTABLE",
    blueTooth: "BLUETOOTH",
  },

  ]);
  // 카테고리 이벤트
  let [categoryNum, setCategoryNum] = useState(0);
  useEffect(() => {
    let _category = document.querySelectorAll(".speakersCategory div span");
    for (let ctgr of _category) {
      ctgr.addEventListener("click", (e) => {
        setCategoryNum(Number(e.target.id))
        categoryEvent(Number(e.target.id))
      })
    }
  })

  let [categoryName, setCategoryName] = useState()
  const categoryEvent = (name) => {
    switch (name) {
      case 0: setCategoryName("ALL");
        break;
      case 1: setCategoryName("BLUETOOTH");
        break;
      case 2: setCategoryName("PORTABLE");
        break;
      default: setCategoryName(0);
    }
  }
  // 메인이미지 변경
  const mainBackGround = {
    background: "url( " + categoryTitle[categoryNum].mainImg + ")no-repeat center/100%"
  }
  //ALl 카테고리에서만 필터기능 디스플레이보여줌
  const _display = {
    display: categoryNum === 0 ? "" : "none"
  }
  // 필터 이벤트
  let [filterName, setFilterName] = useState()

  useEffect(() => {
    let _label = document.querySelectorAll(".filterList");
    for (let i of _label) {
      i.addEventListener("click", (e) => {
        setFilterName(e.target.textContent);
      });
    }
  }, [])
  let [filterData, setFilterData] = useState([])

  useEffect(()=>{
  
    const data = {
      name: filterName,
    }
    const result = filterData.some((overlap) => (overlap.name === data.name))
    if (!result) {
      setFilterData([...filterData, data])
    } else if (result) {
      setFilterData(filterData.filter(overlap => overlap.name !== data.name));
    }
},[filterName])

  let [filter, setFilter] = useState({
    show: "SHOW FILTERS",
    hide: "HIDE FILTERS",
    on: false
  });
  // 필터 핸들러
  const filtersHandler = () => {
    setFilter({
      ...filter,
      on: !filter.on
    })
  }
  //필터 화살 방향 전환
  const _arrow = {
    transform: filter.on ? "rotate(180deg)" : "",
    marginLeft: "1vw"
  }
  // filter.on 값이 트루일 때 디스플레이보여줌
  const filterOpen = {
    display: filter.on ? "inline" : "none"
  }
  // 스피커 리스트 
  const speakersList = product.map((product) => {
    if (categoryNum === 0 ||
      categoryName === product.blueTooth ||
      categoryName === product.portable) {
      return (
        <div key={product.id} className="productWrap">
          <Link className="imgLink" to="#">
            {product.new}
            <div style={{ background: "url( " + product.productImg + ")no-repeat center/100%" }} className="imgDiv">
            </div>
          </Link>
          <Link to="#" className="productText">
            <div className="productName">
              <h2>{product.name}</h2>
              <span className="productStock">{product.portable}</span>
            </div>
            <span className="productStock">{product.stock}</span>
            <div className="priceText">
              <div className="productFrom">{product.from}</div>
              <i>$</i>
              <span>{product.price}</span>
            </div>
            <div className="colorSelect">
              {product.color}
            </div>
          </Link>
        </div>
      )
    }
  })

  return (
    <div className="speakersContainer">
      <div style={mainBackGround} className="speakersMain">
        <div className="speakersWrap">
          <div className="mainText">
            <Link id="text1" to="#">{categoryTitle[categoryNum].mainTitle}</Link>
          </div>
        </div>
        <div className="gradientDiv">
        </div>
      </div>

      <div className="speakersContants">
        <div className="speakersCategory">
          <h3>SHOP BY CATEGORY</h3>
          <div><span id="0">ALL</span></div>
          <div><span id="1">BLUETOOTH</span></div>
          <div><span id="2">PORTABLE</span></div>
        </div>
        <div className="speakersProduct">
          <div className="speakersTitle">
            <h2>{categoryTitle[categoryNum].categorytitle}</h2>
            <span>{categoryTitle[categoryNum].subTitle}</span>

            <div className="filterDiv" style={_display}>
              <div className="filterText">
                <div onClick={filtersHandler}>
                  {filter.on ? filter.hide : filter.show}
                  <FontAwesomeIcon icon={faChevronDown} style={_arrow} />
                </div>
              </div>
              <div style={filterOpen} className="filterCategory">
                <div className="filterBtn" >
                  <label className="filterList">
                    <input id="cb01" type="checkbox"></input>
                    <label for="cb01"></label>
                    <div>MULTI-ROOM</div>
                  </label>
                  <label id="AMAZON ALEXA" className="filterList">
                    <input id="cb02" type="checkbox"></input>
                    <label for="cb02"></label>
                    <div>AMAZON ALEXA</div>
                  </label>
                  <label className="filterList">
                    <input id="cb03" type="checkbox"></input>
                    <label for="cb03"></label>
                    <div>GOOGLE ASSISTANT</div>
                  </label>
                  <label className="filterList">
                    <input id="cb04" type="checkbox"></input>
                    <label for="cb04"></label>
                    <div>SPOTIFY CONNECT</div>
                  </label>
                  <label className="filterList">
                    <input id="cb05" type="checkbox"></input>
                    <label for="cb05"></label>
                    <div>GOOGLE HOME COMPATIBLE</div>
                  </label>
                  <label className="filterList">
                    <input id="cb06" type="checkbox"></input>
                    <label for="cb06"></label>
                    <div>CHROMECAST BUILT-IN</div>
                  </label>
                  <label className="filterList">
                    <input id="cb07" type="checkbox"></input>
                    <label for="cb07"></label>
                    <div>WI-FI</div>
                  </label>
                  <label className="filterList">
                    <input id="cb08" type="checkbox"></input>
                    <label for="cb08"></label>
                    <div>BLUETOOTH</div>
                  </label>
                  <label className="filterList">
                    <input id="cb09" type="checkbox"></input>
                    <label for="cb09"></label>
                    <div>AIRPLAY</div>
                  </label>
                  <label className="filterList">
                    <input id="cb10" type="checkbox"></input>
                    <label for="cb10"></label>
                    <div>3.5MM INPUT</div>
                  </label>
                  <label className="filterList">
                    <input id="cb11" type="checkbox"></input>
                    <label for="cb11"></label>
                    <div>RCA INPUT</div>
                  </label>
                  <label className="filterList">
                    <input id="cb12" type="checkbox"></input>
                    <label for="cb12"></label>
                    <div>PORTABLE (BATTERY)</div>
                  </label>
                </div>

              </div>
            </div>
          </div>
          <div className="speakersList">
            {speakersList}
          </div>
        </div>
      </div>
    </div>
  )
};