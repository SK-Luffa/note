function localMoneyFomat(obj) {
  const result = Object.entries(obj).map(([key, value]) => [
    key,
    typeof value === 'number' ? `￥${value}` : value,
  ]);
  return Object.fromEntries(result);
}

var obj = {
  name: 'xxx',
  balance: 199.8, //余额
  taken: 3000, //消费
};
var newObj = localMoneyFomat(obj); // {name:"xxx", balance:"￥199.8", taken: "￥3000"}
console.log(newObj);
