function generateBirthdayWish() {
    var name = document.getElementById('nameInput').value;
    var birthdayWishElement = document.getElementById('birthdayWish');
    
    if (name) {
      var birthdayWish = `Happy birthday, ${name}! May all your wishes come true. Have a fantastic day! 🎉🎂`;
      birthdayWishElement.textContent = birthdayWish;
    } else {
      birthdayWishElement.textContent = "Please enter a name.";
    }
  }
  