const panels = document.querySelectorAll('.panel');

const activeDuty = [
    {'id': 1, 'name': 'inferno', 'image': '/img/inferno.jpg'},
    {'id': 2, 'name': 'mirage', 'image': '/img/mirage.jpg'},
    {'id': 3, 'name': 'nuke', 'image': '/img/nuke.jpg'},
    {'id': 4, 'name': 'overpass', 'image': '/img/overpass.jpg'},
    {'id': 5, 'name': 'vertigo', 'image': '/img/vertigo.jpg'},
    {'id': 6, 'name': 'ancient', 'image': '/img/ancient.jpg'},
    {'id': 7, 'name': 'anubis', 'image': '/img/anubis.jpg'}
]

const activeDutyList = document.getElementById('activeDutyList');

const reserveDuty = [
    {'id': 8, 'name': 'dust2', 'image': '/img/dust2.jpg'},
    {'id': 9, 'name': 'train', 'image': '/img/train.jpg'},
    {'id': 10, 'name': 'cache', 'image': '/img/cache.jpg'},
    {'id': 11, 'name': 'grind', 'image': '/img/grind.jpg'},
    {'id': 12, 'name': 'mocha', 'image': '/img/mocha.jpg'}
]

const reserveDutyList = document.getElementById('reserveDutyList');

window.onload = () => {
    showMaps();
}

function showMaps() {
    showActiveDuty();
    showReserveDuty();
}

function showActiveDuty() {
    activeDutyList.innerHTML = activeDuty.map(map => `
        <div class="panel" style="background-image: url(${map.image})">
            <h3 class="map-name">${map.name}</h3>
        </div>
    `).join('');
}

function showReserveDuty() {
    reserveDutyList.innerHTML = reserveDuty.map(map => `
        <div class="panel" style="background-image: url(${map.image})">
            <h3 class="map-name">${map.name}</h3>
        </div>
    `).join('');
}