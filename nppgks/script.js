window.onload = function() {
    var tbody = document.getElementById('my_table').getElementsByTagName('tbody')[0];
    

    var btn_add = document.getElementById('btn_add');
    btn_add.onclick = function () {
        var tr = tbody.insertRow(0)
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('Созданная строка'));
        td.colSpan = '3';
        tr.appendChild(td);
    };

    var btn_remove = document.getElementById('btn_remove');
    btn_remove.onclick = function () {
        var checkboxes = document.querySelectorAll("input[type='checkbox']");
        for(var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked == true) {
                var tr = checkboxes[i].parentNode.parentNode
                tbody.removeChild(tr)
            }
        }
    };

    var btn_copy = document.getElementById('btn_copy');
    btn_copy.onclick = function () {
        var checkboxes = document.querySelectorAll("input[type='checkbox']");
        for(var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked == true) {
                var tr = checkboxes[i].parentNode.parentNode
                var clone = tr.cloneNode(true)
                tbody.appendChild(clone)
            }
        }
    };

    var btn_draw = document.getElementById('btn_draw');
    btn_draw.onclick = function () {
        var selects = document.querySelectorAll("select");
        var checkboxes = document.querySelectorAll("input[type='checkbox']");
        for(var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked == true) {
                var tr = checkboxes[i].parentNode.parentNode
                select = tr.children[1].children[0]
                console.log(select)
                tr.style.backgroundColor = select.options[select.selectedIndex].text
            }
        }
    };
};