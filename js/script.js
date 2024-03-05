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

let tabs = document.querySelectorAll('.rooms_item_subtitle'),
    tabsParent = document.querySelector('.rooms_item_subtitles');

function hideTabContent() {
    tabs.forEach(item => {
        item.classList.remove('active');
    });
}

function showTabContent(i = 0) {
    tabs[i].classList.add('active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('rooms_item_subtitle')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

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

