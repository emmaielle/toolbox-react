

class Backend {
    constructor(){
        this.URL = 'http://localhost:5000';
    }

    getMirror(text){
        const encoded = encodeURI(text);
        return fetch(`${this.URL}/mirror/${encoded}`);
    }
}

export default Backend;