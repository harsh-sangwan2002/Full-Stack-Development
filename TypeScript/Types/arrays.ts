const activeUsers: string[] = ['John', 'Doe', 'Jane'];
const ageList: number[] = [12, 23, 34, 45];
const bools: Array<boolean> = [true, false, true, false];
const mixed: (string | number)[] = ['John', 23, 'Doe', 34];

type Point = {
    x:number,
    y:number
}

const coords: Point[] = [{x:23,y:8},{x:12,y:34},{x:45,y:23}];

const board: string[][] = [
    ["X","O","X"],
    ["O","X","O"],
    ["X","O","X"]
];