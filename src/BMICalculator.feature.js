describe('BMI Converter', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    beforeEach(async () => {
        await page.reload();
    });

    describe('Metric method', () => {
        beforeEach( async () => {
            await page.type('input[name="weight"]', '95')
            await page.type('input[name="height"]', '186')
            await page.click('button[name="calculate"]')
        })

        it('Displays BMI result', async () => {
            await expect(page).toMatch('You are Overweight with a BMI of 27.46')
        })
    })
    
}); 