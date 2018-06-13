class Contributors {
    constructor(data){
        this._data = data;
    }

    showContributorsInList(data) {

        const contributorsListElement = document.querySelector('#contributorList');
        // Removes current list.
        while (contributorsListElement.hasChildNodes()) {
            contributorsListElement.removeChild(contributorsListElement.firstChild);
        }
        // Renders new list. 
        contributors.forEach(contributor => {
            const contributorContainer = document.createElement('div');
            contributorContainer.setAttribute('class', 'contributorContainer');
            const listElement = document.createElement('h2');
            listElement.innerText = contributor.login;
            const imgElement = document.createElement('img');
            imgElement.src = contributor.avatar_url;
            const txtElement = document.createElement('h3');
            txtElement.innerText = contributor.contributions;
            contributorContainer.appendChild(listElement);
            contributorContainer.appendChild(imgElement);
            contributorContainer.appendChild(txtElement);
            contributorsListElement.appendChild(contributorContainer);
        })
    }
}