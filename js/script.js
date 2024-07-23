const text1 = "GET";
const text2 = "STARTED";
const speed = 50; 

function typeText(elementId, text, callback) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
            
        } else {
            element.style.borderRight = "none"; 
            if (callback) {
                callback();
            }
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", function() {
    typeText("text1", text1, function() {
        typeText("text2", text2, function() {
            document.getElementById("action-button").classList.remove("hidden");
        });
    });
});
