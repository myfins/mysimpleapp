async function loadContacts() {
  try {
    const res = await fetch('/api/getContacts');
    const contacts = await res.json();

    const tbody = document.querySelector('#contactsTable tbody');
    tbody.innerHTML = '';

    contacts.forEach(c => {
      const row = `
        <tr>
          <td>${c.Name}</td>
          <td>${c.email}</td>
          <td>${c.phone}</td>
        </tr>`;
      tbody.innerHTML += row;
    });
  } catch (err) {
    console.error('Failed to load contacts:', err);
  }
}

loadContacts();
