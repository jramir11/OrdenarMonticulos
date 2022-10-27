//salida 1 : Usa un montículo mínimo para crear un array completamente ordenado.
/*
function ordenarHeap (heap)
{
    let p=0;
    let j=0;
    let tmp=[];
    
    for (p=1;p<heap.length;p++) {
        tmp = heap[p];
        j = p - 1;

        while (heap[j] > tmp && j >= 0) {
            heap[j+1] = heap[j];
            j--;
        }
        heap[j+1] = tmp;
    }


    //para mostrar como queda el array heap
    console.log(heap);
}
ordenarHeap([3, 8, 10, 11, 9, 20, 14]); // deberia retornar 3,8,9,10,11,14,20
*/




//salida 1 : crear un array nuevo usando ordenar y hapify como funciones en un array nuevo
function nuevoHeap (heap)
{
    let nuevoHeap =[];
    let nuevoHeapFinal=[];

    nuevoHeap = hapifyHeap(heap);  //convierte en monticulo

    nuevoHeapFinal = insertarNuevoHeap(nuevoHeap);  //ordena y crea NuevoHeapFinal

    console.log(nuevoHeapFinal);
}


//insertar
function insertarNuevoHeap(element){
    let indice_hijo = 0;
    let temp=0;
    let nuevoHeap=[];

    for(let i=0;i<element.length;i++){
        //insertando el nuevo valor en el array heap
        nuevoHeap.push(element[i]);
        //indice del nuevo elemento
        indice_hijo = nuevoHeap.length - 1;
        indice_padre = indice_hijo - 1;//Math.trunc(indice_hijo / 2);

        //compara padre e hijo e invierte valores si padre es mayor
        while (nuevoHeap[indice_padre] > nuevoHeap[indice_hijo]){
            temp = nuevoHeap[indice_hijo];
            nuevoHeap[indice_hijo] = nuevoHeap[indice_padre];
            nuevoHeap[indice_padre] = temp;

            indice_hijo=indice_padre;
            indice_padre = indice_hijo - 1;//Math.trunc(indice_hijo / 2);
        }
    }
    return nuevoHeap;
}


//hapify crea un monticulo con el arreglo inicial
function hapifyHeap(element) {
    let indice_hijo = 0;
    let temp=0;
    let nuevoHeap=[];
    nuevoHeap.push(undefined);

    for(let i=0;i<element.length;i++){

        //insertando el nuevo valor en el array heap
        nuevoHeap.push(element[i]);
        //indice del nuevo elemento
        indice_hijo = nuevoHeap.length - 1;
        indice_padre = Math.trunc(indice_hijo / 2);

        //compara padre e hijo e invierte valores si padre es mayor
        while (nuevoHeap[indice_padre] > nuevoHeap[indice_hijo]){
            temp = nuevoHeap[indice_hijo];
            nuevoHeap[indice_hijo] = nuevoHeap[indice_padre];
            nuevoHeap[indice_padre] = temp;

            indice_hijo=indice_padre;
            indice_padre = Math.trunc(indice_hijo / 2);
        }
    }
    return nuevoHeap;
}

nuevoHeap([3, 8, 10, 11, 9, 20, 14]); // deberia retornar 3,8,9,10,11,14,20 
