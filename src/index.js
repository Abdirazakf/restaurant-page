import "./styles.css";
import "./reset.css";
import chickenWing from "./assets/img/roast-chicken-wings-3.svg"

(function() {
    const contentArea = document.querySelector("#content")

    class Home {
        constructor() {
            this.home = document.querySelector(".home-button")
        }

        clearContent() {
            contentArea.innerHTML = ""
        }

        addHomeContent() {
            function homeHeader(){
                const contentHeader = document.createElement("div")
                contentHeader.classList.add("content-header")
                const leftWing = document.createElement("img")
                const rightWing = document.createElement("img")
                const heading1 = document.createElement("h1")
                heading1.textContent = "Wings and Things Sports Bar"
                leftWing.src = chickenWing
                rightWing.src = chickenWing
                leftWing.alt = "chicken-wing"
                rightWing.alt = "chicken-wing"
                contentHeader.appendChild(leftWing)
                contentHeader.appendChild(heading1)
                contentHeader.appendChild(rightWing)
                contentArea.appendChild(contentHeader)
            }

            function homeReview(){
                const contentReview = document.createElement("div")
                contentReview.classList.add("review")
                const paragraph = document.createElement("p")
                paragraph.textContent = `I've been searching for the perfect wing spot in town, and I think I finally found it! Stopped by last Friday night with a few friends, and we were impressed from the moment we walked in. The atmosphere is casual and welcoming – exactly what you want in a wing joint, with sports playing on multiple screens and that perfect "neighborhood bar" vibe.
                We ordered a variety of flavors to share: buffalo (classic), honey garlic, Nashville hot, and their signature dry rub. The wings arrived hot and crispy, which is honestly half the battle right there. The buffalo sauce had the perfect balance of heat and tang, while the honey garlic was surprisingly addictive. The Nashville hot definitely brought the heat – fair warning if you're not into spicy food! My personal favorite was the dry rub, which had this amazing smoky flavor that didn't need any sauce at all.
                Service was friendly and attentive without being overbearing. Our server Sarah made great recommendations and kept our drinks filled throughout the meal. The only minor complaint was that it took about 20 minutes for our food to arrive, but honestly, good wings are worth the wait.
                The portion sizes are generous – we ordered 24 wings thinking we might need more, but it was plenty for three people. Prices are very reasonable for the quality you're getting.`
                const name = document.createElement("h3")
                const stars = document.createElement("h3")
                name.textContent = "- Mike R., Local Food Enthusiast"
                stars.textContent = "★★★★☆ 4/5 Stars"
                contentReview.appendChild(paragraph)
                contentReview.appendChild(name)
                contentReview.appendChild(stars)
                contentArea.appendChild(contentReview)
            }

            function homeHours(){
                const contentHours = document.createElement("div")
                contentHours.classList.add("hours")
                const header = document.createElement("h2")
                header.textContent = "Hours"
                const monday = document.createElement("div")
                const tuesday = document.createElement("div")
                const wednesday = document.createElement("div")
                const thursday = document.createElement("div")
                const friday = document.createElement("div")
                const saturday = document.createElement("div")
                const sunday = document.createElement("div")
                monday.textContent = "Monday: CLOSED"
                tuesday.textContent = "Tuesday: 10:30AM - 10PM"
                wednesday.textContent = "Wednesday: 10:30AM - 10PM"
                thursday.textContent = "Thursday: 10:30AM - 10PM"
                friday.textContent = "Friday: 10:30AM - 11PM"
                saturday.textContent = "Saturday: 10:30AM - 11PM"
                sunday.textContent = "Sunday: 11:30AM - 10PM"

                contentHours.appendChild(header)
                const daysOfTheWeek = [monday,tuesday,wednesday,thursday,friday,saturday,sunday]

                for (let i = 0; i < daysOfTheWeek.length; i++){
                    daysOfTheWeek[i].classList.add("store-times")
                    contentHours.appendChild(daysOfTheWeek[i])
                }

                contentArea.appendChild(contentHours)
            }

            function homeLocation(){
                const contentLocation = document.createElement("div")
                contentLocation.classList.add("location")
                const header = document.createElement("h2")
                header.textContent = "Location"
                const address = document.createElement("h3")
                address.textContent = "9721 N Alpine Rd, Machesney Park, Illinois, 61115"
                contentLocation.appendChild(header)
                contentLocation.appendChild(address)
                contentArea.appendChild(contentLocation)
            }

            homeHeader()
            homeReview()
            homeHours()
            homeLocation()
        }

        init() {
            this.home.addEventListener("click", () =>{
                this.clearContent()
                this.addHomeContent()
            })
        }
    }

    class Menu {
        constructor() {
            this.menu = document.querySelector(".menu-button");
        }

        clearContent() {
            contentArea.innerHTML = ""
        }

        addMenuContent() {
            function menuHeader(){
                const contentHeader = document.createElement("div")
                contentHeader.classList.add("content-header")
                const leftWing = document.createElement("img")
                const rightWing = document.createElement("img")
                const heading1 = document.createElement("h1")
                heading1.textContent = "Menu"
                leftWing.src = chickenWing
                rightWing.src = chickenWing
                leftWing.alt = "chicken-wing"
                rightWing.alt = "chicken-wing"
                contentHeader.appendChild(leftWing)
                contentHeader.appendChild(heading1)
                contentHeader.appendChild(rightWing)
                contentArea.appendChild(contentHeader)
            }

            menuHeader()
        }

        init() {
            this.menu.addEventListener("click", () =>{
                this.clearContent()
                this.addMenuContent()
            })
        }
    }

    class About {
        constructor() {
            this.about = document.querySelector(".about-button")
        }

        clearContent() {
            contentArea.innerHTML = ""
        }

        addAboutContent() {
            function aboutHeader(){
                const contentHeader = document.createElement("div")
                contentHeader.classList.add("content-header")
                const leftWing = document.createElement("img")
                const rightWing = document.createElement("img")
                const heading1 = document.createElement("h1")
                heading1.textContent = "About"
                leftWing.src = chickenWing
                rightWing.src = chickenWing
                leftWing.alt = "chicken-wing"
                rightWing.alt = "chicken-wing"
                contentHeader.appendChild(leftWing)
                contentHeader.appendChild(heading1)
                contentHeader.appendChild(rightWing)
                contentArea.appendChild(contentHeader)
            }

            function aboutStory(){
                const contentStory = document.createElement("div")
                contentStory.classList.add("review")
                const header = document.createElement("h1")
                header.textContent = "Our Story"
                header.style.textAlign = "center"
                const paragraph = document.createElement("p")
                paragraph.textContent = "Wings and Things was born from a simple passion: creating the perfect wing experience. Our founders believed that great wings shouldn't be hard to find, and that watching the game should always come with exceptional food and genuine hospitality. What started as a dream to bring authentic, made-from-scratch wings to our community has grown into Machesney Park's premier sports bar destination."
                contentStory.appendChild(header)
                contentStory.appendChild(paragraph)
                contentArea.appendChild(contentStory)
            }

            function aboutSpecial(){
                const contentSpecial = document.createElement("div")
                contentSpecial.classList.add("about-content")
                const header = document.createElement("h1")
                header.textContent = "What Makes Us Special"
                header.style.textAlign = "center"
                const heading1 = document.createElement("h3")
                const heading2 = document.createElement("h3")
                const heading3 = document.createElement("h3")
                const para1 = document.createElement("p")
                const para2 = document.createElement("p")
                const para3 = document.createElement("p")
                heading1.textContent = "Authentic Flavors, Fresh Ingredients"
                para1.textContent = "Every wing that leaves our kitchen is hand-tossed in sauces and rubs made fresh daily. From our classic buffalo that strikes the perfect balance of heat and tang, to our signature dry rub with its smoky, addictive flavor profile, we've crafted each recipe to deliver bold, memorable taste. Our honey garlic has become a local favorite, while our Nashville hot brings serious heat for those who dare"
                heading2.textContent = "The Perfect Game Day Atmosphere"
                para2.textContent = "Step inside and you'll immediately feel at home. Multiple large-screen TVs ensure you never miss a moment of the action, whether you're cheering for the home team or catching up on highlights. Our casual, welcoming environment is designed for good times – whether you're flying solo, on a date night, or bringing the whole crew."
                heading3.textContent = "Service That Goes the Extra Mile"
                para3.textContent = "Our team doesn't just take orders – they're part of the Wings and Things family, and they treat every guest like family too. From helping you navigate our extensive flavor menu to keeping your drinks filled throughout the game, we're committed to making your experience exceptional from start to finish."
                contentSpecial.appendChild(header)
                contentSpecial.appendChild(heading1)
                contentSpecial.appendChild(para1)
                contentSpecial.appendChild(heading2)
                contentSpecial.appendChild(para2)
                contentSpecial.appendChild(heading3)
                contentSpecial.appendChild(para3)
                contentArea.appendChild(contentSpecial)
            }
            
            aboutHeader()
            aboutStory()
            aboutSpecial()
        }

        init() {
            this.about.addEventListener("click", () =>{
                this.clearContent()
                this.addAboutContent()
            })
        }
    }

    class EventController {
        constructor() {
            this.home = new Home()
            this.menu = new Menu()
            this.about = new About()
        }
        
        loadHomePage(){
            this.home.clearContent()
            this.home.addHomeContent()
        }

        init() {
            this.home.init()
            this.menu.init()
            this.about.init()
        }
    }

    const eventController = new EventController()

    document.addEventListener("DOMContentLoaded", () =>{
        eventController.loadHomePage()
        eventController.init()
    })

})()