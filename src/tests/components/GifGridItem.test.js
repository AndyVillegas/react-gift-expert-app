import { GifGridItem } from './../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en GifGridItem', () => {
    const title = 'Un título';
    const url = 'https://media2.giphy.com/media/AYy9YYXHmsGek/giphy.gif?cid=1a00d25bln92geglm8h1fk0vxrfixyibp3fzn9lye38wnwny&rid=giphy.gif';
    const wrapper = shallow(
        <GifGridItem title={title} url={url} />
    );

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un div con el title', () => {
        const textP = wrapper.find('div>div').text();
        expect(textP).toBe(title);
    })

    test('debe de tener el alt igual al título y la url de las props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener la clase card', () => {
        const div = wrapper.find('div').at(0);
        expect(div.hasClass('card')).toBe(true);
        expect(div.prop('className')).toContain('card');
    });
})
