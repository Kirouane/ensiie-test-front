const JetpackService = require('./src/Service/Api/JetpackApi');
const HttpClient = require('./src/HttpClient');
const httpClient = new HttpClient('http://localhost:4545');
const jetpackService = new JetpackService(httpClient);

jetpackService.getJetpacks().then(jetpacks => {
    let html = '';
    jetpacks.forEach((jetpack) => {
        html += '<div>' +
            '<img src="' + jetpack.image + '" style="width: 300px"/>' +
            jetpack.name
            '</div>';

    })

    document.getElementById('jetpacks').innerHTML = html;
});