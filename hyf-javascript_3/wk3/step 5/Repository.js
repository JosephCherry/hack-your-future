class Repository {
    constructor(data){
        this._data = data;
    }
    showRepositoryInformation(selectedRepository) {
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
}

