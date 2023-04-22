import {monsters} from './monsters.js';

const monsters_user = document.querySelector('.monsters');


show_monster(monsters);
create_error_page();

function create_monster_div(monster) {
    const monster_div = document.createElement('div');
    monster_div.className = 'monster';
    const img = document.createElement('img');
    const id = monster.id;
    img.src = `https://robohash.org/${id}?set=set2`;
    img.alt = 'MD. Sakib Khan';
    const name = document.createElement('p');
    name.className = 'name';
    name.textContent = `${monster.name}`;
    const email = document.createElement('p');
    email.className = 'email';
    email.textContent = `${monster.email}`;
    monsters_user.appendChild(monster_div);
    monster_div.append(img, name, email);
}


function create_error_page() {
    let not_found = document.createElement('div');
    not_found.className = 'not-found p-5';
    not_found.style.display = 'none';
    const four_O_four = document.createElement('span');
    four_O_four.textContent = '404';
    const sar_thar = document.createElement('h1');
    sar_thar.textContent = '🧟‍♂️ No Monster Found 🧟‍♂️';
    not_found.append(four_O_four, sar_thar);
    monsters_user.appendChild(not_found);
}

function show_monster(monsters) {

    for (let monster of monsters) {
        create_monster_div(monster);
    }
}


const search = document.querySelector('.search__field');
const search_btn = document.querySelector('.search__btn');


search.addEventListener('keyup', function (e) {
    const search_value = e.target.value.toLowerCase();
    const monster_ary = document.querySelectorAll('.monster');

    let notFound = true;
    for (let mon of monster_ary) {
        const name = mon.children[1].textContent.toLowerCase();
        const email = mon.children[2].textContent.toLowerCase();
        if (name.includes(search_value) || email.includes(search_value)) {
            notFound = false;
            mon.style.display = 'block';

        } else {
            mon.style.display = 'none';

        }

    }
    if (notFound) {
        document.querySelector('.not-found').style.display = 'block';
    } else {
        document.querySelector('.not-found').style.display = 'none';
    }

});

