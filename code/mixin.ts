
import { Vue } from "vue-property-decorator"
import {fetch} from 'whatwg-fetch'
import jsonp from 'fetch-jsonp'

  export default class App extends Vue {
    titleImg: string = "";
    introItem_bg: string = "";
    scroll: any = {};
    cmsData: any = {};
    themeColor: string = "#0433B9";
    bgGradientTop: string = "#4ca4f6";
    bgGradientBottom: string = "#0433b9";
    loading: any = null;
    wxShareMask: boolean = false;

    async shareHandler() {
    const platform = await getPlatformAsync();
    let shareData = {
      title: this.cmsData.share[0].title,
      desc: this.cmsData.share[0].sub_title,
      link: window.location.href,
      imgUrl: this.cmsData.share[0].img
    };
    if (platform === "wechat") {
      // 微信内蒙层引导右上角分享
      this.wxShareMask = true;
    }else {
      CommonModule.share(shareData);
    }
  }
}
      