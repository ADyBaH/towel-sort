// You should implement your task here.

module.exports = function towelSort(matrix) {
    if(!matrix) return [];
    const answer = [];
    matrix.forEach((element, i) => {
        if (i === 0 || i % 2 === 0) {
            answer.push(...element);
        } else {
            answer.push(...element.reverse());
        }
    });
    return answer;
};
