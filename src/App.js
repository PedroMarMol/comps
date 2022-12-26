import Button from './Button';

function App() {
    return <div>
        <div>
            <Button success rounded outline>Buy Now!</Button>
        </div>
        <div>
            <Button danger outline>Rent Now!</Button>
        </div>
        <div>
            <Button warning>See Deal!</Button>
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