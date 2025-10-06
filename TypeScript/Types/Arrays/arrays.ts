const activeUsers : string[] = ['John', 'Jane', 'Doe'];
activeUsers.push('Mary');

const ageList : number[] = [23, 45, 34, 56, 78];
ageList.push(23);

const bools : Array<boolean> = [true, false, true];
bools.push(false);

type Point = {
    x:number,
    y:number,
}
const coords : Point[] = [{x: 1, y: 2}, {x: 3, y: 4}];
coords.push({x: 5, y: 6});

const board : string[][] = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
]