$.icndb.getRandomJokes({
    number: 10, success: (response) => {
        response.forEach((element, index) => {
            $("ul")
            .append('<li class="list-group-item">' + index + ' - ' + element.joke.replace(/&quot;/g, '\"') + '</li>');
        });
    }
});