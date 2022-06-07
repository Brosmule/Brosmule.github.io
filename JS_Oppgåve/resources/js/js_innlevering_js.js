// JavaScript Document //

// Get all the images
image_array = ['1.jpg.jpg', '2.jpg.jpg', '3.jpg.jpg', '4.jpg.jpg']
let x = 0
function get_random_image() {
  // Get a random index
  while (true) {
    random_index = Math.floor(Math.random() * image_array.length)
    if (x == 1) {
      if (random_index != last_round) break
    } else {
      break
    }
  }
  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./images/${selected_image}`

  // Assign some necessary variables
  last_round = random_index
  x = 1
}

let slider = document.getElementById('myRange')
let output = document.getElementById('demo')
let img = document.getElementById('Bilde')
output.innerHTML = slider.value

slider.oninput = function () {
  output.innerHTML = this.value
  img.style.opacity = this.value / 100
}
