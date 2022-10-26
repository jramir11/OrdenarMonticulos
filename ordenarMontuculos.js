//salida 1 : Usa un montículo mínimo para crear un array completamente ordenado.
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
    for (i=0;i<heap.length;i++){
        console.log("indice=" + i + " valor=" + heap[i]);
    }
}
ordenarHeap([3, 8, 10, 11, 9, 20, 14]); // deberia retornar 3,8,9,10,11,14,20

 