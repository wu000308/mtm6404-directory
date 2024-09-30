// 1. Create the list function
const list = (clients) => {
    return clients.map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
      </li>`).join('');
  };

// 2. Create the order function
const order = (clients, property) => {
    return [...clients].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  };

// 3. Create the total function
const total = (clients) => {
    return clients.reduce((accumulator, client) => accumulator + client.balance, 0);
  };

  // 4. Create the info function
const info = (index) => {
    return clients.find(client => client.index === index);
  }

// 5. Create the search function
const search = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerCaseQuery));
  };

