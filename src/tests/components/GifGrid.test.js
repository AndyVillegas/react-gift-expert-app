import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import {useFetchGifs} from '../../hooks/useFetchGifs'; 
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en gifgrid', () => {
    const category = 'Naruto';
    test('debe de hacer match con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostraar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url:'https://kk.com',
            title: 'Titulo',
        }];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
})
