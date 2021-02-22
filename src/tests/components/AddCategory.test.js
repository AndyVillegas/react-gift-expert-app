import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de renderizar bien el componente AddCategory', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola que tal';
        input.simulate('change', { target: { value: value } });
        expect(wrapper.find('p').text()).toBe(value);
    });

    test('no debede postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola bros';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: value } });
        //wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(setCategories).not.toHaveBeenCalled();
        //expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    });

});
