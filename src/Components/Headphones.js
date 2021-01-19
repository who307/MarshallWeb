import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Headphones.css"
import "../CSS/product/product.css"

export default function Headphones(props) {

  let [categoryTitle, setCategoryTitle] = useState([{
    mainTitle: "LEND US YOUR EARS AND WE’LL PLAY YOU A SONG",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw1a4324d2/images/categories/headphones/monitor-ii-anc/desktop/HERO-Mon-II-ANC-Desktop-1927x800-2.jpg?sw=2000&sh=2000&sm=fit",
    categorytitle: "ALL HEADPHONES",
    subTitle: "From in-ears to over-ears and everything in-between, there’s a Marshall headphone that’s perfect for you."
  },
  {
    mainTitle: "THE BIGGER, THE BADDER",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb95c0544/images/front-page/year/2020/february/HERO-Mon-II-ANC-Desktop-1927x800.jpg?sw=1680&sh=2000&sm=fit",
    categorytitle: "OVER-EAR HEADPHONES",
    subTitle: "What makes a good headphone great? Hi-Fi sound for starters. Pair that with long-wearing comfort, an ergonomic fit and devilish good looks, and you’ve got yourself a Marshall over-ear headphone. Meet your master."
  },
  {
    mainTitle: "SLIP ON SOMETHING MORE COMFORTABLE",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwf55d415f/images/categories/headphones/on-ear-category/category-headphones-on-ear-Desktop@1,41x.jpg?sw=1680&sh=2000&sm=fit",
    categorytitle: "ON-EAR HEADPHONES",
    subTitle: "Built for life on the road or life behind a desk, Marshall on-ear headphones provide endless comfort for hours upon hours of listening."
  },
  {
    mainTitle: "SMALL BUT MIGHTY",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwa49073f5/images/categories/headphones/in-ear-category/new-category-headphones-in-ear-Desktop@1.41x.jpg?sw=1680&sh=2000&sm=fit",
    categorytitle: "IN-EAR HEADPHONES",
    subTitle: "Searching for the perfect in-ear headphone? Look no further. Each in-ear from Marshall comes with a microphone and remote, a tangle resistant cord, and interchangeable sleeves or adjustable ear-loops ensuring that the earbuds will fit comfortably in your ears."
  },
  {
    mainTitle: "FREEDOM OF WIRELESS",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw67ef0771/images/categories/headphones/bluetooth-category/category-headphones-bluetooth-Desktop@1,41x.jpg?sw=2000&sh=2000&sm=fit",
    categorytitle: "BLUETOOTH WIRELESS HEADPHONES",
    subTitle: "Bluetooth headphones from Marshall. Now go forth, and hear all the chords without the cords, combined with over 50 years of tried and true Marshall performance.NEW"
  },
  {
    mainTitle: "TURN IT UP AND TUNE OUT",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwe8ed4363/images/categories/headphones/anc-category/new-category-headphones-noise-cancelling-Desktop@1.41x.jpg?sw=1680&sh=2000&sm=fit",
    categorytitle: "ACTIVE NOISE CANCELLING HEADPHONES",
    subTitle: "Our active noise cancelling headphones utilise four microphones to continuously measure and pinpoint ambient noise to block out the things you don’t want to hear. Now you can focus on what matters most – the music."
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
      <Link to="#"><span style={{ background: "#824820" }}></span></Link></div>,

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
  // querySelectorAll()로 가져온 노드리스트를 forOf문을 사용하여 인덱스로
  // 변환해주고 해당 태그전체에 id값을 가져오는 이벤트 추가 
  // useEffect() deps값을 비워서 마운트 됐을 때만실행
  useEffect(() => {
    let _category = document.querySelectorAll(".headPhoneCategory span")
    for (let ctgr of _category) {
      ctgr.addEventListener("click", (e) => {
        setCategoryNum(Number(e.target.id));
        categoryEvent(Number(e.target.id))
      })
    }
  },[])
  let [categoryName, setCategoryName] = useState()
  const categoryEvent = (name) => {
    switch (name) {
      case 1: setCategoryName("overEar");
        break;
      case 2: setCategoryName("onEar");
        break;
      case 3: setCategoryName("inEar");
        break;
      case 4: setCategoryName("blueTooth");
        break;
      case 5: setCategoryName("noiseCancel");
        break;
      default: setCategoryName(0);
    }
  }

  const headPhoneList = product.map((product) => {
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
  const mainBackGround = {
    background: "url( " + categoryTitle[categoryNum].mainImg + ")no-repeat center/100%"
  }

  return (
    <div className="headPhoneContainer">
      <div style={mainBackGround} className="headPhoneMain">
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
          <div><span id="0">ALL</span></div>
          <div><span id="1">OVER-EAR</span></div>
          <div><span id="2">ON-EAR</span></div>
          <div><span id="3">IN-EAR</span></div>
          <div><span id="4">BLUETOOTH</span></div>
          <div><span id="5">NOISE CANCELLING</span></div>
        </div>
        <div className="headPhoneProduct">
          <div className="headPhoneTitle">
            <h2>{categoryTitle[categoryNum].categorytitle}</h2>
            <span>{categoryTitle[categoryNum].subTitle}</span>
          </div>
          <div className="headPhoneList">
            {headPhoneList}
          </div>
        </div>
      </div>
    </div>
  )
};