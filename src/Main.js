exports.rotate = function(id) {
  return function(direction) {
    return function() {
      var elem = document.querySelectorAll("." + id)[0];

      if (direction == "stop") {
        elem.className = "gear " + id;
      } else {
        elem.className += " rotate " + direction;
      }
    }
  }
}

exports.attachEvents = function(id) {
  return function(sub) {
    var elem = document.querySelectorAll("." + id)[0];

    if (!window.MAP) {
      window.MAP = {};
    }

    var cb = function(e) {
      if (typeof window.MAP[id] == "undefined") {
        window.MAP[id] = 1;
      }

      if (window.MAP[id] == 1) {
        window.MAP[id] =  0;
        elem.querySelectorAll("img")[0].src = "gear.png";
      } else {
        window.MAP[id] =  1;
        elem.querySelectorAll("img")[0].src = "gear_checked.png";
      }

      sub(window.MAP[id])();
    };

    window.SUB = sub;
    elem.addEventListener("click", cb);
  }
}
