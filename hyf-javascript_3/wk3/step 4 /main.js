function main() {
    const HyfRepositoriesHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    var HyfContributorHttps = null;

    getRepositories(HyfRepositoriesHttps);


    console.log('main!');
    console.log(HyfContributorHttps);
}
var repositories = [];
var contributors = [];


function showRepositoriesInSelect(repositories) {

    const repositoriesSelectElement = document.querySelector('#repositories');
    repositoriesSelectElement.setAttribute('onchange', "getSelectedRepository(this)");

    repositories.forEach(repository => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', repository.id);
        optionElement.innerText = repository.name;

        repositoriesSelectElement.appendChild(optionElement);
    });


}
function showContributorsInList(contributors) {

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

function showRepositoryInformation(selectedRepository) {
    const repositoriesInformationElement = document.querySelector('.repoinfo');

    while (repositoriesInformationElement.hasChildNodes()) {
        repositoriesInformationElement.removeChild(repositoriesInformationElement.firstChild);
    }

    const repoContainer = document.createElement('div');
    repoContainer.setAttribute('class', 'repoContainer');

    const repoLink = document.createElement('a');
    repoLink.setAttribute('target', '_blank');
    repoLink.href = selectedRepository.html_url;
    repoLink.innerText = selectedRepository.name;

    const repoDescription = document.createElement('h3');
    repoDescription.innerText = "Description: " + selectedRepository.description;


    const repoForks = document.createElement('h3');
    repoForks.innerText = "Forks: " + selectedRepository.forks

    const repoUpdate = document.createElement('h3');
    repoUpdate.innerText = "Last Updated: " + selectedRepository.updated_at;

    repoContainer.appendChild(repoLink);
    repoContainer.appendChild(repoDescription);
    repoContainer.appendChild(repoForks);
    repoContainer.appendChild(repoUpdate);
    repositoriesInformationElement.appendChild(repoContainer);

}

function getSelectedRepository(repositoriesSelectElement) {
    const selectedRepository = repositories.find(repository => {
        return repository.id == Number.parseInt(repositoriesSelectElement.value);
    });
    console.log('Selected repository', selectedRepository);
    getSelectedRepositoryContributors(selectedRepository);
    showRepositoryInformation(selectedRepository);
}

function getSelectedRepositoryContributors(selectedRepository) {
    HyfContributorHttps = selectedRepository.contributors_url;
    console.log(HyfContributorHttps);
    getContributors(HyfContributorHttps);

}

async function getRepositories(theUrl) {
    try {
        const response = await fetch(theUrl)
        const data = await response.json()
        repositories = data;
        console.log("Success!", repositories);
        showRepositoriesInSelect(repositories)
    }

    catch (err) {
        function renderError(err) {
            console.log(err);
        }
    }
}


async function getContributors(theUrl) {
    openModal()
    try {
        let response = await fetch(theUrl)
        let data = await response.json()
        contributors = data
        console.log("Success!", contributors);
        closeModal();
        showContributorsInList(contributors);
    }

    catch (err) {
        function renderError(err) {
            console.log(err);
        }
    }

}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}