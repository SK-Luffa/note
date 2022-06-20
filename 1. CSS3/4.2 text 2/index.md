### 1. white-space：制定元素是否保留文本间的空格
       white-space: nowrap{将多个空格合并成一个} / pre 原封不动的保留你输入的状态 多少个空格 换行都会被完全保留

### 2. word-break  文字换行
         word-break: keep-all {不换行} /  break-all {换行 当等于父容器的宽度时}   /
         break-word {换行 尽可能的按单词换行（英文模式下）  }
### 3. word-warp , overflow-warp    文字换行
           normal{不换行}  / reak-word {换行 尽可能的按单词换行  }  /

### 4. text-align-last: 定义文本的最后一行
       
# 多列
###    5.  columns:
        columns:column-width {设置每一列的宽度} / column-count{设置每一列的列数}
        例如：
        columns:500px,5,
######   column-width 不准，最好不要设置
#####     column-count：最好不要使用他来实现瀑布流  
原因：column-count在实现多列布局的时候 并不是按照我们想象的顺序来的
####  column-count会让最高的那一列成为大多数 例如
        4列 9张图片， 我们想象的应该是第一列三张，剩下的三列是两站，但是实际上却是 4列变为三列 每一列三个（原则：会让最高的一列成为大多数）
