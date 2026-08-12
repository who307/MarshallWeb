import React, {  } from 'react';
import { useParams } from "react-router-dom";

export default function HeadphoneSelect(props) {

  let params = useParams();
  var headphone_link = params.headphone_link;
    var selected_headphone = {
        title:'Sorry',
        description:'Not Found'    
    }
  return (
    <div className="headPhoneContainer">
      <h1>안녕하세요 라우터 연습중</h1>
    </div>
  )
};