function inhale(innerCircle, width, isInhale) {
  if (isInhale === true) {
    innerCircle.style.height = width + 75 + "px";
    innerCircle.style.width = width + 75 + "px";
  } else {
    return (isInhale = false);
  }
}

function exhale(innerCircle, width, isInhale) {
  if (isInhale === false) {
    innerCircle.style.height = width - 75 + "px";
    innerCircle.style.width = width - 75 + "px";
  } else {
    return (isInhale = true);
  }
}

function func() {
  let isInhale = true;
  const innerCircle = document.getElementById("innerCircle");
  let width = Number(getComputedStyle(innerCircle).height.split("px")[0]);

  if (width >= 400) {
     exhale(innerCircle, width, isInhale);
  } else {
    isInhale = inhale(innerCircle, width, isInhale);
  }
}
setInterval(func, 1000);
