const template = `
# bad solutions

{{BAD_SOLUTION}}

# re-consider

{{RE_CONSIDER}}
`;

const badSolution = [
  "BAD_SOLUTION",
  41,
  44,
  42,
  31,
  48,
  [65, " - 使用了有限状态机"],
  76,
  126,
  [128, " - O(2n)时间复杂度也算O(n)"],
];

function buildLine(lines){
  return lines.join('\n')
}

const reConsider = [
  "RE_CONSIDER",
  89,
  91,
  95,
  96,
  109,
  120,
  122,
  111,
  135,
  [136, " - 使用位操作有限制,js的位操作只能操作32位有符号整数"],
  [137, " - 位运算（反码）"],
  [
    142,
    buildLine([
      '\n',
      '  - 快指针1次走2步，慢指针1次走1步。所以快指针总是走了慢指针两倍的路。',
      '  - 回顾一下阶段1的过程，设头节点到入环点的路途为 n, 那么慢指针走了入环路途的一半（n/2）时，快指针就到达入环点了(走完n了)。',
      '  - 慢指针再继续走完剩下的一般入环路途（剩下的n/2），到达入环点时，快指针已经在环内又走了一个 n 那么远的路了。',
      "  - 此时，慢指针正处于入环点，快指针距离入环点的距离为n。环内路，可以用此时快指针的位置分割为两段，前面的 n 部分，和后面的 b 部分。",
      "  - 此时开始继续快慢指针跑圈，因为已经在环内了，他们其实就是在一条nbnbnbnbnbnbnb（无尽nb路）上跑步。",
      "  - 慢指针从入环处开始跑b步，距离入环处就剩下了n。此时，快指针则是从距离入环处n步远的位置开始跑了2b步，距离入环处也是剩下了n。他们相遇了，并且距离入环处的距离就是n，n就是头节点到入环点的距离阿!!! 后面的不用说了吧"
      
    ])
  ],
];

const configs = [badSolution, reConsider];

module.exports = { template, configs };
