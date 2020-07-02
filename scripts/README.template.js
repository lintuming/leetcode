const template = `
# bad solutions

{{BAD_SOLUTION}}

# re-consider

{{RE_CONSIDER}}
`;

const badSolution = ['BAD_SOLUTION',41, 44, 42, 31, 48, [65, "使用了有限状态机"], 76, 126];

const reConsider = ['RE_CONSIDER',89, 91, 95, 96, 109, 120, 122, 111];


const configs = [badSolution,reConsider]

module.exports = { template, configs };
