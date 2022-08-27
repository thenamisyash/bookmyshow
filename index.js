const parent = document.querySelector('.movieshub');
axios.get(`
https://api.themoviedb.org/3/movie/popular?api_key=38e9a826dfedf7b264350d4591a9a25a&language=en-US&page=1`)
.then(function (response) {
    // handle success
    console.log(response.data.results);
    response.data.results.forEach(element => {
        console.log(element.original_title);
      
        let img = document.createElement('img');
       
      let card = document.createElement('div');
  
      
      img.src=`https://image.tmdb.org/t/p/original/${element.poster_path}`;
      
       img.width =150;
       card.classList.add('cards');
      card.appendChild(img);
   
      parent.appendChild(card); 
  
  
   });
  
  
  
  
  
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  
document.querySelector('.movie1').addEventListener('click',()=>{
  document.querySelector('.allitems').style.display= 'none';
  // document.querySelector('.create').innerHTML= `
  // <div class = "newd" style = " background-image : url('../imgs/thankyou.jpg')">
  // <div class = "imgcode">
  //  <img src = "imgs/allhahuakbar.avif"></div>
  //  <div class = "img2code">
  //   <h1> Thank You</h1><br>
  // <h2>78% <span>13.9k ratings</span></h2><br>
  // <button class= "btn5" onclick= 'btnpress()'>Book Tickets</button></div>    </div>
  // `
  location.href = "./moviePage.html";

})



function btnpress()
{
  window.open('ticket.html');
}

