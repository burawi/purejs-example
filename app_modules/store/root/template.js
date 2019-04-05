export default data => {
  let res = /*html*/`
    <h1>Stores List</h1>
    <table>
      <tr>
        <th>Name</th>
      </tr>
      ${
    data.list.map(item => /*html*/`
        <tr>
          <td>
            <router-link to='/store/${item.id}'>${item.name}</router-link>
          </td>
        </tr>
        `
    ).join("")
    }
    </table>
  `;

  return res;
};