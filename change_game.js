function set_properties(header_img, game_logo, description, game_name){
  document.getElementById("banner_img").src = header_img;
  document.getElementById("game_cover").src = game_logo;
  document.getElementById("description").innerHTML = description
  document.getElementById("game_name").innerHTML = game_name
}

var banner = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxk6ChNB9L6hUm_17lKtcSEoWtXgeT0HMV_G3yJzs5N38zQnqrDE5mGPNUzYeI6d-3W-U&usqp=CAU"
var cover = "https://upload.wikimedia.org/wikipedia/en/4/4a/Tetris_Boxshot.jpg"
var description = "its tetris what the fuck do you want from me"
var name = "Tetris!"

window.onload(set_properties(banner, cover, description, name));
