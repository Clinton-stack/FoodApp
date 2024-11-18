import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CatergordGrid from '../components/CatergordGrid'


function CategoriesScreen({ navigation }) {


function renderCategoryItem(itemData) {
    const onSelectHandler = () => {
        navigation.navigate('Meals', { categoryId: itemData.item.id })
        }
    return (
     <CatergordGrid title={itemData.item.title} color={itemData.item.color} onSelect={onSelectHandler}/>
    )
  }


  return (
    <FlatList  data={CATEGORIES} keyExtractor={(item) => item.id} renderItem= {renderCategoryItem} numColumns={2}/>
  )
}

export default CategoriesScreen