const BASE_URL = 'https://randomfox.ca/floof/';
const foxBtn = document.getElementById('change-fox');

const getfox = async () => {
        const data = await fetch (BASE_URL)
        .then(res=> res.json())
        .catch(e => console.log(e))
        
        return data.image;
    };

const loadImg = async () => {
    const foxImg = document.getElementById('fox')
    foxImg.src = await getfox();
};

foxBtn.addEventListener('click', loadImg);

loadImg();
