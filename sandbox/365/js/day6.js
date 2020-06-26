console.log('lightbox');
const miniPic = document.querySelectorAll('img');
console.log(miniPic);
const bigPic = document.querySelector('.bigPic');

function handleClick(event){
        console.log(event.currentTarget);
        //when somebody clicks on a tab we have to hide the other tab panels
        // console.log(tabPanels);
        //loop over with foreach
        // tabPanels.forEach(function(panel){
            // console.log(panel);
            //take the panel element
            //hide them all
            // panel.hidden = true;
        // });
        //mark all tabs as inactive.
        // tabButtons.forEach(tab => {
            //taking the tab
            // tab.ariaSelected = false;
            // tab.setAttribute('aria-selected', false);
        // })
        //mark the clicked tab as selected
        //accessiblity attribute over classes.
        // event.currentTarget.setAttribute('aria-selected', true)
    // ;    // find the associated tab panel and show it
        // const { id } = event.currentTarget;
        // console.log(id);
        //dynamic selector
        // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
        // console.log()
        // tabPanel.hidden = false;
    }

    // console.log(`you clicked ${miniPic.id}`);
    // add style to each clicked.
    // bigPic.style.display = 'block';
    
// }

// loop over pics and add a click even to each
miniPic.forEach(pic => pic.addEventListener('click', handleClick));