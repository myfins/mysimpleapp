async function loadContacts() {
  const response = await fetch("/api/getContacts");
  const contacts = await response.json();
  
  const tbody = document.querySelector("#contactsTable tbody");
  tbody.innerHTML = contacts.map(c => `
    <tr>
      <td>${c.name}</td>
      <td>${c.email}</td>
      <td>${c.phone}</td>
    </tr>
  `).join("");
}

loadContacts();
