import { shallow } from "enzyme";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas en <RealExampleRef />', () => {
    
    const wrapper = shallow(<RealExampleRef></RealExampleRef>);
    test('Debe de mostrar el componente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar el componente', () => {

        // Simulamos un click en el boton del componente <RealExampleRef></RealExampleRef>
        // ya que al dar click, mostrara la información que ay dentro de 
        // <MultipleCustomHook></MultipleCustomHook>, por ello la necesidad de 
        // simular el click.
        wrapper.find('button').simulate('click');

        // Verificamos que si existe el componene <MultipleCustomHook></MultipleCustomHook>
        // nos muestre un true, eso significa que se simulo correctamente el click.
        // Esto a su vez significa que useRef funciona correctamente.
        expect( wrapper.find('MultipleCustomHook').exists()).toBe( true );    
    });
});
