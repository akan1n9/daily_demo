function shellsort(arr) {
    let len = arr.length;
    let gap = 1;
    let temp;
    while (gap < len / 2) {
        gap = gap * 2 + 1;
    }
    for (gap; gap > 0; gap = gap / 2) {
        for (let i = gap; i < len; i++) {
            temp = arr[i]

        }
    }
}