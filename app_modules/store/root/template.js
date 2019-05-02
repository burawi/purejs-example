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
            <a is="router-link" href='/store/${item.id}'>${item.name}</a>
          </td>
        </tr>
        `
    ).join("")
    }
    </table>
  `;

  return res;
};