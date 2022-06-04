
const grande = document.querySelector('.menu__contenedor-grande');
const puntos = document.querySelectorAll('.punto');

console.log(grande, puntos);
       let contador=0;
       console.log("contador fuera: "+contador)

             
                   
            puntos[0].addEventListener('click', ()=>{
                
                puntos.forEach( (cadaPunto, i)=>{
                    puntos[i].classList.remove('seleccionado');
                } )
                puntos[0].classList.add('seleccionado');
               
                
                if(contador<=0){
                    contador=contador+33;
                console.log(contador);

                    if(contador== 33){
                        contador=-66;
                        grande.style.transform=` translateX(${contador}%)`;
                    }
                grande.style.transform=` translateX(${contador}%)`;
                }
                
            });
            puntos[1].addEventListener('click', ()=>{
             puntos.forEach( (cadaPunto, i)=>{
                    puntos[i].classList.remove('seleccionado');
                } )
                puntos[1].classList.add('seleccionado');
                console.log(contador);
                if(contador>= -66){
                    contador= contador-33;
                    console.log(contador);
                    if(contador== -99){
                        contador=0;
                        grande.style.transform=` translateX(${contador}%)`;
                    }
                    grande.style.transform=` translateX(${contador}%)`;
                  
                 
                }
                else{
                    contador=0;
                   console.log(contador);
                   grande.style.transform=` translateX(${contador}%)`;
                }

                
            });


            const resultados = document.querySelector('.buscar');
            const busqueda =document.getElementById('btn_buscar');
            const menu = document.querySelector('.footer__menu');
            const mask = document.querySelector('.prueba');
             const cerrar = document.querySelector('.cerrar__resultados');
            
             
           
            console.log(resultados);
            
                       resultados.style.bottom='-370px'; 
                let sacar=0;
            busqueda.addEventListener('click', ()=>{
                sacar=1;
                  console.log("Dentro de busqueda"+sacar);
             resultados.style.bottom='1px';
                
                  mask.addEventListener('click',()=>{

                        sacar=0;
                        console.log("Dentro de mask"+sacar);
                        if(sacar==0){
                            console.log("dentro del if"+sacar);
                 resultados.style.bottom='-370px'; 
                      
                        }
                        
                    });
                  cerrar.addEventListener('click',()=>{

                        sacar=0;
                        console.log("Dentro de cerrar"+sacar);
                        if(sacar==0){
                            console.log("dentro del if de cerrar"+sacar);
                 resultados.style.bottom='-370px'; 
                      
                        }
                        
                    });


                });
           


                  
                  
            
            
           
