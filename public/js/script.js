// Jai Shree Ram

function lenis() {
    document.addEventListener("DOMContentLoaded", function() {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });
    
        const contactSection = document.getElementById('contact');
        const originalScroll = lenis.scroll;
    
        lenis.scroll = function(target, options = {}) {
            if (target === contactSection) {
                options.duration = 2; // Faster scroll for contact section
            }
            return originalScroll.call(this, target, options);
        };
    
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
    });
    
    
}

lenis()

function emailChecker() {
    
    document.querySelector(".formSubmitionBtn").addEventListener("click", function(e) {

        // getting values from the form
        let name = document.querySelector("#name").value
        let email = document.querySelector("#email").value
        let subject = document.querySelector("#subject").value
        let desc = document.querySelector("#desc").value


        // checking if any of the fields are empty
        if ([name , email , subject , desc].includes("")) {
            alert("Please fill all the fields")
        } else {
            null
        }


    })
}

emailChecker()