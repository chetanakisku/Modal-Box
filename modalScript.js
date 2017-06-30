var modalContainerId = document.getElementById('modalContainer');
console.log(modalContainerId);

var btnId = document.getElementById('modalBtn');
console.log(btnId);

btnId.onclick = function() {
    modalContainerId.style.display = 'block';
}

// btnId.addEventListener('click', function() {
//     modalContainerId.style.display = 'block';
// })



var closeBtn = document.getElementById('closeBtn');

closeBtn.onclick = function() {
    modalContainerId.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modalContainerId) {
        modalContainerId.style.display = "none";
    }
}