import { beforeAll, describe, expect, test } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils/e2e'

import { resolve, join } from 'path'
import useCountStore from '~/stores/count';

// Locate the screenshot dir
const ROOT_PATH = resolve(__dirname, 'screenshots')

const logger = console.log;

const counter = useCountStore()

describe('My test', async () => {
    beforeAll(() => {
        logger('beforeAll')
    })
    await setup({
        // test context options
    })

    test('my test', async () => {
        const page = await createPage()

        await page.goto('http://localhost:3000')
        // await page.screenshot({ path: join(ROOT_PATH, 'index-page0.png') })

        const button = page.getByTestId('btn')

        await button.click()
        await button.click()

        const incrementText = page.getByTestId('count')

        const text = await incrementText.innerText({ timeout: 1000 })
        logger("🚀 ~ test ~ incrementText: - ", text)

        expect(text).contains('2')



        // for store testing 
        const counter = useCountStore()

        logger("-< ", counter.count)

        expect(counter.count).toBe(0)

        // await page.screenshot({ path: join(ROOT_PATH, 'index-page1.png') })
    })

    // test('Store testing ', async () => {
    //     const page = await createPage()

    //     await page.goto('http://localhost:3000')
    //     // await page.screenshot({ path: join(ROOT_PATH, 'index-page0.png') })

    //     const button = page.getByTestId('btn')

    //     await button.click()

    //     const incrementText = page.getByTestId('count')

    //     const text = await incrementText.innerText({ timeout: 1000 })

    //     // for store testing 

    //     logger("-< ", counter.count)

    //     expect(counter.count).toBe(0)

    //     // await page.screenshot({ path: join(ROOT_PATH, 'index-page1.png') })
    // })
})

// you can access all the Playwright APIs from the `page` variable
