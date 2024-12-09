{ //save text

    let my_words = []
    let arrName = ['text', 'text2', 'text3']
    let arrCo = 0
    let co = 0

    $(".my_arh0").click(function () {

        $(".celss").empty()
        arrCo = 0
        StartArr()

    })

    $(".my_arh1").click(function () {

        $(".celss").empty()
        arrCo = 1
        StartArr()

    })

    $(".my_arh2").click(function () {

        $(".celss").empty()
        arrCo = 2
        StartArr()

    })


    $(".my_but").click(function () { //сохраняем текст

        if ($(".my_inp").val() != '') {

            my_words.push($(".my_inp").val())
            CreateCell(my_words.length - 1)
            $(".my_inp").val("")
            LocStor('set')
        }
    })

    $(".my_text").click(function () {

        if (my_words != null) {
            if (co <= my_words.length) {
                co++
                $(".my_text").text(my_words[co])
            }
            else {
                co = 0
                $(".my_text").text(my_words[0])
            }
        }
    })

    function DellDiv(coun) {

        $(".cell" + coun).remove()
        my_words.splice(coun, 1) //удаляем из масива по индексу
        LocStor('set')
    }

    function CopyTetxt(coun) {

        navigator.clipboard.writeText($(".cell" + coun).text()) // переносим текст в буфер обмена

        if (my_words[coun].match(/jpg|jpeg|png/) != null) { // если фото, то выводим
            $(".my_img").attr("src", my_words[coun])
            console.log(my_words[coun])
        }
    }

    function CreateCell(num) {

        if (my_words[num].match(/jpg|jpeg|png/) === null) { // проверка на фото

            $(".celss").append("<div id='cell' class='cell" + num + "'><div id='cell_text' onclick='CopyTetxt(" + num + ")' class='cell_text'> " + my_words[num] + " </div><img id='dell_but' onclick='DellDiv(" + num + ")' class='dell_but" + num + "' src='./img/dell.svg' alt=''></div>")
        }
        else {
            $(".celss").append("<div id='cell' class='cell" + num + "'><div id='cell_text' onclick='CopyTetxt(" + num + ")' class='cell_text'> " + 'photo' + " </div><img id='dell_but' onclick='DellDiv(" + num + ")' class='dell_but" + num + "' src='./img/dell.svg' alt=''></div>")
        }
    }

    function LocStor(name) {
        if (name == 'set') {
            localStorage.setItem(arrName[arrCo], my_words)
        }
        if (name == 'save') {
            my_words = localStorage.getItem(arrName[arrCo]).split(",")
        }
    }

    function StartArr() {

        if (localStorage.getItem(arrName[arrCo]) != null) { //создаем cells при загрузке страницы
            LocStor('save')

            for (i = 0; i < my_words.length; i++) {
                CreateCell(i)
            }

        }
    }

}

{

}