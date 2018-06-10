'use strict';
{
  const HyfRepositoriesHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  var HyfContributorHttps = null;

  var repositories = [];
  var contributors = [];

  class Repository {
    constructor(selectedRepository) {
      this.showRepositoryInformation(selectedRepository);
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
    getSelectedRepositoryContributors(selectedRepository) {
      HyfContributorHttps = selectedRepository.contributors_url;
      console.log(HyfContributorHttps);
      getContributors(HyfContributorHttps);

    }
    
  }

  class Contributor {
    constructor(data) {
      this._data = data;
    }

    showContributorsInList(contributors) {

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

  class View {
    constructor(theUrl) {
      this.initialize(theUrl);
      
  
    }


    async initialize(theUrl) {
      try {
        const response = await fetch(theUrl)
        const data = await response.json()
        repositories = data;
        console.log("Success!", repositories);
        this.showRepositoriesInSelect(repositories);
      }

      catch (err) {
        function renderError(err) {
          console.log(err);
        }
      }
    }

    showRepositoriesInSelect(repositories) {

      const repositoriesSelectElement = document.querySelector('#repositories');
      repositoriesSelectElement.setAttribute('onchange', "getSelectedRepository(this)");

      repositories.forEach(repository => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', repository.id);
        optionElement.innerText = repository.name;

        repositoriesSelectElement.appendChild(optionElement);
      });
    }

    

      
      async getContributors(theUrl) {
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


    }


  window.onload = () => new View(HyfRepositoriesHttps);
}

function getSelectedRepository(repositoriesSelectElement) {
  const selectedRepository = repositories.find(repository => {
    return repository.id == Number.parseInt(repositoriesSelectElement.value);
  });
  console.log('Selected repository', selectedRepository);
  let Repo = new Repository(selectedRepository);
  Repo = new Repository(selectedRepository);
}