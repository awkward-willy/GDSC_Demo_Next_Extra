import Status from "./Status";

const auth = process.env.GITHUB_API_KEY;

export async function getData(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const parseData = await dataFetch.json();
  return parseData;
};

export default async function Page() {
  const data = await getData("https://api.github.com/search/repositories?q=user:awkward-willy");
  return (
    <Status data={data.items} />
  );
};
