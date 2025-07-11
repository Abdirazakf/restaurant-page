import "./styles.css";
import "./reset.css";

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
            const div = document.createElement("div")
            div.textContent = "Home Content"
            contentArea.appendChild(div)
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
            const div = document.createElement("div")
            div.textContent = "Menu Content"
            contentArea.appendChild(div)
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
            const div = document.createElement("div")
            div.textContent = "About Content"
            contentArea.appendChild(div)
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

        init() {
            this.home.init()
            this.menu.init()
            this.about.init()
        }
    }

    const eventController = new EventController()

    document.addEventListener("DOMContentLoaded", () =>{
        console.log()
        eventController.init()
    })

})()