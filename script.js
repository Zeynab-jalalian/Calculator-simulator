alert('این یک شبیه ساز ماشین حساب با چهار عملیات اصلی ریاضی است')
alert('اعداد را با فرمت انگلیسی و به درستی وارد نمایید!')
let n1=prompt('عدد اول را وارد نمایید.')
let n2=prompt('عدد دوم را وارد نمایید.')
let k=prompt('یکی از عملیات های ریاضی مقابل را وارد کنید:(+ - ÷ ×)')
n1=Number(n1)
n2=Number(n2)
switch (k){
    case "+":
    alert(n1+n2);
    break;

    case "-":
    alert(n1-n2)
    break;

    case "×":
    alert(n1*n2)
    break;

    case "÷":
   alert(n1/n2)
    break;
}