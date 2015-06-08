var input = [28];

(function (arr, timeout) {
    var isPalindrome = function (num) {
        return num === reverseNum(num);
    };

    var reverseNum = function (num) {
        return parseInt(num.toString().split('').reverse().join(''));
    };

    for (var i in arr) {
        var steps = 0;
        var input = arr[i];
        var result = arr[i];
        while (!isPalindrome(result) && steps < timeout) {
            result += reverseNum(result);
            steps++;
        }

        if (isPalindrome(result)) {
            console.log(input + ' gets palindromic after ' + steps + ' steps: ' + result);
        } else {
            console.log(input + ' didn\'t get palindromic within ' + timeout + ' steps');
        }
    }
})(input, 10000);