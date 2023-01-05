import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 'yeahas',
            label: 'Is this the third accordion item?',
            content: 'No it is not, it is the first one.'
        },
        {
            id: 'yeahasasdasd',
            label: 'Is this winter being too cold?',
            content: 'Not really, it is really hot.'
        },
        {
            id: 'yeahas12323',
            label: 'Is it too rainy nowadays?',
            content: 'It is raining, but not as much as I would wish.'
        }
    ];
    
    return <Accordion items={items} />;
}

export default AccordionPage;