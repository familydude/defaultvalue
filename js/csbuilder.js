
// CONSTRUCTION TIME AGAIN

// add all the templateblocks!


// sew on buttons
document.getElementById('expbut').addEventListener("click", savelist);
document.getElementById('savebut').addEventListener("click", savelist);
//document.getElementById('loadbut').addEventListener("click", getlist);
$("#cancel").click(cancel);
// populate leftlist
//var setlist = getSetList();
//$("#setselectcontainer").append(setlist);

// set upp chooser
$('#chooser').chosen({ width: "90%" });
$('#chooser').chosen().change(loaddoc);
initchooser();
getlist();

// load templates
   
  for (ix in giantblocklist) {
    var mydiv = createTemplateBlock(giantblocklist[ix]);
    $(mydiv).appendTo('#leftie');
  }


dragula([document.getElementById('leftie'), document.getElementById('rightie')], {
  copy: function (el, source) {
    return source === document.getElementById('leftie')
  },
  accepts: function (el, target) {
    return target !== document.getElementById('leftie')
  },
  removeOnSpill: true
}).on('cloned', function (clone, original, type) {
  clone.className += " scriptblock";
  var typename = original.getElementsByClassName('blockheading')[0].innerHTML;
  clone.getElementsByClassName('blocksubheading')[0].innerHTML = typename;
  clone.getElementsByClassName('blockheading')[0].innerHTML = "Untitled " + typename;
  clone.getElementsByClassName('blockheading')[0].setAttribute("contenteditable", "true");

});


// TOP SECRET FUNCTIONS 

function loadset() { // not used anymore
  // clear leftie first
  $("#leftie").empty();
  var s = $("#setselector option:selected").text();
  var l = getBlockCodeList(s);
  for (ix in l) {
    var mydiv = createTemplateBlock(getBlockFromCode(l[ix]));
    $(mydiv).appendTo('#leftie');
  }
}

function savelist() {
  //var arr =document.getElementById('leftfield').children;
  var doctitle = $("#doctitle").text();
  if (doctitle == "Untitled Document") {
    doctitle = prompt("Kan du inte hitta på ett bättre namn?");
  }
  //datastr = JSON.stringify($('#rightfield').children );
  var arr = Array();
  var datastr = $('.scriptblock').each(function (index, el) {
    var prepobj = {};
    prepobj.type = el.getElementsByClassName('blocksubheading')[0].innerHTML
    prepobj.name = el.getElementsByClassName('blockheading')[0].innerHTML
    arr.push(prepobj);
    //alert(prepobj.type+"/n"+prepobj.name);
  });
  //alert (JSON.stringify(datastr));

  $.ajax({
    type: "POST",
    url: "/save",
    data: { name: doctitle, body: JSON.stringify(arr) },
    cache: false,
    success: function (msg) {
       
      alert(msg);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert("errorthrown " + errorThrown);
    }

  });

}
function getlist() {
  $('.dialog').removeClass('hidden');
  $.ajax({
    type: "POST",
    url: "/getlist",
    data: {},
    cache: false,
    success: updateAndShowProjects,
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert("errorthrown " + errorThrown);
    }

  });
}
function updateAndShowProjects(msg) {
  initchooser();
  $("#innerdiv").removeClass("hidden");
  $("#spinner").addClass("hidden");
  var mylist = JSON.parse(msg);
  for (n in mylist) {
    var newopt = document.createElement("option");
    $(newopt).text(mylist[n].name);
    $("#chooser").append(newopt);
  }
  $("#chooser").trigger("chosen:updated");

}
// there is no callback yet!!!

function initchooser() {
  $("#chooser").empty();
  var d = document.createElement("option");
   $(d).text("Välj någonting...");
  $("#chooser").append(d);
  $("#chooser").trigger("chosen:updated");
}

function loaddoc(n) {
  var n = $(this).val();
  $('.dialog').addClass('hidden');
  $.ajax({
    type: "POST",
    url: "/load",
    data: { namn: n },
    cache: false,
    success: loadDocumentwithJSON,
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert("errorthrown " + errorThrown);
    }
  });
}


function createADiv(name, type) {
  var d = document.createElement('div');
  $(d).addClass(classname)
    .html(text)
    .appendTo($("#rightie")) //main div
    .click(function () {
      $(this).remove();
    })
  return d;
}

function loadDocumentwithJSON(data) {
  $("#rightie").empty();
  var newstuff = JSON.parse(data);
  for (i = 0; i < newstuff.length; i++) {
    $("#rightie").append(createScriptBlock(newstuff[i]));
  }
}
function cancel() {
  $(".dialog").addClass("hidden");
  $("#spinner").removeClass("hidden");
  $("#chooser").addClass("hidden");
   
}