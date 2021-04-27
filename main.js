const app = new Vue({
    el: '#app',
    data:{
        books:[
            {
                id: 1, 
                name:"<<算法导论>>",
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2, 
                name:"<<UNIX编程艺术>>",
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3, 
                name:"<<c++沉思录>>",
                date: '2006-9',
                price: 50.00,
                count: 1
            },
            {
                id: 4, 
                name:"<<编程珠玑>>",
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 5, 
                name:"<<代码大全>>",
                date: '2006-3',
                price: 128.00,
                count: 1
            }

        ],
    },
    methods:{//函数
        // getFinalPrice(price){
        //     return '¥' + price.toFixed(2);
        // },
        decrement(index){
            this.books[index].count--;
        },
        increment(index){
            this.books[index].count++;
        },
        removeHandle(index){
            this.books.splice(index, 1);
        }
    },
    filters: {//过滤器
        showPrice(price){
            return '¥' + price.toFixed(2);
        }
    },
    computed:{//计算属性
        totalPrice(){
            let totalPrice = 0;
            //1、不同遍历式
            // for(let i = 0; i < this.books.length; i++){
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }

            //2、快速迭代式
            // for(let i in this.books){
            //     const book = this.books[i];
            //     totalPrice += book.price * book.count;
            // }

            for(let item of this.books){
                totalPrice += item.price * item.count;
            }
            return totalPrice
        }
    }

})


const nums = [10, 20, 50, 110, 235, 222, 40];

let newNums = nums.filter(function(n){
    return n < 100
})
console.log(newNums);

let new2Nums = newNums.map(function(n){
    return n * 2;
})
console.log(new2Nums);

let total = new2Nums.reduce(function(preVaule, n){
    return preVaule + n
})
console.log(total)

