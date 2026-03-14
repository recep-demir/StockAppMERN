import { useDispatch } from "react-redux";
import { 
  fetchFail, 
  fetchStart, 
  getProCatBrandSuccess, 
  stockSuccess, 
  getPurcBrandProSuccess, 
  getSalesBrandProSuccess 
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`);
      dispatch(stockSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //! Data silme, Delete
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      toastSuccessNotify(`${url} successfully deleted.`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
      // 403 Forbidden kontrolü
      if (error.response?.status === 403) {
        toastWarnNotify("You are not authorized to perform this deletion.");
      } else {
        toastErrorNotify(`${url} could not be deleted.`);
      }
    }
  };

  //! Data ekleme, Create
  const createStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(url, info);
      toastSuccessNotify(`${url} successfully added.`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
      if (error.response?.status === 403) {
        toastWarnNotify("You are not authorized to add new items.");
      } else {
        toastErrorNotify(`${url} could not be added.`);
      }
    }
  };

  //! Data güncelleme, Update
  const updateStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${info._id}`, info);
      toastSuccessNotify(`${url} successfully updated.`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
      if (error.response?.status === 403) {
        toastWarnNotify("You are not authorized to update this item.");
      } else {
        toastErrorNotify(`${url} could not be updated.`);
      }
    }
  };

  //! PROMISE ALL YAPILARI
  const getProCatBrand = async () => {
    dispatch(fetchStart());
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands"),
      ]);
      dispatch(
        getProCatBrandSuccess([
          products?.data?.data || [],
          categories?.data?.data || [],
          brands?.data?.data || [],
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getPurcBrandPro = async () => {
    dispatch(fetchStart());
    try {
      const [purchases, brands, products] = await Promise.all([
        axiosWithToken("purchases"),
        axiosWithToken("brands"),
        axiosWithToken("products"),
      ]);
      dispatch(
        getPurcBrandProSuccess([
          purchases?.data?.data || [],
          brands?.data?.data || [],
          products?.data?.data || [],
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getSalesBrandPro = async () => {
    dispatch(fetchStart());
    try {
      const [sales, brands, products] = await Promise.all([
        axiosWithToken("sales"),
        axiosWithToken("brands"),
        axiosWithToken("products"),
      ]);
      dispatch(
        getSalesBrandProSuccess([
          sales?.data?.data || [],
          brands?.data?.data || [],
          products?.data?.data || [],
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getStockData,
    deleteStockData,
    createStockData,
    updateStockData,
    getProCatBrand,
    getPurcBrandPro,
    getSalesBrandPro,
  };
};

export default useStockCall;