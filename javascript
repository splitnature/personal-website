function loadRepo(url, callback) {
  const gitHubRequest = new XMLHttpRequest();
  gitHubRequest.onreadystatechange = function(){
    if(this.readystate == 4 && this.status == 200 ){
          loadRepoCallback(JSON.parse(this.responsetext));
          callback(this);


    }
  };
  gitHubRequest.open('get','url',true);
  gitHubRequest.send();
}


  function loadRepoCallback (gitHubRequest){
             let java = `<h1>${gitHubRequest.name}</h1><a>${gitHubRequest.html_url}</a>`;
           document.getElementById('java').innerHTML = java;
            let css = `<h1>${gitHubRequest.name}</h1><a>${gitHubRequest.html_url}</a>`;
           document.getElementById('css').innerHTML = css;
              let html = `<h1>${gitHubRequest.name}</h1><a>${gitHubRequest.html_url}</a>`;
           document.getElementById('html').innerHTML = html;
  }
