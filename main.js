document.getElementById("mas").addEventListener('click',function () {
    let value = document.getElementById('monto').innerHTML;
    value = parseFloat(value)
    value += 10

    document.getElementById("monto").innerHTML = value
});

document.getElementById("menos").addEventListener('click',function () {
    let value = document.getElementById('monto').innerHTML;
    value = parseFloat(value)
    value -= 10

    document.getElementById("monto").innerHTML = value
});

document.getElementById("mas2").addEventListener('click',function () {
    let value = document.getElementById('monto').innerHTML;
    value = parseFloat(value)
    value += 5

    document.getElementById("monto").innerHTML = value
});

document.getElementById("menos2").addEventListener('click',function () {
    let value = document.getElementById('monto').innerHTML;
    value = parseFloat(value)
    value -= 5

    document.getElementById("monto").innerHTML = value
});