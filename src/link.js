const triggers = document.querySelectorAll('.toHighLight');
  const highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  //finding the coordinated
  function highlightLink() {
      //finding the coordinated
    const linkCoords = this.getBoundingClientRect();
    // console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };

     //switch out reference to linkCoords with the object made above.
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

        // console.log(linkCoords);
    // console.log(this); // the actual link
    // console.log('highlight');
  }

// forEach trigger run the function highlight when your mouse enters a space defined by above.
  triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

