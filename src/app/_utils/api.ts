/////////////////////////////////////////////////////////////
// Get accessToken from localStorage
const accessToken =
  typeof window !== "undefined" &&
  "Bearer " + window.localStorage.getItem("accessToken");

const headers = accessToken
  ? { "Content-Type": "application/json", Authorization: accessToken }
  : { "Content-Type": "application/json" };

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/////////////////////////////////////////////////////////////

/**
 * Checks if the response is ok, and throws an error if it is not.
 *
 * @param {object} response - The response object from the API request.
 * @throws {Error} Unauthorized - If the response status is 401.
 * @throws {Error} HTTP error! status: {status} - If the response status is not 401.
 */
function errorCheck(response) {
  if (!response.ok) {
    if (response.status === 401) {
      // window.location.href = "/home";
      throw new Error("Unauthorized");
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }
}

// Retrieving data from API. Retrieving data from API. Retrieving

type UseGetType = (
  url: string,
  params?: Record<string, string>
) => Promise<unknown>;

export const getApi: UseGetType = async (url, params) => {
  try {
    let response;

    // params must be an object not query
    if (params) {
      const query = new URLSearchParams(params);
      response = await fetch(API_URL + url + "?" + query.toString(), {
        method: "GET",
        headers: headers,
      });
    } else {
      response = await fetch(API_URL + url, {
        method: "GET",
        headers: headers,
      });
    }
    errorCheck(response);
    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

// Retrieving data from API. Retrieving data from API. Retrieving
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Sending data to API. Sending data to API. Sending data to

type postApiType = (
  url: string,
  body?: Record<string, unknown>
) => Promise<unknown>;

export const postApi: postApiType = async (url, body) => {
  try {
    const response = await fetch(API_URL + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    errorCheck(response);
    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

// Sending data to API. Sending data to API. Sending data to
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Updating data in API. Updating data in API. Updating dat U

type UsePutType = (
  url: string,
  body?: Record<string, unknown>
) => Promise<unknown>;

export const putApi: UsePutType = async (url, body) => {
  try {
    const response = await fetch(API_URL + url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    });

    errorCheck(response);

    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

// Updating data in API. Updating data in API. Updating dat U
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Deleting data from API. Deleting data from API. Deleting D

type UseDeleteType = (url: string) => Promise<unknown>;

export const deleteApi: UseDeleteType = async (
  url,
  headers = { "Content-Type": "application/json", Authorization: accessToken }
) => {
  try {
    const response = await fetch(API_URL + url, {
      method: "DELETE",
      headers: headers,
    });

    errorCheck(response);

    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

// Deleting data from API. Deleting data from API. Deleting D
/////////////////////////////////////////////////////////////
