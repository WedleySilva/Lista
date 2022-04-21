function addTask() {
    const newTask = document.getElementsByClassName('new-task')[0].value 
    if (newTask ==='') {return}
    const $ul = document.getElementsByTagName('ul')[0]
    const $li = document.createElement('li')
    const $div = document.creatElement('div')
    $div.ClassName += 'checkbox'
    const $label = document.creatElement('label')
    const $input = document.creatElement('input')
    $input.className += 'task-item'
    $input.setAtibute('type', 'checkbox')
    $input.setAtibute('name', 'tarefa')
    $input.addEventListener('click', toggleRemoved)
    $label.appendChild($input)
    $label.appendChild(document.createTextNode(newTask))
    $div.appendChild($label)
    $li.appendChild($div)
    $ul.appendChild($li)
    document.getElementsByClassName('newTask')[0].value = ''

}

function toggleRemoved(e) {
    const $li = e.currentTarget.closest('li')
    $li.ClassList.toggle('removed')
}

document.getElementsByClassName('add-task')[0].addEventListener('click', addTask)

const tasks = document.getElementsByClassName('task-item')

Array.from(tasks).forEach(task => task.addEventListener('click', toggleRemoved))
