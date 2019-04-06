export default data => {
  return /*html*/`
    <style>
      html {
        background-color: orange;
        color: white;
      }
    </style>
    <h1>${data.name}</h1>
    <p>We Inserted some style here</p>
  `
}