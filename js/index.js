window.onload = function(){

  //获取滚动事件
  const top = document.getElementById("top");
  window.onscroll = ()=>{
    if (document.documentElement.scrollTop > 240) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  };

  // 点击按钮，返回顶部
  top.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  //获取轮播图
  const index_img = document.querySelector("body>header");

  let index_img_time = 0;
  index_img.style.backgroundImage = `url("./img/${index_img_time}.jpg")`;
  setInterval(
      ()=>{
        index_img_time++;
        if(index_img_time == 4){
          index_img_time = 0;
        }
        index_img.style.backgroundImage = `url("./img/${index_img_time}.jpg")`;

      },20000
  );

  //获取要展示的图片
  const img_exhibition = document.querySelector("#img_exhibition");
  const rotate_img = document.querySelectorAll("body>main #exhibition #img_exhibition>div>div");
  const rotate_img_text = document.querySelectorAll("body>main #exhibition #img_exhibition>div>p");
  const rotate_img_text_html = ["橘黄色的晚霞映照湖泊","青山翠水间，孤舟荡轻烟。","锦衣婷婷的少女。","二次元风，JK少女","如罪如梦，晚霞映照星空。","克苏鲁题材类。"];

  for (let i in rotate_img){
      rotate_img_text[i].innerHTML = rotate_img_text_html[i];
      try{
        rotate_img[i].style.backgroundImage = `url('./img/rotate/${i}.jpg')`;
      }
      catch{
        break;
      }    
  }
  let len = rotate_img.length;
  for (let i = 0;i<len;i++){
    let node = document.createElement('div');
    let child_node = document.createElement('div');
    child_node.style.backgroundImage = `url('./img/rotate/${i}.jpg')`;
    node.appendChild(child_node);
    child_node = document.createElement('p');
    child_node.innerHTML = rotate_img_text_html[i];
    node.appendChild(child_node);
    img_exhibition.appendChild(node);
  }

  //切换展示的图片
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const move_distance = rotate_img[0].offsetWidth + parseInt(window.getComputedStyle(rotate_img[0]).marginRight, 10)*2;
  
  let img_distance = -move_distance*(rotate_img.length-1);
  img_exhibition.style.transform = `translateX(${img_distance}px)`;
  left.addEventListener("click",()=>{
    img_distance += move_distance;
    if(img_distance > -move_distance){
      img_distance = -move_distance*(rotate_img.length);
    }
    img_exhibition.style.transform = `translateX(${img_distance}px)`;
  })

  right.addEventListener("click",()=>{
    img_distance -= move_distance;
    if(img_distance < (rotate_img.length+2) *(-move_distance)){
      img_distance = -move_distance*(rotate_img.length-2);
    }
    img_exhibition.style.transform = `translateX(${img_distance}px)`;
  })


  //查看技巧
  const skill = document.getElementsByClassName("skill");
  const textarea = document.querySelector("#skill #textarea");
  const skill_text = ["使用画语AI，您可以通过输入恰当的描述配上合适的风格创作出充满惊喜的作品！在没有头绪的时候，我们也会提供一些优质的描述词汇和短句，供绘画家们输入尝试哦 。","画语AI利用语音识别，自动将您的语言转化为关键描述词 ，优秀的描述词不仅需要简明扼要的词句组合描述清楚要绘制的内容，更需要融入丰富的专业修饰词提升画面丰富度。", "您须确保，您在使用本服务生成的作品时，您不得将生成作品用于诽谤、色情或任何其它非法的用途，亦不能侵犯任何第三方的任何版权、商标或其他专有权利，如因您的不当使用行为导致任何第三方权益受损的，责任全部由您自行承担。"];

  skill[0].classList.add("required");
  textarea.innerHTML = skill_text[0];
  len = skill.length;
  for (let i = 0; i<len; i++){
      skill[i].addEventListener("click",function(){
        for(let ii of skill){
          ii.classList.remove("required");
        }
        this.classList.add("required");
        textarea.innerHTML = skill_text[i];
      });
  };
}



