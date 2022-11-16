//assets
import {
  ImgWeb3Desktop,
  ImgWeb3Mobile,
  ImgGamingGrowth,
  ImgRetroPcs,
  ImgTopLaptops,
} from "../assets";

const newsApi = {
  popular: {
    id: 1,
    newTitle: "The Bright Future of Web 3.0?",
    newDescription: `We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?`,
    newImgDesktop: ImgWeb3Desktop,
    newImgMobile: ImgWeb3Mobile,
  },
  news: [
    {
      id: 1,
      newsTitle: "Hydrogen VS Electric Cars",
      newsDescription: `Will hydrogen-fueled cars ever catch up to EVs?`,
    },
    {
      id: 2,
      newsTitle: "The Downsides of AI Artistry",
      newsDescription: `What are the possible adverse effects of on-demand AI image generation?`,
    },
    {
      id: 3,
      newsTitle: "Is VC Funding Drying Up?",
      newsDescription: `Private funding by VC firms is down 50% YOY. We take a look at what that means.`,
    },
  ],
  trending: [
    {
      id: 1,
      trendingTop: "01",
      trendingTitle: "Reviving Retro PCs",
      trendingDescription: `What happens when old PCs are given modern upgrades?`,
      trendingImg: ImgRetroPcs,
    },
    {
      id: 2,
      trendingTop: "02",
      trendingTitle: "Top 10 Laptops of 2022",
      trendingDescription: `Our best picks for various needs and budgets.`,
      trendingImg: ImgTopLaptops,
    },
    {
      id: 3,
      trendingTop: "03",
      trendingTitle: "The Growth of Gaming",
      trendingDescription: `How the pandemic has sparked fresh opportunities.`,
      trendingImg: ImgGamingGrowth,
    },
  ],
};

export default newsApi;
