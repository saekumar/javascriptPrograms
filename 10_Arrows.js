const user = {
  userName: 'Saikumar',
  price: 10000,
  welocomeMessage: function (userName) {
    console.log(`${this.userName},${userName}, Welcome to website`)
    // Here this.userName indicates userName within the object("Saikumar") whereas parameter userName is which comes from outside ("Kumar") like while function calling
    // And if user.userName was changed outside then automatically it reflects here too... and this.username will be the changed one.
  },
}

// user.welocomeMessage()
// user.userName = 'Saee'
// user.welocomeMessage()
user.welocomeMessage('Kumar')
