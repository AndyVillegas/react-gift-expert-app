import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
describe('Pruebas en GifExpertApp', () => {
    test('debe de renderizar correctamente el componente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar una lista de categorías', () => {
        const categories = ['Naruto', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
