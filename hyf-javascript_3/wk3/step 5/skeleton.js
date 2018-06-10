'use strict';
{
  let HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  let repositories = [];
  let contributors = [];

  class Categories {
    constructor(data) {
      this._data = data;
    }

    /**
     * Render the repository info to the DOM.
     * @param {HTML element} parent The parent element in which to render the repository.
     * info.
     */
    render(parent) {
      // Add your code here.
      // This method should render the repository data stored in the '_data' property
      // as HTML elements and append them to the `parent` element.
    


    /**
     * Returns an array of contributors as a promise
    */
    fetchContributors() {
      // Add your code here
     

  class Contributor {
    constructor(data) {
      this._data = data;
    }

    /**
     * Render the contributor info to the DOM.
     * @param {HTML element} parent The parent element in which to render the contributor.
     * info.
     */
    render(parent) {
      // Add your code here.
      // This method should render the contributor data stored in the 'data' property
      // as HTML elements and append them to the `parent` element.
    }
  }

  class View {
    constructor() {
      this.initialize();
    }

    /**
     * View initialization
     */
    async initialize() {
      // Add code here to initialize your app
      // 1. Create the fixed HTML elements of your page
      // 2. Make an initial XMLHttpRequest to populate your <select> element

    }

    /**
     * Fetch information for the selected repository and render the
     * information as HTML elements in the DOM
     * @param {*} repoName The name of the selected repository
     */
    async fetchAndRender(repoName) {
      // const leftDiv = ...;
      // const rightDiv = ...;

      // ...

      try {
        const contributors = await repo.fetchContributors();
        repo.render(leftDiv);
        contributors
          .map(contributor => new Contributor(contributor))
          .forEach(contributor => contributor.render(contributorList));
      }
      catch (error) {
        createAndAppend('div', container, { html: error.message, class: 'alert alert-error' });
      }
    }

    /**
     * Fetch API data as JSON data in a promise
     * @param {string} url The URL of the API endpoint.
     * @returns A promise.
     */
    fetchJSON(url) {
      // Add your code here
    

  window.onload = () => new View();
}