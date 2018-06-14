const fetch = require('node-fetch');


export const Api = {
    getAPI: function (url) {
        return fetch(url)
            .then(response => response.json())
            .catch(console.log);
    }
};

export const filterByType = (type) => {
    let data = Api.getAPI('https://raw.githubusercontent.com/balaswecha/pencilbox-2/master/app/json/all.json');
    return data.then(value => value.filter(x => x.type === type));
};


export const filterBySubject = (subject) => {
    let data = Api.getAPI('https://raw.githubusercontent.com/balaswecha/pencilbox-2/master/app/json/all.json');
    return data.then(value => value.filter(x => x.subject === subject));
};


export const filterByTypeAndSubject = (type, subject) => {
    let data = Api.getAPI('https://raw.githubusercontent.com/balaswecha/pencilbox-2/master/app/json/all.json');
    return data.then(value => value.filter(x => x.type === type && x.subject === subject));
};

export const getCountOfUniqueTypes = () => {
    let data = Api.getAPI('https://raw.githubusercontent.com/balaswecha/pencilbox-2/master/app/json/all.json');
    return data.then(values => {
        let array1 = [];
        for (let value of values){
            if (!array1.includes(value.type)) {
                array1.push(value.type)
            }
        }
        return array1.length
    });
}



