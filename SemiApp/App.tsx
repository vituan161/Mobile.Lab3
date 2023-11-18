import React from 'react';
import ProductList from './site_file/Product';
import AddProduct from './site_file/Product_Add';
import SearchProduct from './site_file/Product_Search';
import ProductDetail from './site_file/Product_Detail';
import {Text, BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Products = () => <ProductList />;
const Add = () => <AddProduct />;
const Search = () => <SearchProduct/>;
const Detail = () => <ProductDetail />;

function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'products', title: 'Products', focusedIcon: 'format-list-bulleted-square'},
    {key: 'add', title: 'Add', focusedIcon: 'plus'},
    {key: 'search', title: 'Search', focusedIcon: 'magnify'},
    {key: 'detail', title: 'Detail', focusedIcon: 'information'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    products: Products,
    add: Add,
    search: Search,
    detail: Detail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}

export default App;
