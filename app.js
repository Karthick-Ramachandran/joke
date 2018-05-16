document.getElementById('chuck').addEventListener('click', generate);

function generate(e){
    const data = document.getElementById('num').value;
 
    const xhr = new XMLHttpRequest();
xhr.open('GET', `http://api.icndb.com/jokes/random/${data}`, true)
if(!data){
    alert('Please input number');
}
xhr.onload = function(){
    if(this.status === 200){
 const val = JSON.parse(this.responseText);
  let output = '';
  if(val.type === 'success'){
  val.value.forEach(function(joke){
    output += `<li> ${joke.joke}</li>`
  });
  }
  else{
      alert('something wrong');
  }
  document.getElementById('jokes').innerHTML = output;

    }
}
    xhr.send();

}