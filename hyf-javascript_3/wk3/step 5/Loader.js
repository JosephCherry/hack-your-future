window.Loader = class Loader {
    constructor() {
        
    }

    openModal() {
        // modalTimerId = window.setTimeout(() => { document.getElementById('modal').style.display = 'block'; }, 1000);
        document.getElementById('modal').style.display = 'block';
    }

    closeModal() {
        // window.clearTimeout(modalTimerId);
        document.getElementById('modal').style.display = 'none';
    }
}