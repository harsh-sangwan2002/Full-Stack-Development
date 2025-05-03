function getRadius(piece) {
    if (piece === "knight") return 1;
    return 8;
}

function getDirectionVector(piece) {
    const bishopMoves = [[-1, -1], [-1, 1], [1, 1], [1, -1]];
    const queenMoves = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const rookMoves = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const knightMoves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];

    switch (piece) {
        case "bishop":
            return bishopMoves;
        case "queen":
            return queenMoves;
        case "rook":
            return rookMoves;
        case "knight":
            return knightMoves;
        default:
            throw new Error("Invalid piece type: " + piece);
    }
}

window.addEventListener("load", () => {
    const chessPiece = document.querySelector("#piece");
    const table = document.querySelector("#table");
    let boxArr = [];
    let piece = chessPiece.value;

    // Create the chessboard
    for (let ri = 0; ri < 8; ri++) {
        const tr = document.createElement("tr");
        for (let ci = 0; ci < 8; ci++) {
            const td = document.createElement("td");
            td.setAttribute("class", "box");
            td.setAttribute("data-index", `${ri}-${ci}`);
            tr.appendChild(td);

            if (ri % 2 === 0 && ci % 2 !== 0) td.classList.add("black");
            if (ri % 2 !== 0 && ci % 2 === 0) td.classList.add("black");
        }
        const tableBody = document.createElement("tbody");
        tableBody.appendChild(tr);
        table.appendChild(tableBody);
    }

    boxArr = document.querySelectorAll(".box");

    chessPiece.addEventListener("change", (e) => {
        piece = e.target.value;
    });

    table.addEventListener("mouseover", (e) => {
        const dataIndex = e.target.getAttribute("data-index");

        if (!dataIndex || !piece) return;

        removeYellowColor(boxArr);

        const [curr_row, curr_col] = dataIndex.split("-").map(Number);

        const dirVector = getDirectionVector(piece);
        const storageOfPossibleMoves = possbileMoves(curr_row, curr_col, dirVector, 8, 8, piece);

        colorPossibleMoves(storageOfPossibleMoves, boxArr);
    });

    table.addEventListener("mouselevae", () => {
        removeYellowColor(boxArr);
    });
});

function possbileMoves(curr_row, curr_col, direction, N, M, piece) {
    const maxRadius = getRadius(piece);
    const storageOfPossibleMoves = {};

    for (const dir of direction) {
        for (let radius = 0; radius <= maxRadius; radius++) {
            const r = curr_row + radius * dir[0];
            const c = curr_col + radius * dir[1];

            if (r >= 0 && c >= 0 && r < N && c < M) {
                const dataIndex = `${r}-${c}`;
                storageOfPossibleMoves[dataIndex] = true;
            } else {
                break;
            }
        }
    }
    return storageOfPossibleMoves;
}

function colorPossibleMoves(storageOfPossibleMoves, boxArr) {
    boxArr.forEach((box) => {
        const curr_index = box.getAttribute("data-index");
        if (storageOfPossibleMoves[curr_index]) box.classList.add("yellow");
    });
}

function removeYellowColor(boxArr) {
    for (const boxCell of boxArr) {
        boxCell.classList.remove("yellow");
    }
}
