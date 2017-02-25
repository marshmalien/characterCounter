document.addEventListener('DOMContentLoaded', function() {
  var textArea = document.querySelector('textarea'),
      counter = document.querySelector('h2'),
      progress = document.querySelector('.progress'),
      quad1 = document.querySelector('.quad1'),
      quad2 = document.querySelector('.quad2'),
      quad3 = document.querySelector('.quad3'),
      quad4 = document.querySelector('.quad4');

  textArea.addEventListener('keydown', function() {
    setTimeout(function() {
      var textLength = textArea.value.length;
      counter.innerHTML = textLength;
      setPie(textLength);
    }, 0);
  });

  function setPie(textLength) {
    removeRed();
    var stepper = textLength * 100 / 150;

    if(stepper <= 25) {
      updateQuads(stepper * (-90 / 25), 0, 0, 0);
    }
    else if(stepper > 25 && stepper <=50) {
      updateQuads(-90, (stepper-25) * (90/25), 0, 0);
    }
    else if(stepper > 50 && stepper <=75) {
      updateQuads(-90, 90, (stepper-50) * (-90/25), 0);
    }
    else if(stepper > 75 && stepper <=100) {
      updateQuads(-90, 90, -90, (stepper-75) * (90/25));
    }
    else {
      updateQuads(-90, 90, -90, 90);
      addRed();
    }
  }

  function updateQuads(topRight, bottomRight, bottomLeft, topLeft) {
    quad1.setAttribute('style', 'transform: skew(' + topRight + 'deg)');
    quad2.setAttribute('style', 'transform: skewY(' + bottomRight + 'deg)');
    quad3.setAttribute('style', 'transform: skew(' + bottomLeft + 'deg)');
    quad4.setAttribute('style', 'transform: skewY(' + topLeft + 'deg)');
  }

  function addRed() {
    progress.classList.add('red');
    progress.classList.add('bubble');
  }

  function removeRed() {
    progress.classList.remove('red');
    progress.classList.remove('bubble');
  }

});
