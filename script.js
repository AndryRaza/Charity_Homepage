window.onload=function(){
    window.addEventListener('scroll', function () {

        if (window.scrollY >= (document.getElementById('stats').offsetTop-550)) {
          window.addEventListener('scroll', move_donations);
          window.addEventListener('scroll', move_families);
          window.addEventListener('scroll', move_projects);
          window.addEventListener('scroll', move_partners);
        }
      });

      anim_donate = false;
      anim_families = false;
      anim_projects = false;
      anim_partners = false;

      function move_donations() {
        if (!anim_donate) {
          var elem = document.getElementById("stat_donations");
          var i = 0;
          var id = setInterval(frame, 150);
          function frame() {
            if (i >= 10000) {
              elem.innerHTML = i;
              anim_donate = true;
              clearInterval(id);
            } else {
              i = i + 300;
              elem.innerHTML = i;
            }
          }
        }
      }

      function move_families() {
        if (!anim_families) {
          var elem = document.getElementById("stat_families");
          var i = 0;
          var id = setInterval(frame, 1000);
          function frame() {
            if (i == 6) {
              elem.innerHTML = i;
              anim_families = true;
              clearInterval(id);
            } else {
              i = i + 1;
              elem.innerHTML = i;
            }
          }
        }
      }

      function move_projects() {
        if (!anim_projects) {
          var elem = document.getElementById("stat_projects");
          var i = 0;
          var id = setInterval(frame, 1000);
          function frame() {
            if (i == 6) {
              elem.innerHTML = i;
              anim_projects = true;
              clearInterval(id);
            } else {
              i = i + 1;
              elem.innerHTML = i;
            }
          }
        }
      }

      function move_partners() {
        if (!anim_partners) {
          var elem = document.getElementById("stat_partners");
          var i = 0;
          var id = setInterval(frame, 1000);
          function frame() {
            if (i == 6) {
              elem.innerHTML = i;
              anim_partners = true;
              clearInterval(id);
            } else {
              i = i + 1;
              elem.innerHTML = i;
            }
          }
        }
      }
}