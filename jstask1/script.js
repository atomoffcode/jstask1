var x = new Date()
var y = x.getHours()

if(y>=6 && y<12){
    document.body.style.backgroundColor = 'yellow'
    alert('Sabahin xeyr')
}
else if(y>=12 && y<18){
    document.body.style.backgroundColor = 'orange'
    alert('Gunortan xeyr')

}
else if(y>=18 && y<0){
    document.body.style.backgroundColor = 'blue'
    alert('Axsamin xeyr')

}
else if(y>=0 && y<6){
    document.body.style.backgroundColor = 'black'
    alert('Gecen xeyre')

}






var r = 3
console.log(Math.pow(3,2)*Math.PI)