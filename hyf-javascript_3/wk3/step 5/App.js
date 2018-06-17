class App {
    constructor(url) {
        this.initialize(url);
    }
    
    async initialize(url) {
        try {
            spinner.openModal();
            const response = await fetch(url)
            const data = await response.json()
            repositories = data;
            console.log("Success!", data);
            this.render();
        }

        catch (err) {
            function renderError(err) {
                console.log(err);
            }
        }
    }

    render() {
        const repositoriesSelectElement = document.querySelector('#repositories');
        repositoriesSelectElement.addEventListener('change', e => this.getSelectedRepository(e))
        repositories.forEach(repository => {
          const optionElement = document.createElement('option');
          optionElement.setAttribute('value', repository.id);
          optionElement.innerText = repository.name;
          repositoriesSelectElement.appendChild(optionElement);
        });
        if (this.selectedRepository) {
          this.selectedRepository.render(document.querySelector('.repoinfo'))
        }
      }

      getSelectedRepository(event) {
        const repositoriesSelectElement = event.target
        
        const selectedRepository = repositories.find(repository => {
          return repository.id == Number.parseInt(repositoriesSelectElement.value);
        });
        console.log('Selected repository', selectedRepository);
        const displayRepository = new Repository(selectedRepository);
        displayRepository.showRepositoryInformation(selectedRepository);
        this.getSelectedRepositoryContributors(selectedRepository);
    }
    
    getSelectedRepositoryContributors(selectedRepository) {
        let HyfContributorHttps = selectedRepository.contributors_url;
        console.log(HyfContributorHttps);
        this.getContributors(HyfContributorHttps);
    
    }  

    async getContributors(url){
        try {
            let response = await fetch(url)
            let data = await response.json()
            contributors = data
            console.log("Success!", contributors);
            // closeModal();
            let displayContributors = new Contributors(contributors);
            displayContributors.showContributorsInList(contributors);
        }
    
        catch (err) {
            function renderError(err) {
                console.log(err);
            }
        }
    }

}



const HyfRepositoriesHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

let repositories = [];
let contributors = [];

window.onload = () => { spinner = new Loader();
    new App(HyfRepositoriesHttps);
        
    }



let spinner = null;
