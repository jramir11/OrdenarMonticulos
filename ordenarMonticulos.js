//salida  : crear un array nuevo usando ordenar y hapify como funciones en un array nuevo
function nuevoHeap (heap)
{
    let nuevoHeap =[];
    let nuevoHeapFinal=[];

    nuevoHeap = heapify(heap);  //convierte en monticulo
console.log(nuevoHeap);
    nuevoHeapFinal = insertarNuevoHeap(nuevoHeap);  //ordena y crea NuevoHeapFinal

    console.log(nuevoHeapFinal);
}



//hapify crea un monticulo con el arreglo inicial
function heapify(element){
    //crear monticulo inicial
    let temp=element[0];
    element[0]=undefined;
    element.push(temp);

    let nuevoHeap=[];
    for (let i = 0; i < element.length; i++) {
        nuevoHeap.push(element[i]);
    }

   
    //heapify de nuevo monticulo
    let j = nuevoHeap.length - 1;
    let idx_padre = Math.trunc(j / 2);
    let idx_hijoMenor = idx_padre * 2;
    let idx_hijoMayor = (idx_padre * 2) + 1;

    while (idx_padre > 0) {
        temp = nuevoHeap[idx_padre];

        if (nuevoHeap[idx_padre] > nuevoHeap[idx_hijoMayor]) {
                nuevoHeap[idx_padre] = nuevoHeap[idx_hijoMayor];
                nuevoHeap[idx_hijoMayor] = temp;
        }
        if (nuevoHeap[idx_padre] > nuevoHeap[idx_hijoMenor]) {
                nuevoHeap[idx_padre] = nuevoHeap[idx_hijoMenor];
                nuevoHeap[idx_hijoMenor] = temp;
        } 
        idx_padre = idx_padre - 1;
        idx_hijoMenor = idx_padre * 2;
        idx_hijoMayor = (idx_padre * 2) + 1;
    }

    return nuevoHeap;
}



//insertar y ordenar monticulo
function insertarNuevoHeap(element){
    let indice_hijo = 0;
    let temp=0;
    let nuevoHeap=[];
    for(let i=0;i<element.length;i++){
        //insertando el nuevo valor en el array heap
        nuevoHeap.push(element[i]);
        //indice del nuevo elemento
        indice_hijo = nuevoHeap.length - 1;
        indice_padre = indice_hijo - 1;
        //compara padre e hijo e invierte valores si padre es mayor
        while (nuevoHeap[indice_padre] > nuevoHeap[indice_hijo]){
            temp = nuevoHeap[indice_hijo];
            nuevoHeap[indice_hijo] = nuevoHeap[indice_padre];
            nuevoHeap[indice_padre] = temp;
            indice_hijo=indice_padre;
            indice_padre = indice_hijo - 1;
        }
    }
    return nuevoHeap;
}


nuevoHeap([3, 8, 10, 11, 9, 20, 14]); // deberia retornar 3,8,9,10,11,14,20 
