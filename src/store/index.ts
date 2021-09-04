import { createStore } from "vuex";
import RootState from "./type";

const state: RootState = {
  theme: "",

  loading: false,

  myAbout: [
    `สวัสดีครับ ผมชื่อณรงค์พล เคยทำงานด้านบัญชีและสต็อคสินค้า มีหน้าที่คือออกใบกำกับภาษีซื้อ-ขาย,ใบสั่งซื้อสินค้า และ ดูแลสต็อคสินค้าของบริษัท มันเป็นงานที่ค่อยข้างเหนื่อย `,
    `อยากเปลี่ยนงานมาเป็นสายโปรแกรมเมอร์ กำลังมองหางานด้าน web developer และ mobile cross platform`
  ],

  myContact: [
    {
      fullname:'Narongpol Prommajan',
      name: "ton4023",
      birthday: 'August 5, 1996',
      address:'Khlong Hoi Khong, Songkhla',
      email: "ton4023@gmail.com",
      phone: "062-5692976",
      line: "https://line.me/ti/p/8fROOCHDW_",
      github: "github.com/ton4023",
    },
  ],

  myProgram: [
    {
      languages: [
      "https://symbols-electrical.getvecta.com/stencil_25/41_javascript.4ce34e7594.svg",
       "https://symbols-electrical.getvecta.com/stencil_25/87_typescript.2ab2b3dcfe.svg", 
       "https://symbols-electrical.getvecta.com/stencil_91/59_php.eed3049ba1.svg"
      ],
      frameworks: [
        "https://symbols-electrical.getvecta.com/stencil_25/89_vuejs.fc3ffff5cd.svg",
         "https://symbols-electrical.getvecta.com/stencil_79/87_expressjs.72a4a0d57c.svg", 
         "https://symbols-electrical.getvecta.com/stencil_97/2_tailwind-css.541185202d.svg",

      ],
      tools: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1051px-Adobe_XD_CC_icon.svg.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/1041px-Adobe_Photoshop_CS6_icon.svg.png",
          "http://www.esg.co.th/esg/Image/content_img/2012051410-52-07-0002.png"
      ]
    },
  ],

  myEducation: [
    {
      name: "คณะบริหารธุรกิจ มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย",
      branch: "ระบบสารสนเทศ",
      year: "2014 - 2018",
    },
    {
      name: "วิทยาลัยเทคโนโลยีส่องแสงพณิชยการ",
      branch: "ศิลป์-คำนวน",
      year: "2011 - 2013",
    },
    
  ],

  myExperience: [
    {
      name: "บริษัท ทีโอที จำกัด (มหาชน)",
      year: "Jun - Oct 2017",
      detail: [
        "นักศึกษาฝึกสหกิจ",
        "- ระบบตรวจสอบสถานะเลขหมาย PRI (Primary Rate Interface)",
        '(ใช้คำสั่ง telnet ไปยังตู้เลขหมายเพื่อดูสถานะการทำงานของเลขหมาย นำมาแสดงผลในหน้าเว็บ และ ส่งคำสั่งรีเซ็ตการทำงานของอุปกรณ์ )'
        ,
        " - คู่มือการปฎิบัติงาน (e-Book)",
      ],
    },
  ],
};
const mutations = {
  SET_THEME(state: RootState,payload: string){
    state.theme = payload
  },
  SET_LOAD(state: RootState,payload: boolean){
    state.loading = payload
  }
}

export default createStore({
  state,
  mutations
});
