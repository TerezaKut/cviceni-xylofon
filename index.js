console.log('Funguju')

const kameny = document.querySelectorAll('.kamen');

console.log(kameny);

const zahrajTon = (event) => {
    const ton = event.target.textContent;
	const h1 = document.querySelector('h1');
	h1.textContent = ton;
    console.log(ton);
    const zvuk = new Audio('tony/'+ton+'.mp3');
    zvuk.play();
}

for (let i=0; i<kameny.length; i++){
    kameny[i].addEventListener('click', zahrajTon);
}

