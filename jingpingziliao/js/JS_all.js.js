
function switchTag(tag,content,k,classty)
{var aclass,bclass,i,n
if(classty=="l0"){aclass="l1";bclass="l2";n=11;}
if(classty=="box"){aclass="aa1";bclass="aa2";n=4;}
if(classty=="d0"){aclass="bb1";bclass="bb2";n=2;}
if(classty=="tx"){aclass="dd1";bclass="dd2";n=3;}
for(i=1;i<=n;i++)
{if(i==k)
{document.getElementById(tag+i).className=aclass;document.getElementById(content+i).className="box_show";}else{document.getElementById(tag+i).className=bclass;document.getElementById(content+i).className="box_none";}}}
function externallinks(){if(!document.getElementsByTagName)return;var anchors=document.getElementsByTagName("a");for(var i=0;i<anchors.length;i++){var anchor=anchors[i];if(anchor.getAttribute("href")&&anchor.getAttribute("rel")=="external")
anchor.target="_blank";}}
window.onload=externallinks;

function JS_all(id){
switch(id){


case "all1":
document.writeln("<li><a href=\'/kc.asp\' rel=\'nofollow\'><b id=\'icon01\'></b><span>管理课程</span></a></li> <li><a href=\'/scgl/\'><b id=\'icon02\'></b><span>生产</span></a></li> <li><a href=\'/yxgl/\'><b id=\'icon03\'></b><span>营销</span></a></li> <li><a href=\'/new/\'><b id=\'icon04\'></b><span>行业管理</span></a></li> <li><a href=\'/rlzy/\'><b id=\'icon05\'></b><span>人事</span></a></li> <li><a href=\'/qygl/\'><b id=\'icon06\'></b><span>企管</span></a></li> <li><a href=\'/zdbg/\'><b id=\'icon07\'></b><span>制度</span></a></li>");
break;


case "all2":
document.writeln("<dt>下载要求：</dt> <dd>10学币或VIP</dd>");
break;



case "all3":
document.writeln("<div class=\'ad260x178\'> <a href=\'/shop/\' target=\'_blank\' rel=\'nofollow\'><img src=\'/2018_images/pic11.jpg\' alt=\'精品企业学院\'></a></div> </div> <div id=\'wordgg\'> <p> <a rel=\'nofollow\' href=\'/shop/\' target=\'_blank\'>【全部企业学院】</a> <a rel=\'nofollow\' href=\'/topexe/ShowSoftDown.asp?UrlID=18&SoftID=378244\' target=\'_blank\'>【高清课程目录】</a> <a rel=\'nofollow\' href=\'/shop/yycj.html\' target=\'_blank\'>【客户使用案例】</a> </p> <ul> <li><a rel=\'nofollow\' href=\'/Shop/40.shtml\' target=\'_blank\'>中小企业全能版</a></li><li><a rel=\'nofollow\' href=\'/Shop/42.shtml\' target=\'_blank\'>员工培训与管理</a></li><li><a rel=\'nofollow\' href=\'/Shop/39.shtml\' target=\'_blank\'>中层领导学院</a></li><li><a rel=\'nofollow\' href=\'/Shop/41.shtml\' target=\'_blank\'>国学运用学院</a></li><li><a rel=\'nofollow\' href=\'/Shop/43.shtml\' target=\'_blank\'>工厂生产管理学院</a></li><li><a rel=\'nofollow\' href=\'/Shop/56.shtml\' target=\'_blank\'>高清企业培训库</a></li><li><a rel=\'nofollow\' href=\'/Shop/46.shtml\' target=\'_blank\'>销售培训与管理</a></li><li><a rel=\'nofollow\' href=\'/Shop/44.shtml\' target=\'_blank\'>人力资源学院</a></li><li><a rel=\'nofollow\' href=\'/Shop/45.shtml\' target=\'_blank\'>财务管理学院</a></li><li><a rel=\'nofollow\' href=\'/Shop/37.shtml\' target=\'_blank\'>总裁高层培训学院</a></li></ul> <span class=\'clear\'></span> <p style=\'font-size:16px; font-weight:bold;\'> <a rel=\'nofollow\' href=\'/shop/\' style=\' color:#ee1111;\' target=\'_blank\'>2018版最新高清视频课程、配套管理资料；免查找免下载；移动硬盘寄给您</a> </p> </div>");
break;



case "all4":
document.writeln("<IFRAME class=\'loginform\' src=\'/UserLogin2.asp?ShowType=1\' frameBorder=0 width=228 scrolling=no height=251></IFRAME>");
break;



case "all5":
document.writeln("值班手机：13726708999  13725399960");
break;

case "all6":
document.writeln("<script language=\'javascript\' src=\'/agg/201304/131.js\'></script> <script type=\'text/javascript\' src=\'https://js.users.51.la/1012532.js\'></script><div align=\"center\">本作品如有侵犯您的版权或隐私，请联系：help@cnshu.cn或来电,我们将立即处理。</div>");
break;


case "all7":
document.writeln("<dt>下载要求：</dt> <dd>500学币或企业VIP</dd>");
break;


case "all8":
document.writeln("<dt>下载要求：</dt> <dd>1000学币或企业VIP</dd>");
break;

case "all9":
document.writeln(" <script language=\"javascript\" type=\"text/javascript\" src=\"https://js.users.51.la/1012532.js\"></script>");
break;


}
}