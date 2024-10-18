

axios.get('https:jsonplaceholder.typicode.com/photos?_limit=6')
    .then(response => {
        const posts = response.data
        console.log(posts);
        console.log(response);



        const postsEl = document.getElementById('posts')

        posts.forEach(post => {
            console.log(post);
            const { url, title } = post
            let markup = `
               <div class="card col-lg-4 col-sm-12 col-md-6 mt-5">
                       <img src="${url}" class="card-img-top border" alt="">
                       <img src="./assets/img/pin.svg" class="pin" alt="">
                       <div class="card-body">
                           <p class="card-text">
                               ${title}
                           </p>
                       </div>
                   </div>
               `

            postsEl.innerHTML += markup
        })

    }).catch(error => console.error(error))
