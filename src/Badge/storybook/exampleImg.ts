// @ts-expect-error storybook imports images using webpacks (and file-loader) https://storybook.js.org/docs/configure/images-and-assets
import alexImg from './alex.png'
// @ts-expect-error storybook imports images using webpacks (and file-loader) https://storybook.js.org/docs/configure/images-and-assets
import oliverImg from './oliver.png'
// @ts-expect-error storybook imports images using webpacks (and file-loader) https://storybook.js.org/docs/configure/images-and-assets
import david from './david.png'

const exampleImgs = [alexImg, oliverImg, david]
const exampleImgNames = ["Alex", "Oliver", "David"]

export const getExampleImg = () => {
    const imgIndex = Math.floor(Math.random() * exampleImgs.length)
    
    return {
        src: exampleImgs[imgIndex],
        name: exampleImgNames[imgIndex]
    }
}