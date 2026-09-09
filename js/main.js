document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE NAVIGATION */
    const menu = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");

    if (menu && mobileNav) {
        menu.addEventListener("click", () => {
            const isOpen = mobileNav.classList.toggle("open");

            menu.setAttribute("aria-expanded", String(isOpen));
            menu.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        mobileNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("open");
                menu.setAttribute("aria-expanded", "false");
                menu.setAttribute("aria-label", "Open menu");
            });
        });
    }


    /* CURRENT YEAR */
    document.querySelectorAll("#year").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });


    /* SCROLL REVEAL ANIMATIONS */
    const animatedSelectors = [
        ".hero-copy",
        ".hero-visual",
        ".intro-grid > div",
        ".section-head",
        ".service-card",
        ".audience-box > div",
        ".audience-cards > div",
        ".cta-inner > div",
        ".cta-inner > a",
        ".page-hero .narrow",
        ".values-grid > *",
        ".service-detail-grid > *",
        ".work-row",
        ".reason-grid > *",
        ".quote-box",
        ".contact-page-grid > div",
        ".contact-form",
        ".two-col > div"
    ];

    const animatedElements = document.querySelectorAll(
        animatedSelectors.join(",")
    );

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduceMotion && "IntersectionObserver" in window) {

        animatedElements.forEach((element, index) => {

            element.classList.add("reveal");

            const staggerIndex = index % 6;

            element.style.setProperty(
                "--reveal-delay",
                `${staggerIndex * 80}ms`
            );
        });


        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


        animatedElements.forEach((element) => {
            revealObserver.observe(element);
        });
    }


    /* CONTACT FORM */
    const form = document.getElementById("contactForm");

    if (!form) return;

    const note = document.getElementById("formNote");

    const submitButton = form.querySelector(
        'button[type="submit"]'
    );

    const nameInput = document.getElementById("name");

    const emailInput = document.getElementById("email");

    const messageInput = document.getElementById("message");

    const honeypot = document.getElementById("company");


    form.addEventListener("submit", async (event) => {

        event.preventDefault();


        /* Clear previous message */
        if (note) {

            note.textContent = "";

            note.classList.remove(
                "success",
                "error"
            );
        }


        /* Honeypot spam check */
        if (
            honeypot &&
            honeypot.value.trim() !== ""
        ) {
            return;
        }


        /* Basic validation */
        const name = nameInput?.value.trim() || "";

        const email = emailInput?.value.trim() || "";

        const message = messageInput?.value.trim() || "";


        if (!name || !email || !message) {

            showFormMessage(
                "Please complete all required fields.",
                "error"
            );

            return;
        }


        /* Email validation */
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showFormMessage(
                "Please enter a valid email address.",
                "error"
            );

            emailInput?.focus();

            return;
        }


        /* Message length validation */
        if (message.length < 15) {

            showFormMessage(
                "Please give us a little more detail about your project.",
                "error"
            );

            messageInput?.focus();

            return;
        }


        /* Prevent accidental double submission */
        if (submitButton) {

            submitButton.disabled = true;

            submitButton.textContent = "Sending...";
        }


        try {

            const formData = new FormData(form);


            const response = await fetch(
                form.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );


            if (response.ok) {

                showFormMessage(
                    "Thank you! Your project brief has been sent successfully.",
                    "success"
                );

                form.reset();

            } else {

                showFormMessage(
                    "Something went wrong. Please try again or contact us on WhatsApp.",
                    "error"
                );
            }


        } catch (error) {

            showFormMessage(
                "Unable to send your message right now. Please try again or contact us on WhatsApp.",
                "error"
            );
        }


        /* Restore button */
        if (submitButton) {

            submitButton.disabled = false;

            submitButton.textContent = "Send Project Brief";
        }

    });


    /* FORM MESSAGE HELPER */
    function showFormMessage(message, type) {

        if (!note) return;

        note.textContent = message;

        note.classList.remove(
            "success",
            "error"
        );

        note.classList.add(type);
    }

});