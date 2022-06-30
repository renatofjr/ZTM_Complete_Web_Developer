const urls = [
    'https://swapi.py4e.com/api/people/1'
]

const getData = async function() {
    const arrayOfPromises = urls.map(url => fetch(urls))
    for await (let request of arrayOfPromises) {
        const data = await request.json()
        console.log(data)
    }
}

getData()