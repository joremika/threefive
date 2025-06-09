console.log("working")

const game_matrix = [
    {id: 11, contains: {}},{id: 12, contains: {}}, {id: 13, contains: {}}, {id: 14, contains: {}}, {id: 15, contains: {}}, {id: 16, contains: {}}, {id: 17, contains: {}},
    {id: 21, contains: {}},{id: 22, contains: {}}, {id: 23, contains: {}}, {id: 24, contains: {}}, {id: 25, contains: {}}, {id: 26, contains: {}}, {id: 27, contains: {}},
    {id: 31, contains: {}},{id: 32, contains: {}}, {id: 33, contains: {}}, {id: 34, contains: {}}, {id: 35, contains: {}}, {id: 36, contains: {}}, {id: 37, contains: {}},
    {id: 41, contains: {}},{id: 42, contains: {}}, {id: 43, contains: {}}, {id: 44, contains: {}}, {id: 45, contains: {}}, {id: 46, contains: {}}, {id: 47, contains: {}},
    {id: 51, contains: {}},{id: 52, contains: {}}, {id: 53, contains: {}}, {id: 54, contains: {}}, {id: 55, contains: {}}, {id: 56, contains: {}}, {id: 57, contains: {}},
    {id: 61, contains: {}},{id: 62, contains: {}}, {id: 63, contains: {}}, {id: 64, contains: {}}, {id: 65, contains: {}}, {id: 66, contains: {}}, {id: 67, contains: {}},
    {id: 71, contains: {}},{id: 72, contains: {}}, {id: 73, contains: {}}, {id: 74, contains: {}}, {id: 75, contains: {}}, {id: 76, contains: {}}, {id: 77, contains: {}}
]

console.log(game_matrix);

const comparison = game_matrix[1].id - game_matrix[2].id;

const absolute_value = Math.abs(comparison);

console.log(absolute_value);