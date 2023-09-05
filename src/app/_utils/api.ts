/////////////////////////////////////////////////////////////
// Retrieving data from API. Retrieving data from API. Retrieving

type UseGetType = (
  url: string,
  params?: Record<string, string>
) => Promise<unknown>;

export const useGet: UseGetType = async (url, params) => {
  try {
    let response;

    if (params) {
      const query = new URLSearchParams(params);
      response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + url + "?" + query.toString()
      );
    } else {
      response = await fetch(process.env.NEXT_PUBLIC_API_URL + url);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

// Retrieving data from API. Retrieving data from API. Retrieving
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Sending data to API. Sending data to API. Sending data to

type UsePostType = (
  url: string,
  body?: Record<string, unknown>,
  headers?: Record<string, string>
) => Promise<unknown>;

export const usePost: UsePostType = async (
  url,
  body,
  headers = { "Content-Type": "application/json" }
) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
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
  body?: Record<string, unknown>,
  headers?: Record<string, string>
) => Promise<unknown>;

export const usePut: UsePutType = async (
  url,
  body,
  headers = { "Content-Type": "application/json" }
) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

// Updating data in API. Updating data in API. Updating dat U
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Deleting data from API. Deleting data from API. Deleting D

type UseDeleteType = (
  url: string,
  headers?: Record<string, string>
) => Promise<unknown>;

export const useDelete: UseDeleteType = async (
  url,
  headers = { "Content-Type": "application/json" }
) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

// Deleting data from API. Deleting data from API. Deleting D
/////////////////////////////////////////////////////////////
