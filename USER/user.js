

// INITIAL PAGE LOAD

let signup = gsap.timeline();

signup.from(".containerinput", {
    opacity: 0,
    duration: 0.8,
    y: 100
})
signup.from(".containerinput .title", {
    opacity: 0,
    duration: 1,
    delay: -0.8,
    y: 100
})
signup.from(".containerinput .inputcontainer .input", {
    opacity: 0,
    duration: 0.4,
    y: 100,
    stagger: 0.2
})
signup.from(".containerinput .inputcontainer .checkbox",{
    opacity: 0,
    duration: 0.4,
    y: 100
})
signup.from(".containerinput #bottom input", {
    opacity: 0,
    duration: 0.4,
    y: 100
})
signup.to(".containerinput .title", {
    scale: 1.2,
    duration: 1,
    delay: -0.5
})






let loginbtn = document.querySelector(".containerinput #loginbtn");

loginbtn.addEventListener("click",() => {

    let loginclick = gsap.timeline();

    // MOVING OUTSIDE
    loginclick.to(".containerinput .title, .containerinput .inputcontainer .input, .containerinput .inputcontainer .checkbox, .containerinput #bottom input", {
        opacity: 0,
        duration: 0.6,
        y: 100,
        stagger: 0.12
    })
    loginclick.to(".containerinput #circle", {
        scale: 6,
        y: 250, 
        duration: 0.8,
        delay: -0.4,
        opacity: 1
    })

    loginclick.to(".containerinput #circle", {
        duration: 0.15,
        opacity: 0
    })

    // OPACITY CONTAINERS
    loginclick.to(".containerinput", {
        opacity: 0,
        display: "none",
        duration: 0.1
    })
    loginclick.to(".containerlogin", {
        display: "inline-flex",
        opacity: 1
    })

    // INITIAL STATE 
    loginclick.to(".containerinput .title, .containerinput .inputcontainer .input, .containerinput .inputcontainer .checkbox, .containerinput #bottom input", {
        opacity: 1,
        y: 0
    })
    loginclick.to(".containerinput #circle", {
        scale: 1,
        y: 0,
        opacity: 0.6
    })
})












let signupbtn = document.querySelector(".containerlogin #signupbtn");

signupbtn.addEventListener("click",() => {

    let signupclick = gsap.timeline();

    // MOVING OUTSIDE
    signupclick.to(".containerlogin .title, .containerlogin .inputcontainer .input, .containerlogin #bottom input, .containerlogin #forgot", {
        opacity: 0,
        duration: 0.6,
        y: 100,
        stagger: 0.12
    })
    signupclick.to(".containerlogin #circle", {
        scale: 6,
        y: 250, 
        duration: 0.8,
        delay: -0.4,
        opacity: 1
    })
    signupclick.to(".containerlogin #circle", {
        duration: 0.15,
        opacity: 0
    })

    // OPACITY CONTAINER
    signupclick.to(".containerlogin", {
        opacity: 0,
        display: "none",
        duration: 0.1
    })
    signupclick.to(".containerinput", {
        display: "inline-flex",
        opacity: 1
    })

    // INITIAL STATE
    signupclick.to(".containerlogin .title, .containerlogin .inputcontainer .input, .containerlogin #bottom input, .containerlogin #forgot", {
        opacity: 1,
        y: 0
    })
    signupclick.to(".containerlogin #circle", {
        scale: 1,
        y: 0,
        opacity: 0.6
    })
 
})