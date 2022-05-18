	
	const circulos = document.querySelectorAll(".Circle");
	console.log(circulos)
	const contenedor = document.querySelector(".contenedor__fields");
	const field = document.querySelector('.fieldset1');
	const field2 = document.querySelector('.fieldset2');
	const field3= document.querySelector('.fieldset3');
	const field4= document.querySelector('.fieldset4');
	field2.remove();
	field3.remove();
	field4.remove();
	console.log(field)
	circulos.forEach( (circulo, i)=>{
			console.log(i)
			circulos[i].addEventListener('click',()=>{
				console.log(circulos[i])
					if(circulos[i].classList.contains('top__menu-OneCircle')){
						console.log("llega al 1")
						field2.remove();
						field3.remove();
						field4.remove();
						contenedor.appendChild(field)
					
					}
					else if (circulos[i].classList.contains('top__menu-TwoCircle')){
						console.log("llega al 2")
						field.remove();
						field3.remove();
						field4.remove();
						contenedor.appendChild(field2);
						
					}
					else if (circulos[i].classList.contains('top__menu-ThreeCircle')){
						console.log("llega al 3")
						field.remove();
						field2.remove();
						field4.remove();
						contenedor.appendChild(field3);	
					}
					else {
						console.log("llega al 4")
						field.remove();
						field2.remove();
						field3.remove();
						contenedor.appendChild(field4);
					}
			});
	} );