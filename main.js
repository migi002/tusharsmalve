$(document).ready(function() {
    /*
     * Main variables
     */
    var content = [{
      title: "Hi! I'm your Boyfriend.",
      desc: "Also your life partner, soulmate, yedaa and aapka pyara bacha"
    }, {
      title: "Meri Yedi,",
      desc: "Sorry!! Mujhe aaise baat nahi karni chahiye thi. I know that you are trying your best. But ye cheez mujhe sach mai nahi pasand. And really mujhe ignored and granted feel hua. I am truly sorry kyuki aapko bhi hurt and pain hua hoga. But sacchi mujhe bohot uneasy feel ho raha tha uss time, itna jyada I can't even tell you."
    }, {
      title: "And Meri Bhooli",
      desc: "Uss time the only thing I needed was you yedi, mujhe samjhate. Agar ek baar mai nahi suna toh phir se, I want you to keep trying and never give up on me PLEASE!!!! But aapne jane diya. Aur please ye mat darna ki aur jyada hoga, I respect you a lot aur mujhe ye pata hai ki mai aapke saath kabhi bhi disrespectful nahi ho sakta. So don't worry ki jyada ho jata. "
    },{
      title: "My Love",
      desc: "Mai aapko Deviji kehta hu toh I mean it, you are like a devi to me. Aur ye devi meri mai isliye haaq jatata hu, gussa ya naraz ho sakta hu thode time ke liye(5-6 min) but disrespectful kabhi nahi. So have trust in me. I know I know I am more mature toh mai thoda jyada aur jaldi samajh jaunga, chalo aapke silent mode ko bhi manage kar lunga......bss khush"
    },{
      title: "So my Waffle",
      desc: "Sach kahu toh mujhe gussa toh aaya tha but ye gussa aapse jyada important nahi. For me you are most important and I value you the most. But aaise karoge toh thoda gussa toh karunga....jyada nahi thoda. Aur sorry ki jagah LOVE YOU kehte call karke mera bacha 2 baar kehte mera gussa pura chala jata pagal meri."
    },{
      title: "TO-DO list",
      desc: "I know ki dard hai aapko toh 1. Paani bottle yaad se carry karna aur paani pete rehna,  2. Koi bhi dard hua sidha call karna I know thoda difficult task hai but try karna ho jayega,  3. Breakfast jyada karna appetite se ek jyada,  4. Time mila toh mujhe yaad karna!!!! "
    },{
      title: "I LOVE YOU",
      desc: "my love, meri yedi, my waffle, my JAAN, my honey, my sunshine, my everything....."
    },{ 
      title: "SURPRISE FOR YOU AT EVENING YA NIGHT",
      desc: 
        "depend ki kitna jaldi aaoge(so try jaldi aane ka......)"
    }];
    var currentPage = 0;
    //generate content
    for (var i = 0; i < content.length; i++) {
      //split content letters to array
      for (var obj in content[i]) {
        //if string
        if (typeof content[i][obj] === "string") {
          content[i][obj] = content[i][obj].split("");
          continue;
        }
        //if array (grouped text)
        else if (typeof content[i][obj] === "object") {
          var toPush = [];
          for(var j = 0; j < content[i][obj].length; j++) {
            for(var k = 0; k < content[i][obj][j].length; k++) {
              toPush.push(content[i][obj][j][k]);
            }
          }
          content[i][obj] = toPush;
        }
      }
      //set text to 
      $("#segments").append("<div class=\"letters-wrap mutable\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
      setText();
      //clone to data
      $("#segments").append("<div class=\"letters-wrap position-data\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
      setText();
    }
    //initial arrangement
    arrangeCurrentPage();
    scrambleOthers();
    /*
     * Event handlers
     */
    $(window).resize(function() {
      arrangeCurrentPage();
      scrambleOthers();
    });
    $("#soup-prev").hide();
    $("#soup-prev").click(function() {
      $("#soup-next").show();
      currentPage--;
      if (currentPage === 0) {
        $("#soup-prev").hide();
      }
      arrangeCurrentPage();
      scrambleOthers();
    });
    $("#soup-next").click(function() {
      $("#soup-prev").show();
      currentPage++;
      if (currentPage === content.length - 1) {
        $("#soup-next").hide();
      }
      arrangeCurrentPage();
      scrambleOthers();
    });
    /*
     * Functions
     */
    function arrangeCurrentPage() {
      for (var i = 0; i < content[currentPage].title.length; i++) {
        $(".mutable:eq(" + currentPage + ") > .soup-title > .letter").eq(i).css({
          left: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().left + "px",
          top: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().top + "px",
          color: "#111",
          zIndex: 9001
        });
      }
      for (var i = 0; i < content[currentPage].desc.length; i++) {
        $(".mutable:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).css({
          left: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().left + "px",
          top: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().top + "px",
          color: "#111",
          zIndex: 9001
        });
      }
    }
  
    function setText() {
      var j;
      for (j = 0; j < content[i].title.length; j++) {
        $(".soup-title").last().append("<span class=\"letter\">" + content[i].title[j] + "</span>");
      }
      for (j = 0; j < content[i].desc.length; j++) {
        $(".soup-desc").last().append("<span class=\"letter\">" + content[i].desc[j] + "</span>");
      }
    }
  
    function scrambleOthers() {
      for (var i = 0; i < content.length; i++) {
        //don't scramble currentPage
        if (currentPage === i)
          continue;
        var parts = [
          ["title", ".soup-title"],
          ["desc", ".soup-desc"]
        ];
        //apply to .title h1s and .desc ps
        for (var j = 0; j < parts.length; j++) {
          for (var k = 0; k < content[i][parts[j][0]].length; k++) {
            //define random position on screen
            var randLeft = Math.floor(Math.random() * $(window).width());
            var randTop = Math.floor(Math.random() * $(window).height());
            //defining boundaries
            var offset = $(".position-data").eq(currentPage).offset();
            var bounds = {
              left: offset.left,
              top: offset.top,
              right: $(window).width() - offset.left,
              bottom: $(window).height() - offset.top
            };
            var middleX = bounds.left + $(".position-data").eq(currentPage).width() / 2;
            var middleY = bounds.top + $(".position-data").eq(currentPage).height() / 2;
            //finally, apply all the scrambles
            $(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter").eq(k).css({
              left: randLeft,
              top: randTop,
              color: "#DDD",
              zIndex: "initial"
            });
          }
        }
      }
    }
  });