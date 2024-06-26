const API_LINK =
  "https://my-json-server.typicode.com/devHanif-git/greedbot-data";

export const GetYear = async () => {
  try {
    const res = await fetch(`${API_LINK}/year`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error("Fetching pool profit data failed:", error);

    return null; // or handle the error appropriately
  }
};

export const GetBatches = async () => {
  try {
    const res = await fetch(`${API_LINK}/batches`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error("Fetching pool profit data failed:", error);

    return null; // or handle the error appropriately
  }
};

export const GetPoolProfit = async () => {
  try {
    const res = await fetch(`${API_LINK}/pool-profit`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error("Fetching pool profit data failed:", error);

    return null; // or handle the error appropriately
  }
};

export const GetChartData = async () => {
  try {
    const res = await fetch(`${API_LINK}/chart-data`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error("Fetching chart data failed:", error);

    return null; // or handle the error appropriately
  }
};

export const GetTotalPool = async () => {
  try {
    const res = await fetch(`${API_LINK}/total-pool`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error("Fetching chart data failed:", error);

    return null; // or handle the error appropriately
  }
};
