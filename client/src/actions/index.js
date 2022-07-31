import axios from "axios";

import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  POST_USER,
  POST_PRODUCT,
  PUT_PRODUCT,
  POST_BUSINESS,
  POST_LOGIN,
  POST_LOGINBUSINESS,
  GET_ALL_PRODUCTS_NAME,
  DELETE_PRODUCT,
  ORDER_BY_PRICE,
  GET_CATEGORIES,
  FILTER_BY_CATEGORY,
  SET_PRODUCT_DETAIL,
  CLEAN_USERS,
  CLEAN_BUSINESS,
  FILTER_BY_PROVINCE_CITY,
  GET_ALL_CITIES,
  GET_USERS,
  GET_ALL_PROVINCES,
  FILTER_BY_PROVINCES,
  GET_ALL_BUSINESS,
  FILTER_BY_BUSINESS,
  PUT_USER,
  PUT_BUSINESS,
  ADD_TRAVEL,
  GET_TRAVELS,
  FILTER_BY_CITIES,
  GET_ALL_BRANCHES,
  FILTER_BY_BRANCHES,
  FILTER_BY_BRANCHES_PROVINCES,
  SET_PRODUCTS,
  POST_PURCHASE,
  //Acciones del carrito (cart)
  ADD_TO_CART,
  INCREMENT_ONE_IN_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  GET_CART,

  //acciones sedes
  POST_BRANCH,
  DELETE_BRANCH,
  EDIT_BRANCH,


  //borrado lógico
  ACTIVATE_BUSINESS,
  ACTIVATE_USER,
  DESACTIVATE_BUSINESS,
  DESACTIVATE_USER,
  DELETE_BUSINESS,
  DELETE_USER

} from "./actionsTypes";

//Comienzan action PRODUCT
export const getAllProducts = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get('/product');
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProductsDetail = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/product/${id}`);
      return dispatch({
        type: GET_PRODUCTS_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProductsName = (name) => {
  return async function (dispatch) {
    try {
      const res = await axios(`//product?name=${name}`);
      return dispatch({
        type: GET_ALL_PRODUCTS_NAME,
        payload: res.data,
      });
    } catch (error) {
      alert("No se encontraron productos asociados");
    }
  };
};

export const setDetail = () => {
  return {
    type: SET_PRODUCT_DETAIL,
  };
};

export const setProduct = () => {
  return {
    type: SET_PRODUCTS,
  };
};

export const addProduct = (body) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(`/product`, body);
      return dispatch({
        type: POST_PRODUCT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProduct = (id, body) => {
  return async function (dispatch) {
    try {

      const res = await axios.put(`/product/${id}`, body);

      return dispatch({
        type: PUT_PRODUCT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteProduct = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/product/${id}`);
      return dispatch({
        type: DELETE_PRODUCT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//COMIENZA ORDENAMIENTO DE PRODUCTS

export const orderByPrice = (payload) => {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
};

//COMIENZA FILTROS DE PRODUCTS

export const getCategories = () => {
  return async function (dispatch) {

    const res = await axios.get("/category");


    return dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  };
};

export const filterByCategory = (payload) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload,
  };
};

export const getAllProvinces = () => {
  return async function (dispatch) {
    const res = await axios("/province");

    return dispatch({
      type: GET_ALL_PROVINCES,
      payload: res.data,
    });
  };
};

export const filterByProvinces = (payload) => {
  return {
    type: FILTER_BY_PROVINCES,
    payload,
  };
};

export const getAllBusiness = () => {
  return async function (dispatch) {
    const res = await axios("/business");
    return dispatch({
      type: GET_ALL_BUSINESS,
      payload: res.data,
    });
  };
};

export const filterByBusiness = (payload) => {
  return {
    type: FILTER_BY_BUSINESS,
    payload,
  };
};

export const getAllBranches = () => {
  return async function (dispatch) {

    const res = await axios('/businessbranch');
    return dispatch({
      type: GET_ALL_BRANCHES,
      payload: res.data,
    });
  };
};

export const filterByBranches = (payload) => {
  return {
    type: FILTER_BY_BRANCHES,
    payload,
  };
};

export const filterByBranchesProvince = (payload) => {
  return {
    type: FILTER_BY_BRANCHES_PROVINCES,
    payload,
  };
};

export const getAllCities = () => {
  return async function (dispatch) {

    const res = await axios("/city");

    return dispatch({
      type: GET_ALL_CITIES,
      payload: res.data,
    });
  };
};

export const filterByCities = (payload) => {
  return {
    type: FILTER_BY_CITIES,
    payload,
  };
};
export const filterByProvinceCity = (payload) => {
  return {
    type: FILTER_BY_PROVINCE_CITY,
    payload,
  };
};

//TERMINA ACTION PRODUCT
export const cleanUsers = () => {
  return { type: CLEAN_USERS };
};

export const cleanBusiness = () => {
  return { type: CLEAN_BUSINESS };
};
//COMIENZA ACTION USER

export const getUsers = () => {
  return async function (dispatch) {
    try {
      const res = await axios("/user");
      return dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (body) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(`/user/login`, body);
      return dispatch({
        type: POST_LOGIN,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUser = (body) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(`/user`, body);
      return dispatch({
        type: POST_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (id, body) => {
  return async function (dispatch) {
    try {

      const res = await axios.put(`/user/${id}`, body);

      return dispatch({
        type: PUT_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//COMIENZA ACTION BUSINESS

export function addBusiness(body) {
  return async function (dispatch) {
    try {

      let json = await axios.post(`/business`, body);

      return dispatch({
        type: POST_BUSINESS,
        payload: [json.data, body.email],
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postPurchase(body) {
  return async function (dispatch) {
    let res = await axios.post(`/api/purchase`, body);
    try {
      return dispatch({
        type: POST_PURCHASE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const loginBusiness = (body) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(`/business/login`, body);
      return dispatch({
        type: POST_LOGINBUSINESS,
        payload: [res.data, body.email],
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editBusiness = (id, body) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(`/business/${id}`, body);
      return dispatch({
        type: PUT_BUSINESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//post travel
export const addTravel = (body) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(
        `/travel`,
        body
      );
      return dispatch({
        type: ADD_TRAVEL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//get travels
export const getAllTravel = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `/travel`
      );
      return dispatch({
        type: GET_TRAVELS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function addToCart(productsDetail) {
  return {
    type: ADD_TO_CART,
    payload: productsDetail,
  };
}

//Disminuye en 1 la cantidad de un producto ya existente en el carrito. Si es 0, deberia eliminarlo del arreglo cart (recibe id)
export function removeOneFromCart(productId) {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: productId,
  };
}

// Elimina el producto del cart (recibe id)
export function removeAllFromCart(productId) {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: productId,
  };
}

//Elimina todos los productos del cart (recibe id)
export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export function getCart() {
  return {
    type: GET_CART,
  };
}

// agregar sede

export function postBranch(body) {
  return async function (dispatch) {
    try {
      const res = await axios.post(
        `/businessbranch`,
        body
      );
      return dispatch({
        type: POST_BRANCH,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//edit branch
export function editBranch(id, body) {
  return async function (dispatch) {
    try {
      const res = await axios.put(
        `/businessbranch/${id}`,
        body
      );
      return dispatch({
        type: EDIT_BRANCH,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//borrar sede
export const deleteBranch = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/businessbranch/${id}`);
      return dispatch({
        type: DELETE_BRANCH,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};


// desactivar cuenta usuario 
export const desactivateUser = (email) => {
  return async function (dispatch) {
    try {
      const body = { active: false };
      const res = await axios.put(`/api/user/${email}`, body);
      return dispatch({
        type: DESACTIVATE_USER,
        payload: res.data
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}

// activar cuenta usuario 
export const activateUser = (email) => {
  return async function (dispatch) {
    try {
      const body = { active: true };
      const res = await axios.put(`/api/user/${email}`, body);
      return dispatch({
        type: ACTIVATE_USER,
        payload: res.data
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}

// desactivar cuenta usuario 
export const desactivateBusiness = (email) => {
  return async function (dispatch) {
    try {
      const body = { active: false };
      const res = await axios.put(`/api/business/${email}`, body);
      return dispatch({
        type: DESACTIVATE_BUSINESS,
        payload: res.data
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}

// activar cuenta usuario 
export const activateBusiness = (email) => {
  return async function (dispatch) {
    try {
      const body = { active: true };
      const res = await axios.put(`/api/business/${email}`, body);
      return dispatch({
        type: ACTIVATE_BUSINESS,
        payload: res.data
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}

