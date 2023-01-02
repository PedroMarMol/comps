import Button from './Button';
import { GoBell, GoCloudDownload, GoDiff, GoDiffAdded } from 'react-icons/go';

function App() {
    const handleClick = () => {
        console.log("You just clicked the button!");
    }
    return <div>
        <div>
            <Button primary outline rounded onClick={handleClick}>
                <GoBell />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button danger outline>
                <GoCloudDownload />
                Rent Now!
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDiffAdded />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary outline>Hide Ads!</Button>
        </div>
        <div>
            <Button primary rounded>Click me!</Button>
        </div>
    </div>;
}

export default App;