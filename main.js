// Busca Binaria

//Melhor em achar um dado no array ORDENADO porque tem um tempo de O(log n)

let sortarray = (arr, target) => {
    let inicio = 0;
    let fim = arr.length - 1;

    let arraysort = arr.sort((a, b) => a - b);
    console.log(arraysort)

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (arraysort[meio] === target) {
            return meio;
        } else if (arraysort[meio] < target) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    return -1;
}

let arr = [8, 3, 5, 9, 11, 2, 2, 3, 6, 5];
let target = 11;

console.log(sortarray(arr, target));

// Hash Table

//Melhor em Contagem de frequência, comparação

function doisNumerosSoma(nums, alvo) {
    let mapa = {};

    for (let i = 0; i < nums.length; i++) {
        let complemento = alvo - nums[i];

        mapa[nums[i]] = i

        if (mapa[complemento] !== undefined) {
            return [mapa[complemento], i];
        }
    }
    return [];
}

let nums = [2, 7, 11, 15];
let alvo = 9;

console.log(doisNumerosSoma(nums, alvo));



