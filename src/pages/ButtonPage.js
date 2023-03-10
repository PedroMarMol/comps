import { GoBell, GoCloudDownload, GoDiff, GoDiffAdded } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
    return <div>
        <div>
            <Button primary outline rounded className="mb-5">
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

export default ButtonPage;