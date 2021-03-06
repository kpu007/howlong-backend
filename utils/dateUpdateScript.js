const DateItem = require('../models/date')
const mongoose = require('mongoose')
const puppeteer = require('puppeteer-extra');
const Meta = require('../models/meta')
const config = require('../utils/config')

const targetUrl = config.TARGET_URI

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const updateDates = async () => {
  //Check if last updated time was less than 24h ago
  const meta = await Meta.findOne({})
  const lastUpdated = meta.lastUpdated
  const currentDate = new Date()

  const msDifference = Math.abs(lastUpdated - currentDate)
  const msPerDay = 1000 * 60 * 60 * 18

  if(msDifference < msPerDay) {
    console.log("Attempting to update too soon!")
    console.log("Last update was " + lastUpdated)
    console.log("Current time is " + currentDate)
    console.log("Please wait 18 hours before attempting another update.")
    return false
  }
  
  const attemptScraping = async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox','--disable-setuid-sandbox']
    })
    const page = await browser.newPage();
  
    console.log("connecting to site")
    await page.goto(targetUrl);
    console.log(targetUrl)
    console.log("connected to site")  

    let tds = await page.evaluate(() => {
      const tds = Array.from(document.querySelectorAll('td'))
      return tds.map(td => td.innerText)
    });

    //debug
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(tds)
    console.log(bodyHTML)

    if(tds.length == 0) {
      return false
    }

    for(let k = 0; k < tds.length; k += 2) {
      updateSpecificItem(tds[k], tds[k + 1])
    }

    await browser.close();
    return true
  }

  const success = await attemptScraping().catch((error) => console.log('error: ' + error))  

  if(success) {
    updateDate()
  }
  
  return true
}

const updateSpecificItem = async (itemName, dateString) => {
  const itemToUpdateArr = await DateItem.find({dateName: itemName})
  
  if(itemToUpdateArr.length == 0) {
    createSpecificItem(itemName, dateString)
  } else {
    const item = itemToUpdateArr[0]

    
    if (item.lastUpdated.valueOf() == new Date().setHours(0, 0, 0, 0).valueOf()) {
      console.log("Item " + itemName + " has already been updated today (" + item.lastUpdated + ")")
      return
    }

    //If the date is marked "complete" it's technically not moving
    let inputString = dateString

    if (dateString.localeCompare("COMPLETE") == 0) {
      inputString = item.dateArray[0].archivedDateValue.toString()
    }

    item.currentDate = inputString //mongoose casts this to date
    const newDate = new Date().setHours(0, 0, 0, 0)
    
    const archivePair = {
      archivedDateTime: newDate,
      archivedDateValue: inputString
    }

    item.dateArray.unshift(archivePair) //this is saved as a string, but it's converted back
    item.lastUpdated = newDate
    await item.save()

    console.log("Updated date for " + itemName)
  }

}

const createSpecificItem = async (itemName, dateString) => {
    const currentDate = new Date().setHours(0, 0, 0, 0)

    let item = new DateItem({
      dateName: itemName,
      currentDate: dateString,
      dateArray: [{
        archiveDateTime: currentDate,
        archiveDateValue: dateString
      }],
      lastUpdated: currentDate
    })
 
    await item.save()

    console.log("Created date for " + itemName + " (" + dateString + ")")
}

const updateDate = async () => {
  const currentDate = new Date()
  const meta = await Meta.findOne({})
  meta.lastUpdated = currentDate
  const savedMeta = await meta.save()
  console.log(savedMeta)
}

module.exports = { updateDates }