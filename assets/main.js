axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(response => {
    const posts = response.data
    console.log(posts);
    console.log(response);

    posts.forEach(post => {
        console.log(post);
        
    })
    
  }).catch(error => console.error(error))

   
