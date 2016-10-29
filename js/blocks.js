var giantblocklist =[
    {
        secret_code: 1,
        type: "Chapter",
        description: "Structure",
        typeclass:"chapter",
        imgsrc: "img/bookmark-for-favorites.png"
    }, 
    {
        secret_code: 2,
        type: "Markers",
        typeclass:"markers",
        description: "Exploration",
        imgsrc: "img/map-filled-with-a-placeholder.png"
    },
    {
        secret_code: 3,
        type: "Single Choice",
        description: "Reflection",
        typeclass:"mcq",
        imgsrc: "img/question1.png"
    },
    {
        secret_code: 4,
        type: "Text and Image",
        description: "Presentation",
        typeclass:"textimg",
        imgsrc: "img/imgtxt.png"
    },
    {
        secret_code: 5,
        type: "Video",
        description: "Presentation",
        typeclass:"video",
        imgsrc: "img/triangular-black-right-arrow.png"
    },
    {
        secret_code: 006,
        type: "Multiple Answer",
        typeclass:"maq",
        description: "Reflection",
        imgsrc: "img/checked-box.png"
    },
    {
        secret_code: 7,
        type: "Checklist",
        typeclass:"checklist",
        description: "Exploration",
        imgsrc: "img/checked-filled-list.png"
    },
    {
        secret_code: 8,
        type: "Matching",
        typeclass:"matching",
        description: "Reflection",
        imgsrc: "img/two-straight-arrows-square-shape-of-exchange.png"
    },
    {
        secret_code: 9,
        type: "Steps",
        typeclass:"steps",
        description: "Exploration",
        imgsrc: "img/footprint.png"
    },
    {
        secret_code: 010,
        type: "Tabs",
        typeclass:"tabs",
        description: "Exploration",
        imgsrc: "img/folder-filled-with-tabs.png"
    },
    {
        secret_code: 011,
        type: "Slider",
        typeclass:"tabs",
        description: "Exploration",
        imgsrc: "img/switch-at-center.png"
    },
        {
        secret_code: 012,
        type: "Slideshow",
        typeclass:"slideshow",
        description: "Presentation",
        imgsrc: "img/cascade-rectangular-rellena.png"
    },
        {
        secret_code: 013,
        type: "Process",
        typeclass:"process",
        description: "Exploration",
        imgsrc: "img/numbered-items-button.png"
    }
];

var allSets = [
	{"Getinge":[2,3,5]},
	{"EME 2016 SV":[1,2,3,4,5]}
	];

function getBlockCodeList(set){
	for (var i =0;i<allSets.length;i++){
		currentkey = Object.keys(allSets[i])[0];
		if (set==currentkey){
			return allSets[i][currentkey];
			}
		}
	return -1;
	}

function getSetList(){
	var d = document.createElement('select');
	$(d).attr("id", "setselector").change(loadset);
	for (var i=0;i<allSets.length;i++){
		var e = document.createElement('option');
		$(e).text(Object.keys(allSets[i])[0] );
		$(e).appendTo(d);
		}
	return d;	
	}

function getBlockFromCode(code){
    for (var i=0;i<giantblocklist.length;i++){
        if (giantblocklist[i].secret_code==code){
            return giantblocklist[i];
        }
    }
    return -1;
}

function createTemplateBlock(o_json){
    // outer div
    var d = document.createElement('div');
	  $(d).addClass("templateblock");
    $(d).addClass("frame");
    $(d).addClass(o_json.typeclass);
    $(d).attr("secret_code",o_json.typecode);
    

    // img
    var e = document.createElement('img');
    $(e).addClass("blockicon");
    $(e).attr("src",o_json.imgsrc)
    .appendTo(d);

    // inner div
    var f = document.createElement('div');
    $(f).addClass("textdiv");
    // span blockheading
    var g = document.createElement('span');
    $(g).addClass("blockheading").text(o_json.type)
    .appendTo(f);
    //linebreak
    var brk = document.createElement('br');
    $(brk).appendTo(f);
    //span block subheading
    var h = document.createElement('span');
    $(h).addClass("blocksubheading").text(o_json.description)
    .appendTo(f);
    //put together
    $(f).appendTo(d);
    return d;
 }


function createScriptBlock(o_json){
    // outer div
    var d = document.createElement('div');
	  $(d).addClass("templateblock");
    $(d).addClass("frame");
    $(d).addClass(o_json.typeclass);
    $(d).attr("secret_code",o_json.typecode);
    

    // img
    var e = document.createElement('img');
    $(e).addClass("blockicon");
    $(e).attr("src",o_json.imgsrc)
    .appendTo(d);

    // inner div
    var f = document.createElement('div');
    $(f).addClass("textdiv");
    // span blockheading
    var g = document.createElement('span');
    $(g).addClass("blockheading").text(o_json.name)
    .appendTo(f);
    //linebreak
    var brk = document.createElement('br');
    $(brk).appendTo(f);
    //span block subheading
    var h = document.createElement('span');
    $(h).addClass("blocksubheading").text(o_json.type)
    .appendTo(f);
    //put together
    $(f).appendTo(d);
    return d;
 }

 
 
    
 
       
 
  
      