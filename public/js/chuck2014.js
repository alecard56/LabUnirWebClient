const myRequest = new Request('http://api.icndb.com/jokes/random/10');

fetch(myRequest)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.value?.forEach((element, index) => { $("ul").append('<li class="list-group-item">' + index + ' - ' + element.joke.replace(/&quot;/g, '\"') + '</li>'); });
    });