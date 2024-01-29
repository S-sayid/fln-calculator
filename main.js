/* store the element in variables */
let curentValue = document.getElementById('show-resu').value
let numericItem = document.querySelectorAll(".numericValue")
let exeTypeitem = document.querySelectorAll('.execu-type')
let erase = document.querySelector('#clear')
let reduse = document.querySelector('#reduse')
let point = document.querySelector('#dots')
let result = document.querySelector('.btn-equal')
let showPreValue = document.querySelector('#exe-type')
let showExtType = document.querySelector('#grave')
let show = document.getElementById('show-resu')

/* declare some variable for store excusion type, current value */
let previousValue, exeType


/* attach eventlistener to the numeric elements */
numericItem.forEach(item=>{
	item.addEventListener('click', function(e) {
		if(curentValue.length < 10){
			curentValue += this.dataset.worth
			show.value = curentValue
			if(curentValue[0] == '0' && curentValue[1] != '.'){
				curentValue = curentValue.substring(1, curentValue)
				show.value = curentValue
			}
		}
		
	})
})

/* attach eventlistener to the numeric elements */
exeTypeitem.forEach(item=>{
	item.addEventListener('click', function (){
		if(curentValue.length){
			previousValue = curentValue
			curentValue = ''
			show.value = curentValue
			showPreValue.value = previousValue
			exeType = this.dataset.worth
			showExtType.value = this.innerHTML
		}
	})
})

/* attach eventlistener to dots element */
dots.addEventListener('click', function() {
	if(curentValue<= 0){
		curentValue = '0.'
		show.value = curentValue
	}else if(!curentValue.includes('.')){
		curentValue += '.'
		show.value = curentValue
	}
})

/* clean the all data after click the clear btn */
erase.addEventListener('click', function() {
	previousValue = ''
	showPreValue.value = previousValue
	curentValue = ''
	show.value = curentValue
	exeType = ''
	showExtType.value = exeType

})

/* delete the last one number */
reduse.addEventListener('click', function(){
	if (curentValue > 0) {
		curentValue = curentValue.substring(0, curentValue.length - 1)
		show.value = curentValue
	}
})

/* execute the calculation */
result.addEventListener('click', function(){
	if(previousValue.length > 0 && curentValue.length > 0){
		curentValue = eval(previousValue+exeType+curentValue).toString()
		show.value = curentValue
		previousValue = ''
		showPreValue.value = previousValue
		exeType = ''
		showExtType.value = exeType
	}
})

