let a = $('#amount')[0].innerText - 0


$('#add').on('click', () => {
    a += 1
    $('#amount')[0].innerText = a
    console.log(a)
})

$('#minus').on('click', () => {
    a -= 1
    $('#amount')[0].innerText = a
    console.log(a)
})