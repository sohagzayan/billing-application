# Problem solving

const rotateLeft = (arr, rotateBy) => {
for (let i = 0; i < rotateBy; i++) {
arr.push(arr.shift());
}
return arr;
};
