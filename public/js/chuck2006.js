$.get("http://api.icndb.com/jokes/random", (response) => {
    var textoChiste = response.value.joke;
    textoChiste = textoChiste.replace(/&quot;/g, '\"')
    $('h1').text(textoChiste)
})