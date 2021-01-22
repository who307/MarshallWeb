import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../CSS/Accessories.css"
import "../../CSS/product/product.css"

export default function Accessories(props) {

  let [categoryTitle, setCategoryTitle] = useState({
    mainTitle: "EXTRAS FOR YOUR SPEAKERS AND HEADPHONES",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw42a5f643/images/categories/accessories/accessories-main-category/new-marshall-category-accessories-Desktop.jpg?sw=2000&sh=2000&sm=fit",
    categorytitle: "ACCESSORIES",
  })

  let [product, setProduct] = useState([{
    id: 1,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw716c9296/images/marshall/accessories/cables/medium/pl-marshall-accessories-35mm-cable-black-1700x1700.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "SPEAKER AUDIO CABLE",
    price: "25.00",
    new: "",
    color: <div><Link to="#"><span style={{ background: "black" }}></span></Link>
    <Link to="#"><span style={{ background: "white" }}></span></Link>
    <Link to="#"><span style={{ background: "black" }}></span></Link></div>,
  },
  {
    id: 2,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwe56d764f/images/marshall/accessories/spare-parts/medium/pl-marshall-accessories-monitor-II-anc-earcushion.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "MONITOR II A.N.C. EAR CUSHION",
    price: "10.00",
  },
  {
    id: 3,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwdbecc9e6/images/marshall/accessories/cables/medium/pl-marshall-accessories-usb-cable-black-1700x1700.png?sw=460&sh=460&sm=fit",
    stock: "OUT OF SOCK",
    name: "MID A.N.C.",
    price: "10.00",
  },
  {
    id: 4,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwcba8f1ec/images/marshall/accessories/spare-parts/medium/pl-marshall-accessories-mid-earcushion-1700x1700.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "MID BLUETOOTH EAR CUSHIONS",
    price: "10.00",
    category: "onEar",
    blueTooth: "blueTooth",
  },
  {
    id: 5,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw4460dcc0/images/marshall/accessories/spare-parts/medium/pl-marshall-accessories-ftf-filter-1700x1700.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "MONITOR F.T.F. FILTER",
    price: "10.00",
  },
  {
    id: 6,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwef8ae223/images/marshall/accessories/spare-parts/medium/pl-marshall-accessories-major-iii-earcushion-black.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "MAJOR III EAR CUSHIONS",
    price: "10.00",
  },
  {
    id: 7,
    productImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw9b3ac275/images/marshall/accessories/cables/new/medium/pos-marshall-accessories-L-plug-cable-black.png?sw=460&sh=460&sm=fit",
    stock: "",
    name: "HEADPHONE AUDIO CABLE",
    price: "15.00",
  },

  ]);
  const accessoriesList = product.map((product) => {

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
  })
  const mainBackGround ={
    background : "url( " + categoryTitle.mainImg + ")no-repeat center/100%"
  }
  return (
    <div className="accessoriesContainer">
      <div className="accessoriesMain" style={mainBackGround}>
        <div className="accessoriesWrap">
          <div className="mainText">
            <Link id="text1" to="#">{categoryTitle.mainTitle}</Link>
          </div>
        </div>
        <div className="gradientDiv">
        </div>
      </div>
      <div className="accessoriesContants">
        <div className="accessoriesProduct">
          <div className="accessoriesTitle">
            <h2>{categoryTitle.categorytitle}</h2>
          </div>
          <div className="accessoriesList">
            {accessoriesList}
          </div>
        </div>
      </div>
    </div>
  )
};