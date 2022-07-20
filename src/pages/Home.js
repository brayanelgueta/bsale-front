import getData from "../utils/getData";

const Home = async () => {
  const products = await getData();
  const view = `
        <div class="Characters">
        ${products.data && products.data.map(
          (product) =>
            ` 
            <article class="Character-item">
                <a href="#/${product.product_id}/">
                <img src="${product.image}" alt="${product.product_name}">
                <h2>${product.product_name}</h2>
                </a>
            </article>
            `
        ).join('')}
        </div>
       
    `;
  return view;
};

export default Home;
