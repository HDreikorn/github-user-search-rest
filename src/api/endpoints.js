const API_ENDPOINT = "https://api.github.com/search/users?";

export async function fetchSearchUsers(search, page) {
  const options = {
    method: "GET",
    accept: "application/vnd.github.v3+json",
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  };

  if (!search) return;

  let url = `${API_ENDPOINT}q=${search}&per_page=10&page=${page}`;

  const response = await fetch(url, options);
  const data = await response.json();
  console.log(response.headers.get("Link"));
  return data;
}
