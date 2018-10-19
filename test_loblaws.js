import { Selector } from 'testcafe';

fixture `Opening Loblaws webpage`
    .page `https://www.loblaws.ca/`;

test('First test', async t => {
    //Extract the elements of GET STARTED SHOPPING WITH THESE ITEMS
    const getStartedPageExists = Selector('#container product-group-container')
    
    await t
    .expect(getStartedPageExists).ok();
    
});

test('Second test', async t => {
    //Extract the elements of the container 
    const fetchPrice = Selector('#owl-item active');
    console.log(fetchPrice);    
    //expect(fetchPrice.innerText).to.have.string("100");    
});



