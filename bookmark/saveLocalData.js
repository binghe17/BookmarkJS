(function() {
    if (typeof s_ok == 'undefined') {
        var s = window.document.createElement("script");
        s.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
        window.document.head.appendChild(s);
        s.onload = function() {
            console.log("include jQuery!");
        }
        s_ok = true;
    }

    if (typeof lf_ok == 'undefined') {
        var lf = window.document.createElement("script");
        lf.src = "https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.2/localforage.min.js";
        window.document.head.appendChild(lf);
        lf.onload = function() {
            console.log("include LocalForage!");
            localforage.setDriver([localforage.INDEXEDDB]).then(function() {
                loadedRunFun();
            });
        }
        lf_ok = true;
    }
}
)();
function saveLocalData(key, val, callback) {
    localforage.setItem(key, val).then(function() {
        callback(key, val);
    });
}
function getLocalData(key, callback) {
    localforage.getItem(key).then(function(val) {
        callback(key, val);
    });
}

function loadedRunFun() {
    saveLocalData('aa', 'aaaa', function(key, val) {
        console.log(new Date().getTime(), '[save] ', key, val);
    });
    getLocalData('aa', function(key, val) {
        console.log(new Date().getTime(), '[Read] ', key, val);
    });
}
//JS압축 https://javascript-minifier.com/
//javascript:function saveLocalData(o,e,a){localforage.setItem(o,e).then(function(){a(o,e)})}function getLocalData(o,e){localforage.getItem(o).then(function(a){e(o,a)})}function loadedRunFun(){saveLocalData("aa","aaaa",function(o,e){console.log((new Date).getTime(),"[save] ",o,e)}),getLocalData("aa",function(o,e){console.log((new Date).getTime(),"[Read] ",o,e)})}!function(){if("undefined"==typeof s_ok){var o=window.document.createElement("script");o.src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",window.document.head.appendChild(o),o.onload=function(){console.log("include jQuery!")},s_ok=!0}if("undefined"==typeof lf_ok){var e=window.document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.2/localforage.min.js",window.document.head.appendChild(e),e.onload=function(){console.log("include LocalForage!"),localforage.setDriver([localforage.INDEXEDDB]).then(function(){loadedRunFun()})},lf_ok=!0}}();
