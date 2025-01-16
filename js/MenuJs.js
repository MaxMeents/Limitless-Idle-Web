/*
function createCircularButton(x, y) {
function injectStageToMining(menuData, stageName) {
function findNode(label, data) {
function getChildrenArray(label) {
function wrapIndex(i, len) {
function initStack() {
function ensureSecondCircle() {
function drawHalfCircle($container, circleData) {
function onWheelFirst(e) {
function onWheelSecond(e) {
function promoteSecondCircleItem(index) {
function updateBreadcrumbs() {
function drawCircles() {
function updateAll() {
function updateBlueArrowVisibility() {
function addBlueArrow(x, y) {
*/
$(document).ready(function() {

function createCircularButton(x, y) {
        // Inject CSS
        var styles = `
            .menu-button {
                width: 75px;
z-index:500;
                height: 75px;
                background-color: #000;
                border: none;
                border-radius: 50%;
                position: absolute;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                left: ${x}px;
                top: ${y}px;
                background-blend-mode: multiply;
            }
            .menu-content {
                width: 45px; /* 75px - (15px padding * 2) */
                height: 45px;
                position: relative;
            }
            .menu-line {
                width: 100%;
                height: 6px; /* Line thickness */
                background-color: royalblue;
                position: absolute;
                left: 0;
            }
            .menu-line:nth-child(1) {
                top: 14%; /* 14% from the top */
            }
            .menu-line:nth-child(2) {
                top: 50%;
                transform: translateY(-50%);
            }
            .menu-line:nth-child(3) {
                bottom: 14%; /* 14% from the bottom */
            }
            .MenuOff{
                background:black;
                border:2px solid white;
            }
            .MenuOn{
                background:white;
                border:2px solid black;
            }
            
        `;
        $('<style>').text(styles).appendTo('head');

        // Create the button HTML
        var buttonHTML = `
            <button class="menu-button MenuOff">
                <div class="menu-content">
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                </div>
            </button>
        `;

        // Append the button to the body
        $('body').append(buttonHTML);

        // Add click functionality
        $('.menu-button').last().on('click', function () {
            if($('.menu-button').hasClass("MenuOn")){
                $('.menu-button').removeClass("MenuOn").addClass("MenuOff")
            }else{
                $('.menu-button').removeClass("MenuOff").addClass("MenuOn")
            }
        });
    }
    createCircularButton(0,$(window).height()/2-35)
/*************************************************
 * A. DATA
 *************************************************/
window.menuData = {
  "Main Menu": {
    img: "img/High Qualikty Tiles/Dirt 1 512.png",
    Unlocked: true,
    SetBackground: "url('img/Ui/blue star tile.png')",
    ColorOfFont: "White",
    children: {
      "Farming": {
        img: "img/badges/farming.png",
        Unlocked: false,
        SetBackground: "url('img/Ui/rainbow bg.png')",
        ColorOfFont: "White",
        children: {}
      },
      "Fishing": {
        img: "img/badges/fishing.png",
        Unlocked: false,
        SetBackground: "url('img/Ui/rainbow bg.png')",
        ColorOfFont: "White",
        children: {}
      },
      "Hunting": {
        img: "img/badges/hunting.png",
        Unlocked: false,
        SetBackground: "url('img/Ui/rainbow bg.png')",
        ColorOfFont: "White",
        children: {}
      },
      "Mining": {
        img: "img/badges/mining.png",
        Unlocked: true,
        SetBackground: "url('img/Ui/rainbow bg.png')",
        ColorOfFont: "White",
        children: {
          "1": {
            img: "img/badges/mining.png",
            Unlocked: true,
            SetBackground: "url('img/Ui/brown bg.png')",
            ColorOfFont: "White",
            children: {}
          },
          "4": {
            img: "img/badges/mining.png",
            Unlocked: true,
            SetBackground: "url('img/Ui/brown bg.png')",
            ColorOfFont: "White",
            children: {}
          },
          "16": {
            img: "img/badges/mining.png",
            Unlocked: true,
            SetBackground: "url('img/Ui/brown bg.png')",
            ColorOfFont: "White",
            children: {}
          },
          "64": {
            img: "img/badges/mining.png",
            Unlocked: true,
            SetBackground: "url('img/Ui/brown bg.png')",
            ColorOfFont: "White",
            children: {}
          },
          "256": {
            img: "img/badges/mining.png",
            Unlocked: true,
            SetBackground: "url('img/Ui/brown bg.png')",
            ColorOfFont: "White",
            children: {}
          },
          "1024": {
            img: "img/badges/mining.png",
            Unlocked: true,
            SetBackground: "url('img/Ui/brown bg.png')",
            ColorOfFont: "White",
            children: {}
          }
        }
      },
      "Tailoring": {
        img: "img/badges/tailoring.png",
        Unlocked: false,
        SetBackground: "url('img/Ui/rainbow bg.png')",
        ColorOfFont: "White",
        children: {}
      },
      "Alchemy": {
        img: "img/badges/alchemy.png",
        Unlocked: false,
        SetBackground: "url('img/Ui/rainbow bg.png')",
        ColorOfFont: "White",
        children: {}
      },
      "Blacksmithing": {
        img: "img/badges/blacksmith_craft.png",
        Unlocked: false,
        SetBackground: "url('img/Ui/rainbow bg.png')",
        ColorOfFont: "White",
        children: {}
      }
    }
  },
  "Options": {
    img: "img/High Qualikty Tiles/Dirt 1 512.png",
    Unlocked: true,
    SetBackground: "url('img/Ui/blue star tile.png')",
    ColorOfFont: "White",
    children: {}
  },
  "Credits": {
    img: "img/High Qualikty Tiles/Dirt 1 512.png",
    Unlocked: true,
    SetBackground: "url('img/Ui/blue star tile.png')",
    ColorOfFont: "White",
    children: {}
  }
};

/**
 * Injects a stage into all specified levels under Mining in the menuData structure.
 * @param {object} menuData - The menu data object to update.
 * @param {string} stageName - The name of the stage to add (e.g., "Dirt Patch").
 */
function injectStageToMining(menuData, stageName) {
    const miningLevels = ["1", "4", "16", "64", "256","1024"]; // Levels to add the stage under

    // Define the default properties for the new stage
    const stageProperties = {
        img: "img/badges/mining.png",
        Unlocked: true,
        SetBackground: "black",
        ColorOfFont: "White",
        children: {}
    };

    // Navigate to the Mining section
    let miningSection = menuData["Main Menu"]?.children?.Mining?.children;
    if (!miningSection) {
        console.error("Mining section not found in menuData.");
        return;
    }

    // Add the stage to each level
    for (const level of miningLevels) {
        if (!miningSection[level]) {
            console.warn(`Level ${level} not found under Mining.`);
            continue;
        }

        if (miningSection[level].children[stageName]) {
            console.warn(`Stage '${stageName}' already exists under level ${level}.`);
        } else {
            miningSection[level].children[stageName] = { ...stageProperties };
        }
    }
}
injectStageToMining(menuData, "Dirt Patch");

injectStageToMining(menuData, "Rocky Dirt");

injectStageToMining(menuData, "Frozen Soil");

injectStageToMining(menuData, "Magma Vein");

injectStageToMining(menuData, "Metal Ore Field");

injectStageToMining(menuData, "Snowy Outcrop");

injectStageToMining(menuData, "Rocky Plateau");

injectStageToMining(menuData, "Stony Field");

injectStageToMining(menuData, "Waterlogged Cavern");

injectStageToMining(menuData, "Forest Mine");

injectStageToMining(menuData, "Frozen Dirt");

injectStageToMining(menuData, "Cracked Ice");

injectStageToMining(menuData, "Magma Chamber");

injectStageToMining(menuData, "Metal Seam");

injectStageToMining(menuData, "Snowfield Ridge");

injectStageToMining(menuData, "Jagged Rock");

injectStageToMining(menuData, "Stony Path");

injectStageToMining(menuData, "Glacial Outcrop");

injectStageToMining(menuData, "Crystal Pool");

injectStageToMining(menuData, "Mineral Springs");

injectStageToMining(menuData, "Lava Field");

injectStageToMining(menuData, "Molten Canyon");

injectStageToMining(menuData, "Sunlit Cavern");

injectStageToMining(menuData, "Emerald Gorge");

injectStageToMining(menuData, "Ruby Fissure");

injectStageToMining(menuData, "Sapphire Crevice");

injectStageToMining(menuData, "Glimmering Crater");

injectStageToMining(menuData, "Radiant Cave");

injectStageToMining(menuData, "Shimmering Abyss");

injectStageToMining(menuData, "Luminous Depths");

setInterval(function(){
    window.CurrentOption = $('.breadcrumb-button').last().text()
    window.PreviousOption = $('.breadcrumb-button').last().prev().text()
    window.SecondOption = $('.breadcrumb-button').eq(1).text();
    window.ThirdOption = $('.breadcrumb-button').eq(2).text();
    window.FourthOption = $('.breadcrumb-button').eq(3).text();
},500)
window.CurrentOption = $('.breadcrumb-button').last().text()
    window.PreviousOption = $('.breadcrumb-button').last().prev().text()
    window.pPreviousOption = PreviousOption
    window.pCurrentOption = CurrentOption
    window.SecondOption = $('.breadcrumb-button').eq(1).text();
    window.ThirdOption = $('.breadcrumb-button').eq(2).text();
    window.FourthOption = $('.breadcrumb-button').eq(3).text();
/*************************************************
 * B. HELPER STUFF
 *************************************************/
function findNode(label, data) {
  if (data[label]) {
    return data[label];
  }
  for (var key in data) {
    var kids = data[key].children || {};
    if (kids[label]) {
      return kids[label];
    }
    var deeper = findNode(label, kids);
    if (deeper) return deeper;
  }
  return null;
}

function getChildrenArray(label) {
  var node = findNode(label, menuData);
  if (!node) return [];
  return Object.keys(node.children || {});
}

function wrapIndex(i, len) {
  return ((i % len) + len) % len;
}

/*************************************************
 * C. circleStack
 * We keep an array of circles. Each circle is an
 * object: { items: [...], mainIndex: 0 }
 *************************************************/
var circleStack = [];

/*************************************************
 * initStack(): add first circle with top-level,
 * then add second circle of children
 *************************************************/
function initStack() {
  var topKeys = Object.keys(menuData);
  circleStack = [
    { items: topKeys, mainIndex: 0 }
  ];
  ensureSecondCircle();
}

function ensureSecondCircle() {
  if (circleStack.length === 1) {
    var first = circleStack[0];
    var label = first.items[first.mainIndex];
    var kids = getChildrenArray(label);
    circleStack.push({ items: kids, mainIndex: 0 });
  }
}

/*************************************************
 * D. DRAW A HALF-CIRCLE with jQuery + animation
 *************************************************/
function drawHalfCircle($container, circleData) {
  $container.empty();
  if (!circleData || circleData.items.length === 0) return;

  var items = circleData.items;
  var mainIndex = circleData.mainIndex;

  // geometry
  var centerX = -700;
  var centerY = 300;
  var radius = 900;
  var angleStepDeg = 10;

  for (var i = 0; i < items.length; i++) {
    var offset = i - mainIndex;
    var angleDeg = offset * angleStepDeg;
    var angleRad = Math.PI/180 * angleDeg;

    // final positions
    var x = centerX + radius * Math.cos(angleRad);
    var y = centerY + radius * Math.sin(angleRad);

    // create button
    var label = items[i];
    var node = findNode(label, menuData);

    var $btn = $("<div>").addClass("circle-btn");
    if (offset === 0) {
      $btn.addClass("main-position");
    }
    // add image
    if (node && node.img) {
      var $img = $("<img>").attr("src", node.img)
      $btn.css({backgroundImage:node.SetBackground,color:node.ColorOfFont})
      $btn.append($img);
      if(node.Unlocked){
        $btn.css({opacity:1})
      }else{
        $btn.css({opacity:.3})
      }
    }
    // add text
    $btn.append($("<span class='circlebtnspan'>" +label+"</span>"));

    // place initially at center, then animate
    $btn.css({
      left: "150px",  // start near center
      top: "300px"
    });

    // now animate to final position
    $btn.css({
      left: x + "px",
      top: y + "px"
    });

    // if this is second circle => can "promote"
    if ($container.attr("id") === "second-circle") {
      (function(idx) {
        $btn.on("click", function(e) {
          e.stopPropagation();
          
          promoteSecondCircleItem(idx);
        });
      })(i);
    }

    $container.append($btn);
  }
}

/*************************************************
 * E. WHEEL events
 *************************************************/
function onWheelFirst(e) {
 
  e.preventDefault();
  if (circleStack.length < 1) return;

  var fcIndex = circleStack.length - 2;
  if (fcIndex < 0) fcIndex = 0;

  var firstCircle = circleStack[fcIndex];
  if (!firstCircle.items || firstCircle.items.length === 0) return;

  var delta = e.originalEvent.deltaY > 0 ? 1 : -1;
  firstCircle.mainIndex = wrapIndex(firstCircle.mainIndex + delta, firstCircle.items.length);

  // update second circle
  if (circleStack.length === 1) {
    ensureSecondCircle();
  } else {
    var mainLabel = firstCircle.items[firstCircle.mainIndex];
    var newKids = getChildrenArray(mainLabel);
    circleStack[circleStack.length - 1] = { items: newKids, mainIndex: 0 };
  }

  updateAll();
 
}

function onWheelSecond(e) {
  e.preventDefault();
  if (circleStack.length < 2) return;

  var secondCircle = circleStack[circleStack.length - 1];
  if (!secondCircle.items || secondCircle.items.length === 0) return;

  var delta = e.originalEvent.deltaY > 0 ? 1 : -1;
  secondCircle.mainIndex = wrapIndex(secondCircle.mainIndex + delta, secondCircle.items.length);

  updateAll();
}

/*************************************************
 * F. PROMOTE second circle item
 *************************************************/
function promoteSecondCircleItem(index) {
  if (circleStack.length < 2) return;
  var second = circleStack[circleStack.length - 1];
  second.mainIndex = index;
  var label = second.items[index];
  var kids = getChildrenArray(label);

  circleStack.push({ items: kids, mainIndex: 0 });
  if (circleStack.length > 7) {
    circleStack.shift();
  }

  updateAll();
}

/*************************************************
 * G. BREADCRUMBS
 *************************************************/
function updateBreadcrumbs() {
  var $bc = $("#breadcrumb-container");
  $bc.empty();

  for (var i=0; i<circleStack.length; i++) {
    var cData = circleStack[i];
    var label = cData.items[cData.mainIndex];
    if (!label) continue;

    var node = findNode(label, menuData);

    var $btn = $("<div>").addClass("breadcrumb-button");
    if (node && node.img) {
      $btn.append($("<img>").attr("src", node.img));
      var $img = $btn.find("img").css({width:"90px",height:"90px"});
      $btn.css({backgroundImage:node.SetBackground,color:node.ColorOfFont})
      if(node.Unlocked){
        $btn.css({opacity:1})
      }else{
        $btn.css({opacity:.3})
      }
    }
    $btn.append($("<span class='circlebtnspan'>" +label+"</span>"));

    // on click => remove deeper levels, push new second circle
   (function(idx) {
  $btn.on("click", function() {
    // Capture the current second circle selection
    var currentSecondCircle = circleStack[idx + 1] || { items: [], mainIndex: 0 };
    var currentSelection = currentSecondCircle.items[currentSecondCircle.mainIndex] || null;

    // Truncate the stack to the clicked breadcrumb level
    circleStack = circleStack.slice(0, idx + 1);

    // Push the children of the selected breadcrumb back as the second circle
    var chosen = circleStack[idx];
    var chosenLbl = chosen.items[chosen.mainIndex];
    var kids = getChildrenArray(chosenLbl);
    circleStack.push({ items: kids, mainIndex: 0 });

    // Restore the previous selection in the second circle if it exists
    if (currentSelection) {
      var newSecondCircle = circleStack[circleStack.length - 1];
      var newIndex = newSecondCircle.items.indexOf(currentSelection);
      if (newIndex !== -1) {
        newSecondCircle.mainIndex = newIndex;
      }
    }

    // Ensure the stack doesn't exceed the maximum allowed size
    if (circleStack.length > 7) {
      circleStack.shift();
    }

    // Update the UI
    updateAll();
  });
})(i);


    $bc.append($btn);
  }
}

/*************************************************
 * H. DRAW 2 circles
 *************************************************/
function drawCircles() {
  var $fc = $("#first-circle");
  var $sc = $("#second-circle");
  $fc.empty();
  $sc.empty();

  if (circleStack.length === 1) {
    drawHalfCircle($fc, circleStack[0]);
    ensureSecondCircle();
    if (circleStack.length > 1) {
      drawHalfCircle($sc, circleStack[1]);
    }
  } else {
    var fcIndex = circleStack.length - 2;
    var scIndex = circleStack.length - 1;
    drawHalfCircle($fc, circleStack[fcIndex]);
    drawHalfCircle($sc, circleStack[scIndex]);
  }
}

/*************************************************
 * I. updateAll
 *************************************************/
function updateAll() {
  drawCircles();
  updateBreadcrumbs();
}

/*************************************************
 * J. On Document Ready
 *************************************************/

  // init
  initStack();

  // wheel
  $("#first-circle").on("wheel", onWheelFirst);
  $("#second-circle").on("wheel", onWheelSecond);

  // draw
  updateAll();
     var isMenuLocked = false;

  // Initially hide the menu
  $("#breadcrumb-container, #circles").hide();

  // Show the menu on hover
  $(".menu-button").hover(
    function () {
      if (!isMenuLocked) {
        $("#breadcrumb-container, #circles").stop(true, true).fadeIn(200);
      }
    },
    function () {
      if (!isMenuLocked) {
        $("#breadcrumb-container, #circles").stop(true, true).fadeOut(200);
      }
    }
  );

  // Toggle menu visibility on button click
  $(".menu-button").on("click", function () {
    if (isMenuLocked) {
      // If locked, hide and unlock
      isMenuLocked = false;
      $("#breadcrumb-container, #circles").stop(true, true).fadeOut(200);
    } else {
      // If not locked, show and lock
      isMenuLocked = true;
      $("#breadcrumb-container, #circles").stop(true, true).fadeIn(200);
    }
  });

    // Function to update the visibility of the blue arrow
    function updateBlueArrowVisibility() {
        var breadcrumbs = $("#breadcrumb-container").find(".breadcrumb-button");
        var $blueArrow = $("#blue-arrow");
        if (breadcrumbs.length > 2) {
            $blueArrow.show();
            console.log("greater");
        } else {
            $blueArrow.hide();
        }
    }

    var observer = new MutationObserver(() => {
        updateBlueArrowVisibility();
    });

    var breadcrumbContainer = document.getElementById("breadcrumb-container");
    if (breadcrumbContainer) {
        observer.observe(breadcrumbContainer, { childList: true });
    }

    function addBlueArrow(x, y) {
        // Create the blue arrow element
        var $blueArrow = $("<div>")
            .css({
                width: "91px",
                height: "58px",
                cursor: "pointer",
                position: "absolute",
                zIndex: 500,
                left: x,
                top: y,
                display: "none", // Initially hidden
            })
            .attr("id", "blue-arrow");

        $blueArrow.append(
            $("<img>")
                .attr("src", "img/Ui/rightarrow.png")
                .css({
                    width: "100%", // Make the image fill the container
                    height: "100%",
                    transform: "scaleX(-1)", // Flip the arrow horizontally
                })
        );

        // Add the blue arrow to the page
        $("body").append($blueArrow);

        // Handle blue arrow click
        $blueArrow.on("click", function () {
            var breadcrumbs = $("#breadcrumb-container").find(".breadcrumb-button");
            if (breadcrumbs.length > 2) {
                var secondToLast = breadcrumbs.eq(breadcrumbs.length - 3);
                secondToLast.trigger("click");
            }
        });

        // Update visibility initially
        updateBlueArrowVisibility();
    }

    addBlueArrow(100, $(window).height() / 2 - 30);

    $(window).on("resize", function () {
        // Recalculate positions for the menu button and blue arrow
        var menuButtonX = 0; // Adjust this if needed
        var menuButtonY = $(window).height() / 2 - 35;

        var blueArrowX = 100; // Adjust this if needed
        var blueArrowY = $(window).height() / 2 - 30;

        // Update the menu button's position
        $(".menu-button").css({
            left: menuButtonX + "px",
            top: menuButtonY + "px",
        });

        // Update the blue arrow's position
        $("#blue-arrow").css({
            left: blueArrowX + "px",
            top: blueArrowY + "px",
        });
    });


});