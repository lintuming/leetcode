
# bad solutions

- [31.下一个排列](./solutions/31.下一个排列.js)
- [41.缺失的第一个正数](./solutions/41.缺失的第一个正数.js)
- [42.接雨水](./solutions/42.接雨水.js)
- [44.通配符匹配](./solutions/44.通配符匹配.js)
- [48.旋转图像](./solutions/48.旋转图像.js)
- [65.有效数字](./solutions/65.有效数字.js) - 使用了有限状态机
- [76.最小覆盖子串](./solutions/76.最小覆盖子串.js)
- [126.单词接龙-ii](./solutions/126.单词接龙-ii.js)
- [128.最长连续序列](./solutions/128.最长连续序列.js) - O(2n)时间复杂度也算O(n)
- [162.寻找峰值](./solutions/162.寻找峰值.js)- 二分法
- [164.最大间距](./solutions/164.最大间距.js)
- [166.分数到小数](./solutions/166.分数到小数.js)
- [187.重复的dna序列](./solutions/187.重复的dna序列.js)
- [209.长度最小的子数组](./solutions/209.长度最小的子数组.js)

# re-consider

- [89.格雷编码](./solutions/89.格雷编码.js) - https://excalidraw.com/#json=5089071357493248,Lay1QrhS3ylEVSkKV9M5TQ
- [91.解码方法](./solutions/91.解码方法.js)
- [95.不同的二叉搜索树-ii](./solutions/95.不同的二叉搜索树-ii.js)
- [96.不同的二叉搜索树](./solutions/96.不同的二叉搜索树.js)
- [109.有序链表转换二叉搜索树](./solutions/109.有序链表转换二叉搜索树.js)
- [111.二叉树的最小深度](./solutions/111.二叉树的最小深度.js)
- [120.三角形最小路径和](./solutions/120.三角形最小路径和.js)
- [122.买卖股票的最佳时机-ii](./solutions/122.买卖股票的最佳时机-ii.js)
- [135.分发糖果](./solutions/135.分发糖果.js)
- [136.只出现一次的数字](./solutions/136.只出现一次的数字.js) - 使用位操作有限制,js的位操作只能操作32位有符号整数
- [137.只出现一次的数字-ii](./solutions/137.只出现一次的数字-ii.js) - 位运算（反码）
- [142.环形链表-ii](./solutions/142.环形链表-ii.js)

  - 快指针1次走2步，慢指针1次走1步。所以快指针总是走了慢指针两倍的路。
  - 回顾一下阶段1的过程，设头节点到入环点的路途为 n, 那么慢指针走了入环路途的一半（n/2）时，快指针就到达入环点了(走完n了)。
  - 慢指针再继续走完剩下的一般入环路途（剩下的n/2），到达入环点时，快指针已经在环内又走了一个 n 那么远的路了。
  - 此时，慢指针正处于入环点，快指针距离入环点的距离为n。环内路，可以用此时快指针的位置分割为两段，前面的 n 部分，和后面的 b 部分。
  - 此时开始继续快慢指针跑圈，因为已经在环内了，他们其实就是在一条nbnbnbnbnbnbnb（无尽nb路）上跑步。
  - 慢指针从入环处开始跑b步，距离入环处就剩下了n。此时，快指针则是从距离入环处n步远的位置开始跑了2b步，距离入环处也是剩下了n。他们相遇了，并且距离入环处的距离就是n，n就是头节点到入环点的距离阿!!! 后面的不用说了吧
- [169.多数元素](./solutions/169.多数元素.js)- Boyer-Moore 投票算法
- [174.地下城游戏](./solutions/174.地下城游戏.js)
- [529.扫雷游戏](./solutions/529.扫雷游戏.js)
