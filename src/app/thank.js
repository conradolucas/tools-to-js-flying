const speaker = 'Lucas';
const community = 'JSSP';
const company = 'ESX';

StyleSheet.init();


StyleSheet.create('body', `
      padding: 50px 0 0;
      color: #000;
      font-size: 30px;
      font-family: 'Lato', sans-serif;
      font-weight: bold;
      text-align: center;
    `);

StyleSheet.create('.entity', `
      color: #189ae6;
      font-weight: bold;
      text-align: center;
    `);


function buildThank(template, ...values) {
  return template.reduce((accumulator, part, i) => ` 
                ${accumulator}
                <span class="entity">${values[i - 1].toUpperCase()}</span>
                ${part}
            `);
}

const thank = buildThank`Oi :) sou o ${speaker} é uma honra pra mim estar aqui com voces do ${community} na ${company}!`;

document.body.innerHTML = thank;
