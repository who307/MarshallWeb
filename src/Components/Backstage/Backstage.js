import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../CSS/Backstage.css"

export default function Backstage(props) {

  let [categoryTitle, setCategoryTitle] = useState([{
    mainTitle: "MARSHALL BACKSTAGE",
    subTitle: "This is a selection of what’s going on at Marshall. For the full story please follow Marshall on social media.",
    mainImg: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw7cc5c0d4/images/backstage/travel-guides/los-angeles/boo-johnson/Marshall_Boo_Johnson_Los_Angeles_Overview_Hero_Desktop.jpg?sw=2000&sh=2000&sm=fit",
    mainImg1: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw2cbc4ae8/images/backstage/category-hero/marshall-category-backstage-Desktop.jpg?sw=2000&sh=2000&sm=fit",
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
  let [news, setNews] = useState([
    {
      id: 1,
      img: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwbabd367c/images/backstage/mh-allahlas-overview.jpg?sw=1234&sh=2000&sm=fit",
      title: "on the road width allah-las",
      link: "#"
    },
    {
      id: 2,
      img: "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwfdba6f2a/images/backstage/mh-boojohnson-overview.jpg?sw=1234&sh=2000&sm=fit",
      title: "BOO JOHNSON IN LOS ANGELES",
      link: "#"
    },

  ]);
  let [subNews, setsubNews] = useState([
    {
      id: 1,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwc12b2085/images/backstage/homeward-bound/zumi-rosow/zumi-overview-listing.jpg",
      date: "PUBLISH DATE: 2020-02-26",
      title: "HOMEWARD BOUND WITH ZUMI ROSOW",
      subTitle: "Zumi has recorded with Diva, Ex-Cult, Deerhunter and others, and toured internationally as a member of the Black Lips who have recorded their latest album “Sing in a world that’s falling apart.”",
      link: "#"
    },
    {
      id: 2,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw13722e67/images/backstage/on-the-road/allah-las/mh-allahlas-overview_listing.jpg",
      date: "PUBLISH DATE: 2019-12-06",
      title: "ON THE ROAD WITH ALLAH-LAS",
      subTitle: "Four albums and a decade together, the Allah-Las have branched out from the sunny Southern California sound that defined their first few records.",
      link: "#"
    },
    {
      id: 3,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw87ec4479/images/backstage/travel-guides/london/charlie-barker/Marshall_Charlie_Barker_London_Overview_Listing.jpg",
      date: "PUBLISH DATE: 2019-11-21",
      title: "CHARLIE BARKER IN LONDON",
      subTitle: "Meet Charlie Barker – London local and girl about town. Her sartorial sense of style and artistic flair embodies the spirit of rock ‘n’ roll. Follow her as she takes us to her favourite Hackney spots.",
      link: "#"
    },
    {
      id: 4,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw35b411cf/images/backstage/travel-guides/copenhagen/freja-wewer/Marshall_Freja_Wewer_Copenhagen_Overview_Listing.jpg",
      date: "PUBLISH DATE: 2019-11-21",
      title: "FREJA WEWER IN COPENHAGEN",
      subTitle: "Scandinavian it-girl Freja Wewer loves her hometown, Copenhagen. Let her show you around the neighbourhood of Nørrebro, bringing you to her favourite spots, such as the bar Café Viking and the record shop Insula Music.",
      link: "#"
    },
    {
      id: 5,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw13274a5c/images/backstage/travel-guides/beijing/hachi/Marshall_Hatchi_Beijing_Overview_Listing.jpg",
      date: "PUBLISH DATE: 2019-11-21",
      title: "HACHI 王悦伊 IN BEIJING",
      subTitle: "Beijing is a thriving metropolis that may seem overwhelming to some, but not to Hachi王悦伊, who calls it her home. Get to know Hachi王悦伊, and her hometown, as she takes us on a journey through the streets of Gulou.",
      link: "#"
    },
    {
      id: 6,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb296249a/images/backstage/travel-guides/berlin/vanellimelli/Marshall_Vanellimelii_Berlin_Overview_Listing.jpg",
      date: "PUBLISH DATE: 2019-11-21",
      title: "VANELLIMELLI IN BERLIN",
      subTitle: "Berlin-based VANELLIMELLI channels her cool-girl aesthetics into a variety of artistic mediums. Join her as she takes us on a journey through Kreuzberg, a neighbourhood that is filled with live venues, record stores and bars.",
      link: "#"
    },
    {
      id: 7,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb66c3b2c/images/backstage/travel-guides/los-angeles/boo-johnson/Marshall_Boo_Johnson_Los_Angeles_Overview_Listing.jpg",
      date: "PUBLISH DATE: 2019-11-21",
      title: "BOO JOHNSON IN LOS ANGELES",
      subTitle: "California native Boo Johnson is a professional skateboarder who began touring the world at 16 years old. He now calls Los Angeles his home. Follow him on a journey to his favourite Echo Park hangouts.",
      link: "#"
    },
    {
      id: 8,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw84cfa221/images/backstage/travel-guides/paris/louise-follain/Marshall_Louise_Follain_Paris_Overview_Listing.jpg",
      date: "PUBLISH DATE: 2019-11-21",
      title: "LOUISE FOLLAIN IN PARIS",
      subTitle: "There is something very, “je ne sais quoi” about the Paris native Louise Follain – reminding us of a modern Jane Birkin. Hitch a ride with her as she is spending her time around the 11th Arrondissment.",
      link: "#"
    },
    {
      id: 9,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwaa272db4/images/backstage/travel-guides/berlin/east-side-gallery/mobile/ID_Marshall_Berlin--5.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "EAST SIDE GALLERY",
      subTitle: "Facing the former Eastern Side, international artists were invited to paint murals along a mile-stretch of the Wall as a symbol of freedom, identity and unity.",
      link: "#"
    },
    {
      id: 10,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw28ae769c/images/backstage/travel-guides/copenhagen/mayhem/mobile/14-hero.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "MAYHEM",
      subTitle: "Nestled on the border between Nørrebro and Østerbro lies a neighbourhood known on the one hand for its peace and quiet – plus young, wealthy parents – and on the other for the well-named venue Mayhem.",
      link: "#"
    },
    {
      id: 11,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwa4de096a/images/backstage/travel-guides/london/earth/Earth_800x800.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "EARTH",
      subTitle: "The inside of the newest venue in Hackney is a stunning contrast of a beautiful old interior and the latest in live music technology. EartH is the former Savoy Cinema, which opened in 1936 but sat derelict for four decades above a Turkish snooker hall.",
      link: "#"
    },
    {
      id: 12,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwf753e908/images/backstage/travel-guides/beijing/school/mobile/_MAT0643.JPG",
      date: "PUBLISH DATE: 2019-05-07",
      title: "SCHOOL LIVE BAR",
      subTitle: "School is established as the most vital rock-music venue in Beijing. The authorities’ city-wide “clean-up” operation has seen many nearby venues close, but it still stands proud, with new bands unfolding masterplans on its battered sofas while others let rip on the tiny stage.",
      link: "#"
    },
    {
      id: 13,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw22f65712/images/backstage/travel-guides/berlin/madame-claude/mobile/ID_Marshall_Berlin--8.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "MADAME CLAUDE",
      subTitle: "The dimly lit, intimate interior is left over from the space’s former life as a brothel (that’s discounting a brief period as a notorious karaoke bar), from which it took its name.",
      link: "#"
    },
    {
      id: 14,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwd3524e1a/images/backstage/travel-guides/berlin/lido/mobile/ID_Marshall_Berlin--10.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "LIDO",
      subTitle: "Lido has hosted all types of touring and local bands, and has had to work hard to earn its reputation as a leading concert hall by throwing intense and dazzling parties, shows and poetry slams.",
      link: "#"
    },
    {
      id: 15,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwaea9281d/images/backstage/travel-guides/beijing/aotu/mobile/_MAT6691.JPG",
      date: "PUBLISH DATE: 2019-05-07",
      title: "AUTO SPACE",
      subTitle: "There are no neon signs announcing Auto Space’s existence to the outside world, just an inconspicuous doorway that those not in the know would be likely to brush past without glancing twice.",
      link: "#"
    },
    {
      id: 16,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw4aeee186/images/backstage/travel-guides/los-angeles/frogtown-brewery/mobile/i-D_Marshall_LosAngeles-6273.jpg",
      date: "PUBLISH DATE: 2019-11-21",
      title: "FROGTOWN BREWERY",
      subTitle: "LA’s citywide craft-beer phenomenon has found a cosy home at Frogtown Brewery, a craft-beer emporium owned by old friends and long-standing beer enthusiasts Adam Kestel and Mike Voss.",
      link: "#"
    },
    {
      id: 17,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dweb7319c9/images/backstage/travel-guides/los-angeles/salvare-goods/mobile/i-D_Marshall_LosAngeles-5771.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "SALVARE GOODS",
      subTitle: "The community of artists and makers, that have long resided in the area, of course took to Salvare’s expertly selected offerings – vintage rugs, pottery, furnishings and other one-of-a-kind pieces sourced from estate sales.",
      link: "#"
    },
    {
      id: 18,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwf8ad2c10/images/backstage/travel-guides/paris/red-house/mobile/red-house-01-hero.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "RED HOUSE",
      subTitle: "An evening at Red House evokes feelings of the eponymous track by Jimi Hendrix: haunting, electric and with dazzling blues. Here, the bartenders stir your emotions with seasonally changing cocktails and a house Negroni (a crowd favourite at just 5 Euros) plus an impeccable selection of craft beers.",
      link: "#"
    },
    {
      id: 19,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwa9b276ae/images/backstage/travel-guides/berlin/hopfenreich/mobile/ID_Marshall_Berlin--20.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "HOPFENREICH",
      subTitle: "Bucking the trends of other bars in the neighbourhood with its wide selection, Hopfenreich helps bring a more worldly and cosmopolitan feel to the local bar scene.",
      link: "#"
    },
    {
      id: 20,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw30f26e70/images/backstage/on-the-road/dream-wife/Dream-Wife-200x200.png",
      date: "PUBLISH DATE: 2018-10-25",
      title: "FREJA WEWER IN COPENHAGEN",
      subTitle: "Scandinavian it-girl Freja Wewer loves her hometown, Copenhagen. Let her show you around the neighbourhood of Nørrebro, bringing you to her favourite spots, such as the bar Café Viking and the record shop Insula Music.",
      link: "#"
    },
    {
      id: 21,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwdfb74c87/images/backstage/travel-guides/beijing/ddc/mobile/_MAT0134.JPG",
      date: "PUBLISH DATE: 2019-05-07",
      title: "DUSK DAWN CLUB",
      subTitle: "Dusk Dawn Club, known simply as DDC to its regulars, is the most musically eclectic live house in Beijing. Cui Jian, probably China’s most high-profile rock star, has been known to turn up to perform at the venue’s free-for-all collaboration nights, and headliners are just as likely to be heavy rockers as they are acoustic guitar strummers, rappers or jazz heads.",
      link: "#"
    },
    {
      id: 22,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwc992c165/images/backstage/travel-guides/berlin/wowsville-recordstore/mobile/ID_Marshall_Berlin--17.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "WOWSVILLE RECORDS",
      subTitle: "With an American take on classic-era rock ’n’ roll, Wowsville pays homage to the international punk movement that helped define Kreuzberg in the late 70s.",
      link: "#"
    },
    {
      id: 23,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw9fdab91d/images/backstage/travel-guides/copenhagen/himmelriget/mobile/3-hero.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "HIMMERIGET",
      subTitle: "The crowd at Himmeriget is low-key, making this the perfect spot for a one-to-one catch-up, or for some artful and boozy concoctions to get the night started. If you get hungry you don’t have to leave the bar: just ask the bartender to order you an aubergine and burrata pizza from next door.",
      link: "#"
    },
    {
      id: 24,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw9c28142b/images/backstage/travel-guides/beijing/tiger-vintage/mobile/_MAT7206.JPG",
      date: "PUBLISH DATE: 2019-05-07",
      title: "TIGER",
      subTitle: "Tiger, set to mark its tenth anniversary next year, sources clothes from Japan, the US and Europe, as well as China, and the result is a mix as eclectic as the genre-mash culture the surrounding Gulou area demands.",
      link: "#"
    },
    {
      id: 25,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw05ad8a5d/images/backstage/travel-guides/los-angeles/permanent-records/mobile/i-D_Marshall_LosAngeles-5602.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "PERMANENT RECORDS",
      subTitle: "Permanent Records – which has two additional locations in LA’s Highland Park neighbourhood – also boasts an eponymous label, now with 60 releases to its name.",
      link: "#"
    },
    {
      id: 26,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwaef0bc3c/images/backstage/travel-guides/london/gillett-square/Gillett-square_800x800.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "GILLETT SQUARE",
      subTitle: "Gillett Square must be one of the most musically diverse open space in London - there are Rastafarian Nyabinghi drumming workshops, community music festivals and open mic events.",
      link: "#"
    },
    {
      id: 27,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw6ed6445b/images/backstage/travel-guides/london/shacklewell-arms/Shacklewell-arms_800X800.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "SHACKLEWELL ARMS",
      subTitle: "Shacklewell Arms is an odd sort of place to watch bands. Drummers are often hidden away in one of the arches at the back of the room, and the sound crew seem to operate from a sort of cage, but that seems to add to the often intense atmosphere.",
      link: "#"
    },
    {
      id: 28,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw41a6a327/images/backstage/travel-guides/copenhagen/insula-music/mobile/18-hero.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "INSULA MUSIC",
      subTitle: "If you're looking to pick up some records from the realms of crunchy shoegaze, woozy psych or adrenaline-inducing local metal, this little record shop is the place to go. In fact, if you’re lucky, you might also be able to get your hands on some free jazz records.",
      link: "#"
    },
    {
      id: 29,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw9611944b/images/backstage/travel-guides/berlin/repeater/mobile/Repeater-3-hero.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "REPEATER",
      subTitle: "Named after the classic Fugazi album, Repeater is one of the very best vintage and second-hand clothes emporiums in Berlin. Packed from one side to the other with recycled clothes, the store is decorated with pictures of John F Kennedy and old German advertising.",
      link: "#"
    },
    {
      id: 30,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw85596cbb/images/backstage/travel-guides/copenhagen/ramen-to-biiru/desktop/21-hero.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "RAMEN TO BÍIRU",
      subTitle: "Do you like noodles with rich, fatty pork belly? How about unconventional beer from Copenhagen’s finest craft brewery? If the union between those two things makes you nod your head in hungry approval, then look no further than Ramen to Bíiru.",
      link: "#"
    },
    {
      id: 31,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwf3c60442/images/backstage/travel-guides/london/the-last-tuesday-society/mobile/_OGR3349.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "THE LAST TUESDAY SOCIETY",
      subTitle: "Despite the modern towers that now loom over the western fringes of Hackney, there’s still one place that feels almost like a time machine back to some decadent past. The Last Tuesday Society sits just to the north of the Regents Canal in an otherwise nondescript row of businesses.",
      link: "#"
    },
    {
      id: 32,
      img: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw09643a61/images/backstage/travel-guides/london/the-victoria-dalston/Victoria-dalston_800x800.jpg",
      date: "PUBLISH DATE: 2019-05-07",
      title: "THE VICTORIA DALSTON",
      subTitle: "Many moons ago, in the distant time before Shoreditch became one of London’s essential nightlife destinations, one of the few places you could get a drink among the knackered warehouses and dingy shops was Jaguar Shoes.",
      link: "#"
    },

  ]);

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
  }, [])

  let [categoryName, setCategoryName] = useState()
  const categoryEvent = (name) => {
    switch (name) {
      case 0: setCategoryName("ALL");
        break;
      case 1: setCategoryName("GUIDED BY MUSIC");
        break;
      case 2: setCategoryName("HOMEWARD BOUND");
        break;
      case 3: setCategoryName("ON THE ROAD");
        break;
      case 4: setCategoryName("LIFE IN STEREO");
        break;
      default: setCategoryName(undefined);
    }
  }
  // 메인이미지 변경
  const mainBackGround = {
    background: categoryName === undefined ? "url( " + categoryTitle[0].mainImg1 + ")no-repeat top/100%" : "url( " + categoryTitle[categoryNum].mainImg + ")no-repeat top/100%",
    height: categoryName === undefined || categoryName === "GUIDED BY MUSIC" ? "34vw" : categoryName === "ALL" || categoryName === "HOMEWARD BOUND" ? "46vw" : "40vw"
  }
  // 카테고리에 따라 height값 변경
  const _height = {
    height: categoryName === undefined || categoryName === "GUIDED BY MUSIC" ? "34vw" : categoryName === "ALL" || categoryName === "HOMEWARD BOUND" ? "46vw" : "40vw"
  }

  const newsList = news.map((news) => {
    if (categoryName === undefined || categoryName === "ALL") {
      return (
        <div key={news.id} className="newsWrap">
          <Link to={news.link} style={{ background: "url( " + news.img + ")no-repeat center/100% 100%" }} className="imgDiv">
          </Link>
          <h1>{news.title}</h1>
          <Link to={news.link}> <button>read more</button></Link>
        </div>
      )
    }
  })
  let [more, setMore] = useState(8)
  const moreHandling = () => {
    if (more <= 32) {
      setMore(more + 8)
    } else {
      alert("마지막입니다.")
    }
  }
  const subNewsList = subNews.map((news) => {
    if (news.id <= more) {
      return (
        <Link to={news.link} className="subNewsDiv" key={news.id}>
          <div style={{ background: "url( " + news.img + ")no-repeat center/100% 100%" }} className="imgDiv">
          </div>
          <span>{news.date}</span>
          <h2>{news.title}</h2>
          <h3>{news.subTitle}</h3>
          <button>read more</button>
        </Link>

      )
    }
  })

  return (
    <div className="backStageContainer">
      <div style={mainBackGround} className="backStageMain">
        <div className="backStageWrap">
          <div className="mainText">
            <Link id="text1" to="#">{categoryTitle[categoryNum].mainTitle}</Link>
            <Link id="text2" to="#">{categoryTitle[categoryNum].subTitle}</Link>
          </div>
        </div>
        <div className="gradientDiv" style={_height}>
        </div>
      </div>

      <div className="backStageContants">
        <div className="backStageCategory">
          <h3>FILTER BY CATEGORY</h3>
          <div><span id="0">ALL</span></div>
          <div><span id="1">GUIDED BY MUSIC</span></div>
          <div><span id="2">HOMEWARD BOUND</span></div>
          <div><span id="3">ON THE ROAD</span></div>
          <div><span id="4">LIFE IN STEREO</span></div>
        </div>
        <div className="backStageProduct">
          <div className="backStageTitle"  style={categoryName === undefined || categoryName === "ALL" ? {} : { display: "none" }}>
          <h2>EDITORS PICKS</h2>
          </div>
          <div className="backStageList">
            <div className="newsList" style={categoryName === undefined || categoryName === "ALL" ? {} : { display: "none" }}>
              {newsList}
            </div>
            <div className="subNewsList">
              <hr></hr>
              <h1>LATEST STORIES</h1>
              <div className="subNewsWrap">
                {subNewsList}
              </div>
              <button onClick={moreHandling} >more stories</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};