let buttons = document.querySelectorAll('button');
let res = "";
let resBox = document.querySelector('#res-box');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
            let input = e.target.innerHTML;
            try {

                switch (input) {
                    case '=':
                        res = eval(res);
                        break;
                    case 'AC':
                        res = "";
                        break;
                    case 'C':
                        res = res.slice(0, length - 1);
                        break;
                    case '.':
                        if (res.includes('.')) {
                            break;
                        }
                        else {

                            res = res + input;
                        }
                        break;
                    default:

                        if (input.charCodeAt(0) == 247) {
                            res = res + '/';
                        }
                        else if (input.charCodeAt(0) == 8730) {
                            res = Math.sqrt(res);

                        }

                        else if (input.charCodeAt(0) == 215) {
                            res = res + '*';

                        }

                        else {
                            res = res + input;
                        }
                        break;

                }
            } catch (error) {
                console.log(error)
            }
            finally {
                resBox.value = res;
            }
        })
    })

