toggleDropdownMobile();
mainNavBrandAnimation('main-logo-animation');
linkTagsClickHandler();

function mainNavBrandAnimation(classSelector) {
  var $navLogos = document.getElementsByClassName(classSelector);

  for (var i = 0; i < $navLogos.length; i++) {
    var el = $navLogos[i];
    el.style.display = 'inherit';
    el.className += ' flip-in';
  }
}

function toggleDropdownMobile() {
  var $dropDown = document.getElementsByClassName('nav-dropdown');

  for (var i = 0; i < $dropDown.length; i++) {
    var el = $dropDown[i];
    var $dropDownLink = document.getElementsByClassName(el.classList[1])[0];
    listenFor($dropDownLink);
  }
}

function listenFor(el) {
  el.addEventListener('click', function () {
    var $activeEl = document.getElementsByClassName('nav-dropdown active');
    for (var i = 0; i < $activeEl.length; i++) {
      var $active = $activeEl[i];

      if ($active !== el) {
        $active.className = $active.className.replace(/\bactive\b/g, '');
      }
    }

    if (el.classList.contains('active')) {
      el.className = el.className.replace(/\bactive\b/g, '');
    } else {
      el.className += ' active';
    }
  });
}

function linkTagsClickHandler() {
  var $navLinks = document.querySelectorAll('#slanted-header .menu-options-wrapper a');
  var $isMenu = document.querySelector('#slanted-header input[type="checkbox"]');

  for (var i = 0; i < $navLinks.length; i++) {
    var $link = $navLinks[i];

    $link.onclick = function () {
      $isMenu.checked = !$isMenu.checked;
    }
  }

  window.onpopstate = function () {
    $isMenu.checked = false;
  }
}
