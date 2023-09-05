/////////////////////////////////////////////////////////////
// Get accessToken from localStorage
const accessToken = "Bearer " + localStorage.getItem("accessToken");

const headers = accessToken
  ? { "Content-Type": "application/json", Authorization: accessToken }
  : { "Content-Type": "application/json" };

/////////////////////////////////////////////////////////////
// Retrieving data from API. Retrieving data from API. Retrieving

type UseGetType = (
  url: string,
  params?: Record<string, string>
) => Promise<unknown>;

export const getApi: UseGetType = async (url, params) => {
  try {
    let response;

    if (params) {
      const query = new URLSearchParams(params);
      response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + url + "?" + query.toString()
      );
    } else {
      response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        method: "GET",
        headers: headers,
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

// Deleting data from API. Deleting data from API. Deleting D
/////////////////////////////////////////////////////////////
