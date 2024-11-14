const apiKey = "5796abbde9106b7da4febfae8c44c232";
const baseURL = "https://api.openweathermap.org/data/2.5";
const units = "metric";

interface IFetchDataPayload {
  url: string;
  params: Record<string, any>;
}

export const fetchData = async <T>({
  url,
  params,
}: IFetchDataPayload): Promise<T | null> => {
  try {
    const queryParams = Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    const response = await fetch(
      `${baseURL}/${url}?&appid=${apiKey}&units=${units}&${queryParams}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
