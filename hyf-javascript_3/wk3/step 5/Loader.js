class Loader {
    constructor() {
        let modalTimerId = null;
    }

    openModal() {
        modalTimerId = window.setTimeout(() => { document.getElementById('modal').style.display = 'block'; }, 1000);
    }

    closeModal() {
        window.clearTimeout(modalTimerId);
        document.getElementById('modal').style.display = 'none';
    }
}