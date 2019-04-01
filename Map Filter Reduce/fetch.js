const processData = (json) => {
    const usersElm = document.querySelector('.users');
    json.map(person => {
        const li = document.createElement('li');
        li.textContent = person.last_name;
        return li;
    }).forEach(item => usersElm.appendChild(item));
}


    fetch('http://bootcamp.podlomar.org/api/people')
    .then(response => response.json())
    .then(processData);

    ///
    