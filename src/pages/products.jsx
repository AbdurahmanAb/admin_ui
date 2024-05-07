import { Helmet } from 'react-helmet-async';

// import { ProductsView } from 'src/sections/products/view';
import { UserView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <UserView title='Type' />
    </>
  );
}
