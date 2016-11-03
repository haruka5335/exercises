
function id(value){
    return value; //そのまま引数を返すぜ！！！！
}

function classifyInt(integer){
    let result;
    result = integer % 2;　//引数を二で割ロウ
    if(result == 0){ //二で割った時に0だったら
        return "偶数"; //まあ偶数だよね
    }
    else{ //それ以外は
        return"奇数"; //奇数だわな
    }
}

function gcd(integerA, integerB){
    let result = 1; //とりま最小公約数
    let i = 2; //割る数は2から始めよう
    let end = Math.min(integerA ,integerB);
    while(i <= end){ // この2行は while(i <= integerA)にも置き換えられる
        let amariA = integerA % i; // ここでintegerAの約数をすべて出す
        let amariB = integerB % i; // ここでintegerBの約数をすべて出す
        if(amariA ==0 && amariB == 0){ //両方の値が0ならば
            //ここに来るのは公約数の時だけ
            result = i; //最後まで調べた時に、一番大きいi(約数)がでてくる
        }
        i = i + 1; //割る数は常に一ずつ増やそう
    }

    return result; //さっきのresult = iを返そうね
}

function sum(lowerBound, upperBound){
    let result = 0;
    let i = Math.ceil(lowerBound) //加減は最小値だよな、小数点きたら困るから切り捨てような
    while(i <= upperBound){ //上限は最大値だよな
        result = result + i; //iを足していくぜ！！
        i = i + 1 //iは一ずつ増やさないと話にならないよな
    }
    return result;
}

//切り上げは　Math.ceil でやろうな！！
//切り捨ては Math.floor やで