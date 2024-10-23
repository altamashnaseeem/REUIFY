import { Pattern } from "@mui/icons-material";
import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend:{
      
      scrollbar: ['rounded'],
     fontFamily:{
      poppins:['var(--font-poppins)'],
     },
    
    }

  },
  plugins: [ require('tailwind-scrollbar')],
  safelist: [
   {   
      pattern: /bg-(slate|sky)-([1-9]00)|50|950/,  
    },
    {
      pattern: /text-(slate|sky|rose|cyan|teal|violet|emerald|lime|amber|stone|neutral|zinc)-([1-9]00)|50|950/, 
    },    
//     {
//       pattern: /m-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/, 
//     },
//     {
//       pattern: /mt-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
//   },
//   {
//     pattern: /mb-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
// },
//     {
//       pattern: /ml-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
//   },
//   {
//       pattern: /mr-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
//   },
//   {
//     pattern: /pt-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
// },
// {
//   pattern: /pl-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
// },
// {
//   pattern: /pr-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
// },
// {
//   pattern: /pb-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
// },
`h-[1px]`, `h-[2px]`, `h-[3px]`, `h-[4px]`, `h-[5px]`, `h-[6px]`, `h-[7px]`, `h-[8px]`, `h-[9px]`, `h-[10px]`, `h-[11px]`, `h-[12px]`, `h-[13px]`, `h-[14px]`, `h-[15px]`, `h-[16px]`, `h-[17px]`, `h-[18px]`, `h-[19px]`, `h-[20px]`, `h-[21px]`, `h-[22px]`, `h-[23px]`, `h-[24px]`, `h-[25px]`, `h-[26px]`, `h-[27px]`, `h-[28px]`, `h-[29px]`, `h-[30px]`, `h-[31px]`, `h-[32px]`, `h-[33px]`, `h-[34px]`, `h-[35px]`, `h-[36px]`, `h-[37px]`, `h-[38px]`, `h-[39px]`, `h-[40px]`, `h-[41px]`, `h-[42px]`, `h-[43px]`, `h-[44px]`, `h-[45px]`, `h-[46px]`, `h-[47px]`, `h-[48px]`, `h-[49px]`, `h-[50px]`, `h-[51px]`, `h-[52px]`, `h-[53px]`, `h-[54px]`, `h-[55px]`, `h-[56px]`, `h-[57px]`, `h-[58px]`, `h-[59px]`, `h-[60px]`, `h-[61px]`, `h-[62px]`, `h-[63px]`, `h-[64px]`, `h-[65px]`, `h-[66px]`, `h-[67px]`, `h-[68px]`, `h-[69px]`, `h-[70px]`, `h-[71px]`, `h-[72px]`, `h-[73px]`, `h-[74px]`, `h-[75px]`, `h-[76px]`, `h-[77px]`, `h-[78px]`, `h-[79px]`, `h-[80px]`, `h-[81px]`, `h-[82px]`, `h-[83px]`, `h-[84px]`, `h-[85px]`, `h-[86px]`, `h-[87px]`, `h-[88px]`, `h-[89px]`, `h-[90px]`, `h-[91px]`, `h-[92px]`, `h-[93px]`, `h-[94px]`, `h-[95px]`, `h-[96px]`, `h-[97px]`, `h-[98px]`, `h-[99px]`, `h-[100px]`, `h-[101px]`, `h-[102px]`, `h-[103px]`, `h-[104px]`, `h-[105px]`, `h-[106px]`, `h-[107px]`, `h-[108px]`, `h-[109px]`, `h-[110px]`, `h-[111px]`, `h-[112px]`, `h-[113px]`, `h-[114px]`, `h-[115px]`, `h-[116px]`, `h-[117px]`, `h-[118px]`, `h-[119px]`, `h-[120px]`, `h-[121px]`, `h-[122px]`, `h-[123px]`, `h-[124px]`, `h-[125px]`, `h-[126px]`, `h-[127px]`, `h-[128px]`, `h-[129px]`, `h-[130px]`, `h-[131px]`, `h-[132px]`, `h-[133px]`, `h-[134px]`, `h-[135px]`, `h-[136px]`, `h-[137px]`, `h-[138px]`, `h-[139px]`, `h-[140px]`, `h-[141px]`, `h-[142px]`, `h-[143px]`, `h-[144px]`, `h-[145px]`, `h-[146px]`, `h-[147px]`, `h-[148px]`, `h-[149px]`, `h-[150px]`, `h-[151px]`, `h-[152px]`, `h-[153px]`, `h-[154px]`, `h-[155px]`, `h-[156px]`, `h-[157px]`, `h-[158px]`, `h-[159px]`, `h-[160px]`, `h-[161px]`, `h-[162px]`, `h-[163px]`, `h-[164px]`, `h-[165px]`, `h-[166px]`, `h-[167px]`, `h-[168px]`, `h-[169px]`, `h-[170px]`, `h-[171px]`, `h-[172px]`, `h-[173px]`, `h-[174px]`, `h-[175px]`, `h-[176px]`, `h-[177px]`, `h-[178px]`, `h-[179px]`, `h-[180px]`, `h-[181px]`, `h-[182px]`, `h-[183px]`, `h-[184px]`, `h-[185px]`, `h-[186px]`, `h-[187px]`, `h-[188px]`, `h-[189px]`, `h-[190px]`, `h-[191px]`, `h-[192px]`, `h-[193px]`, `h-[194px]`, `h-[195px]`, `h-[196px]`, `h-[197px]`, `h-[198px]`, `h-[199px]`, `h-[200px]`, `h-[201px]`, `h-[202px]`, `h-[203px]`, `h-[204px]`, `h-[205px]`, `h-[206px]`, `h-[207px]`, `h-[208px]`, `h-[209px]`, `h-[210px]`, `h-[211px]`, `h-[212px]`, `h-[213px]`, `h-[214px]`, `h-[215px]`, `h-[216px]`, `h-[217px]`, `h-[218px]`, `h-[219px]`, `h-[220px]`, `h-[221px]`, `h-[222px]`, `h-[223px]`, `h-[224px]`, `h-[225px]`, `h-[226px]`, `h-[227px]`, `h-[228px]`, `h-[229px]`, `h-[230px]`, `h-[231px]`, `h-[232px]`, `h-[233px]`, `h-[234px]`, `h-[235px]`, `h-[236px]`, `h-[237px]`, `h-[238px]`, `h-[239px]`, `h-[240px]`, `h-[241px]`, `h-[242px]`, `h-[243px]`, `h-[244px]`, `h-[245px]`, `h-[246px]`, `h-[247px]`, `h-[248px]`, `h-[249px]`, `h-[250px]`, `h-[251px]`, `h-[252px]`, `h-[253px]`, `h-[254px]`, `h-[255px]`, `h-[256px]`, `h-[257px]`, `h-[258px]`, `h-[259px]`, `h-[260px]`, `h-[261px]`, `h-[262px]`, `h-[263px]`, `h-[264px]`, `h-[265px]`, `h-[266px]`, `h-[267px]`, `h-[268px]`, `h-[269px]`, `h-[270px]`, `h-[271px]`, `h-[272px]`, `h-[273px]`, `h-[274px]`, `h-[275px]`, `h-[276px]`, `h-[277px]`, `h-[278px]`, `h-[279px]`, `h-[280px]`, `h-[281px]`, `h-[282px]`, `h-[283px]`, `h-[284px]`, `h-[285px]`, `h-[286px]`, `h-[287px]`, `h-[288px]`, `h-[289px]`, `h-[290px]`, `h-[291px]`, `h-[292px]`, `h-[293px]`, `h-[294px]`, `h-[295px]`, `h-[296px]`, `h-[297px]`, `h-[298px]`, `h-[299px]`, `h-[300px]`, `h-[301px]`, `h-[302px]`, `h-[303px]`, `h-[304px]`, `h-[305px]`, `h-[306px]`, `h-[307px]`, `h-[308px]`, `h-[309px]`, `h-[310px]`, `h-[311px]`, `h-[312px]`, `h-[313px]`, `h-[314px]`, `h-[315px]`, `h-[316px]`, `h-[317px]`, `h-[318px]`, `h-[319px]`, `h-[320px]`, `h-[321px]`, `h-[322px]`, `h-[323px]`, `h-[324px]`, `h-[325px]`, `h-[326px]`, `h-[327px]`, `h-[328px]`, `h-[329px]`, `h-[330px]`, `h-[331px]`, `h-[332px]`, `h-[333px]`, `h-[334px]`, `h-[335px]`, `h-[336px]`, `h-[337px]`, `h-[338px]`, `h-[339px]`, `h-[340px]`, `h-[341px]`, `h-[342px]`, `h-[343px]`, `h-[344px]`, `h-[345px]`, `h-[346px]`, `h-[347px]`, `h-[348px]`, `h-[349px]`, `h-[350px]`, `h-[351px]`, `h-[352px]`, `h-[353px]`, `h-[354px]`, `h-[355px]`, `h-[356px]`, `h-[357px]`, `h-[358px]`, `h-[359px]`, `h-[360px]`, `h-[361px]`, `h-[362px]`, `h-[363px]`, `h-[364px]`, `h-[365px]`, `h-[366px]`, `h-[367px]`, `h-[368px]`, `h-[369px]`, `h-[370px]`, `h-[371px]`, `h-[372px]`, `h-[373px]`, `h-[374px]`, `h-[375px]`, `h-[376px]`, `h-[377px]`, `h-[378px]`, `h-[379px]`, `h-[380px]`, `h-[381px]`, `h-[382px]`, `h-[383px]`, `h-[384px]`, `h-[385px]`, `h-[386px]`, `h-[387px]`, `h-[388px]`, `h-[389px]`, `h-[390px]`, `h-[391px]`, `h-[392px]`, `h-[393px]`, `h-[394px]`, `h-[395px]`, `h-[396px]`, `h-[397px]`, `h-[398px]`, `h-[399px]`, `h-[400px]`, `h-[401px]`, `h-[402px]`, `h-[403px]`, `h-[404px]`, `h-[405px]`, `h-[406px]`, `h-[407px]`, `h-[408px]`, `h-[409px]`, `h-[410px]`, `h-[411px]`, `h-[412px]`, `h-[413px]`, `h-[414px]`, `h-[415px]`, `h-[416px]`, `h-[417px]`, `h-[418px]`, `h-[419px]`, `h-[420px]`, `h-[421px]`, `h-[422px]`, `h-[423px]`, `h-[424px]`, `h-[425px]`, `h-[426px]`, `h-[427px]`, `h-[428px]`, `h-[429px]`, `h-[430px]`, `h-[431px]`, `h-[432px]`, `h-[433px]`, `h-[434px]`, `h-[435px]`, `h-[436px]`, `h-[437px]`, `h-[438px]`, `h-[439px]`, `h-[440px]`, `h-[441px]`, `h-[442px]`, `h-[443px]`, `h-[444px]`, `h-[445px]`, `h-[446px]`, `h-[447px]`, `h-[448px]`, `h-[449px]`, `h-[450px]`, `h-[451px]`, `h-[452px]`, `h-[453px]`, `h-[454px]`, `h-[455px]`, `h-[456px]`, `h-[457px]`, `h-[458px]`, `h-[459px]`, `h-[460px]`, `h-[461px]`, `h-[462px]`, `h-[463px]`, `h-[464px]`, `h-[465px]`, `h-[466px]`, `h-[467px]`, `h-[468px]`, `h-[469px]`, `h-[470px]`, `h-[471px]`, `h-[472px]`, `h-[473px]`, `h-[474px]`, `h-[475px]`, `h-[476px]`, `h-[477px]`, `h-[478px]`, `h-[479px]`, `h-[480px]`, `h-[481px]`, `h-[482px]`, `h-[483px]`, `h-[484px]`, `h-[485px]`, `h-[486px]`, `h-[487px]`, `h-[488px]`, `h-[489px]`, `h-[490px]`, `h-[491px]`, `h-[492px]`, `h-[493px]`, `h-[494px]`, `h-[495px]`, `h-[496px]`, `h-[497px]`, `h-[498px]`, `h-[499px]`, `h-[500px]`, `h-[501px]`, `h-[502px]`, `h-[503px]`, `h-[504px]`, `h-[505px]`, `h-[506px]`, `h-[507px]`, `h-[508px]`, `h-[509px]`, `h-[510px]`, `h-[511px]`, `h-[512px]`, `h-[513px]`, `h-[514px]`, `h-[515px]`, `h-[516px]`, `h-[517px]`, `h-[518px]`, `h-[519px]`, `h-[520px]`, `h-[521px]`, `h-[522px]`, `h-[523px]`, `h-[524px]`, `h-[525px]`, `h-[526px]`, `h-[527px]`, `h-[528px]`, `h-[529px]`, `h-[530px]`, `h-[531px]`, `h-[532px]`, `h-[533px]`, `h-[534px]`, `h-[535px]`, `h-[536px]`, `h-[537px]`, `h-[538px]`, `h-[539px]`, `h-[540px]`, `h-[541px]`, `h-[542px]`, `h-[543px]`, `h-[544px]`, `h-[545px]`, `h-[546px]`, `h-[547px]`, `h-[548px]`, `h-[549px]`, `h-[550px]`, `h-[551px]`, `h-[552px]`, `h-[553px]`, `h-[554px]`, `h-[555px]`, `h-[556px]`, `h-[557px]`, `h-[558px]`, `h-[559px]`, `h-[560px]`, `h-[561px]`, `h-[562px]`, `h-[563px]`, `h-[564px]`, `h-[565px]`, `h-[566px]`, `h-[567px]`, `h-[568px]`, `h-[569px]`, `h-[570px]`, `h-[571px]`, `h-[572px]`, `h-[573px]`, `h-[574px]`, `h-[575px]`, `h-[576px]`, `h-[577px]`, `h-[578px]`, `h-[579px]`, `h-[580px]`, `h-[581px]`, `h-[582px]`, `h-[583px]`, `h-[584px]`, `h-[585px]`, `h-[586px]`, `h-[587px]`, `h-[588px]`, `h-[589px]`, `h-[590px]`, `h-[591px]`, `h-[592px]`, `h-[593px]`, `h-[594px]`, `h-[595px]`, `h-[596px]`, `h-[597px]`, `h-[598px]`, `h-[599px]`, `h-[600px]`, `h-[601px]`, `h-[602px]`, `h-[603px]`, `h-[604px]`, `h-[605px]`, `h-[606px]`, `h-[607px]`, `h-[608px]`, `h-[609px]`, `h-[610px]`, `h-[611px]`, `h-[612px]`, `h-[613px]`, `h-[614px]`, `h-[615px]`, `h-[616px]`, `h-[617px]`, `h-[618px]`, `h-[619px]`, `h-[620px]`, `h-[621px]`, `h-[622px]`, `h-[623px]`, `h-[624px]`, `h-[625px]`, `h-[626px]`, `h-[627px]`, `h-[628px]`, `h-[629px]`, `h-[630px]`, `h-[631px]`, `h-[632px]`, `h-[633px]`, `h-[634px]`, `h-[635px]`, `h-[636px]`, `h-[637px]`, `h-[638px]`, `h-[639px]`, `h-[640px]`, `h-[641px]`, `h-[642px]`, `h-[643px]`, `h-[644px]`, `h-[645px]`, `h-[646px]`, `h-[647px]`, `h-[648px]`, `h-[649px]`, `h-[650px]`, `h-[651px]`, `h-[652px]`, `h-[653px]`, `h-[654px]`, `h-[655px]`, `h-[656px]`, `h-[657px]`, `h-[658px]`, `h-[659px]`, `h-[660px]`, `h-[661px]`, `h-[662px]`, `h-[663px]`, `h-[664px]`, `h-[665px]`, `h-[666px]`, `h-[667px]`, `h-[668px]`, `h-[669px]`, `h-[670px]`, `h-[671px]`, `h-[672px]`, `h-[673px]`, `h-[674px]`, `h-[675px]`, `h-[676px]`, `h-[677px]`, `h-[678px]`, `h-[679px]`, `h-[680px]`, `h-[681px]`, `h-[682px]`, `h-[683px]`, `h-[684px]`, `h-[685px]`, `h-[686px]`, `h-[687px]`, `h-[688px]`, `h-[689px]`, `h-[690px]`, `h-[691px]`, `h-[692px]`, `h-[693px]`, `h-[694px]`, `h-[695px]`, `h-[696px]`, `h-[697px]`, `h-[698px]`, `h-[699px]`, `h-[700px]`, `h-[701px]`, `h-[702px]`, `h-[703px]`, `h-[704px]`, `h-[705px]`, `h-[706px]`, `h-[707px]`, `h-[708px]`, `h-[709px]`, `h-[710px]`, `h-[711px]`, `h-[712px]`, `h-[713px]`, `h-[714px]`, `h-[715px]`, `h-[716px]`, `h-[717px]`, `h-[718px]`, `h-[719px]`, `h-[720px]`, `h-[721px]`, `h-[722px]`, `h-[723px]`, `h-[724px]`, `h-[725px]`, `h-[726px]`, `h-[727px]`, `h-[728px]`, `h-[729px]`, `h-[730px]`, `h-[731px]`, `h-[732px]`, `h-[733px]`, `h-[734px]`, `h-[735px]`, `h-[736px]`, `h-[737px]`, `h-[738px]`, `h-[739px]`, `h-[740px]`, `h-[741px]`, `h-[742px]`, `h-[743px]`, `h-[744px]`, `h-[745px]`, `h-[746px]`, `h-[747px]`, `h-[748px]`, `h-[749px]`, `h-[750px]`, `h-[751px]`, `h-[752px]`, `h-[753px]`, `h-[754px]`, `h-[755px]`, `h-[756px]`, `h-[757px]`, `h-[758px]`, `h-[759px]`, `h-[760px]`, `h-[761px]`, `h-[762px]`, `h-[763px]`, `h-[764px]`, `h-[765px]`, `h-[766px]`, `h-[767px]`, `h-[768px]`, `h-[769px]`, `h-[770px]`, `h-[771px]`, `h-[772px]`, `h-[773px]`, `h-[774px]`, `h-[775px]`, `h-[776px]`, `h-[777px]`, `h-[778px]`, `h-[779px]`, `h-[780px]`, `h-[781px]`, `h-[782px]`, `h-[783px]`, `h-[784px]`, `h-[785px]`, `h-[786px]`, `h-[787px]`, `h-[788px]`, `h-[789px]`, `h-[790px]`, `h-[791px]`, `h-[792px]`, `h-[793px]`, `h-[794px]`, `h-[795px]`, `h-[796px]`, `h-[797px]`, `h-[798px]`, `h-[799px]`, `h-[800px]`, `h-[801px]`, `h-[802px]`, `h-[803px]`, `h-[804px]`, `h-[805px]`, `h-[806px]`, `h-[807px]`, `h-[808px]`, `h-[809px]`, `h-[810px]`, `h-[811px]`, `h-[812px]`, `h-[813px]`, `h-[814px]`, `h-[815px]`, `h-[816px]`, `h-[817px]`, `h-[818px]`, `h-[819px]`, `h-[820px]`, `h-[821px]`, `h-[822px]`, `h-[823px]`, `h-[824px]`, `h-[825px]`, `h-[826px]`, `h-[827px]`, `h-[828px]`, `h-[829px]`, `h-[830px]`, `h-[831px]`, `h-[832px]`, `h-[833px]`, `h-[834px]`, `h-[835px]`, `h-[836px]`, `h-[837px]`, `h-[838px]`, `h-[839px]`, `h-[840px]`, `h-[841px]`, `h-[842px]`, `h-[843px]`, `h-[844px]`, `h-[845px]`, `h-[846px]`, `h-[847px]`, `h-[848px]`, `h-[849px]`, `h-[850px]`, `h-[851px]`, `h-[852px]`, `h-[853px]`, `h-[854px]`, `h-[855px]`, `h-[856px]`, `h-[857px]`, `h-[858px]`, `h-[859px]`, `h-[860px]`, `h-[861px]`, `h-[862px]`, `h-[863px]`, `h-[864px]`, `h-[865px]`, `h-[866px]`, `h-[867px]`, `h-[868px]`, `h-[869px]`, `h-[870px]`, `h-[871px]`, `h-[872px]`, `h-[873px]`, `h-[874px]`, `h-[875px]`, `h-[876px]`, `h-[877px]`, `h-[878px]`, `h-[879px]`, `h-[880px]`, `h-[881px]`, `h-[882px]`, `h-[883px]`, `h-[884px]`, `h-[885px]`, `h-[886px]`, `h-[887px]`, `h-[888px]`, `h-[889px]`, `h-[890px]`, `h-[891px]`, `h-[892px]`, `h-[893px]`, `h-[894px]`, `h-[895px]`, `h-[896px]`, `h-[897px]`, `h-[898px]`, `h-[899px]`, `h-[900px]`, `h-[901px]`, `h-[902px]`, `h-[903px]`, `h-[904px]`, `h-[905px]`, `h-[906px]`, `h-[907px]`, `h-[908px]`, `h-[909px]`, `h-[910px]`, `h-[911px]`, `h-[912px]`, `h-[913px]`, `h-[914px]`, `h-[915px]`, `h-[916px]`, `h-[917px]`, `h-[918px]`, `h-[919px]`, `h-[920px]`, `h-[921px]`, `h-[922px]`, `h-[923px]`, `h-[924px]`, `h-[925px]`, `h-[926px]`, `h-[927px]`, `h-[928px]`, `h-[929px]`, `h-[930px]`, `h-[931px]`, `h-[932px]`, `h-[933px]`, `h-[934px]`, `h-[935px]`, `h-[936px]`, `h-[937px]`, `h-[938px]`, `h-[939px]`, `h-[940px]`, `h-[941px]`, `h-[942px]`, `h-[943px]`, `h-[944px]`, `h-[945px]`, `h-[946px]`, `h-[947px]`, `h-[948px]`, `h-[949px]`, `h-[950px]`, `h-[951px]`, `h-[952px]`, `h-[953px]`, `h-[954px]`, `h-[955px]`, `h-[956px]`, `h-[957px]`, `h-[958px]`, `h-[959px]`, `h-[960px]`, `h-[961px]`, `h-[962px]`, `h-[963px]`, `h-[964px]`, `h-[965px]`, `h-[966px]`, `h-[967px]`, `h-[968px]`, `h-[969px]`, `h-[970px]`, `h-[971px]`, `h-[972px]`, `h-[973px]`, `h-[974px]`, `h-[975px]`, `h-[976px]`, `h-[977px]`, `h-[978px]`, `h-[979px]`, `h-[980px]`, `h-[981px]`, `h-[982px]`, `h-[983px]`, `h-[984px]`, `h-[985px]`, `h-[986px]`, `h-[987px]`, `h-[988px]`, `h-[989px]`, `h-[990px]`, `h-[991px]`, `h-[992px]`, `h-[993px]`, `h-[994px]`, `h-[995px]`, `h-[996px]`, `h-[997px]`, `h-[998px]`, `h-[999px]`,
`w-[1px]`, `w-[2px]`, `w-[3px]`, `w-[4px]`, `w-[5px]`, `w-[6px]`, `w-[7px]`, `w-[8px]`, `w-[9px]`, `w-[10px]`, `w-[11px]`, `w-[12px]`, `w-[13px]`, `w-[14px]`, `w-[15px]`, `w-[16px]`, `w-[17px]`, `w-[18px]`, `w-[19px]`, `w-[20px]`, `w-[21px]`, `w-[22px]`, `w-[23px]`, `w-[24px]`, `w-[25px]`, `w-[26px]`, `w-[27px]`, `w-[28px]`, `w-[29px]`, `w-[30px]`, `w-[31px]`, `w-[32px]`, `w-[33px]`, `w-[34px]`, `w-[35px]`, `w-[36px]`, `w-[37px]`, `w-[38px]`, `w-[39px]`, `w-[40px]`, `w-[41px]`, `w-[42px]`, `w-[43px]`, `w-[44px]`, `w-[45px]`, `w-[46px]`, `w-[47px]`, `w-[48px]`, `w-[49px]`, `w-[50px]`, `w-[51px]`, `w-[52px]`, `w-[53px]`, `w-[54px]`, `w-[55px]`, `w-[56px]`, `w-[57px]`, `w-[58px]`, `w-[59px]`, `w-[60px]`, `w-[61px]`, `w-[62px]`, `w-[63px]`, `w-[64px]`, `w-[65px]`, `w-[66px]`, `w-[67px]`, `w-[68px]`, `w-[69px]`, `w-[70px]`, `w-[71px]`, `w-[72px]`, `w-[73px]`, `w-[74px]`, `w-[75px]`, `w-[76px]`, `w-[77px]`, `w-[78px]`, `w-[79px]`, `w-[80px]`, `w-[81px]`, `w-[82px]`, `w-[83px]`, `w-[84px]`, `w-[85px]`, `w-[86px]`, `w-[87px]`, `w-[88px]`, `w-[89px]`, `w-[90px]`, `w-[91px]`, `w-[92px]`, `w-[93px]`, `w-[94px]`, `w-[95px]`, `w-[96px]`, `w-[97px]`, `w-[98px]`, `w-[99px]`, `w-[100px]`, `w-[101px]`, `w-[102px]`, `w-[103px]`, `w-[104px]`, `w-[105px]`, `w-[106px]`, `w-[107px]`, `w-[108px]`, `w-[109px]`, `w-[110px]`, `w-[111px]`, `w-[112px]`, `w-[113px]`, `w-[114px]`, `w-[115px]`, `w-[116px]`, `w-[117px]`, `w-[118px]`, `w-[119px]`, `w-[120px]`, `w-[121px]`, `w-[122px]`, `w-[123px]`, `w-[124px]`, `w-[125px]`, `w-[126px]`, `w-[127px]`, `w-[128px]`, `w-[129px]`, `w-[130px]`, `w-[131px]`, `w-[132px]`, `w-[133px]`, `w-[134px]`, `w-[135px]`, `w-[136px]`, `w-[137px]`, `w-[138px]`, `w-[139px]`, `w-[140px]`, `w-[141px]`, `w-[142px]`, `w-[143px]`, `w-[144px]`, `w-[145px]`, `w-[146px]`, `w-[147px]`, `w-[148px]`, `w-[149px]`, `w-[150px]`, `w-[151px]`, `w-[152px]`, `w-[153px]`, `w-[154px]`, `w-[155px]`, `w-[156px]`, `w-[157px]`, `w-[158px]`, `w-[159px]`, `w-[160px]`, `w-[161px]`, `w-[162px]`, `w-[163px]`, `w-[164px]`, `w-[165px]`, `w-[166px]`, `w-[167px]`, `w-[168px]`, `w-[169px]`, `w-[170px]`, `w-[171px]`, `w-[172px]`, `w-[173px]`, `w-[174px]`, `w-[175px]`, `w-[176px]`, `w-[177px]`, `w-[178px]`, `w-[179px]`, `w-[180px]`, `w-[181px]`, `w-[182px]`, `w-[183px]`, `w-[184px]`, `w-[185px]`, `w-[186px]`, `w-[187px]`, `w-[188px]`, `w-[189px]`, `w-[190px]`, `w-[191px]`, `w-[192px]`, `w-[193px]`, `w-[194px]`, `w-[195px]`, `w-[196px]`, `w-[197px]`, `w-[198px]`, `w-[199px]`, `w-[200px]`, `w-[201px]`, `w-[202px]`, `w-[203px]`, `w-[204px]`, `w-[205px]`, `w-[206px]`, `w-[207px]`, `w-[208px]`, `w-[209px]`, `w-[210px]`, `w-[211px]`, `w-[212px]`, `w-[213px]`, `w-[214px]`, `w-[215px]`, `w-[216px]`, `w-[217px]`, `w-[218px]`, `w-[219px]`, `w-[220px]`, `w-[221px]`, `w-[222px]`, `w-[223px]`, `w-[224px]`, `w-[225px]`, `w-[226px]`, `w-[227px]`, `w-[228px]`, `w-[229px]`, `w-[230px]`, `w-[231px]`, `w-[232px]`, `w-[233px]`, `w-[234px]`, `w-[235px]`, `w-[236px]`, `w-[237px]`, `w-[238px]`, `w-[239px]`, `w-[240px]`, `w-[241px]`, `w-[242px]`, `w-[243px]`, `w-[244px]`, `w-[245px]`, `w-[246px]`, `w-[247px]`, `w-[248px]`, `w-[249px]`, `w-[250px]`, `w-[251px]`, `w-[252px]`, `w-[253px]`, `w-[254px]`, `w-[255px]`, `w-[256px]`, `w-[257px]`, `w-[258px]`, `w-[259px]`, `w-[260px]`, `w-[261px]`, `w-[262px]`, `w-[263px]`, `w-[264px]`, `w-[265px]`, `w-[266px]`, `w-[267px]`, `w-[268px]`, `w-[269px]`, `w-[270px]`, `w-[271px]`, `w-[272px]`, `w-[273px]`, `w-[274px]`, `w-[275px]`, `w-[276px]`, `w-[277px]`, `w-[278px]`, `w-[279px]`, `w-[280px]`, `w-[281px]`, `w-[282px]`, `w-[283px]`, `w-[284px]`, `w-[285px]`, `w-[286px]`, `w-[287px]`, `w-[288px]`, `w-[289px]`, `w-[290px]`, `w-[291px]`, `w-[292px]`, `w-[293px]`, `w-[294px]`, `w-[295px]`, `w-[296px]`, `w-[297px]`, `w-[298px]`, `w-[299px]`, `w-[300px]`, `w-[301px]`, `w-[302px]`, `w-[303px]`, `w-[304px]`, `w-[305px]`, `w-[306px]`, `w-[307px]`, `w-[308px]`, `w-[309px]`, `w-[310px]`, `w-[311px]`, `w-[312px]`, `w-[313px]`, `w-[314px]`, `w-[315px]`, `w-[316px]`, `w-[317px]`, `w-[318px]`, `w-[319px]`, `w-[320px]`, `w-[321px]`, `w-[322px]`, `w-[323px]`, `w-[324px]`, `w-[325px]`, `w-[326px]`, `w-[327px]`, `w-[328px]`, `w-[329px]`, `w-[330px]`, `w-[331px]`, `w-[332px]`, `w-[333px]`, `w-[334px]`, `w-[335px]`, `w-[336px]`, `w-[337px]`, `w-[338px]`, `w-[339px]`, `w-[340px]`, `w-[341px]`, `w-[342px]`, `w-[343px]`, `w-[344px]`, `w-[345px]`, `w-[346px]`, `w-[347px]`, `w-[348px]`, `w-[349px]`, `w-[350px]`, `w-[351px]`, `w-[352px]`, `w-[353px]`, `w-[354px]`, `w-[355px]`, `w-[356px]`, `w-[357px]`, `w-[358px]`, `w-[359px]`, `w-[360px]`, `w-[361px]`, `w-[362px]`, `w-[363px]`, `w-[364px]`, `w-[365px]`, `w-[366px]`, `w-[367px]`, `w-[368px]`, `w-[369px]`, `w-[370px]`, `w-[371px]`, `w-[372px]`, `w-[373px]`, `w-[374px]`, `w-[375px]`, `w-[376px]`, `w-[377px]`, `w-[378px]`, `w-[379px]`, `w-[380px]`, `w-[381px]`, `w-[382px]`, `w-[383px]`, `w-[384px]`, `w-[385px]`, `w-[386px]`, `w-[387px]`, `w-[388px]`, `w-[389px]`, `w-[390px]`, `w-[391px]`, `w-[392px]`, `w-[393px]`, `w-[394px]`, `w-[395px]`, `w-[396px]`, `w-[397px]`, `w-[398px]`, `w-[399px]`, `w-[400px]`, `w-[401px]`, `w-[402px]`, `w-[403px]`, `w-[404px]`, `w-[405px]`, `w-[406px]`, `w-[407px]`, `w-[408px]`, `w-[409px]`, `w-[410px]`, `w-[411px]`, `w-[412px]`, `w-[413px]`, `w-[414px]`, `w-[415px]`, `w-[416px]`, `w-[417px]`, `w-[418px]`, `w-[419px]`, `w-[420px]`, `w-[421px]`, `w-[422px]`, `w-[423px]`, `w-[424px]`, `w-[425px]`, `w-[426px]`, `w-[427px]`, `w-[428px]`, `w-[429px]`, `w-[430px]`, `w-[431px]`, `w-[432px]`, `w-[433px]`, `w-[434px]`, `w-[435px]`, `w-[436px]`, `w-[437px]`, `w-[438px]`, `w-[439px]`, `w-[440px]`, `w-[441px]`, `w-[442px]`, `w-[443px]`, `w-[444px]`, `w-[445px]`, `w-[446px]`, `w-[447px]`, `w-[448px]`, `w-[449px]`, `w-[450px]`, `w-[451px]`, `w-[452px]`, `w-[453px]`, `w-[454px]`, `w-[455px]`, `w-[456px]`, `w-[457px]`, `w-[458px]`, `w-[459px]`, `w-[460px]`, `w-[461px]`, `w-[462px]`, `w-[463px]`, `w-[464px]`, `w-[465px]`, `w-[466px]`, `w-[467px]`, `w-[468px]`, `w-[469px]`, `w-[470px]`, `w-[471px]`, `w-[472px]`, `w-[473px]`, `w-[474px]`, `w-[475px]`, `w-[476px]`, `w-[477px]`, `w-[478px]`, `w-[479px]`, `w-[480px]`, `w-[481px]`, `w-[482px]`, `w-[483px]`, `w-[484px]`, `w-[485px]`, `w-[486px]`, `w-[487px]`, `w-[488px]`, `w-[489px]`, `w-[490px]`, `w-[491px]`, `w-[492px]`, `w-[493px]`, `w-[494px]`, `w-[495px]`, `w-[496px]`, `w-[497px]`, `w-[498px]`, `w-[499px]`, `w-[500px]`, `w-[501px]`, `w-[502px]`, `w-[503px]`, `w-[504px]`, `w-[505px]`, `w-[506px]`, `w-[507px]`, `w-[508px]`, `w-[509px]`, `w-[510px]`, `w-[511px]`, `w-[512px]`, `w-[513px]`, `w-[514px]`, `w-[515px]`, `w-[516px]`, `w-[517px]`, `w-[518px]`, `w-[519px]`, `w-[520px]`, `w-[521px]`, `w-[522px]`, `w-[523px]`, `w-[524px]`, `w-[525px]`, `w-[526px]`, `w-[527px]`, `w-[528px]`, `w-[529px]`, `w-[530px]`, `w-[531px]`, `w-[532px]`, `w-[533px]`, `w-[534px]`, `w-[535px]`, `w-[536px]`, `w-[537px]`, `w-[538px]`, `w-[539px]`, `w-[540px]`, `w-[541px]`, `w-[542px]`, `w-[543px]`, `w-[544px]`, `w-[545px]`, `w-[546px]`, `w-[547px]`, `w-[548px]`, `w-[549px]`, `w-[550px]`, `w-[551px]`, `w-[552px]`, `w-[553px]`, `w-[554px]`, `w-[555px]`, `w-[556px]`, `w-[557px]`, `w-[558px]`, `w-[559px]`, `w-[560px]`, `w-[561px]`, `w-[562px]`, `w-[563px]`, `w-[564px]`, `w-[565px]`, `w-[566px]`, `w-[567px]`, `w-[568px]`, `w-[569px]`, `w-[570px]`, `w-[571px]`, `w-[572px]`, `w-[573px]`, `w-[574px]`, `w-[575px]`, `w-[576px]`, `w-[577px]`, `w-[578px]`, `w-[579px]`, `w-[580px]`, `w-[581px]`, `w-[582px]`, `w-[583px]`, `w-[584px]`, `w-[585px]`, `w-[586px]`, `w-[587px]`, `w-[588px]`, `w-[589px]`, `w-[590px]`, `w-[591px]`, `w-[592px]`, `w-[593px]`, `w-[594px]`, `w-[595px]`, `w-[596px]`, `w-[597px]`, `w-[598px]`, `w-[599px]`, `w-[600px]`, `w-[601px]`, `w-[602px]`, `w-[603px]`, `w-[604px]`, `w-[605px]`, `w-[606px]`, `w-[607px]`, `w-[608px]`, `w-[609px]`, `w-[610px]`, `w-[611px]`, `w-[612px]`, `w-[613px]`, `w-[614px]`, `w-[615px]`, `w-[616px]`, `w-[617px]`, `w-[618px]`, `w-[619px]`, `w-[620px]`, `w-[621px]`, `w-[622px]`, `w-[623px]`, `w-[624px]`, `w-[625px]`, `w-[626px]`, `w-[627px]`, `w-[628px]`, `w-[629px]`, `w-[630px]`, `w-[631px]`, `w-[632px]`, `w-[633px]`, `w-[634px]`, `w-[635px]`, `w-[636px]`, `w-[637px]`, `w-[638px]`, `w-[639px]`, `w-[640px]`, `w-[641px]`, `w-[642px]`, `w-[643px]`, `w-[644px]`, `w-[645px]`, `w-[646px]`, `w-[647px]`, `w-[648px]`, `w-[649px]`, `w-[650px]`, `w-[651px]`, `w-[652px]`, `w-[653px]`, `w-[654px]`, `w-[655px]`, `w-[656px]`, `w-[657px]`, `w-[658px]`, `w-[659px]`, `w-[660px]`, `w-[661px]`, `w-[662px]`, `w-[663px]`, `w-[664px]`, `w-[665px]`, `w-[666px]`, `w-[667px]`, `w-[668px]`, `w-[669px]`, `w-[670px]`, `w-[671px]`, `w-[672px]`, `w-[673px]`, `w-[674px]`, `w-[675px]`, `w-[676px]`, `w-[677px]`, `w-[678px]`, `w-[679px]`, `w-[680px]`, `w-[681px]`, `w-[682px]`, `w-[683px]`, `w-[684px]`, `w-[685px]`, `w-[686px]`, `w-[687px]`, `w-[688px]`, `w-[689px]`, `w-[690px]`, `w-[691px]`, `w-[692px]`, `w-[693px]`, `w-[694px]`, `w-[695px]`, `w-[696px]`, `w-[697px]`, `w-[698px]`, `w-[699px]`, `w-[700px]`, `w-[701px]`, `w-[702px]`, `w-[703px]`, `w-[704px]`, `w-[705px]`, `w-[706px]`, `w-[707px]`, `w-[708px]`, `w-[709px]`, `w-[710px]`, `w-[711px]`, `w-[712px]`, `w-[713px]`, `w-[714px]`, `w-[715px]`, `w-[716px]`, `w-[717px]`, `w-[718px]`, `w-[719px]`, `w-[720px]`, `w-[721px]`, `w-[722px]`, `w-[723px]`, `w-[724px]`, `w-[725px]`, `w-[726px]`, `w-[727px]`, `w-[728px]`, `w-[729px]`, `w-[730px]`, `w-[731px]`, `w-[732px]`, `w-[733px]`, `w-[734px]`, `w-[735px]`, `w-[736px]`, `w-[737px]`, `w-[738px]`, `w-[739px]`, `w-[740px]`, `w-[741px]`, `w-[742px]`, `w-[743px]`, `w-[744px]`, `w-[745px]`, `w-[746px]`, `w-[747px]`, `w-[748px]`, `w-[749px]`, `w-[750px]`, `w-[751px]`, `w-[752px]`, `w-[753px]`, `w-[754px]`, `w-[755px]`, `w-[756px]`, `w-[757px]`, `w-[758px]`, `w-[759px]`, `w-[760px]`, `w-[761px]`, `w-[762px]`, `w-[763px]`, `w-[764px]`, `w-[765px]`, `w-[766px]`, `w-[767px]`, `w-[768px]`, `w-[769px]`, `w-[770px]`, `w-[771px]`, `w-[772px]`, `w-[773px]`, `w-[774px]`, `w-[775px]`, `w-[776px]`, `w-[777px]`, `w-[778px]`, `w-[779px]`, `w-[780px]`, `w-[781px]`, `w-[782px]`, `w-[783px]`, `w-[784px]`, `w-[785px]`, `w-[786px]`, `w-[787px]`, `w-[788px]`, `w-[789px]`, `w-[790px]`, `w-[791px]`, `w-[792px]`, `w-[793px]`, `w-[794px]`, `w-[795px]`, `w-[796px]`, `w-[797px]`, `w-[798px]`, `w-[799px]`, `w-[800px]`, `w-[801px]`, `w-[802px]`, `w-[803px]`, `w-[804px]`, `w-[805px]`, `w-[806px]`, `w-[807px]`, `w-[808px]`, `w-[809px]`, `w-[810px]`, `w-[811px]`, `w-[812px]`, `w-[813px]`, `w-[814px]`, `w-[815px]`, `w-[816px]`, `w-[817px]`, `w-[818px]`, `w-[819px]`, `w-[820px]`, `w-[821px]`, `w-[822px]`, `w-[823px]`, `w-[824px]`, `w-[825px]`, `w-[826px]`, `w-[827px]`, `w-[828px]`, `w-[829px]`, `w-[830px]`, `w-[831px]`, `w-[832px]`, `w-[833px]`, `w-[834px]`, `w-[835px]`, `w-[836px]`, `w-[837px]`, `w-[838px]`, `w-[839px]`, `w-[840px]`, `w-[841px]`, `w-[842px]`, `w-[843px]`, `w-[844px]`, `w-[845px]`, `w-[846px]`, `w-[847px]`, `w-[848px]`, `w-[849px]`, `w-[850px]`, `w-[851px]`, `w-[852px]`, `w-[853px]`, `w-[854px]`, `w-[855px]`, `w-[856px]`, `w-[857px]`, `w-[858px]`, `w-[859px]`, `w-[860px]`, `w-[861px]`, `w-[862px]`, `w-[863px]`, `w-[864px]`, `w-[865px]`, `w-[866px]`, `w-[867px]`, `w-[868px]`, `w-[869px]`, `w-[870px]`, `w-[871px]`, `w-[872px]`, `w-[873px]`, `w-[874px]`, `w-[875px]`, `w-[876px]`, `w-[877px]`, `w-[878px]`, `w-[879px]`, `w-[880px]`, `w-[881px]`, `w-[882px]`, `w-[883px]`, `w-[884px]`, `w-[885px]`, `w-[886px]`, `w-[887px]`, `w-[888px]`, `w-[889px]`, `w-[890px]`, `w-[891px]`, `w-[892px]`, `w-[893px]`, `w-[894px]`, `w-[895px]`, `w-[896px]`, `w-[897px]`, `w-[898px]`, `w-[899px]`, `w-[900px]`, `w-[901px]`, `w-[902px]`, `w-[903px]`, `w-[904px]`, `w-[905px]`, `w-[906px]`, `w-[907px]`, `w-[908px]`, `w-[909px]`, `w-[910px]`, `w-[911px]`, `w-[912px]`, `w-[913px]`, `w-[914px]`, `w-[915px]`, `w-[916px]`, `w-[917px]`, `w-[918px]`, `w-[919px]`, `w-[920px]`, `w-[921px]`, `w-[922px]`, `w-[923px]`, `w-[924px]`, `w-[925px]`, `w-[926px]`, `w-[927px]`, `w-[928px]`, `w-[929px]`, `w-[930px]`, `w-[931px]`, `w-[932px]`, `w-[933px]`, `w-[934px]`, `w-[935px]`, `w-[936px]`, `w-[937px]`, `w-[938px]`, `w-[939px]`, `w-[940px]`, `w-[941px]`, `w-[942px]`, `w-[943px]`, `w-[944px]`, `w-[945px]`, `w-[946px]`, `w-[947px]`, `w-[948px]`, `w-[949px]`, `w-[950px]`, `w-[951px]`, `w-[952px]`, `w-[953px]`, `w-[954px]`, `w-[955px]`, `w-[956px]`, `w-[957px]`, `w-[958px]`, `w-[959px]`, `w-[960px]`, `w-[961px]`, `w-[962px]`, `w-[963px]`, `w-[964px]`, `w-[965px]`, `w-[966px]`, `w-[967px]`, `w-[968px]`, `w-[969px]`, `w-[970px]`, `w-[971px]`, `w-[972px]`, `w-[973px]`, `w-[974px]`, `w-[975px]`, `w-[976px]`, `w-[977px]`, `w-[978px]`, `w-[979px]`, `w-[980px]`, `w-[981px]`, `w-[982px]`, `w-[983px]`, `w-[984px]`, `w-[985px]`, `w-[986px]`, `w-[987px]`, `w-[988px]`, `w-[989px]`, `w-[990px]`, `w-[991px]`, `w-[992px]`, `w-[993px]`, `w-[994px]`, `w-[995px]`, `w-[996px]`, `w-[997px]`, `w-[998px]`, `w-[999px]`,
{
  pattern: /h-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|full|fit|max|min|dvh|lvh|svh)/, 
},
{
  pattern: /w-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|full|fit|max|min|dvw|lvw|svw)/, 
},
{
  pattern: /h-(1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|2\/6|3\/6|4\/6|5\/6)/,

},
{
  pattern: /w-(1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|2\/6|3\/6|4\/6|5\/6)/,

},
{
  pattern: /min-h-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|full|fit|max|min|dvw|lvw|svw)/, 

},
{
  pattern: /max-h-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|full|fit|max|min|dvw|lvw|svw)/, 

},
{
  pattern: /min-w-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|full|fit|max|min|dvw|lvw|svw)/, 

},
{
  pattern: /max-w-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|full|fit|max|min|dvw|lvw|svw)/, 

},
{
  pattern: /border-(red|green|blue|yellow|indigo|purple|pink|gray|slate|sky)-[1-9]00/,  
},
{
  pattern: /border-(0|2|4|8)/
},

{
   pattern: /border-(t|l|b|r|y|x)-(0|2|4|8)/
},
{
  pattern: /outline-(none|dotted|dashed|double|none)/
},
{
  pattern: /shadow-(sm|md|lg|xl|2xl|inner|none)/
},
{
  pattern: /shadow-(inherit|current|transparent|black|white|zinc|neutral|stone|orange|amber|red|green|blue|yellow|lime|green|cyan|rose|indigo|purple|pink|gray|slate|sky)-[1-9]00/,  
},
`focus:outline-none`,
`focus:ring-2`,
`focus:ring-1`,
`focus:ring-sky-500`,



  ],
};
export default config;
