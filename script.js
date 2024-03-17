document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.value;
            
            switch (value) {
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch(error) {
                        display.value = 'Error';
                    }
                    break;
                case 'AC':
                    display.value = '';
                    break;
                case 'DE':
                    display.value = display.value.toString().slice(0, -1);
                    break;
                default:
                    display.value += value;
                    break;
            }
        });
    });
});
