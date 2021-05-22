var firebaseConfig = {
    apiKey: "AIzaSyCXx1GoIA-jNwql9mMYbP-twVffKg-p_fU",
    authDomain: "jamilaghazada-b5dba.firebaseapp.com",
    databaseURL: "https://jamilaghazada-b5dba-default-rtdb.firebaseio.com",
    projectId: "jamilaghazada-b5dba",
    storageBucket: "jamilaghazada-b5dba.appspot.com",
    messagingSenderId: "725775842770",
    appId: "1:725775842770:web:3133c98a5d3a6f26309c0b"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database()
var h =0
db.ref('user1').on('value',function(resp){
    if(resp.val() != null){
        document.querySelector('.p1-name').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName) 
    }
})
db.ref('user2').on('value',function(resp){
    if(resp.val() != null){
        document.querySelector('.p2-name').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName) 
    }
})
function startGame(){
    if($('.text-input').val().trim()!=""){
      if((document.querySelector('.p1-name').textContent)=="Player-1"){
        userName = $('.text-input').val().trim()
        db.ref('user1').push(
              {
                userName
        })
        db.ref('user1').on('value',function(resp){
            document.querySelector('.p1-name').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName) 
        })
      }
      else {
        userName = $('.text-input').val().trim()
        db.ref('user2').push(
              {
                userName
        })
        db.ref('user2').on('value',function(resp){
            document.querySelector('.p2-name').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName) 
        })
      }
    }
    else{
        alert('Please enter your Nickname')
        return
    }
}
$('.input-btn').on('click',startGame)
