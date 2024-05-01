// Main Variables
let theInput = document.querySelector('.get-repos input')
let getButton = document.querySelector('.get-button')
let reposData = document.querySelector('.show-data')

getButton.onclick = function (){
  getRepos()

}

// Get Repos Fuction
function getRepos(){
  // if value is empty
  if(theInput.value == ''){
    reposData.innerHTML = '<span>Please Write Gitub UserName</span>'
  }else{
    
    
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then((response)=>{
      return response.json();
    })
    .then((data)=> {
      // Empty the container
      reposData.innerHTML = '';

      // loop on repositories
      data.forEach(repo => {
        // create the main div element
        let mainDiv = document.createElement('div');

        mainDiv.className += 'title';
        // create repo name text
        let repoNme = document.createTextNode(repo.name);

        // add text to main div
        mainDiv.appendChild(repoNme)


        
        // Create repo url anchor
        let theUrl = document.createElement('a');

        // creata Repo Url Text 
        let theUrlText = document.createElement('visit');

        // append the repo url text to anchor tag
        theUrl.appendChild(theUrlText)

        // add the hypertext reference 'href'
        theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

        // Set attribute blank
        theUrl.setAttribute('target','_blank');

        // Append Url anchor to main Div
        mainDiv.appendChild(theUrl)

        // Create Stars Count span
        let starsSpan =document.createElement('span');
        
        // Create the Stars Count Text 
        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

        // Add Stars Count Text to stars span
        starsSpan.appendChild(starsText);
        // append stars count span to main div
        mainDiv.appendChild(starsSpan);

    

        // append the Main  Div To Container
        reposData.appendChild(mainDiv)

      });

    })
  }
}










