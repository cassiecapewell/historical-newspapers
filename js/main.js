document.querySelector('#random').addEventListener('click', getRandom)
document.querySelector('#list').addEventListener('click', getList)

function getRandom(){
  let city = document.querySelector('input').value
  const url = "https://chroniclingamerica.loc.gov/search/titles/results/?format=json&terms="+city
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let random = data.items[Math.floor(Math.random() * data.items.length)]
        console.log(data)
      //   document.querySelector('#title').innerText = "Newspaper Title: "+random.title
      //   document.querySelector('#publisher').innerText = "Publisher: "+random.publisher
      //   document.querySelector('#city').innerText = "City: "+random.city
      //   document.querySelector('#state').innerText = "State: "+random.country
      //   document.querySelector('#start').innerText = "Start Date: "+random.start_year
      //   if(random.end_year === 9999){
      //     document.querySelector('#end').innerText = "End Date: still in publication"
      //   }else{
      //     document.querySelector('#end').innerText = "End Date: "+random.end_year
      //   }
      //   document.querySelector('#frequency').innerText = "Frequency: "+random.frequency
      //   document.querySelector('#lang').innerText = "Language: "+random.language
      //   if(random.subject.length === 0){
      //     document.querySelector('#subject').innerText = ""
      //   }else{
      //     document.querySelector('#subject').innerText = "Subjects: "+random.subject
      //   }
      //   document.querySelector('span').innerText = "Data from the Library of Congress, Chronicling America: Historic American Newspapers site"
      // })
      // .catch(err => {
      //   console.log(`error ${err}`)
      });
}

function getList(){
  let city = document.querySelector('input').value
  let url = "https://chroniclingamerica.loc.gov/search/titles/results/?format=json&terms="+city
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        data.items.forEach(paper => console.log(paper.title))
      })
      .catch(err => {
        console.log(`error ${err}`)
      });
}
