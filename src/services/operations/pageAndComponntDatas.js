import { catalogData } from "../apis";
import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";

export const getCatalogPageData = async (categoryId) => {
  const toastId = toast.loading("Loading...");
  let result = [];

  try {
    const response = await apiConnector(
      "POST",
      catalogData.CATALOGPAGEDATA_API,
      {
        categoryId: categoryId,
      }
    );

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Category page data.");
    }

    result = response?.data;
  } catch (error) {
    // ✅ Yeh line crash-proof hai
    console.log("CATALOGPAGEDATA_API API ERROR............", error.response?.data || error.message);
    console.log("Full error object:", error);

    toast.error(
      error.response?.data?.message ||
        "Something went wrong while fetching category page data"
    );

    result = {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }

  toast.dismiss(toastId);
  return result;
};
