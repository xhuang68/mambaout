var pressed = {
    "allstar": false,
    "team": false,
    "champion": false,
    "mvp": false,
    "other": false,
    "globe": false
}

var colors = {
    "allstar": '#064E9B',
    "team": '#588AC5',
    "champion": '#FCB827',
    "mvp": '#9013FE',
    "other": '#34A855',
    "globe": '#0099CC'
}

var detailShown = {
    "s1": false,
    "s2": false,
    "s3": false,
    "s4": false,
    "s5": false,
    "s6": false,
    "s7": false,
    "s8": false,
    "s9": false,
    "s10": false,
    "s11": false,
    "s12": false,
    "s13": false,
    "s14": false,
    "s15": false,
    "s16": false,
    "s17": false,
    "s18": false,
    "s19": false,
    "s20": false,
    "stats": false,
    "graph": false,
    "shot": false
}

var expandOn = false;

function highlight(cName, color) {
    if (!pressed[cName]) {
        $("." + cName).attr("style", "color:" + color + "; font-style: italic; font-weight: bold");
    } else {
        $("." + cName).removeAttr("style");
    }
}

function showData(id) {
    if (!pressed[id]) {
        $("#" + id + "-data").show(500);
    } else {
        $("#" + id + "-data").hide(500);
    }
}

function buttonPressed(cName) {
    var color = colors[cName];
    highlight(cName, color);
    showData(cName);
    pressed[cName] = !pressed[cName];
}

function showDetail(id) {
    if (!detailShown[id]) {
        $("#" + id + "-detail").slideDown(200);
        $("#" + id + " i").removeClass("fa fa-angle-down");
        $("#" + id + " i").addClass("fa fa-angle-up");
    } else {
        $("#" + id + "-detail").slideUp(200);
        $("#" + id + " i").removeClass("fa fa-angle-up");
        $("#" + id + " i").addClass("fa fa-angle-down");
    }
    detailShown[id] = !detailShown[id];
}

function expand() {
    if (!expandOn) {
        $(".btn-expand").html("收起全部 <i class=\"fa fa-compress\" aria-hidden=\"true\"></i>");
        for (button in pressed) {
            if (!pressed[button]) {
                buttonPressed(button);
            }
        }
        for (detail in detailShown) {
            if (!detailShown[detail]) {
                showDetail(detail);
            }
        }
    } else {
        $(".btn-expand").html("展开全部 <i class=\"fa fa-expand\" aria-hidden=\"true\"></i>");
        for (button in pressed) {
            if (pressed[button]) {
                buttonPressed(button);
            }
        }
        for (detail in detailShown) {
            if (detailShown[detail]) {
                showDetail(detail);
            }
        }
    }
    expandOn = !expandOn;
}
