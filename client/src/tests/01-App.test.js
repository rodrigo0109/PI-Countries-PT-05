import React from "react";
import { configure, shallow  } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

/* import Home from "../components/Home/Home.js"; */
import Activity from '../components/Activity/Activity.js'
import Countries from '../components/Countries/Countries'
import CountryDetail from '../components/Countries/CountryDetail.js'
import Nav from "../components/Nav/Nav";
import Landing from "../components/Landing/Landing.js";

configure({ adapter: new Adapter() });

describe("Home", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe("El componente Landing debe renderizar en la ruta /.", () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = shallow(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <Landing />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Landing)).toHaveLength(1);
    });
    it('No Debería renderizarse el Nav en la ruta "/"', () => {
      const wrapper = shallow(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <Landing />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Nav)).toHaveLength(0);
    });
  });


  it('Debería renderizarse Countries en la ruta /countries', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/countries"]}>
          <Countries />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(Countries)).toHaveLength(1);
  });

  it('Debería renderizarse CountryDetail en la ruta /countries/:id', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/countries/:id"]}>
          <CountryDetail />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(CountryDetail)).toHaveLength(1);
  });

  it('Debería renderizarse Activity en la ruta /activity', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/activity"]}>
          <Activity />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(Activity)).toHaveLength(1);
  });
  
  it('Debería renderizarse Nav en la ruta /activity', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/activity"]}>
          <Nav />
        </MemoryRouter>
      </Provider>
    );
  
    expect(wrapper.find(Nav)).toHaveLength(1);
  });
});


