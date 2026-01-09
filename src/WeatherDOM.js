const container = document.querySelector("#container");
export default class WeatherDOM {
    static createDOM(loc, days) {
        this.clearContainer();
        this.#createHeader(loc);
        const bodyContainer = this.#createBodyContainer();
        this.#createBody(bodyContainer, days);
    }
    static clearContainer(){
        container.textContent = "";
    }
    static #createBodyContainer(){
        const bodyContainer = document.createElement("div")
        bodyContainer.classList.add("bodyContainer");
        container.appendChild(bodyContainer);
        return bodyContainer;
    }
    static #createHeader(loc) {
        const title = document.createElement("h1");
        title.textContent = loc;
        title.classList.add("title");
        container.appendChild(title);
    };
    static #createBody(container, days) {
        this.#createBodyLists(container, days);
    }
    static #createBodyLists(container, days) {
        for (let i = 0; i < days.length; i++){
            const list = document.createElement("ul");
            const currDay = days[i];
            for (let items in currDay) {
                const listItem = document.createElement("li");
                const title = document.createElement("p");
                const data = document.createElement("p");

                title.textContent = items;
                data.textContent = currDay[items];

                list.appendChild(listItem);
                listItem.appendChild(title);
                listItem.appendChild(data);
            }
            const title = document.createElement("h3");
            title.textContent = `Day ${i}`;
            container.appendChild(title);
            container.appendChild(list);
        }
    }
}
