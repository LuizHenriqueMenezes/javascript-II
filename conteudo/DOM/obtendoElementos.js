function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    const contacts = document.querySelectorAll('#contact-list > li > label') // aqui é como se estivesse chamando no css, serve pra ser mais especfico
    console.log(contacts)

    const firstContact = document.querySelector('#contact-list > li > label') // a diferença desse pro outro, é que esse vai parar na primeira coisa que achar
    console.log(firstContact)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)


}