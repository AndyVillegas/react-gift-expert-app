export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Wq1IjwGjIHVoB65YfTvlHsBOhgqP6oeL`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => ({
        id: id,
        title: title,
        url: images?.downsized.url
    }));
    return gifs;
}