import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Backstage.css"
import "../CSS/product/product.css"

export default function Backstage(props) {

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
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw6b782c73/images/marshall/headphones/major-iv/medium/cart-marshall-major-iv-black.png?sw=670&sh=670&sm=fit",
    stock: "OUT OF STOCK",
    name: "MAJOR IV",
    price: "179.00",
    category: "onEar",
    blueTooth: "blueTooth",
    new: <div className="newProduct">NEW</div>,
  },
  {
    id: 2,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw64d73121/images/marshall/headphones/monitor-ii-anc/medium/mh-monitor-II-ANC-medium.png?sw=380&sh=380&sm=fit",
    stock: "",
    name: "MONITOR II A.N.C.",
    price: "359.00",
    category: "overEar",
    noiseCancel: "noiseCancel",
  },
  {
    id: 3,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwf5df594f/images/marshall/headphones/mid-anc/medium/pl-marshall-headphones-mid-anc-1700x1700.png?sw=380&sh=380&sm=fit",
    stock: "",
    name: "MID A.N.C.",
    price: "329.00",
    category: "onEar",
    blueTooth: "blueTooth",
    noiseCancel: "noiseCancel",
  },
  {
    id: 4,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwbeee2a1b/images/marshall/headphones/major-iii-bt/black/medium/pl-marshall-headphones-major-iii-bluetooth-black-1700x1700.png?sw=380&sh=380&sm=fit",
    stock: "",
    name: "MAJOR III BLUETOOTH",
    price: "179.00",
    category: "onEar",
    blueTooth: "blueTooth",
    color: <div><Link to="#"><span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #000000 50%" }}></span></Link>
      <Link to="#"><span style={{ background: "linear-gradient(90deg, #ffffff, #ffffff 50%, #ffffff 50%" }}></span></Link></div>,
  },
  {
    id: 5,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw3f238268/images/marshall/headphones/minor-ii/black/medium/pl-marshall-headphones-minor-ii-black-1700x1700.png?sw=380&sh=380&sm=fit",
    stock: "",
    name: "MINOR II",
    price: "159.00",
    category: "inEar",
    blueTooth: "blueTooth",
    color: <div><Link to="#"><span style={{ background: "black" }}></span></Link>
      <Link to="#"><span style={{ background: "white" }}></span></Link>
      <Link to="#"><span style={{ background: "#824820"}}></span></Link></div>,

  },
  {
    id: 6,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwacdd1bc3/images/marshall/headphones/mode-eq/medium/pl-marshall-headphones-mode-eq-1700x1700.png?sw=380&sh=380&sm=fit",
    stock: "",
    name: "MODE EQ",
    price: "99.00",
    category: "inEar"
  },
  {
    id: 7,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw0ea9b3e6/images/marshall/headphones/mode/medium/pl-marshall-headphones-mode-1700x1700.png?sw=380&sh=380&sm=fit",
    stock: "",
    name: "MODE",
    price: "75.00",
    category: "inEar"
  },

  ]);

  let [categoryNum, setCategoryNum] = useState(0);
  const selectCategory = (e) => {
    setCategoryNum(Number(e.target.id));
    categoryEvent(Number(e.target.id))
  }
  let [categoryName, setCategoryName] = useState()

  const categoryEvent = (name) => {
    switch (name) {
      case 1: setCategoryName("BlueTooth");
        break;
      case 2: setCategoryName("PorTable");
        break;
      default: setCategoryName("all");
    }
  }

  const speakersList = product.map((product) => {

    if (categoryNum === 0 ||
      categoryName === product.category ||
      categoryName === product.blueTooth ||
      categoryName === product.noiseCancel) {
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
            </div>
            <span className="productStock">{product.stock}</span>
            <div className="priceText">
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
    <div className="headPhoneContainer">
      <div style={{ background: "url( " + categoryTitle[categoryNum].mainImg + ")no-repeat center/100%" }} className="headPhoneMain">
        <div className="headPhoneWrap">
          <div className="mainText">
            <Link id="text1" to="#">{categoryTitle[categoryNum].mainTitle}</Link>
          </div>
        </div>
        <div className="gradientDiv">
        </div>
      </div>

      <div className="headPhoneContants">
        <div className="headPhoneCategory">
          <h3>SHOP BY CATEGORY</h3>
          <div><span onClick={selectCategory} id="0">ALL</span></div>
          <div><span onClick={selectCategory} id="1">BLUETOOTH</span></div>
          <div><span onClick={selectCategory} id="2">PORTABLE</span></div>
        </div>
        <div className="headPhoneProduct">
          <div className="headPhoneTitle">
            <h2>{categoryTitle[categoryNum].categorytitle}</h2>
            <span>{categoryTitle[categoryNum].subTitle}</span>
          </div>
          <div className="headPhoneList">
            {speakersList}
          </div>
        </div>
      </div>
    </div>
  )
};