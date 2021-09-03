import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import HookApp from "../components/HookApp";

describe('Pruebas en el componente HookApp', ()=> {
    test('CUsar un snapShot ', () => {

        const wraper = shallow(<HookApp></HookApp>);

        expect( wraper ).toMatchSnapshot();
    });
}); 