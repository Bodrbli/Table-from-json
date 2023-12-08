'use strict'

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => json.forEach(render))

// !template      

      function render(user) {
            
            const bodyRow = document.querySelector('tbody');
            const row = document.createElement('tr');
            const columnName = document.createElement('td');
                  columnName.textContent = user.name;
                  row.append(columnName);
            const columnEmail = document.createElement('td');      
                  columnEmail.textContent = user.email;
                  row.append(columnEmail);
            const columnCity = document.createElement('td');      
                  columnCity.textContent = user.address.city;
                  row.append(columnCity);
            const columnPhone = document.createElement('td');      
                  columnPhone.textContent = user.phone;
                  row.append(columnPhone);
            const columnWebsite = document.createElement('td');
                  columnWebsite.textContent = user.website;
                  row.append(columnWebsite);
            const columnCompany = document.createElement('td');
                  columnCompany.textContent = user.company.name;
                  row.append(columnCompany);

            bodyRow.append(row);
      }

// template      

      /* function render(user) {
            
      const bodyRow = document.querySelector('tbody');
      const t = document.querySelector('#element-row');
      bodyRow.append(t.content.cloneNode(true));

      const columnName = t.content.querySelector('#name');
            columnName.textContent = user.name; 
      const columnWebsite = t.content.querySelector('#website');
            columnWebsite.textContent = user.website; 
      const columnEmail = t.content.querySelector('#mail');
            columnEmail.textContent = user.email;
      const columnCity = t.content.querySelector('#city');
            columnCity.textContent = user.address.city;
      const columnPhone = t.content.querySelector('#phone');
            columnPhone.textContent = user.phone;
      const columnCompany = t.content.querySelector('#company');
            columnCompany.textContent = user.company.name;
      } */






