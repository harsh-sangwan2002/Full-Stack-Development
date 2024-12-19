window.addEventListener('load', function () {

    let N = 8, M = 8;
    const table = document.querySelector('.table');
    let player = "rook"

    // ri -> rowIndex, ci -> columnIndex
    for (let ri = 0; ri < N; ri++) {
        let tr = document.createElement('tr');
        let isWhite = ri % 2 === 0 ? true : false;
        for (let ci = 0; ci < M; ci++) {

            let td = document.createElement('td');
            td.setAttribute('class', `box ${isWhite ? "white" : "black"}`);
            td.setAttribute('data-index', `${ri}-${ci}`);

            tr.appendChild(td);
            isWhite = !isWhite;

        }

        table.appendChild(tr);
    }

    hoverEffect(table, N, M, player);
})

function getDirectionVector(player) {

    if (player == "bishop")
        return [[1, 1], [-1, 1], [1, -1], [-1, -1]];

    else if (player == "rook")
        return [[-1, 0], [0, 1], [1, 0], [0, -1]];

    else if (player == "knight")
        return [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];

    else if (player == "queen")
        return [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
}

function getRadius(player){

    if(player=="bishop" || player=="queen" || player=="rook")
        return 8;

    else if(player=="knight")
        return 1;
}

function hoverEffect(table, N, M, player) {

    let boxArr = document.querySelectorAll('.box');

    table.addEventListener('mouseover', (e) => {

        let dataIndex = e.target.dataset.index;
        if (!dataIndex)
            return;

        removeYellowColorFromAllCells(boxArr);
        let [curr_row, curr_col] = dataIndex.split('-').map(idx => idx);

        let directionVector = getDirectionVector(player);
        storageOfPossibleMoves = possbileMoves(parseInt(curr_row), parseInt(curr_col), N, M, directionVector,player);

        colorMyPossibleMoves(storageOfPossibleMoves, boxArr);

        function removeYellowColorFromAllCells(boxArr) {

            for (let boxCell of boxArr)
                boxCell.classList.remove('yellow');
        }
    })

    // mouseleave -> Leaves the selected element & all of it's children
    // mouseout -> Leaves the selected element & any of it's children
    table.addEventListener('mouseleave', () => {
        removeYellowColorFromAllCells(boxArr);
    })
}

function possbileMoves(curr_row, curr_col, N, M, direction,player) {

    const maxRaduis = getRadius(player);
    storageOfPossibleMoves = {};

    for (let dir of direction) {

        for (let radius = 0; radius <= maxRaduis; radius++) {

            let r = curr_row + (radius * dir[0]);
            let c = curr_col + (radius * dir[1]);

            if (r >= 0 && c >= 0 && r < N && c < M) {
                let dataIndex = `${r}-${c}`;
                storageOfPossibleMoves[dataIndex] = true;
            }

            else
                break;
        }
    }
    return storageOfPossibleMoves;
}

function colorMyPossibleMoves(storageOfPossibleMovies, boxArr) {

    for (let boxCell of boxArr) {
        let curr_dataIndex = boxCell.dataset.index;
        if (storageOfPossibleMovies[curr_dataIndex]) {
            boxCell.classList.add('yellow');
        }
    }
}
