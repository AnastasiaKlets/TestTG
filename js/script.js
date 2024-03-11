
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");
let content1 = document.getElementById("content1");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        content1.style.marginTop = "171px"
    } else {
        navbar.classList.remove("sticky");
        content1.style.marginTop = "60px"
    }
}

const elements = document.querySelectorAll('.slide');

elements.forEach(elem => {
    elem.querySelector(".output").textContent = document.querySelector(".slider").value;
    elem.addEventListener("input", (event) => {
        elem.querySelector(".output").textContent = event.target.value;
    });
});

$(document).ready(function($){
    $('.next-q').on('click', function(){
        let $el = $(this),
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


$('[data-modal=consultation]').on('click', function() {
    $('.modal_back, #consultation').fadeIn('slow');
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

$(".form").submit(function (event) {
    $('.form button[type="submit"]').attr('disabled', 'disabled');
    event.preventDefault();
    let the_form = $(this);
    let data = the_form.serialize();
    $.ajax({
        url: '/TestTG/send.php',
        type: 'POST',
        cache: false,
        data: data,
        dataType: 'html',
        success: function (data) {
            $('.form button[type="submit"]').removeAttr('disabled');
            $('form').trigger("reset");
            $('.modal.questionnaire').fadeOut();
            $('.modal.thank').fadeIn();
            setTimeout(()=>{
                $('.modal.thank').fadeOut();
            },5000);
        }
    });
});

