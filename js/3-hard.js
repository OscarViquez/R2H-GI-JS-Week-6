window.updateTheBackground = function (className) {
    const bodyElement = document.body.className;

    console.log(typeof bodyElement);
    if (document.body.className === '') {
        // There is no class, no adding a class
        document.body.classList.add(className);
    } else if (document.body.className === 'bg-red') {
        // The body has a class called "bg-red", removing it and adding new class');
        document.body.classList.remove('bg-red');
        document.body.classList.add(className);
    } else {
        // The body has a class called "bg-white", removing it and adding new class');
        document.body.classList.remove('bg-white');
        document.body.classList.add(className);
    }
}

