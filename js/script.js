$(document).ready(function($){
    $('.next-q').on('click', function(){
        var $el = $(this),
            next = $el.data('show');
        $el.parent().hide();
        $('#' + next).show();
    });
});

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

document.querySelectorAll('.close-modal').forEach(el => {
    el.onclick = () => {
        const details = el.closest('details')
        details.open = !details.open
    }
})

document.querySelectorAll('.open-modal').forEach(el => {
    el.onclick = () => {
        const details = document.body.querySelector('details')
        details.open = true
    }
})

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

tabs('.rooms_item_subtitle', '.rooms_item img.active', '.rooms_item_subtitles', 'active');

const elements = document.querySelectorAll('.slide');

elements.forEach(elem => {
    elem.querySelector(".output").textContent = document.querySelector(".slider").value;
    elem.addEventListener("input", (event) => {
        elem.querySelector(".output").textContent = event.target.value;
    });
});

$('[data-modal=consultation]').on('click', function() {
    $('.modal_back, #consultation').fadeIn(1);
});

$('.modal_close').on('click', function() {
    $('.modal_back, #consultation').fadeOut('slow');
});

$('form').submit(function(e) {
    e.preventDefault();
    $('#consultation').fadeOut(1);
    $('.modal_back').fadeIn('slow');
    $('form').trigger('reset');
});

